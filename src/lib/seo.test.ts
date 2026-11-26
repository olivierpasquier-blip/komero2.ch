import test from 'node:test';
import assert from 'node:assert/strict';
import {
  SUPPORTED_LANGUAGES,
  buildSiteConfig,
  getSubscriptionPortalAction,
  SITE_CONFIG,
} from '../config/siteConfig';
import {
  LEGAL_ENTITY,
  PAGE_SEO,
  PAGE_SEO_BY_LANG,
  SITE_ORIGIN,
  buildBreadcrumbJsonLd,
  buildCanonicalUrl,
  buildFaqJsonLd,
  buildHreflangAlternates,
  buildOrganizationJsonLd,
  buildSoftwareApplicationJsonLd,
  getRobotsDirective,
  normalizeRoutePath,
  type RoutePath,
} from './seo';
import {
  CGV_ARTICLES,
  CONFIDENTIALITE_SECTIONS,
  MENTIONS_LEGALES_SECTIONS,
  buildLegalContent,
} from '../data/legalContent';
import { ASSETS, getAdjacentFeatures } from '../data/komeroContent';

test('all 13 routes across FR, DE, and EN have SEO titles < 60 chars, descriptions < 155 chars, and clean /assets/ OG images', () => {
  const routes = Object.keys(PAGE_SEO) as RoutePath[];
  assert.equal(routes.length, 13);
  assert.equal(SITE_ORIGIN, 'https://www.komero.ch');

  for (const lang of SUPPORTED_LANGUAGES) {
    const seoMap = PAGE_SEO_BY_LANG[lang];
    assert.equal(Object.keys(seoMap).length, 13);

    for (const route of routes) {
      const meta = seoMap[route];
      assert.ok(
        meta.title.length >= 25 && meta.title.length < 60,
        `Title length out of bounds for [${lang}] ${route}: ${meta.title.length} ("${meta.title}")`
      );
      assert.ok(
        meta.description.length >= 100 && meta.description.length < 155,
        `Description length out of bounds for [${lang}] ${route}: ${meta.description.length} ("${meta.description}")`
      );
      assert.equal(
        meta.ogImage,
        '/assets/komero-og-1200x630.png',
        `Unexpected ogImage path on [${lang}] ${route}: ${meta.ogImage}`
      );
    }
  }

  for (const assetPath of Object.values(ASSETS)) {
    assert.ok(
      assetPath.startsWith('/assets/') &&
        !assetPath.includes('Capture_d__cran') &&
        !assetPath.includes('Screenshot_') &&
        !assetPath.includes('/aistudio/'),
      `Unoptimized asset path: ${assetPath}`
    );
  }
});

test('buildHreflangAlternates outputs fr-CH, de-CH, en-CH, and x-default for komero.ch', () => {
  const alternates = buildHreflangAlternates('/tarifs');
  assert.deepEqual(alternates, [
    { hreflang: 'fr-CH', href: 'https://www.komero.ch/tarifs' },
    { hreflang: 'de-CH', href: 'https://www.komero.ch/tarifs?lang=de' },
    { hreflang: 'en-CH', href: 'https://www.komero.ch/tarifs?lang=en' },
    { hreflang: 'x-default', href: 'https://www.komero.ch/tarifs' },
  ]);
});

test('normalizeRoutePath resolves all routes, legacy aliases, and falls back to /', () => {
  assert.equal(normalizeRoutePath('/avis-google-ia/'), '/avis-google-ia');
  assert.equal(normalizeRoutePath('/repondeur-sms/'), '/repondeur-sms');
  assert.equal(normalizeRoutePath('/repondeur-sms-whatsapp/'), '/repondeur-sms');
  assert.equal(normalizeRoutePath('/assistant-whatsapp-appel-manque'), '/repondeur-sms');
  assert.equal(normalizeRoutePath('/tarifs/'), '/tarifs');
  assert.equal(normalizeRoutePath('/commander'), '/tarifs');
  assert.equal(normalizeRoutePath('/roue-de-la-chance/'), '/roue-de-la-chance');
  assert.equal(normalizeRoutePath('/roue-de-la-fortune'), '/roue-de-la-chance');
  assert.equal(normalizeRoutePath('/informations-legales'), '/informations-legales');
  assert.equal(normalizeRoutePath('/mentions-legales'), '/mentions-legales');
  assert.equal(normalizeRoutePath('/cgv'), '/cgv');
  assert.equal(normalizeRoutePath('/confidentialite'), '/confidentialite');
  assert.equal(normalizeRoutePath('/contact'), '/contact');
  assert.equal(normalizeRoutePath('/inexistant'), '/');
});

