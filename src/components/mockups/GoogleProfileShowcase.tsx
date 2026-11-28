import { useState } from 'react';
import {
  Bell,
  Bookmark,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Globe,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Navigation,
  Phone,
  Sparkles,
  Star,
  Store,
  Zap,
} from 'lucide-react';
import type { Language } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';

type ShowcaseTab = 'hours' | 'audit';

interface HolidayRow {
  id: string;
  label: string;
  defaultOpen: boolean;
  hours: string;
  closedNote: string;
}

interface GoogleProfileCopy {
  kicker: string;
  title: string;
  subtitle: string;
  tabHours: string;
  tabAudit: string;
  navDashboard: string;
  navReviews: string;
  navSocial: string;
  navHours: string;
  navProfile: string;
  navSms: string;
  shopName: string;
  city: string;
  shopSubtitle: string;
  countryLabel: string;
  hoursHeader: string;
  hoursTitle: string;
  editBtn: string;
  saveBtn: string;
  savedBtn: string;
  pendingStatus: string;
  publishedStatus: string;
  sectionHoursTitle: string;
  sectionHoursSub: string;
  openLabel: string;
  closedLabel: string;
  publishMapsBtn: string;
  publishedMapsBtn: string;
  livePreviewLabel: string;
  holidays: HolidayRow[];
  phoneUpdatedTitle: string;
  phoneDirections: string;
  phoneCall: string;
  phoneSave: string;
  phoneWebsite: string;
  auditHeader: string;
  scoreLabelPrefix: string;
  strengthsTitle: string;
  strengths: string[];
  aiDescTitle: string;
  aiDescHeadline: string;
  aiDescSegments: { text: string; highlight?: boolean }[];
  applyDescBtn: string;
  appliedDescBtn: string;
  phoneOnlineBadge: string;
  charsSuffix: string;
}

