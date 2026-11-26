import { SITE_CONFIG, type Language } from '../config/siteConfig';
import type { FaqEntry, FeatureRoutePath } from '../lib/seo';

export const ASSETS = {
  logoHeader: '/assets/komero-logo-header.png',
  logoFooterDark: '/assets/komero-logo-footer-dark.png',
  logoIcon: '/assets/komero-icon.png',
  ogCard: '/assets/komero-og-1200x630.png',
  roueChance: '/assets/komero-roue-de-la-chance.webp',
  bakeryCounter: '/assets/komero-boulangerie-avis-google.webp',
  merchantBoutique: '/assets/komero-commercant-boutique-reseaux.webp',
  localMarketStreet: '/assets/komero-quartier-veille-locale.webp',
  hairSalon: '/assets/komero-salon-coiffure-repondeur-sms.webp',
  wineShop: '/assets/komero-caviste-promo-flash-sms.webp',
  pressingCounter: '/assets/komero-pressing-comptoir-roue-qr.webp',
  artisanCounter: '/assets/komero-artisan-veille-locale.webp',
  croissants: '/assets/komero-croissants-boulangerie.jpg',
  socialBrioche: '/assets/komero-reseaux-sociaux-brioche-boulangerie.webp',
  socialWine: '/assets/komero-reseaux-sociaux-vin-caviste.webp',
} as const;

export const REASSURANCE_ITEMS = [
  'Sans engagement',
  'PC & Mobile inclus',
  'Starter Pack Contacts offert',
  'Conforme nLPD & RGPD',
] as const;

export interface StarterPackStep {
  step: string;
  title: string;
  description: string;
}

const STARTER_PACK_STEPS_BY_LANG: Record<Language, StarterPackStep[]> = {
  fr: [
    {
      step: '1',
      title: 'Le client scanne au comptoir',
      description:
        'Il joue en 15 sec sur son téléphone pour gagner un petit cadeau au prochain passage.',
    },
    {
      step: '2',
      title: 'Votre fichier client se remplit tout seul',
      description: 'Prénom, mobile et invitation directe à laisser un avis Google.',
    },
    {
      step: '3',
      title: 'Vous le faites revenir quand vous voulez',
      description:
        'Envoyez une promo par SMS lors d’un jour calme ou pour écouler vos invendus.',
    },
  ],
  de: [
    {
      step: '1',
      title: 'Der Kunde scannt an der Theke',
      description:
        'Er spielt 15 Sek. am Smartphone und gewinnt ein kleines Geschenk für den nächsten Besuch.',
    },
    {
      step: '2',
      title: 'Ihre Kundenliste wächst automatisch',
      description: 'Vorname, Mobilnummer und direkte Einladung für eine Google-Bewertung.',
    },
    {
      step: '3',
      title: 'Sie holen Kunden jederzeit zurück',
      description:
        'Senden Sie an ruhigen Tagen oder bei Restbeständen mit 1 Klick eine SMS-Aktion.',
    },
  ],
  en: [
    {
      step: '1',
      title: 'The customer scans at checkout',
      description:
        'They play for 15 seconds on their phone to win a small reward for their next visit.',
    },
    {
      step: '2',
      title: 'Your customer list fills up automatically',
      description: 'First name, mobile number, and a direct prompt to leave a Google review.',
    },
    {
      step: '3',
      title: 'Bring them back whenever you want',
      description:
        'Send a Flash SMS offer on a quiet weekday or to clear end-of-day fresh stock.',
    },
  ],
};

export function getStarterPackSteps(lang: Language = 'fr'): StarterPackStep[] {
  return STARTER_PACK_STEPS_BY_LANG[lang];
}

export const STARTER_PACK_WHEEL_STEPS = STARTER_PACK_STEPS_BY_LANG.fr;

export interface FeatureOverviewItem {
  number: string;
  tierId: 'essentiel' | 'premium';
  tierLabel: string;
  path: FeatureRoutePath;
  shortTitle: string;
  title: string;
  subtitle: string;
  hook: string;
  description: string;
  proofLabel: string;
  image: string;
  imageAlt: string;
}

