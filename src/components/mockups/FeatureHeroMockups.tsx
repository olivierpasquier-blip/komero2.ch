import { useState } from 'react';
import {
  Bookmark,
  Camera,
  Check,
  CheckCircle2,
  Heart,
  MapPin,
  MessageCircle,
  PhoneMissed,
  RefreshCw,
  Send,
  Share2,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';
import type { Language } from '../../config/siteConfig';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArtisanBoutiqueCounterSvg } from './BoutiqueVectorScenes';

/* -------------------------------------------------------------------------- */
/* 1. /avis-google-ia — PC Browser ("Aperçu Komero - Réponse IA") + Mobile Maps*/
/* -------------------------------------------------------------------------- */
interface HeroReviewSample {
  id: 'camille' | 'lukas' | 'elena';
  author: string;
  initials: string;
  meta: string;
  quote: string;
  defaultReply: string;
  altReply: string;
}

const REVIEWS_HERO_COPY: Record<
  Language,
  {
    browserTitle: string;
    previewLabel: string;
    headerBrand: string;
    headerStat: string;
    reviewSelectorAria: string;
    aiLabel: string;
    validateBtn: string;
    publishedBtn: string;
    altToneBtn: string;
    shopName: string;
    recommended: string;
    mapsCategory: string;
    ownerReplyLabel: string;
    pendingBadge: string;
    publishedBadge: string;
    reviews: HeroReviewSample[];
  }
> = {
  fr: {
    browserTitle: 'app.komero.ch/avis-google',
    previewLabel: 'Aperçu de l’interface',
    headerBrand: 'Komero · Avis Google IA',
    headerStat: '98% répondus',
    reviewSelectorAria: 'Choisir un avis client exemple',
    aiLabel: "Réponse préparée par l'IA",
    validateBtn: 'Valider et publier',
    publishedBtn: 'Publiée sur Google',
    altToneBtn: 'Autre ton',
    shopName: 'Boulangerie du Lac',
    recommended: 'Recommandé',
    mapsCategory: 'Boulangerie artisanale · Ouvert',
    ownerReplyLabel: 'Réponse Komero publiée',
    pendingBadge: 'À valider',
    publishedBadge: 'En ligne',
    reviews: [
      {
        id: 'camille',
        author: 'Camille R.',
        initials: 'CR',
        meta: 'Il y a 12 min · Google',
        quote: '« Super accueil et une tresse au beurre maison incroyable ! »',
        defaultReply:
          'Merci beaucoup Camille ! Toute l’équipe de la Boulangerie du Lac est ravie que notre tresse au beurre vous ait plu. À très vite au comptoir !',
        altReply:
          'Un grand merci Camille pour vos 5 étoiles ! Nos fournées chaudes vous attendent dès 6h30 demain matin à la Boulangerie du Lac.',
      },
      {
        id: 'lukas',
        author: 'Lukas M.',
        initials: 'LM',
        meta: 'Il y a 1 h · Google',
        quote: '« Pain au levain toujours frais et service rapide même à midi. »',
        defaultReply:
          'Merci Lukas pour ce superbe retour ! Nous mettons tout notre soin dans notre pain au levain naturel. Au plaisir de vous revoir bientôt !',
        altReply:
          'Merci infiniment Lukas pour vos 5 étoiles ! Toute l’équipe vous remercie pour votre fidélité au quartier.',
      },
      {
        id: 'elena',
        author: 'Elena V.',
        initials: 'EV',
        meta: 'Hier · Google',
        quote: '« Meilleures tartelettes aux fruits du quartier, accueil au top ! »',
        defaultReply:
          'Un immense merci Elena ! Nos pâtissiers préparent chaque matin ces tartelettes avec des fruits de saison. À très bientôt en boutique !',
        altReply:
          'Merci beaucoup Elena pour cette belle note ! Nous sommes ravis de régaler votre pause gourmande chaque semaine.',
      },
    ],
  },
  de: {
    browserTitle: 'app.komero.ch/bewertungen',
    previewLabel: 'Vorschau',
    headerBrand: 'Komero · Google-Bewertungen KI',
    headerStat: '98% beantwortet',
    reviewSelectorAria: 'Beispielbewertung auswählen',
    aiLabel: 'Von der KI vorbereitete Antwort',
    validateBtn: 'Bestätigen & senden',
    publishedBtn: 'Auf Google live',
    altToneBtn: 'Anderer Ton',
    shopName: 'Bäckerei Sonnenschein',
    recommended: 'Empfohlen',
    mapsCategory: 'Handwerksbäckerei · Geöffnet',
    ownerReplyLabel: 'Komero-Antwort live',
    pendingBadge: 'Bereit',
    publishedBadge: 'Live',
    reviews: [
      {
        id: 'camille',
        author: 'Camille R.',
        initials: 'CR',
        meta: 'Vor 12 Min. · Google',
        quote: '« Super Empfang und ein hervorragender Butterzopf! »',
        defaultReply:
          'Herzlichen Dank, Camille! Das ganze Team der Bäckerei Sonnenschein freut sich sehr über Ihr Lob zu unserem Butterzopf. Bis bald an der Theke!',
        altReply:
          'Vielen Dank für Ihre 5 Sterne, Camille! Unsere ofenfrischen Zöpfe warten morgen ab 6:30 Uhr wieder auf Sie.',
      },
      {
        id: 'lukas',
        author: 'Lukas M.',
        initials: 'LM',
        meta: 'Vor 1 Std. · Google',
        quote: '« Knuspriges Sauerteigbrot und selbst am Mittag super schnell bedient. »',
        defaultReply:
          'Vielen Dank, Lukas, für die tolle Rückmeldung! Unser Natur-Sauerteigbrot wird jeden Morgen frisch gebacken. Bis zum nächsten Besuch!',
        altReply:
          'Danke für Ihre 5 Sterne, Lukas! Wir freuen uns, Sie bald wieder im Quartier begrüssen zu dürfen.',
      },
      {
        id: 'elena',
        author: 'Elena V.',
        initials: 'EV',
        meta: 'Gestern · Google',
        quote: '« Beste Früchtetörtchen im Quartier und immer ein Lächeln! »',
        defaultReply:
          'Herzlichen Dank, Elena! Unsere Konditorei verwendet täglich frische Saisonfrüchte. Schön, dass es Ihnen so gut schmeckt!',
        altReply:
          'Vielen Dank, Elena, für die wunderbare Bewertung! Bis ganz bald an unserer Theke.',
      },
    ],
  },
  en: {
    browserTitle: 'app.komero.ch/google-reviews',
    previewLabel: 'Interface preview',
    headerBrand: 'Komero · Google Reviews AI',
    headerStat: '98% replied',
    reviewSelectorAria: 'Choose a sample customer review',
    aiLabel: 'AI-prepared reply',
    validateBtn: 'Approve & publish',
    publishedBtn: 'Published on Google',
    altToneBtn: 'Switch tone',
    shopName: 'Lakeview Bakery',
    recommended: 'Recommended',
    mapsCategory: 'Artisan Bakery · Open now',
    ownerReplyLabel: 'Published Komero reply',
    pendingBadge: 'Pending',
    publishedBadge: 'Live',
    reviews: [
      {
        id: 'camille',
        author: 'Camille R.',
        initials: 'CR',
        meta: '12 min ago · Google',
        quote: '“Warm welcome and amazing homemade butter brioche!”',
        defaultReply:
          'Thank you so much, Camille! The whole team at Lakeview Bakery is delighted you loved our homemade butter brioche. See you again soon!',
        altReply:
          'Huge thanks for the 5 stars, Camille! Fresh warm loaves await you tomorrow morning from 6:30 AM at Lakeview Bakery.',
      },
      {
        id: 'lukas',
        author: 'Lukas M.',
        initials: 'LM',
        meta: '1 hr ago · Google',
        quote: '“Fresh sourdough every day and quick service even at lunchtime.”',
        defaultReply:
          'Thank you, Lukas, for the great feedback! We bake our sourdough fresh every morning and love keeping the counter fast and friendly.',
        altReply:
          'Many thanks for the 5 stars, Lukas! We truly appreciate your neighborhood support and look forward to seeing you soon.',
      },
      {
        id: 'elena',
        author: 'Elena V.',
        initials: 'EV',
        meta: 'Yesterday · Google',
        quote: '“Best fruit tarts in the neighborhood, always greeted with a smile!”',
        defaultReply:
          'Thank you so much, Elena! Our pastry team prepares every fruit tart fresh each morning with seasonal produce. See you soon in the shop!',
        altReply:
          'Thanks a lot for your kind 5-star review, Elena! Always a pleasure to welcome you at the counter.',
      },
    ],
  },
};