test('SoftwareApplication JSON-LD contains 19.90 and 49.90 CHF plans pointing to https://www.komero.ch/tarifs', () => {
  for (const lang of SUPPORTED_LANGUAGES) {
    const schema = buildSoftwareApplicationJsonLd(lang);
    assert.equal(schema['@type'], 'SoftwareApplication');
    assert.equal(schema.name, 'Komero');
    assert.equal(schema.applicationCategory, 'BusinessApplication');
    assert.equal(schema.url, 'https://www.komero.ch/');
    assert.equal(schema.offers.length, 2);
    assert.equal(schema.offers[0].price, '19.90');
    assert.equal(schema.offers[0].priceCurrency, 'CHF');
    assert.equal(schema.offers[1].price, '49.90');
    assert.equal(schema.offers[1].priceCurrency, 'CHF');
    assert.equal(schema.offers[0].url, 'https://www.komero.ch/tarifs');
    assert.equal(schema.offers[1].url, 'https://www.komero.ch/tarifs');
    assert.ok(Array.isArray(schema.inLanguage));
    assert.ok(schema.inLanguage.includes('fr-CH'));
    assert.ok(schema.inLanguage.includes('de-CH'));
    assert.ok(schema.inLanguage.includes('en-CH'));
    assert.ok(!JSON.stringify(schema).toLowerCase().includes('whatsapp'));
    assert.ok(!JSON.stringify(schema).toLowerCase().includes('fortune'));
    assert.ok(!JSON.stringify(schema).toLowerCase().includes('komero.fr'));
  }
});

test('LocalBusiness JSON-LD, siteConfig overrides, Swiss nLPD/revDSG/FADP legal content, and Stripe portal stay aligned', () => {
  const org = buildOrganizationJsonLd('fr');
  assert.equal(org.name, 'Komero');
  assert.equal(org.url, 'https://www.komero.ch/');
  assert.equal(org.logo, 'https://www.komero.ch/assets/komero-icon.png');
  assert.equal(org.image, 'https://www.komero.ch/assets/komero-og-1200x630.png');
  assert.equal(org.email, 'contact@komero.ch');
  assert.equal(org.telephone, '+33676369059');
  assert.deepEqual(org.inLanguage, ['fr-CH', 'de-CH', 'en-CH']);
  assert.equal(org.address.streetAddress, SITE_CONFIG.legalAddress);
  assert.equal(org.address.postalCode, '69110');
  assert.equal(org.address.addressLocality, 'Sainte-Foy-lès-Lyon');
  assert.ok(JSON.stringify(org.areaServed).includes('Suisse'));

  assert.equal(LEGAL_ENTITY.contactEmail, 'contact@komero.ch');
  assert.equal(LEGAL_ENTITY.phoneDisplay, '+33 6 76 36 90 59');
  assert.ok(
    MENTIONS_LEGALES_SECTIONS[0].bullets?.some(
      (b) => b.includes('contact@komero.ch') && !b.includes('info@komero.ch')
    )
  );
  assert.equal(CGV_ARTICLES.length, 8);
  assert.ok(CGV_ARTICLES[2].paragraphs.join(' ').includes('19,90 CHF'));
  assert.ok(CGV_ARTICLES[2].paragraphs.join(' ').includes('49,90 CHF'));
  assert.ok(CGV_ARTICLES[2].paragraphs.join(' ').includes('7 jours d’essai gratuit'));
  assert.ok(!CGV_ARTICLES[2].paragraphs.join(' ').includes('30 jours'));
  assert.ok(!CGV_ARTICLES[2].paragraphs.join(' ').includes('1er mois'));
  assert.equal(CGV_ARTICLES[3].includePortalAction, true);
  assert.ok(CGV_ARTICLES[7].paragraphs.join(' ').includes('Tribunal de commerce de Lyon'));
  assert.ok(
    MENTIONS_LEGALES_SECTIONS[0].bullets?.some((b) => b.includes("SIRET en cours d'attribution"))
  );
  assert.ok(
    MENTIONS_LEGALES_SECTIONS[1].bullets?.some((b) =>
      b.includes('2 rue Kellermann, 59100 Roubaix')
    )
  );
  assert.ok(CONFIDENTIALITE_SECTIONS.some((s) => s.paragraphs.join(' ').includes('nLPD')));

  // Verify German (revDSG) and English (FADP) legal documents include CHF pricing & local privacy laws
  const legalDe = buildLegalContent(SITE_CONFIG, 'de');
  assert.equal(legalDe.cgvArticles.length, 8);
  assert.ok(legalDe.cgvArticles[2].paragraphs.join(' ').includes('19,90 CHF'));
  assert.ok(legalDe.cgvArticles[2].paragraphs.join(' ').includes('49,90 CHF'));
  assert.ok(legalDe.confidentialite.some((s) => s.paragraphs.join(' ').includes('revDSG')));

  const legalEn = buildLegalContent(SITE_CONFIG, 'en');
  assert.equal(legalEn.cgvArticles.length, 8);
  assert.ok(legalEn.cgvArticles[2].paragraphs.join(' ').includes('19.90 CHF'));
  assert.ok(legalEn.cgvArticles[2].paragraphs.join(' ').includes('49.90 CHF'));
  assert.ok(legalEn.confidentialite.some((s) => s.paragraphs.join(' ').includes('FADP')));

  // Verify env var overrides propagate cleanly into legal documents & Stripe portal helper
  const customConfig = buildSiteConfig({
    VITE_LEGAL_ENTITY_NAME: 'Komero SAS',
    VITE_LEGAL_SIRET: '987 654 321 00012',
    VITE_LEGAL_ADDRESS: '10 rue de la République, 69002 Lyon',
    VITE_LEGAL_HOST: 'OVH SAS, 2 rue Kellermann, 59100 Roubaix, France',
    VITE_VAT_MENTION: 'TVA suisse applicable',
    VITE_STRIPE_PORTAL_URL: 'https://billing.stripe.com/p/login/test_komero_ch',
  });
  const customLegal = buildLegalContent(customConfig, 'fr');
  assert.ok(customLegal.mentionsLegales[0].bullets?.some((b) => b.includes('987 654 321 00012')));
  assert.ok(
    customLegal.cgvArticles[2].paragraphs.join(' ').includes('TVA suisse applicable')
  );

  // When VITE_STRIPE_PORTAL_URL is configured -> external Stripe portal
  const portalAction = getSubscriptionPortalAction(customConfig, 'fr');
  assert.equal(portalAction.isExternalPortal, true);
  assert.equal(portalAction.href, 'https://billing.stripe.com/p/login/test_komero_ch');
  assert.equal(portalAction.email, 'contact@komero.ch');

  // When VITE_STRIPE_PORTAL_URL is empty -> graceful fallback to mailto:contact@komero.ch
  const portalDefault = getSubscriptionPortalAction(SITE_CONFIG, 'de');
  assert.equal(portalDefault.isExternalPortal, false);
  assert.ok(portalDefault.href.startsWith('mailto:contact@komero.ch'));
  assert.ok(portalDefault.notice.includes('contact@komero.ch'));
});