const COPY_BY_LANG: Record<Language, GoogleProfileCopy> = {
  fr: {
    kicker: 'Aperçu en direct · Gestion complète de votre Fiche Google',
    title: 'Horaires exceptionnels, jours fériés et fiche optimisée par l’IA en 1 clic',
    subtitle:
      'Google favorise les commerces dont la fiche est régulièrement mise à jour. Testez la synchronisation en direct entre Komero PC et Google Maps Mobile.',
    tabHours: 'Horaires & Jours fériés',
    tabAudit: 'Optimisation IA & Audit',
    navDashboard: 'Tableau de bord',
    navReviews: 'Avis Google',
    navSocial: 'Réseaux Sociaux',
    navHours: 'Horaires & Fériés',
    navProfile: 'Fiche Établissement',
    navSms: 'SMS Flash',
    shopName: 'Boulangerie du Soleil',
    city: 'Lausanne',
    shopSubtitle: 'Gestion de Google Business Profile',
    countryLabel: 'Boulangerie artisanale · Lausanne, Suisse',
    hoursHeader: 'Ma Fiche Google · Horaires exceptionnels',
    hoursTitle: 'Modifier · Horaires exceptionnels',
    editBtn: 'Modifier',
    saveBtn: 'Enregistrer',
    savedBtn: 'Enregistré',
    pendingStatus: 'En attente de publication',
    publishedStatus: 'Synchronisé sur Google',
    sectionHoursTitle: 'Ouvertures & Fermetures Exceptionnelles',
    sectionHoursSub: 'Synchronisez vos jours fériés suisses et horaires spéciaux en 1 clic.',
    openLabel: 'Ouvert',
    closedLabel: 'Fermé',
    publishMapsBtn: 'Publier sur Google Maps',
    publishedMapsBtn: 'Publié sur Google Maps',
    livePreviewLabel: 'Aperçu en direct',
    holidays: [
      {
        id: 'pentecote',
        label: 'Lundi de Pentecôte (Férié)',
        defaultOpen: true,
        hours: '07:00 – 13:00',
        closedNote: 'Toute la journée',
      },
      {
        id: 'ascension',
        label: 'Jeudi de l’Ascension',
        defaultOpen: false,
        hours: '07:30 – 12:30',
        closedNote: 'Toute la journée',
      },
      {
        id: 'aout',
        label: '1er Août (Fête nationale)',
        defaultOpen: false,
        hours: '08:00 – 12:00',
        closedNote: 'Synchronisé',
      },
    ],
    phoneUpdatedTitle: 'Horaires exceptionnels mis à jour',
    phoneDirections: 'Itinéraire',
    phoneCall: 'Appeler',
    phoneSave: 'Enregistrer',
    phoneWebsite: 'Site web',
    auditHeader: 'Ma Fiche Google · Optimisation IA & Audit',
    scoreLabelPrefix: 'Fiche optimisée à',
    strengthsTitle: 'Points forts',
    strengths: [
      'Description optimisée IA',
      'Horaires & jours fériés à jour',
      'Photos récentes de la boutique',
      'Mots-clés locaux intégrés',
    ],
    aiDescTitle: 'Description optimisée par l’IA',
    aiDescHeadline: 'Boulangerie artisanale au cœur de Lausanne...',
    aiDescSegments: [
      { text: 'Boulangerie ' },
      { text: 'artisanale', highlight: true },
      { text: ' au cœur de ' },
      { text: 'Lausanne', highlight: true },
      { text: ' : chaque matin dès 6h30, notre équipe façonne votre ' },
      { text: 'pain au levain', highlight: true },
      {
        text: ', tresse au beurre suisse et viennoiseries maison. Commandes au comptoir ou par SMS.',
      },
    ],
    applyDescBtn: 'Appliquer sur ma fiche Google',
    appliedDescBtn: 'Fiche Google mise à jour',
    phoneOnlineBadge: 'En ligne & optimisé',
    charsSuffix: 'caractères',
  },
  de: {
    kicker: 'Live-Vorschau · Pflege Ihres Google-Unternehmensprofils',
    title: 'Sonderöffnungszeiten, Feiertage & KI-Optimierung mit 1 Klick',
    subtitle:
      'Google bevorzugt Geschäfte mit aktuell gepflegtem Profil. Testen Sie die Live-Synchronisierung zwischen Komero PC und Google Maps am Smartphone.',
    tabHours: 'Zeiten & Feiertage',
    tabAudit: 'KI-Optimierung & Check',
    navDashboard: 'Übersicht',
    navReviews: 'Google-Bewertungen',
    navSocial: 'Social Media',
    navHours: 'Zeiten & Feiertage',
    navProfile: 'Unternehmensprofil',
    navSms: 'Flash-SMS',
    shopName: 'Bäckerei Sonnenschein',
    city: 'Zürich',
    shopSubtitle: 'Verwaltung Google-Unternehmensprofil',
    countryLabel: 'Handwerksbäckerei · Zürich, Schweiz',
    hoursHeader: 'Mein Google-Profil · Sonderöffnungszeiten',
    hoursTitle: 'Bearbeiten · Sonderöffnungszeiten',
    editBtn: 'Bearbeiten',
    saveBtn: 'Speichern',
    savedBtn: 'Gespeichert',
    pendingStatus: 'Bereit zur Veröffentlichung',
    publishedStatus: 'Auf Google synchronisiert',
    sectionHoursTitle: 'Sonderöffnungs- & Feiertagszeiten',
    sectionHoursSub: 'Synchronisieren Sie Schweizer Feiertage und Spezialzeiten mit 1 Klick.',
    openLabel: 'Geöffnet',
    closedLabel: 'Geschlossen',
    publishMapsBtn: 'Auf Google Maps veröffentlichen',
    publishedMapsBtn: 'Auf Google Maps live',
    livePreviewLabel: 'Live-Vorschau',
    holidays: [
      {
        id: 'pentecote',
        label: 'Pfingstmontag (Feiertag)',
        defaultOpen: true,
        hours: '07:00 – 13:00',
        closedNote: 'Ganztägig',
      },
      {
        id: 'ascension',
        label: 'Auffahrt (Donnerstag)',
        defaultOpen: false,
        hours: '07:30 – 12:30',
        closedNote: 'Ganztägig',
      },
      {
        id: 'aout',
        label: '1. August (Bundesfeier)',
        defaultOpen: false,
        hours: '08:00 – 12:00',
        closedNote: 'Synchronisiert',
      },
    ],
    phoneUpdatedTitle: 'Sonderöffnungszeiten aktualisiert',
    phoneDirections: 'Route',
    phoneCall: 'Anrufen',
    phoneSave: 'Speichern',
    phoneWebsite: 'Website',
    auditHeader: 'Mein Google-Profil · KI-Optimierung & Check',
    scoreLabelPrefix: 'Profil optimiert zu',
    strengthsTitle: 'Stärken',
    strengths: [
      'KI-optimierte Beschreibung',
      'Öffnungszeiten & Feiertage aktuell',
      'Aktuelle Fotos vom Geschäft',
      'Lokale Suchbegriffe integriert',
    ],
    aiDescTitle: 'Von der KI optimierte Beschreibung',
    aiDescHeadline: 'Handwerksbäckerei im Herzen von Zürich...',
    aiDescSegments: [
      { text: 'Ihre ' },
      { text: 'Handwerksbäckerei', highlight: true },
      { text: ' im Herzen von ' },
      { text: 'Zürich', highlight: true },
      { text: ': Jeden Morgen ab 6:30 Uhr backen wir frisches ' },
      { text: 'Sauerteigbrot', highlight: true },
      {
        text: ', Butterzopf und knusprige Gipfeli. Vorbestellung direkt an der Theke oder per SMS.',
      },
    ],
    applyDescBtn: 'Auf Google-Profil anwenden',
    appliedDescBtn: 'Google-Profil aktualisiert',
    phoneOnlineBadge: 'Online & optimiert',
    charsSuffix: 'Zeichen',
  },
  en: {
    kicker: 'Live preview · Complete Google Business Profile management',
    title: 'Special holiday hours & AI profile optimization in 1 click',
    subtitle:
      'Google ranks shops higher when their profile stays fresh and accurate. Test live sync between Komero Desktop and Google Maps Mobile.',
    tabHours: 'Hours & Holidays',
    tabAudit: 'AI Audit & Description',
    navDashboard: 'Dashboard',
    navReviews: 'Google Reviews',
    navSocial: 'Social Media',
    navHours: 'Hours & Holidays',
    navProfile: 'Business Profile',
    navSms: 'Flash SMS',
    shopName: 'Boulangerie du Soleil',
    city: 'Geneva',
    shopSubtitle: 'Google Business Profile Manager',
    countryLabel: 'Artisan Bakery · Geneva, Switzerland',
    hoursHeader: 'My Google Profile · Special Hours',
    hoursTitle: 'Edit · Special Opening Hours',
    editBtn: 'Edit',
    saveBtn: 'Save',
    savedBtn: 'Saved',
    pendingStatus: 'Ready to publish',
    publishedStatus: 'Synced on Google',
    sectionHoursTitle: 'Special Holiday Openings & Closures',
    sectionHoursSub: 'Sync Swiss public holidays and seasonal hours to Google Maps in 1 click.',
    openLabel: 'Open',
    closedLabel: 'Closed',
    publishMapsBtn: 'Publish to Google Maps',
    publishedMapsBtn: 'Live on Google Maps',
    livePreviewLabel: 'Live preview',
    holidays: [
      {
        id: 'pentecote',
        label: 'Whit Monday (Holiday)',
        defaultOpen: true,
        hours: '07:00 – 13:00',
        closedNote: 'All day',
      },
      {
        id: 'ascension',
        label: 'Ascension Day',
        defaultOpen: false,
        hours: '07:30 – 12:30',
        closedNote: 'All day',
      },
      {
        id: 'aout',
        label: 'August 1 (Swiss National Day)',
        defaultOpen: false,
        hours: '08:00 – 12:00',
        closedNote: 'Synced',
      },
    ],
    phoneUpdatedTitle: 'Special hours updated',
    phoneDirections: 'Directions',
    phoneCall: 'Call',
    phoneSave: 'Save',
    phoneWebsite: 'Website',
    auditHeader: 'My Google Profile · AI Audit & Optimization',
    scoreLabelPrefix: 'Profile optimized to',
    strengthsTitle: 'Highlights',
    strengths: [
      'AI-optimized description',
      'Hours & holidays up to date',
      'Recent storefront photos',
      'Local neighborhood keywords',
    ],
    aiDescTitle: 'AI-optimized description',
    aiDescHeadline: 'Artisan bakery in the heart of Geneva...',
    aiDescSegments: [
      { text: 'Independent ' },
      { text: 'artisan bakery', highlight: true },
      { text: ' in the heart of ' },
      { text: 'Geneva', highlight: true },
      { text: ': fresh ' },
      { text: 'sourdough bread', highlight: true },
      {
        text: ', Swiss butter braid, and warm morning croissants baked daily from 6:30 AM. Counter or SMS orders.',
      },
    ],
    applyDescBtn: 'Apply to my Google profile',
    appliedDescBtn: 'Google profile updated',
    phoneOnlineBadge: 'Live & optimized',
    charsSuffix: 'characters',
  },
};

