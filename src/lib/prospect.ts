import { SITE_CONFIG, type Language } from '../config/siteConfig';

export const PROSPECT_WEBHOOK_URL: string = SITE_CONFIG.prospectWebhookUrl;
export const MAKE_WEBHOOK_URL: string = PROSPECT_WEBHOOK_URL;
export const LOCAL_LEADS_STORAGE_KEY = 'komero_ch_pending_leads_v1';

const BUSINESS_ACTIVITIES_BY_LANG: Record<Language, readonly string[]> = {
  fr: [
    'Boulangerie-Pâtisserie',
    'Coiffure / Beauté',
    'Restaurant / Café',
    'Caviste / Épicerie fine',
    'Prêt-à-porter / Déco',
    'Artisan / Services',
    'Autre commerce',
  ],
  de: [
    'Bäckerei / Konditorei',
    'Coiffeur / Beauty',
    'Restaurant / Café',
    'Weinhandlung / Feinkost',
    'Boutique / Deko',
    'Handwerk / Dienstleistung',
    'Anderes Geschäft',
  ],
  en: [
    'Bakery & Pastry',
    'Hair & Beauty',
    'Restaurant & Café',
    'Wine Shop & Deli',
    'Boutique & Home Décor',
    'Artisan & Services',
    'Other local shop',
  ],
};

export function getBusinessActivities(lang: Language = 'fr'): readonly string[] {
  return BUSINESS_ACTIVITIES_BY_LANG[lang];
}

export const BUSINESS_ACTIVITIES = BUSINESS_ACTIVITIES_BY_LANG.fr;

export type BusinessActivity = (typeof BUSINESS_ACTIVITIES)[number];

const CONTACT_SUBJECTS_BY_LANG: Record<Language, readonly string[]> = {
  fr: [
    'Demande de démo 5 min',
    'Diagnostic visibilité gratuit',
    'Formule Essentiel (19,90 CHF / mois)',
    'Formule Premium (49,90 CHF / mois)',
    'Question sur le Starter Pack Contacts',
    'Autre question',
  ],
  de: [
    '5-Min.-Demo anfragen',
    'Gratis Sichtbarkeits-Analyse',
    'Paket Basis (19,90 CHF / Monat)',
    'Paket Premium (49,90 CHF / Monat)',
    'Frage zum Starter Pack Kontakte',
    'Andere Frage',
  ],
  en: [
    'Request a 5-min demo',
    'Free local visibility check',
    'Essential Plan (19.90 CHF / month)',
    'Premium Plan (49.90 CHF / month)',
    'Question about the Contacts Starter Pack',
    'Other question',
  ],
};

export function getContactSubjects(lang: Language = 'fr'): readonly string[] {
  return CONTACT_SUBJECTS_BY_LANG[lang];
}

export const CONTACT_SUBJECTS = CONTACT_SUBJECTS_BY_LANG.fr;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export interface ProspectFormInput {
  nom: string;
  commerce: string;
  code_postal: string;
  email: string;
  tel: string;
  metier: string;
  sujet: string;
  message: string;
  rgpdConsent: boolean;
}

export interface ProspectWebhookPayload {
  horodatage: string;
  date_fr: string;
  source: 'komero.ch';
  langue: Language;
  besoin: string;
  nom: string;
  commerce: string;
  code_postal: string;
  email: string;
  tel: string;
  metier: string;
  message: string;
  rgpd_consent: boolean;
}

export type MakeWebhookPayload = ProspectWebhookPayload;

export interface ProspectValidationErrors {
  nom?: string;
  commerce?: string;
  code_postal?: string;
  email?: string;
  tel?: string;
  metier?: string;
  sujet?: string;
  rgpdConsent?: string;
}

export const EMPTY_PROSPECT_FORM: ProspectFormInput = {
  nom: '',
  commerce: '',
  code_postal: '',
  email: '',
  tel: '',
  metier: '',
  sujet: 'Demande de démo 5 min',
  message: '',
  rgpdConsent: false,
};

export function normalizePhoneNumber(raw: string): string {
  const compact = raw.replace(/[\s.\-()/]/g, '');
  if (compact.startsWith('00')) {
    return '+' + compact.slice(2);
  }
  return compact;
}