const FEATURES_OVERVIEW_BY_LANG: Record<Language, FeatureOverviewItem[]> = {
  fr: [
    {
      number: '01',
      tierId: 'essentiel',
      tierLabel: 'Essentiel',
      path: '/avis-google-ia',
      shortTitle: 'Avis Google IA',
      title: 'Avis Google IA',
      subtitle: 'Top 3 Google Maps & réponses en 1 clic',
      hook: 'Répondez à tous vos avis Google en 1 clic et récoltez plus d’avis 5★ chaque semaine.',
      description:
        'Réponses personnalisées en 1 clic (prénom, produit cité, note), alertes par SMS et collecte facilitée grâce au Starter Pack Contacts & Avis Google offert.',
      proofLabel: 'Note préservée à 4,8 / 5',
      image: ASSETS.bakeryCounter,
      imageAlt:
        'Boulanger indépendant consultant ses avis Google Maps sur smartphone au comptoir de sa boulangerie avec Komero',
    },
    {
      number: '02',
      tierId: 'essentiel',
      tierLabel: 'Essentiel',
      path: '/reseaux-sociaux',
      shortTitle: 'Réseaux Sociaux Express',
      title: 'Réseaux Sociaux Express',
      subtitle: 'Photo mobile → post prêt en 15 secondes',
      hook: 'Prenez une photo en boutique : Komero rédige la légende et publie sur Instagram & Facebook.',
      description:
        'Photo prise sur votre mobile → légende accrocheuse + hashtags de votre quartier en 15 secondes → publication simultanée Instagram & Facebook.',
      proofLabel: '30 posts prêts / mois',
      image: ASSETS.merchantBoutique,
      imageAlt:
        'Commerçante de proximité souriante accueillant une cliente au comptoir de sa boutique artisanale pour illustrer les publications locales Komero',
    },
    {
      number: '03',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/repondeur-sms',
      shortTitle: 'Appels Manqués & Répondeur SMS',
      title: 'Appels Manqués & Répondeur SMS',
      subtitle: 'Numéro pro & SMS automatique en 12 s',
      hook: 'Un appel manqué en plein rush ? Le client reçoit aussitôt un SMS chaleureux.',
      description:
        'Dès qu’un appel est manqué en boutique, Komero envoie automatiquement un SMS d’accueil et prépare vos réponses par SMS aux questions fréquentes.',
      proofLabel: 'Réponse SMS auto en 12 s',
      image: ASSETS.hairSalon,
      imageAlt:
        'Coiffeur indépendant en salon vérifiant sur smartphone les SMS clients récupérés après un appel manqué via Komero',
    },
    {
      number: '04',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/campagnes-sms-flash',
      shortTitle: 'Promos par SMS en 1 clic',
      title: 'Promos par SMS en 1 clic',
      subtitle: 'Remplissez un jour calme en 3 minutes',
      hook: 'Écoulez vos invendus ou remplissez un jour calme en envoyant une promo à vos clients fidèles.',
      description:
        'Rédaction IA prête en 1 clic avec mention STOP réglementaire et 95 % d’ouverture auprès de votre fichier client SMS constitué au comptoir.',
      proofLabel: '95 % d’ouverture en 3 min',
      image: ASSETS.wineShop,
      imageAlt:
        'Caviste indépendant préparant une offre par SMS sur smartphone avec un client fidèle en boutique',
    },
    {
      number: '05',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/veille-concurrence',
      shortTitle: 'Veille Concurrence & Tendances',
      title: 'Veille Concurrence & Tendances Locales',
      subtitle: 'Analyse hebdomadaire du quartier',
      hook: 'Suivez les commerces de votre quartier et recevez chaque semaine des idées de posts prêtes.',
      description:
        'Analyse hebdomadaire des commerces de votre quartier et des temps forts saisonniers locaux pour ne jamais manquer d’idées rentables.',
      proofLabel: 'Veille quartier hebdo',
      image: ASSETS.localMarketStreet,
      imageAlt:
        'Rue commerçante animée illustrant la veille locale et les tendances de quartier analysées par Komero',
    },
  ],
  de: [
    {
      number: '01',
      tierId: 'essentiel',
      tierLabel: 'Basis',
      path: '/avis-google-ia',
      shortTitle: 'Google-Bewertungen KI',
      title: 'Google-Bewertungen mit KI',
      subtitle: 'Top 3 Google Maps & Antworten mit 1 Klick',
      hook: 'Beantworten Sie alle Google-Bewertungen mit 1 Klick und sammeln Sie jede Woche mehr 5★.',
      description:
        'Persönliche Antworten mit 1 Klick, sofortige SMS-Warnungen und einfache Sammlung dank dem gratis Starter Pack Kontakte & Google-Bewertungen.',
      proofLabel: 'Top-Note 4,8 / 5 sichern',
      image: ASSETS.bakeryCounter,
      imageAlt:
        'Bäcker prüft an der Theke auf dem Smartphone seine Google-Maps-Bewertungen mit Komero',
    },
    {
      number: '02',
      tierId: 'essentiel',
      tierLabel: 'Basis',
      path: '/reseaux-sociaux',
      shortTitle: 'Social Media Express',
      title: 'Social Media Express',
      subtitle: 'Handyfoto → fertiger Post in 15 Sekunden',
      hook: 'Machen Sie ein Foto im Laden: Komero schreibt den Text und postet auf Instagram & Facebook.',
      description:
        'Foto auf dem Smartphone → ansprechender Text + lokale Hashtags in 15 Sekunden → direkter Versand an Instagram & Facebook.',
      proofLabel: '30 fertige Posts / Monat',
      image: ASSETS.merchantBoutique,
      imageAlt:
        'Lächelnde Ladeninhaberin begrüsst eine Kundin an der Theke für lokale Social-Media-Beiträge mit Komero',
    },
    {
      number: '03',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/repondeur-sms',
      shortTitle: 'Verpasste Anrufe & SMS',
      title: 'Verpasste Anrufe & SMS-Antwort',
      subtitle: 'Geschäftsnummer & Auto-SMS in 12 Sek.',
      hook: 'Anruf im Stress verpasst? Ihr Kunde erhält sofort eine herzliche Begrüssungs-SMS.',
      description:
        'Bei jedem verpassten Anruf schickt Komero automatisch eine freundliche SMS und bereitet passende Antworten auf häufige Fragen vor.',
      proofLabel: 'Auto-SMS innert 12 Sek.',
      image: ASSETS.hairSalon,
      imageAlt:
        'Coiffeur prüft im Salon auf dem Smartphone gerettete SMS-Anfragen nach einem verpassten Anruf',
    },
    {
      number: '04',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/campagnes-sms-flash',
      shortTitle: 'SMS-Aktionen mit 1 Klick',
      title: 'SMS-Flash-Aktionen mit 1 Klick',
      subtitle: 'Ruhige Tage in 3 Minuten füllen',
      hook: 'Bieten Sie Restbestände an oder beleben Sie ruhige Tage per SMS an Ihre Stammkunden.',
      description:
        'KI-Text mit 1 Klick inklusive STOP-Hinweis und 95 % Öffnungsrate für Ihre an der Theke gesammelte SMS-Kundenliste.',
      proofLabel: '95 % gelesen in 3 Min.',
      image: ASSETS.wineShop,
      imageAlt:
        'Weinhändler zeigt einem Stammkunden im Geschäft eine SMS-Flash-Aktion auf dem Smartphone',
    },
    {
      number: '05',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/veille-concurrence',
      shortTitle: 'Marktbeobachtung im Quartier',
      title: 'Lokale Markt- & Trendbeobachtung',
      subtitle: 'Wöchentliche Quartier-Analyse',
      hook: 'Behalten Sie Ihr Quartier im Blick und erhalten Sie jede Woche fertige Beitragsideen.',
      description:
        'Wöchentliche Auswertung der Geschäfte in Ihrer Umgebung und saisonaler Trends für gewinnbringende Aktionen.',
      proofLabel: 'Wöchentlicher Quartier-Bericht',
      image: ASSETS.localMarketStreet,
      imageAlt:
        'Belebte Einkaufsstrasse als Beispiel für die wöchentliche Quartier-Analyse von Komero',
    },
  ],
  en: [
    {
      number: '01',
      tierId: 'essentiel',
      tierLabel: 'Essential',
      path: '/avis-google-ia',
      shortTitle: 'AI Google Reviews',
      title: 'AI Google Reviews',
      subtitle: 'Top 3 Google Maps & 1-click replies',
      hook: 'Reply to every Google review in 1 click and earn more 5★ ratings every week.',
      description:
        'Personalized 1-click replies, instant SMS alerts, and effortless review collection with the free Contacts & Google Reviews Starter Pack.',
      proofLabel: 'Protect a 4.8 / 5 rating',
      image: ASSETS.bakeryCounter,
      imageAlt:
        'Independent baker checking Google Maps reviews on a smartphone at the shop counter with Komero',
    },
    {
      number: '02',
      tierId: 'essentiel',
      tierLabel: 'Essential',
      path: '/reseaux-sociaux',
      shortTitle: 'Express Social Media',
      title: 'Express Social Media',
      subtitle: 'Phone photo → ready post in 15 seconds',
      hook: 'Take a photo in your shop: Komero writes the caption and publishes to Instagram & Facebook.',
      description:
        'Photo on your phone → engaging caption + neighborhood hashtags in 15 seconds → publish simultaneously to Instagram & Facebook.',
      proofLabel: '30 ready posts / month',
      image: ASSETS.merchantBoutique,
      imageAlt:
        'Smiling local shop owner handing a bag to a customer at the counter illustrating Komero social posts',
    },
    {
      number: '03',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/repondeur-sms',
      shortTitle: 'Missed Calls & SMS Reply',
      title: 'Missed Calls & SMS Auto-Reply',
      subtitle: 'Shop number & auto SMS in 12 sec',
      hook: 'Missed a call during the rush? Your caller gets a warm SMS automatically.',
      description:
        'Whenever a call goes unanswered, Komero sends a friendly welcome SMS and drafts smart answers to common customer questions.',
      proofLabel: 'Auto SMS in 12 sec',
      image: ASSETS.hairSalon,
      imageAlt:
        'Independent hairdresser checking recovered customer SMS messages on a smartphone after a missed call',
    },
    {
      number: '04',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/campagnes-sms-flash',
      shortTitle: '1-Click Flash SMS Offers',
      title: '1-Click Flash SMS Campaigns',
      subtitle: 'Fill quiet hours in 3 minutes',
      hook: 'Clear unsold fresh stock or fill a quiet afternoon by texting your loyal regulars.',
      description:
        '1-click AI copy with STOP opt-out and a 95% open rate across the SMS customer list built at your counter.',
      proofLabel: '95% opened in 3 min',
      image: ASSETS.wineShop,
      imageAlt:
        'Independent wine shop owner sharing a Flash SMS offer on a smartphone with a regular customer',
    },
    {
      number: '05',
      tierId: 'premium',
      tierLabel: 'Premium',
      path: '/veille-concurrence',
      shortTitle: 'Local Market Watch',
      title: 'Local Competitor & Trend Watch',
      subtitle: 'Weekly neighborhood insights',
      hook: 'Track nearby shops and get ready-to-publish post ideas every single week.',
      description:
        'Weekly analysis of nearby businesses and seasonal local trends so you never run out of profitable ideas.',
      proofLabel: 'Weekly local briefing',
      image: ASSETS.localMarketStreet,
      imageAlt:
        'Neighborhood shopping street illustrating Komero weekly local competitor and trend watch',
    },
  ],
};

