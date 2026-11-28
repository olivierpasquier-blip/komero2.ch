import {
  HTML_LANG_BY_LANGUAGE,
  SITE_CONFIG,
  type Language,
} from '../config/siteConfig';

export type RoutePath =
  | '/'
  | '/gestion-fiche-google'
  | '/avis-google-ia'
  | '/reseaux-sociaux'
  | '/repondeur-sms'
  | '/campagnes-sms-flash'
  | '/veille-concurrence'
  | '/roue-de-la-chance'
  | '/tarifs'
  | '/contact'
  | '/informations-legales'
  | '/mentions-legales'
  | '/cgv'
  | '/confidentialite';

export type FeatureRoutePath =
  | '/avis-google-ia'
  | '/reseaux-sociaux'
  | '/repondeur-sms'
  | '/campagnes-sms-flash'
  | '/veille-concurrence';

export interface PageSeoMeta {
  path: RoutePath;
  title: string;
  description: string;
  ogImage: string;
  breadcrumbLabel: string;
  keywords: string[];
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const SITE_ORIGIN = SITE_CONFIG.siteUrl;
export const CONTACT_PHONE_DISPLAY = SITE_CONFIG.contactPhoneDisplay;
export const CONTACT_PHONE_E164 = SITE_CONFIG.contactPhoneE164;
export const CONTACT_EMAIL = SITE_CONFIG.contactEmail;

export const LEGAL_ENTITY = {
  brandName: SITE_CONFIG.brandName,
  legalStatus: SITE_CONFIG.legalEntityName,
  director: SITE_CONFIG.legalDirector,
  siretMention: SITE_CONFIG.legalSiret,
  address: SITE_CONFIG.legalAddress,
  city: SITE_CONFIG.legalCity,
  postalCode: SITE_CONFIG.legalPostalCode,
  jurisdiction: SITE_CONFIG.legalJurisdiction,
  contactEmail: SITE_CONFIG.contactEmail,
  phoneDisplay: SITE_CONFIG.contactPhoneDisplay,
  phoneE164: SITE_CONFIG.contactPhoneE164,
  host: SITE_CONFIG.legalHost,
  vatMention: SITE_CONFIG.vatMention,
} as const;

const OG_IMAGE = '/assets/komero-og-1200x630.png';

export const PAGE_SEO_BY_LANG: Record<Language, Record<RoutePath, PageSeoMeta>> = {
  fr: {
    '/': {
      path: '/',
      title: 'Komero Suisse — Assistant IA visibilité locale & avis',
      description:
        'Plus visible dans votre quartier. Plus de clients en boutique. L’assistant IA des commerçants suisses : avis Google, réseaux sociaux et SMS.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Accueil',
      keywords: ['assistant IA commerçant Suisse', 'avis Google', 'visibilité locale'],
    },
    '/gestion-fiche-google': {
      path: '/gestion-fiche-google',
      title: 'Gestion Fiche Google Business & Horaires IA | Komero',
      description:
        'Synchronisez horaires exceptionnels, jours fériés suisses, description optimisée IA et actualités sur Google Maps en 1 clic avec Komero.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Gestion Fiche Google',
      keywords: ['gestion fiche Google Suisse', 'Google Business Profile', 'horaires jours fériés'],
    },
    '/avis-google-ia': {
      path: '/avis-google-ia',
      title: 'Avis Google IA & Google Maps Suisse | Komero',
      description:
        'Répondez en 1 clic à vos avis Google conforme nLPD & RGPD, recevez des alertes SMS et grimpez dans le Top 3 Google Maps de votre quartier.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Avis Google IA',
      keywords: ['avis Google IA', 'Google Maps Suisse', 'nLPD'],
    },
    '/reseaux-sociaux': {
      path: '/reseaux-sociaux',
      title: 'Réseaux Sociaux Instagram & Facebook Suisse | Komero',
      description:
        'Prenez une photo en boutique sur mobile : Komero rédige légende et hashtags locaux en 15 secondes et publie sur Instagram et Facebook.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Réseaux Sociaux Express',
      keywords: ['posts Instagram commerçant', 'Facebook boutique Suisse'],
    },
    '/repondeur-sms': {
      path: '/repondeur-sms',
      title: 'Appels Manqués & Répondeur SMS IA Suisse | Komero',
      description:
        'Un appel manqué en plein rush ? Komero envoie aussitôt un SMS chaleureux en 12 s et prépare vos réponses par SMS sur PC et mobile.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Appels Manqués & Répondeur SMS',
      keywords: ['répondeur SMS appel manqué', 'numéro pro commerce Suisse'],
    },
    '/campagnes-sms-flash': {
      path: '/campagnes-sms-flash',
      title: 'Campagnes SMS Commerçants & Promo Flash | Komero',
      description:
        'Exploitez votre fichier client SMS constitué au comptoir : écoulez vos invendus ou remplissez un jour calme en 1 clic (STOP inclus, nLPD).',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Promos par SMS en 1 clic',
      keywords: ['campagne SMS commerçant Suisse', 'fidélisation SMS'],
    },
    '/veille-concurrence': {
      path: '/veille-concurrence',
      title: 'Veille Concurrence & Tendances Locales IA | Komero',
      description:
        'Analysez les commerces de votre quartier en Suisse, anticipez les tendances saisonnières et recevez chaque semaine des idées de posts.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Veille Concurrence & Tendances',
      keywords: ['veille concurrence locale', 'tendances quartier Suisse'],
    },
    '/roue-de-la-chance': {
      path: '/roue-de-la-chance',
      title: 'Roue de la chance QR Code & Base Client SMS | Komero',
      description:
        'Boostez vos avis Google 5★ et remplissez votre fichier client SMS au comptoir grâce au Starter Pack Contacts & Avis Google offert.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Roue de la chance',
      keywords: ['Roue de la chance comptoir', 'QR code avis Google Suisse'],
    },
    '/tarifs': {
      path: '/tarifs',
      title: 'Tarifs Komero Suisse en CHF (7 jours gratuits)',
      description:
        'Comparez Komero Essentiel (19,90 CHF/mois) et Premium (49,90 CHF/mois) sans engagement : 7 jours gratuits et Starter Pack Contacts inclus.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Tarifs en CHF',
      keywords: ['tarif Komero CHF', 'abonnement commerçant Suisse'],
    },
    '/contact': {
      path: '/contact',
      title: 'Contact Komero Suisse & Démo 5 min Gratuite',
      description:
        'Demandez une démo de 5 min en visio partout en Suisse ou sur place en Suisse romande, ou votre diagnostic local gratuit sur contact@komero.ch.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Contact & Démo',
      keywords: ['démo Komero Suisse', 'contact@komero.ch'],
    },
    '/informations-legales': {
      path: '/informations-legales',
      title: 'Informations légales, CGV CHF & nLPD | Komero Suisse',
      description:
        'Consultez les mentions légales, les CGV B2B en CHF et la politique de confidentialité conforme nLPD (Suisse) et RGPD de www.komero.ch.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Informations légales',
      keywords: ['informations légales komero.ch', 'nLPD', 'CGV CHF'],
    },
    '/mentions-legales': {
      path: '/mentions-legales',
      title: 'Mentions légales — Komero Suisse (komero.ch)',
      description:
        'Mentions légales du site www.komero.ch édité par Olivier Pasquier (Komero) et hébergé chez OVH SAS : éditeur, contact et propriété.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Mentions légales',
      keywords: ['mentions légales komero.ch', 'OVH'],
    },
    '/cgv': {
      path: '/cgv',
      title: 'Conditions Générales de Vente B2B CHF | Komero',
      description:
        'CGV B2B en 8 articles des abonnements Komero Suisse en CHF (19,90 et 49,90 CHF), 7 jours gratuits, paiement Stripe et résiliation 1 clic.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Conditions Générales de Vente (CGV)',
      keywords: ['CGV Komero CHF', 'sans engagement'],
    },
    '/confidentialite': {
      path: '/confidentialite',
      title: 'Politique de confidentialité nLPD & RGPD | Komero',
      description:
        'Politique de confidentialité conforme nLPD (Suisse) et RGPD de www.komero.ch : données collectées, conservation, sous-traitants et droits.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Politique de confidentialité',
      keywords: ['confidentialité nLPD Suisse', 'RGPD komero.ch'],
    },
  },

  de: {
    '/': {
      path: '/',
      title: 'Komero Schweiz — KI-Assistent für lokale Geschäfte',
      description:
        'Sichtbarer in Ihrem Quartier. Mehr Kunden im Geschäft. Der KI-Assistent für Google-Bewertungen, Social Media und SMS-Stammkunden in der Schweiz.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Startseite',
      keywords: ['KI Assistent Geschäft Schweiz', 'Google Bewertungen'],
    },
    '/gestion-fiche-google': {
      path: '/gestion-fiche-google',
      title: 'Google-Unternehmensprofil & Feiertage KI | Komero CH',
      description:
        'Aktualisieren Sie Sonderöffnungszeiten, Schweizer Feiertage, KI-Beschreibung und Neuigkeiten auf Google Maps mit 1 Klick über Komero.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Google-Profil verwalten',
      keywords: ['Google Unternehmensprofil Schweiz', 'Sonderöffnungszeiten', 'Google Maps'],
    },
    '/avis-google-ia': {
      path: '/avis-google-ia',
      title: 'Google-Bewertungen KI & Google Maps Schweiz | Komero',
      description:
        'Beantworten Sie Google-Bewertungen mit 1 Klick (revDSG & DSGVO), erhalten Sie SMS-Alarme und klettern Sie in die Top 3 auf Google Maps.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Google-Bewertungen KI',
      keywords: ['Google Bewertungen KI', 'Google Maps Schweiz'],
    },
    '/reseaux-sociaux': {
      path: '/reseaux-sociaux',
      title: 'Social Media Express für Läden (CH) | Komero',
      description:
        'Foto im Geschäft machen: Komero schreibt Text und lokale Hashtags in 15 Sekunden und veröffentlicht direkt auf Instagram und Facebook.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Social Media Express',
      keywords: ['Instagram Laden Schweiz', 'Facebook Gewerbe'],
    },
    '/repondeur-sms': {
      path: '/repondeur-sms',
      title: 'Verpasste Anrufe & SMS-Antwort KI | Komero Schweiz',
      description:
        'Anruf im Kundenandrang verpasst? Komero sendet innert 12 Sek. eine freundliche SMS und bereitet Ihre Antworten auf PC und Handy vor.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Verpasste Anrufe & SMS',
      keywords: ['verpasster Anruf SMS', 'Geschäftsnummer Schweiz'],
    },
    '/campagnes-sms-flash': {
      path: '/campagnes-sms-flash',
      title: 'SMS-Flash-Aktionen für Geschäfte (CH) | Komero',
      description:
        'Nutzen Sie Ihre SMS-Kundenliste von der Theke: Füllen Sie ruhige Zeiten oder verkaufen Sie Restbestände mit 1 Klick (STOP & revDSG).',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'SMS-Flash-Aktionen',
      keywords: ['SMS Marketing Geschäft Schweiz', 'Stammkunden SMS'],
    },
    '/veille-concurrence': {
      path: '/veille-concurrence',
      title: 'Lokale Marktbeobachtung & Quartier-Trends | Komero',
      description:
        'Beobachten Sie Geschäfte in Ihrem Quartier, erkennen Sie saisonale Trends in der Schweiz und erhalten Sie jede Woche fertige Post-Ideen.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Marktbeobachtung im Quartier',
      keywords: ['Marktbeobachtung Quartier', 'Trends Schweiz'],
    },
    '/roue-de-la-chance': {
      path: '/roue-de-la-chance',
      title: 'Glücksrad QR-Code & SMS-Kundenliste | Komero Schweiz',
      description:
        'Mehr 5★-Google-Bewertungen und eine eigene SMS-Kundenliste an der Theke dank dem gratis Starter Pack Kontakte & Google-Bewertungen.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Glücksrad an der Theke',
      keywords: ['Glücksrad Theke QR Code', 'Google Bewertungen sammeln'],
    },
    '/tarifs': {
      path: '/tarifs',
      title: 'Preise Komero Schweiz in CHF (7 Tage gratis)',
      description:
        'Vergleichen Sie Basis (19,90 CHF/Mt.) und Premium (49,90 CHF/Mt.) ohne Vertragsbindung: 7 Tage gratis testen und Starter Pack inklusive.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Preise in CHF',
      keywords: ['Komero Preise CHF', 'Abo Geschäft Schweiz'],
    },
    '/contact': {
      path: '/contact',
      title: 'Kontakt Komero Schweiz & gratis 5-Min.-Demo',
      description:
        'Fragen Sie eine kostenlose 5-Min.-Video-Demo in der ganzen Schweiz oder eine lokale Sichtbarkeits-Analyse über contact@komero.ch an.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Kontakt & Demo',
      keywords: ['Komero Demo Schweiz', 'contact@komero.ch'],
    },
    '/informations-legales': {
      path: '/informations-legales',
      title: 'Rechtliches, AGB CHF & revDSG | Komero Schweiz',
      description:
        'Impressum, B2B-AGB in CHF und Datenschutzerklärung gemäss Schweizer revDSG und europäischer DSGVO für www.komero.ch.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Rechtliches',
      keywords: ['Impressum komero.ch', 'revDSG', 'AGB CHF'],
    },
    '/mentions-legales': {
      path: '/mentions-legales',
      title: 'Impressum — Komero Schweiz (komero.ch)',
      description:
        'Impressum der Website www.komero.ch betrieben von Olivier Pasquier (Komero) und gehostet bei OVH SAS: Betreiber, Kontakt und Urheberrecht.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Impressum',
      keywords: ['Impressum komero.ch', 'OVH'],
    },
    '/cgv': {
      path: '/cgv',
      title: 'AGB B2B in CHF (ohne Vertragsbindung) | Komero',
      description:
        'Allgemeine Geschäftsbedingungen in 8 Artikeln für Komero-Abos in CHF (19,90 & 49,90 CHF), 7 Tage gratis, Stripe und 1-Klick-Kündigung.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'AGB (CHF)',
      keywords: ['AGB Komero CHF', 'ohne Vertragsbindung'],
    },
    '/confidentialite': {
      path: '/confidentialite',
      title: 'Datenschutzerklärung revDSG & DSGVO | Komero',
      description:
        'Datenschutzerklärung gemäss Schweizer revDSG und DSGVO für www.komero.ch: Datenbearbeitung, Aufbewahrung, Partner und Ihre Rechte.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Datenschutz',
      keywords: ['Datenschutz revDSG Schweiz', 'DSGVO komero.ch'],
    },
  },

  en: {
    '/': {
      path: '/',
      title: 'Komero Switzerland — AI Assistant for Local Shops',
      description:
        'More visible in your neighborhood. More customers in your shop. The AI assistant for Swiss shops: Google reviews, social media, and SMS.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Home',
      keywords: ['AI assistant local shop Switzerland', 'Google reviews'],
    },
    '/gestion-fiche-google': {
      path: '/gestion-fiche-google',
      title: 'Google Business Profile & Holiday Hours AI | Komero',
      description:
        'Keep Swiss public holiday hours, AI-optimized business descriptions, and local shop updates live on Google Maps in 1 click with Komero.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Google Profile Management',
      keywords: ['Google Business Profile Switzerland', 'holiday hours Google Maps', 'local SEO'],
    },
    '/avis-google-ia': {
      path: '/avis-google-ia',
      title: 'AI Google Reviews & Google Maps (CH) | Komero',
      description:
        'Reply to Google reviews in 1 click (Swiss FADP & GDPR compliant), get instant SMS alerts, and rank in your neighborhood Google Maps Top 3.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'AI Google Reviews',
      keywords: ['AI Google reviews', 'Google Maps Switzerland'],
    },
    '/reseaux-sociaux': {
      path: '/reseaux-sociaux',
      title: 'Express Social Media for Local Shops (CH) | Komero',
      description:
        'Snap a photo in your shop: Komero writes your caption and local hashtags in 15 seconds and publishes directly to Instagram and Facebook.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Express Social Media',
      keywords: ['Instagram local shop Switzerland', 'Facebook shop posts'],
    },
    '/repondeur-sms': {
      path: '/repondeur-sms',
      title: 'Missed Calls & AI SMS Auto-Reply (CH) | Komero',
      description:
        'Missed a call during peak hours? Komero sends a warm welcome SMS in 12 seconds and prepares instant replies on desktop and mobile.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Missed Calls & SMS Reply',
      keywords: ['missed call SMS reply', 'business number Switzerland'],
    },
    '/campagnes-sms-flash': {
      path: '/campagnes-sms-flash',
      title: 'Flash SMS Campaigns for Local Shops (CH) | Komero',
      description:
        'Turn your countertop SMS list into immediate visits: clear unsold stock or fill quiet days in 1 click (STOP opt-out & Swiss FADP compliant).',
      ogImage: OG_IMAGE,
      breadcrumbLabel: '1-Click Flash SMS Offers',
      keywords: ['Flash SMS local shop Switzerland', 'SMS loyalty'],
    },
    '/veille-concurrence': {
      path: '/veille-concurrence',
      title: 'Local Market Watch & Neighborhood Trends | Komero',
      description:
        'Track nearby shops in Switzerland, spot seasonal neighborhood trends early, and receive ready-to-publish post ideas every single week.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Local Market Watch',
      keywords: ['local market watch Switzerland', 'neighborhood trends'],
    },
    '/roue-de-la-chance': {
      path: '/roue-de-la-chance',
      title: 'Countertop Lucky Wheel QR & SMS List | Komero CH',
      description:
        'Grow 5★ Google reviews and build your SMS customer list at checkout with the free Contacts & Google Reviews Starter Pack.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Countertop Lucky Wheel',
      keywords: ['countertop QR Lucky Wheel', 'collect Google reviews'],
    },
    '/tarifs': {
      path: '/tarifs',
      title: 'Komero Switzerland Pricing in CHF (7 Days Free)',
      description:
        'Compare Essential (19.90 CHF/mo) and Premium (49.90 CHF/mo) with no commitment: 7-day free trial and Contacts Starter Pack included.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'CHF Pricing',
      keywords: ['Komero CHF pricing', 'no commitment Switzerland'],
    },
    '/contact': {
      path: '/contact',
      title: 'Contact Komero Switzerland & Free 5-Min Demo',
      description:
        'Book a free 5-minute video demo anywhere in Switzerland or an in-person visit in Western Switzerland via contact@komero.ch.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Contact & Demo',
      keywords: ['Komero demo Switzerland', 'contact@komero.ch'],
    },
    '/informations-legales': {
      path: '/informations-legales',
      title: 'Legal Info, CHF Terms & FADP Privacy | Komero CH',
      description:
        'Read the legal notice, B2B Terms of Sale in CHF, and Swiss FADP & GDPR Privacy Policy for www.komero.ch.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Legal information',
      keywords: ['legal notice komero.ch', 'Swiss FADP', 'CHF terms'],
    },
    '/mentions-legales': {
      path: '/mentions-legales',
      title: 'Legal Notice — Komero Switzerland (komero.ch)',
      description:
        'Legal notice for www.komero.ch published by Olivier Pasquier (Komero) and hosted by OVH SAS: publisher, contact, and intellectual property.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Legal Notice',
      keywords: ['legal notice komero.ch', 'OVH'],
    },
    '/cgv': {
      path: '/cgv',
      title: 'B2B Terms of Sale in CHF | Komero Switzerland',
      description:
        '8-article B2B Terms of Sale for Komero Switzerland CHF subscriptions (19.90 & 49.90 CHF), 7-day free trial, Stripe, and 1-click cancellation.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Terms of Sale (B2B)',
      keywords: ['Komero CHF terms', 'no commitment'],
    },
    '/confidentialite': {
      path: '/confidentialite',
      title: 'Privacy Policy (Swiss FADP & GDPR) | Komero CH',
      description:
        'Swiss FADP and GDPR Privacy Policy for www.komero.ch: data collected, retention periods, processors, and your privacy rights.',
      ogImage: OG_IMAGE,
      breadcrumbLabel: 'Privacy Policy',
      keywords: ['Swiss FADP privacy', 'GDPR komero.ch'],
    },
  },
};

export const PAGE_SEO: Record<RoutePath, PageSeoMeta> = PAGE_SEO_BY_LANG.fr;

export function getPageSeo(path: RoutePath, lang: Language = 'fr'): PageSeoMeta {
  return PAGE_SEO_BY_LANG[lang][path];
}

export function normalizeRoutePath(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (cleaned === '/repondeur-sms-whatsapp' || cleaned === '/assistant-whatsapp-appel-manque') {
    return '/repondeur-sms';
  }
  if (cleaned === '/roue-de-la-fortune' || cleaned === '/roue-chance') {
    return '/roue-de-la-chance';
  }
  if (cleaned === '/commander' || cleaned === '/offres') {
    return '/tarifs';
  }
  if (cleaned in PAGE_SEO) {
    return cleaned as RoutePath;
  }
  return '/';
}

const NOINDEX_ROUTES = new Set<RoutePath>(['/mentions-legales', '/cgv', '/confidentialite']);

export function getRobotsDirective(path: RoutePath): 'noindex, follow' | 'index, follow' {
  return NOINDEX_ROUTES.has(path) ? 'noindex, follow' : 'index, follow';
}

export function buildCanonicalUrl(path: RoutePath, origin: string = SITE_ORIGIN): string {
  const base = origin.replace(/\/+$/, '');
  return path === '/' ? `${base}/` : `${base}${path}`;
}

export function buildHreflangAlternates(
  path: RoutePath,
  origin: string = SITE_ORIGIN
): Array<{ hreflang: 'fr-CH' | 'de-CH' | 'en-CH' | 'x-default'; href: string }> {
  const canonical = buildCanonicalUrl(path, origin);
  return [
    { hreflang: 'fr-CH', href: canonical },
    { hreflang: 'de-CH', href: `${canonical}?lang=de` },
    { hreflang: 'en-CH', href: `${canonical}?lang=en` },
    { hreflang: 'x-default', href: canonical },
  ];
}

export function buildOrganizationJsonLd(lang: Language = 'fr') {
  const description = PAGE_SEO_BY_LANG[lang]['/'].description;
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: SITE_CONFIG.brandName,
    legalName: SITE_CONFIG.legalEntityName,
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/assets/komero-icon.png`,
    image: `${SITE_ORIGIN}/assets/komero-og-1200x630.png`,
    email: SITE_CONFIG.contactEmail,
    telephone: SITE_CONFIG.contactPhoneE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.legalAddress,
      postalCode: SITE_CONFIG.legalPostalCode,
      addressLocality: SITE_CONFIG.legalCity,
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'Country', name: 'Suisse' },
      { '@type': 'City', name: 'Genève' },
      { '@type': 'City', name: 'Lausanne' },
      { '@type': 'City', name: 'Zürich' },
      { '@type': 'City', name: 'Basel' },
    ],
    description,
    inLanguage: ['fr-CH', 'de-CH', 'en-CH'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contactPhoneE164,
      email: SITE_CONFIG.contactEmail,
      contactType: 'sales',
      areaServed: ['CH', 'FR'],
      availableLanguage: ['French', 'German', 'English'],
    },
  };
}

export function buildSoftwareApplicationJsonLd(lang: Language = 'fr') {
  const copy = {
    fr: {
      ess: 'Formule Essentiel',
      prem: 'Formule Premium',
      essDesc:
        'Gestion de votre Fiche Google (horaires exceptionnels, jours fériés et description IA en 1 clic) + Avis Google IA (100/mois) + Posts Réseaux Sociaux Express (30/mois) + Starter Pack Contacts & Avis Google offert + PC & Mobile, 7 jours gratuits, sans engagement.',
      premDesc:
        'Tout Essentiel (y compris Gestion de votre Fiche Google et Starter Pack offert) + Audit de complétude & actualités Google Posts + SMS automatique sur appel manqué + Campagnes Promo Flash SMS + Veille locale, 7 jours gratuits, sans engagement.',
    },
    de: {
      ess: 'Paket Basis',
      prem: 'Paket Premium',
      essDesc:
        'Pflege Ihres Google-Unternehmensprofils (Sonderöffnungszeiten, Feiertage & KI-Beschreibung mit 1 Klick) + Google-Bewertungen KI (100/Mt.) + Social Media Express (30 Posts/Mt.) + Gratis Starter Pack + PC & Handy, 7 Tage gratis, ohne Vertragsbindung.',
      premDesc:
        'Gesamtes Basis-Paket inkl. Google-Unternehmensprofil & Starter Pack + Vollständigkeits-Audit & Google-Beiträge + automatische SMS bei verpasstem Anruf + SMS-Flash-Aktionen + lokale Marktbeobachtung, 7 Tage gratis, ohne Vertragsbindung.',
    },
    en: {
      ess: 'Essential Plan',
      prem: 'Premium Plan',
      essDesc:
        'Google Business Profile management (special hours, holidays & 1-click AI description) + AI Google Reviews (100/mo) + Express Social Media (30 posts/mo) + Free Contacts & Google Reviews Starter Pack + Desktop & Mobile, 7 days free, no commitment.',
      premDesc:
        'Full Essential Plan including Google Business Profile & free Starter Pack + Completeness audit & Google Posts + automatic missed-call SMS + 1-click Flash SMS offers + Local Market Watch, 7 days free, no commitment.',
    },
  }[lang];

  const activeHtmlLang = HTML_LANG_BY_LANGUAGE[lang];
  const allSwissLanguages = [
    activeHtmlLang,
    ...(['fr-CH', 'de-CH', 'en-CH'] as const).filter((code) => code !== activeHtmlLang),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_CONFIG.brandName,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Mobile (iOS, Android), Windows, macOS',
    url: `${SITE_ORIGIN}/`,
    inLanguage: allSwissLanguages,
    description: PAGE_SEO_BY_LANG[lang]['/'].description,
    offers: [
      {
        '@type': 'Offer',
        name: copy.ess,
        price: SITE_CONFIG.priceEssentielValue,
        priceCurrency: 'CHF',
        url: `${SITE_ORIGIN}/tarifs`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: SITE_CONFIG.priceEssentielValue,
          priceCurrency: 'CHF',
          unitText: 'MONTH',
          valueAddedTaxIncluded: false,
        },
        description: copy.essDesc,
      },
      {
        '@type': 'Offer',
        name: copy.prem,
        price: SITE_CONFIG.pricePremiumValue,
        priceCurrency: 'CHF',
        url: `${SITE_ORIGIN}/tarifs`,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: SITE_CONFIG.pricePremiumValue,
          priceCurrency: 'CHF',
          unitText: 'MONTH',
          valueAddedTaxIncluded: false,
        },
        description: copy.premDesc,
      },
    ],
  };
}

export function buildFaqJsonLd(items: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  path: RoutePath,
  origin: string = SITE_ORIGIN,
  lang: Language = 'fr'
) {
  const seoMap = PAGE_SEO_BY_LANG[lang];
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: seoMap['/'].breadcrumbLabel,
      item: buildCanonicalUrl('/', origin),
    },
  ];

  if (path !== '/') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: seoMap[path].breadcrumbLabel,
      item: buildCanonicalUrl(path, origin),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}
