import { SITE_CONFIG, type Language, type SiteConfig } from '../config/siteConfig';

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  includePortalAction?: boolean;
}

export function buildLegalContent(
  config: SiteConfig = SITE_CONFIG,
  lang: Language = 'fr'
): {
  mentionsLegales: LegalSection[];
  cgvArticles: LegalSection[];
  confidentialite: LegalSection[];
} {
  if (lang === 'de') {
    return {
      mentionsLegales: [
        {
          id: 'editeur',
          heading: '1. Betreiber der Website (Impressum)',
          paragraphs: [
            `Die Website ${config.siteUrl} wird betrieben von ${config.legalEntityName}, Inhaber der Marke ${config.brandName}.`,
          ],
          bullets: [
            `Betreiber: ${config.legalEntityName}`,
            `Registrierung: ${config.legalSiret}`,
            `Geschäftsadresse: ${config.legalAddress}`,
            `Verantwortlich für den Inhalt: ${config.legalDirector}`,
            `Telefon: ${config.contactPhoneDisplay}`,
            `Kontakt-E-Mail: ${config.contactEmail}`,
          ],
        },
        {
          id: 'hebergement',
          heading: '2. Hosting der Website',
          paragraphs: [
            `Die Website ${config.siteUrl} wird auf einer sicheren europäischen Infrastruktur gemäss Schweizer revDSG und europäischer DSGVO gehostet.`,
          ],
          bullets: [`Hostinganbieter: ${config.legalHost}`],
        },
        {
          id: 'propriete-intellectuelle',
          heading: '3. Geistiges Eigentum',
          paragraphs: [
            `Die Marke ${config.brandName} sowie alle Grafiken, Logos, Texte, Oberflächen, Icons und Softwarebestandteile auf ${config.siteUrl} sind urheberrechtlich geschützt und bleiben ausschliessliches Eigentum von ${config.legalEntityName}.`,
            'Jede vollständige oder teilweise Vervielfältigung, Änderung oder Weitergabe ohne vorherige schriftliche Zustimmung ist untersagt.',
          ],
        },
      ],
      cgvArticles: [
        {
          id: 'article-1',
          heading: 'Artikel 1 — Gegenstand und Geltungsbereich (B2B)',
          paragraphs: [
            `Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Geschäftsbeziehung zwischen ${config.legalEntityName} (${config.legalSiret}, ${config.legalAddress}, Kontakt: ${config.contactPhoneDisplay} / ${config.contactEmail}), nachfolgend «Anbieter», und gewerblichen Kunden (Läden, Handwerksbetriebe, Gastronomie, Dienstleister) auf ${config.siteUrl}, nachfolgend «Kunde».`,
            'Die Komero-Dienste richten sich ausschliesslich an Gewerbetreibende und Unternehmen (B2B).',
          ],
        },
        {
          id: 'article-2',
          heading: 'Artikel 2 — Leistungsbeschreibung (SaaS-Plattform)',
          paragraphs: [
            'Komero stellt dem Kunden eine Online-Plattform für PC/Mac und Smartphone bereit, verfügbar in zwei Paketen:',
          ],
          bullets: [
            'Paket Basis: Pflege Ihres Google-Unternehmensprofils (Sonderöffnungszeiten, Feiertage & KI-Beschreibung mit 1 Klick), Google-Bewertungen mit KI (bis 100 Antworten/Monat + SMS-Alarm), Social Media Express (bis 30 Beiträge/Monat auf Instagram & Facebook) sowie das gratis Starter Pack Kontakte & Google-Bewertungen.',
            'Paket Premium: Gesamtes Basis-Paket inklusive Starter Pack + Vollständigkeits-Audit & Google-Beiträge parallel zu Social Media + Geschäftsnummer mit automatischer SMS bei verpasstem Anruf + SMS-Flash-Aktionen + lokale Markt- und Trendbeobachtung.',
          ],
        },
        {
          id: 'article-3',
          heading: 'Artikel 3 — Preise in CHF und Zahlungsbedingungen',
          paragraphs: [
            `Die Komero-Abonnements gelten ohne Vertragsbindung zu monatlichen Preisen von ${config.priceEssentielDisplay} / Monat für das Paket Basis und ${config.pricePremiumDisplay} / Monat für das Paket Premium. Steuerlicher Hinweis: ${config.vatMention}.`,
            'Die Zahlung erfolgt monatlich per Kreditkarte über den sicheren Zahlungsdienstleister Stripe. Im Rahmen der Testphase wird bei Anmeldung eine Karte hinterlegt; der Kunde profitiert von 7 Tagen gratis Testphase ab Anmeldung. Die erste monatliche Abbuchung in CHF erfolgt automatisch nach Ablauf der 7 Tage, sofern der Kunde das Abo nicht zuvor mit 1 Klick kündigt.',
            'Bei Zahlungsverzug oder fehlgeschlagener Abbuchung kann der Zugang vorübergehend ausgesetzt werden, bis der offene Betrag beglichen ist.',
          ],
        },
        {
          id: 'article-4',
          heading: 'Artikel 4 — Laufzeit und Kündigung mit 1 Klick',
          paragraphs: [
            'Das Abonnement läuft jeweils für einen (1) Monat und verlängert sich automatisch um einen weiteren Monat, sofern es nicht gekündigt wird.',
            `Sie können Ihr Abo jederzeit mit 1 Klick über das Stripe-Kundenportal oder per E-Mail an ${config.subscriptionEmail} ohne Gebühren und ohne Kündigungsfrist beenden. Nach Ablauf der 7-tägigen Gratis-Testphase bleibt ein begonnener Monat bis zum Ende der laufenden Abrechnungsperiode aktiv.`,
          ],
          includePortalAction: true,
        },
        {
          id: 'article-5',
          heading: 'Artikel 5 — Menschliche Freigabe & Datenschutz (revDSG & DSGVO)',
          paragraphs: [
            'Die von der KI vorgeschlagenen Texte (Google-Antworten, Social-Media-Beiträge, SMS) dienen als Entwürfe. Der Kunde prüft und bestätigt Inhalte vor Veröffentlichung und bleibt für die unter seinem Namen veröffentlichten Texte verantwortlich.',
            'Bei Nutzung des Starter Packs und der SMS-Aktionen handelt der Kunde als Verantwortlicher gemäss dem revidierten Schweizer Datenschutzgesetz (revDSG) und der DSGVO für die Daten seiner eigenen Kundschaft (Einwilligung und STOP-Hinweis). Komero handelt als technischer Auftragsverarbeiter.',
          ],
        },
        {
          id: 'article-6',
          heading: 'Artikel 6 — Verfügbarkeit und Haftung',
          paragraphs: [
            'Der Anbieter bemüht sich um eine hohe Verfügbarkeit der Plattform. Für Unterbrüche durch Wartung, Telekomnetze oder Änderungen externer Plattformen (Google Business Profile, Meta / Instagram / Facebook, SMS-Anbieter) wird keine Haftung übernommen.',
            'Ausser bei Vorsatz oder grober Fahrlässigkeit ist die Haftung des Anbieters auf den Betrag des zuletzt bezahlten Monatsabonnements begrenzt.',
          ],
        },
        {
          id: 'article-7',
          heading: 'Artikel 7 — Geistiges Eigentum und Dateneigentum',
          paragraphs: [
            'Plattform, Marke, Design und Software bleiben Eigentum des Anbieters. Der Kunde erhält für die Dauer seines Abos ein persönliches, nicht übertragbares Nutzungsrecht.',
            'Sämtliche über das Geschäft und das Starter Pack gesammelten Kundenkontakte bleiben zu 100 % Eigentum des Kunden und können vor Kontoschliessung auf einfache Anfrage exportiert werden.',
          ],
        },
        {
          id: 'article-8',
          heading: 'Artikel 8 — Anwendbares Recht und Gerichtsstand',
          paragraphs: [
            'Diese AGB unterstehen dem Recht am Sitz des Anbieters unter Beachtung zwingender gesetzlicher Bestimmungen.',
            `Soweit keine gütliche Einigung erzielt wird, ist der Gerichtsstand ${config.legalJurisdiction}.`,
          ],
        },
      ],
      confidentialite: [
        {
          id: 'responsable',
          heading: '1. Verantwortliche Stelle (revDSG & DSGVO)',
          paragraphs: [
            `Verantwortlich für die Datenbearbeitung auf ${config.siteUrl} gemäss dem Schweizer Bundesgesetz über den Datenschutz (revDSG) und der europäischen DSGVO ist ${config.legalEntityName}, ${config.legalAddress} (${config.legalSiret}).`,
            `Bei Fragen zum Datenschutz erreichen Sie uns direkt per E-Mail an ${config.contactEmail} oder telefonisch unter ${config.contactPhoneDisplay}.`,
          ],
        },
        {
          id: 'donnees-collectees',
          heading: '2. Bearbeitete Daten und Zwecke',
          paragraphs: [
            'Komero erhebt ausschliesslich Daten, die für Kontaktanfragen, den Betrieb der Plattform und die Abrechnung in CHF erforderlich sind:',
          ],
          bullets: [
            'Kontaktdaten aus dem Formular /contact (Geschäftsname, Branche, PLZ/Ort, Name, Mobilnummer, geschäftliche E-Mail, Anliegen): ausschliesslich zur Beantwortung Ihrer Demo- oder Analyseanfrage.',
            'Zahlungs- und Abodaten sicher über Stripe verarbeitet (Kreditkartendaten werden niemals auf Komero-Servern gespeichert).',
            'Technische Nutzungsdaten und aggregierte Reichweitenmessung (Google Tag Manager) zur Verbesserung der Website-Stabilität.',
          ],
        },
        {
          id: 'base-legale-conservation',
          heading: '3. Rechtsgrundlagen und Aufbewahrungsdauer',
          paragraphs: [
            'Die Bearbeitung erfolgt gestützt auf Ihre Einwilligung, zur Vertragsabwicklung, auf berechtigtem Geschäftsinteresse (B2B) oder aufgrund gesetzlicher Pflichten gemäss revDSG und DSGVO.',
          ],
          bullets: [
            'Inaktive Interessenten: Aufbewahrung maximal drei (3) Jahre ab dem letzten Kontakt.',
            'Abonnenten und Buchhaltungsbelege: Vertragsdauer zuzüglich der gesetzlichen Aufbewahrungspflicht von zehn (10) Jahren.',
            'Technische Browser-Daten und Cookies: maximal dreizehn (13) Monate.',
          ],
        },
        {
          id: 'sous-traitants',
          heading: '4. Auftragsverarbeiter und sicheres Hosting in Europa',
          paragraphs: [
            'Ihre Daten werden niemals an Dritte verkauft. Wir arbeiten ausschliesslich mit geprüften Partnern gemäss revDSG und DSGVO:',
          ],
          bullets: [
            `Webhosting: ${config.legalHost}.`,
            'Sichere Zahlung in CHF & Kundenportal: Stripe (PCI-DSS-zertifiziert).',
            'Technische Automatisierung & SMS: Google, Make (CRM-Verarbeitung der Anfragen) und Twilio (geschäftlicher SMS-Versand).',
          ],
        },
        {
          id: 'droits-cnil',
          heading: '5. Ihre Rechte (revDSG Schweiz / EDÖB & DSGVO)',
          paragraphs: [
            'Gemäss dem revidierten Schweizer Datenschutzgesetz (revDSG) und der DSGVO haben Sie jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch sowie Datenherausgabe.',
            `Senden Sie dazu einfach eine E-Mail an ${config.contactEmail} (Antwort innert maximal 30 Tagen).`,
            'Zudem steht Ihnen das Beschwerderecht beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB, edoeb.admin.ch) in der Schweiz sowie bei der zuständigen europäischen Datenschutzbehörde (CNIL, cnil.fr) offen.',
          ],
        },
      ],
    };
  }

  if (lang === 'en') {
    return {
      mentionsLegales: [
        {
          id: 'editeur',
          heading: '1. Website Publisher',
          paragraphs: [
            `The website ${config.siteUrl} is published by ${config.legalEntityName}, operating under the brand ${config.brandName}.`,
          ],
          bullets: [
            `Publisher: ${config.legalEntityName}`,
            `Registration: ${config.legalSiret}`,
            `Business address: ${config.legalAddress}`,
            `Publication director: ${config.legalDirector}`,
            `Phone: ${config.contactPhoneDisplay}`,
            `Contact email: ${config.contactEmail}`,
          ],
        },
        {
          id: 'hebergement',
          heading: '2. Hosting',
          paragraphs: [
            `The website ${config.siteUrl} is hosted on a secure European infrastructure compliant with the Swiss FADP and European GDPR.`,
          ],
          bullets: [`Hosting provider: ${config.legalHost}`],
        },
        {
          id: 'propriete-intellectuelle',
          heading: '3. Intellectual Property',
          paragraphs: [
            `The ${config.brandName} brand, interfaces, logos, text, visual assets, icons, and software on ${config.siteUrl} remain the exclusive property of ${config.legalEntityName}.`,
            'Any reproduction, modification, or redistribution without prior written authorization is strictly prohibited.',
          ],
        },
      ],
      cgvArticles: [
        {
          id: 'article-1',
          heading: 'Article 1 — Scope (B2B)',
          paragraphs: [
            `These Terms of Sale govern the contractual relationship between ${config.legalEntityName} (${config.legalSiret}, ${config.legalAddress}, contact: ${config.contactPhoneDisplay} / ${config.contactEmail}), the "Provider", and any business customer subscribing on ${config.siteUrl}, the "Client".`,
            'Komero services are intended exclusively for business professionals (B2B).',
          ],
        },
        {
          id: 'article-2',
          heading: 'Article 2 — Services Description (SaaS)',
          paragraphs: [
            'Komero provides an online software platform accessible on desktop and mobile in two plans:',
          ],
          bullets: [
            'Essential Plan: Google Business Profile management (special hours, holidays & 1-click AI description), AI Google Reviews (up to 100 replies/month + SMS alerts), Express Social Media (up to 30 Instagram & Facebook posts/month), and the free Contacts & Google Reviews Starter Pack.',
            'Premium Plan: Full Essential Plan including the free Starter Pack + Completeness audit & Google Posts published alongside social media + Dedicated shop number with automatic missed-call SMS + Flash SMS Campaigns + Local Market & Trend Watch.',
          ],
        },
        {
          id: 'article-3',
          heading: 'Article 3 — CHF Pricing & Payment Terms',
          paragraphs: [
            `Komero subscriptions have no minimum term and are priced at ${config.priceEssentielValue} CHF / month for the Essential Plan and ${config.pricePremiumValue} CHF / month for the Premium Plan. Tax notice: ${config.vatMention}.`,
            'Payments are billed monthly in CHF by credit card via Stripe. A card verification is recorded at sign-up; the Client receives a 7-day free trial starting from registration (CHF 0 charged during 7 days), and the first monthly payment is charged automatically on day 8 unless canceled in 1 click beforehand.',
            'In the event of failed or overdue payment, access to the platform may be temporarily suspended until settled.',
          ],
        },
        {
          id: 'article-4',
          heading: 'Article 4 — Duration & 1-Click Cancellation',
          paragraphs: [
            'Subscriptions run on a monthly rolling basis with no long-term lock-in.',
            `You may manage, update, or cancel your subscription anytime in 1 click via the Stripe Customer Portal or by emailing ${config.subscriptionEmail}, with no fees or notice period. After the 7-day free trial, any started billing month remains accessible until the end of the current period.`,
          ],
          includePortalAction: true,
        },
        {
          id: 'article-5',
          heading: 'Article 5 — Human Approval & Data Protection (FADP & GDPR)',
          paragraphs: [
            'AI-generated drafts (Google review replies, social captions, SMS) are writing suggestions. The Client reviews and approves publications and remains solely responsible for published content.',
            'When using the Starter Pack and Flash SMS campaigns, the Client acts as Data Controller under the Swiss Federal Act on Data Protection (FADP) and GDPR for their own customers’ data (explicit opt-in and STOP compliance). Komero acts strictly as technical Data Processor.',
          ],
        },
        {
          id: 'article-6',
          heading: 'Article 6 — Availability & Liability',
          paragraphs: [
            'The Provider uses reasonable commercial efforts to keep the platform available and cannot be held liable for downtime caused by maintenance, telecom carriers, or third-party platform changes (Google Business Profile, Meta / Instagram / Facebook, SMS carriers).',
            'Except in cases of gross negligence or willful misconduct, total liability is capped at the amount paid by the Client for the most recent monthly billing cycle.',
          ],
        },
        {
          id: 'article-7',
          heading: 'Article 7 — Intellectual Property & Customer Data Ownership',
          paragraphs: [
            'The Komero platform, brand, interface, and software remain the exclusive property of the Provider. The Client receives a non-exclusive, non-transferable right of use during the active subscription.',
            'All customer SMS lists collected via the Client’s shop and Starter Pack remain 100% the property of the Client and may be exported upon request prior to account closure.',
          ],
        },
        {
          id: 'article-8',
          heading: 'Article 8 — Governing Law & Jurisdiction',
          paragraphs: [
            'These Terms of Sale are governed by the law applicable at the Provider’s registered office, subject to mandatory statutory provisions.',
            `Failing amicable settlement, any dispute shall fall under the jurisdiction of ${config.legalJurisdiction}.`,
          ],
        },
      ],
      confidentialite: [
        {
          id: 'responsable',
          heading: '1. Data Controller (Swiss FADP & GDPR)',
          paragraphs: [
            `The Data Controller for personal data collected on ${config.siteUrl} under the revised Swiss Federal Act on Data Protection (FADP) and European GDPR is ${config.legalEntityName}, ${config.legalAddress} (${config.legalSiret}).`,
            `For any privacy question or request, contact us at ${config.contactEmail} or ${config.contactPhoneDisplay}.`,
          ],
        },
        {
          id: 'donnees-collectees',
          heading: '2. Data Collected & Purposes',
          paragraphs: [
            'Komero collects only the data strictly needed to handle inquiries, operate the platform, and manage CHF billing:',
          ],
          bullets: [
            'Contact & demo form details from /contact (shop name, sector, postal code/city, name, mobile phone, business email, request): used solely to respond to your demo or visibility check request.',
            'Billing and subscription data securely processed via Stripe (payment card details never touch Komero servers).',
            'Technical usage and aggregate audience metrics (Google Tag Manager) to maintain site stability and performance.',
          ],
        },
        {
          id: 'base-legale-conservation',
          heading: '3. Legal Basis & Retention Periods',
          paragraphs: [
            'Processing is based on explicit consent, performance of the subscription contract, B2B legitimate interest, or statutory obligations under the Swiss FADP and GDPR.',
          ],
          bullets: [
            'Inactive prospects: retained for up to three (3) years from the last interaction.',
            'Active subscribers & accounting invoices: duration of the contract plus statutory ten (10)-year accounting retention.',
            'Technical navigation cookies: maximum thirteen (13) months.',
          ],
        },
        {
          id: 'sous-traitants',
          heading: '4. Data Processors & European Hosting',
          paragraphs: [
            'Your data is never sold to third parties. It is processed exclusively by vetted providers compliant with the Swiss FADP and GDPR:',
          ],
          bullets: [
            `Web hosting: ${config.legalHost}.`,
            'Secure CHF payments & customer portal: Stripe (PCI-DSS certified).',
            'Technical operations & SMS routing: Google, Make (lead CRM routing), and Twilio (business SMS delivery).',
          ],
        },
        {
          id: 'droits-cnil',
          heading: '5. Your Rights (Swiss FDPIC & GDPR)',
          paragraphs: [
            'Under the Swiss Federal Act on Data Protection (FADP) and GDPR, you have the right to access, rectify, erase, restrict, object to processing, and export your personal data.',
            `Exercise these rights at any time by emailing ${config.contactEmail} (response within 30 days maximum).`,
            'You also have the right to lodge a complaint with the Swiss Federal Data Protection and Information Commissioner (FDPIC — edoeb.admin.ch) or the relevant European supervisory authority (CNIL — cnil.fr).',
          ],
        },
      ],
    };
  }

  // Default: French (fr-CH)
  const mentionsLegales: LegalSection[] = [
    {
      id: 'editeur',
      heading: '1. Éditeur du site',
      paragraphs: [
        `Le site internet ${config.siteUrl} est édité par ${config.legalEntityName}, exploitant la marque commerciale ${config.brandName}.`,
      ],
      bullets: [
        `Éditeur : ${config.legalEntityName}`,
        `Immatriculation (SIRET) : ${config.legalSiret}`,
        `Adresse professionnelle : ${config.legalAddress}`,
        `Directeur de la publication : ${config.legalDirector}`,
        `Téléphone : ${config.contactPhoneDisplay}`,
        `Email de contact : ${config.contactEmail}`,
      ],
    },
    {
      id: 'hebergement',
      heading: '2. Hébergement du site',
      paragraphs: [
        `Le site ${config.siteUrl} est hébergé sur une infrastructure sécurisée conforme à la nLPD suisse et au RGPD européen.`,
      ],
      bullets: [`Hébergeur : ${config.legalHost}`],
    },
    {
      id: 'propriete-intellectuelle',
      heading: '3. Propriété intellectuelle',
      paragraphs: [
        `La marque ${config.brandName}, l’ensemble des interfaces graphiques, logos, textes, maquettes, icônes, codes sources, logiciels et contenus présents sur ${config.siteUrl} sont protégés par le droit de la propriété intellectuelle et demeurent la propriété exclusive de ${config.legalEntityName}.`,
        'Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite.',
      ],
    },
  ];

  const cgvArticles: LegalSection[] = [
    {
      id: 'article-1',
      heading: 'Article 1 — Objet et champ d’application (B2B)',
      paragraphs: [
        `Les présentes Conditions Générales de Vente (CGV) régissent exclusivement les relations contractuelles entre ${config.legalEntityName} (${config.legalSiret}, domiciliée au ${config.legalAddress}, contact : ${config.contactPhoneDisplay} / ${config.contactEmail}), ci-après dénommée le « Prestataire », et tout professionnel (commerçant, artisan, restaurateur ou société) souscrivant sur ${config.siteUrl}, ci-après dénommé le « Client ».`,
        'Les services Komero étant destinés exclusivement aux professionnels agissant dans le cadre de leur activité commerciale, les dispositions applicables aux consommateurs ne sont pas applicables.',
      ],
    },
    {
      id: 'article-2',
      heading: 'Article 2 — Description des services (Logiciel SaaS)',
      paragraphs: [
        'Komero met à disposition du Client une plateforme logicielle en ligne (SaaS) accessible sur ordinateur (PC/Mac) et sur smartphone, déclinée en deux formules :',
      ],
      bullets: [
        'Formule Essentiel : Gestion de votre Fiche Google (horaires exceptionnels, jours fériés et description IA en 1 clic), Avis Google IA (jusqu’à 100 réponses personnalisées par mois et alertes SMS), Réseaux Sociaux Express (jusqu’à 30 publications Instagram & Facebook par mois) et Starter Pack Contacts & Avis Google inclus gratuitement pendant toute la durée de l’abonnement.',
        'Formule Premium : intégralité de la Formule Essentiel (incluant la Gestion de votre Fiche Google et le Starter Pack offert) + Audit de complétude & actualités Google Posts publiés avec vos réseaux + Téléphonie & Répondeur SMS automatique sur appel manqué + Campagnes Promo Flash SMS + Veille Concurrence & Tendances Locales.',
      ],
    },
    {
      id: 'article-3',
      heading: 'Article 3 — Tarifs en CHF et modalités de paiement',
      paragraphs: [
        `Les abonnements Komero Suisse sont proposés sans engagement de durée aux tarifs mensuels de ${config.priceEssentielDisplay} / mois pour la Formule Essentiel et de ${config.pricePremiumDisplay} / mois pour la Formule Premium. Mention fiscale : ${config.vatMention}.`,
        'Le paiement s’effectue mensuellement en francs suisses (CHF) par carte bancaire via le prestataire sécurisé Stripe. Une empreinte bancaire est enregistrée à la souscription ; le Client bénéficie de 7 jours d’essai gratuit à compter de l’inscription (0 CHF débité pendant 7 jours) et le premier prélèvement mensuel intervient automatiquement au 8e jour, sauf résiliation en 1 clic préalable par le Client.',
        'En cas de retard ou de défaut de paiement, l’accès au service peut être suspendu jusqu’à régularisation de l’échéance impayée.',
      ],
    },
    {
      id: 'article-4',
      heading: 'Article 4 — Durée, gestion et résiliation en 1 clic sans engagement',
      paragraphs: [
        'L’abonnement est conclu pour une durée d’un (1) mois renouvelable tacitement de mois en mois, sans durée minimale.',
        `Pour gérer, modifier ou résilier votre abonnement sans engagement en 1 clic, accédez à votre portail client Stripe ou écrivez-nous directement à ${config.subscriptionEmail}. La demande est traitée sans frais ni préavis. Tout mois entamé après la période d’essai de 7 jours gratuits reste dû et l’accès demeure actif jusqu’à la fin de la période en cours.`,
      ],
      includePortalAction: true,
    },
    {
      id: 'article-5',
      heading: 'Article 5 — Contrôle humain et conformité nLPD (Suisse) & RGPD',
      paragraphs: [
        'Les textes générés par l’intelligence artificielle de Komero (réponses aux avis Google, légendes Instagram/Facebook, messages SMS) constituent des propositions d’aide à la rédaction. Le Client conserve le contrôle humain avant publication et demeure seul responsable des contenus validés sous son enseigne.',
        'Dans le cadre de l’utilisation du Starter Pack Contacts & Avis Google et des Campagnes Promo Flash SMS, le Client agit en qualité de Responsable de traitement au sens de la nouvelle Loi fédérale sur la protection des données (nLPD, Suisse) et du RGPD : il s’engage à respecter la collecte consentie et la mention « STOP ». Komero agit exclusivement en qualité de sous-traitant technique.',
      ],
    },
    {
      id: 'article-6',
      heading: 'Article 6 — Disponibilité et responsabilité',
      paragraphs: [
        'Le Prestataire est tenu à une obligation de moyens concernant la disponibilité de la plateforme Komero. Sa responsabilité ne saurait être engagée en cas d’interruption liée à une maintenance, aux réseaux télécoms ou à une évolution des plateformes tierces (Google Business Profile, Meta / Instagram / Facebook, opérateurs SMS).',
        'En toute hypothèse, et sauf faute lourde ou dol, la responsabilité financière totale du Prestataire est plafonnée au montant encaissé auprès du Client au titre du dernier mois d’abonnement.',
      ],
    },
    {
      id: 'article-7',
      heading: 'Article 7 — Propriété intellectuelle et propriété des données',
      paragraphs: [
        'La plateforme Komero, la marque, le logo, l’interface et les algorithmes demeurent la propriété exclusive du Prestataire. Le Client bénéficie d’un droit d’utilisation personnel, non exclusif et non cessible pendant la durée de son abonnement.',
        'Les fichiers clients SMS collectés par le Client via son commerce et le Starter Pack restent la propriété entière et exclusive du Client ; ils sont exportables sur simple demande avant la clôture du compte.',
      ],
    },
    {
      id: 'article-8',
      heading: 'Article 8 — Droit applicable et juridiction compétente',
      paragraphs: [
        'Les présentes Conditions Générales de Vente sont soumises au droit applicable au siège du Prestataire, sous réserve des dispositions impératives applicables.',
        `À défaut d’accord amiable entre les parties, tout litige relève de la compétence du ${config.legalJurisdiction}.`,
      ],
    },
  ];

  const confidentialite: LegalSection[] = [
    {
      id: 'responsable',
      heading: '1. Responsable du traitement (nLPD Suisse & RGPD)',
      paragraphs: [
        `Le responsable du traitement des données personnelles collectées sur ${config.siteUrl} au sens de la nouvelle Loi fédérale sur la protection des données (nLPD — Suisse) et du RGPD européen est ${config.legalEntityName}, domiciliée au ${config.legalAddress} (${config.legalSiret}).`,
        `Pour toute question relative à vos données personnelles, vous pouvez contacter directement Komero à l’adresse : ${config.contactEmail} ou par téléphone au ${config.contactPhoneDisplay}.`,
      ],
    },
    {
      id: 'donnees-collectees',
      heading: '2. Données collectées et finalités',
      paragraphs: [
        'Komero collecte uniquement les données nécessaires à la gestion des demandes commerciales, à la fourniture de la plateforme et à la facturation en CHF :',
      ],
      bullets: [
        'Données de prospection et de démo issues du formulaire /contact (nom du commerce, secteur d’activité, NPA / ville, prénom & nom, téléphone portable, email professionnel, besoin / formule et précisions) : utilisées uniquement pour répondre à votre demande et préparer votre diagnostic gratuit.',
        'Données de facturation et d’abonnement gérées de manière sécurisée via Stripe en CHF (les coordonnées bancaires ne transitent jamais sur les serveurs de Komero).',
        'Données d’utilisation technique et mesure d’audience globale (Google Tag Manager) permettant d’améliorer la qualité et la stabilité du service.',
      ],
    },
    {
      id: 'base-legale-conservation',
      heading: '3. Base légale et durée de conservation',
      paragraphs: [
        'Les traitements reposent sur le consentement explicite recueilli sur le formulaire, l’exécution du contrat d’abonnement, l’intérêt légitime commercial B2B ou le respect d’obligations légales conformément à la nLPD suisse et au RGPD.',
      ],
      bullets: [
        'Prospects inactifs : conservation pendant trois (3) ans maximum à compter du dernier échange.',
        'Clients abonnés et facturation : durée de la relation contractuelle augmentée des obligations légales comptables et fiscales de dix (10) ans.',
        'Cookies et données techniques de navigation : treize (13) mois maximum.',
      ],
    },
    {
      id: 'sous-traitants',
      heading: '4. Sous-traitants et hébergement conforme nLPD & RGPD',
      paragraphs: [
        'Vos données ne sont jamais revendues à des tiers. Elles sont traitées uniquement par des prestataires sélectionnés pour leur conformité à la nLPD et au RGPD :',
      ],
      bullets: [
        `Hébergement web : ${config.legalHost}.`,
        'Paiement sécurisé en CHF, portail client et facturation : Stripe (certifié PCI-DSS).',
        'Exécution technique et automatisation : Google, Make (gestion CRM des demandes de contact) et Twilio (acheminement SMS professionnels).',
      ],
    },
    {
      id: 'droits-cnil',
      heading: '5. Vos droits et recours (PFPDT Suisse & CNIL)',
      paragraphs: [
        'Conformément à la nouvelle Loi fédérale sur la protection des données (nLPD, Suisse) et au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, d’opposition et de portabilité sur vos données personnelles.',
        `Vous pouvez exercer ces droits à tout moment par e-mail à ${config.contactEmail} (réponse sous 30 jours maximum).`,
        'Vous disposez également du droit d’introduire une réclamation auprès du Préposé fédéral à la protection des données et à la transparence (PFPDT en Suisse, edoeb.admin.ch) ainsi qu’auprès de la CNIL (cnil.fr).',
      ],
    },
  ];

  return { mentionsLegales, cgvArticles, confidentialite };
}

const DEFAULT_LEGAL_CONTENT = buildLegalContent(SITE_CONFIG, 'fr');

export const MENTIONS_LEGALES_SECTIONS: LegalSection[] = DEFAULT_LEGAL_CONTENT.mentionsLegales;
export const CGV_ARTICLES: LegalSection[] = DEFAULT_LEGAL_CONTENT.cgvArticles;
export const CONFIDENTIALITE_SECTIONS: LegalSection[] = DEFAULT_LEGAL_CONTENT.confidentialite;
