import type { Language } from '../config/siteConfig';

export interface HeroMockupCopy {
  desktopAria: string;
  navHome: string;
  navReviews: string;
  navSocial: string;
  navResponder: string;
  navSms: string;
  starterActive: string;
  contactsCount: string;
  shopName: string;
  morningSummary: string;
  hoursSaved: string;
  kpiGoogleLabel: string;
  kpiGoogleSub: string;
  kpiCallsLabel: string;
  kpiCallsSub: string;
  kpiBaseLabel: string;
  kpiBaseSub: string;
  prioritiesHeading: string;
  reviewTitle: string;
  reviewSub: string;
  publishBtn: string;
  postTitle: string;
  postSub: string;
  readyBadge: string;
  mobileBadge: string;
  mobileSub: string;
  mobileUrgentBadge: string;
  mobileAlertTitle: string;
  mobileAlertSub: string;
  mobileActionTitle: string;
  mobileActionSub: string;
  mobileActionBtn: string;
  mobileQuick1: string;
  mobileQuick2: string;
  tabComposite: string;
  tabDesktop: string;
  tabMobile: string;
  pcUrl: string;
  pcSlot: string;
  pcCaption: string;
  mobileSlot: string;
  mobileCaption: string;
  previewBadge: string;
}

export interface GoogleReviewsMockupCopy {
  intro: string;
  tablistAria: string;
  pcUrl: string;
  pcSlot: string;
  pcCaption: string;
  shopSubline: string;
  heading: string;
  currentRating: string;
  ratingAria: (rating: number) => string;
  aiProposalBadge: string;
  keywordsLabel: string;
  qrActiveNote: string;
  publishedBtn: string;
  publishBtn: string;
  mobileSlot: string;
  mobileCaption: string;
  mapsHeader: string;
  mapsShopName: string;
  mapsMeta: string;
  tabOverview: string;
  tabReviews: string;
  tabPhotos: string;
  ownerReplyTitle: string;
  justNow: string;
  pendingTitle: string;
  pendingSub: string;
  scenarios: Array<{
    id: 'camille' | 'lukas' | 'elena';
    tabLabel: string;
    author: string;
    rating: number;
    dateLabel: string;
    comment: string;
    detectedKeywords: string[];
    aiReply: string;
    seoBenefit: string;
  }>;
}

export interface SocialMediaMockupCopy {
  intro: string;
  tablistAria: string;
  footerTag: string;
  presets: Array<{
    id: 'brioche' | 'vin';
    label: string;
    imageAlt: string;
    caption: string;
  }>;
}

export interface SmsResponderMockupCopy {
  intro: string;
  btnSimulated: string;
  btnSimulate: string;
  mobileSlot: string;
  mobileCaption: string;
  proNumberHeader: string;
  missedCallSub: string;
  todayPrefix: string;
  autoSmsTitle: string;
  autoSmsBody: string;
  validatedLabel: string;
  pendingNote: string;
  pcUrl: string;
  pcSlot: string;
  pcCaption: string;
  dedicatedNumberLine: string;
  inboxTitle: string;
  recoveredCount: (count: number) => string;
  statusSent: string;
  statusReady: string;
  aiSuggestionPrefix: string;
  validateAndSend: string;
  simulatedThread: {
    time: string;
    customer: string;
    phoneMasked: string;
    trigger: string;
    customerMessage: string;
    aiDraftReply: string;
  };
  initialThreads: Array<{
    id: string;
    time: string;
    customer: string;
    phoneMasked: string;
    trigger: string;
    customerMessage: string;
    aiDraftReply: string;
    sent: boolean;
  }>;
}

export interface SmsFlashMockupCopy {
  intro: string;
  pcUrl: string;
  pcSlot: string;
  pcCaption: string;
  moduleSubtitle: string;
  heading: string;
  recipientsLabel: (n: number) => string;
  inputLabel: string;
  stopNotice: string;
  charsUnit: string;
  oneSmsLabel: string;
  segmentsLabel: (n: number) => string;
  opensLabel: string;
  opensUnit: string;
  visitsLabel: string;
  visitsUnit: string;
  sentBtn: (n: number) => string;
  sendBtn: string;
  mobileSlot: string;
  mobileCaption: string;
  mobileSubline: string;
  mobileTimestamp: string;
  receivedNote: string;
  previewNote: string;
  impactTitle: string;
  impactBody: string;
  presets: Array<{
    id: string;
    label: string;
    shop: string;
    text: string;
    recipients: number;
  }>;
}

export interface MarketWatchMockupCopy {
  intro: string;
  tablistAria: string;
  pcUrl: string;
  pcSlot: string;
  pcCaption: string;
  reportTitle: string;
  updatedLabel: string;
  competitorTitle: string;
  trendTitle: string;
  searchesTitle: string;
  searchesNote: string;
  mobileSlot: string;
  mobileCaption: string;
  ideaHeader: string;
  queuedBtn: string;
  queueBtn: string;
  presets: Array<{
    id: 'boulangerie' | 'coiffure' | 'caviste';
    label: string;
    cityContext: string;
    competitorInsight: string;
    seasonalTrend: string;
    topLocalSearches: string[];
    postIdeaTitle: string;
    postIdeaCaption: string;
    bestSlot: string;
    imageAlt: string;
  }>;
}

export interface MockupTranslations {
  hero: HeroMockupCopy;
  googleReviews: GoogleReviewsMockupCopy;
  socialMedia: SocialMediaMockupCopy;
  smsResponder: SmsResponderMockupCopy;
  smsFlash: SmsFlashMockupCopy;
  marketWatch: MarketWatchMockupCopy;
}