export function normalizeFrenchPhone(raw: string): string {
  const compact = raw.replace(/[\s.\-()]/g, '');
  if (compact.startsWith('+33') && compact.length === 12) {
    return '0' + compact.slice(3);
  }
  if (compact.startsWith('0033') && compact.length === 13) {
    return '0' + compact.slice(4);
  }
  return compact;
}

/**
 * Accepts Swiss mobile/landline (+41 / 0041 / 07x / 02x / 04x) as well as
 * French (+33 / 06 / 07) and standard European international phone formats.
 */
export function isValidSwissOrEuropeanPhone(raw: string): boolean {
  const compact = normalizePhoneNumber(raw);
  if (/^\+41[1-9]\d{8}$/.test(compact)) return true;
  if (/^\+33[1-9]\d{8}$/.test(compact)) return true;
  if (/^\+[1-9]\d{8,14}$/.test(compact)) return true;
  if (/^0[1-9]\d{8}$/.test(compact)) return true;
  return false;
}

export function isValidFrenchPhone(raw: string): boolean {
  return isValidSwissOrEuropeanPhone(raw);
}

export function formatFrenchPhone(raw: string): string {
  const trimmed = raw.trim();
  const compact = normalizePhoneNumber(trimmed);
  if (/^\+41[1-9]\d{8}$/.test(compact)) {
    const rest = compact.slice(3);
    return `+41 ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5, 7)} ${rest.slice(7, 9)}`;
  }
  const frNormalized = normalizeFrenchPhone(trimmed);
  if (/^0[1-9]\d{8}$/.test(frNormalized) && !trimmed.startsWith('+41')) {
    return frNormalized.replace(/(\d{2})(?=\d)/g, '$1 ').trim();
  }
  return trimmed;
}

/**
 * Accepts Swiss 4-digit NPA/PLZ (e.g. 1204, 8001), French 5-digit postal codes,
 * or city names / combined strings (e.g. "1204 Genève", "8001 Zürich", "Lausanne").
 */
export function isValidCityOrPostalCode(raw: string): boolean {
  const trimmed = raw.trim();
  if (/^\d{4,5}$/.test(trimmed)) return true;
  if (/^\d+$/.test(trimmed)) return false;
  return trimmed.length >= 2;
}

export function isValidSwissPostalCode(raw: string): boolean {
  return /^\d{4}$/.test(raw.trim());
}

export function isValidFrenchPostalCode(raw: string): boolean {
  return /^\d{5}$/.test(raw.trim());
}

export function isValidEmail(raw: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(raw.trim());
}

const VALIDATION_MESSAGES: Record<
  Language,
  {
    commerce: string;
    postalEmpty: string;
    postalInvalid: string;
    telEmpty: string;
    telInvalid: string;
    emailInvalid: string;
    metier: string;
    sujet: string;
    consent: string;
  }
> = {
  fr: {
    commerce: 'Indiquez le nom de votre commerce ou enseigne.',
    postalEmpty: 'Indiquez votre NPA ou votre ville (ex. 1204 Genève).',
    postalInvalid: 'Indiquez une ville ou un NPA suisse à 4 chiffres (ex. 1003).',
    telEmpty: 'Indiquez votre numéro de téléphone portable.',
    telInvalid: 'Format attendu : numéro suisse ou international (ex. +41 79 123 45 67).',
    emailInvalid: 'Vérifiez le format de votre adresse e-mail.',
    metier: "Sélectionnez votre secteur d'activité.",
    sujet: 'Sélectionnez le sujet ou la formule souhaitée.',
    consent:
      'Veuillez cocher cette case pour autoriser Komero à vous recontacter au sujet de votre demande (nLPD & RGPD).',
  },
  de: {
    commerce: 'Bitte geben Sie den Namen Ihres Geschäfts an.',
    postalEmpty: 'Bitte geben Sie Ihre PLZ oder Ihren Ort an (z. B. 8001 Zürich).',
    postalInvalid: 'Bitte geben Sie einen Ort oder eine 4-stellige Schweizer PLZ an (z. B. 8001).',
    telEmpty: 'Bitte geben Sie Ihre Mobilnummer an.',
    telInvalid: 'Erwartetes Format: Schweizer oder internationale Nummer (z. B. +41 79 123 45 67).',
    emailInvalid: 'Bitte prüfen Sie Ihre E-Mail-Adresse.',
    metier: 'Bitte wählen Sie Ihre Branche aus.',
    sujet: 'Bitte wählen Sie Ihr Anliegen oder gewünschtes Paket aus.',
    consent:
      'Bitte setzen Sie das Häkchen, damit Komero Sie bezüglich Ihrer Anfrage kontaktieren darf (revDSG & DSGVO).',
  },
  en: {
    commerce: 'Please enter your shop or business name.',
    postalEmpty: 'Please enter your postal code or city (e.g. 1204 Geneva).',
    postalInvalid: 'Please enter a city or a 4-digit Swiss postal code (e.g. 8001).',
    telEmpty: 'Please enter your mobile phone number.',
    telInvalid: 'Expected format: Swiss or international number (e.g. +41 79 123 45 67).',
    emailInvalid: 'Please check your email address format.',
    metier: 'Please select your business sector.',
    sujet: 'Please select your topic or preferred plan.',
    consent:
      'Please check this box to allow Komero to contact you regarding your request (Swiss FADP & GDPR).',
  },
};