test('getAdjacentFeatures cycles cleanly through the 5 feature pages in all languages', () => {
  for (const lang of SUPPORTED_LANGUAGES) {
    const first = getAdjacentFeatures('/avis-google-ia', lang);
    assert.equal(first.previous.path, '/veille-concurrence');
    assert.equal(first.next.path, '/reseaux-sociaux');

    const last = getAdjacentFeatures('/veille-concurrence', lang);
    assert.equal(last.previous.path, '/campagnes-sms-flash');
    assert.equal(last.next.path, '/avis-google-ia');
  }
});

test('FAQPage and BreadcrumbList JSON-LD build valid structured items with https://www.komero.ch', () => {
  const faq = buildFaqJsonLd([
    { id: 'q1', question: 'Est-ce sans engagement ?', answer: 'Oui, résiliable en 1 clic.' },
  ]);
  assert.equal(faq['@type'], 'FAQPage');
  assert.equal(faq.mainEntity.length, 1);

  const crumb = buildBreadcrumbJsonLd('/tarifs', 'https://www.komero.ch', 'de');
  assert.equal(crumb.itemListElement.length, 2);
  assert.equal(crumb.itemListElement[0].name, 'Startseite');
  assert.equal(crumb.itemListElement[0].item, 'https://www.komero.ch/');
  assert.equal(crumb.itemListElement[1].name, 'Preise in CHF');
  assert.equal(
    crumb.itemListElement[1].item,
    buildCanonicalUrl('/tarifs', 'https://www.komero.ch')
  );
});

test('getRobotsDirective sets noindex, follow only on duplicate legal tabs and index, follow elsewhere', () => {
  assert.equal(getRobotsDirective('/mentions-legales'), 'noindex, follow');
  assert.equal(getRobotsDirective('/cgv'), 'noindex, follow');
  assert.equal(getRobotsDirective('/confidentialite'), 'noindex, follow');

  const indexableRoutes: RoutePath[] = [
    '/',
    '/avis-google-ia',
    '/reseaux-sociaux',
    '/repondeur-sms',
    '/campagnes-sms-flash',
    '/veille-concurrence',
    '/roue-de-la-chance',
    '/tarifs',
    '/contact',
    '/informations-legales',
  ];

  for (const route of indexableRoutes) {
    assert.equal(
      getRobotsDirective(route),
      'index, follow',
      `Expected index, follow for ${route}`
    );
  }
});