export function GoogleReviewsHeroVisual() {
  const { language } = useLanguage();
  const c = REVIEWS_HERO_COPY[language];
  const [selectedReviewId, setSelectedReviewId] = useState<'camille' | 'lukas' | 'elena'>('camille');
  const [useAltTone, setUseAltTone] = useState(false);
  const [published, setPublished] = useState(true);

  const currentReview =
    c.reviews.find((review) => review.id === selectedReviewId) ?? c.reviews[0];
  const activeReply = useAltTone ? currentReview.altReply : currentReview.defaultReply;

  const handleSelectReview = (id: 'camille' | 'lukas' | 'elena') => {
    setSelectedReviewId(id);
    setUseAltTone(false);
    setPublished(true);
  };

  const handleToneToggle = () => {
    setUseAltTone((prev) => !prev);
    setPublished(false);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-emerald-50/50 border border-slate-200/80 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4 sm:gap-0">
        {/* Background PC Browser Window (spans cols 1..9, inner content padded clear of phone) */}
        <div className="sm:col-start-1 sm:col-end-10 sm:row-start-1 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-md px-2.5 py-0.5 text-[11px] font-medium text-slate-600 truncate">
              {c.browserTitle}
            </div>
            <span className="text-[10px] font-medium text-slate-500 whitespace-nowrap shrink-0">
              {c.previewLabel}
            </span>
          </div>

          {/* Midnight Navy & Emerald Header */}
          <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between gap-2 border-b-2 border-[#10B981]">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-5 h-5 rounded-md bg-[#10B981] text-[#0F172A] font-extrabold text-[11px] flex items-center justify-center shrink-0">
                K
              </span>
              <span className="text-xs font-bold truncate">{c.headerBrand}</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-300 tabular-nums shrink-0">
              {c.headerStat}
            </span>
          </div>

          {/* Dashboard Body — padded right on sm+ so overlapping phone never covers text/buttons */}
          <div className="p-4 sm:pr-24 space-y-3">
            {/* Switch between Camille R., Lukas M., Elena V. */}
            <div
              role="tablist"
              aria-label={c.reviewSelectorAria}
              className="flex flex-wrap items-center gap-1.5"
            >
              {c.reviews.map((review) => {
                const isSelected = review.id === currentReview.id;
                return (
                  <button
                    key={review.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectReview(review.id)}
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E293B] text-white'
                        : 'bg-slate-100 text-slate-600 hover:text-[#1E293B]'
                    }`}
                  >
                    <span>{review.author}</span>
                    <span className="text-amber-400" aria-hidden="true">
                      5★
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Customer Review Card */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-7 h-7 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {currentReview.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#1E293B] truncate">
                      {currentReview.author}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">{currentReview.meta}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label="5/5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#1E293B] font-medium leading-snug">
                {currentReview.quote}
              </p>
            </div>

            {/* AI Prepared Reply Box */}
            <div className="rounded-xl border border-blue-200/90 bg-blue-50/40 p-3 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB]">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  {c.aiLabel}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed bg-white rounded-lg border border-slate-200/90 p-2.5">
                {activeReply}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPublished(true)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    published
                      ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                      : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  {published ? c.publishedBtn : c.validateBtn}
                </button>
                <button
                  type="button"
                  onClick={handleToneToggle}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 bg-white text-[11px] font-semibold text-slate-700 hover:text-[#1E293B] hover:border-slate-400 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" aria-hidden="true" />
                  {c.altToneBtn}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Foreground Right Smartphone (anchored below PC header bar, overlapping right margin cleanly) */}
        <div className="sm:col-start-8 sm:col-end-13 sm:row-start-1 sm:mt-20 z-10 w-full max-w-[235px] mx-auto sm:mx-0 sm:ml-auto">
          <div className="relative rounded-[26px] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            {/* Subtle glass sheen */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 z-10"
              aria-hidden="true"
            />
            {/* Notch */}
            <div className="bg-slate-900 pt-1.5 pb-1 flex justify-center">
              <div className="w-14 h-2.5 rounded-full bg-black" />
            </div>

            {/* Phone Screen */}
            <div className="bg-white rounded-t-[18px] overflow-hidden">
              {/* Stylized Google Maps Header Strip */}
              <div className="relative h-12 bg-slate-100 overflow-hidden border-b border-slate-200">
                <svg viewBox="0 0 240 56" className="w-full h-full" aria-hidden="true">
                  <rect width="240" height="56" fill="#EEF2FF" />
                  <path d="M0 38 L240 14" stroke="#FFFFFF" strokeWidth="7" />
                  <path d="M55 0 L95 56" stroke="#FFFFFF" strokeWidth="5" />
                  <path d="M165 0 L145 56" stroke="#FFFFFF" strokeWidth="4" />
                  <rect x="12" y="8" width="38" height="20" rx="4" fill="#D1FAE5" />
                  <rect x="180" y="30" width="46" height="18" rx="4" fill="#DBEAFE" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-md ring-2 ring-white">
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                </div>
              </div>

              <div className="p-2.5 space-y-2">
                <div className="space-y-1">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-[11px] font-extrabold text-[#1E293B] leading-tight">
                      {c.shopName}
                    </p>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-emerald-50 text-[#047857] border border-emerald-200 text-[9px] font-bold shrink-0">
                      {c.recommended}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[10px] font-bold text-[#1E293B] tabular-nums">4,9</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[9px] text-slate-500 tabular-nums">(184)</span>
                  </div>
                  <p className="text-[9px] text-slate-500">{c.mapsCategory}</p>
                </div>

                {/* Published Komero reply preview */}
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-2 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-bold text-[#1E293B]">
                      {currentReview.author}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                        published
                          ? 'bg-emerald-100 text-[#047857]'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {published ? c.publishedBadge : c.pendingBadge}
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-600 leading-snug">{currentReview.quote}</p>
                  <div className="pt-1 border-t border-slate-200 space-y-0.5">
                    <p className="text-[9px] font-bold text-[#047857] flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                      {c.ownerReplyLabel}
                    </p>
                    <p className="text-[9.5px] text-slate-700 leading-snug line-clamp-3">
                      {activeReply}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. /reseaux-sociaux — Smartphone ("Komero Mobile") + IG Post Preview Card  */
/* -------------------------------------------------------------------------- */
const SOCIAL_HERO_COPY: Record<
  Language,
  {
    appTitle: string;
    cameraHint: string;
    generateBtn: string;
    accountHandle: string;
    locationLabel: string;
    likesLabel: string;
    captions: string[];
    hashtags: string;
    publishBtn: string;
    publishedBtn: string;
  }
> = {
  fr: {
    appTitle: 'Komero Mobile',
    cameraHint: 'Comptoir',
    generateBtn: 'Générer le post Facebook & Insta',
    accountHandle: 'atelier_du_quartier',
    locationLabel: 'Lausanne · Boutique locale',
    likesLabel: "48 j'aime",
    captions: [
      'Nouveauté en boutique cette semaine ! Venez découvrir notre sélection fraîchement arrivée en magasin. ✨',
      'Fraîchement installé sur notre comptoir ! Passez découvrir nos créations artisanales et notre pause café du jour. ☕✨',
    ],
    hashtags: '#CommerceLocal #Artisanat #BoutiqueDeQuartier',
    publishBtn: 'Publier en 1 clic',
    publishedBtn: 'Publié sur FB & Insta',
  },
  de: {
    appTitle: 'Komero Mobile',
    cameraHint: 'Theke',
    generateBtn: 'Facebook- & Insta-Post erstellen',
    accountHandle: 'quartier_atelier_ch',
    locationLabel: 'Zürich · Lokales Geschäft',
    likesLabel: '48 Gefällt mir',
    captions: [
      'Neuheit diese Woche im Geschäft! Entdecken Sie unsere frisch eingetroffene Auswahl im Laden. ✨',
      'Frisch an unserer Theke eingetroffen! Schauen Sie vorbei für unsere handverlesene Auswahl & einen Kaffee. ☕✨',
    ],
    hashtags: '#LokalesGewerbe #Handwerk #Quartierladen',
    publishBtn: 'Mit 1 Klick posten',
    publishedBtn: 'Auf FB & Insta live',
  },
  en: {
    appTitle: 'Komero Mobile',
    cameraHint: 'Counter',
    generateBtn: 'Generate Facebook & Insta post',
    accountHandle: 'neighborhood_atelier',
    locationLabel: 'Geneva · Local Boutique',
    likesLabel: '48 likes',
    captions: [
      'New in store this week! Come discover our freshly arrived selection in shop. ✨',
      'Fresh on our counter today! Stop by for our handpicked artisan selection and a warm coffee break. ☕✨',
    ],
    hashtags: '#LocalShop #ArtisanCraft #NeighborhoodStore',
    publishBtn: 'Publish in 1 click',
    publishedBtn: 'Published on FB & Insta',
  },
};

export function SocialMediaHeroVisual() {
  const { language } = useLanguage();
  const c = SOCIAL_HERO_COPY[language];
  const [captionIndex, setCaptionIndex] = useState(0);
  const [published, setPublished] = useState(false);
  const [liked, setLiked] = useState(true);

  const handleGenerate = () => {
    setCaptionIndex((prev) => (prev + 1) % c.captions.length);
    setPublished(false);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/45 to-emerald-50/45 border border-slate-200/80 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4 sm:gap-0">
        {/* Left Smartphone: Komero Mobile Camera */}
        <div className="sm:col-start-1 sm:col-end-7 sm:row-start-1 w-full max-w-[255px] mx-auto sm:mx-0">
          <div className="relative rounded-[26px] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 pt-1.5 pb-1 flex items-center justify-between px-4">
              <span className="text-[10px] font-semibold text-slate-300 tabular-nums">08:15</span>
              <div className="w-12 h-2.5 rounded-full bg-black" />
              <span className="text-[10px] font-bold text-emerald-400">5G</span>
            </div>

            <div className="bg-[#1E293B] text-white px-3 py-2 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold flex items-center gap-1.5 truncate">
                <Camera className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                {c.appTitle}
              </span>
              <span className="text-[10px] text-slate-300 shrink-0">{c.cameraHint}</span>
            </div>

            <div className="relative bg-slate-950">
              <ArtisanBoutiqueCounterSvg className="w-full aspect-[4/3] object-cover" />
              <div className="pointer-events-none absolute inset-3 border border-white/30 rounded-lg">
                <span className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t-2 border-l-2 border-white" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t-2 border-r-2 border-white" />
                <span className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b-2 border-l-2 border-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b-2 border-r-2 border-white" />
              </div>
            </div>

            <div className="bg-white p-2.5">
              <button
                type="button"
                onClick={handleGenerate}
                className="w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-[#1E293B] hover:bg-slate-800 text-white text-[11px] font-bold transition-colors cursor-pointer text-center"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                <span>{c.generateBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Overlapping Right Foreground: Instagram Post Preview Card (stays strictly inside container!) */}
        <div className="sm:col-start-6 sm:col-end-13 sm:row-start-1 sm:mt-8 z-10 w-full max-w-[290px] mx-auto sm:mx-0 sm:ml-auto">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
            <div className="px-3.5 py-2.5 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#10B981] text-white text-[10px] font-extrabold flex items-center justify-center shrink-0">
                  AQ
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#1E293B] truncate">{c.accountHandle}</p>
                  <p className="text-[10px] text-slate-500 truncate">{c.locationLabel}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] shrink-0">
                IG + FB
              </span>
            </div>

            <div className="aspect-[16/10] bg-slate-50 overflow-hidden border-b border-slate-100">
              <ArtisanBoutiqueCounterSvg className="w-full h-full object-cover" />
            </div>

            <div className="p-3.5 space-y-2">
              <div className="flex items-center justify-between text-slate-700">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLiked((prev) => !prev)}
                    aria-label="Like preview"
                    className="cursor-pointer transition-transform active:scale-95"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        liked ? 'fill-rose-500 text-rose-500' : 'text-slate-600'
                      }`}
                    />
                  </button>
                  <MessageCircle className="w-4 h-4 text-slate-600" aria-hidden="true" />
                  <Share2 className="w-4 h-4 text-slate-600" aria-hidden="true" />
                </div>
                <Bookmark className="w-4 h-4 text-slate-600" aria-hidden="true" />
              </div>

              <p className="text-[11px] font-bold text-[#1E293B] tabular-nums">
                {liked ? c.likesLabel : c.likesLabel.replace('48', '47')}
              </p>

              <p className="text-xs text-[#1E293B] leading-relaxed">{c.captions[captionIndex]}</p>

              <p className="text-[11px] font-semibold text-[#2563EB]">{c.hashtags}</p>

              <button
                type="button"
                onClick={() => setPublished((prev) => !prev)}
                className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  published
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                }`}
              >
                {published ? (
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                ) : (
                  <Send className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                )}
                <span>{published ? c.publishedBtn : c.publishBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. /repondeur-sms — Background PC Inbox + Foreground Customer SMS Phone    */
/* -------------------------------------------------------------------------- */
const SMS_RESPONDER_HERO_COPY: Record<
  Language,
  {
    browserUrl: string;
    inboxHeader: string;
    missedCallLabel: string;
    autoBadge: string;
    phoneHeader: string;
    autoSms: string;
    reply1Label: string;
    reply2Label: string;
    reply1Confirmation: string;
    reply2Confirmation: string;
    pcWaitingStatus: string;
    pcReply1Status: string;
    pcReply2Status: string;
  }
> = {
  fr: {
    browserUrl: 'app.komero.ch/messagerie',
    inboxHeader: 'Komero · Appels & SMS centralisés',
    missedCallLabel: 'Appel manqué · +41 79 342 18 90',
    autoBadge: 'SMS envoyé automatiquement',
    phoneHeader: 'La Boulangerie du Soleil',
    autoSms:
      "Bonjour, j'ai les mains prises au fournil mais je ne vous oublie pas ! Si c'est pour une réservation, répondez 1, pour nos horaires, répondez 2...",
    reply1Label: 'Répondre 1 · Réservation',
    reply2Label: 'Répondre 2 · Horaires',
    reply1Confirmation:
      'Parfait ! Indiquez votre nom et votre commande ici, nous vous confirmons dès la sortie du four.',
    reply2Confirmation:
      'Nous sommes ouverts du mardi au dimanche de 6h30 à 19h30 au 14 Rue Centrale.',
    pcWaitingStatus: 'En attente de la réponse client (1 ou 2)',
    pcReply1Status: 'Client a répondu « 1 » · Réservation enregistrée',
    pcReply2Status: 'Client a répondu « 2 » · Horaires envoyés',
  },
  de: {
    browserUrl: 'app.komero.ch/posteingang',
    inboxHeader: 'Komero · Zentraler Anruf- & SMS-Eingang',
    missedCallLabel: 'Verpasster Anruf · +41 79 342 18 90',
    autoBadge: 'SMS automatisch gesendet',
    phoneHeader: 'La Boulangerie du Soleil',
    autoSms:
      'Guten Tag, ich habe gerade alle Hände voll in der Backstube, vergesse Sie aber nicht! Für eine Reservation antworten Sie 1, für Öffnungszeiten 2...',
    reply1Label: 'Antwort 1 · Reservation',
    reply2Label: 'Antwort 2 · Öffnungszeiten',
    reply1Confirmation:
      'Perfekt! Senden Sie uns kurz Ihren Namen und Wunsch, wir bestätigen sofort nach dem Backen.',
    reply2Confirmation:
      'Wir sind Dienstag bis Sonntag von 06:30 bis 19:30 Uhr für Sie da.',
    pcWaitingStatus: 'Wartet auf Kundenantwort (1 oder 2)',
    pcReply1Status: 'Kunde antwortete « 1 » · Reservation erfasst',
    pcReply2Status: 'Kunde antwortete « 2 » · Öffnungszeiten gesendet',
  },
  en: {
    browserUrl: 'app.komero.ch/inbox',
    inboxHeader: 'Komero · Unified Call & SMS Inbox',
    missedCallLabel: 'Missed call · +41 79 342 18 90',
    autoBadge: 'SMS sent automatically',
    phoneHeader: 'La Boulangerie du Soleil',
    autoSms:
      "Hello! My hands are full at the oven right now, but I haven't forgotten you! Reply 1 for a booking, or reply 2 for our opening hours...",
    reply1Label: 'Reply 1 · Booking',
    reply2Label: 'Reply 2 · Hours',
    reply1Confirmation:
      'Great! Just send your name and order details here and we will confirm right away.',
    reply2Confirmation:
      'We are open Tuesday to Sunday from 6:30 AM to 7:30 PM at 14 Central Street.',
    pcWaitingStatus: 'Waiting for customer choice (1 or 2)',
    pcReply1Status: 'Customer replied “1” · Booking logged',
    pcReply2Status: 'Customer replied “2” · Hours sent',
  },
};

export function SmsResponderHeroVisual() {
  const { language } = useLanguage();
  const c = SMS_RESPONDER_HERO_COPY[language];
  const [choice, setChoice] = useState<'1' | '2' | null>(null);

  const pcStatus =
    choice === '1'
      ? c.pcReply1Status
      : choice === '2'
        ? c.pcReply2Status
        : c.pcWaitingStatus;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/45 to-emerald-50/45 border border-slate-200/80 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4 sm:gap-0">
        {/* Background PC Centralized Inbox */}
        <div className="sm:col-start-1 sm:col-end-10 sm:row-start-1 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-md px-2.5 py-0.5 text-[11px] font-medium text-slate-500 truncate">
              {c.browserUrl}
            </div>
          </div>

          <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between gap-2 border-b-2 border-[#10B981]">
            <span className="text-xs font-bold truncate">{c.inboxHeader}</span>
            <span className="text-[11px] font-semibold text-emerald-300 tabular-nums shrink-0">
              &lt; 3 sec
            </span>
          </div>

          <div className="p-4 sm:pr-28 space-y-3">
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1.5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1E293B] tabular-nums">
                  <PhoneMissed className="w-3.5 h-3.5 text-rose-500 shrink-0" aria-hidden="true" />
                  {c.missedCallLabel}
                </span>
                <span className="text-[10px] font-medium text-slate-500 tabular-nums">11:42</span>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-[#047857] text-[11px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                  {c.autoBadge}
                </span>
              </div>

              <p className="text-[11px] text-slate-600 leading-relaxed bg-white rounded-lg border border-slate-200/80 p-2.5">
                {pcStatus}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>WhatsApp &amp; SMS</span>
              <span className="font-semibold text-[#047857] tabular-nums">100% suivis</span>
            </div>
          </div>
        </div>

        {/* Foreground Right Smartphone: Customer SMS Screen (below PC header bar) */}
        <div className="sm:col-start-8 sm:col-end-13 sm:row-start-1 sm:mt-20 z-10 w-full max-w-[245px] mx-auto sm:mx-0 sm:ml-auto">
          <div className="relative rounded-[26px] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 pt-1.5 pb-1 flex justify-center">
              <div className="w-14 h-2.5 rounded-full bg-black" />
            </div>

            <div className="bg-white rounded-t-[18px] overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 text-center">
                <p className="text-xs font-extrabold text-[#1E293B]">{c.phoneHeader}</p>
                <p className="text-[10px] text-[#047857] font-semibold">SMS · 11:42</p>
              </div>

              <div className="p-2.5 space-y-2 bg-white">
                <div className="rounded-2xl rounded-tl-sm bg-slate-100 border border-slate-200/80 px-2.5 py-2 text-[10.5px] text-[#1E293B] leading-relaxed">
                  {c.autoSms}
                </div>

                {choice && (
                  <>
                    <div className="flex justify-end">
                      <span className="rounded-2xl rounded-tr-sm bg-[#2563EB] text-white px-2.5 py-1 text-[11px] font-bold tabular-nums">
                        {choice}
                      </span>
                    </div>
                    <div className="rounded-2xl rounded-tl-sm bg-emerald-50 border border-emerald-200 px-2.5 py-2 text-[10.5px] text-[#1E293B] leading-snug">
                      {choice === '1' ? c.reply1Confirmation : c.reply2Confirmation}
                    </div>
                  </>
                )}

                <div className="pt-1 grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setChoice('1')}
                    className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer ${
                      choice === '1'
                        ? 'bg-[#2563EB] text-white border-[#2563EB]'
                        : 'bg-white text-[#1E293B] border-slate-300 hover:border-[#2563EB]'
                    }`}
                  >
                    {c.reply1Label}
                  </button>
                  <button
                    type="button"
                    onClick={() => setChoice('2')}
                    className={`px-2 py-1.5 rounded-lg text-[10px] font-bold border transition-colors cursor-pointer ${
                      choice === '2'
                        ? 'bg-[#2563EB] text-white border-[#2563EB]'
                        : 'bg-white text-[#1E293B] border-slate-300 hover:border-[#2563EB]'
                    }`}
                  >
                    {c.reply2Label}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. /campagnes-sms-flash — PC SMS Composer + Live Customer Smartphone       */
/* -------------------------------------------------------------------------- */
const SMS_FLASH_HERO_COPY: Record<
  Language,
  {
    browserUrl: string;
    headerTitle: string;
    audienceLabel: string;
    messageLabel: string;
    defaultMessage: string;
    sendBtn: string;
    sentBtn: string;
    phoneSender: string;
    phoneTime: string;
    receivedTag: string;
    openRate: string;
  }
> = {
  fr: {
    browserUrl: 'app.komero.ch/campagnes-sms',
    headerTitle: 'Komero · Campagne SMS Flash',
    audienceLabel: '245 clients du quartier (opt-in)',
    messageLabel: 'Message SMS (modifiable)',
    defaultMessage:
      'Promo Flash ! Il nous reste 8 paniers de viennoiseries à -50% ce soir. Venez avant 19h ! STOP 36007',
    sendBtn: 'Envoyer à 245 clients',
    sentBtn: 'Envoyé à 245 clients',
    phoneSender: 'La Boulangerie du Soleil',
    phoneTime: "À l'instant",
    receivedTag: 'SMS reçu en direct',
    openRate: '98% lus en 3 min',
  },
  de: {
    browserUrl: 'app.komero.ch/sms-kampagnen',
    headerTitle: 'Komero · Flash-SMS-Kampagne',
    audienceLabel: '245 Quartierkunden (Opt-in)',
    messageLabel: 'SMS-Nachricht (bearbeitbar)',
    defaultMessage:
      'Flash-Aktion! Heute Abend noch 8 Gebäckkörbe zu -50%. Kommen Sie vor 19 Uhr vorbei! STOP 36007',
    sendBtn: 'An 245 Kunden senden',
    sentBtn: 'An 245 Kunden gesendet',
    phoneSender: 'La Boulangerie du Soleil',
    phoneTime: 'Gerade eben',
    receivedTag: 'SMS live erhalten',
    openRate: '98% in 3 Min. gelesen',
  },
  en: {
    browserUrl: 'app.komero.ch/sms-campaigns',
    headerTitle: 'Komero · Flash SMS Campaign',
    audienceLabel: '245 local customers (opt-in)',
    messageLabel: 'SMS message (editable)',
    defaultMessage:
      'Flash Deal! 8 pastry baskets left at 50% off tonight. Come by before 7 PM! STOP 36007',
    sendBtn: 'Send to 245 customers',
    sentBtn: 'Sent to 245 customers',
    phoneSender: 'La Boulangerie du Soleil',
    phoneTime: 'Just now',
    receivedTag: 'SMS delivered live',
    openRate: '98% read in 3 min',
  },
};

export function SmsFlashHeroVisual() {
  const { language } = useLanguage();
  const c = SMS_FLASH_HERO_COPY[language];
  const [customDraft, setCustomDraft] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const message = customDraft ?? c.defaultMessage;
  const charCount = message.length;

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/45 to-emerald-50/45 border border-slate-200/80 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-12 items-start gap-4 sm:gap-0">
        {/* Background PC Composer (counter + textarea + CTA strictly clear of phone) */}
        <div className="sm:col-start-1 sm:col-end-10 sm:row-start-1 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 min-w-0 bg-white border border-slate-200 rounded-md px-2.5 py-0.5 text-[11px] font-medium text-slate-500 truncate">
              {c.browserUrl}
            </div>
          </div>

          <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between gap-2 border-b-2 border-[#10B981]">
            <span className="text-xs font-bold truncate">{c.headerTitle}</span>
            <span className="text-[10px] font-semibold text-emerald-300 tabular-nums shrink-0">
              {c.openRate}
            </span>
          </div>

          <div className="p-4 sm:pr-28 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <label
                htmlFor="hero-sms-flash-input"
                className="text-[11px] font-bold text-[#1E293B]"
              >
                {c.messageLabel}
              </label>
              <span
                className={`text-[11px] font-bold tabular-nums shrink-0 ${
                  charCount > 145 ? 'text-rose-600' : 'text-[#2563EB]'
                }`}
              >
                {charCount}/145
              </span>
            </div>

            <textarea
              id="hero-sms-flash-input"
              rows={4}
              maxLength={145}
              value={message}
              onChange={(e) => {
                setCustomDraft(e.target.value);
                setSent(false);
              }}
              className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] p-2.5 text-xs text-[#1E293B] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none"
            />

            <div className="flex flex-col items-start gap-2">
              <span className="text-[11px] text-slate-500 font-medium">{c.audienceLabel}</span>
              <button
                type="button"
                onClick={() => setSent(true)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  sent
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                }`}
              >
                {sent ? (
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                ) : (
                  <Send className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                )}
                <span className="tabular-nums">{sent ? c.sentBtn : c.sendBtn}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Foreground Right Customer Smartphone Receiving SMS Live */}
        <div className="sm:col-start-8 sm:col-end-13 sm:row-start-1 sm:mt-20 z-10 w-full max-w-[235px] mx-auto sm:mx-0 sm:ml-auto">
          <div className="relative rounded-[26px] border-[5px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
            <div className="bg-slate-900 pt-1.5 pb-1 flex justify-center">
              <div className="w-14 h-2.5 rounded-full bg-black" />
            </div>

            <div className="bg-white rounded-t-[18px] overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-1">
                <span className="text-[10.5px] font-extrabold text-[#1E293B] truncate">
                  {c.phoneSender}
                </span>
                <span className="text-[9px] font-semibold text-slate-500 shrink-0">
                  {c.phoneTime}
                </span>
              </div>

              <div className="p-2.5 space-y-2">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[#047857] text-[9px] font-bold">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#10B981]" aria-hidden="true" />
                  {c.receivedTag}
                </div>

                <div className="rounded-2xl rounded-tl-sm bg-blue-50 border border-blue-200/80 px-2.5 py-2 text-[10.5px] text-[#1E293B] leading-relaxed">
                  {message}
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  <span>SMS vérifié</span>
                  <span className="font-bold text-[#2563EB] tabular-nums">
                    {sent ? '245 / 245' : 'Aperçu direct'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. /veille-concurrence — Large PC Dashboard (Map + Trend Chart + Idea)     */
/* -------------------------------------------------------------------------- */
interface NeighborhoodIdea {
  badge: string;
  text: string;
}

const MARKET_WATCH_HERO_COPY: Record<
  Language,
  {
    browserUrl: string;
    headerTitle: string;
    headerBadge: string;
    mapTitle: string;
    yourShop: string;
    competitors: { id: string; label: string; rating: string; note: string }[];
    chartTitle: string;
    chartDelta: string;
    chartLegendYou: string;
    chartLegendLocal: string;
    ideaHeader: string;
    ideas: NeighborhoodIdea[];
    nextIdeaBtn: string;
    scheduleBtn: string;
    scheduledBtn: string;
  }
> = {
  fr: {
    browserUrl: 'app.komero.ch/veille-locale',
    headerTitle: 'Komero · Veille & Tendances quartier',
    headerBadge: 'Top 2 local',
    mapTitle: 'Carte du quartier (rayon 500 m)',
    yourShop: 'Votre commerce · 4,9★',
    competitors: [
      { id: 'c1', label: 'Boulangerie Nord', rating: '4,4★', note: 'Peu actif sur Instagram' },
      { id: 'c2', label: 'Café des Halles', rating: '4,6★', note: '+14 avis ce mois-ci' },
      { id: 'c3', label: 'Maison Brioche', rating: '4,2★', note: 'Avis sans réponse' },
    ],
    chartTitle: 'Popularité & clics fiche Google',
    chartDelta: '+38 %',
    chartLegendYou: 'Votre fiche',
    chartLegendLocal: 'Moyenne quartier',
    ideaHeader: 'Idée de publication de la semaine pour votre quartier',
    ideas: [
      {
        badge: 'Marché samedi matin',
        text: 'Le marché de quartier attire +40 % de passage devant votre rue : publiez vendredi soir une photo de votre vitrine + formule café-croissant à 4,90 CHF.',
      },
      {
        badge: 'Tendance locale',
        text: 'Vos voisins recherchent « pain au levain » (+28 % cette semaine) : montrez la coupe du pain chaud en 1 photo sur Google & Instagram.',
      },
    ],
    nextIdeaBtn: 'Autre idée',
    scheduleBtn: 'Planifier',
    scheduledBtn: 'Planifié',
  },
  de: {
    browserUrl: 'app.komero.ch/marktbeobachtung',
    headerTitle: 'Komero · Quartier-Trends & Radar',
    headerBadge: 'Top 2 lokal',
    mapTitle: 'Quartierkarte (500 m Radius)',
    yourShop: 'Ihr Geschäft · 4,9★',
    competitors: [
      { id: 'c1', label: 'Bäckerei Nord', rating: '4,4★', note: 'Kaum aktiv auf Instagram' },
      { id: 'c2', label: 'Café Markthalle', rating: '4,6★', note: '+14 Bewertungen/Monat' },
      { id: 'c3', label: 'Haus Brioche', rating: '4,2★', note: 'Offene Bewertungen' },
    ],
    chartTitle: 'Sichtbarkeit & Google-Klicks',
    chartDelta: '+38 %',
    chartLegendYou: 'Ihr Profil',
    chartLegendLocal: 'Quartier-Schnitt',
    ideaHeader: 'Beitragsidee der Woche für Ihr Quartier',
    ideas: [
      {
        badge: 'Wochenmarkt Samstag',
        text: 'Der Samstagsmarkt bringt +40 % Laufkundschaft in Ihre Strasse: Posten Sie am Freitagabend ein Foto Ihrer Auslage + Kaffee-Gipfeli-Angebot (4,90 CHF).',
      },
      {
        badge: 'Lokaler Trend',
        text: '«Sauerteigbrot» wird im Quartier +28 % häufiger gesucht: Teilen Sie 1 Foto Ihres frischen Brots direkt auf Google & Instagram.',
      },
    ],
    nextIdeaBtn: 'Nächste Idee',
    scheduleBtn: 'Planen',
    scheduledBtn: 'Geplant',
  },
  en: {
    browserUrl: 'app.komero.ch/market-watch',
    headerTitle: 'Komero · Local Radar & Trends',
    headerBadge: 'Local Top 2',
    mapTitle: 'Neighborhood map (500 m radius)',
    yourShop: 'Your shop · 4.9★',
    competitors: [
      { id: 'c1', label: 'North Bakery', rating: '4.4★', note: 'Low Instagram activity' },
      { id: 'c2', label: 'Market Café', rating: '4.6★', note: '+14 reviews this month' },
      { id: 'c3', label: 'Brioche House', rating: '4.2★', note: 'Unanswered reviews' },
    ],
    chartTitle: 'Popularity & Google profile clicks',
    chartDelta: '+38%',
    chartLegendYou: 'Your shop',
    chartLegendLocal: 'Area average',
    ideaHeader: 'Post idea of the week for your neighborhood',
    ideas: [
      {
        badge: 'Saturday market',
        text: 'The local street market brings +40% foot traffic past your door: post a display photo Friday evening with a CHF 4.90 coffee & croissant deal.',
      },
      {
        badge: 'Local search spike',
        text: 'Neighbors searched “sourdough bread” +28% more this week: share one crisp loaf photo on Google & Instagram.',
      },
    ],
    nextIdeaBtn: 'Next idea',
    scheduleBtn: 'Schedule',
    scheduledBtn: 'Scheduled',
  },
};

export function MarketWatchHeroVisual() {
  const { language } = useLanguage();
  const c = MARKET_WATCH_HERO_COPY[language];
  const [selectedPin, setSelectedPin] = useState<'you' | 'c1' | 'c2' | 'c3'>('you');
  const [ideaIdx, setIdeaIdx] = useState(0);
  const [scheduled, setScheduled] = useState(false);

  const activeComp = c.competitors.find((item) => item.id === selectedPin);
  const activeIdea = c.ideas[ideaIdx];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/45 to-emerald-50/45 border border-slate-200/80 p-3.5 sm:p-5">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-md px-2.5 py-0.5 text-[11px] font-medium text-slate-500 truncate">
            {c.browserUrl}
          </div>
        </div>

        <div className="bg-[#1E293B] text-white px-4 py-2.5 flex items-center justify-between gap-2 border-b-2 border-[#10B981]">
          <span className="text-xs font-bold truncate">{c.headerTitle}</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold shrink-0">
            {c.headerBadge}
          </span>
        </div>

        <div className="p-3.5 sm:p-4 space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Simplified Neighborhood SVG Map */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 space-y-2">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[11px] font-bold text-[#1E293B]">{c.mapTitle}</span>
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
              </div>

              <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-[#EEF2FF] h-32">
                <svg viewBox="0 0 220 120" className="w-full h-full" aria-hidden="true">
                  <rect x="10" y="10" width="52" height="34" rx="6" fill="#D1FAE5" />
                  <rect x="150" y="70" width="58" height="38" rx="6" fill="#DBEAFE" />
                  <rect x="82" y="14" width="60" height="28" rx="5" fill="#E2E8F0" opacity="0.65" />
                  <path d="M0 58 L220 44" stroke="#FFFFFF" strokeWidth="7" />
                  <path d="M74 0 L66 120" stroke="#FFFFFF" strokeWidth="6" />
                  <path d="M148 0 L138 120" stroke="#FFFFFF" strokeWidth="5" />
                  <path d="M0 96 L220 88" stroke="#FFFFFF" strokeWidth="4" />
                  <circle
                    cx="112"
                    cy="52"
                    r="34"
                    fill="#2563EB"
                    fillOpacity="0.1"
                    stroke="#2563EB"
                    strokeDasharray="4 3"
                    strokeWidth="1.2"
                  />
                </svg>

                <button
                  type="button"
                  onClick={() => setSelectedPin('you')}
                  className={`absolute left-[46%] top-[36%] -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full text-[10px] font-extrabold shadow-md cursor-pointer transition-transform ${
                    selectedPin === 'you'
                      ? 'bg-[#2563EB] text-white scale-105 ring-2 ring-white'
                      : 'bg-[#1E293B] text-white'
                  }`}
                >
                  4,9★
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPin('c1')}
                  className={`absolute left-[22%] top-[24%] -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full text-[9px] font-bold border shadow-sm cursor-pointer ${
                    selectedPin === 'c1'
                      ? 'bg-[#10B981] text-white border-[#10B981]'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  4,4★
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPin('c2')}
                  className={`absolute left-[76%] top-[28%] -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full text-[9px] font-bold border shadow-sm cursor-pointer ${
                    selectedPin === 'c2'
                      ? 'bg-[#10B981] text-white border-[#10B981]'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  4,6★
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPin('c3')}
                  className={`absolute left-[70%] top-[76%] -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-full text-[9px] font-bold border shadow-sm cursor-pointer ${
                    selectedPin === 'c3'
                      ? 'bg-[#10B981] text-white border-[#10B981]'
                      : 'bg-white text-slate-700 border-slate-300'
                  }`}
                >
                  4,2★
                </button>
              </div>

              <p className="text-[11px] font-semibold text-[#1E293B] truncate">
                {selectedPin === 'you'
                  ? c.yourShop
                  : `${activeComp?.label} (${activeComp?.rating}) · ${activeComp?.note}`}
              </p>
            </div>

            {/* Popularity Growth SVG Chart */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-3 flex flex-col justify-between space-y-2">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold text-[#1E293B] leading-tight">
                  {c.chartTitle}
                </span>
                <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-100 text-[#047857] text-[10px] font-extrabold tabular-nums shrink-0">
                  <TrendingUp className="w-3 h-3" aria-hidden="true" />
                  {c.chartDelta}
                </span>
              </div>

              <div className="bg-white rounded-lg border border-slate-200/80 p-2 h-32 flex flex-col justify-between">
                <svg viewBox="0 0 210 88" className="w-full h-24" aria-hidden="true">
                  <defs>
                    <linearGradient id="komeroArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <line x1="8" y1="20" x2="202" y2="20" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="8" y1="46" x2="202" y2="46" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="8" y1="72" x2="202" y2="72" stroke="#E2E8F0" strokeWidth="1" />

                  <path
                    d="M12 64 L52 60 L92 58 L132 54 L172 52 L198 50"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />

                  <path
                    d="M12 68 L52 56 L92 48 L132 34 L172 22 L198 12 L198 78 L12 78 Z"
                    fill="url(#komeroArea)"
                  />
                  <path
                    d="M12 68 L52 56 L92 48 L132 34 L172 22 L198 12"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="198" cy="12" r="4" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
                </svg>

                <div className="flex items-center justify-between text-[9px] font-semibold text-slate-500 px-1">
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    {c.chartLegendYou}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-0.5 bg-slate-400" />
                    {c.chartLegendLocal}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlighted Weekly Post Idea Card */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/55 p-3.5 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#1E293B]">
                <Sparkles className="w-4 h-4 text-[#2563EB] shrink-0" aria-hidden="true" />
                {c.ideaHeader}
              </p>
              <span className="px-2 py-0.5 rounded bg-white border border-blue-200 text-[10px] font-bold text-[#2563EB]">
                {activeIdea.badge}
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed bg-white rounded-lg border border-slate-200/80 p-3">
              {activeIdea.text}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setIdeaIdx((prev) => (prev + 1) % c.ideas.length);
                  setScheduled(false);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-[#1E293B] transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                {c.nextIdeaBtn}
              </button>
              <button
                type="button"
                onClick={() => setScheduled(true)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  scheduled
                    ? 'bg-[#10B981] text-white hover:bg-[#059669]'
                    : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                }`}
              >
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                {scheduled ? c.scheduledBtn : c.scheduleBtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