/* Crisp architectural SVG storefront illustration (zero external images) */
function BakeryStorefrontSvg({ className = 'w-full h-full' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="280" height="120" fill="#F1F5F9" />
      {/* Facade */}
      <rect x="0" y="0" width="280" height="32" fill="#1E293B" />
      <text
        x="140"
        y="21"
        textAnchor="middle"
        fill="#FDE68A"
        fontSize="11"
        fontWeight="700"
        fontFamily="sans-serif"
      >
        BOULANGERIE DU SOLEIL
      </text>
      {/* Warm sunlit display window */}
      <rect x="14" y="38" width="166" height="72" rx="4" fill="#FEF3C7" stroke="#334155" strokeWidth="3" />
      {/* Shelves & bread shapes */}
      <line x1="22" y1="68" x2="172" y2="68" stroke="#B45309" strokeWidth="2.5" opacity="0.55" />
      <line x1="22" y1="92" x2="172" y2="92" stroke="#B45309" strokeWidth="2.5" opacity="0.55" />
      <ellipse cx="48" cy="61" rx="14" ry="7" fill="#D97706" />
      <ellipse cx="86" cy="61" rx="16" ry="7" fill="#F59E0B" />
      <ellipse cx="128" cy="61" rx="15" ry="7" fill="#D97706" />
      <ellipse cx="56" cy="85" rx="18" ry="7" fill="#B45309" />
      <ellipse cx="104" cy="85" rx="16" ry="7" fill="#D97706" />
      <ellipse cx="148" cy="85" rx="14" ry="7" fill="#F59E0B" />
      {/* Door */}
      <rect x="192" y="38" width="74" height="76" rx="4" fill="#334155" />
      <rect x="200" y="46" width="58" height="44" rx="2" fill="#FFFBEB" opacity="0.9" />
      <circle cx="250" cy="98" r="2.5" fill="#FDE68A" />
      {/* Window glare */}
      <polygon points="14,38 78,38 40,110 14,110" fill="#FFFFFF" opacity="0.28" />
    </svg>
  );
}