export const MOCKUP_TRANSLATIONS: Record<Language, MockupTranslations> = {
  fr: {
    hero: {
      desktopAria:
        'Tableau de bord PC Komero pour la Boulangerie du Lac à Lausanne : avis Google IA, publications réseaux sociaux, appels manqués SMS et base client',
      navHome: 'Accueil',
      navReviews: 'Avis Google',
      navSocial: 'Réseaux',
      navResponder: 'Répondeur',
      navSms: 'Promos SMS',
      starterActive: 'Starter Pack actif',
      contactsCount: '+148 contacts clients',
      shopName: 'Boulangerie du Lac · Lausanne',
      morningSummary: 'Synthèse du matin · 3 actions prêtes en 1 clic',
      hoursSaved: '6h30 gagnées',
      kpiGoogleLabel: 'Note Google',
      kpiGoogleSub: '+14 avis / mois',
      kpiCallsLabel: 'Appels rattrapés',
      kpiCallsSub: 'SMS en 12 s',
      kpiBaseLabel: 'Base client',
      kpiBaseSub: 'Fichier client SMS',
      prioritiesHeading: 'Priorités prêtes à valider',
      reviewTitle: 'Avis 5★ — Camille R. (Tresse au beurre maison)',
      reviewSub: 'Réponse locale rédigée · Anonymisée nLPD',
      publishBtn: 'Publier',
      postTitle: 'Post Instagram & Facebook — Fournée du matin',
      postSub: 'Légende + hashtags #Lausanne prêts · 11h30',
      readyBadge: 'Prêt',
      mobileBadge: 'Mobile',
      mobileSub: 'Lausanne · Priorités du jour',
      mobileUrgentBadge: '1 appel manqué → SMS envoyé',
      mobileAlertTitle: 'Lukas M. (11h42)',
      mobileAlertSub: '« Pouvez-vous me garder une tresse pour 18h ? »',
      mobileActionTitle: 'Réponse SMS prête',
      mobileActionSub: '« Bonjour Lukas, c’est réservé pour 18h ! »',
      mobileActionBtn: 'Envoyer en 1 clic',
      mobileQuick1: '2 avis prêts',
      mobileQuick2: '1 post prêt',
      tabComposite: 'PC + Mobile',
      tabDesktop: 'Vue PC',
      tabMobile: 'Vue Mobile',
      pcUrl: 'app.komero.ch/tableau-de-bord',
      pcSlot: 'Interface PC Komero — Tableau de bord commerçant',
      pcCaption: 'Pilotez tout depuis votre PC au comptoir ou sur votre smartphone',
      mobileSlot: 'Application Mobile Komero — Priorités du jour',
      mobileCaption: 'Inclus sur smartphone iOS & Android sans installation complexe',
      previewBadge: 'Aperçu de l’interface',
    },
    googleReviews: {
      intro: 'Testez la génération de réponse IA selon le type d’avis reçu :',
      tablistAria: "Scénarios d'avis Google",
      pcUrl: 'app.komero.ch/avis-google',
      pcSlot: 'Interface PC Komero — Génération de réponse Avis Google IA',
      pcCaption: 'Interface PC Komero : validation en 1 clic avec anonymisation nLPD & RGPD',
      shopSubline: 'Boulangerie du Lac · Lausanne · Anonymisation nLPD active',
      heading: 'Réponse IA prête à valider',
      currentRating: 'Note actuelle : 4,8 / 5 (214 avis)',
      ratingAria: (r) => `Note ${r} sur 5`,
      aiProposalBadge: 'Proposition Komero IA · Ton chaleureux',
      keywordsLabel: 'Éléments repris :',
      qrActiveNote: 'Starter Pack QR Code actif (+18 avis ce mois)',
      publishedBtn: 'Publié sur Google Maps',
      publishBtn: 'Valider et publier en 1 clic',
      mobileSlot: 'Smartphone — Rendu réel sur la fiche Google Maps',
      mobileCaption: 'Rendu en direct sur Google Maps (vue client)',
      mapsHeader: 'Google Maps · Fiche établissement',
      mapsShopName: 'Boulangerie du Lac',
      mapsMeta: '(214) · Boulangerie · Lausanne',
      tabOverview: 'Présentation',
      tabReviews: 'Avis',
      tabPhotos: 'Photos',
      ownerReplyTitle: 'Réponse du propriétaire',
      justNow: 'À l’instant',
      pendingTitle: 'Réponse en attente de votre clic sur PC',
      pendingSub: 'Cliquez sur « Valider et publier en 1 clic » pour voir le rendu en direct.',
      scenarios: [
        {
          id: 'camille',
          tabLabel: 'Camille R. (5★)',
          author: 'Camille R.',
          rating: 5,
          dateLabel: 'Il y a 2 heures',
          comment:
            'Meilleure tresse au beurre de Lausanne ! Accueil toujours souriant et fournées encore tièdes le matin.',
          detectedKeywords: ['tresse au beurre', 'accueil', 'Lausanne'],
          aiReply:
            'Merci beaucoup Camille pour ce superbe retour ! Toute l’équipe de la Boulangerie du Lac est ravie que notre tresse au beurre maison vous régale chaque matin à Lausanne. À très vite au comptoir !',
          seoBenefit: 'Mots-clés locaux intégrés : boulangerie artisanale, tresse au beurre, Lausanne',
        },
        {
          id: 'lukas',
          tabLabel: 'Lukas M. (5★)',
          author: 'Lukas M.',
          rating: 5,
          dateLabel: 'Hier',
          comment:
            'Pain au levain naturel excellent et service très rapide même pendant la pause de midi. Je recommande sans hésiter.',
          detectedKeywords: ['pain au levain', 'service rapide', 'pause de midi'],
          aiReply:
            'Un grand merci Lukas pour vos 5 étoiles ! Nos boulangers pétrissent ce pain au levain chaque matin pour vous offrir une croûte parfaite. Au plaisir de vous revoir bientôt !',
          seoBenefit: 'Mots-clés locaux intégrés : pain au levain naturel, boulangerie de quartier',
        },
        {
          id: 'elena',
          tabLabel: 'Elena V. (5★)',
          author: 'Elena V.',
          rating: 5,
          dateLabel: 'Il y a 3 jours',
          comment:
            'Tartelettes aux fruits de saison délicieuses et équipe adorable. Mon adresse préférée du quartier !',
          detectedKeywords: ['tartelettes aux fruits', 'fruits de saison', 'quartier'],
          aiReply:
            'Merci infiniment Elena pour ce beau message ! Nous sélectionnons des fruits de saison chaque semaine pour nos tartelettes maison. À très bientôt en boutique !',
          seoBenefit: 'Fidélisation locale & anonymisation nLPD / RGPD active avant validation',
        },
      ],
    },
    socialMedia: {
      intro: 'Découvrez deux exemples concrets de posts générés en 15 secondes :',
      tablistAria: 'Choisir un exemple de visuel réseaux sociaux',
      footerTag: 'PC & Mobile · Komero',
      presets: [
        {
          id: 'brioche',
          label: 'Boulangerie · Tresse dorée',
          imageAlt:
            'Aperçu Komero Post Express mobile et calendrier éditorial PC pour une boulangerie avec photo de brioche tressée maison',
          caption:
            'Exemple Boulangerie : photo prise au comptoir → post Instagram & Facebook prêt en 15 s et calendrier éditorial PC',
        },
        {
          id: 'vin',
          label: 'Caviste · Bouteille de vin',
          imageAlt:
            'Aperçu Komero Post Express mobile et calendrier éditorial PC pour un caviste avec photo de bouteille de vin rouge',
          caption:
            'Exemple Caviste : photo prise au comptoir → post Instagram & Facebook prêt en 15 s et calendrier éditorial PC',
        },
      ],
    },
    smsResponder: {
      intro:
        'Simulez un appel manqué pendant le coup de feu pour voir le SMS instantané et la boîte de réception IA :',
      btnSimulated: 'Appel manqué rattrapé par SMS (réponse IA prête)',
      btnSimulate: 'Simuler un appel manqué maintenant',
      mobileSlot: 'Smartphone client — SMS chaleureux reçu instantanément après appel manqué',
      mobileCaption: 'SMS d’accueil reçu en 12 s sur le téléphone du client',
      proNumberHeader: 'Numéro pro · Boulangerie du Lac',
      missedCallSub: 'Appel manqué → SMS envoyé automatiquement',
      todayPrefix: 'Aujourd’hui ·',
      autoSmsTitle: 'SMS automatique (appel manqué)',
      autoSmsBody:
        'Bonjour ! Nous avons les mains occupées au comptoir. Envoyez-nous votre demande par SMS ici (horaires, stocks, réservation), nous vous répondons tout de suite !',
      validatedLabel: 'Réponse validée depuis Komero',
      pendingNote: 'Réponse IA prête dans votre boîte de réception Komero →',
      pcUrl: 'app.komero.ch/repondeur-sms',
      pcSlot: 'Interface PC Komero — Boîte de réception SMS IA et appels manqués',
      pcCaption: 'Boîte de réception SMS IA Komero : réponses préparées en 1 clic',
      dedicatedNumberLine: 'Numéro pro dédié · +41 21 ••• •• 80',
      inboxTitle: 'Boîte de réception SMS & appels manqués',
      recoveredCount: (n) => `${n} clients récupérés aujourd’hui`,
      statusSent: 'SMS envoyé',
      statusReady: 'Réponse IA prête',
      aiSuggestionPrefix: 'Suggestion IA : ',
      validateAndSend: 'Valider & envoyer',
      simulatedThread: {
        time: 'À l’instant',
        customer: 'Nicolas Favre',
        phoneMasked: '079 58• •• 91',
        trigger: 'Appel manqué → SMS auto (12 s)',
        customerMessage:
          'Bonjour, vous reste-t-il une tarte aux fraises pour ce soir 18h ? Je peux passer la récupérer.',
        aiDraftReply:
          'Bonjour Nicolas, il nous en reste encore 2 en vitrine ! Je vous en mets une de côté jusqu’à 18h30 à votre nom. À très vite au comptoir.',
      },
      initialThreads: [
        {
          id: 'sms-1',
          time: '11:42',
          customer: 'Sophie Martin',
          phoneMasked: '079 42• •• 18',
          trigger: 'Appel manqué → SMS auto',
          customerMessage:
            'Bonjour ! Pouvez-vous me mettre de côté 2 baguettes et 1 tarte aux fraises 6 parts pour 18h15 ?',
          aiDraftReply:
            'Bonjour Sophie, c’est bien noté pour 18h15 : 2 baguettes + 1 tarte aux fraises réservées à votre nom. À tout à l’heure !',
          sent: false,
        },
        {
          id: 'sms-2',
          time: '10:15',
          customer: 'Thomas Bernard',
          phoneMasked: '078 81• •• 04',
          trigger: 'Appel manqué → SMS auto',
          customerMessage: 'Êtes-vous ouverts dimanche après-midi jusqu’à 18h ?',
          aiDraftReply:
            'Bonjour Thomas, nous sommes ouverts ce dimanche de 7h00 à 13h30, puis dès mardi 6h30. Au plaisir de vous accueillir !',
          sent: true,
        },
        {
          id: 'sms-3',
          time: '09:08',
          customer: 'Claire Aubert',
          phoneMasked: '076 19• •• 72',
          trigger: 'SMS entrant boutique',
          customerMessage: 'Avez-vous encore des croissants au beurre pour un plateau de 12 demain matin ?',
          aiDraftReply:
            'Bonjour Claire, oui tout à fait ! Nous préparons votre plateau de 12 croissants chauds pour demain matin. À quelle heure souhaitez-vous passer ?',
          sent: true,
        },
      ],
    },
    smsFlash: {
      intro:
        'Saisissez votre offre ou testez un exemple (calibré sur 145 caractères max, STOP inclus) :',
      pcUrl: 'app.komero.ch/promo-flash-sms',
      pcSlot: 'Éditeur Komero — Campagne Promo Flash SMS (145 caractères max)',
      pcCaption: 'Éditeur PC / Mobile Komero : compteur 145 car. & mention STOP intégrée',
      moduleSubtitle: 'Module Promo Flash SMS · Base client constituée au comptoir',
      heading: 'Nouvelle campagne express',
      recipientsLabel: (n) => `${n} clients inscrits sélectionnés`,
      inputLabel: 'Message rédigé par l’IA (modifiable librement)',
      stopNotice: 'Mention STOP ajoutée automatiquement',
      charsUnit: 'car.',
      oneSmsLabel: '1 SMS optimisé',
      segmentsLabel: (n) => `${n} segments`,
      opensLabel: 'Lectures estimées (95 % en 3 min)',
      opensUnit: 'lecteurs',
      visitsLabel: 'Passages estimés en boutique',
      visitsUnit: 'clients',
      sentBtn: (n) => `Promo flash envoyée (${n} SMS)`,
      sendBtn: 'Envoyer la promo flash en 1 clic',
      mobileSlot: 'Smartphone — Aperçu réaliste de la bulle SMS reçue par le client',
      mobileCaption: 'Aperçu réel de la bulle SMS reçue sur le mobile client',
      mobileSubline: 'SMS Promo Flash · Aujourd’hui 17:32',
      mobileTimestamp: 'Aujourd’hui 17:32',
      receivedNote: 'Reçu instantanément · Lu à 17:33',
      previewNote: 'Aperçu en direct (145 car. max)',
      impactTitle: 'Impact immédiat en caisse',
      impactBody:
        '95 % de lecture en 3 minutes — parfait pour écouler vos invendus du soir ou remplir un après-midi calme.',
      presets: [
        {
          id: 'paniers',
          label: 'Anti-gaspillage 17h30',
          shop: 'Boulangerie du Lac',
          text: 'Il reste 8 paniers gourmands à -50 % jusqu’à 19h au comptoir ! Passez vite.',
          recipients: 240,
        },
        {
          id: 'creneaux',
          label: 'Créneaux creux salon',
          shop: 'Atelier Coiffure Jeanne',
          text: '2 créneaux coupe + soin libres demain 14h-16h (-15 %). Répondez OUI pour réserver.',
          recipients: 165,
        },
        {
          id: 'dormants',
          label: 'Arrivage caviste',
          shop: 'Cave du Bourg',
          text: 'Nouveaux vins du Lavaux arrivés ce matin ! Dégustation offerte jusqu’à samedi 18h.',
          recipients: 310,
        },
      ],
    },
    marketWatch: {
      intro: 'Choisissez votre métier pour voir la synthèse hebdomadaire générée par Komero :',
      tablistAria: 'Choisir un secteur pour la veille locale',
      pcUrl: 'app.komero.ch/veille-tendances',
      pcSlot: 'Interface PC Komero — Synthèse Veille Concurrence & Tendances Locales',
      pcCaption: 'Interface PC Komero : synthèse concurrentielle et tendances du quartier',
      reportTitle: 'Rapport hebdomadaire · Veille & Tendances Locales',
      updatedLabel: 'Mis à jour lundi 7h00',
      competitorTitle: 'Activité des commerces voisins',
      trendTitle: 'Tendance saisonnière locale',
      searchesTitle: 'Recherches locales en progression cette semaine',
      searchesNote:
        'Ces mots-clés sont automatiquement repris dans vos idées de posts et réponses aux avis Google.',
      mobileSlot: 'Smartphone — Idée de publication actionnable issue de la veille locale',
      mobileCaption: 'Sur mobile : idée de post prête à tourner en 1 clic',
      ideaHeader: 'Idée de la semaine',
      queuedBtn: 'Envoyée dans Posts Réseaux',
      queueBtn: 'Transformer en post Instagram & Facebook',
      presets: [
        {
          id: 'boulangerie',
          label: 'Boulangerie-Pâtisserie',
          cityContext: 'Lausanne Centre · Rayon 800 m (6 concurrents suivis)',
          competitorInsight:
            'Vos 2 voisins directs n’ont pas publié depuis 11 jours : créneau idéal pour capter les recherches gourmandes du week-end.',
          seasonalTrend:
            'Forte hausse (+38 %) des recherches « tresse au beurre artisanale » et « boulangerie ouverte dimanche » dans votre quartier.',
          topLocalSearches: ['tresse artisanale Lausanne', 'croissants pur beurre', 'boulangerie ouverte dimanche'],
          postIdeaTitle: 'Focus quartier : Fournée artisanale & vitrine du week-end',
          postIdeaCaption:
            'Mettez en avant votre savoir-faire : « Tresses dorées sorties du four ce matin — disponibles jusqu’à 19h au magasin ! »',
          bestSlot: 'Vendredi · 11h15 (pic pause midi)',
          imageAlt: 'Rue commerçante animée et boutiques de quartier illustrant l’analyse locale Komero',
        },
        {
          id: 'coiffure',
          label: 'Coiffure / Beauté',
          cityContext: 'Genève Eaux-Vives · Rayon 1 km (9 salons suivis)',
          competitorInsight:
            'Les salons du quartier mettent peu en avant les créneaux de fin de journée : valorisez vos disponibilités après 17h30.',
          seasonalTrend:
            'Demande en hausse sur « soin gloss lumineux » et « coupe rapide entre midi et deux » cette semaine.',
          topLocalSearches: ['coiffeur visagiste Genève', 'soin cheveux hiver', 'rdv coiffeur aujourd’hui'],
          postIdeaTitle: 'Avant / Après soin brillance + 2 créneaux ouverts',
          postIdeaCaption:
            'Prenez une photo naturelle au miroir après brushing et proposez vos 2 derniers créneaux libres de la semaine.',
          bestSlot: 'Jeudi · 17h30 (sortie de bureau)',
          imageAlt: 'Quartier commerçant illustrant la veille concurrentielle locale pour salons de coiffure',
        },
        {
          id: 'caviste',
          label: 'Caviste / Épicerie fine',
          cityContext: 'Fribourg · Rayon 1 km (5 caves suivies)',
          competitorInsight:
            'Peu de recommandations d’accords mets-vins publiées cette semaine : positionnez-vous comme le conseil du souper du samedi.',
          seasonalTrend:
            'Pic de recherches locales autour des coffrets cadeaux producteurs suisses et dégustations du vendredi soir.',
          topLocalSearches: ['caviste indépendant', 'accord vin fondue', 'idée cadeau vin suisse'],
          postIdeaTitle: 'La pépite du week-end à moins de 18 CHF',
          postIdeaCaption:
            'Photographiez 2 bouteilles sur votre comptoir bois avec votre conseil d’accord simple en 2 lignes pour le vendredi soir.',
          bestSlot: 'Vendredi · 16h45 (avant les courses du soir)',
          imageAlt: 'Rue commerçante illustrant la veille locale pour cavistes et épiceries fines',
        },
      ],
    },
  },

  de: {
    hero: {
      desktopAria:
        'Komero PC-Dashboard für die Bäckerei Sonnenschein in Zürich: Google-Bewertungen mit KI, Social Media, verpasste Anrufe per SMS und Kundenliste',
      navHome: 'Übersicht',
      navReviews: 'Bewertungen',
      navSocial: 'Social Media',
      navResponder: 'SMS-Antwort',
      navSms: 'SMS-Aktionen',
      starterActive: 'Starter Pack aktiv',
      contactsCount: '+148 Kundenkontakte',
      shopName: 'Bäckerei Sonnenschein · Zürich',
      morningSummary: 'Morgenübersicht · 3 Aktionen bereit für 1 Klick',
      hoursSaved: '6h30 gespart',
      kpiGoogleLabel: 'Google-Note',
      kpiGoogleSub: '+14 Bewert. / Mt.',
      kpiCallsLabel: 'Anrufe gerettet',
      kpiCallsSub: 'SMS in 12 Sek.',
      kpiBaseLabel: 'Kundenliste',
      kpiBaseSub: 'SMS-Kontakte',
      prioritiesHeading: 'Heute bereit zur Freigabe',
      reviewTitle: '5★-Bewertung — Lukas M. (Butterzopf hausgemacht)',
      reviewSub: 'Lokale Antwort bereit · revDSG-konform',
      publishBtn: 'Freigeben',
      postTitle: 'Instagram & Facebook — Frische Morgenbackstube',
      postSub: 'Text + Hashtags #Zürich bereit · 11:30 Uhr',
      readyBadge: 'Bereit',
      mobileBadge: 'Mobil',
      mobileSub: 'Zürich · Tagesaufgaben',
      mobileUrgentBadge: '1 verpasster Anruf → SMS gesendet',
      mobileAlertTitle: 'Elena V. (11:42)',
      mobileAlertSub: '«Können Sie mir einen Butterzopf auf 18 Uhr zurücklegen?»',
      mobileActionTitle: 'SMS-Antwort bereit',
      mobileActionSub: '«Grüezi Elena, Ihr Zopf ist auf 18 Uhr reserviert!»',
      mobileActionBtn: 'Mit 1 Klick senden',
      mobileQuick1: '2 Antworten bereit',
      mobileQuick2: '1 Post bereit',
      tabComposite: 'PC + Mobil',
      tabDesktop: 'PC-Ansicht',
      tabMobile: 'Handy-Ansicht',
      pcUrl: 'app.komero.ch/dashboard',
      pcSlot: 'Komero PC-Oberfläche — Geschäfts-Dashboard',
      pcCaption: 'Steuern Sie alles bequem am PC im Laden oder unterwegs am Smartphone',
      mobileSlot: 'Komero Mobile App — Tagesprioritäten',
      mobileCaption: 'Für iOS & Android inklusive, ohne komplizierte Installation',
      previewBadge: 'Vorschau',
    },
    googleReviews: {
      intro: 'Testen Sie die KI-Antwort je nach Art der erhaltenen Bewertung:',
      tablistAria: 'Google-Bewertungsbeispiele',
      pcUrl: 'app.komero.ch/bewertungen',
      pcSlot: 'Komero PC-Oberfläche — KI-Antwort auf Google-Bewertungen',
      pcCaption: 'Komero PC-Ansicht: Freigabe mit 1 Klick, revDSG- & DSGVO-konform',
      shopSubline: 'Bäckerei Sonnenschein · Zürich · revDSG-Anonymisierung aktiv',
      heading: 'KI-Antwort bereit zur Freigabe',
      currentRating: 'Aktuelle Note: 4,8 / 5 (214 Bewertungen)',
      ratingAria: (r) => `Bewertung ${r} von 5`,
      aiProposalBadge: 'Komero KI-Vorschlag · Herzlicher Ton',
      keywordsLabel: 'Erkannte Begriffe:',
      qrActiveNote: 'Starter Pack QR-Aufsteller aktiv (+18 Bewertungen diesen Monat)',
      publishedBtn: 'Auf Google Maps veröffentlicht',
      publishBtn: 'Mit 1 Klick freigeben',
      mobileSlot: 'Smartphone — Live-Ansicht auf Google Maps',
      mobileCaption: 'Live-Darstellung auf Google Maps (Kundensicht)',
      mapsHeader: 'Google Maps · Geschäftseintrag',
      mapsShopName: 'Bäckerei Sonnenschein',
      mapsMeta: '(214) · Bäckerei · Zürich',
      tabOverview: 'Übersicht',
      tabReviews: 'Rezensionen',
      tabPhotos: 'Fotos',
      ownerReplyTitle: 'Antwort vom Inhaber',
      justNow: 'Gerade eben',
      pendingTitle: 'Antwort wartet auf Ihren Klick am PC',
      pendingSub: 'Klicken Sie auf «Mit 1 Klick freigeben» für die Live-Vorschau.',
      scenarios: [
        {
          id: 'camille',
          tabLabel: 'Camille R. (5★)',
          author: 'Camille R.',
          rating: 5,
          dateLabel: 'Vor 2 Stunden',
          comment:
            'Bester Butterzopf im Quartier! Immer ofenwarm am Morgen und das Team ist super herzlich.',
          detectedKeywords: ['Butterzopf', 'Quartier', 'ofenwarm'],
          aiReply:
            'Herzlichen Dank, Camille, für Ihre tolle Rückmeldung! Das ganze Team der Bäckerei Sonnenschein freut sich sehr, dass Ihnen unser hausgemachter Butterzopf in Zürich so gut schmeckt. Bis bald an der Theke!',
          seoBenefit: 'Lokale Suchbegriffe integriert: Handwerksbäckerei, Butterzopf, Zürich',
        },
        {
          id: 'lukas',
          tabLabel: 'Lukas M. (5★)',
          author: 'Lukas M.',
          rating: 5,
          dateLabel: 'Gestern',
          comment:
            'Knuspriges Sauerteigbrot und selbst über Mittag sehr schnelle Bedienung. Absolute Empfehlung!',
          detectedKeywords: ['Sauerteigbrot', 'schnelle Bedienung', 'Mittag'],
          aiReply:
            'Vielen Dank, Lukas, für Ihre 5 Sterne! Wir backen unser Natur-Sauerteigbrot jeden Morgen frisch und freuen uns, Sie bald wieder im Quartier begrüssen zu dürfen.',
          seoBenefit: 'Lokale Suchbegriffe integriert: Sauerteigbrot, Quartierbäckerei',
        },
        {
          id: 'elena',
          tabLabel: 'Elena V. (5★)',
          author: 'Elena V.',
          rating: 5,
          dateLabel: 'Vor 3 Tagen',
          comment:
            'Wunderbare Früchtetörtchen mit saisonalen Zutaten und immer ein freundliches Wort an der Theke.',
          detectedKeywords: ['Früchtetörtchen', 'saisonal', 'Theke'],
          aiReply:
            'Herzlichen Dank, Elena, für das schöne Kompliment! Unsere Konditorei verwendet täglich frische Saisonfrüchte. Schön, dass Sie so gerne bei uns vorbeischauen!',
          seoBenefit: 'Kundenbindung & revDSG- / DSGVO-Anonymisierung vor Freigabe aktiv',
        },
      ],
    },
    socialMedia: {
      intro: 'Zwei konkrete Beispiele für Beiträge, die in 15 Sekunden erstellt wurden:',
      tablistAria: 'Social-Media-Beispiel wählen',
      footerTag: 'PC & Mobil · Komero',
      presets: [
        {
          id: 'brioche',
          label: 'Bäckerei · Butterzopf',
          imageAlt:
            'Komero Social-Media-Vorschau auf Smartphone und PC-Planer für eine Bäckerei mit frischem Butterzopf',
          caption:
            'Beispiel Bäckerei: Foto an der Theke → fertiger Instagram- & Facebook-Post in 15 Sek. plus PC-Kalender',
        },
        {
          id: 'vin',
          label: 'Weinhandlung · Rotwein',
          imageAlt:
            'Komero Social-Media-Vorschau auf Smartphone und PC-Planer für eine Weinhandlung mit Rotweinflasche',
          caption:
            'Beispiel Weinhandlung: Foto im Laden → fertiger Instagram- & Facebook-Post in 15 Sek. plus PC-Kalender',
        },
      ],
    },
    smsResponder: {
      intro:
        'Simulieren Sie einen verpassten Anruf während der Stosszeit und sehen Sie die sofortige SMS sowie den KI-Posteingang:',
      btnSimulated: 'Verpasster Anruf per SMS gerettet (KI-Antwort bereit)',
      btnSimulate: 'Verpassten Anruf jetzt simulieren',
      mobileSlot: 'Kunden-Smartphone — Freundliche SMS sofort nach verpasstem Anruf',
      mobileCaption: 'Begrüssungs-SMS innert 12 Sek. auf dem Handy des Kunden',
      proNumberHeader: 'Geschäftsnummer · Bäckerei Sonnenschein',
      missedCallSub: 'Verpasster Anruf → Automatische SMS gesendet',
      todayPrefix: 'Heute ·',
      autoSmsTitle: 'Automatische SMS (verpasster Anruf)',
      autoSmsBody:
        'Grüezi! Wir bedienen gerade im Geschäft. Schreiben Sie uns Ihr Anliegen kurz hier per SMS (Öffnungszeiten, Reservation, Vorrat) — wir antworten sofort!',
      validatedLabel: 'Antwort über Komero freigegeben',
      pendingNote: 'KI-Antwort bereit in Ihrem Komero-Posteingang →',
      pcUrl: 'app.komero.ch/sms-antwort',
      pcSlot: 'Komero PC-Oberfläche — KI-SMS-Posteingang & verpasste Anrufe',
      pcCaption: 'Komero KI-SMS-Posteingang: fertige Antworten mit 1 Klick senden',
      dedicatedNumberLine: 'Eigene Geschäftsnummer · +41 44 ••• •• 80',
      inboxTitle: 'SMS-Posteingang & verpasste Anrufe',
      recoveredCount: (n) => `${n} Kunden heute gerettet`,
      statusSent: 'SMS gesendet',
      statusReady: 'KI-Antwort bereit',
      aiSuggestionPrefix: 'KI-Vorschlag: ',
      validateAndSend: 'Prüfen & senden',
      simulatedThread: {
        time: 'Gerade eben',
        customer: 'Nicolas Weber',
        phoneMasked: '079 58• •• 91',
        trigger: 'Verpasster Anruf → Auto-SMS (12 s)',
        customerMessage:
          'Grüezi, haben Sie für heute Abend 18 Uhr noch eine Erdbeertorte? Ich könnte sie abholen.',
        aiDraftReply:
          'Grüezi Nicolas, wir haben noch 2 Stück in der Vitrine! Ich lege Ihnen gerne eine auf Ihren Namen bis 18:30 Uhr zurück. Bis bald!',
      },
      initialThreads: [
        {
          id: 'sms-1',
          time: '11:42',
          customer: 'Laura Meier',
          phoneMasked: '079 42• •• 18',
          trigger: 'Verpasster Anruf → Auto-SMS',
          customerMessage:
            'Grüezi! Können Sie mir bitte 2 Ruchbrote und 1 Erdbeertorte auf 18:15 Uhr zurücklegen?',
          aiDraftReply:
            'Grüezi Laura, sehr gerne notiert auf 18:15 Uhr: 2 Ruchbrote + 1 Erdbeertorte auf Ihren Namen. Bis später im Laden!',
          sent: false,
        },
        {
          id: 'sms-2',
          time: '10:15',
          customer: 'Thomas Schmid',
          phoneMasked: '078 81• •• 04',
          trigger: 'Verpasster Anruf → Auto-SMS',
          customerMessage: 'Haben Sie am Sonntagnachmittag bis 18 Uhr geöffnet?',
          aiDraftReply:
            'Grüezi Thomas, am Sonntag sind wir von 07:00 bis 13:30 Uhr für Sie da und ab Dienstag wieder ab 06:30 Uhr. Bis bald!',
          sent: true,
        },
        {
          id: 'sms-3',
          time: '09:08',
          customer: 'Claire Huber',
          phoneMasked: '076 19• •• 72',
          trigger: 'Eingehende Laden-SMS',
          customerMessage: 'Kann ich für morgen früh 12 Buttergipfeli vorbestellen?',
          aiDraftReply:
            'Grüezi Claire, sehr gerne! Wir backen Ihre 12 Buttergipfeli frisch für morgen früh. Um welche Uhrzeit möchten Sie vorbeikommen?',
          sent: true,
        },
      ],
    },
    smsFlash: {
      intro:
        'Geben Sie Ihr Angebot ein oder testen Sie ein Beispiel (optimiert auf max. 145 Zeichen inkl. STOP):',
      pcUrl: 'app.komero.ch/sms-aktionen',
      pcSlot: 'Komero Editor — SMS-Flash-Aktion (max. 145 Zeichen)',
      pcCaption: 'Komero PC / Mobil Editor: 145-Zeichen-Zähler & STOP-Hinweis inklusive',
      moduleSubtitle: 'Modul SMS-Flash-Aktionen · Eigene Kundenliste von der Theke',
      heading: 'Neue Express-Aktion',
      recipientsLabel: (n) => `${n} angemeldete Stammkunden`,
      inputLabel: 'KI-Textvorschlag (frei bearbeitbar)',
      stopNotice: 'STOP-Hinweis automatisch angefügt',
      charsUnit: 'Zeichen',
      oneSmsLabel: '1 optimierte SMS',
      segmentsLabel: (n) => `${n} Segmente`,
      opensLabel: 'Geschätzte Leser (95 % in 3 Min.)',
      opensUnit: 'Leser',
      visitsLabel: 'Geschätzte Ladenbesuche',
      visitsUnit: 'Kunden',
      sentBtn: (n) => `SMS-Aktion gesendet (${n} SMS)`,
      sendBtn: 'SMS-Aktion mit 1 Klick senden',
      mobileSlot: 'Smartphone — Vorschau der SMS auf dem Handy Ihrer Kunden',
      mobileCaption: 'Live-Vorschau der SMS auf dem Smartphone',
      mobileSubline: 'SMS-Flash-Aktion · Heute 17:32',
      mobileTimestamp: 'Heute 17:32',
      receivedNote: 'Sofort zugestellt · Gelesen um 17:33',
      previewNote: 'Live-Vorschau (max. 145 Zeichen)',
      impactTitle: 'Sofort mehr Umsatz an der Kasse',
      impactBody:
        '95 % werden innert 3 Minuten gelesen — ideal für frische Restbestände am Abend oder ruhige Nachmittage.',
      presets: [
        {
          id: 'paniers',
          label: 'Feierabend 17:30 Uhr',
          shop: 'Bäckerei Sonnenschein',
          text: 'Noch 8 Überraschungssäckli mit -50 % bis 19 Uhr an der Theke! Kommen Sie kurz vorbei.',
          recipients: 240,
        },
        {
          id: 'creneaux',
          label: 'Freie Coiffeur-Termine',
          shop: 'Coiffeur Atelier Jana',
          text: 'Morgen 14-16 Uhr noch 2 Termine Schnitt + Pflege frei (-15 %). Antworten Sie JA.',
          recipients: 165,
        },
        {
          id: 'dormants',
          label: 'Wein-Neuheiten',
          shop: 'Vinothek am Platz',
          text: 'Neue Walliser Weine frisch eingetroffen! Gratis Degustation bis Samstag 18 Uhr.',
          recipients: 310,
        },
      ],
    },
    marketWatch: {
      intro: 'Wählen Sie Ihre Branche für die wöchentliche Quartier-Analyse von Komero:',
      tablistAria: 'Branche für die lokale Marktbeobachtung wählen',
      pcUrl: 'app.komero.ch/marktbeobachtung',
      pcSlot: 'Komero PC-Oberfläche — Lokale Markt- & Trendanalyse',
      pcCaption: 'Komero PC-Ansicht: Mitbewerber-Überblick & Quartiertrends',
      reportTitle: 'Wochenbericht · Markt & Trends im Quartier',
      updatedLabel: 'Aktualisiert Montag 07:00',
      competitorTitle: 'Aktivität benachbarter Geschäfte',
      trendTitle: 'Saisonaler Trend vor Ort',
      searchesTitle: 'Steigende lokale Suchanfragen diese Woche',
      searchesNote:
        'Diese Suchbegriffe fliessen automatisch in Ihre Post-Ideen und Google-Antworten ein.',
      mobileSlot: 'Smartphone — Umsetzbare Beitragsidee aus der Marktanalyse',
      mobileCaption: 'Am Handy: fertige Post-Idee mit 1 Klick übernehmen',
      ideaHeader: 'Idee der Woche',
      queuedBtn: 'In Social Media übernommen',
      queueBtn: 'Als Instagram- & Facebook-Post nutzen',
      presets: [
        {
          id: 'boulangerie',
          label: 'Bäckerei / Konditorei',
          cityContext: 'Zürich Kreis 4 · Radius 800 m (6 Geschäfte beobachtet)',
          competitorInsight:
            'Ihre 2 direkten Nachbarn haben seit 11 Tagen nichts gepostet: idealer Moment für Ihre Wochenend-Spezialitäten.',
          seasonalTrend:
            'Starker Anstieg (+38 %) bei Suchen nach «hausgemachter Butterzopf» und «Bäckerei Sonntag offen» im Quartier.',
          topLocalSearches: ['Butterzopf Zürich', 'frische Gipfeli Quartier', 'Bäckerei Sonntag offen'],
          postIdeaTitle: 'Quartier-Fokus: Frischer Sonntagszopf & Schaufenster',
          postIdeaCaption:
            'Zeigen Sie Ihr Handwerk: «Goldbraune Butterzöpfe frisch aus dem Ofen — heute bis 19 Uhr bei uns im Laden!»',
          bestSlot: 'Freitag · 11:15 Uhr (Mittagspause)',
          imageAlt: 'Lebhafte Einkaufsstrasse als Beispiel für lokale Markttrends von Komero',
        },
        {
          id: 'coiffure',
          label: 'Coiffeur / Beauty',
          cityContext: 'Basel Kleinbasel · Radius 1 km (9 Salons beobachtet)',
          competitorInsight:
            'Kaum ein Salon im Quartier bewirbt Feierabendtermine: heben Sie freie Plätze nach 17:30 Uhr hervor.',
          seasonalTrend:
            'Steigende Nachfrage nach «Glanzpflege Haare» und «schneller Haarschnitt über Mittag» diese Woche.',
          topLocalSearches: ['Coiffeur Basel', 'Haarpflege Winter', 'Coiffeur Termin heute'],
          postIdeaTitle: 'Vorher / Nachher Glanzpflege + 2 freie Termine',
          postIdeaCaption:
            'Machen Sie ein natürliches Foto nach dem Styling und bieten Sie die letzten 2 freien Termine der Woche an.',
          bestSlot: 'Donnerstag · 17:30 Uhr (Feierabend)',
          imageAlt: 'Quartiergeschäfte als Beispiel für lokale Trendanalyse für Coiffeursalons',
        },
        {
          id: 'caviste',
          label: 'Weinhandlung / Feinkost',
          cityContext: 'Bern Altstadt · Radius 1 km (5 Geschäfte beobachtet)',
          competitorInsight:
            'Wenig Empfehlungen zu Wein & Essen diese Woche: positionieren Sie sich als Tipp fürs Wochenend-Dinner.',
          seasonalTrend:
            'Mehr lokale Suchen nach Schweizer Geschenksets und Degustationen am Freitagabend.',
          topLocalSearches: ['Weinhandlung Bern', 'Wein zu Fondue', 'Geschenkidee Schweizer Wein'],
          postIdeaTitle: 'Unser Wochenend-Geheimtipp unter 18 CHF',
          postIdeaCaption:
            'Fotografieren Sie 2 Flaschen auf der Holztheke mit einer kurzen Empfehlung für den Freitagabend.',
          bestSlot: 'Freitag · 16:45 Uhr (vor dem Wocheneinkauf)',
          imageAlt: 'Einkaufsstrasse als Beispiel für lokale Marktbeobachtung für Weinhandlungen',
        },
      ],
    },
  },

  en: {
    hero: {
      desktopAria:
        'Komero desktop dashboard for Lakeview Bakery in Geneva: AI Google reviews, social media posts, missed-call SMS inbox, and customer list',
      navHome: 'Home',
      navReviews: 'Google Reviews',
      navSocial: 'Social Media',
      navResponder: 'SMS Reply',
      navSms: 'Flash SMS',
      starterActive: 'Starter Pack active',
      contactsCount: '+148 shop contacts',
      shopName: 'Lakeview Bakery · Geneva',
      morningSummary: 'Morning summary · 3 actions ready in 1 click',
      hoursSaved: '6h30 saved',
      kpiGoogleLabel: 'Google Rating',
      kpiGoogleSub: '+14 reviews / mo',
      kpiCallsLabel: 'Missed calls saved',
      kpiCallsSub: 'SMS in 12 sec',
      kpiBaseLabel: 'Customer list',
      kpiBaseSub: 'SMS contacts',
      prioritiesHeading: 'Ready to approve today',
      reviewTitle: '5★ Review — Camille R. (Fresh butter brioche)',
      reviewSub: 'Local reply drafted · FADP compliant',
      publishBtn: 'Publish',
      postTitle: 'Instagram & Facebook Post — Morning Bake',
      postSub: 'Caption + #Geneva hashtags ready · 11:30 am',
      readyBadge: 'Ready',
      mobileBadge: 'Mobile',
      mobileSub: 'Geneva · Today’s priorities',
      mobileUrgentBadge: '1 missed call → SMS sent',
      mobileAlertTitle: 'Elena V. (11:42)',
      mobileAlertSub: '“Could you hold a butter brioche for 6 pm?”',
      mobileActionTitle: 'SMS reply ready',
      mobileActionSub: '“Hi Elena, reserved for 6 pm under your name!”',
      mobileActionBtn: 'Send in 1 click',
      mobileQuick1: '2 reviews ready',
      mobileQuick2: '1 post ready',
      tabComposite: 'Desktop + Mobile',
      tabDesktop: 'Desktop',
      tabMobile: 'Mobile',
      pcUrl: 'app.komero.ch/dashboard',
      pcSlot: 'Komero Desktop Interface — Local shop dashboard',
      pcCaption: 'Run everything from your counter computer or your smartphone',
      mobileSlot: 'Komero Mobile App — Daily priorities',
      mobileCaption: 'Included on iOS & Android with zero complex setup',
      previewBadge: 'Interface preview',
    },
    googleReviews: {
      intro: 'Try AI reply generation for different types of Google reviews:',
      tablistAria: 'Google review scenarios',
      pcUrl: 'app.komero.ch/google-reviews',
      pcSlot: 'Komero Desktop Interface — AI Google review reply',
      pcCaption: 'Komero desktop view: 1-click approval with FADP & GDPR anonymization',
      shopSubline: 'Lakeview Bakery · Geneva · FADP anonymization active',
      heading: 'AI reply ready to approve',
      currentRating: 'Current rating: 4.8 / 5 (214 reviews)',
      ratingAria: (r) => `Rating ${r} out of 5`,
      aiProposalBadge: 'Komero AI draft · Warm local tone',
      keywordsLabel: 'Picked up:',
      qrActiveNote: 'Countertop QR Starter Pack active (+18 reviews this month)',
      publishedBtn: 'Published on Google Maps',
      publishBtn: 'Approve & publish in 1 click',
      mobileSlot: 'Smartphone — Live Google Maps preview',
      mobileCaption: 'Live preview on Google Maps (customer view)',
      mapsHeader: 'Google Maps · Business Profile',
      mapsShopName: 'Lakeview Bakery',
      mapsMeta: '(214) · Bakery · Geneva',
      tabOverview: 'Overview',
      tabReviews: 'Reviews',
      tabPhotos: 'Photos',
      ownerReplyTitle: 'Response from the owner',
      justNow: 'Just now',
      pendingTitle: 'Reply waiting for your 1-click approval',
      pendingSub: 'Click “Approve & publish in 1 click” to see the live result.',
      scenarios: [
        {
          id: 'camille',
          tabLabel: 'Camille R. (5★)',
          author: 'Camille R.',
          rating: 5,
          dateLabel: '2 hours ago',
          comment:
            'Best butter brioche in Geneva! Warm loaves every morning and always greeted with a smile.',
          detectedKeywords: ['butter brioche', 'warm loaves', 'Geneva'],
          aiReply:
            'Thank you so much, Camille, for this wonderful review! Our whole team at Lakeview Bakery is thrilled you enjoy our homemade butter brioche in Geneva. See you soon at the counter!',
          seoBenefit: 'Local keywords woven in: artisan bakery, butter brioche, Geneva',
        },
        {
          id: 'lukas',
          tabLabel: 'Lukas M. (5★)',
          author: 'Lukas M.',
          rating: 5,
          dateLabel: 'Yesterday',
          comment:
            'Crisp natural sourdough and super quick counter service even during the lunch rush. Highly recommended!',
          detectedKeywords: ['sourdough', 'quick service', 'lunch'],
          aiReply:
            'Many thanks for the 5 stars, Lukas! Our bakers prepare our natural sourdough fresh every morning. We look forward to welcoming you again soon!',
          seoBenefit: 'Local keywords woven in: natural sourdough, neighborhood bakery',
        },
        {
          id: 'elena',
          tabLabel: 'Elena V. (5★)',
          author: 'Elena V.',
          rating: 5,
          dateLabel: '3 days ago',
          comment:
            'Delicious seasonal fruit tarts and the friendliest staff in the neighborhood. My go-to spot!',
          detectedKeywords: ['fruit tarts', 'seasonal', 'neighborhood'],
          aiReply:
            'Thank you so much, Elena, for your lovely note! Our pastry chefs use fresh seasonal fruit every week. Always a joy to see you in the shop!',
          seoBenefit: 'Local loyalty & FADP / GDPR anonymization active before publishing',
        },
      ],
    },
    socialMedia: {
      intro: 'Explore two real examples of posts generated in 15 seconds:',
      tablistAria: 'Choose a social media example',
      footerTag: 'Desktop & Mobile · Komero',
      presets: [
        {
          id: 'brioche',
          label: 'Bakery · Braided brioche',
          imageAlt:
            'Komero mobile post express and desktop calendar preview for a bakery with a fresh braided brioche photo',
          caption:
            'Bakery example: counter photo → Instagram & Facebook post ready in 15 sec + desktop schedule',
        },
        {
          id: 'vin',
          label: 'Wine shop · Red wine',
          imageAlt:
            'Komero mobile post express and desktop calendar preview for a wine shop with a red wine bottle photo',
          caption:
            'Wine shop example: counter photo → Instagram & Facebook post ready in 15 sec + desktop schedule',
        },
      ],
    },
    smsResponder: {
      intro:
        'Simulate a missed call during peak hours to see the instant SMS and AI inbox in action:',
      btnSimulated: 'Missed call saved by SMS (AI reply ready)',
      btnSimulate: 'Simulate a missed call now',
      mobileSlot: 'Customer smartphone — Instant warm SMS after a missed call',
      mobileCaption: 'Welcome SMS delivered in 12 sec to the caller’s phone',
      proNumberHeader: 'Shop number · Lakeview Bakery',
      missedCallSub: 'Missed call → Automatic SMS sent',
      todayPrefix: 'Today ·',
      autoSmsTitle: 'Automatic SMS (missed call)',
      autoSmsBody:
        'Hello! Our hands are full at the counter right now. Text us your request here (hours, stock, booking) and we will reply right away!',
      validatedLabel: 'Reply approved via Komero',
      pendingNote: 'AI reply ready in your Komero inbox →',
      pcUrl: 'app.komero.ch/sms-inbox',
      pcSlot: 'Komero Desktop Interface — AI SMS inbox & missed calls',
      pcCaption: 'Komero AI SMS inbox: ready-to-send replies in 1 click',
      dedicatedNumberLine: 'Dedicated shop number · +41 22 ••• •• 80',
      inboxTitle: 'SMS Inbox & Missed Calls',
      recoveredCount: (n) => `${n} callers saved today`,
      statusSent: 'SMS sent',
      statusReady: 'AI reply ready',
      aiSuggestionPrefix: 'AI suggestion: ',
      validateAndSend: 'Approve & send',
      simulatedThread: {
        time: 'Just now',
        customer: 'Nicolas Favre',
        phoneMasked: '079 58• •• 91',
        trigger: 'Missed call → Auto SMS (12 s)',
        customerMessage:
          'Hi, do you still have a strawberry tart left for 6 pm tonight? I can come pick it up.',
        aiDraftReply:
          'Hi Nicolas, we still have 2 left in the display! I will set one aside under your name until 6:30 pm. See you soon!',
      },
      initialThreads: [
        {
          id: 'sms-1',
          time: '11:42',
          customer: 'Sophie Martin',
          phoneMasked: '079 42• •• 18',
          trigger: 'Missed call → Auto SMS',
          customerMessage:
            'Hi! Could you hold 2 sourdough loaves and 1 strawberry tart for 6:15 pm?',
          aiDraftReply:
            'Hi Sophie, noted for 6:15 pm: 2 sourdough loaves + 1 strawberry tart reserved under your name. See you later!',
          sent: false,
        },
        {
          id: 'sms-2',
          time: '10:15',
          customer: 'Thomas Bernard',
          phoneMasked: '078 81• •• 04',
          trigger: 'Missed call → Auto SMS',
          customerMessage: 'Are you open Sunday afternoon until 6 pm?',
          aiDraftReply:
            'Hi Thomas, we are open this Sunday from 7:00 am to 1:30 pm, then Tuesday from 6:30 am. Looking forward to welcoming you!',
          sent: true,
        },
        {
          id: 'sms-3',
          time: '09:08',
          customer: 'Claire Aubert',
          phoneMasked: '076 19• •• 72',
          trigger: 'Incoming shop SMS',
          customerMessage: 'Can I pre-order a tray of 12 warm butter croissants for tomorrow morning?',
          aiDraftReply:
            'Hi Claire, absolutely! We will bake your 12 butter croissants fresh for tomorrow morning. What time would you like to pick them up?',
          sent: true,
        },
      ],
    },
    smsFlash: {
      intro:
        'Type your own offer or test an example (calibrated to 145 characters max, STOP included):',
      pcUrl: 'app.komero.ch/flash-sms',
      pcSlot: 'Komero Editor — Flash SMS Campaign (145 chars max)',
      pcCaption: 'Komero Desktop / Mobile Editor: 145-char counter & STOP compliance built in',
      moduleSubtitle: 'Flash SMS Module · Countertop opt-in customer list',
      heading: 'New express campaign',
      recipientsLabel: (n) => `${n} opted-in regulars selected`,
      inputLabel: 'AI-drafted message (freely editable)',
      stopNotice: 'STOP opt-out automatically appended',
      charsUnit: 'chars',
      oneSmsLabel: '1 optimized SMS',
      segmentsLabel: (n) => `${n} segments`,
      opensLabel: 'Estimated reads (95% in 3 min)',
      opensUnit: 'readers',
      visitsLabel: 'Estimated in-shop visits',
      visitsUnit: 'customers',
      sentBtn: (n) => `Flash SMS sent (${n} SMS)`,
      sendBtn: 'Send Flash SMS in 1 click',
      mobileSlot: 'Smartphone — Realistic preview of the SMS received by your customer',
      mobileCaption: 'Live preview of the SMS bubble on your customer’s phone',
      mobileSubline: 'Flash SMS · Today 5:32 pm',
      mobileTimestamp: 'Today 5:32 pm',
      receivedNote: 'Delivered instantly · Read at 5:33 pm',
      previewNote: 'Live preview (145 chars max)',
      impactTitle: 'Immediate counter sales impact',
      impactBody:
        '95% read within 3 minutes—ideal for clearing end-of-day fresh stock or filling a slow afternoon.',
      presets: [
        {
          id: 'paniers',
          label: 'End-of-day 5:30 pm',
          shop: 'Lakeview Bakery',
          text: '8 surprise pastry bags left at -50% until 7 pm at the counter! Stop by soon.',
          recipients: 240,
        },
        {
          id: 'creneaux',
          label: 'Open salon slots',
          shop: 'Jeanne Hair Studio',
          text: '2 haircut + care slots open tomorrow 2-4 pm (-15%). Reply YES to book yours.',
          recipients: 165,
        },
        {
          id: 'dormants',
          label: 'New wine arrivals',
          shop: 'Old Town Cellar',
          text: 'New Swiss Lavaux vintages just arrived! Free tasting until Saturday 6 pm.',
          recipients: 310,
        },
      ],
    },
    marketWatch: {
      intro: 'Pick your trade to preview the weekly neighborhood briefing generated by Komero:',
      tablistAria: 'Choose a sector for local market watch',
      pcUrl: 'app.komero.ch/market-watch',
      pcSlot: 'Komero Desktop Interface — Weekly Local Market & Trends Briefing',
      pcCaption: 'Komero desktop view: nearby competitor summary & local trends',
      reportTitle: 'Weekly Briefing · Local Watch & Trends',
      updatedLabel: 'Updated Monday 7:00 am',
      competitorTitle: 'Nearby shop activity',
      trendTitle: 'Local seasonal trend',
      searchesTitle: 'Rising local searches this week',
      searchesNote:
        'These keywords are automatically reused in your post ideas and Google review replies.',
      mobileSlot: 'Smartphone — Actionable post idea from local market watch',
      mobileCaption: 'On mobile: ready-to-use post idea in 1 click',
      ideaHeader: 'Idea of the week',
      queuedBtn: 'Sent to Social Media',
      queueBtn: 'Turn into Instagram & Facebook post',
      presets: [
        {
          id: 'boulangerie',
          label: 'Bakery & Pastry',
          cityContext: 'Geneva Center · 800 m radius (6 shops tracked)',
          competitorInsight:
            'Your 2 closest neighbors have not posted in 11 days—great window to capture weekend bakery searches.',
          seasonalTrend:
            'Strong rise (+38%) in searches for “artisan butter brioche” and “bakery open Sunday” in your neighborhood.',
          topLocalSearches: ['artisan brioche Geneva', 'butter croissants', 'bakery open Sunday'],
          postIdeaTitle: 'Neighborhood spotlight: Fresh weekend bake',
          postIdeaCaption:
            'Show off your morning craft: “Golden butter brioches fresh from the oven—available until 7 pm today!”',
          bestSlot: 'Friday · 11:15 am (lunch rush)',
          imageAlt: 'Bustling neighborhood shopping street illustrating Komero local trend insights',
        },
        {
          id: 'coiffure',
          label: 'Hair & Beauty',
          cityContext: 'Zurich District 1 · 1 km radius (9 salons tracked)',
          competitorInsight:
            'Few nearby salons promote late-afternoon slots—highlight your availability after 5:30 pm.',
          seasonalTrend:
            'Growing local demand for “gloss hair treatment” and “express lunch haircut” this week.',
          topLocalSearches: ['hair salon Zurich', 'winter hair care', 'haircut appointment today'],
          postIdeaTitle: 'Before / After gloss care + 2 open slots',
          postIdeaCaption:
            'Snap a natural mirror photo after styling and share your last 2 open slots of the week.',
          bestSlot: 'Thursday · 5:30 pm (after work)',
          imageAlt: 'Neighborhood high street illustrating local competitor insights for hair salons',
        },
        {
          id: 'caviste',
          label: 'Wine Shop & Deli',
          cityContext: 'Lausanne · 1 km radius (5 shops tracked)',
          competitorInsight:
            'Few pairing tips posted locally this week—position your shop as the go-to advice for Saturday dinner.',
          seasonalTrend:
            'Spike in local searches for Swiss producer gift boxes and Friday evening tastings.',
          topLocalSearches: ['independent wine shop', 'fondue wine pairing', 'Swiss wine gift'],
          postIdeaTitle: 'Weekend hidden gem under 18 CHF',
          postIdeaCaption:
            'Photograph 2 bottles on your wooden counter with a short 2-line pairing tip for Friday dinner.',
          bestSlot: 'Friday · 4:45 pm (before evening shopping)',
          imageAlt: 'Shopping street illustrating local market watch for independent wine merchants',
        },
      ],
    },
  },
};
