import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BUSINESS_ACTIVITIES,
  CONTACT_SUBJECTS,
  LOCAL_LEADS_STORAGE_KEY,
  PROSPECT_WEBHOOK_URL,
  buildProspectMailtoUrl,
  buildProspectPayload,
  formatFrenchPhone,
  getBusinessActivities,
  getContactSubjects,
  isValidCityOrPostalCode,
  isValidFrenchPhone,
  isValidFrenchPostalCode,
  isValidSwissOrEuropeanPhone,
  isValidSwissPostalCode,
  normalizeFrenchPhone,
  submitProspectLead,
  submitProspectToMakeWebhook,
  validateProspectForm,
  type StorageLike,
} from './prospect';
import { SMS_SINGLE_SEGMENT_MAX, computeSmsCampaignMetrics } from './smsUtils';

function createMemoryStorage(): StorageLike & { store: Map<string, string> } {
  const store = new Map<string, string>();
  return {
    store,
    getItem(key: string) {
      return store.get(key) ?? null;
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
  };
}

test('Swiss and French phone and NPA/PLZ/city validation work across standard formats', () => {
  assert.equal(normalizeFrenchPhone('06 76 36 90 59'), '0676369059');
  assert.equal(normalizeFrenchPhone('+33 6 76 36 90 59'), '0676369059');
  assert.equal(isValidSwissOrEuropeanPhone('+41 79 123 45 67'), true);
  assert.equal(isValidSwissOrEuropeanPhone('079 123 45 67'), true);
  assert.equal(isValidSwissOrEuropeanPhone('022 710 00 00'), true);
  assert.equal(isValidFrenchPhone('06.12.34.56.78'), true);
  assert.equal(isValidFrenchPhone('0712345678'), true);
  assert.equal(isValidFrenchPhone('12345'), false);

  assert.equal(formatFrenchPhone('+41791234567'), '+41 79 123 45 67');
  assert.equal(formatFrenchPhone('0676369059'), '06 76 36 90 59');

  assert.equal(isValidSwissPostalCode('1204'), true);
  assert.equal(isValidSwissPostalCode('8001'), true);
  assert.equal(isValidSwissPostalCode('69002'), false);
  assert.equal(isValidFrenchPostalCode('69002'), true);

  assert.equal(isValidCityOrPostalCode('1204'), true);
  assert.equal(isValidCityOrPostalCode('8001 Zürich'), true);
  assert.equal(isValidCityOrPostalCode('1204 Genève'), true);
  assert.equal(isValidCityOrPostalCode('69002'), true);
  assert.equal(isValidCityOrPostalCode('690'), false);
});

test('validateProspectForm enforces Step 1 (3 essential fields + nLPD/revDSG/FADP consent) and optional strict Step 2 details', () => {
  const invalidInput = {
    nom: '',
    commerce: '',
    code_postal: '120',
    email: 'mauvais-email',
    tel: '07912',
    metier: '',
    sujet: '',
    message: '',
    rgpdConsent: false,
  };

  for (const lang of ['fr', 'de', 'en'] as const) {
    // Step 1 express mode: requires commerce, code_postal, tel, rgpdConsent (and validates email if entered)
    const step1Errors = validateProspectForm(invalidInput, lang);
    assert.ok(step1Errors.commerce);
    assert.ok(step1Errors.code_postal);
    assert.ok(step1Errors.email);
    assert.ok(step1Errors.tel);
    assert.equal(step1Errors.metier, undefined);
    assert.equal(step1Errors.sujet, undefined);
    assert.ok(step1Errors.rgpdConsent);

    // Strict mode with requireDetails: also checks metier & sujet
    const strictErrors = validateProspectForm(invalidInput, lang, { requireDetails: true });
    assert.ok(strictErrors.metier);
    assert.ok(strictErrors.sujet);
  }

  // Valid Step 1 submission with ONLY the 3 essential fields + consent passes cleanly
  const expressValid = {
    nom: '',
    commerce: 'Boulangerie du Lac',
    code_postal: '1204 Genève',
    email: '',
    tel: '+41 79 123 45 67',
    metier: '',
    sujet: '',
    message: '',
    rgpdConsent: true,
  };
  assert.deepEqual(validateProspectForm(expressValid, 'fr'), {});
  assert.deepEqual(validateProspectForm(expressValid, 'de'), {});
  assert.deepEqual(validateProspectForm(expressValid, 'en'), {});

  assert.ok(validateProspectForm(invalidInput, 'de').rgpdConsent?.includes('revDSG'));
  assert.ok(validateProspectForm(invalidInput, 'en').rgpdConsent?.includes('FADP'));
});

test('buildProspectPayload and submitProspectLead send timestamped komero.ch JSON and support graceful local fallback', async () => {
  assert.equal(
    PROSPECT_WEBHOOK_URL,
    'https://hook.eu1.make.com/2qqcqy4tjhpbjlx3nge5ms3vh3rwyk1t'
  );
  assert.equal(BUSINESS_ACTIVITIES.length, 7);
  assert.equal(CONTACT_SUBJECTS.length, 6);
  assert.equal(getBusinessActivities('de').length, 7);
  assert.equal(getContactSubjects('en').length, 6);

  const fixedDate = new Date('2026-11-24T10:30:00.000Z');
  const input = {
    nom: ' Marc Rochat ',
    commerce: ' Boulangerie du Lac ',
    code_postal: ' 1204 Genève ',
    email: ' marc@boulangeriedulac.ch ',
    tel: '+41791234567',
    metier: 'Boulangerie-Pâtisserie',
    sujet: 'Demande de démo 5 min',
    message: ' Disponible entre 14h et 16h. ',
    rgpdConsent: true,
  };

  assert.deepEqual(validateProspectForm(input, 'fr'), {});

  const payload = buildProspectPayload(input, fixedDate, 'fr');
  assert.equal(payload.source, 'komero.ch');
  assert.equal(payload.langue, 'fr');
  assert.equal(payload.horodatage, '2026-11-24T10:30:00.000Z');
  assert.equal(payload.besoin, 'Demande de démo 5 min');
  assert.equal(payload.tel, '+41 79 123 45 67');
  assert.equal(payload.commerce, 'Boulangerie du Lac');
  assert.equal(payload.rgpd_consent, true);
  assert.ok(payload.message.includes('[Demande de démo 5 min]'));

  const mailto = buildProspectMailtoUrl(payload);
  assert.ok(mailto.startsWith('mailto:contact@komero.ch?subject='));
  assert.ok(decodeURIComponent(mailto).includes('Boulangerie du Lac'));

  // 1. Successful webhook POST
  let capturedUrl = '';
  let capturedInit: RequestInit | undefined;
  const mockFetch = (async (url: string | URL | Request, init?: RequestInit) => {
    capturedUrl = String(url);
    capturedInit = init;
    return new Response('Accepted', { status: 200 });
  }) as typeof fetch;

  const sent = await submitProspectLead(input, {
    webhookUrl: PROSPECT_WEBHOOK_URL,
    fetchImpl: mockFetch,
    now: fixedDate,
    lang: 'fr',
  });
  assert.equal(sent.status, 'sent');
  assert.equal(sent.ok, true);
  assert.equal(capturedUrl, 'https://hook.eu1.make.com/2qqcqy4tjhpbjlx3nge5ms3vh3rwyk1t');
  assert.equal(capturedInit?.method, 'POST');
  assert.deepEqual(capturedInit?.headers, { 'Content-Type': 'application/json' });
  assert.deepEqual(JSON.parse(String(capturedInit?.body)), payload);

  // 2. Fallback on HTTP error -> saves locally and returns prefilled mailto
  const storage = createMemoryStorage();
  const failingFetch = (async () => new Response('Server error', { status: 500 })) as typeof fetch;
  const fallbackOnError = await submitProspectLead(input, {
    webhookUrl: PROSPECT_WEBHOOK_URL,
    fetchImpl: failingFetch,
    storage,
    now: fixedDate,
    lang: 'fr',
  });
  assert.equal(fallbackOnError.status, 'fallback');
  assert.equal(fallbackOnError.ok, false);
  assert.equal(fallbackOnError.savedLocally, true);
  assert.ok(fallbackOnError.mailtoUrl.startsWith('mailto:contact@komero.ch'));
  const savedLeads = JSON.parse(storage.store.get(LOCAL_LEADS_STORAGE_KEY) || '[]');
  assert.equal(savedLeads.length, 1);
  assert.equal(savedLeads[0].commerce, 'Boulangerie du Lac');

  // 3. Fallback when webhook URL is not configured
  const unconfiguredResult = await submitProspectLead(input, {
    webhookUrl: '',
    fetchImpl: mockFetch,
    storage,
    now: fixedDate,
    lang: 'fr',
  });
  assert.equal(unconfiguredResult.status, 'fallback');
  assert.equal(unconfiguredResult.reason, 'webhook_unconfigured');
  assert.equal(unconfiguredResult.savedLocally, true);

  // 4. Backward-compatible strict wrapper rejects on HTTP 500
  await assert.rejects(
    () => submitProspectToMakeWebhook(input, PROSPECT_WEBHOOK_URL, failingFetch),
    /Webhook HTTP 500/
  );
});

test('computeSmsCampaignMetrics enforces 145-char budget with STOP compliance', () => {
  assert.equal(SMS_SINGLE_SEGMENT_MAX, 145);
  const metrics = computeSmsCampaignMetrics(
    'Boulangerie du Lac',
    'Il reste 8 paniers gourmands à -50 % jusqu’à 19h rue du Rhône ! Passez vite.',
    180
  );
  assert.ok(metrics.fullMessage.includes('STOP 36180'));
  assert.equal(metrics.isWithinLimit, true);
  assert.equal(metrics.segmentCount, 1);
  assert.equal(metrics.estimatedOpens, 171);
});