export function getFeaturesOverview(lang: Language = 'fr'): FeatureOverviewItem[] {
  return FEATURES_OVERVIEW_BY_LANG[lang];
}

export const FEATURES_OVERVIEW: FeatureOverviewItem[] = FEATURES_OVERVIEW_BY_LANG.fr;

export function getAdjacentFeatures(
  currentPath: FeatureRoutePath,
  lang: Language = 'fr'
): {
  previous: FeatureOverviewItem;
  next: FeatureOverviewItem;
} {
  const list = FEATURES_OVERVIEW_BY_LANG[lang];
  const index = list.findIndex((item) => item.path === currentPath);
  const safeIndex = index === -1 ? 0 : index;
  const previous = list[(safeIndex - 1 + list.length) % list.length];
  const next = list[(safeIndex + 1) % list.length];
  return { previous, next };
}

export const STRIPE_LINKS = {
  essentiel: SITE_CONFIG.stripeLinkEssentiel,
  premium: SITE_CONFIG.stripeLinkPremium,
} as const;

export interface PricingPlan {
  id: 'essentiel' | 'premium';
  name: string;
  objective: string;
  price: string;
  period: string;
  popular: boolean;
  badgeLabel: string;
  bonusTitle: string;
  bonusDetail: string;
  ctaLabel: string;
  stripeUrl: string;
  features: string[];
}

