import { useState } from 'react';
import {
  Calendar,
  Camera,
  CheckCircle2,
  Heart,
  Monitor,
  Send,
  Share2,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { Language } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArtisanBoutiqueCounterSvg, ArtisanStorefrontSvg } from './BoutiqueVectorScenes';

type PresetId = 'comptoir' | 'vitrine';

interface CalendarEntry {
  date: string;
  title: string;
  channel: string;
  status: string;
  tone: 'emerald' | 'blue' | 'slate';
}

interface SocialPresetCopy {
  id: PresetId;
  tabLabel: string;
  photoBadge: string;
  postCaption: string;
  hashtags: string;
  aiDraftTime: string;
  calendarEntries: CalendarEntry[];
  figcaption: string;
}

interface SocialMockupLocale {
  intro: string;
  tablistAria: string;
  footerTag: string;
  mobileHeader: string;
  mobileReadyBadge: string;
  publishBtn: string;
  publishedBtn: string;
  mobileBottomNote: string;
  pcUrl: string;
  pcKicker: string;
  pcTitle: string;
  pcEventsActive: string;
  aiDraftBadge: string;
  aiPublishedBadge: string;
  pcFooterNote: string;
  presets: [SocialPresetCopy, SocialPresetCopy];
}

const SOCIAL_MOCKUP_COPY: Record<Language, SocialMockupLocale> = {
  fr: {
    intro: 'Découvrez deux exemples concrets de posts générés en 15 secondes :',
    tablistAria: 'Choisir un exemple de visuel réseaux sociaux',
    footerTag: 'PC & Mobile · Komero Suisse',
    mobileHeader: 'Post Express · Komero',
    mobileReadyBadge: 'Prêt en 15 s',
    publishBtn: 'Publier sur Instagram + Facebook',
    publishedBtn: 'Publié sur Instagram + Facebook',
    mobileBottomNote: 'Depuis le téléphone : photo → post prêt en 15 s',
    pcUrl: 'app.komero.ch/posts-reseaux/calendrier',
    pcKicker: 'Calendrier éditorial automatique · 30 posts / mois inclus',
    pcTitle: 'Planning Instagram & Facebook',
    pcEventsActive: 'Temps forts commerçants activés',
    aiDraftBadge: 'Brouillon IA',
    aiPublishedBadge: 'Publié',
    pcFooterNote: 'Interface PC Komero : vue du calendrier éditorial et des temps forts suisses',
    presets: [
      {
        id: 'comptoir',
        tabLabel: 'Boutique · Comptoir & Fleurs',
        photoBadge: 'Photo prise au comptoir',
        postCaption:
          'Nouveauté en boutique cette semaine ! Venez découvrir notre sélection fraîchement arrivée en magasin. ✨',
        hashtags: '#CommerceLocal #Artisanat #BoutiqueDeQuartier',
        aiDraftTime: 'Aujourd’hui · 11h15 · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Mar 17',
            title: 'Nouveauté en boutique & bouquets de saison',
            channel: 'IG + FB',
            status: 'Publié',
            tone: 'emerald',
          },
          {
            date: 'Jeu 19',
            title: 'Pause café & découverte de l’atelier',
            channel: 'IG + FB',
            status: 'Planifié · 09h30',
            tone: 'blue',
          },
          {
            date: 'Sam 21',
            title: 'Sélection artisanale du week-end en magasin',
            channel: 'IG + FB',
            status: 'Prêt à publier',
            tone: 'blue',
          },
          {
            date: 'Dim 01',
            title: 'Temps fort local : Fête des mères & coffrets',
            channel: 'IG + FB',
            status: 'Suggéré auto',
            tone: 'slate',
          },
        ],
        figcaption:
          'Exemple Boutique artisanale : photo prise au comptoir → post Instagram & Facebook prêt en 15 s et calendrier éditorial PC',
      },
      {
        id: 'vitrine',
        tabLabel: 'Vitrine · Devanture locale',
        photoBadge: 'Photo de la vitrine',
        postCaption:
          'Nouveauté en boutique cette semaine ! Notre vitrine s’illumine avec nos créations locales fraîchement arrivées en magasin. ✨',
        hashtags: '#CommerceLocal #Artisanat #BoutiqueDeQuartier',
        aiDraftTime: 'Aujourd’hui · 14h00 · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Mar 17',
            title: 'Nouvelle vitrine de printemps en quartier',
            channel: 'IG + FB',
            status: 'Publié',
            tone: 'emerald',
          },
          {
            date: 'Jeu 19',
            title: 'Coulisses de nos artisans partenaires suisses',
            channel: 'IG + FB',
            status: 'Planifié · 11h00',
            tone: 'blue',
          },
          {
            date: 'Sam 21',
            title: 'Ouverture continue samedi & conseils personnalisés',
            channel: 'IG + FB',
            status: 'Prêt à publier',
            tone: 'blue',
          },
          {
            date: 'Ven 01',
            title: 'Temps fort local : Journée portes ouvertes',
            channel: 'IG + FB',
            status: 'Suggéré auto',
            tone: 'slate',
          },
        ],
        figcaption:
          'Exemple Devanture de boutique : vitrine mise en valeur → post prêt en 15 s et calendrier synchronisé sur PC',
      },
    ],
  },
  de: {
    intro: 'Entdecken Sie zwei konkrete Beispiele für Posts, die in 15 Sekunden fertig sind:',
    tablistAria: 'Beispiel für Social-Media-Vorschau wählen',
    footerTag: 'PC & Mobile · Komero Schweiz',
    mobileHeader: 'Post Express · Komero',
    mobileReadyBadge: 'Fertig in 15 s',
    publishBtn: 'Auf Instagram + Facebook posten',
    publishedBtn: 'Auf Instagram + Facebook live',
    mobileBottomNote: 'Vom Smartphone: Foto → Post fertig in 15 s',
    pcUrl: 'app.komero.ch/social-media/kalender',
    pcKicker: 'Automatischer Redaktionsplan · 30 Posts / Monat inklusive',
    pcTitle: 'Planung Instagram & Facebook',
    pcEventsActive: 'Lokale Anlässe aktiviert',
    aiDraftBadge: 'KI-Entwurf',
    aiPublishedBadge: 'Live',
    pcFooterNote: 'Komero PC-Oberfläche: Redaktionskalender & lokale Highlights in der Schweiz',
    presets: [
      {
        id: 'comptoir',
        tabLabel: 'Geschäft · Theke & Blumen',
        photoBadge: 'Foto an der Theke',
        postCaption:
          'Neuheit diese Woche im Geschäft! Entdecken Sie unsere frisch eingetroffene Auswahl im Laden. ✨',
        hashtags: '#LokalesGewerbe #Handwerk #Quartierladen',
        aiDraftTime: 'Heute · 11:15 · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Di 17',
            title: 'Neuheit im Geschäft & saisonale Sträusse',
            channel: 'IG + FB',
            status: 'Live',
            tone: 'emerald',
          },
          {
            date: 'Do 19',
            title: 'Kaffeepause & Einblick ins Atelier',
            channel: 'IG + FB',
            status: 'Geplant · 09:30',
            tone: 'blue',
          },
          {
            date: 'Sa 21',
            title: 'Handverlesene Wochenend-Auswahl im Laden',
            channel: 'IG + FB',
            status: 'Bereit',
            tone: 'blue',
          },
          {
            date: 'So 01',
            title: 'Anlass: Muttertag & Geschenkideen',
            channel: 'IG + FB',
            status: 'KI-Vorschlag',
            tone: 'slate',
          },
        ],
        figcaption:
          'Beispiel Fachgeschäft: Foto an der Theke → Instagram- & Facebook-Post in 15 s bereit plus PC-Planer',
      },
      {
        id: 'vitrine',
        tabLabel: 'Schaufenster · Quartierladen',
        photoBadge: 'Foto vom Schaufenster',
        postCaption:
          'Neuheit diese Woche im Geschäft! Unser frisch dekoriertes Schaufenster erwartet Sie im Quartier. ✨',
        hashtags: '#LokalesGewerbe #Handwerk #Quartierladen',
        aiDraftTime: 'Heute · 14:00 · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Di 17',
            title: 'Frisches Frühlingsschaufenster im Quartier',
            channel: 'IG + FB',
            status: 'Live',
            tone: 'emerald',
          },
          {
            date: 'Do 19',
            title: 'Blick hinter die Kulissen unserer Partner',
            channel: 'IG + FB',
            status: 'Geplant · 11:00',
            tone: 'blue',
          },
          {
            date: 'Sa 21',
            title: 'Samstags durchgehend geöffnet & Beratung',
            channel: 'IG + FB',
            status: 'Bereit',
            tone: 'blue',
          },
          {
            date: 'Fr 01',
            title: 'Anlass: Tag der offenen Tür im Quartier',
            channel: 'IG + FB',
            status: 'KI-Vorschlag',
            tone: 'slate',
          },
        ],
        figcaption:
          'Beispiel Schaufenster: Ladenfront fotografiert → Post in 15 s erstellt und im PC-Kalender synchronisiert',
      },
    ],
  },
  en: {
    intro: 'Explore two real-life examples of posts generated in 15 seconds:',
    tablistAria: 'Choose a social media visual example',
    footerTag: 'Desktop & Mobile · Komero Switzerland',
    mobileHeader: 'Post Express · Komero',
    mobileReadyBadge: 'Ready in 15 s',
    publishBtn: 'Publish to Instagram + Facebook',
    publishedBtn: 'Published on Instagram + Facebook',
    mobileBottomNote: 'From your phone: photo → post ready in 15 s',
    pcUrl: 'app.komero.ch/social-posts/calendar',
    pcKicker: 'Automatic editorial calendar · 30 posts / month included',
    pcTitle: 'Instagram & Facebook Schedule',
    pcEventsActive: 'Local seasonal peaks enabled',
    aiDraftBadge: 'AI Draft',
    aiPublishedBadge: 'Published',
    pcFooterNote: 'Komero Desktop: editorial calendar view and Swiss local seasonal moments',
    presets: [
      {
        id: 'comptoir',
        tabLabel: 'Boutique · Counter & Flowers',
        photoBadge: 'Counter snapshot',
        postCaption:
          'New in store this week! Come discover our freshly arrived selection in shop. ✨',
        hashtags: '#LocalShop #ArtisanCraft #NeighborhoodStore',
        aiDraftTime: 'Today · 11:15 AM · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Tue 17',
            title: 'New weekly arrival & seasonal bouquet',
            channel: 'IG + FB',
            status: 'Published',
            tone: 'emerald',
          },
          {
            date: 'Thu 19',
            title: 'Coffee break & behind-the-counter craft',
            channel: 'IG + FB',
            status: 'Scheduled · 09:30',
            tone: 'blue',
          },
          {
            date: 'Sat 21',
            title: 'Weekend handpicked artisan showcase',
            channel: 'IG + FB',
            status: 'Ready to post',
            tone: 'blue',
          },
          {
            date: 'Sun 01',
            title: 'Local highlight: Mother’s Day gift boxes',
            channel: 'IG + FB',
            status: 'Auto-suggested',
            tone: 'slate',
          },
        ],
        figcaption:
          'Local Boutique example: quick counter photo → Instagram & Facebook post ready in 15 s plus Desktop calendar',
      },
      {
        id: 'vitrine',
        tabLabel: 'Storefront · Neighborhood Window',
        photoBadge: 'Storefront photo',
        postCaption:
          'New in store this week! Our freshly styled neighborhood window is ready to welcome you. ✨',
        hashtags: '#LocalShop #ArtisanCraft #NeighborhoodStore',
        aiDraftTime: 'Today · 2:00 PM · Instagram + Facebook',
        calendarEntries: [
          {
            date: 'Tue 17',
            title: 'Fresh seasonal storefront display reveal',
            channel: 'IG + FB',
            status: 'Published',
            tone: 'emerald',
          },
          {
            date: 'Thu 19',
            title: 'Meet our local Swiss craft partners',
            channel: 'IG + FB',
            status: 'Scheduled · 11:00',
            tone: 'blue',
          },
          {
            date: 'Sat 21',
            title: 'Open all Saturday with personal advice',
            channel: 'IG + FB',
            status: 'Ready to post',
            tone: 'blue',
          },
          {
            date: 'Fri 01',
            title: 'Local highlight: Neighborhood open house',
            channel: 'IG + FB',
            status: 'Auto-suggested',
            tone: 'slate',
          },
        ],
        figcaption:
          'Storefront example: shopfront snapshot → post ready in 15 s and synced to your Desktop planner',
      },
    ],
  },
};

