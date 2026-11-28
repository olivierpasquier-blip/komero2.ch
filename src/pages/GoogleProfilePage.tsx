import { ArrowRight, Calendar, CheckCircle2, MapPin, ShieldCheck, Sparkles, Store } from 'lucide-react';
import type { Language } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../components/Router';
import { GoogleProfileShowcase } from '../components/mockups/GoogleProfileShowcase';

interface GoogleProfilePageCopy {
  kicker: string;
  h1: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  pillars: readonly {
    title: string;
    body: string;
  }[];
  whyKicker: string;
  whyTitle: string;
  whyBody: string;
  whyBullets: readonly string[];
  finalKicker: string;
  finalTitle: string;
  finalBody: string;
}

const COPY_BY_LANG: Record<Language, GoogleProfilePageCopy> = {
  fr: {
    kicker: 'Fiche Google Business Profile · Incluse dans Essentiel (19,90 CHF/mois)',
    h1: 'Gestion de votre Fiche Google : horaires, jours fériés et description optimisée IA',
    subtitle:
      'Google Maps met en avant les commerces dont la fiche vit chaque semaine. Pilotez vos horaires exceptionnels suisses, votre description locale et vos actualités en 1 clic depuis votre PC ou mobile.',
    primaryCta: 'Démarrer (7 jours gratuits)',
    secondaryCta: 'Demander une démo de 5 min',
    pillars: [
      {
        title: 'Jours fériés suisses & horaires exceptionnels en 1 clic',
        body: 'Ascension, Pentecôte, 1er Août ou congés annuels : modifiez vos ouvertures en quelques secondes pour éviter les trajets inutiles et les avis négatifs.',
      },
      {
        title: 'Description & catégories optimisées par l’IA locale',
        body: 'Komero enrichit votre fiche avec les mots-clés réellement recherchés dans votre commune et audite votre score d’optimisation (jusqu’à 98 %).',
      },
      {
        title: 'Actualités & photos publiées en direct sur Google Maps',
        body: 'Chaque nouveauté ou promotion publiée sur vos réseaux sociaux alimente aussi votre fiche Google pour envoyer un signal d’activité régulier à l’algorithme.',
      },
    ],
    whyKicker: 'Pourquoi votre fiche Google fait la différence en Suisse',
    whyTitle: 'Une fiche à jour attire jusqu’à 2x plus d’appels et d’itinéraires Google Maps',
    whyBody:
      'Avant de pousser la porte d’une boutique ou d’un artisan, 4 clients sur 5 vérifient les horaires, les avis et les photos récentes sur Google Maps. Komero maintient votre fiche impeccable en 2 minutes par semaine.',
    whyBullets: [
      'Synchronisation directe PC & Mobile PWA, sans interface Google complexe',
      'Alertes avant chaque jour férié cantonal ou fédéral en Suisse',
      'Conforme nLPD (Suisse) & RGPD · Starter Pack Contacts & Avis Google offert',
    ],
    finalKicker: 'Prêt à faire grimper votre fiche dans le Top 3 local ?',
    finalTitle: 'Testez Komero gratuitement pendant 7 jours',
    finalBody:
      'Formule Essentiel à 19,90 CHF/mois ou Premium à 49,90 CHF/mois, sans engagement et résiliable en 1 clic.',
  },
  de: {
    kicker: 'Google-Unternehmensprofil · Im Paket Basis (19,90 CHF/Mt.) enthalten',
    h1: 'Pflege Ihres Google-Profils: Sonderzeiten, Feiertage & KI-Optimierung',
    subtitle:
      'Google Maps bevorzugt Geschäfte mit aktuell gepflegtem Profil. Aktualisieren Sie Schweizer Feiertage, lokale Beschreibungen und Neuigkeiten mit 1 Klick am PC oder Smartphone.',
    primaryCta: 'Starten (7 Tage gratis)',
    secondaryCta: '5-Min.-Demo anfragen',
    pillars: [
      {
        title: 'Schweizer Feiertage & Sonderöffnungszeiten mit 1 Klick',
        body: 'Auffahrt, Pfingsten, 1. August oder Betriebsferien: Passen Sie Ihre Zeiten innert Sekunden an und vermeiden Sie enttäuschte Kunden vor verschlossener Tür.',
      },
      {
        title: 'Beschreibung & Kategorien durch lokale KI optimiert',
        body: 'Komero ergänzt Ihr Profil gezielt mit lokalen Suchbegriffen aus Ihrem Quartier und prüft laufend Ihren Optimierungs-Score (bis 98 %).',
      },
      {
        title: 'Neuigkeiten & Fotos direkt auf Google Maps aktiv',
        body: 'Jeder neue Beitrag aus Ihrem Geschäft hält auch Ihr Google-Profil lebendig — ein starkes Signal für eine bessere Platzierung in der lokalen Suche.',
      },
    ],
    whyKicker: 'Warum ein gepflegtes Google-Profil in der Schweiz entscheidend ist',
    whyTitle: 'Ein aktuelles Profil bringt deutlich mehr Anrufe und Routen-Klicks',
    whyBody:
      'Bevor Kunden ein lokales Geschäft besuchen, prüfen 4 von 5 zuerst Öffnungszeiten, Bewertungen und aktuelle Infos auf Google Maps. Komero erledigt das für Sie in 2 Minuten pro Woche.',
    whyBullets: [
      'Direkte Synchronisierung über PC & Mobile PWA ohne kompliziertes Google-Menü',
      'Erinnerungen vor kantonalen und eidgenössischen Feiertagen in der Schweiz',
      'revDSG- & DSGVO-konform · Gratis Starter Pack Kontakte & Bewertungen inklusive',
    ],
    finalKicker: 'Bereit für die Top 3 auf Google Maps in Ihrem Quartier?',
    finalTitle: 'Testen Sie Komero 7 Tage lang kostenlos',
    finalBody:
      'Paket Basis für 19,90 CHF/Monat oder Premium für 49,90 CHF/Monat, ohne Vertragsbindung und mit 1 Klick kündbar.',
  },
  en: {
    kicker: 'Google Business Profile · Included in Essential (19.90 CHF/mo)',
    h1: 'Google Profile Management: holiday hours, AI description & local updates',
    subtitle:
      'Google Maps rewards shops whose profile stays accurate and active every week. Update Swiss public holidays, local SEO descriptions, and store news in 1 click from desktop or mobile.',
    primaryCta: 'Start (7 days free)',
    secondaryCta: 'Book a 5-min demo',
    pillars: [
      {
        title: 'Swiss public holidays & special hours in 1 click',
        body: 'Ascension, Whit Monday, August 1, or seasonal closures: sync accurate opening hours in seconds so customers never find a closed door.',
      },
      {
        title: 'AI-optimized local description & profile audit',
        body: 'Komero enriches your business description with high-intent neighborhood keywords and monitors your profile completeness score up to 98%.',
      },
      {
        title: 'Fresh store news & photos synced to Google Maps',
        body: 'Every new arrival or seasonal update keeps your Google Business Profile active, sending strong freshness signals to local search rankings.',
      },
    ],
    whyKicker: 'Why your Google Business Profile wins local customers in Switzerland',
    whyTitle: 'An up-to-date profile drives more calls and Google Maps directions',
    whyBody:
      'Before visiting a neighborhood shop or artisan, 4 out of 5 customers check opening hours, reviews, and recent posts on Google Maps. Komero keeps everything current in 2 minutes a week.',
    whyBullets: [
      'Direct Desktop & Mobile PWA sync with zero complex Google dashboard menus',
      'Timely reminders before Swiss cantonal and federal public holidays',
      'Swiss FADP & GDPR compliant · Free Contacts & Reviews Starter Pack included',
    ],
    finalKicker: 'Ready to climb into your neighborhood Google Maps Top 3?',
    finalTitle: 'Try Komero free for 7 days',
    finalBody:
      'Essential at 19.90 CHF/month or Premium at 49.90 CHF/month, no commitment, cancel in 1 click.',
  },
};