export function validateProspectForm(
  input: ProspectFormInput,
  lang: Language = 'fr',
  options?: { requireDetails?: boolean }
): ProspectValidationErrors {
  const msg = VALIDATION_MESSAGES[lang];
  const errors: ProspectValidationErrors = {};

  if (input.commerce.trim().length < 2) {
    errors.commerce = msg.commerce;
  }

  if (!input.code_postal.trim()) {
    errors.code_postal = msg.postalEmpty;
  } else if (!isValidCityOrPostalCode(input.code_postal)) {
    errors.code_postal = msg.postalInvalid;
  }

  if (!input.tel.trim()) {
    errors.tel = msg.telEmpty;
  } else if (!isValidSwissOrEuropeanPhone(input.tel)) {
    errors.tel = msg.telInvalid;
  }

  if (input.email.trim() && !isValidEmail(input.email)) {
    errors.email = msg.emailInvalid;
  }

  if (options?.requireDetails) {
    if (!input.metier.trim()) {
      errors.metier = msg.metier;
    }

    if (!input.sujet.trim()) {
      errors.sujet = msg.sujet;
    }
  }

  if (!input.rgpdConsent) {
    errors.rgpdConsent = msg.consent;
  }

  return errors;
}

export function formatFrenchTimestamp(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}`;
}

export function buildProspectPayload(
  input: ProspectFormInput,
  now: Date = new Date(),
  lang: Language = 'fr'
): ProspectWebhookPayload {
  const subjectLabel = input.sujet.trim() || CONTACT_SUBJECTS_BY_LANG[lang][0];
  const rawMessage = input.message.trim();
  const formattedMessage = rawMessage ? `[${subjectLabel}] ${rawMessage}` : subjectLabel;

  const fallbackNotSpecified =
    lang === 'de' ? 'Nicht angegeben' : lang === 'en' ? 'Not specified' : 'Non précisé';

  return {
    horodatage: now.toISOString(),
    date_fr: formatFrenchTimestamp(now),
    source: 'komero.ch',
    langue: lang,
    besoin: subjectLabel,
    nom: input.nom.trim() || fallbackNotSpecified,
    commerce: input.commerce.trim(),
    code_postal: input.code_postal.trim(),
    email: input.email.trim(),
    tel: formatFrenchPhone(input.tel),
    metier: input.metier.trim() || fallbackNotSpecified,
    message: formattedMessage,
    rgpd_consent: Boolean(input.rgpdConsent),
  };
}

export const buildMakeWebhookPayload = buildProspectPayload;

export function buildProspectMailtoUrl(
  payload: ProspectWebhookPayload,
  recipientEmail: string = SITE_CONFIG.contactEmail
): string {
  const subject = encodeURIComponent(
    `[Komero CH] ${payload.besoin} — ${payload.commerce} (${payload.code_postal})`
  );
  const lines = [
    'Bonjour Komero Suisse,',
    '',
    'Voici ma demande envoyée depuis www.komero.ch :',
    `- Commerce : ${payload.commerce}`,
    `- Secteur : ${payload.metier}`,
    `- NPA / PLZ / Ville : ${payload.code_postal}`,
    `- Nom : ${payload.nom}`,
    `- Téléphone : ${payload.tel}`,
    `- Email : ${payload.email || '—'}`,
    `- Besoin : ${payload.besoin}`,
    `- Langue : ${payload.langue.toUpperCase()}`,
    `- Message : ${payload.message}`,
    `- Horodatage : ${payload.date_fr}`,
    `- Source : ${payload.source}`,
  ];
  return `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(lines.join('\n'))}`;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export function saveProspectLocally(
  payload: ProspectWebhookPayload,
  storage?: StorageLike | null
): boolean {
  const targetStorage =
    storage !== undefined
      ? storage
      : typeof window !== 'undefined' && window.localStorage
        ? window.localStorage
        : null;

  if (!targetStorage) return false;

  try {
    const existingRaw = targetStorage.getItem(LOCAL_LEADS_STORAGE_KEY);
    const parsed = existingRaw ? (JSON.parse(existingRaw) as ProspectWebhookPayload[]) : [];
    const list = Array.isArray(parsed) ? parsed : [];
    const nextList = [payload, ...list].slice(0, 20);
    targetStorage.setItem(LOCAL_LEADS_STORAGE_KEY, JSON.stringify(nextList));
    return true;
  } catch {
    return false;
  }
}

export interface ProspectSubmissionResult {
  status: 'sent' | 'fallback';
  ok: boolean;
  webhookUrl: string;
  payload: ProspectWebhookPayload;
  savedLocally: boolean;
  mailtoUrl: string;
  reason?: string;
}

function isConfiguredWebhookUrl(url: string): boolean {
  const trimmed = url.trim();
  return (
    /^https?:\/\//i.test(trimmed) &&
    !trimmed.includes('TON_URL_WEBHOOK') &&
    !trimmed.includes('A_COMPLETER')
  );
}

export async function submitProspectLead(
  input: ProspectFormInput,
  options?: {
    webhookUrl?: string;
    fetchImpl?: typeof fetch;
    storage?: StorageLike | null;
    now?: Date;
    lang?: Language;
  }
): Promise<ProspectSubmissionResult> {
  const webhookUrl = options?.webhookUrl ?? PROSPECT_WEBHOOK_URL;
  const fetchImpl = options?.fetchImpl ?? fetch;
  const lang = options?.lang ?? 'fr';
  const payload = buildProspectPayload(input, options?.now, lang);
  const mailtoUrl = buildProspectMailtoUrl(payload);

  if (!isConfiguredWebhookUrl(webhookUrl)) {
    const savedLocally = saveProspectLocally(payload, options?.storage);
    return {
      status: 'fallback',
      ok: false,
      webhookUrl,
      payload,
      savedLocally,
      mailtoUrl,
      reason: 'webhook_unconfigured',
    };
  }

  try {
    const response = await fetchImpl(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const savedLocally = saveProspectLocally(payload, options?.storage);
      return {
        status: 'fallback',
        ok: false,
        webhookUrl,
        payload,
        savedLocally,
        mailtoUrl,
        reason: `Webhook HTTP ${response.status}`,
      };
    }

    return {
      status: 'sent',
      ok: true,
      webhookUrl,
      payload,
      savedLocally: false,
      mailtoUrl,
    };
  } catch (err) {
    const savedLocally = saveProspectLocally(payload, options?.storage);
    return {
      status: 'fallback',
      ok: false,
      webhookUrl,
      payload,
      savedLocally,
      mailtoUrl,
      reason: err instanceof Error ? err.message : 'network_error',
    };
  }
}

export async function submitProspectToMakeWebhook(
  input: ProspectFormInput,
  webhookUrl: string = PROSPECT_WEBHOOK_URL,
  fetchImpl: typeof fetch = fetch
): Promise<ProspectSubmissionResult> {
  const result = await submitProspectLead(input, { webhookUrl, fetchImpl, storage: null });
  if (!result.ok) {
    throw new Error(result.reason || 'Webhook error');
  }
  return result;
}