export function SocialMediaMockup() {
  const { language } = useLanguage();
  const copy = SOCIAL_MOCKUP_COPY[language];
  const [activeId, setActiveId] = useState<PresetId>('comptoir');
  const [publishedMap, setPublishedMap] = useState<Record<PresetId, boolean>>({
    comptoir: false,
    vitrine: false,
  });

  const preset = copy.presets.find((item) => item.id === activeId) ?? copy.presets[0];
  const isPublished = publishedMap[preset.id];

  const renderScene = (className: string) =>
    preset.id === 'comptoir' ? (
      <ArtisanBoutiqueCounterSvg className={className} />
    ) : (
      <ArtisanStorefrontSvg className={className} />
    );

  return (
    <div className="space-y-6">
      {/* Header + Preset Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{copy.intro}</p>
        <div
          role="tablist"
          aria-label={copy.tablistAria}
          className="grid grid-cols-2 sm:inline-flex w-full sm:w-auto items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200"
        >
          {copy.presets.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeId === item.id}
              onClick={() => setActiveId(item.id)}
              className={`px-2.5 sm:px-3.5 py-2 sm:py-1.5 rounded-md text-xs font-semibold text-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                activeId === item.id
                  ? 'bg-white text-[#1E293B] shadow-xs'
                  : 'text-slate-600 hover:text-[#1E293B]'
              }`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Dual Mobile + PC Vector Showcase */}
      <figure
        role="tabpanel"
        aria-label={preset.tabLabel}
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-24px_rgba(30,41,59,0.22)] overflow-hidden"
      >
        <div className="bg-gradient-to-br from-[#F8FAFC] via-blue-50/35 to-emerald-50/35 p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-center">
            {/* LEFT: Smartphone "Post Express · Komero" */}
            <div className="lg:col-span-5 flex flex-col items-center gap-3">
              <div className="w-full max-w-[290px] rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
                <div className="bg-slate-900 px-4 pt-2 pb-1 flex items-center justify-between text-[10px] font-semibold text-slate-300">
                  <span className="tabular-nums">11:15</span>
                  <span className="w-14 h-2.5 rounded-full bg-black" />
                  <span className="text-emerald-400">5G</span>
                </div>

                <div className="bg-white rounded-t-[1.5rem] overflow-hidden">
                  {/* Mobile Top Bar */}
                  <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-[#1E293B] flex items-center gap-1.5 truncate">
                      <Camera className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
                      {copy.mobileHeader}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-[#047857] text-[10px] font-bold shrink-0">
                      {copy.mobileReadyBadge}
                    </span>
                  </div>

                  {/* Crisp Vector Boutique Illustration */}
                  <div className="relative aspect-[16/10] bg-slate-50 border-b border-slate-100 overflow-hidden">
                    {renderScene('w-full h-full object-cover')}
                    <span className="absolute left-2.5 bottom-2 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-semibold backdrop-blur-xs">
                      {preset.photoBadge}
                    </span>
                  </div>

                  {/* Generated Caption + Hashtags + 1-Click Publish */}
                  <div className="p-3.5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#1E293B]">
                      <span>Instagram · Facebook</span>
                      <div className="flex items-center gap-2 text-slate-400" aria-hidden="true">
                        <Heart className="w-3.5 h-3.5" />
                        <Share2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <p className="text-xs text-[#1E293B] leading-relaxed">{preset.postCaption}</p>
                    <p className="text-[11px] font-semibold text-[#2563EB] leading-snug">
                      {preset.hashtags}
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setPublishedMap((prev) => ({
                          ...prev,
                          [preset.id]: !prev[preset.id],
                        }))
                      }
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                        isPublished
                          ? 'bg-[#10B981] hover:bg-[#059669] text-white'
                          : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                      }`}
                    >
                      {isPublished ? (
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <Send className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      )}
                      <span>{isPublished ? copy.publishedBtn : copy.publishBtn}</span>
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5 text-center">
                <Smartphone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
                {copy.mobileBottomNote}
              </p>
            </div>

            {/* RIGHT: PC Browser "Planning Instagram & Facebook" */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="flex-1 max-w-xs mx-auto px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-500 truncate text-center">
                  {copy.pcUrl}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline-flex items-center gap-1 shrink-0">
                  <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                  PC
                </span>
              </div>

              <div className="p-4 sm:p-6 space-y-5">
                {/* Calendar Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{copy.pcKicker}</p>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1E293B]">
                      {copy.pcTitle}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#047857]">
                    <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {copy.pcEventsActive}
                  </span>
                </div>

                {/* Live Synced AI Draft Card */}
                <div className="rounded-xl border border-blue-200 bg-blue-50/45 p-3.5 sm:p-4 flex flex-col sm:flex-row items-start gap-3.5">
                  <div className="w-full sm:w-24 aspect-[16/10] sm:aspect-square rounded-lg border border-slate-200 bg-white overflow-hidden shrink-0">
                    {renderScene('w-full h-full object-cover')}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-[#2563EB] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 shrink-0" aria-hidden="true" />
                        {preset.aiDraftTime}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                          isPublished
                            ? 'bg-emerald-50 border-emerald-200 text-[#047857]'
                            : 'bg-white border-blue-200 text-[#2563EB]'
                        }`}
                      >
                        {isPublished ? copy.aiPublishedBadge : copy.aiDraftBadge}
                      </span>
                    </div>
                    <p className="text-xs text-[#1E293B] leading-relaxed">{preset.postCaption}</p>
                    <p className="text-[11px] font-semibold text-[#2563EB]">{preset.hashtags}</p>
                  </div>
                </div>

                {/* Editorial Schedule Rows */}
                <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden">
                  {preset.calendarEntries.map((row) => (
                    <div
                      key={`${row.date}-${row.title}`}
                      className="px-3.5 py-2.5 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[11px] font-bold text-slate-500 w-12 shrink-0 tabular-nums">
                          {row.date}
                        </span>
                        <span className="font-semibold text-[#1E293B] truncate">{row.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-auto sm:ml-0">
                        <span className="text-[10px] font-semibold text-slate-400">
                          {row.channel}
                        </span>
                        <span
                          className={`text-[11px] font-bold whitespace-nowrap ${
                            row.tone === 'emerald'
                              ? 'text-[#047857]'
                              : row.tone === 'blue'
                                ? 'text-[#2563EB]'
                                : 'text-slate-600'
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                  {copy.pcFooterNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <figcaption className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <span>{preset.figcaption}</span>
          <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0">
            {copy.footerTag}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