export function getPricingPlans(lang: Language = 'fr'): PricingPlan[] {
  if (lang === 'de') {
    return [
      {
        id: 'essentiel',
        name: 'Paket Basis',
        objective: 'Sichtbarkeit & guter Ruf',
        price: '19,90 CHF',
        period: '/ Monat',
        popular: false,
        badgeLabel: '',
        bonusTitle: 'GRATIS: Starter Pack Kontakte & Google-Bewertungen',
        bonusDetail:
          'QR-Code-Aufsteller für die Theke + automatischer Aufbau Ihrer SMS-Kundenliste + mehr 5★-Google-Bewertungen gratis inklusive',
        ctaLabel: 'Jetzt starten (7 Tage gratis)',
        stripeUrl: SITE_CONFIG.stripeLinkEssentiel,
        features: [
          'Google-Bewertungen mit KI (bis 100 persönliche Antworten / Monat + SMS-Alarm)',
          'Social Media Express (30 fertige Instagram- & Facebook-Posts / Monat)',
          'Zugang auf PC & Smartphone inklusive, ohne Vertragsbindung',
          'Freigabe mit 1 Klick sowie revDSG- & DSGVO-konforme Anonymisierung',
        ],
      },
      {
        id: 'premium',
        name: 'Paket Premium',
        objective: 'Kundengewinnung & Stammkunden',
        price: '49,90 CHF',
        period: '/ Monat',
        popular: true,
        badgeLabel: 'Am beliebtesten',
        bonusTitle: 'Alles aus Basis + Starter Pack Kontakte & Google-Bewertungen gratis',
        bonusDetail:
          'Ihr QR-Code-Aufsteller an der Kasse füllt Ihre SMS-Kundenliste automatisch — holen Sie Stammkunden mit 1 Klick zurück',
        ctaLabel: 'Jetzt starten (7 Tage gratis)',
        stripeUrl: SITE_CONFIG.stripeLinkPremium,
        features: [
          'Komplettes Basis-Paket inklusive (Google-Bewertungen KI, 30 Posts, PC & Mobil + Starter Pack gratis)',
          'Eigene Geschäftsnummer + automatische SMS bei verpasstem Anruf',
          'SMS-Flash-Aktionen mit 1 Klick an Ihre Stammkunden (STOP-Hinweis inklusive)',
          'Lokale Markt- & Trendbeobachtung (wöchentliche Quartier-Analyse & Post-Ideen)',
        ],
      },
    ];
  }

  if (lang === 'en') {
    return [
      {
        id: 'essentiel',
        name: 'Essential Plan',
        objective: 'Local Visibility & Reputation',
        price: '19.90 CHF',
        period: '/ month',
        popular: false,
        badgeLabel: '',
        bonusTitle: 'FREE: Contacts & Google Reviews Starter Pack',
        bonusDetail:
          'Countertop QR code stand + automatic SMS customer list + 5★ Google reviews boost included free',
        ctaLabel: 'Start now (7 days free)',
        stripeUrl: SITE_CONFIG.stripeLinkEssentiel,
        features: [
          'AI Google Reviews (up to 100 personalized replies / month + SMS alerts)',
          'Express Social Media (30 ready Instagram & Facebook posts / month)',
          'Desktop & Mobile access included, no commitment',
          '1-click human approval and Swiss FADP & GDPR anonymization',
        ],
      },
      {
        id: 'premium',
        name: 'Premium Plan',
        objective: 'Acquisition & Repeat Visits',
        price: '49.90 CHF',
        period: '/ month',
        popular: true,
        badgeLabel: 'Most complete',
        bonusTitle: 'Everything in Essential + Free Contacts & Google Reviews Starter Pack',
        bonusDetail:
          'Your countertop QR stand builds your SMS customer list automatically so you can bring regulars back in 1 click',
        ctaLabel: 'Start now (7 days free)',
        stripeUrl: SITE_CONFIG.stripeLinkPremium,
        features: [
          'Full Essential plan included (AI Google Reviews, 30 posts, Desktop & Mobile + Free Starter Pack)',
          'Dedicated shop number + automatic SMS on missed calls',
          '1-click Flash SMS offers to loyal customers (STOP opt-out included)',
          'Local Market & Trend Watch (weekly neighborhood briefing & ready post ideas)',
        ],
      },
    ];
  }

  return [
    {
      id: 'essentiel',
      name: 'Formule Essentiel',
      objective: 'Visibilité & Réputation',
      price: '19,90 CHF',
      period: '/ mois',
      popular: false,
      badgeLabel: '',
      bonusTitle: 'OFFERT : Starter Pack Contacts & Avis Google',
      bonusDetail:
        'Chevalet QR code comptoir + création automatique de votre fichier client SMS + boost d’avis Google 5★ inclus gratuitement',
      ctaLabel: 'Démarrer (7 jours gratuits)',
      stripeUrl: SITE_CONFIG.stripeLinkEssentiel,
      features: [
        'Avis Google IA (jusqu’à 100 réponses personnalisées / mois + alertes SMS)',
        'Posts Réseaux Sociaux Express (30 posts / mois Instagram & Facebook)',
        'Accès application PC & Mobile, sans engagement',
        'Validation humaine en 1 clic et anonymisation conforme nLPD & RGPD',
      ],
    },
    {
      id: 'premium',
      name: 'Formule Premium',
      objective: 'Acquisition & Fidélisation',
      price: '49,90 CHF',
      period: '/ mois',
      popular: true,
      badgeLabel: 'Le plus complet',
      bonusTitle: 'Tout le pack Essentiel inclus + Starter Pack Contacts & Avis Google offert',
      bonusDetail:
        'Votre chevalet QR code comptoir remplit tout seul votre fichier client SMS pour faire revenir vos habitués en 1 clic',
      ctaLabel: 'Démarrer (7 jours gratuits)',
      stripeUrl: SITE_CONFIG.stripeLinkPremium,
      features: [
        'Tout le pack Essentiel inclus (Avis Google IA, 30 posts, PC & Mobile + Starter Pack offert)',
        'Numéro pro dédié + SMS automatique sur appel manqué',
        'Envoi de promos par SMS en 1 clic à vos clients fidèles (mention STOP incluse)',
        'Veille Concurrence & Tendances Locales (analyse hebdo du quartier et idées de posts)',
      ],
    },
  ];
}

