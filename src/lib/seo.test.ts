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
  PRERENDER_ROUTES,
  buildStaticSeoHeadHtml,
  injectPrerenderedHtml,
} from './prerenderUtils';
import {
  CGV_ARTICLES,
  CONFIDENTIALITE_SECTIONS,
  MENTIONS_LEGALES_SECTIONS,
  buildLegalContent,
} from '../data/legalContent';
import { ASSETS, getAdjacentFeatures } from '../data/komeroContent';
import { TRANSLATIONS } from '../i18n/translations';
import { MOCKUP_TRANSLATIONS } from '../i18n/mockupTranslations';

test('all 14 routes across FR, DE, and EN have SEO titles < 60 chars, descriptions < 155 chars, and clean /assets/ OG images', () => {
  const routes = Object.keys(PAGE_SEO) as RoutePath[];
  assert.equal(routes.length, 14);
  assert.equal(SITE_ORIGIN, 'https://www.komero.ch');

  for (const lang of SUPPORTED_LANGUAGES) {
    const seoMap = PAGE_SEO_BY_LANG[lang];
    assert.equal(Object.keys(seoMap).length, 14);

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
  assert.equal(normalizeRoutePath('/gestion-fiche-google/'), '/gestion-fiche-google');
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
  assert.ok(CGV_ARTICLES[1].bullets?.some((b) => b.includes('Gestion de votre Fiche Google')));
  assert.ok(CGV_ARTICLES[1].bullets?.some((b) => b.includes('Audit de complétude')));
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

  // Verify German (revDSG) and English (FADP) legal documents include CHF pricing, Google Profile & local privacy laws
  const legalDe = buildLegalContent(SITE_CONFIG, 'de');
  assert.equal(legalDe.cgvArticles.length, 8);
  assert.ok(
    legalDe.cgvArticles[1].bullets?.some((b) => b.includes('Google-Unternehmensprofils'))
  );
  assert.ok(legalDe.cgvArticles[1].bullets?.some((b) => b.includes('Vollständigkeits-Audit')));
  assert.ok(legalDe.cgvArticles[2].paragraphs.join(' ').includes('19,90 CHF'));
  assert.ok(legalDe.cgvArticles[2].paragraphs.join(' ').includes('49,90 CHF'));
  assert.ok(legalDe.confidentialite.some((s) => s.paragraphs.join(' ').includes('revDSG')));

  const legalEn = buildLegalContent(SITE_CONFIG, 'en');
  assert.equal(legalEn.cgvArticles.length, 8);
  assert.ok(
    legalEn.cgvArticles[1].bullets?.some((b) => b.includes('Google Business Profile management'))
  );
  assert.ok(legalEn.cgvArticles[1].bullets?.some((b) => b.includes('Completeness audit')));
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
    '/gestion-fiche-google',
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

test('SSG prerendering generates unique head SEO, hreflang, CHF JSON-LD, FAQPage, and body markup for all 15 public routes', () => {
  assert.equal(PRERENDER_ROUTES.length, 15);
  assert.ok(PRERENDER_ROUTES.some((r) => r.urlPath === '/gestion-fiche-google'));
  assert.ok(PRERENDER_ROUTES.some((r) => r.urlPath === '/repondeur-sms-whatsapp'));

  const baseTemplate = `<!doctype html>
<html lang="fr-CH">
  <head>
    <title>Default</title>
    <meta name="description" content="Default desc" />
    <link rel="canonical" href="https://www.komero.ch/" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  const homeHtml = injectPrerenderedHtml(baseTemplate, '/', '<main><h1>Komero Suisse</h1></main>', 'fr');
  assert.ok(homeHtml.includes('<html lang="fr-CH">'));
  assert.ok(homeHtml.includes('<link rel="canonical" href="https://www.komero.ch/" />'));
  assert.ok(homeHtml.includes('hreflang="fr-CH"'));
  assert.ok(homeHtml.includes('hreflang="de-CH"'));
  assert.ok(homeHtml.includes('hreflang="en-CH"'));
  assert.ok(homeHtml.includes('hreflang="x-default"'));
  assert.ok(homeHtml.includes('"priceCurrency":"CHF"'));
  assert.ok(homeHtml.includes('"@type":"FAQPage"'));
  assert.ok(homeHtml.includes('<div id="root"><main><h1>Komero Suisse</h1></main></div>'));

  const gbpHead = buildStaticSeoHeadHtml('/gestion-fiche-google', 'de');
  assert.equal(gbpHead.htmlLang, 'de-CH');
  assert.ok(gbpHead.headMarkup.includes('https://www.komero.ch/gestion-fiche-google'));
  assert.ok(gbpHead.headMarkup.includes('"priceCurrency":"CHF"'));
});

test('all FR/DE/EN translations and mockups exclude beta/pilot mentions and Jean D., and use Camille R., Lukas M., Elena V. with discreet preview labels', () => {
  const forbiddenPatterns = [
    /pilote\s+suisse/i,
    /commerçant\s+pilote/i,
    /pilot-geschäft/i,
    /pilot\s+schweiz/i,
    /pilotbetrieb/i,
    /pilot\s+shop/i,
    /pilot\s+merchant/i,
    /switzerland\s+pilot/i,
    /bêta-?test/i,
    /beta\s+test/i,
    /jean\s+d\./i,
  ];

  const serializedTranslations = JSON.stringify(TRANSLATIONS);
  const serializedMockups = JSON.stringify(MOCKUP_TRANSLATIONS);

  for (const pattern of forbiddenPatterns) {
    assert.ok(
      !pattern.test(serializedTranslations),
      `Forbidden wording matched ${pattern} in TRANSLATIONS`
    );
    assert.ok(
      !pattern.test(serializedMockups),
      `Forbidden wording matched ${pattern} in MOCKUP_TRANSLATIONS`
    );
  }

  assert.ok(TRANSLATIONS.fr.home.fieldCasesKicker.includes('Exemples d’usage en boutique'));
  assert.ok(TRANSLATIONS.de.home.fieldCasesKicker.includes('Beispiele aus dem Alltag'));
  assert.ok(TRANSLATIONS.en.home.fieldCasesKicker.includes('Real-world shop examples'));

  assert.equal(TRANSLATIONS.fr.deviceFrames.pcCaptionTag, 'Aperçu de l’interface');
  assert.equal(TRANSLATIONS.de.deviceFrames.pcCaptionTag, 'Vorschau');
  assert.equal(TRANSLATIONS.en.deviceFrames.pcCaptionTag, 'Interface preview');

  assert.equal(MOCKUP_TRANSLATIONS.fr.hero.previewBadge, 'Aperçu de l’interface');
  assert.equal(MOCKUP_TRANSLATIONS.de.hero.previewBadge, 'Vorschau');
  assert.equal(MOCKUP_TRANSLATIONS.en.hero.previewBadge, 'Interface preview');

  for (const lang of SUPPORTED_LANGUAGES) {
    const scenarios = MOCKUP_TRANSLATIONS[lang].googleReviews.scenarios;
    assert.deepEqual(
      scenarios.map((s) => s.author),
      ['Camille R.', 'Lukas M.', 'Elena V.']
    );
    assert.ok(scenarios.every((s) => s.rating === 5));
  }
});
