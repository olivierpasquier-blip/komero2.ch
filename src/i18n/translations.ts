import type { Language } from '../config/siteConfig';
import type { FeatureRoutePath } from '../lib/seo';

export interface FeaturePageCopy {
  moduleNumber: string;
  tierLabel: string;
  tierNote: string;
  headline: string;
  subtitle: string;
  problemTitle: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionPoints: string[];
  fieldKicker: string;
  fieldTitle: string;
  fieldText: string;
  fieldBullets: string[];
  fieldImageAlt: string;
  editorialKicker: string;
  editorialTitle: string;
  editorialCards: Array<{ title: string; body: string }>;
}

export interface SiteTranslations {
  nav: {
    logoAria: string;
    mainNavAria: string;
    home: string;
    features: string;
    featuresDropdownAria: string;
    bonusTitle: string;
    bonusSubtitle: string;
    pricing: string;
    contact: string;
    demoLink: string;
    primaryCta: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuAria: string;
    mobileFeaturesHeading: string;
    mobileBonusLink: string;
    mobileLanguageLabel: string;
    breadcrumbAria: string;
    breadcrumbHome: string;
    tierEssentiel: string;
    tierPremium: string;
  };
  footer: {
    headline: string;
    baseline: string;
    locationLine: string;
    privacyBadge: string;
    featuresHeading: string;
    navigationHeading: string;
    legalHeading: string;
    luckyWheelLink: string;
    mentionsLink: string;
    cgvLink: string;
    cgvShort: string;
    privacyLink: string;
    privacyShort: string;
    manageSubscription: string;
    manageNoticePrefix: string;
    copyrightSuffix: string;
  };
  home: {
    heroBadge: string;
    h1: string;
    baseline: string;
    heroHighlights: readonly [string, string, string];
    primaryCta: string;
    secondaryCta: string;
    sectorsLine: string;
    reassuranceAria: string;
    reassuranceItems: readonly string[];
    leversKicker: string;
    leversH2: string;
    leversSubtitle: string;
    leversPricingLink: string;
    leversDiscoverPrefix: string;
    levers: readonly {
      id: string;
      number: string;
      icon: 'reviews' | 'gbp' | 'social' | 'missedCalls' | 'smsFlash' | 'marketWatch';
      tierId: 'essentiel' | 'premium';
      tierLabel: string;
      title: string;
      description: string;
      proof: string;
      path:
        | '/gestion-fiche-google'
        | '/avis-google-ia'
        | '/reseaux-sociaux'
        | '/repondeur-sms'
        | '/campagnes-sms-flash'
        | '/veille-concurrence';
    }[];
    starterBadge: string;
    starterTitle: string;
    starterSubtitle: string;
    starterBanner: string;
    starterLinkWheel: string;
    starterLinkPricing: string;
    starterVisualAria: string;
    starterVisualScan: string;
    starterVisualGift: string;
    starterVisualWheelTitle: string;
    starterVisualWheelSub: string;
    starterVisualGoogleSub: string;
    starterVisualCaption: string;
    fieldCasesKicker: string;
    fieldCasesH2: string;
    fieldCasesSubtitle: string;
    fieldCasesBadge: string;
    fieldCases: readonly {
      id: string;
      business: string;
      city: string;
      quote: string;
      routine: string;
      resultTag: string;
    }[];
    readyPrompt: string;
    readyTrialCta: string;
    readyDemoCta: string;
    featuresKicker: string;
    featuresH2: string;
    featuresPricingLink: string;
    featureCardTierPrefix: string;
    featureCardDiscoverPrefix: string;
    bottomAria: string;
    bottomKicker: string;
    bottomH2: string;
    buyTagline: string;
    buyTitle: string;
    buyBody: string;
    buyCta: string;
    demoTagline: string;
    demoTitle: string;
    demoBody: string;
    demoCta: string;
  };
  featureTemplate: {
    modulePrefix: string;
    formulaPrefix: string;
    beforeAfterAria: string;
    problemKicker: string;
    solutionKicker: string;
    complementaryAria: string;
    complementaryKicker: string;
    complementaryH2: string;
    comparePlansLink: string;
    moduleLabel: string;
    discoverPrefix: string;
    wheelBonusBadge: string;
    wheelBonusTitle: string;
    wheelBonusDesc: string;
    wheelBonusCta: string;
    finalCtaKicker: string;
    finalCtaH2: string;
    finalCtaBody: string;
    finalCtaPricing: string;
    finalCtaDemo: string;
  };
  featurePages: Record<FeatureRoutePath, FeaturePageCopy>;
  socialSteps: Array<{ step: string; title: string; body: string }>;
  socialCalendarKicker: string;
  socialCalendarH2: string;
  socialCalendarBody: string;
  luckyWheel: {
    kicker: string;
    h1: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    howKicker: string;
    howH2: string;
    howBody: string;
    smsBanner: string;
    benefits: Array<{ title: string; body: string }>;
    complementaryAria: string;
    complementaryKicker: string;
    complementaryH2: string;
    complementaryCards: Array<{
      meta: string;
      title: string;
      body: string;
      cta: string;
      to: FeatureRoutePath;
    }>;
    finalKicker: string;
    finalH2: string;
    finalBody: string;
    finalPricingCta: string;
    finalDemoCta: string;
  };
  pricing: {
    kicker: string;
    h1: string;
    subtitle: string;
    launchBanner: string;
    cgvPrefix: string;
    cgvLinkText: string;
    cgvSuffix: string;
    cgvWarning: string;
    cgvAccepted: string;
    trialBadge: string;
    stripeRedirectNote: string;
    stripeLockedNote: string;
    reassuranceStripe: string;
    vatNote: string;
    comparisonKicker: string;
    comparisonH2: string;
    comparisonFeatureCol: string;
    comparisonEssentielCol: string;
    comparisonPremiumCol: string;
    comparisonIncluded: string;
    comparisonNotIncluded: string;
    faqKicker: string;
    faqH2: string;
    helpTitle: string;
    helpBody: string;
    helpCta: string;
  };
  contact: {
    kicker: string;
    h1: string;
    subtitle: string;
    directHeading: string;
    phoneLabel: string;
    emailLabel: string;
    locationText: string;
    hoursText: string;
    fieldImageAlt: string;
    fieldCaption: string;
    formTitle: string;
    formSubtitle: string;
    successMessage: string;
    fallbackTitle: string;
    fallbackBody: string;
    fallbackEmailBtn: string;
    fallbackCallBtn: string;
    fallbackRetryBtn: string;
    labels: {
      commerce: string;
      commercePlaceholder: string;
      metier: string;
      metierPlaceholder: string;
      postal: string;
      postalPlaceholder: string;
      nom: string;
      nomPlaceholder: string;
      tel: string;
      telPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      sujet: string;
      message: string;
      messagePlaceholder: string;
    };
    step1Badge: string;
    step2Badge: string;
    step2ToggleExpand: string;
    step2ToggleCollapse: string;
    step2Title: string;
    step2Subtitle: string;
    step2SubmitIdle: string;
    step2SubmitLoading: string;
    step2SavedMessage: string;
    step2SkipBtn: string;
    step1DoneTitle: string;
    step1DoneBody: string;
    newRequestBtn: string;
    consentPrefix: string;
    consentPrivacyLink: string;
    consentSuffix: string;
    submitIdle: string;
    submitLoading: string;
    bottomReassurance: string;
  };
  paymentModal: {
    closeAria: string;
    kicker: string;
    title: string;
    introPrefix: string;
    introBonus: string;
    introAnd: string;
    introTrial: string;
    introSuffix: string;
    bullet1Strong: string;
    bullet1Text: string;
    bullet2Strong: string;
    bullet2Text: string;
    bullet3Strong: string;
    bullet3Text: string;
    continueBtn: string;
  };
  legalUi: {
    tabsAria: string;
    printBtn: string;
    lastUpdated: string;
    publisherLabel: string;
    portalBtnPrefix: string;
    portalExternalLabel: string;
    contactLink: string;
    pricingLink: string;
    tabs: {
      mentions: string;
      cgv: string;
      privacy: string;
    };
    headers: {
      mentions: { kicker: string; title: string; subtitlePrefix: string };
      cgv: { kicker: string; title: string; subtitle: string };
      privacy: { kicker: string; title: string; subtitlePrefix: string };
    };
  };
  deviceFrames: {
    pcLabel: string;
    pcCaptionTag: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteTranslations> = {
  fr: {
    nav: {
      logoAria: 'Komero Suisse — Retour à l’accueil',
      mainNavAria: 'Navigation principale',
      home: 'Accueil',
      features: 'Fonctionnalités',
      featuresDropdownAria: 'Les 5 fonctionnalités Komero et le Starter Pack offert',
      bonusTitle: 'Offert : Starter Pack Contacts & Avis Google',
      bonusSubtitle: 'Chevalet QR code comptoir & fichier client inclus',
      pricing: 'Tarifs',
      contact: 'Contact',
      demoLink: 'Démo 5 min',
      primaryCta: 'Démarrer (7 jours gratuits)',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      mobileMenuAria: 'Menu mobile',
      mobileFeaturesHeading: 'Les 5 fonctionnalités & bonus',
      mobileBonusLink: 'Bonus : Roue de la chance au comptoir',
      mobileLanguageLabel: 'Langue du site',
      breadcrumbAria: "Fil d'Ariane",
      breadcrumbHome: 'Accueil',
      tierEssentiel: 'Essentiel',
      tierPremium: 'Premium',
    },
    footer: {
      headline: 'Plus visible dans votre quartier. Plus de clients en boutique.',
      baseline:
        'L’assistant IA qui gère vos avis Google, anime vos réseaux sociaux et fait revenir vos clients en 2 minutes par jour.',
      locationLine: 'Au service des commerçants et artisans indépendants en Suisse (romande & alémanique)',
      privacyBadge: 'Conforme nLPD (Suisse) & RGPD · Anonymisation active · Hébergement Europe',
      featuresHeading: 'Fonctionnalités',
      navigationHeading: 'Navigation',
      legalHeading: 'Informations légales',
      luckyWheelLink: 'Roue de la chance',
      mentionsLink: 'Mentions légales',
      cgvLink: 'Conditions Générales de Vente (CGV)',
      cgvShort: 'CGV',
      privacyLink: 'Politique de confidentialité (nLPD & RGPD)',
      privacyShort: 'Confidentialité',
      manageSubscription: 'Gérer ou résilier mon abonnement',
      manageNoticePrefix: 'Abonnement sans engagement résiliable en 1 clic via votre portail client ou par email à ',
      copyrightSuffix: 'Tous droits réservés.',
    },
    home: {
      heroBadge: '✨ Assistant IA clé en main pour commerçants & artisans',
      h1: 'Grimpez en tête sur Google dans votre quartier. Attirez plus de clients en boutique.',
      baseline:
        "L'assistant IA clé en main qui pilote votre référencement local : avis Google, mise à jour de votre fiche Google, posts réseaux sociaux, SMS promos et appels manqués en 2 minutes par jour.",
      heroHighlights: [
        'Référencement Google Maps boosté',
        'Clé en main en 10 min',
        'Starter Pack Contacts & Avis offert',
      ],
      primaryCta: 'Démarrer (7 jours gratuits)',
      secondaryCta: 'Demander une démo de 5 min',
      sectorsLine:
        'Boulangers · Coiffeurs · Restaurateurs · Cavistes · Boutiques · Artisans de quartier en Suisse',
      reassuranceAria: 'Engagements Komero Suisse',
      reassuranceItems: [
        'Sans engagement (19,90 ou 49,90 CHF/mois)',
        '7 jours d’essai gratuit',
        'PC & Mobile PWA inclus',
        'Conforme nLPD & RGPD',
      ],
      leversKicker: '6 leviers IA · Référencement local Google & fidélisation',
      leversH2: '6 outils concrets pour remonter sur Google et remplir votre boutique',
      leversSubtitle:
        'Chaque action renforce votre fiche Google Maps et fait revenir vos clients du quartier, sans aucune compétence technique.',
      leversPricingLink: 'Comparer les formules en CHF',
      leversDiscoverPrefix: 'Découvrir',
      levers: [
        {
          id: 'reviews',
          number: '01',
          icon: 'reviews',
          tierId: 'essentiel',
          tierLabel: 'Essentiel · 19,90 CHF',
          title: 'Réponses aux Avis Google',
          description:
            'Répondez à 100 % de vos avis Google en 1 clic avec des mots-clés locaux et recevez une alerte SMS immédiate sur chaque avis critique.',
          proof: 'Top 3 Google Maps & note 4,8★ préservée',
          path: '/avis-google-ia',
        },
        {
          id: 'gbp',
          number: '02',
          icon: 'gbp',
          tierId: 'essentiel',
          tierLabel: 'Essentiel · 19,90 CHF',
          title: 'Gestion de votre Fiche Google',
          description:
            'Gardez votre fiche Google Business vivante : horaires exceptionnels, jours fériés, description optimisée par l’IA et actualités locales.',
          proof: 'Signal fort pour l’algorithme Google Maps',
          path: '/gestion-fiche-google',
        },
        {
          id: 'social',
          number: '03',
          icon: 'social',
          tierId: 'essentiel',
          tierLabel: 'Essentiel · 19,90 CHF',
          title: 'Réseaux Sociaux Express',
          description:
            'Prenez une photo au comptoir sur votre mobile : Komero rédige la légende, ajoute les hashtags du quartier et publie sur Instagram & Facebook.',
          proof: 'Du cliché au post prêt en 15 secondes',
          path: '/reseaux-sociaux',
        },
        {
          id: 'missed-calls',
          number: '04',
          icon: 'missedCalls',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Appels Manqués rattrapés par SMS',
          description:
            'Un appel manqué en plein rush ? Votre client reçoit aussitôt un SMS chaleureux avec vos horaires ou un lien de réservation.',
          proof: 'SMS envoyé automatiquement en 12 s',
          path: '/repondeur-sms',
        },
        {
          id: 'sms-flash',
          number: '05',
          icon: 'smsFlash',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Campagnes Promo Flash SMS',
          description:
            'Remplissez un après-midi calme ou écoulez vos invendus en envoyant un SMS court conforme STOP à votre fichier client fidèle.',
          proof: '95 % de SMS lus en moins de 3 min',
          path: '/campagnes-sms-flash',
        },
        {
          id: 'market-watch',
          number: '06',
          icon: 'marketWatch',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Idées & Veille du Quartier',
          description:
            'Suivez la visibilité des commerces voisins et recevez chaque semaine des idées de posts prêtes calées sur la vie de votre quartier.',
          proof: 'Rapport local & idées chaque semaine',
          path: '/veille-concurrence',
        },
      ],
      starterBadge: 'Offert à votre inscription',
      starterTitle: 'Starter Pack Contacts & Avis Google',
      starterSubtitle:
        'Un chevalet QR code prêt à poser au comptoir pour récolter automatiquement des avis Google 5★ et bâtir votre fichier client SMS, sans aucun jargon technique.',
      starterBanner:
        'Inclus gratuitement dans Essentiel (19,90 CHF/mois) et Premium (49,90 CHF/mois) • 7 jours gratuits',
      starterLinkWheel: 'Découvrir la Roue de la chance au comptoir',
      starterLinkPricing: 'Voir les formules en CHF',
      starterVisualAria:
        'Chevalet QR code Komero prêt à poser sur le comptoir à côté d’un smartphone affichant La Roue de la Chance et l’invitation à laisser un avis Google 5 étoiles',
      starterVisualScan: 'Scannez & jouez !',
      starterVisualGift: '1 cadeau à gagner',
      starterVisualWheelTitle: 'La Roue de la Chance',
      starterVisualWheelSub: 'Tournez en 15 secondes',
      starterVisualGoogleSub: 'Avis client + contact enregistrés',
      starterVisualCaption: 'Prêt à poser sur votre comptoir dès le 1er jour',
      fieldCasesKicker: 'Exemples d’usage en boutique · Suisse',
      fieldCasesH2: 'Une solution clé en main pensée pour les commerçants de proximité',
      fieldCasesSubtitle:
        'Trois situations concrètes résolues en 2 minutes par jour, disponibles immédiatement dès votre inscription en Suisse.',
      fieldCasesBadge: 'Exemple d’usage en boutique',
      fieldCases: [
        {
          id: 'bakery-ge',
          business: 'Boulangerie-Pâtisserie',
          city: 'Genève',
          quote:
            '« Zéro appel perdu pendant le rush de midi et +14 avis Google en 3 semaines grâce au chevalet comptoir. »',
          routine: 'Répondeur SMS automatique + réponses IA aux avis en 2 min/jour',
          resultTag: '0 appel perdu · +14 avis Google',
        },
        {
          id: 'hair-ls',
          business: 'Salon de Coiffure',
          city: 'Lausanne',
          quote:
            '« Créneaux creux du mardi remplis en 20 minutes par SMS Flash et fiche Google toujours à jour les jours fériés. »',
          routine: 'SMS Flash fichier client + synchro jours fériés Google Maps',
          resultTag: 'Créneaux remplis en 20 min',
        },
        {
          id: 'wine-zh',
          business: 'Caviste & Épicerie fine',
          city: 'Zurich',
          quote:
            '« Une photo de nouvel arrivage prise au téléphone = post Instagram, Facebook et actu Google publiés en 15 secondes. »',
          routine: 'Post Express Mobile + publication multi-canaux en 1 clic',
          resultTag: 'IG + FB + Google en 15 s',
        },
      ],
      readyPrompt:
        'Prêt à lancer Komero dans votre boutique ? Solution clé en main disponible immédiatement, sans engagement.',
      readyTrialCta: 'Essai gratuit 7 jours',
      readyDemoCta: 'Démo de 5 min',
      featuresKicker: 'Les 6 leviers Komero · PC & Mobile PWA',
      featuresH2: '6 outils IA pour attirer, répondre et fidéliser dans votre quartier',
      featuresPricingLink: 'Voir les tarifs en CHF',
      featureCardTierPrefix: 'Formule',
      featureCardDiscoverPrefix: 'Découvrir',
      bottomAria: 'Passer à l’action',
      bottomKicker: 'Prêt à remonter en tête sur Google dans votre quartier ?',
      bottomH2: 'Démarrez vos 7 jours gratuits ou réservez une démo de 5 min',
      buyTagline: '7 jours gratuits • 19,90 ou 49,90 CHF/mois • Sans engagement',
      buyTitle: 'Activer Komero en autonomie dès aujourd’hui',
      buyBody:
        'Choisissez Essentiel (19,90 CHF/mois — Fiche Google, Avis IA & Réseaux Sociaux) ou Premium (49,90 CHF/mois — tout Essentiel + Audit & Google Posts, Appels manqués SMS, Promos Flash & Veille), avec Starter Pack offert et démarrage en 10 minutes.',
      buyCta: 'Démarrer (7 jours gratuits)',
      demoTagline: 'Visio partout en Suisse · Diagnostic gratuit de votre fiche Google',
      demoTitle: 'Vous préférez une démo personnalisée de 5 min ?',
      demoBody:
        'Nous regardons ensemble votre fiche Google actuelle et vous montrons en 5 minutes comment Komero s’adapte à votre métier et à votre quartier.',
      demoCta: 'Demander une démo de 5 min',
    },
    featureTemplate: {
      modulePrefix: 'Fonction',
      formulaPrefix: 'Formule',
      beforeAfterAria: 'Avant et avec Komero',
      problemKicker: 'Le constat en boutique',
      solutionKicker: 'La solution Komero',
      complementaryAria: 'Fonctionnalités complémentaires Komero',
      complementaryKicker: 'Maillage des outils Komero · PC & Mobile',
      complementaryH2: 'Poursuivez la découverte des fonctionnalités complémentaires',
      comparePlansLink: 'Comparer les formules en CHF',
      moduleLabel: 'Module',
      discoverPrefix: 'Découvrir',
      wheelBonusBadge: 'Bonus inclus gratuitement',
      wheelBonusTitle: 'La Roue de la chance au comptoir',
      wheelBonusDesc:
        'Chevalet QR code prêt à poser pour collecter des avis Google 5★ et enrichir votre fichier client SMS.',
      wheelBonusCta: 'Découvrir la Roue de la chance au comptoir',
      finalCtaKicker: 'Starter Pack Contacts & Avis Google offert · 7 jours gratuits',
      finalCtaH2: 'Prêt à activer cette fonctionnalité dans votre boutique ?',
      finalCtaBody:
        'Souscrivez en autonomie en 2 minutes sans engagement (tarifs en CHF) ou demandez une démo rapide sur votre propre commerce.',
      finalCtaPricing: 'Voir les tarifs en CHF',
      finalCtaDemo: 'Demander une démo',
    },
    featurePages: {
      '/avis-google-ia': {
        moduleNumber: '01',
        tierLabel: 'Essentiel',
        tierNote: 'Visibilité locale Google Maps & synergie Roue QR Code',
        headline: 'Avis Google IA : grimpez dans le Top 3 Google Maps de votre quartier',
        subtitle:
          'Répondez à 100 % de vos avis Google en 1 clic sur PC ou mobile avec anonymisation nLPD & RGPD, mots-clés locaux et gestion apaisée des avis négatifs.',
        problemTitle: 'Pourquoi des avis sans réponse vous coûtent des clients',
        problemPoints: [
          'Manque de temps le soir pour répondre à chaque avis reçu sur Google.',
          'Un seul avis négatif mal géré ou sans réponse fait hésiter les nouveaux passants.',
          'Sans avis récents ni mots-clés métier + ville, vos concurrents passent devant vous sur Google Maps.',
        ],
        solutionTitle: 'Ce que Komero automatise pour votre réputation locale',
        solutionPoints: [
          'Réponses personnalisées en 1 clic reprenant le prénom, le produit cité et la note du client.',
          'Collecte d’avis et alertes d’avis négatifs envoyées par SMS pour réagir vite et rassurer vos visiteurs.',
          'Mots-clés locaux intégrés naturellement + synergie avec le Starter Pack Contacts & Avis Google offert.',
        ],
        fieldKicker: 'Validation humaine en 1 clic · Alertes par SMS · Conforme nLPD & RGPD',
        fieldTitle: 'Transformez vos clients satisfaits au comptoir en ambassadeurs locaux',
        fieldText:
          'Un client ravi oublie souvent de laisser un avis une fois rentré chez lui. Grâce au chevalet QR Code offert, aux sollicitations simples par SMS et aux réponses enrichies en mots-clés locaux, votre fiche Google devient votre premier apporteur de clients en Suisse.',
        fieldBullets: [
          'Optimisé pour les recherches « métier + ville / quartier »',
          'Starter Pack Contacts & Avis Google offert dès l’inscription',
          'Alerte immédiate par SMS en cas d’avis inférieur à 4 étoiles',
          'Validation obligatoire en 1 clic avant publication sur Google',
        ],
        fieldImageAlt:
          'Artisan boulanger présentant la fiche Google Maps de sa boutique sur smartphone à une cliente souriante',
        editorialKicker: 'Référencement local Google Business Profile',
        editorialTitle: 'Comment vos réponses aux avis Google font remonter votre fiche sur Maps',
        editorialCards: [
          {
            title: 'Régularité appréciée par l’algorithme local',
            body: 'Google valorise les fiches vivantes qui récoltent des avis récents et y répondent rapidement. En répondant chaque semaine en un clic, vous montrez aux internautes et à Google Maps que votre commerce est actif et attentif.',
          },
          {
            title: 'Mots-clés métier et quartier sans sur-optimisation',
            body: 'Chaque brouillon proposé par Komero cite naturellement votre spécialité (boulangerie artisanale, salon de coiffure, cave à vin, restaurant de quartier) et votre commune afin de renforcer votre présence sur les recherches locales.',
          },
          {
            title: 'Gestion calme et constructive des avis mitigés',
            body: 'En cas de commentaire critique, Komero vous alerte immédiatement par SMS et prépare une réponse courtoise, factuelle et rassurante qui démontre votre sérieux auprès des futurs clients.',
          },
        ],
      },
      '/reseaux-sociaux': {
        moduleNumber: '02',
        tierLabel: 'Essentiel',
        tierNote: 'Instagram & Facebook en 15 secondes',
        headline: 'Réseaux sociaux commerçants : d’une photo au post prêt en 15 secondes',
        subtitle:
          'Prenez une photo en boutique sur votre smartphone : Komero rédige une légende accrocheuse avec hashtags locaux et publie simultanément sur Instagram et Facebook.',
        problemTitle: 'Pourquoi vos pages Instagram et Facebook restent en pause',
        problemPoints: [
          'Difficile de trouver l’inspiration et les bons mots entre deux clients au comptoir.',
          'Perte de temps à recopier chaque publication séparément sur Instagram puis sur Facebook.',
          'Les temps forts saisonniers (Fête des Mères, rentrée, fêtes de fin d’année) arrivent trop vite sans préparation.',
        ],
        solutionTitle: 'Ce que Komero prépare dès que vous prenez une photo',
        solutionPoints: [
          'Photo prise en boutique sur mobile → légende gourmande ou chaleureuse + hashtags locaux en 15 secondes.',
          'Publication simultanée en 1 clic sur Instagram et Facebook, ou programmation sur votre calendrier PC.',
          '30 posts prêts par mois et rappels automatiques des fêtes commerçantes de votre région.',
        ],
        fieldKicker: '',
        fieldTitle: '',
        fieldText: '',
        fieldBullets: [],
        fieldImageAlt: '',
        editorialKicker: 'Animation locale Instagram & Facebook',
        editorialTitle:
          'Des publications pensées pour faire entrer les habitants du quartier en boutique',
        editorialCards: [
          {
            title: 'Votre vrai ton de commerçant préservé',
            body: 'Pas de texte impersonnel ni de phrases artificielles : Komero retient votre style (chaleureux, gourmand, expert ou convivial) et adapte chaque légende à vos produits du jour et à votre clientèle locale.',
          },
          {
            title: 'Constance hebdomadaire sans agence',
            body: 'Publier deux à trois fois par semaine suffit à rester visible dans le fil de vos abonnés locaux. Depuis votre téléphone entre deux clients ou depuis votre PC le lundi matin, vous planifiez votre semaine en quelques minutes.',
          },
          {
            title: 'Visibilité locale ciblée sur votre commune',
            body: 'Chaque post associe des hashtags géolocalisés pertinents (ville, quartier, savoir-faire artisanal) afin que vos photos touchent des voisins susceptibles de passer en magasin dès aujourd’hui.',
          },
        ],
      },
      '/repondeur-sms': {
        moduleNumber: '03',
        tierLabel: 'Premium',
        tierNote: 'Numéro pro & SMS automatique sur appel manqué',
        headline: 'Un appel manqué en plein rush ? Komero répond instantanément par SMS',
        subtitle:
          'Dès qu’un appel est manqué pendant le coup de feu en boutique, Komero envoie automatiquement un SMS d’accueil chaleureux et prépare vos réponses aux questions fréquentes.',
        problemTitle: 'Ce qui se passe quand le téléphone sonne en plein rush',
        problemPoints: [
          'Impossible de décrocher avec un client devant vous, au bac à shampoing ou au fournil.',
          'Un client qui tombe sur une messagerie vocale raccroche et appelle le commerce voisin.',
          'Les questions répétitives (horaires, stocks, réservations) s’accumulent en fin de journée.',
        ],
        solutionTitle: 'Comment Komero rattrape chaque client par SMS',
        solutionPoints: [
          'Envoi automatique d’un SMS d’accueil chaleureux dans les 12 secondes suivant l’appel manqué.',
          'Boîte de réception SMS IA centralisée préparant vos réponses sur vos horaires, stocks et créneaux.',
          'Validation en 1 clic sur PC ou mobile entre deux clients — zéro appel oublié.',
        ],
        fieldKicker: 'Numéro pro dédié · Boîte de réception SMS PC & Mobile',
        fieldTitle: 'Un accueil irréprochable par SMS, même pendant le coup de feu',
        fieldText:
          'Gardez votre attention sur vos clients en boutique pendant que Komero rassure par SMS ceux qui appellent et collecte leur demande (réservation, disponibilité, horaire).',
        fieldBullets: [
          'Envoi automatique du SMS d’accueil dès qu’un appel reste sans réponse',
          'Boîte de réception SMS IA centralisée sur PC et mobile',
          'Réponses suggérées selon vos horaires, stocks et modalités',
          'Zéro client oublié en fin de journée',
        ],
        fieldImageAlt:
          'Coiffeur indépendant vérifiant sur smartphone les SMS et réservations clients récupérés après un appel manqué',
        editorialKicker: 'Récupération d’appels manqués par SMS',
        editorialTitle:
          'Pourquoi un SMS envoyé en 12 secondes évite de perdre un client au profit du voisin',
        editorialCards: [
          {
            title: 'Réaction immédiate au moment où le client cherche',
            body: 'Un habitant qui appelle pour réserver une table, prendre rendez-vous chez le coiffeur ou vérifier un stock laisse rarement un message vocal. Le SMS instantané maintient le lien pendant qu’il a encore son téléphone en main.',
          },
          {
            title: 'Un canal universel lisible sur tous les téléphones',
            body: 'Contrairement aux messageries tierces qui nécessitent un compte, le SMS fonctionne chez 100 % de vos clients de quartier, quel que soit leur âge ou leur modèle de téléphone.',
          },
          {
            title: 'Zéro interruption pendant vos prestations en boutique',
            body: 'Vous restez concentré sur le client présent face à vous. Dès que vous avez trente secondes de calme, votre boîte SMS centralisée sur mobile et PC affiche les demandes triées avec des réponses déjà prêtes.',
          },
        ],
      },
      '/campagnes-sms-flash': {
        moduleNumber: '04',
        tierLabel: 'Premium',
        tierNote: '145 caractères max + STOP · 95 % d’ouverture',
        headline: 'Campagnes SMS Promo Flash : remplissez un créneau creux en 3 minutes',
        subtitle:
          'Exploitez votre fichier client SMS constitué au comptoir grâce au Starter Pack Contacts & Avis Google offert : un SMS court avec mention STOP déclenche du passage immédiat en boutique.',
        problemTitle: 'Pourquoi les heures creuses et invendus pèsent sur votre marge',
        problemPoints: [
          'Des invendus en fin d’après-midi ou un mardi calme qui restent sans visiteurs.',
          'Un e-mail promotionnel est lu trop tard ou finit noyé dans les courriers indésirables.',
          'Pas de fichier client mobile exploitable et conforme nLPD pour prévenir vos habitués rapidement.',
        ],
        solutionTitle: 'Un bouton Promo Flash SMS relié à votre fichier client',
        solutionPoints: [
          'Fichier client SMS alimenté automatiquement au comptoir grâce au Starter Pack offert.',
          'Rédaction IA en 1 clic calibrée à 145 caractères maximum avec nom d’enseigne et mention STOP.',
          '95 % des SMS ouverts en moins de 3 minutes pour faire venir vos habitués dans l’heure.',
        ],
        fieldKicker: '145 caractères calibrés · Fichier client constitué au comptoir',
        fieldTitle: 'Simple pour vous, respectueux pour vos clients',
        fieldText:
          'Saisissez votre offre sur PC ou mobile : Komero la reformule sous 145 caractères avec la mention STOP réglementaire et respecte automatiquement les plages horaires autorisées.',
        fieldBullets: [
          'Envoi ciblé en 1 clic à vos clients fidèles consentants',
          'Respect automatique des horaires d’envoi et de la nLPD (Suisse)',
          'Gestion automatique des désinscriptions STOP et hébergement Europe',
        ],
        fieldImageAlt:
          'Caviste indépendant montrant une offre SMS flash sur smartphone à un client fidèle devant son comptoir',
        editorialKicker: 'Fidélisation SMS commerçants & artisans',
        editorialTitle:
          'Trois moments clés où une campagne SMS flash génère du chiffre d’affaires immédiat',
        editorialCards: [
          {
            title: 'Fin de journée anti-gaspillage et invendus',
            body: 'Un panier gourmand chez le boulanger, un lot de fleurs fraîches ou des plats du jour à écouler avant 19h : un SMS envoyé à 16h30 fait revenir les habitués du quartier en quelques minutes.',
          },
          {
            title: 'Relance des créneaux calmes en semaine',
            body: 'Un mardi après-midi pluvieux ou deux rendez-vous annulés au salon : proposez une attention privilégiée à vos clients fidèles enregistrés au comptoir pour lisser votre fréquentation.',
          },
          {
            title: 'Ventes privées et arrivages saisonniers',
            body: 'Prévenez vos meilleurs clients avant tout le monde lors d’un arrivage de nouvelles cuvées, d’une nouvelle collection ou de l’ouverture des pré-commandes pour les fêtes.',
          },
        ],
      },
      '/veille-concurrence': {
        moduleNumber: '05',
        tierLabel: 'Premium',
        tierNote: 'Analyse hebdomadaire du quartier & idées prêtes',
        headline: 'Veille concurrence locale : gardez un temps d’avance sur votre quartier',
        subtitle:
          'Chaque semaine, Komero analyse les commerces de votre zone, repère les tendances saisonnières locales et vous livre des idées de posts prêtes à tourner.',
        problemTitle: 'Pourquoi il est difficile de suivre son marché local seul',
        problemPoints: [
          'Pas le temps d’observer les offres, avis et publications des commerces voisins.',
          'Syndrome de la page blanche au moment de décider quoi mettre en avant cette semaine.',
          'Opportunités locales ou saisonnières manquées faute d’anticipation.',
        ],
        solutionTitle: 'Votre synthèse hebdomadaire du quartier en 60 secondes',
        solutionPoints: [
          'Analyse automatique des commerces de votre quartier et de leur rythme local.',
          'Détection des tendances saisonnières et recherches locales dans votre commune.',
          'Idées concrètes de publications et d’offres prêtes à lancer en 1 clic sur Instagram, Facebook ou SMS.',
        ],
        fieldKicker: 'Connecté à vos 4 autres modules Komero',
        fieldTitle: 'Ne vous demandez plus jamais quoi publier cette semaine',
        fieldText:
          'Un seul coup d’œil le lundi matin sur votre tableau de bord PC ou votre mobile suffit : vous savez quel produit mettre en avant et quel créneau privilégier.',
        fieldBullets: [
          'Synthèse hebdomadaire lisible en 60 secondes, sans jargon',
          'Envoi direct de l’idée de post vers Instagram & Facebook en 1 clic',
          'Adapté à votre adresse exacte, votre métier et la saison en cours',
        ],
        fieldImageAlt:
          'Rue commerçante animée illustrant l’analyse du marché local et des tendances de quartier Komero',
        editorialKicker: 'Radar concurrentiel et tendances locales',
        editorialTitle: 'Ce que votre synthèse locale passe au crible chaque lundi matin',
        editorialCards: [
          {
            title: 'Évolution des notes et volumes d’avis voisins',
            body: 'Suivez en un coup d’œil comment évolue votre position face aux commerces similaires autour de votre adresse, afin d’ajuster votre rythme de collecte d’avis Google au bon moment.',
          },
          {
            title: 'Sujets porteurs et événements de votre commune',
            body: 'Marchés locaux, ponts, météo, fêtes régionales ou recherches saisonnières en hausse : Komero repère les thèmes qui intéressent les habitants près de chez vous.',
          },
          {
            title: 'Passage immédiat de l’idée à la publication',
            body: 'Chaque recommandation hebdomadaire inclut une proposition prête à être transformée en post Instagram, en publication Facebook ou en offre SMS flash sans repartir de zéro.',
          },
        ],
      },
    },
    socialSteps: [
      {
        step: '01. Prenez la photo',
        title: 'Votre vitrine, un plat ou une nouveauté',
        body: 'Prenez une photo naturelle au comptoir, au fournil ou au salon. Aucun montage compliqué nécessaire.',
      },
      {
        step: '02. Texte + hashtags locaux',
        title: 'Rédigé à votre ton en 15 secondes',
        body: 'Komero reconnaît votre produit, rédige l’accroche et ajoute les hashtags de votre ville pour toucher les habitants du quartier.',
      },
      {
        step: '03. Publication simultanée',
        title: 'Instagram & Facebook en 1 clic',
        body: 'Validez immédiatement ou programmez à la meilleure heure pour garder vos réseaux actifs toute la semaine.',
      },
    ],
    socialCalendarKicker: 'Ne ratez aucun temps fort',
    socialCalendarH2: 'Le calendrier automatique des fêtes commerçantes',
    socialCalendarBody:
      'Komero vous rappelle chaque date clé à l’avance et prépare vos publications pour déclencher les pré-commandes en boutique.',
    luckyWheel: {
      kicker: 'Bonus offert à l’inscription · Inclus dans Essentiel et Premium',
      h1: 'La Roue de la chance au comptoir : plus d’avis Google et votre base client SMS',
      subtitle:
        'Posez votre chevalet QR code en caisse : chaque client tourne la Roue de la chance sur son téléphone, laisse un avis Google et rejoint votre fichier client SMS en quelques secondes, sans application à télécharger.',
      primaryCta: 'Démarrer (7 jours gratuits)',
      secondaryCta: 'Demander une démo de 5 min',
      imageAlt:
        'Visuel de la Roue de la chance Komero sur smartphone avec chevalet QR code comptoir pour collecter des avis Google et créer votre fichier client SMS',
      howKicker: 'Comment fonctionne votre Starter Pack Contacts & Avis Google',
      howH2: 'Un jeu simple au comptoir qui remplit votre boutique toute l’année',
      howBody:
        'Dès votre inscription, nous préparons votre Roue de la chance aux couleurs de votre enseigne avec vos lots (café offert, remise sur le prochain passage, produit découverte) et votre chevalet QR code prêt à poser.',
      smsBanner:
        'Collecte des lots, notifications et fichier client 100 % par SMS — conforme nLPD (Suisse) & RGPD.',
      benefits: [
        {
          title: 'Boost d’avis Google 5 étoiles',
          body: 'Vos clients ravis sont invités au meilleur moment — juste au comptoir — à publier leur avis Google, ce qui propulse votre fiche dans le Top 3 de votre quartier.',
        },
        {
          title: 'Fichier client SMS qualifié',
          body: 'Chaque participant reçoit son cadeau par SMS et enrichit automatiquement votre base client pour vos futures offres SMS lors des jours calmes.',
        },
        {
          title: 'Offert & conforme nLPD / RGPD',
          body: 'Inclus gratuitement dans les formules Essentiel et Premium, avec consentement explicite, mention STOP et données qui vous appartiennent à 100 %.',
        },
      ],
      complementaryAria: 'Outils complémentaires reliés à la Roue de la chance',
      complementaryKicker: 'Synergie complète avec votre assistant Komero',
      complementaryH2: 'Exploitez aussitôt vos nouveaux avis et contacts clients',
      complementaryCards: [
        {
          meta: 'Module 01 · Formule Essentiel',
          title: 'Avis Google IA',
          body: 'Répondez en 1 clic aux nouveaux avis 5★ générés par votre chevalet QR code au comptoir pour grimper sur Google Maps.',
          cta: 'Découvrir Avis Google IA',
          to: '/avis-google-ia',
        },
        {
          meta: 'Module 04 · Formule Premium',
          title: 'Promos par SMS en 1 clic',
          body: 'Relancez par SMS les clients inscrits via votre Roue de la chance pour remplir un jour calme ou écouler vos invendus.',
          cta: 'Découvrir Promos par SMS en 1 clic',
          to: '/campagnes-sms-flash',
        },
        {
          meta: 'Module 02 · Formule Essentiel',
          title: 'Réseaux Sociaux Express',
          body: 'Partagez en 15 secondes vos gagnants et nouveautés en vitrine sur Instagram et Facebook depuis votre smartphone.',
          cta: 'Découvrir Réseaux Sociaux Express',
          to: '/reseaux-sociaux',
        },
      ],
      finalKicker: 'Starter Pack Contacts & Avis Google offert · 7 jours gratuits',
      finalH2: 'Activez votre Roue de la chance en boutique sous 24h',
      finalBody:
        'Choisissez votre formule Komero en CHF sans engagement ou demandez une démonstration rapide de 5 minutes sur votre commerce.',
      finalPricingCta: 'Voir les tarifs en CHF',
      finalDemoCta: 'Demander une démo',
    },
    pricing: {
      kicker: 'Tarifs Suisse en CHF · Paiement sécurisé Stripe',
      h1: 'Des tarifs simples en CHF, transparents et sans engagement',
      subtitle:
        'Choisissez la formule adaptée à votre commerce. Le Starter Pack Contacts & Avis Google est inclus gratuitement dans les deux offres.',
      launchBanner:
        'Offre de lancement Suisse : 7 jours d’essai gratuit sur toutes les formules — sans engagement',
      cgvPrefix: 'J’atteste agir en tant que professionnel et j’accepte les ',
      cgvLinkText: 'Conditions Générales de Vente (CGV) de Komero',
      cgvSuffix: ' pour activer les liens de souscription sécurisés Stripe ci-dessous.',
      cgvWarning: 'Cochez cette case obligatoire avant d’accéder au paiement sécurisé Stripe.',
      cgvAccepted: 'CGV acceptées : vos boutons de souscription Stripe en CHF sont activés ci-dessous.',
      trialBadge: '7 jours gratuits',
      stripeRedirectNote: 'Redirection sécurisée vers Stripe en CHF (nouvel onglet)',
      stripeLockedNote: 'Cochez les CGV ci-dessus pour débloquer le paiement Stripe',
      reassuranceStripe:
        'Empreinte bancaire sécurisée Stripe • 0 CHF débité pendant 7 jours • Premier prélèvement au 8e jour sauf résiliation en 1 clic • Sans engagement.',
      vatNote: 'Tarifs affichés en francs suisses (CHF) · Sans engagement · Résiliation en 1 clic.',
      comparisonKicker: 'Comparatif détaillé',
      comparisonH2: 'Essentiel vs Premium : comparez chaque outil inclus',
      comparisonFeatureCol: 'Fonctionnalité incluse',
      comparisonEssentielCol: 'Essentiel · 19,90 CHF',
      comparisonPremiumCol: 'Premium · 49,90 CHF',
      comparisonIncluded: 'Inclus',
      comparisonNotIncluded: 'Non inclus',
      faqKicker: 'Questions fréquentes',
      faqH2: 'Essai 7 jours gratuits, facturation en CHF, résiliation et sécurité',
      helpTitle: 'Vous hésitez entre les deux formules ?',
      helpBody:
        'Échangez 5 minutes avec un conseiller Komero pour choisir l’offre adaptée à votre commerce en Suisse.',
      helpCta: 'Demander un conseil',
    },
    contact: {
      kicker: 'Échange humain · Réponse sous 24h · Sans engagement',
      h1: 'Une question ? Envie d’une démo de 5 minutes ?',
      subtitle:
        'Nous prenons 5 minutes pour regarder votre fiche Google et votre visibilité locale, sans jargon technique et sans engagement.',
      directHeading: 'Contact direct Suisse',
      phoneLabel: 'Appel ou SMS direct',
      emailLabel: 'Email',
      locationText:
        'Démonstration en visio partout en Suisse (Genève, Lausanne, Fribourg, Neuchâtel, Zürich, Bâle…) et sur place en Suisse romande.',
      hoursText: 'Créneaux calés sur vos heures creuses, du lundi au samedi.',
      fieldImageAlt:
        'Accompagnement personnalisé Komero au comptoir d’un commerce de proximité en Suisse',
      fieldCaption: 'Diagnostic gratuit de votre visibilité locale préparé avant notre appel.',
      formTitle: 'Demandez votre démo de 5 min (3 champs suffisent)',
      formSubtitle:
        'Laissez vos 3 coordonnées essentielles en 15 secondes — un conseiller Komero Suisse vous rappelle sur vos heures creuses.',
      successMessage:
        'Parfait ! Votre demande de rappel est enregistrée, nous vous contactons sous 24h.',
      fallbackTitle:
        'Connexion temporairement interrompue — votre demande a été sauvegardée localement.',
      fallbackBody:
        'Transmettez-la directement en 1 clic par email pré-rempli ou appelez-nous immédiatement :',
      fallbackEmailBtn: 'Envoyer par email',
      fallbackCallBtn: 'Appeler le',
      fallbackRetryBtn: 'Réessayer',
      labels: {
        commerce: 'Nom de votre commerce / enseigne',
        commercePlaceholder: 'Ex. Boulangerie du Lac',
        metier: 'Secteur d’activité (optionnel)',
        metierPlaceholder: 'Sélectionnez votre secteur',
        postal: 'NPA ou Ville',
        postalPlaceholder: 'Ex. 1204 Genève ou 1003 Lausanne',
        nom: 'Prénom & Nom (optionnel)',
        nomPlaceholder: 'Ex. Marc Rochat',
        tel: 'Téléphone portable',
        telPlaceholder: 'Ex. +41 79 123 45 67',
        email: 'Email professionnel (optionnel)',
        emailPlaceholder: 'Ex. contact@moncommerce.ch',
        sujet: 'Besoin prioritaire (optionnel)',
        message: 'Créneau préféré ou lien fiche Google (optionnel)',
        messagePlaceholder:
          'Ex. Disponible entre 14h30 et 16h30, ou lien vers votre fiche Google.',
      },
      step1Badge: 'Étape 1 / 2 · Rappel express (15 sec)',
      step2Badge: 'Étape 2 / 2 · Détails optionnels',
      step2ToggleExpand: 'Préciser mon secteur, email ou besoin (optionnel)',
      step2ToggleCollapse: 'Masquer les détails optionnels',
      step2Title: 'Un dernier détail pour préparer votre diagnostic gratuit ? (optionnel)',
      step2Subtitle:
        'Votre rappel est déjà confirmé. Ajoutez si vous le souhaitez votre secteur, email ou besoin prioritaire pour que votre démo de 5 min soit prête sur mesure.',
      step2SubmitIdle: 'Enregistrer ces précisions',
      step2SubmitLoading: 'Mise à jour...',
      step2SavedMessage:
        'Merci ! Vos précisions ont bien été ajoutées à votre demande de démo.',
      step2SkipBtn: 'C’est bon pour moi, merci',
      step1DoneTitle: 'Demande de rappel enregistrée !',
      step1DoneBody:
        'Un conseiller Komero Suisse vous rappelle très vite sur votre mobile pour votre démo personnalisée de 5 min.',
      newRequestBtn: 'Envoyer une autre demande',
      consentPrefix:
        'J’accepte que Komero utilise ces informations pour me recontacter dans le cadre de ma demande, conformément à la nLPD (Suisse), au RGPD et à la ',
      consentPrivacyLink: 'Politique de confidentialité',
      consentSuffix: '.',
      submitIdle: 'Être rappelé pour ma démo de 5 min',
      submitLoading: 'Envoi en cours...',
      bottomReassurance:
        '100 % gratuit et sans engagement · Conforme nLPD & RGPD · Données jamais revendues',
    },
    paymentModal: {
      closeAria: 'Fermer la fenêtre de confirmation',
      kicker: 'Souscription confirmée · Paiement sécurisé Stripe (CHF)',
      title: 'Bienvenue chez Komero ! Votre espace est activé',
      introPrefix: 'Félicitations ! Votre abonnement Komero, votre ',
      introBonus: 'Starter Pack Contacts & Avis Google offert',
      introAnd: ' et vos ',
      introTrial: '7 jours d’essai gratuit',
      introSuffix: ' sont activés. Nous vous contactons sous 2h pour finaliser la mise en route.',
      bullet1Strong: 'Prise de contact sous 2h',
      bullet1Text:
        'un conseiller Komero vous appelle pour paramétrer votre espace PC & Mobile.',
      bullet2Strong: 'Starter Pack Contacts & Avis Google offert',
      bullet2Text:
        'création immédiate de votre chevalet QR code comptoir et de votre fichier client SMS.',
      bullet3Strong: '7 jours d’essai gratuit, sans engagement',
      bullet3Text:
        '0 CHF débité pendant 7 jours, premier prélèvement au 8e jour sauf résiliation en 1 clic.',
      continueBtn: 'Parfait, continuer sur komero.ch',
    },
    legalUi: {
      tabsAria: 'Onglets informations légales',
      printBtn: 'Imprimer / PDF',
      lastUpdated: 'Dernière mise à jour : 2026 · www.komero.ch',
      publisherLabel: 'Éditeur & Directeur de publication',
      portalBtnPrefix: 'Gérer ou résilier mon abonnement',
      portalExternalLabel: 'Accéder au portail client Stripe (résiliation en 1 clic)',
      contactLink: 'Une question ? Contactez Komero →',
      pricingLink: 'Voir les tarifs en CHF →',
      tabs: {
        mentions: 'Mentions légales',
        cgv: 'CGV B2B (CHF)',
        privacy: 'Confidentialité (nLPD & RGPD)',
      },
      headers: {
        mentions: {
          kicker: 'Informations réglementaires · Suisse & Europe',
          title: 'Mentions légales',
          subtitlePrefix: 'Éditeur du site',
        },
        cgv: {
          kicker: 'Conditions professionnelles B2B · Tarifs CHF · 8 articles',
          title: 'Conditions Générales de Vente (CGV)',
          subtitle:
            'Conditions applicables aux abonnements Komero souscrits en CHF par des commerçants, artisans et professionnels en Suisse.',
        },
        privacy: {
          kicker: 'Protection des données · nLPD (Suisse) & RGPD',
          title: 'Politique de confidentialité',
          subtitlePrefix:
            'Transparence sur la collecte, la conservation, les sous-traitants et vos droits selon la nLPD suisse et le RGPD sur',
        },
      },
    },
    deviceFrames: {
      pcLabel: 'PC',
      pcCaptionTag: 'Aperçu de l’interface',
    },
  },

  de: {
    nav: {
      logoAria: 'Komero Schweiz — Zur Startseite',
      mainNavAria: 'Hauptnavigation',
      home: 'Startseite',
      features: 'Funktionen',
      featuresDropdownAria: 'Die 5 Komero-Funktionen und das gratis Starter Pack',
      bonusTitle: 'Gratis: Starter Pack Kontakte & Google-Bewertungen',
      bonusSubtitle: 'QR-Code-Aufsteller für die Theke & Kundenliste inklusive',
      pricing: 'Preise',
      contact: 'Kontakt',
      demoLink: '5-Min.-Demo',
      primaryCta: 'Jetzt starten (7 Tage gratis)',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schliessen',
      mobileMenuAria: 'Mobiles Menü',
      mobileFeaturesHeading: 'Die 5 Funktionen & Bonus',
      mobileBonusLink: 'Gratis-Bonus: Glücksrad für die Theke',
      mobileLanguageLabel: 'Sprache wählen',
      breadcrumbAria: 'Navigationspfad',
      breadcrumbHome: 'Startseite',
      tierEssentiel: 'Basis',
      tierPremium: 'Premium',
    },
    footer: {
      headline: 'Sichtbarer in Ihrem Quartier. Mehr Kunden im Geschäft.',
      baseline:
        'Der KI-Assistent, der Ihre Google-Bewertungen beantwortet, Social Media belebt und Kunden in 2 Minuten pro Tag zurückholt.',
      locationLine: 'Für unabhängige Läden, Gastronomie & Gewerbe in der ganzen Schweiz',
      privacyBadge: 'revDSG- (Schweiz) & DSGVO-konform · Anonymisierung aktiv · Hosting Europa',
      featuresHeading: 'Funktionen',
      navigationHeading: 'Navigation',
      legalHeading: 'Rechtliches',
      luckyWheelLink: 'Glücksrad an der Theke',
      mentionsLink: 'Impressum',
      cgvLink: 'Allgemeine Geschäftsbedingungen (AGB)',
      cgvShort: 'AGB',
      privacyLink: 'Datenschutzerklärung (revDSG & DSGVO)',
      privacyShort: 'Datenschutz',
      manageSubscription: 'Abo verwalten oder kündigen',
      manageNoticePrefix:
        'Ohne Vertragsbindung mit 1 Klick kündbar über das Kundenportal oder per E-Mail an ',
      copyrightSuffix: 'Alle Rechte vorbehalten.',
    },
    home: {
      heroBadge: '✨ Schlüsselfertiger KI-Assistent für Geschäfte & Handwerker',
      h1: 'Ganz oben bei Google in Ihrem Quartier. Mehr Kunden in Ihrem Geschäft.',
      baseline:
        'Der schlüsselfertige KI-Assistent für Ihre lokale Sichtbarkeit: Google-Bewertungen, Pflege Ihres Google-Unternehmensprofils, Social-Media-Posts, Promo-SMS und verpasste Anrufe in 2 Minuten pro Tag.',
      heroHighlights: [
        'Google Maps Ranking gestärkt',
        'Startklar in 10 Min.',
        'Starter Pack Kontakte & Bewertungen gratis',
      ],
      primaryCta: 'Jetzt starten (7 Tage gratis)',
      secondaryCta: '5-Min.-Demo anfragen',
      sectorsLine:
        'Bäckereien · Coiffeursalons · Restaurants · Weinhandlungen · Boutiquen · Quartierläden in der Schweiz',
      reassuranceAria: 'Komero Schweiz Versprechen',
      reassuranceItems: [
        'Ohne Vertragsbindung (19,90 oder 49,90 CHF/Mt.)',
        '7 Tage gratis testen',
        'PC & Smartphone PWA inklusive',
        'revDSG- & DSGVO-konform',
      ],
      leversKicker: '6 KI-Hebel · Lokales Google-Ranking & Stammkunden',
      leversH2: '6 konkrete Werkzeuge für mehr Google-Sichtbarkeit und Kundschaft im Laden',
      leversSubtitle:
        'Jeder Baustein stärkt Ihr Google-Profil und holt Nachbarn aus Ihrem Quartier zurück — ganz ohne Fachjargon.',
      leversPricingLink: 'Pakete in CHF vergleichen',
      leversDiscoverPrefix: 'Entdecken:',
      levers: [
        {
          id: 'reviews',
          number: '01',
          icon: 'reviews',
          tierId: 'essentiel',
          tierLabel: 'Basis · 19,90 CHF',
          title: 'Antworten auf Google-Bewertungen',
          description:
            'Beantworten Sie 100 % Ihrer Google-Bewertungen mit 1 Klick inklusive lokaler Suchbegriffe und sofortigem SMS-Alarm bei Kritik.',
          proof: 'Top 3 auf Google Maps & 4,8★ sichern',
          path: '/avis-google-ia',
        },
        {
          id: 'gbp',
          number: '02',
          icon: 'gbp',
          tierId: 'essentiel',
          tierLabel: 'Basis · 19,90 CHF',
          title: 'Pflege Ihres Google-Unternehmensprofils',
          description:
            'Halten Sie Ihr Google-Profil laufend aktuell: Sonderöffnungszeiten, Feiertage, KI-optimierte Beschreibung und Neuigkeiten im Quartier.',
          proof: 'Starkes Signal für Google Maps',
          path: '/gestion-fiche-google',
        },
        {
          id: 'social',
          number: '03',
          icon: 'social',
          tierId: 'essentiel',
          tierLabel: 'Basis · 19,90 CHF',
          title: 'Social Media Express',
          description:
            'Machen Sie ein Foto an der Theke: Komero schreibt den Text, ergänzt Quartier-Hashtags und postet auf Instagram & Facebook.',
          proof: 'Vom Foto zum Post in 15 Sekunden',
          path: '/reseaux-sociaux',
        },
        {
          id: 'missed-calls',
          number: '04',
          icon: 'missedCalls',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Verpasste Anrufe per SMS auffangen',
          description:
            'Anruf im Ladenstress verpasst? Ihr Kunde erhält sofort eine herzliche SMS mit Öffnungszeiten oder Reservationsmöglichkeit.',
          proof: 'Automatische SMS innert 12 Sek.',
          path: '/repondeur-sms',
        },
        {
          id: 'sms-flash',
          number: '05',
          icon: 'smsFlash',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Flash-SMS-Aktionen',
          description:
            'Füllen Sie ruhige Nachmittage oder bieten Sie Restbestände mit 1 Klick per STOP-konformer SMS an Ihre Stammkunden an.',
          proof: '95 % gelesen innert 3 Minuten',
          path: '/campagnes-sms-flash',
        },
        {
          id: 'market-watch',
          number: '06',
          icon: 'marketWatch',
          tierId: 'premium',
          tierLabel: 'Premium · 49,90 CHF',
          title: 'Ideen & Quartier-Beobachtung',
          description:
            'Behalten Sie die Sichtbarkeit umliegender Geschäfte im Blick und erhalten Sie jede Woche passende Post-Ideen für Ihr Quartier.',
          proof: 'Wöchentlicher Quartier-Impuls',
          path: '/veille-concurrence',
        },
      ],
      starterBadge: 'Gratis bei Ihrer Anmeldung',
      starterTitle: 'Starter Pack Kontakte & Google-Bewertungen',
      starterSubtitle:
        'Ihr QR-Code-Aufsteller für die Ladentheke sammelt automatisch 5★-Google-Bewertungen und füllt Ihre SMS-Kundenliste — in 3 einfachen Schritten ohne Fachchinesisch.',
      starterBanner:
        'Gratis enthalten in Basis (19,90 CHF/Monat) & Premium (49,90 CHF/Monat) • 7 Tage gratis testen',
      starterLinkWheel: 'Das Glücksrad an der Theke entdecken',
      starterLinkPricing: 'Preise in CHF ansehen',
      starterVisualAria:
        'Komero QR-Code-Aufsteller für die Theke neben einem Smartphone mit dem Glücksrad und der Einladung zur 5-Sterne-Google-Bewertung',
      starterVisualScan: 'Scannen & spielen!',
      starterVisualGift: '1 Geschenk gewinnen',
      starterVisualWheelTitle: 'Das Glücksrad',
      starterVisualWheelSub: 'In 15 Sekunden drehen',
      starterVisualGoogleSub: 'Bewertung + Kontakt gespeichert',
      starterVisualCaption: 'Ab dem 1. Tag bereit für Ihre Ladentheke',
      fieldCasesKicker: 'Beispiele aus dem Alltag · Schweiz',
      fieldCasesH2: 'Eine schlüsselfertige Lösung für lokale Geschäfte',
      fieldCasesSubtitle:
        'Drei konkrete Alltagssituationen, in 2 Minuten pro Tag gelöst — ab sofort und direkt einsatzbereit in der Schweiz.',
      fieldCasesBadge: 'Beispiel aus dem Alltag',
      fieldCases: [
        {
          id: 'bakery-ge',
          business: 'Bäckerei & Konditorei',
          city: 'Genf',
          quote:
            '« Kein verpasster Anruf im Mittagsstress und +14 Google-Bewertungen in 3 Wochen dank dem Theken-Aufsteller. »',
          routine: 'Automatische SMS bei verpasstem Anruf + KI-Antworten in 2 Min./Tag',
          resultTag: '0 verpasste Anrufe · +14 Bewertungen',
        },
        {
          id: 'hair-ls',
          business: 'Coiffeursalon',
          city: 'Lausanne',
          quote:
            '« Ruhige Dienstagstermine innert 20 Minuten per Flash-SMS gefüllt und Google-Profil an Feiertagen immer aktuell. »',
          routine: 'Flash-SMS an Stammkunden + Schweizer Feiertage auf Google Maps',
          resultTag: 'Termine innert 20 Min. gefüllt',
        },
        {
          id: 'wine-zh',
          business: 'Weinhandlung & Feinkost',
          city: 'Zürich',
          quote:
            '« Ein Handyfoto der neuen Lieferung = Instagram-, Facebook-Post und Google-Beitrag in 15 Sekunden veröffentlicht. »',
          routine: 'Mobile Post Express + Veröffentlichung auf allen Kanälen mit 1 Klick',
          resultTag: 'IG + FB + Google in 15 Sek.',
        },
      ],
      readyPrompt:
        'Bereit, Komero in Ihrem Geschäft einzusetzen? Sofort einsatzbereit, ohne Vertragsbindung.',
      readyTrialCta: '7 Tage gratis testen',
      readyDemoCta: '5-Min.-Demo buchen',
      featuresKicker: 'Die 6 Komero-Hebel · PC & Smartphone PWA',
      featuresH2: '6 KI-Tools für mehr Sichtbarkeit, Antworten und Stammkunden im Quartier',
      featuresPricingLink: 'Alle Preise in CHF ansehen',
      featureCardTierPrefix: 'Paket',
      featureCardDiscoverPrefix: 'Entdecken:',
      bottomAria: 'Nächster Schritt',
      bottomKicker: 'Bereit für Platz 1 bei Google in Ihrem Quartier?',
      bottomH2: 'Starten Sie 7 Tage gratis oder buchen Sie Ihre 5-Min.-Demo',
      buyTagline: '7 Tage gratis • 19,90 oder 49,90 CHF/Monat • Ohne Vertragsbindung',
      buyTitle: 'Komero heute selbstständig starten',
      buyBody:
        'Wählen Sie Basis (19,90 CHF/Monat — Google-Profil, Bewertungen KI & Social Media) oder Premium (49,90 CHF/Monat — alles aus Basis + Audit & Google-Beiträge, Auto-SMS, SMS-Flash & Marktbeobachtung), inkl. gratis Starter Pack in 10 Minuten.',
      buyCta: 'Jetzt starten (7 Tage gratis)',
      demoTagline: 'Video-Demo in der ganzen Schweiz · Kostenloser Google-Profil-Check',
      demoTitle: 'Lieber zuerst eine persönliche 5-Min.-Demo?',
      demoBody:
        'Wir schauen gemeinsam Ihr aktuelles Google-Profil an und zeigen Ihnen in 5 Minuten, wie Komero zu Ihrem Geschäft und Quartier passt.',
      demoCta: '5-Min.-Demo anfragen',
    },
    featureTemplate: {
      modulePrefix: 'Funktion',
      formulaPrefix: 'Paket',
      beforeAfterAria: 'Vorher und mit Komero',
      problemKicker: 'Die Realität im Ladenalltag',
      solutionKicker: 'Die Komero-Lösung',
      complementaryAria: 'Weitere Komero-Funktionen',
      complementaryKicker: 'Alle Komero-Werkzeuge · PC & Smartphone',
      complementaryH2: 'Entdecken Sie die ergänzenden Funktionen für Ihr Geschäft',
      comparePlansLink: 'Pakete in CHF vergleichen',
      moduleLabel: 'Modul',
      discoverPrefix: 'Entdecken:',
      wheelBonusBadge: 'Gratis inklusive',
      wheelBonusTitle: 'Das Glücksrad an der Theke',
      wheelBonusDesc:
        'Sofort einsatzbereiter QR-Code-Aufsteller für mehr 5★-Google-Bewertungen und eine eigene SMS-Kundenliste.',
      wheelBonusCta: 'Das Glücksrad an der Theke entdecken',
      finalCtaKicker: 'Starter Pack Kontakte & Google-Bewertungen gratis · 7 Tage gratis',
      finalCtaH2: 'Möchten Sie diese Funktion in Ihrem Geschäft aktivieren?',
      finalCtaBody:
        'Starten Sie selbstständig in 2 Minuten ohne Vertragsbindung (Preise in CHF) oder fragen Sie eine kurze Demo für Ihren Laden an.',
      finalCtaPricing: 'Preise in CHF ansehen',
      finalCtaDemo: 'Demo anfragen',
    },
    featurePages: {
      '/avis-google-ia': {
        moduleNumber: '01',
        tierLabel: 'Basis',
        tierNote: 'Lokale Sichtbarkeit auf Google Maps & QR-Code-Glücksrad',
        headline: 'Google-Bewertungen mit KI: Ab in die Top 3 auf Google Maps in Ihrem Quartier',
        subtitle:
          'Beantworten Sie 100 % Ihrer Google-Bewertungen mit 1 Klick auf PC oder Smartphone — revDSG- & DSGVO-konform, mit lokalen Stichwörtern und ruhigem Ton bei Kritik.',
        problemTitle: 'Warum unbeantwortete Bewertungen Kundschaft kosten',
        problemPoints: [
          'Am Abend fehlt die Zeit, auf jede einzelne Google-Bewertung persönlich zu antworten.',
          'Schon eine einzige kritische Bewertung ohne Antwort verunsichert neue Laufkundschaft.',
          'Ohne regelmässige Bewertungen und lokale Stichwörter landen Mitbewerber auf Google Maps vor Ihnen.',
        ],
        solutionTitle: 'Was Komero für Ihren guten Ruf im Quartier übernimmt',
        solutionPoints: [
          'Persönliche Antwortvorschläge mit 1 Klick — abgestimmt auf Namen, Produkt und Sternebewertung.',
          'Sofortige SMS-Warnung bei Bewertungen unter 4 Sternen, damit Sie rasch und professionell reagieren.',
          'Natürliche lokale Suchbegriffe + perfekte Ergänzung zum gratis Starter Pack Kontakte & Google-Bewertungen.',
        ],
        fieldKicker: 'Freigabe mit 1 Klick · SMS-Benachrichtigung · revDSG- & DSGVO-konform',
        fieldTitle: 'Machen Sie zufriedene Kunden an der Theke zu Botschaftern im Quartier',
        fieldText:
          'Zufriedene Kunden vergessen zu Hause oft, eine Bewertung abzugeben. Mit dem gratis QR-Code-Aufsteller an der Kasse, freundlichen SMS-Einladungen und optimierten Antworten wird Ihr Google-Profil zum wichtigsten Kundenbringer.',
        fieldBullets: [
          'Optimiert für lokale Suchen wie «Branche + Ort / Quartier»',
          'Starter Pack Kontakte & Google-Bewertungen ab dem 1. Tag gratis dabei',
          'Sofort-SMS bei kritischen Bewertungen unter 4 Sternen',
          'Sie prüfen und veröffentlichen jede Antwort mit 1 Klick',
        ],
        fieldImageAlt:
          'Bäcker zeigt einer lächelnden Kundin an der Theke das Google-Maps-Profil seines Geschäfts auf dem Smartphone',
        editorialKicker: 'Lokale Sichtbarkeit auf Google Maps',
        editorialTitle: 'So bringen regelmässige Antworten Ihr Geschäft auf Google Maps nach vorne',
        editorialCards: [
          {
            title: 'Aktivität, die Google Maps belohnt',
            body: 'Google bevorzugt gepflegte Einträge, die laufend neue Bewertungen erhalten und rasch antworten. Wer jede Woche mit einem Klick antwortet, signalisiert Kundschaft und Suchmaschine höchste Zuverlässigkeit.',
          },
          {
            title: 'Natürliche Orts- und Branchenbegriffe',
            body: 'Jeder Antwortvorschlag nennt ganz natürlich Ihr Handwerk (Bäckerei, Coiffeur, Weinhandlung, Quartierrestaurant) und Ihre Gemeinde, damit Sie bei lokalen Suchen gezielt gefunden werden.',
          },
          {
            title: 'Souveräner Umgang mit kritischem Feedback',
            body: 'Bei einer kritischen Rückmeldung benachrichtigt Sie Komero sofort per SMS und formuliert eine ruhige, lösungsorientierte Antwort, die bei künftigen Besuchern Vertrauen schafft.',
          },
        ],
      },
      '/reseaux-sociaux': {
        moduleNumber: '02',
        tierLabel: 'Basis',
        tierNote: 'Instagram & Facebook in 15 Sekunden',
        headline: 'Social Media für Geschäfte: Vom Handyfoto zum fertigen Beitrag in 15 Sekunden',
        subtitle:
          'Machen Sie im Laden ein Foto mit dem Smartphone: Komero schreibt den passenden Text mit lokalen Hashtags und veröffentlicht gleichzeitig auf Instagram und Facebook.',
        problemTitle: 'Warum Instagram und Facebook im Ladenalltag oft liegen bleiben',
        problemPoints: [
          'Zwischen zwei Kunden an der Theke fehlen Zeit und Ideen für gute Texte.',
          'Beiträge doppelt auf Instagram und Facebook hochzuladen kostet unnötig Nerven.',
          'Wichtige Verkaufstage (Muttertag, Herbststart, Weihnachten) stehen plötzlich vor der Tür.',
        ],
        solutionTitle: 'Was Komero sofort nach Ihrem Foto vorbereitet',
        solutionPoints: [
          'Foto mit dem Smartphone → stimmiger Text und lokale Hashtags für Ihr Quartier in 15 Sekunden.',
          'Gleichzeitige Veröffentlichung mit 1 Klick auf Instagram & Facebook oder Planung im PC-Kalender.',
          '30 fertige Beiträge pro Monat und automatische Erinnerungen an regionale Verkaufshöhepunkte.',
        ],
        fieldKicker: '',
        fieldTitle: '',
        fieldText: '',
        fieldBullets: [],
        fieldImageAlt: '',
        editorialKicker: 'Lokale Präsenz auf Instagram & Facebook',
        editorialTitle: 'Beiträge, die Nachbarn aus dem Quartier direkt in Ihr Geschäft holen',
        editorialCards: [
          {
            title: 'Ihr persönlicher Stil bleibt erhalten',
            body: 'Kein künstlicher Werbejargon: Komero übernimmt Ihren natürlichen Ton (herzlich, genussvoll, fachkundig) und passt jeden Beitrag an Ihre Tagesprodukte und Ihre Kundschaft an.',
          },
          {
            title: 'Regelmässig sichtbar ohne Agentur',
            body: 'Zwei bis drei Beiträge pro Woche reichen, um im Quartier präsent zu bleiben. Am Montagmorgen am PC oder kurz zwischendurch am Handy planen Sie Ihre ganze Woche in wenigen Minuten.',
          },
          {
            title: 'Gezielte Reichweite in Ihrer Gemeinde',
            body: 'Jeder Beitrag kombiniert passende regionale Hashtags (Ort, Quartier, Handwerk), damit Ihre Fotos genau jene Menschen erreichen, die noch heute bei Ihnen vorbeischauen können.',
          },
        ],
      },
      '/repondeur-sms': {
        moduleNumber: '03',
        tierLabel: 'Premium',
        tierNote: 'Geschäftsnummer & automatische SMS bei verpasstem Anruf',
        headline: 'Anruf im Stress verpasst? Komero antwortet sofort freundlich per SMS',
        subtitle:
          'Wenn das Telefon während der Stosszeit klingelt, sendet Komero automatisch eine herzliche Begrüssungs-SMS und bereitet Antworten auf häufige Fragen vor.',
        problemTitle: 'Was passiert, wenn das Telefon im Kundenandrang klingelt',
        problemPoints: [
          'Mit Kundschaft an der Kasse, im Coiffeurstuhl oder in der Küche können Sie nicht abnehmen.',
          'Wer auf der Combox landet, legt auf und ruft stattdessen das Geschäft nebenan an.',
          'Immer gleiche Fragen zu Öffnungszeiten, Vorrat oder Terminen stapeln sich bis am Abend.',
        ],
        solutionTitle: 'Wie Komero jeden Anruf per SMS für Sie rettet',
        solutionPoints: [
          'Automatische freundliche SMS innert 12 Sekunden nach jedem verpassten Anruf.',
          'Zentraler KI-SMS-Posteingang mit fertigen Antwortvorschlägen zu Zeiten, Terminen und Produkten.',
          'Mit 1 Klick auf PC oder Smartphone absenden — kein Kunde geht mehr verloren.',
        ],
        fieldKicker: 'Eigene Geschäftsnummer · SMS-Posteingang auf PC & Smartphone',
        fieldTitle: 'Erstklassiger Empfang per SMS — auch während der Stosszeit',
        fieldText:
          'Widmen Sie sich voll Ihren Gästen im Laden, während Komero Anrufer per SMS sofort abholt und deren Anliegen (Reservation, Verfügbarkeit, Öffnungszeiten) sauber sammelt.',
        fieldBullets: [
          'Automatische Begrüssungs-SMS bei jedem nicht angenommenen Anruf',
          'Zentraler KI-SMS-Posteingang auf Computer und Smartphone',
          'Antwortvorschläge passend zu Ihren Öffnungszeiten und Angeboten',
          'Keine vergessenen Rückrufe mehr am Feierabend',
        ],
        fieldImageAlt:
          'Selbstständiger Coiffeur prüft auf dem Smartphone per SMS gerettete Terminanfragen nach einem verpassten Anruf',
        editorialKicker: 'Verpasste Anrufe per SMS auffangen',
        editorialTitle:
          'Warum eine SMS nach 12 Sekunden verhindert, dass Kunden zur Konkurrenz wechseln',
        editorialCards: [
          {
            title: 'Sofortige Reaktion im entscheidenden Moment',
            body: 'Wer anruft, um einen Tisch zu reservieren, einen Coiffeurtermin zu buchen oder ein Produkt zurückzulegen, spricht selten auf die Combox. Die sofortige SMS hält den Kontakt aktiv.',
          },
          {
            title: 'Funktioniert auf jedem Handy ohne App',
            body: 'Im Gegensatz zu Messenger-Diensten mit Kontopflicht erreicht eine SMS 100 % Ihrer Quartierkundschaft — unabhängig von Alter oder Smartphone-Modell.',
          },
          {
            title: 'Keine Unterbrechung bei der Kundenberatung',
            body: 'Sie bleiben entspannt bei der Kundschaft im Geschäft. Sobald Sie dreissig Sekunden Luft haben, bestätigen Sie die vorbereiteten SMS-Antworten mit einem Klick.',
          },
        ],
      },
      '/campagnes-sms-flash': {
        moduleNumber: '04',
        tierLabel: 'Premium',
        tierNote: 'Max. 145 Zeichen + STOP · 95 % Öffnungsrate',
        headline: 'SMS-Flash-Aktionen: Füllen Sie ruhige Stunden innert 3 Minuten',
        subtitle:
          'Nutzen Sie Ihre an der Theke aufgebaute SMS-Kundenliste aus dem gratis Starter Pack: Eine kurze SMS mit STOP-Hinweis bringt sofort Kundschaft ins Geschäft.',
        problemTitle: 'Warum ruhige Nachmittage und Restbestände Ihre Marge drücken',
        problemPoints: [
          'Frische Ware am späten Nachmittag oder ein ruhiger Dienstag ohne Laufkundschaft.',
          'Werbe-E-Mails werden viel zu spät gelesen oder landen im Spam-Ordner.',
          'Keine sauber gepflegte, revDSG-konforme Kundenliste für schnelle Angebote.',
        ],
        solutionTitle: 'Ihr SMS-Aktionsknopf direkt verbunden mit Ihrer Kundenliste',
        solutionPoints: [
          'Automatisch wachsende Kundenliste dank dem gratis Starter Pack an der Kasse.',
          'KI-Text mit 1 Klick auf maximal 145 Zeichen getrimmt — inklusive Geschäftsname und STOP.',
          '95 % der SMS werden innert 3 Minuten gelesen und sorgen noch in derselben Stunde für Umsatz.',
        ],
        fieldKicker: '145 Zeichen optimiert · Eigene Kundenliste an der Theke',
        fieldTitle: 'Einfach für Sie, respektvoll für Ihre Stammkunden',
        fieldText:
          'Geben Sie Ihre Aktion am PC oder Handy ein: Komero formuliert eine knackige SMS unter 145 Zeichen mit gesetzlichem STOP-Hinweis und beachtet automatisch die zulässigen Versandzeiten.',
        fieldBullets: [
          'Gezielter Versand mit 1 Klick an interessierte Stammkunden',
          'Automatische Einhaltung der Schweizer Versandzeiten und des revDSG',
          'Automatische STOP-Abmeldung und sicheres Hosting in Europa',
        ],
        fieldImageAlt:
          'Weinhändler zeigt einem Stammkunden im Geschäft eine SMS-Flash-Aktion auf dem Smartphone',
        editorialKicker: 'SMS-Kundenbindung für Schweizer Geschäfte',
        editorialTitle:
          'Drei Situationen, in denen eine SMS-Aktion sofort spürbaren Umsatz bringt',
        editorialCards: [
          {
            title: 'Feierabend-Aktion gegen Food Waste',
            body: 'Überraschungssäckli in der Bäckerei, frische Blumensträusse oder Tagesgerichte vor Ladenschluss: Eine SMS um 16:30 Uhr holt Stammkunden aus dem Quartier innert Minuten ab.',
          },
          {
            title: 'Ruhige Zeiten unter der Woche beleben',
            body: 'Ein verregneter Dienstagnachmittag oder zwei abgesagte Termine im Salon: Laden Sie Ihre Stammkundschaft mit einem kleinen Vorteil spontan ins Geschäft ein.',
          },
          {
            title: 'Neuheiten und Vorbestellungen ankündigen',
            body: 'Informieren Sie Ihre treuesten Kunden zuerst über neue Jahrgänge, eine frische Kollektion oder den Start der Vorbestellungen für die Festtage.',
          },
        ],
      },
      '/veille-concurrence': {
        moduleNumber: '05',
        tierLabel: 'Premium',
        tierNote: 'Wöchentliche Quartier-Analyse & fertige Post-Ideen',
        headline: 'Lokale Marktbeobachtung: Immer einen Schritt voraus in Ihrem Quartier',
        subtitle:
          'Jede Woche analysiert Komero die Geschäfte in Ihrer Umgebung, erkennt saisonale Trends vor Ort und liefert fertige Ideen für Ihre nächsten Beiträge.',
        problemTitle: 'Warum es allein kaum möglich ist, den lokalen Markt im Blick zu behalten',
        problemPoints: [
          'Keine Zeit, Bewertungen, Angebote und Beiträge benachbarter Geschäfte zu verfolgen.',
          'Ratlosigkeit vor dem leeren Bildschirm, was diese Woche beworben werden soll.',
          'Regionale Anlässe und saisonale Chancen werden mangels Vorbereitung verpasst.',
        ],
        solutionTitle: 'Ihr wöchentlicher Quartier-Überblick in 60 Sekunden',
        solutionPoints: [
          'Automatischer Blick auf die Aktivitäten und Bewertungen der Geschäfte in Ihrer Nähe.',
          'Erkennung lokaler Suchtrends und saisonaler Themen in Ihrer Gemeinde.',
          'Konkrete Ideen für Instagram, Facebook oder SMS, die Sie mit 1 Klick übernehmen.',
        ],
        fieldKicker: 'Direkt verbunden mit Ihren 4 weiteren Komero-Modulen',
        fieldTitle: 'Nie wieder überlegen, was Sie diese Woche posten sollen',
        fieldText:
          'Ein kurzer Blick am Montagmorgen am PC oder Smartphone genügt: Sie sehen sofort, welches Produkt jetzt gefragt ist und welcher Zeitpunkt am besten passt.',
        fieldBullets: [
          'Wöchentliche Kurzübersicht in 60 Sekunden lesbar, ohne Fachchinesisch',
          'Beitragsidee mit 1 Klick direkt in Instagram & Facebook übernehmen',
          'Abgestimmt auf Ihre genaue Adresse, Branche und Jahreszeit',
        ],
        fieldImageAlt:
          'Lebhafte Einkaufsstrasse im Quartier als Beispiel für die lokale Markt- und Trendanalyse von Komero',
        editorialKicker: 'Lokales Radar für Ihr Einzugsgebiet',
        editorialTitle: 'Was Ihre Wochenübersicht jeden Montagmorgen für Sie prüft',
        editorialCards: [
          {
            title: 'Entwicklung von Bewertungen in der Nachbarschaft',
            body: 'Sehen Sie auf einen Blick, wie sich Ihre Position im Vergleich zu ähnlichen Geschäften im Umkreis entwickelt, um Ihre Google-Bewertungen gezielt auszubauen.',
          },
          {
            title: 'Aktuelle Themen und Anlässe in Ihrer Gemeinde',
            body: 'Quartiermärkte, Feiertage, Wetterumschwung oder saisonale Suchanfragen: Komero erkennt frühzeitig, wonach die Menschen in Ihrer Nähe suchen.',
          },
          {
            title: 'Direkt von der Idee zum fertigen Beitrag',
            body: 'Jede wöchentliche Empfehlung enthält einen konkreten Vorschlag, den Sie mit einem Klick in einen Instagram-Post, Facebook-Beitrag oder eine SMS-Aktion verwandeln.',
          },
        ],
      },
    },
    socialSteps: [
      {
        step: '01. Foto machen',
        title: 'Ihr Schaufenster, ein Gericht oder eine Neuheit',
        body: 'Knipsen Sie ein natürliches Foto an der Theke, in der Backstube oder im Salon — ganz ohne Bildbearbeitung.',
      },
      {
        step: '02. Text + lokale Hashtags',
        title: 'In 15 Sekunden in Ihrem Stil geschrieben',
        body: 'Komero erkennt Ihr Produkt, schreibt den passenden Text und ergänzt die Hashtags Ihrer Gemeinde für maximale Sichtbarkeit im Quartier.',
      },
      {
        step: '03. Gleichzeitig posten',
        title: 'Instagram & Facebook mit 1 Klick',
        body: 'Sofort veröffentlichen oder für die beste Uhrzeit einplanen, damit Ihre Kanäle die ganze Woche lebendig bleiben.',
      },
    ],
    socialCalendarKicker: 'Keinen Verkaufshöhepunkt mehr verpassen',
    socialCalendarH2: 'Der automatische Kalender für regionale Verkaufstage',
    socialCalendarBody:
      'Komero erinnert Sie rechtzeitig an jedes wichtige Datum und bereitet passende Beiträge für Vorbestellungen im Geschäft vor.',
    luckyWheel: {
      kicker: 'Gratis bei Ihrer Anmeldung · In Basis und Premium enthalten',
      h1: 'Das Glücksrad an der Theke: Mehr Google-Bewertungen & Ihre SMS-Kundenliste',
      subtitle:
        'Stellen Sie Ihren QR-Code-Aufsteller an die Kasse: Kunden drehen in 15 Sekunden am Smartphone am Glücksrad, hinterlassen eine Google-Bewertung und tragen sich in Ihre SMS-Kundenliste ein — ganz ohne App.',
      primaryCta: 'Jetzt starten (7 Tage gratis)',
      secondaryCta: '5-Min.-Demo anfragen',
      imageAlt:
        'Komero Glücksrad auf dem Smartphone mit QR-Code-Aufsteller für die Ladentheke zur Sammlung von Google-Bewertungen und SMS-Kundenkontakten',
      howKicker: 'So funktioniert Ihr Starter Pack Kontakte & Google-Bewertungen',
      howH2: 'Ein einfaches Spiel an der Kasse, das Ihr Geschäft das ganze Jahr füllt',
      howBody:
        'Direkt nach Ihrer Anmeldung gestalten wir Ihr persönliches Glücksrad in den Farben Ihres Geschäfts mit Ihren Gewinnen (Gratis-Kaffee, Rabatt beim nächsten Besuch, Probierprodukt) und Ihrem fertigen QR-Code-Aufsteller.',
      smsBanner:
        'Gewinnzustellung, Benachrichtigungen und Kundenliste zu 100 % per SMS — revDSG- (Schweiz) & DSGVO-konform.',
      benefits: [
        {
          title: 'Mehr 5-Sterne-Google-Bewertungen',
          body: 'Zufriedene Kunden werden im idealen Moment — direkt an der Theke — eingeladen, eine Bewertung abzugeben und Ihr Geschäft in die Top 3 im Quartier zu bringen.',
        },
        {
          title: 'Eigene SMS-Kundenliste aufbauen',
          body: 'Jeder Teilnehmer erhält seinen Gewinn per SMS und erweitert automatisch Ihre Kundenliste für künftige SMS-Flash-Aktionen an ruhigen Tagen.',
        },
        {
          title: 'Gratis & revDSG- / DSGVO-konform',
          body: 'In den Paketen Basis und Premium kostenlos enthalten — mit klarer Einwilligung, STOP-Abmeldung und 100 % Dateneigentum bei Ihrem Geschäft.',
        },
      ],
      complementaryAria: 'Ergänzende Werkzeuge zum Glücksrad',
      complementaryKicker: 'Perfektes Zusammenspiel mit Ihrem Komero-Assistenten',
      complementaryH2: 'Nutzen Sie Ihre neuen Bewertungen und Kontakte sofort weiter',
      complementaryCards: [
        {
          meta: 'Modul 01 · Paket Basis',
          title: 'Google-Bewertungen mit KI',
          body: 'Beantworten Sie mit 1 Klick die neuen 5★-Bewertungen Ihres QR-Code-Aufstellers und klettern Sie auf Google Maps.',
          cta: 'Entdecken: Google-Bewertungen mit KI',
          to: '/avis-google-ia',
        },
        {
          meta: 'Modul 04 · Paket Premium',
          title: 'SMS-Flash-Aktionen',
          body: 'Holen Sie registrierte Kunden per SMS-Aktion an ruhigen Tagen oder bei Restbeständen sofort ins Geschäft zurück.',
          cta: 'Entdecken: SMS-Flash-Aktionen',
          to: '/campagnes-sms-flash',
        },
        {
          meta: 'Modul 02 · Paket Basis',
          title: 'Social Media Express',
          body: 'Teilen Sie Gewinner und Neuheiten im Schaufenster innert 15 Sekunden auf Instagram und Facebook.',
          cta: 'Entdecken: Social Media Express',
          to: '/reseaux-sociaux',
        },
      ],
      finalKicker: 'Starter Pack Kontakte & Google-Bewertungen gratis · 7 Tage gratis',
      finalH2: 'Starten Sie Ihr Glücksrad im Geschäft innert 24 Stunden',
      finalBody:
        'Wählen Sie Ihr Komero-Paket in CHF ohne Vertragsbindung oder vereinbaren Sie eine kurze 5-Min.-Demo für Ihren Laden.',
      finalPricingCta: 'Preise in CHF ansehen',
      finalDemoCta: 'Demo anfragen',
    },
    pricing: {
      kicker: 'Preise Schweiz in CHF · Sichere Zahlung via Stripe',
      h1: 'Klare Preise in CHF — transparent und ohne Vertragsbindung',
      subtitle:
        'Wählen Sie das passende Paket für Ihr Geschäft. Das Starter Pack Kontakte & Google-Bewertungen ist in beiden Paketen gratis enthalten.',
      launchBanner:
        'Schweizer Startangebot: 7 Tage gratis testen bei allen Paketen — ohne Vertragsbindung',
      cgvPrefix: 'Ich bestätige, als Gewerbetreibende/r zu handeln und akzeptiere die ',
      cgvLinkText: 'Allgemeinen Geschäftsbedingungen (AGB) von Komero',
      cgvSuffix: ', um die sicheren Stripe-Zahlungslinks unten freizuschalten.',
      cgvWarning: 'Bitte setzen Sie zuerst dieses Pflichthäkchen, um zu Stripe weiterzugehen.',
      cgvAccepted: 'AGB akzeptiert: Ihre Stripe-Bestellbuttons in CHF sind jetzt aktiv.',
      trialBadge: '7 Tage gratis',
      stripeRedirectNote: 'Sichere Weiterleitung zu Stripe in CHF (neuer Tab)',
      stripeLockedNote: 'Haken Sie oben die AGB an, um Stripe freizuschalten',
      reassuranceStripe:
        'Sichere Kartenhinterlegung via Stripe • 0 CHF Belastung während 7 Tagen • Erste Abbuchung am 8. Tag, sofern nicht mit 1 Klick gekündigt • Ohne Vertragsbindung.',
      vatNote: 'Alle Preise in Schweizer Franken (CHF) · Ohne Vertragsbindung · Mit 1 Klick kündbar.',
      comparisonKicker: 'Detailvergleich',
      comparisonH2: 'Basis vs. Premium: alle enthaltenen Tools im Überblick',
      comparisonFeatureCol: 'Enthaltene Funktion',
      comparisonEssentielCol: 'Basis · 19,90 CHF',
      comparisonPremiumCol: 'Premium · 49,90 CHF',
      comparisonIncluded: 'Enthalten',
      comparisonNotIncluded: 'Nicht enthalten',
      faqKicker: 'Häufige Fragen',
      faqH2: '7 Tage gratis testen, Abrechnung in CHF, Kündigung & Sicherheit',
      helpTitle: 'Unsicher, welches Paket am besten passt?',
      helpBody:
        'Sprechen Sie 5 Minuten mit einem Komero-Berater, um die ideale Lösung für Ihr Geschäft in der Schweiz zu wählen.',
      helpCta: 'Beratung anfragen',
    },
    contact: {
      kicker: 'Persönlicher Kontakt · Antwort innert 24 Std. · Unverbindlich',
      h1: 'Eine Frage? Lust auf eine 5-Minuten-Demo?',
      subtitle:
        'Wir schauen uns gemeinsam 5 Minuten lang Ihren Google-Eintrag und Ihre lokale Sichtbarkeit an — ohne Fachjargon und unverbindlich.',
      directHeading: 'Direktkontakt Schweiz',
      phoneLabel: 'Anruf oder direkte SMS',
      emailLabel: 'E-Mail',
      locationText:
        'Video-Demo in der ganzen Schweiz (Zürich, Basel, Bern, Genf, Lausanne, Luzern…) sowie vor Ort in der Westschweiz.',
      hoursText: 'Termine flexibel zu Ihren ruhigen Zeiten, Montag bis Samstag.',
      fieldImageAlt: 'Persönliche Komero-Beratung direkt an der Theke eines Schweizer Fachgeschäfts',
      fieldCaption: 'Kostenlose Auswertung Ihrer lokalen Sichtbarkeit vor unserem Gespräch.',
      formTitle: '5-Min.-Demo anfragen (3 Angaben genügen)',
      formSubtitle:
        'In 15 Sekunden ausgefüllt — ein Komero-Berater in der Schweiz ruft Sie zu Ihren ruhigen Zeiten zurück.',
      successMessage:
        'Perfekt! Ihr Rückrufwunsch ist gespeichert, wir melden uns innert 24 Stunden bei Ihnen.',
      fallbackTitle:
        'Verbindung kurz unterbrochen — Ihre Anfrage wurde lokal zwischengespeichert.',
      fallbackBody:
        'Senden Sie sie mit 1 Klick per vorausgefüllter E-Mail ab oder rufen Sie uns direkt an:',
      fallbackEmailBtn: 'Per E-Mail senden',
      fallbackCallBtn: 'Anrufen:',
      fallbackRetryBtn: 'Erneut versuchen',
      labels: {
        commerce: 'Name Ihres Geschäfts',
        commercePlaceholder: 'Z. B. Bäckerei Sonnenschein',
        metier: 'Branche (optional)',
        metierPlaceholder: 'Branche auswählen',
        postal: 'PLZ oder Ort',
        postalPlaceholder: 'Z. B. 8001 Zürich oder 4051 Basel',
        nom: 'Vor- & Nachname (optional)',
        nomPlaceholder: 'Z. B. Lukas Meier',
        tel: 'Mobiltelefon',
        telPlaceholder: 'Z. B. +41 79 123 45 67',
        email: 'Geschäftliche E-Mail (optional)',
        emailPlaceholder: 'Z. B. kontakt@meingeschaeft.ch',
        sujet: 'Wichtigstes Ziel (optional)',
        message: 'Wunschzeit oder Link zum Google-Profil (optional)',
        messagePlaceholder:
          'Z. B. Gut erreichbar zwischen 14:30 und 16:30 Uhr, oder Link zu Ihrem Google-Profil.',
      },
      step1Badge: 'Schritt 1 / 2 · Express-Rückruf (15 Sek.)',
      step2Badge: 'Schritt 2 / 2 · Optionale Angaben',
      step2ToggleExpand: 'Branche, E-Mail oder Ziel ergänzen (optional)',
      step2ToggleCollapse: 'Optionale Angaben ausblenden',
      step2Title: 'Noch ein kurzes Detail für Ihre kostenlose Analyse? (optional)',
      step2Subtitle:
        'Ihr Rückruf ist bereits bestätigt. Ergänzen Sie bei Bedarf Branche, E-Mail oder Ihr Hauptziel, damit wir Ihre 5-Min.-Demo gezielt vorbereiten.',
      step2SubmitIdle: 'Angaben ergänzen',
      step2SubmitLoading: 'Wird gespeichert...',
      step2SavedMessage:
        'Herzlichen Dank! Ihre Zusatzangaben wurden Ihrer Demo-Anfrage hinzugefügt.',
      step2SkipBtn: 'Fertig, danke',
      step1DoneTitle: 'Rückruf-Anfrage bestätigt!',
      step1DoneBody:
        'Ein Komero-Berater meldet sich innert 24 Stunden telefonisch für Ihre persönliche 5-Min.-Demo.',
      newRequestBtn: 'Weitere Anfrage senden',
      consentPrefix:
        'Ich bin einverstanden, dass Komero diese Angaben zur Bearbeitung meiner Anfrage gemäss revDSG (Schweiz), DSGVO und der ',
      consentPrivacyLink: 'Datenschutzerklärung',
      consentSuffix: ' verwendet.',
      submitIdle: 'Rückruf für 5-Min.-Demo anfordern',
      submitLoading: 'Wird gesendet...',
      bottomReassurance:
        '100 % kostenlos & unverbindlich · revDSG- & DSGVO-konform · Keine Weitergabe an Dritte',
    },
    paymentModal: {
      closeAria: 'Bestätigungsfenster schliessen',
      kicker: 'Anmeldung bestätigt · Sichere Zahlung via Stripe (CHF)',
      title: 'Willkommen bei Komero! Ihr Zugang ist aktiv',
      introPrefix: 'Herzliche Gratulation! Ihr Komero-Abo, Ihr ',
      introBonus: 'gratis Starter Pack Kontakte & Google-Bewertungen',
      introAnd: ' und Ihre ',
      introTrial: '7 Tage gratis Testphase',
      introSuffix: ' sind aktiviert. Wir melden uns innert 2 Stunden zur kurzen Einrichtung.',
      bullet1Strong: 'Kontaktaufnahme innert 2 Stunden',
      bullet1Text:
        'ein Komero-Berater ruft Sie an, um Ihren Zugang auf PC & Smartphone startklar zu machen.',
      bullet2Strong: 'Gratis Starter Pack Kontakte & Google-Bewertungen',
      bullet2Text:
        'sofortige Erstellung Ihres QR-Code-Aufstellers für die Theke und Ihrer SMS-Kundenliste.',
      bullet3Strong: '7 Tage gratis, ohne Vertragsbindung',
      bullet3Text:
        '0 CHF Belastung während 7 Tagen, erste Abbuchung am 8. Tag sofern nicht mit 1 Klick gekündigt.',
      continueBtn: 'Perfekt, weiter auf komero.ch',
    },
    legalUi: {
      tabsAria: 'Rechtliche Informationen',
      printBtn: 'Drucken / PDF',
      lastUpdated: 'Letzte Aktualisierung: 2026 · www.komero.ch',
      publisherLabel: 'Herausgeber & Verantwortlicher',
      portalBtnPrefix: 'Abo verwalten oder kündigen',
      portalExternalLabel: 'Zum Stripe-Kundenportal (Kündigung mit 1 Klick)',
      contactLink: 'Eine Frage? Komero kontaktieren →',
      pricingLink: 'Preise in CHF ansehen →',
      tabs: {
        mentions: 'Impressum',
        cgv: 'AGB B2B (CHF)',
        privacy: 'Datenschutz (revDSG & DSGVO)',
      },
      headers: {
        mentions: {
          kicker: 'Gesetzliche Angaben · Schweiz & Europa',
          title: 'Impressum',
          subtitlePrefix: 'Betreiber der Website',
        },
        cgv: {
          kicker: 'Geschäftsbedingungen B2B · Preise in CHF · 8 Artikel',
          title: 'Allgemeine Geschäftsbedingungen (AGB)',
          subtitle:
            'Bedingungen für Komero-Abonnements in CHF für unabhängige Geschäfte, Handwerksbetriebe und Unternehmen in der Schweiz.',
        },
        privacy: {
          kicker: 'Datenschutz · revDSG (Schweiz) & DSGVO',
          title: 'Datenschutzerklärung',
          subtitlePrefix:
            'Transparenz zu Erhebung, Speicherung, Auftragsverarbeitern und Ihren Rechten nach Schweizer revDSG und DSGVO auf',
        },
      },
    },
    deviceFrames: {
      pcLabel: 'PC',
      pcCaptionTag: 'Vorschau',
    },
  },

  en: {
    nav: {
      logoAria: 'Komero Switzerland — Back to home',
      mainNavAria: 'Main navigation',
      home: 'Home',
      features: 'Features',
      featuresDropdownAria: 'The 5 Komero features and free Starter Pack',
      bonusTitle: 'Free bonus: Contacts & Google Reviews Starter Pack',
      bonusSubtitle: 'Countertop QR stand & SMS customer list included',
      pricing: 'Pricing',
      contact: 'Contact',
      demoLink: '5-min demo',
      primaryCta: 'Start now (7 days free)',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mobileMenuAria: 'Mobile menu',
      mobileFeaturesHeading: 'The 5 features & free bonus',
      mobileBonusLink: 'Free bonus: Countertop Lucky Wheel',
      mobileLanguageLabel: 'Website language',
      breadcrumbAria: 'Breadcrumb',
      breadcrumbHome: 'Home',
      tierEssentiel: 'Essential',
      tierPremium: 'Premium',
    },
    footer: {
      headline: 'More visible in your neighborhood. More customers in your shop.',
      baseline:
        'The AI assistant that replies to your Google reviews, runs your social media, and brings customers back in 2 minutes a day.',
      locationLine: 'Built for independent local shops, cafés & artisans across Switzerland',
      privacyBadge: 'Swiss FADP & GDPR compliant · Active anonymization · Hosted in Europe',
      featuresHeading: 'Features',
      navigationHeading: 'Navigation',
      legalHeading: 'Legal information',
      luckyWheelLink: 'Countertop Lucky Wheel',
      mentionsLink: 'Legal notice',
      cgvLink: 'Terms of Sale (B2B)',
      cgvShort: 'Terms',
      privacyLink: 'Privacy policy (FADP & GDPR)',
      privacyShort: 'Privacy',
      manageSubscription: 'Manage or cancel subscription',
      manageNoticePrefix:
        'Cancel anytime in 1 click through your customer portal or by emailing ',
      copyrightSuffix: 'All rights reserved.',
    },
    home: {
      heroBadge: '✨ Turnkey AI Assistant for Local Shops & Artisans',
      h1: 'Rank #1 on Google in your neighborhood. Bring more customers into your shop.',
      baseline:
        'The turnkey AI assistant that powers your local visibility: Google reviews, Google Business profile updates, social media posts, promo SMS, and missed calls in 2 minutes a day.',
      heroHighlights: [
        'Boosted Google Maps ranking',
        'Ready in 10 min',
        'Free Contacts & Reviews Starter Pack',
      ],
      primaryCta: 'Start now (7 days free)',
      secondaryCta: 'Request a 5-min demo',
      sectorsLine:
        'Bakeries · Hair Salons · Restaurants · Wine Shops · Boutiques · Local Artisans in Switzerland',
      reassuranceAria: 'Komero Switzerland commitments',
      reassuranceItems: [
        'No commitment (19.90 or 49.90 CHF/mo)',
        '7-day free trial',
        'Desktop & Mobile PWA included',
        'Swiss FADP & GDPR compliant',
      ],
      leversKicker: '6 AI levers · Local Google SEO & customer retention',
      leversH2: '6 practical tools to climb on Google and bring shoppers back',
      leversSubtitle:
        'Every tool boosts your Google Maps profile and drives repeat neighborhood visits — zero technical jargon required.',
      leversPricingLink: 'Compare CHF plans',
      leversDiscoverPrefix: 'Explore',
      levers: [
        {
          id: 'reviews',
          number: '01',
          icon: 'reviews',
          tierId: 'essentiel',
          tierLabel: 'Essential · 19.90 CHF',
          title: 'AI Google Review Replies',
          description:
            'Reply to 100% of your Google reviews in 1 click with local keywords and get instant SMS alerts on low-star feedback.',
          proof: 'Top 3 Google Maps & 4.8★ protected',
          path: '/avis-google-ia',
        },
        {
          id: 'gbp',
          number: '02',
          icon: 'gbp',
          tierId: 'essentiel',
          tierLabel: 'Essential · 19.90 CHF',
          title: 'Google Business Profile Management',
          description:
            'Keep your Google listing fresh year-round: special opening hours, public holidays, AI-optimized shop description, and local updates.',
          proof: 'Strong freshness signal for Google Maps',
          path: '/gestion-fiche-google',
        },
        {
          id: 'social',
          number: '03',
          icon: 'social',
          tierId: 'essentiel',
          tierLabel: 'Essential · 19.90 CHF',
          title: 'Express Social Media',
          description:
            'Snap a quick photo at your counter: Komero writes the caption, adds neighborhood hashtags, and publishes to Instagram & Facebook.',
          proof: 'From photo to live post in 15 seconds',
          path: '/reseaux-sociaux',
        },
        {
          id: 'missed-calls',
          number: '04',
          icon: 'missedCalls',
          tierId: 'premium',
          tierLabel: 'Premium · 49.90 CHF',
          title: 'Missed Calls Caught by SMS',
          description:
            'Missed a phone call during the rush? Your caller immediately receives a warm SMS with your hours or booking info.',
          proof: 'Auto SMS sent within 12 seconds',
          path: '/repondeur-sms',
        },
        {
          id: 'sms-flash',
          number: '05',
          icon: 'smsFlash',
          tierId: 'premium',
          tierLabel: 'Premium · 49.90 CHF',
          title: 'Flash SMS Promo Campaigns',
          description:
            'Fill a quiet weekday or clear end-of-day stock by sending a short STOP-compliant text to your loyal local customer list.',
          proof: '95% read in under 3 minutes',
          path: '/campagnes-sms-flash',
        },
        {
          id: 'market-watch',
          number: '06',
          icon: 'marketWatch',
          tierId: 'premium',
          tierLabel: 'Premium · 49.90 CHF',
          title: 'Neighborhood Watch & Ideas',
          description:
            'Monitor nearby shops and receive ready-to-publish weekly post ideas tailored to your street and seasonal calendar.',
          proof: 'Weekly local briefing & post ideas',
          path: '/veille-concurrence',
        },
      ],
      starterBadge: 'Free when you sign up',
      starterTitle: 'Contacts & Google Reviews Starter Pack',
      starterSubtitle:
        'A ready-to-place countertop QR stand that turns checkout visits into 5★ Google reviews and an automatic SMS customer list — in 3 jargon-free steps.',
      starterBanner:
        'Included free in Essential (19.90 CHF/mo) and Premium (49.90 CHF/mo) • 7-day free trial',
      starterLinkWheel: 'Discover the countertop Lucky Wheel',
      starterLinkPricing: 'View CHF plans',
      starterVisualAria:
        'Komero countertop QR code stand next to a smartphone displaying the Lucky Wheel game and a 5-star Google review invitation',
      starterVisualScan: 'Scan & play!',
      starterVisualGift: 'Win a shop gift',
      starterVisualWheelTitle: 'The Lucky Wheel',
      starterVisualWheelSub: 'Spin in 15 seconds',
      starterVisualGoogleSub: 'Review + contact saved',
      starterVisualCaption: 'Ready for your shop counter from day one',
      fieldCasesKicker: 'Real-world shop examples · Switzerland',
      fieldCasesH2: 'A turnkey solution built for local shopkeepers',
      fieldCasesSubtitle:
        'Three concrete everyday workflows solved in 2 minutes a day — ready to use immediately across Switzerland.',
      fieldCasesBadge: 'Real-world shop example',
      fieldCases: [
        {
          id: 'bakery-ge',
          business: 'Artisan Bakery',
          city: 'Geneva',
          quote:
            '“Zero missed calls during the lunch rush and +14 Google reviews in 3 weeks thanks to the countertop QR stand.”',
          routine: 'Automatic missed-call SMS + AI review replies in 2 min/day',
          resultTag: '0 missed calls · +14 Google reviews',
        },
        {
          id: 'hair-ls',
          business: 'Hair Salon',
          city: 'Lausanne',
          quote:
            '“Quiet Tuesday openings filled in 20 minutes via Flash SMS and our Google listing always accurate on public holidays.”',
          routine: 'Customer list Flash SMS + Swiss holiday Google Maps sync',
          resultTag: 'Slots filled in 20 min',
        },
        {
          id: 'wine-zh',
          business: 'Wine Shop & Deli',
          city: 'Zurich',
          quote:
            '“One phone photo of a new arrival = Instagram, Facebook, and Google Business update published in 15 seconds.”',
          routine: 'Mobile Express Post + 1-click multi-channel publishing',
          resultTag: 'IG + FB + Google in 15 sec',
        },
      ],
      readyPrompt:
        'Ready to launch Komero in your shop? Available immediately, with no commitment.',
      readyTrialCta: 'Start 7-day free trial',
      readyDemoCta: 'Book a 5-min demo',
      featuresKicker: 'The 6 Komero levers · Desktop & Mobile PWA',
      featuresH2: '6 AI tools to attract, reply, and retain customers in your neighborhood',
      featuresPricingLink: 'View CHF pricing',
      featureCardTierPrefix: 'Plan',
      featureCardDiscoverPrefix: 'Explore',
      bottomAria: 'Take action',
      bottomKicker: 'Ready to rank #1 on Google in your neighborhood?',
      bottomH2: 'Start your 7-day free trial or book a 5-minute demo',
      buyTagline: '7 days free • 19.90 or 49.90 CHF/month • No commitment',
      buyTitle: 'Launch Komero in your shop today',
      buyBody:
        'Pick Essential (19.90 CHF/month — Google Profile, AI Reviews & Social Media) or Premium (49.90 CHF/month — everything in Essential + Audit & Google Posts, Missed-Call SMS, Flash SMS & Market Watch), with your free Starter Pack live in 10 minutes.',
      buyCta: 'Start now (7 days free)',
      demoTagline: 'Video demo across Switzerland · Free Google profile check',
      demoTitle: 'Prefer a quick 5-minute live demo first?',
      demoBody:
        'We review your current Google listing together and show you in 5 minutes how Komero fits your shop and neighborhood.',
      demoCta: 'Request a 5-min demo',
    },
    featureTemplate: {
      modulePrefix: 'Feature',
      formulaPrefix: 'Plan',
      beforeAfterAria: 'Before and with Komero',
      problemKicker: 'Daily reality in your shop',
      solutionKicker: 'How Komero solves it',
      complementaryAria: 'Complementary Komero features',
      complementaryKicker: 'Komero toolkit · Desktop & Mobile',
      complementaryH2: 'Explore complementary tools for your local shop',
      comparePlansLink: 'Compare CHF plans',
      moduleLabel: 'Module',
      discoverPrefix: 'Explore',
      wheelBonusBadge: 'Included free',
      wheelBonusTitle: 'Countertop Lucky Wheel',
      wheelBonusDesc:
        'Ready-to-place QR code stand that collects 5★ Google reviews and grows your SMS customer list.',
      wheelBonusCta: 'Discover the countertop Lucky Wheel',
      finalCtaKicker: 'Contacts & Google Reviews Starter Pack included · 7 days free',
      finalCtaH2: 'Ready to turn on this feature in your shop?',
      finalCtaBody:
        'Subscribe in 2 minutes with no commitment (CHF pricing) or request a quick live demo tailored to your business.',
      finalCtaPricing: 'View CHF pricing',
      finalCtaDemo: 'Request a demo',
    },
    featurePages: {
      '/avis-google-ia': {
        moduleNumber: '01',
        tierLabel: 'Essential',
        tierNote: 'Local Google Maps visibility & QR Lucky Wheel synergy',
        headline: 'AI Google Reviews: climb into the Top 3 on Google Maps in your area',
        subtitle:
          'Reply to 100% of your Google reviews in 1 click on desktop or mobile with FADP & GDPR anonymization, local keywords, and calm negative-review handling.',
        problemTitle: 'Why unanswered Google reviews cost you walk-in customers',
        problemPoints: [
          'No time at the end of a long day to write thoughtful replies to every review.',
          'A single unanswered critical review makes new local shoppers hesitate.',
          'Without fresh reviews and local keywords, nearby competitors rank ahead of you on Google Maps.',
        ],
        solutionTitle: 'What Komero automates for your local reputation',
        solutionPoints: [
          '1-click personalized replies referencing the customer name, product mentioned, and rating.',
          'Instant SMS alerts for reviews under 4 stars so you can respond fast and calmly.',
          'Natural local search terms built in + direct synergy with the free Contacts & Google Reviews Starter Pack.',
        ],
        fieldKicker: '1-click human approval · Instant SMS alerts · FADP & GDPR compliant',
        fieldTitle: 'Turn happy countertop customers into local ambassadors',
        fieldText:
          'Even delighted customers forget to leave a review once they get home. With your free countertop QR stand, gentle SMS follow-ups, and locally tailored replies, your Google profile becomes your #1 source of new local shoppers.',
        fieldBullets: [
          'Optimized for local "trade + city / neighborhood" searches',
          'Free Contacts & Google Reviews Starter Pack included from day one',
          'Immediate SMS alert whenever a review is below 4 stars',
          'Mandatory 1-click approval before anything is published on Google',
        ],
        fieldImageAlt:
          'Independent baker showing his Google Maps listing on a smartphone to a smiling customer at the counter',
        editorialKicker: 'Google Business Profile local visibility',
        editorialTitle: 'How consistent review replies boost your Google Maps ranking',
        editorialCards: [
          {
            title: 'Fresh activity rewarded by Google Maps',
            body: 'Google favors active shops that earn steady reviews and reply promptly. Replying every week in one click proves to both shoppers and Google Maps that your business is attentive and trustworthy.',
          },
          {
            title: 'Natural trade & neighborhood keywords',
            body: 'Each Komero draft naturally weaves in your craft (artisan bakery, hair salon, wine shop, neighborhood café) and city so you show up more often when locals search nearby.',
          },
          {
            title: 'Calm, reassuring replies to tough feedback',
            body: 'Whenever a critical review arrives, Komero notifies you right away by SMS and prepares a polite, solution-oriented reply that builds confidence with future visitors.',
          },
        ],
      },
      '/reseaux-sociaux': {
        moduleNumber: '02',
        tierLabel: 'Essential',
        tierNote: 'Instagram & Facebook ready in 15 seconds',
        headline: 'Local Shop Social Media: from a phone photo to a ready post in 15 seconds',
        subtitle:
          'Snap a photo in your shop on your phone: Komero writes an engaging caption with local hashtags and publishes to both Instagram and Facebook.',
        problemTitle: 'Why your Instagram and Facebook pages stay quiet',
        problemPoints: [
          'Hard to find inspiration and the right words between customers at the counter.',
          'Wasting time rewriting and uploading every post twice for Instagram and Facebook.',
          'Key seasonal moments (Mother’s Day, back-to-school, holidays) arrive before you can prepare.',
        ],
        solutionTitle: 'What Komero builds the moment you take a photo',
        solutionPoints: [
          'Photo taken in-shop on mobile → warm, authentic caption + local hashtags in 15 seconds.',
          'Simultaneous 1-click publishing to Instagram & Facebook, or scheduling on your desktop calendar.',
          '30 ready posts per month plus automatic reminders for key local retail dates.',
        ],
        fieldKicker: '',
        fieldTitle: '',
        fieldText: '',
        fieldBullets: [],
        fieldImageAlt: '',
        editorialKicker: 'Local Instagram & Facebook presence',
        editorialTitle: 'Posts built to bring nearby neighbors straight into your shop',
        editorialCards: [
          {
            title: 'Your authentic shopkeeper voice preserved',
            body: 'No robotic marketing speak: Komero learns your tone (warm, gourmet, expert, or friendly) and adapts every caption to your daily products and local regulars.',
          },
          {
            title: 'Weekly consistency without an agency',
            body: 'Posting two or three times a week keeps your shop top-of-mind in your neighborhood. Plan your entire week in minutes from your desktop or in seconds from your phone.',
          },
          {
            title: 'Targeted visibility in your exact town',
            body: 'Every post includes relevant local hashtags (city, district, craft) so your photos reach real neighbors who can walk through your door today.',
          },
        ],
      },
      '/repondeur-sms': {
        moduleNumber: '03',
        tierLabel: 'Premium',
        tierNote: 'Dedicated business number & instant missed-call SMS',
        headline: 'Missed a call during the rush? Komero replies instantly by SMS',
        subtitle:
          'Whenever a call goes unanswered while you serve customers, Komero sends a warm welcome SMS within 12 seconds and prepares smart replies to common questions.',
        problemTitle: 'What happens when the phone rings during peak hours',
        problemPoints: [
          'You cannot pick up while serving a customer at the counter, chair, or kitchen.',
          'Callers who hit voicemail rarely leave a message—they call the shop next door.',
          'Repetitive questions (hours, stock, bookings) pile up until closing time.',
        ],
        solutionTitle: 'How Komero saves every caller automatically by SMS',
        solutionPoints: [
          'Automatic friendly SMS sent within 12 seconds of every missed call.',
          'Centralized AI SMS inbox drafting instant answers for hours, availability, and bookings.',
          'Approve in 1 click on desktop or mobile between customers—zero lost inquiries.',
        ],
        fieldKicker: 'Dedicated business number · Desktop & Mobile SMS inbox',
        fieldTitle: 'A warm SMS welcome, even in the middle of a rush',
        fieldText:
          'Stay 100% focused on the customer standing in front of you while Komero reassures callers by SMS and captures their request (booking, item availability, opening hours).',
        fieldBullets: [
          'Automatic welcome SMS whenever a call goes unanswered',
          'Centralized AI SMS inbox on desktop and mobile',
          'Suggested replies based on your hours, stock, and booking rules',
          'Zero forgotten callbacks at the end of the day',
        ],
        fieldImageAlt:
          'Independent hairdresser checking recovered SMS booking inquiries on a smartphone after a missed call',
        editorialKicker: 'Missed-call SMS recovery',
        editorialTitle: 'Why an SMS sent in 12 seconds keeps callers from going next door',
        editorialCards: [
          {
            title: 'Instant response at the exact moment they need you',
            body: 'A neighbor calling to reserve a table, book a haircut, or check stock rarely leaves a voicemail. An instant SMS keeps the conversation alive while their phone is still in hand.',
          },
          {
            title: 'Universal channel that works on every phone',
            body: 'Unlike chat apps requiring an account, SMS reaches 100% of your neighborhood customers regardless of age or phone model, with zero app downloads.',
          },
          {
            title: 'Zero interruptions while serving in-shop guests',
            body: 'Stay attentive to customers inside your store. Whenever you have thirty quiet seconds, your desktop and mobile inbox shows sorted requests with ready-to-send answers.',
          },
        ],
      },
      '/campagnes-sms-flash': {
        moduleNumber: '04',
        tierLabel: 'Premium',
        tierNote: '145 chars max + STOP · 95% open rate',
        headline: 'Flash SMS Campaigns: fill quiet hours in 3 minutes',
        subtitle:
          'Use the customer SMS list built automatically at your counter with the free Starter Pack: one short SMS with STOP compliance drives immediate foot traffic.',
        problemTitle: 'Why slow afternoons and end-of-day stock hurt your margin',
        problemPoints: [
          'Unsold fresh items in the late afternoon or a quiet Tuesday with few walk-ins.',
          'Promotional emails are opened too late or buried in spam folders.',
          'No clean, FADP-compliant mobile contact list to alert your regulars quickly.',
        ],
        solutionTitle: 'A 1-click Flash SMS button connected to your customer list',
        solutionPoints: [
          'Customer SMS list grown automatically at checkout via the free Starter Pack.',
          '1-click AI copy calibrated to 145 characters max with your shop name and STOP opt-out.',
          '95% of SMS messages are read within 3 minutes—bringing regulars in within the hour.',
        ],
        fieldKicker: 'Calibrated 145-char SMS · Built from your countertop list',
        fieldTitle: 'Effortless for you, respectful for your regulars',
        fieldText:
          'Type your offer on desktop or mobile: Komero polishes it under 145 characters with mandatory STOP opt-out and automatically respects legal sending hours.',
        fieldBullets: [
          '1-click targeted send to your consenting loyal shoppers',
          'Automatic compliance with Swiss FADP and legal sending hours',
          'Automatic STOP opt-out management and European hosting',
        ],
        fieldImageAlt:
          'Independent wine merchant showing a flash SMS offer on a smartphone to a regular customer at the counter',
        editorialKicker: 'SMS loyalty for local shops & artisans',
        editorialTitle: 'Three key moments when a Flash SMS generates immediate counter sales',
        editorialCards: [
          {
            title: 'End-of-day anti-waste offers',
            body: 'Surprise bakery bags, fresh bouquets, or daily specials before closing: an SMS sent at 4:30 pm brings nearby regulars back in minutes instead of letting stock go to waste.',
          },
          {
            title: 'Filling slow weekday slots',
            body: 'A rainy Tuesday afternoon or two last-minute salon cancellations: invite your registered regulars with a small perk to smooth out your weekly traffic.',
          },
          {
            title: 'Private previews & seasonal arrivals',
            body: 'Give your best customers first access to new wine vintages, fresh boutique arrivals, or holiday pre-orders before anyone else.',
          },
        ],
      },
      '/veille-concurrence': {
        moduleNumber: '05',
        tierLabel: 'Premium',
        tierNote: 'Weekly neighborhood insights & ready post ideas',
        headline: 'Local Market Watch: stay one step ahead in your neighborhood',
        subtitle:
          'Every week, Komero reviews nearby shops, spots local seasonal trends, and delivers ready-to-publish post and promo ideas.',
        problemTitle: 'Why tracking your local market alone takes too much time',
        problemPoints: [
          'No time to monitor nearby competitors’ offers, reviews, and social activity.',
          'Blank-page frustration every week when deciding what to highlight.',
          'Local events and seasonal demand spikes missed without early notice.',
        ],
        solutionTitle: 'Your weekly neighborhood briefing in 60 seconds',
        solutionPoints: [
          'Automatic weekly overview of nearby competitors and their local momentum.',
          'Detection of rising seasonal trends and local searches in your city.',
          'Actionable post and offer ideas ready to launch in 1 click on Instagram, Facebook, or SMS.',
        ],
        fieldKicker: 'Connected to your other 4 Komero modules',
        fieldTitle: 'Never wonder what to post this week again',
        fieldText:
          'One quick glance on Monday morning from your desktop or phone tells you which product to spotlight and which time slot works best.',
        fieldBullets: [
          '60-second weekly briefing with zero jargon',
          'Send any post idea straight to Instagram & Facebook in 1 click',
          'Tailored to your exact address, trade, and current season',
        ],
        fieldImageAlt:
          'Bustling neighborhood shopping street illustrating Komero local competitor and trend analysis',
        editorialKicker: 'Neighborhood competitive radar',
        editorialTitle: 'What your weekly briefing checks every Monday morning',
        editorialCards: [
          {
            title: 'Nearby ratings & review momentum',
            body: 'See at a glance how your shop compares with similar businesses around your address so you know when to accelerate your Google review collection.',
          },
          {
            title: 'Local events & seasonal search spikes',
            body: 'Neighborhood markets, public holidays, weather shifts, and rising seasonal queries: Komero highlights what locals near you are looking for right now.',
          },
          {
            title: 'Straight from insight to published post',
            body: 'Every weekly recommendation comes with a ready-made angle you can turn into an Instagram post, Facebook update, or Flash SMS offer in one click.',
          },
        ],
      },
    },
    socialSteps: [
      {
        step: '01. Snap a photo',
        title: 'Your window, a dish, or a new arrival',
        body: 'Take a natural photo at your counter, kitchen, or salon—no design tools or editing needed.',
      },
      {
        step: '02. Caption + local hashtags',
        title: 'Written in your voice in 15 seconds',
        body: 'Komero recognizes your product, writes an appealing caption, and adds your town’s hashtags to reach nearby shoppers.',
      },
      {
        step: '03. Publish everywhere',
        title: 'Instagram & Facebook in 1 click',
        body: 'Publish right away or schedule for peak hours so your channels stay active all week.',
      },
    ],
    socialCalendarKicker: 'Never miss a retail highlight',
    socialCalendarH2: 'Automatic calendar of local retail dates',
    socialCalendarBody:
      'Komero reminds you ahead of every key date and prepares ready posts to drive in-shop pre-orders.',
    luckyWheel: {
      kicker: 'Free when you sign up · Included in Essential & Premium',
      h1: 'Countertop Lucky Wheel: more Google reviews and your own SMS customer list',
      subtitle:
        'Place your QR code stand at checkout: customers spin the Lucky Wheel on their phone in 15 seconds, leave a Google review, and join your SMS customer list—no app download needed.',
      primaryCta: 'Start now (7 days free)',
      secondaryCta: 'Request a 5-min demo',
      imageAlt:
        'Komero Lucky Wheel on a smartphone with a countertop QR code stand for collecting Google reviews and building an SMS customer list',
      howKicker: 'How your Contacts & Google Reviews Starter Pack works',
      howH2: 'A simple counter game that keeps your shop busy all year',
      howBody:
        'As soon as you sign up, we customize your Lucky Wheel with your shop colors, your rewards (free coffee, discount on the next visit, tasting item), and your ready-to-display QR code stand.',
      smsBanner:
        'Reward delivery, notifications, and customer list 100% by SMS — Swiss FADP & GDPR compliant.',
      benefits: [
        {
          title: '5-star Google reviews boost',
          body: 'Happy shoppers are invited at the best possible moment—right at the counter—to post their Google review, pushing your shop into the local Top 3.',
        },
        {
          title: 'Built-in SMS customer list',
          body: 'Every participant receives their gift by SMS and automatically joins your customer list for future Flash SMS offers on quiet days.',
        },
        {
          title: 'Included free & FADP / GDPR compliant',
          body: 'Included free in both Essential and Premium plans, with clear consent, STOP opt-out, and 100% data ownership for your shop.',
        },
      ],
      complementaryAria: 'Complementary tools connected to the Lucky Wheel',
      complementaryKicker: 'Seamless synergy with your Komero assistant',
      complementaryH2: 'Put your new reviews and customer contacts to work right away',
      complementaryCards: [
        {
          meta: 'Module 01 · Essential Plan',
          title: 'AI Google Reviews',
          body: 'Reply in 1 click to the new 5★ reviews generated by your countertop QR stand to climb higher on Google Maps.',
          cta: 'Explore AI Google Reviews',
          to: '/avis-google-ia',
        },
        {
          meta: 'Module 04 · Premium Plan',
          title: '1-Click Flash SMS Offers',
          body: 'Bring customers who played your Lucky Wheel back into your shop on slow days or to clear end-of-day stock.',
          cta: 'Explore 1-Click Flash SMS Offers',
          to: '/campagnes-sms-flash',
        },
        {
          meta: 'Module 02 · Essential Plan',
          title: 'Express Social Media',
          body: 'Share winners and daily shop highlights to Instagram and Facebook in 15 seconds from your phone.',
          cta: 'Explore Express Social Media',
          to: '/reseaux-sociaux',
        },
      ],
      finalKicker: 'Contacts & Google Reviews Starter Pack free · 7 days free',
      finalH2: 'Activate your countertop Lucky Wheel within 24 hours',
      finalBody:
        'Choose your no-commitment CHF plan or ask for a quick 5-minute demo tailored to your shop.',
      finalPricingCta: 'View CHF pricing',
      finalDemoCta: 'Request a demo',
    },
    pricing: {
      kicker: 'Switzerland CHF Pricing · Secure Stripe Checkout',
      h1: 'Simple, transparent CHF pricing with no commitment',
      subtitle:
        'Pick the plan that fits your shop. The Contacts & Google Reviews Starter Pack is included free in both plans.',
      launchBanner:
        'Switzerland launch offer: 7-day free trial on every plan — cancel anytime',
      cgvPrefix: 'I confirm I am acting as a business professional and accept the ',
      cgvLinkText: 'Komero Terms of Sale (B2B)',
      cgvSuffix: ' to unlock the secure Stripe CHF checkout buttons below.',
      cgvWarning: 'Please check this required box before proceeding to secure Stripe checkout.',
      cgvAccepted: 'Terms accepted: your Stripe CHF subscription buttons are now unlocked below.',
      trialBadge: '7 days free',
      stripeRedirectNote: 'Secure redirect to Stripe in CHF (new tab)',
      stripeLockedNote: 'Accept the Terms above to unlock Stripe checkout',
      reassuranceStripe:
        'Secure Stripe card verification • CHF 0 charged for 7 days • First charge on day 8 unless canceled in 1 click • No commitment.',
      vatNote: 'All prices in Swiss Francs (CHF) · No commitment · 1-click cancellation.',
      comparisonKicker: 'Side-by-side comparison',
      comparisonH2: 'Essential vs. Premium: compare every included tool',
      comparisonFeatureCol: 'Included feature',
      comparisonEssentielCol: 'Essential · 19.90 CHF',
      comparisonPremiumCol: 'Premium · 49.90 CHF',
      comparisonIncluded: 'Included',
      comparisonNotIncluded: 'Not included',
      faqKicker: 'Frequently asked questions',
      faqH2: '7-day free trial, CHF billing, cancellation & security',
      helpTitle: 'Not sure which plan fits your shop best?',
      helpBody:
        'Chat 5 minutes with a Komero advisor to pick the right setup for your business in Switzerland.',
      helpCta: 'Ask for advice',
    },
    contact: {
      kicker: 'Human support · Reply within 24h · No obligation',
      h1: 'Have a question? Want a quick 5-minute demo?',
      subtitle:
        'We spend 5 minutes reviewing your Google profile and local visibility—zero jargon and zero obligation.',
      directHeading: 'Direct contact (Switzerland)',
      phoneLabel: 'Direct call or SMS',
      emailLabel: 'Email',
      locationText:
        'Live video demos across all of Switzerland (Geneva, Zurich, Basel, Lausanne, Bern…) and in-person visits in Western Switzerland.',
      hoursText: 'Flexible slots during your quiet hours, Monday to Saturday.',
      fieldImageAlt: 'Personalized Komero onboarding at a local Swiss shop counter',
      fieldCaption: 'Free local visibility check prepared before our call.',
      formTitle: 'Book your 5-min demo (3 fields only)',
      formSubtitle:
        'Takes 15 seconds on mobile—a Komero Switzerland advisor calls you back during your quiet hours.',
      successMessage:
        'All set! Your callback request is confirmed, we will call you back within 24 hours.',
      fallbackTitle:
        'Connection briefly interrupted — your request was safely saved locally.',
      fallbackBody:
        'Send it in 1 click via pre-filled email or call us right away:',
      fallbackEmailBtn: 'Send by email',
      fallbackCallBtn: 'Call',
      fallbackRetryBtn: 'Try again',
      labels: {
        commerce: 'Shop / Business name',
        commercePlaceholder: 'e.g. Lakeview Bakery',
        metier: 'Business sector (optional)',
        metierPlaceholder: 'Select your sector',
        postal: 'Postal code or City',
        postalPlaceholder: 'e.g. 1204 Geneva or 8001 Zurich',
        nom: 'First & Last Name (optional)',
        nomPlaceholder: 'e.g. Claire Martin',
        tel: 'Mobile phone',
        telPlaceholder: 'e.g. +41 79 123 45 67',
        email: 'Business email (optional)',
        emailPlaceholder: 'e.g. hello@myshop.ch',
        sujet: 'Primary need (optional)',
        message: 'Preferred callback slot or Google profile link (optional)',
        messagePlaceholder:
          'e.g. Best reached between 2:30 pm and 4:30 pm, or link to your Google profile.',
      },
      step1Badge: 'Step 1 / 2 · Express callback (15 sec)',
      step2Badge: 'Step 2 / 2 · Optional details',
      step2ToggleExpand: 'Add sector, business email, or priority need (optional)',
      step2ToggleCollapse: 'Hide optional details',
      step2Title: 'One quick detail to tailor your free local audit? (optional)',
      step2Subtitle:
        'Your callback is already booked. Optionally add your sector, email, or top priority so your 5-min demo is tailored to your shop.',
      step2SubmitIdle: 'Save optional details',
      step2SubmitLoading: 'Saving...',
      step2SavedMessage:
        'Thank you! Your optional details have been added to your demo request.',
      step2SkipBtn: 'All good, thanks',
      step1DoneTitle: 'Callback request confirmed!',
      step1DoneBody:
        'A Komero Switzerland advisor will call your mobile shortly for your personalized 5-min demo.',
      newRequestBtn: 'Send another request',
      consentPrefix:
        'I agree that Komero may use these details to contact me regarding my request, in accordance with the Swiss FADP, GDPR, and our ',
      consentPrivacyLink: 'Privacy Policy',
      consentSuffix: '.',
      submitIdle: 'Request a 5-min demo callback',
      submitLoading: 'Sending...',
      bottomReassurance:
        '100% free & no obligation · Swiss FADP & GDPR compliant · Never sold to third parties',
    },
    paymentModal: {
      closeAria: 'Close confirmation window',
      kicker: 'Subscription confirmed · Secure Stripe checkout (CHF)',
      title: 'Welcome to Komero! Your workspace is active',
      introPrefix: 'Congratulations! Your Komero subscription, your ',
      introBonus: 'free Contacts & Google Reviews Starter Pack',
      introAnd: ', and your ',
      introTrial: '7-day free trial',
      introSuffix: ' are active. We will contact you within 2 hours to finalize setup.',
      bullet1Strong: 'Onboarding call within 2 hours',
      bullet1Text:
        'a Komero advisor will call to set up your Desktop & Mobile workspace.',
      bullet2Strong: 'Free Contacts & Google Reviews Starter Pack',
      bullet2Text:
        'immediate setup of your countertop QR stand and SMS customer list.',
      bullet3Strong: '7 days free, no commitment',
      bullet3Text:
        'CHF 0 charged for 7 days, first monthly billing on day 8 unless canceled in 1 click.',
      continueBtn: 'Great, continue on komero.ch',
    },
    legalUi: {
      tabsAria: 'Legal information tabs',
      printBtn: 'Print / PDF',
      lastUpdated: 'Last updated: 2026 · www.komero.ch',
      publisherLabel: 'Publisher & Publication Director',
      portalBtnPrefix: 'Manage or cancel subscription',
      portalExternalLabel: 'Open Stripe Customer Portal (1-click cancellation)',
      contactLink: 'Have a question? Contact Komero →',
      pricingLink: 'View CHF pricing →',
      tabs: {
        mentions: 'Legal Notice',
        cgv: 'B2B Terms (CHF)',
        privacy: 'Privacy (FADP & GDPR)',
      },
      headers: {
        mentions: {
          kicker: 'Regulatory information · Switzerland & Europe',
          title: 'Legal Notice',
          subtitlePrefix: 'Website publisher',
        },
        cgv: {
          kicker: 'B2B Terms of Sale · CHF Pricing · 8 Articles',
          title: 'Terms of Sale (B2B)',
          subtitle:
            'Terms applicable to Komero subscriptions in CHF purchased by independent shops, artisans, and professionals in Switzerland.',
        },
        privacy: {
          kicker: 'Data protection · Swiss FADP & GDPR',
          title: 'Privacy Policy',
          subtitlePrefix:
            'Transparency on data collection, retention, processors, and your rights under Swiss FADP and GDPR on',
        },
      },
    },
    deviceFrames: {
      pcLabel: 'PC',
      pcCaptionTag: 'Interface preview',
    },
  },
};