export const PRICING_PLANS = getPricingPlans('fr');

const PRICING_FAQ_BY_LANG: Record<Language, FaqEntry[]> = {
  fr: [
    {
      id: 'essai-7-jours',
      question: 'Comment fonctionnent les 7 jours d’essai gratuit ?',
      answer:
        'Vous bénéficiez de 7 jours d’essai gratuit dès votre inscription en ligne. Vous testez Komero en conditions réelles dans votre commerce avec votre Starter Pack Contacts & Avis Google offert : 0 CHF débité pendant 7 jours, et le premier prélèvement mensuel (19,90 CHF ou 49,90 CHF) n’intervient automatiquement qu’au 8e jour sauf résiliation en 1 clic avant la fin des 7 jours.',
    },
    {
      id: 'empreinte-stripe',
      question: 'Pourquoi une empreinte bancaire Stripe est-elle demandée à l’inscription ?',
      answer:
        'Le règlement en CHF est sécurisé par Stripe. L’empreinte carte vérifie simplement votre compte professionnel et permet d’activer votre espace et votre chevalet QR code sous 24h sans interruption. Aucun montant (0 CHF) n’est débité pendant les 7 premiers jours.',
    },
    {
      id: 'resiliation-1-clic',
      question: 'Comment gérer, modifier ou résilier mon abonnement sans engagement ?',
      answer:
        'Nos deux formules Essentiel et Premium sont 100 % sans engagement. Vous pouvez gérer ou résilier en 1 clic depuis votre portail client Stripe ou en écrivant à contact@komero.ch avant l’échéance mensuelle, sans frais ni pénalité.',
    },
    {
      id: 'facture-chf',
      question: 'Vais-je recevoir une facture professionnelle en CHF pour ma comptabilité ?',
      answer:
        'Oui. Une facture professionnelle détaillée en CHF est envoyée automatiquement par email après chaque échéance mensuelle, prête pour votre fiduciaire ou votre comptabilité.',
    },
  ],
  de: [
    {
      id: 'essai-7-jours',
      question: 'Wie funktionieren die 7 Tage gratis Testphase?',
      answer:
        'Sie testen Komero ab Ihrer Anmeldung 7 Tage lang kostenlos im echten Ladenalltag — inklusive gratis Starter Pack Kontakte & Google-Bewertungen. Während der 7 Tage werden 0 CHF abgebucht. Erst ab dem 8. Tag erfolgt die monatliche Abrechnung (19,90 CHF oder 49,90 CHF), sofern Sie nicht vorher mit 1 Klick kündigen.',
    },
    {
      id: 'empreinte-stripe',
      question: 'Warum wird bei der Anmeldung eine Karte über Stripe hinterlegt?',
      answer:
        'Die Abrechnung in CHF läuft sicher über Stripe. Die Kartenhinterlegung bestätigt Ihr Geschäftskonto und ermöglicht die sofortige Freischaltung Ihres Zugangs und QR-Aufstellers innert 24 Stunden. Während der ersten 7 Tage werden 0 CHF belastet.',
    },
    {
      id: 'resiliation-1-clic',
      question: 'Wie kann ich mein Abo ohne Vertragsbindung verwalten oder kündigen?',
      answer:
        'Beide Pakete (Basis und Premium) sind monatlich und ohne Vertragsbindung. Sie kündigen oder wechseln jederzeit mit 1 Klick über Ihr Stripe-Kundenportal oder per E-Mail an contact@komero.ch — ohne Gebühren oder Kündigungsfrist.',
    },
    {
      id: 'facture-chf',
      question: 'Erhalte ich eine Geschäftsrechnung in CHF für meine Buchhaltung?',
      answer:
        'Ja. Nach jeder monatlichen Abrechnung erhalten Sie automatisch eine saubere Rechnung in CHF per E-Mail — direkt bereit für Ihren Treuhänder oder Ihre Buchhaltung.',
    },
  ],
  en: [
    {
      id: 'essai-7-jours',
      question: 'How does the 7-day free trial work?',
      answer:
        'You get 7 free days from the moment you sign up online. Test Komero live in your shop with your free Contacts & Google Reviews Starter Pack: CHF 0 is charged during the first 7 days, and monthly billing (19.90 CHF or 49.90 CHF) only starts on day 8 unless you cancel in 1 click before day 7 ends.',
    },
    {
      id: 'empreinte-stripe',
      question: 'Why is a Stripe card verification requested at sign-up?',
      answer:
        'CHF payments are processed securely by Stripe. Card verification confirms your business account so we can activate your workspace and countertop QR stand within 24 hours without interruption. CHF 0 is charged during the first 7 days.',
    },
    {
      id: 'resiliation-1-clic',
      question: 'How do I manage, change, or cancel my no-commitment subscription?',
      answer:
        'Both Essential and Premium plans have zero commitment. Manage or cancel anytime in 1 click via your Stripe Customer Portal or by emailing contact@komero.ch before your renewal date, with no fees or penalties.',
    },
    {
      id: 'facture-chf',
      question: 'Will I receive a business invoice in CHF for my accounting?',
      answer:
        'Yes. A clear professional invoice in CHF is emailed automatically after each monthly renewal, ready for your accountant or bookkeeping.',
    },
  ],
};