const PILLAR_ICONS = [Calendar, Sparkles, Store] as const;

export function GoogleProfilePage() {
  const { language } = useLanguage();
  const c = COPY_BY_LANG[language];

  return (
    <div>
      {/* HERO + INTERACTIVE PC/MOBILE SHOWCASE */}
      <section className="bg-white py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#047857]">{c.kicker}</p>
            <h1 className="text-[clamp(1.95rem,3.3vw,3rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.1] text-balance">
              {c.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{c.subtitle}</p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap"
              >
                {c.primaryCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm sm:text-base font-semibold transition-colors whitespace-nowrap"
              >
                {c.secondaryCta}
              </Link>
            </div>
          </div>

          <GoogleProfileShowcase />
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="bg-[#F8FAFC] border-y border-slate-200/80 py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx] ?? MapPin;
              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 space-y-3"
                >
                  <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/70 text-[#2563EB] flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-extrabold text-[#1E293B] leading-snug">
                    {pillar.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY + FINAL CTA */}
      <section className="bg-white py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm font-semibold text-[#2563EB]">{c.whyKicker}</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] leading-tight text-balance">
              {c.whyTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{c.whyBody}</p>
            <ul className="space-y-2.5 pt-1">
              {c.whyBullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#1E293B] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-2xl border-2 border-[#2563EB] bg-[#F8FAFC] p-7 space-y-4">
            <p className="text-xs font-bold text-[#047857] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              {c.finalKicker}
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">{c.finalTitle}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{c.finalBody}</p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors"
              >
                {c.primaryCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm font-semibold transition-colors"
              >
                {c.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