export function GoogleProfileShowcase() {
  const { language } = useLanguage();
  const c = COPY_BY_LANG[language];

  const [activeTab, setActiveTab] = useState<ShowcaseTab>('hours');
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({
    pentecote: true,
    ascension: false,
    aout: false,
  });
  const [hoursPublished, setHoursPublished] = useState(false);
  const [descApplied, setDescApplied] = useState(false);

  const toggleHoliday = (id: string) => {
    setOpenStates((prev) => ({ ...prev, [id]: !prev[id] }));
    setHoursPublished(false);
  };

  const scorePercent = descApplied ? 98 : 94;
  const fullDescText = c.aiDescSegments.map((s) => s.text).join('');
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  return (
    <div
      id="fiche-google-apercu"
      className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-[#F8FAFC] via-blue-50/35 to-emerald-50/35 p-4 sm:p-7 lg:p-9 space-y-6 overflow-hidden"
    >
      {/* Header + Interactive Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs sm:text-sm font-semibold text-[#047857]">{c.kicker}</p>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1E293B] text-balance">
            {c.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">{c.subtitle}</p>
        </div>

        <div
          role="tablist"
          aria-label={c.kicker}
          className="grid grid-cols-2 sm:inline-flex items-center w-full sm:w-auto self-start lg:self-auto p-1 rounded-xl bg-white border border-slate-200 shadow-2xs"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'hours'}
            onClick={() => setActiveTab('hours')}
            className={`inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors sm:whitespace-nowrap text-center leading-tight cursor-pointer ${
              activeTab === 'hours'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1E293B]'
            }`}
          >
            <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{c.tabHours}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'audit'}
            onClick={() => setActiveTab('audit')}
            className={`inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors sm:whitespace-nowrap text-center leading-tight cursor-pointer ${
              activeTab === 'audit'
                ? 'bg-[#2563EB] text-white shadow-xs'
                : 'text-slate-600 hover:text-[#1E293B]'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{c.tabAudit}</span>
          </button>
        </div>
      </div>

      {/* Double PC + Smartphone Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* LEFT: PC Browser Frame */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-28px_rgba(30,41,59,0.26)] overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="flex-1 max-w-sm mx-auto px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-500 truncate text-center">
              {activeTab === 'hours'
                ? 'app.komero.ch/fiche-google/horaires'
                : 'app.komero.ch/fiche-google/optimisation-ia'}
            </div>
            <span className="text-[11px] font-semibold text-[#047857] hidden sm:inline shrink-0">
              PC
            </span>
          </div>

          <div className="grid grid-cols-12 min-h-[380px]">
            {/* Midnight Navy Sidebar */}
            <aside className="hidden sm:flex sm:col-span-3 bg-[#11223E] text-white p-4 flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-2 px-1">
                  <Store className="w-5 h-5 text-[#10B981] shrink-0" aria-hidden="true" />
                  <span className="text-base font-extrabold tracking-tight">
                    Kome<span className="text-[#10B981]">ro</span>
                  </span>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="px-2.5 py-2 rounded-lg text-slate-300 flex items-center gap-2">
                    <LayoutDashboard className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{c.navDashboard}</span>
                  </div>
                  <div className="px-2.5 py-2 rounded-lg text-slate-300 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{c.navReviews}</span>
                  </div>
                  <div className="px-2.5 py-2 rounded-lg text-slate-300 flex items-center justify-between gap-1">
                    <span className="flex items-center gap-2 min-w-0">
                      <Camera className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="truncate">{c.navSocial}</span>
                    </span>
                    <span className="w-4 h-4 rounded-full bg-[#2563EB] text-[10px] font-bold flex items-center justify-center shrink-0 tabular-nums">
                      1
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab('hours')}
                    className={`w-full px-2.5 py-2 rounded-lg font-semibold flex items-center gap-2 text-left transition-colors cursor-pointer ${
                      activeTab === 'hours'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{c.navHours}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('audit')}
                    className={`w-full px-2.5 py-2 rounded-lg font-semibold flex items-center gap-2 text-left transition-colors cursor-pointer ${
                      activeTab === 'audit'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{c.navProfile}</span>
                  </button>
                  <div className="px-2.5 py-2 rounded-lg text-slate-300 flex items-center justify-between gap-1">
                    <span className="flex items-center gap-2 min-w-0">
                      <Zap className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span className="truncate">{c.navSms}</span>
                    </span>
                    <span className="w-4 h-4 rounded-full bg-[#10B981] text-[#0F172A] text-[10px] font-bold flex items-center justify-center shrink-0 tabular-nums">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Dashboard Content Pane */}
            <div className="col-span-12 sm:col-span-9 bg-[#F8FAFC] flex flex-col">
              {/* Top App Bar */}
              <div className="bg-white border-b border-slate-200 px-4 sm:px-5 py-3 flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-bold text-[#1E293B] truncate">
                  {activeTab === 'hours' ? c.hoursHeader : c.auditHeader}
                </p>
                <div className="flex items-center gap-2.5 shrink-0">
                  <Bell className="w-4 h-4 text-slate-400" aria-hidden="true" />
                  <span className="w-6 h-6 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                    K
                  </span>
                </div>
              </div>

              {activeTab === 'hours' ? (
                <div className="p-4 sm:p-5 space-y-4 flex-1">
                  {/* Heading + Save Button */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm sm:text-base font-extrabold text-[#1E293B]">
                      {c.hoursTitle}
                    </p>
                    <button
                      type="button"
                      onClick={() => setHoursPublished(true)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        hoursPublished
                          ? 'bg-[#10B981] text-white'
                          : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                      }`}
                    >
                      {hoursPublished ? c.savedBtn : c.saveBtn}
                    </button>
                  </div>

                  {/* Business Summary Row */}
                  <div className="rounded-xl bg-white border border-slate-200 px-3.5 py-2.5 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Store className="w-4 h-4 text-[#1E293B] shrink-0" aria-hidden="true" />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-bold text-[#1E293B] truncate">
                          {c.shopName}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">{c.shopSubtitle}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${
                        hoursPublished
                          ? 'bg-emerald-50 border-emerald-200 text-[#047857]'
                          : 'bg-blue-50 border-blue-200 text-[#2563EB]'
                      }`}
                    >
                      {hoursPublished ? c.publishedStatus : c.pendingStatus}
                    </span>
                  </div>

                  {/* Special Holiday Hours Toggles */}
                  <div className="rounded-xl bg-white border border-slate-200 p-3.5 sm:p-4 space-y-3">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#1E293B]">
                        {c.sectionHoursTitle}
                      </p>
                      <p className="text-[11px] text-slate-500">{c.sectionHoursSub}</p>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {c.holidays.map((holiday) => {
                        const isOpen = openStates[holiday.id] ?? holiday.defaultOpen;
                        return (
                          <div
                            key={holiday.id}
                            className="py-2.5 first:pt-1 last:pb-0 flex flex-wrap items-center justify-between gap-2"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <button
                                type="button"
                                role="switch"
                                aria-checked={isOpen}
                                aria-label={holiday.label}
                                onClick={() => toggleHoliday(holiday.id)}
                                className={`relative inline-flex h-5 w-9 shrink-0 rounded-full transition-colors cursor-pointer ${
                                  isOpen ? 'bg-[#10B981]' : 'bg-slate-300'
                                }`}
                              >
                                <span
                                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform mt-0.5 ${
                                    isOpen ? 'translate-x-4.5' : 'translate-x-0.5'
                                  }`}
                                />
                              </button>
                              <span className="text-xs font-semibold text-[#1E293B]">
                                {holiday.label}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 text-[11px] tabular-nums">
                              <span
                                className={`px-2 py-0.5 rounded-md font-semibold border ${
                                  isOpen
                                    ? 'bg-emerald-50 border-emerald-200 text-[#047857]'
                                    : 'bg-slate-100 border-slate-200 text-slate-600'
                                }`}
                              >
                                {isOpen ? c.openLabel : c.closedLabel}
                              </span>
                              <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-slate-200 text-[#1E293B] font-medium">
                                {isOpen ? holiday.hours : holiday.closedNote}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Publish CTA */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setHoursPublished(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      {hoursPublished ? c.publishedMapsBtn : c.publishMapsBtn}
                    </button>
                    <span className="text-xs font-semibold text-[#2563EB]">
                      {c.livePreviewLabel} →
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-5 space-y-4 flex-1">
                  <p className="text-sm sm:text-base font-extrabold text-[#1E293B]">{c.shopName}</p>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                    {/* Left Score Gauge Card */}
                    <div className="md:col-span-5 rounded-xl bg-white border border-slate-200 p-4 flex flex-col justify-between space-y-3">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="relative w-24 h-24">
                          <svg viewBox="0 0 96 96" className="w-full h-full -rotate-90" aria-hidden="true">
                            <circle
                              cx="48"
                              cy="48"
                              r={radius}
                              stroke="#E2E8F0"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="48"
                              cy="48"
                              r={radius}
                              stroke="#10B981"
                              strokeWidth="8"
                              strokeLinecap="round"
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              className="transition-all duration-300"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-xl font-extrabold text-[#1E293B] tabular-nums">
                            {scorePercent}%
                          </span>
                        </div>
                        <p className="text-xs font-extrabold text-[#1E293B] tabular-nums">
                          {c.scoreLabelPrefix} {scorePercent} %
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        <p className="text-[11px] font-bold text-[#1E293B]">{c.strengthsTitle}</p>
                        <ul className="space-y-1">
                          {c.strengths.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-1.5 text-[11px] text-slate-600"
                            >
                              <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right AI Description Card */}
                    <div className="md:col-span-7 rounded-xl bg-white border border-slate-200 p-4 flex flex-col justify-between space-y-3">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#1E293B]">{c.aiDescTitle}</span>
                          <span className="text-[11px] font-semibold text-slate-500 tabular-nums">
                            {fullDescText.length}/750 {c.charsSuffix}
                          </span>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 space-y-1.5">
                          <p className="text-xs font-extrabold text-[#1E293B]">{c.aiDescHeadline}</p>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {c.aiDescSegments.map((seg, idx) =>
                              seg.highlight ? (
                                <mark
                                  key={idx}
                                  className="rounded bg-emerald-100 px-1 py-0.5 font-semibold text-[#065F46]"
                                >
                                  {seg.text}
                                </mark>
                              ) : (
                                <span key={idx}>{seg.text}</span>
                              )
                            )}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setDescApplied(true)}
                        className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          descApplied
                            ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                            : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                        {descApplied ? c.appliedDescBtn : c.applyDescBtn}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: Smartphone Google Maps Live Sync Frame */}
        <div className="lg:col-span-4 flex justify-center">
          <div className="w-full max-w-[270px] rounded-[2.2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Status bar & Dynamic Island */}
            <div className="bg-slate-900 px-4 pt-2 pb-1.5 flex items-center justify-between text-[10px] font-semibold text-white">
              <span className="tabular-nums">10:41</span>
              <span className="w-16 h-3 rounded-full bg-black" />
              <span className="text-emerald-400">5G</span>
            </div>

            <div className="bg-white rounded-t-[1.6rem] overflow-hidden">
              {activeTab === 'audit' && (
                <div className="bg-emerald-50 border-b border-emerald-200 px-3 py-1.5 text-center text-[11px] font-bold text-[#047857] flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  {c.phoneOnlineBadge} · {scorePercent}%
                </div>
              )}

              {/* Storefront + Mini Map Header */}
              <div className="grid grid-cols-12 h-24 border-b border-slate-200">
                <div className="col-span-8 overflow-hidden">
                  <BakeryStorefrontSvg className="w-full h-full object-cover" />
                </div>
                <div className="col-span-4 relative bg-[#EEF2FF] overflow-hidden border-l border-slate-200">
                  <svg viewBox="0 0 80 96" className="w-full h-full" aria-hidden="true">
                    <rect width="80" height="96" fill="#EEF2FF" />
                    <path d="M0 32 L80 20" stroke="#FFFFFF" strokeWidth="6" />
                    <path d="M40 0 L32 96" stroke="#FFFFFF" strokeWidth="5" />
                    <rect x="6" y="54" width="24" height="24" rx="4" fill="#D1FAE5" />
                  </svg>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shadow ring-2 ring-white">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="p-3.5 space-y-3">
                {/* Listing Title & Rating */}
                <div className="space-y-1">
                  <p className="text-sm font-extrabold text-[#1E293B] leading-tight">
                    {c.shopName} · {c.city}
                  </p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#1E293B] tabular-nums">4,8</span>
                    <div className="flex items-center gap-0.5 text-amber-400" aria-label="4.8/5">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 tabular-nums">(184)</span>
                  </div>
                  <p className="text-[11px] text-slate-500">{c.countryLabel}</p>
                </div>

                {/* Google Maps Action Buttons */}
                <div className="grid grid-cols-4 gap-1.5 text-center">
                  {[
                    { icon: Navigation, label: c.phoneDirections, primary: true },
                    { icon: Phone, label: c.phoneCall, primary: false },
                    { icon: Bookmark, label: c.phoneSave, primary: false },
                    { icon: Globe, label: c.phoneWebsite, primary: false },
                  ].map((act) => {
                    const ActIcon = act.icon;
                    return (
                      <div key={act.label} className="flex flex-col items-center gap-1">
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                            act.primary
                              ? 'bg-[#2563EB] border-[#2563EB] text-white'
                              : 'bg-blue-50/70 border-blue-200 text-[#2563EB]'
                          }`}
                        >
                          <ActIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        <span className="text-[9px] font-semibold text-slate-600 truncate max-w-full">
                          {act.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Dynamic Preview Area synced with activeTab */}
                {activeTab === 'hours' ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 space-y-2">
                    <p className="text-[11px] font-extrabold text-[#1E293B] flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                      {c.phoneUpdatedTitle}
                    </p>
                    <ul className="space-y-1.5">
                      {c.holidays.slice(0, 2).map((holiday) => {
                        const isOpen = openStates[holiday.id] ?? holiday.defaultOpen;
                        return (
                          <li key={holiday.id} className="flex items-start gap-1.5 text-[10px]">
                            <Clock
                              className="w-3 h-3 text-[#047857] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <div className="leading-snug">
                              <p className="font-bold text-[#1E293B]">{holiday.label}</p>
                              <p
                                className={`font-semibold tabular-nums ${
                                  isOpen ? 'text-[#047857]' : 'text-rose-600'
                                }`}
                              >
                                {isOpen ? `${c.openLabel} · ${holiday.hours}` : c.closedLabel}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 space-y-1.5">
                    <p className="text-[10px] font-bold text-[#2563EB] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 shrink-0" aria-hidden="true" />
                      {c.aiDescTitle}
                    </p>
                    <p className="text-[10.5px] text-slate-700 leading-relaxed">{fullDescText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