export function getPricingFaq(lang: Language = 'fr'): FaqEntry[] {
  return PRICING_FAQ_BY_LANG[lang];
}

export const PRICING_FAQ: FaqEntry[] = PRICING_FAQ_BY_LANG.fr;

export interface SeasonalCalendarItem {
  date: string;
  event: string;
  angle: string;
}

const SEASONAL_CALENDAR_BY_LANG: Record<Language, SeasonalCalendarItem[]> = {
  fr: [
    {
      date: 'Janvier',
      event: 'Épiphanie & Couronnes des Rois',
      angle: 'Mise en avant des fournées du matin et pré-commandes en boutique',
    },
    {
      date: 'Février',
      event: 'Saint-Valentin',
      angle: 'Coffrets duo, créations maison et idées cadeaux dernière minute',
    },
    {
      date: 'Mai / Juin',
      event: 'Fête des Mères & des Pères',
      angle: 'Idées cadeaux locales à retirer en boutique le jour même',
    },
    {
      date: 'Août / Sept.',
      event: '1er Août & Rentrée du quartier',
      angle: 'Spécialités suisses, nouveautés de saison et relance des habitués par SMS',
    },
    {
      date: 'Décembre',
      event: 'Fêtes de fin d’année',
      angle: 'Horaires exceptionnels et commandes de réveillon en magasin',
    },
  ],
  de: [
    {
      date: 'Januar',
      event: 'Dreikönigstag',
      angle: 'Frische Dreikönigskuchen am Morgen und einfache Vorbestellungen im Laden',
    },
    {
      date: 'Februar',
      event: 'Valentinstag',
      angle: 'Geschenkideen für zwei, hausgemachte Spezialitäten und Last-Minute-Tipps',
    },
    {
      date: 'Mai / Juni',
      event: 'Muttertag & Vatertag',
      angle: 'Regionale Geschenke zum direkten Abholen im Quartiergeschäft',
    },
    {
      date: 'August / Sept.',
      event: '1. August & Herbststart',
      angle: 'Schweizer Spezialitäten, Herbstneuheiten und SMS-Einladung an Stammkunden',
    },
    {
      date: 'Dezember',
      event: 'Advent & Weihnachten',
      angle: 'Spezialöffnungszeiten und Festtags-Vorbestellungen direkt an der Theke',
    },
  ],
  en: [
    {
      date: 'January',
      event: 'Three Kings’ Day',
      angle: 'Fresh morning bakes and easy in-shop pre-orders',
    },
    {
      date: 'February',
      event: 'Valentine’s Day',
      angle: 'Gift sets for two, handmade treats, and last-minute neighborhood picks',
    },
    {
      date: 'May / June',
      event: 'Mother’s & Father’s Day',
      angle: 'Local gift ideas ready for same-day pickup in your shop',
    },
    {
      date: 'August / Sept.',
      event: 'Swiss National Day & Back to Work',
      angle: 'Seasonal specialties and Flash SMS reminders to welcome regulars back',
    },
    {
      date: 'December',
      event: 'Holiday Season',
      angle: 'Special holiday hours and festive pre-orders at the counter',
    },
  ],
};

export function getSeasonalCalendar(lang: Language = 'fr'): SeasonalCalendarItem[] {
  return SEASONAL_CALENDAR_BY_LANG[lang];
}

export const SEASONAL_CALENDAR_HIGHLIGHTS = SEASONAL_CALENDAR_BY_LANG.fr;

export const MERCHANTS_GALLERY = [
  {
    image: ASSETS.bakeryCounter,
    alt: 'Boulanger indépendant au comptoir montrant Komero sur mobile à une cliente',
    label: 'Boulangerie & Pâtisserie',
  },
  {
    image: ASSETS.hairSalon,
    alt: 'Coiffeur en salon utilisant le répondeur SMS Komero sur son smartphone',
    label: 'Coiffure & Beauté',
  },
  {
    image: ASSETS.wineShop,
    alt: 'Caviste indépendant partageant une offre Promo Flash SMS avec un client',
    label: 'Caviste & Épicerie fine',
  },
  {
    image: ASSETS.pressingCounter,
    alt: 'Équipe de pressing au comptoir accueillant les clients avec le QR code Roue Komero',
    label: 'Pressing & Services',
  },
] as const;
