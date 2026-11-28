import {
  ArrowRight,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Gift,
  MapPin,
  MessageSquare,
  PhoneMissed,
  QrCode,
  ShoppingBag,
  Star,
  Store,
  UserPlus,
  Zap,
} from 'lucide-react';
import { getStarterPackSteps } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { Link } from '../components/Router';
import { StarterPackVisual } from '../components/StarterPackVisual';
import { GoogleProfileShowcase } from '../components/mockups/GoogleProfileShowcase';
import { HeroCompositeMockup } from '../components/mockups/HeroCompositeMockup';

const STEP_ICONS = [QrCode, UserPlus, MessageSquare] as const;

const LEVER_ICONS = {
  reviews: Star,
  gbp: Store,
  social: Camera,
  missedCalls: PhoneMissed,
  smsFlash: Zap,
  marketWatch: Compass,
} as const;

export function HomePage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].home;
  const starterSteps = getStarterPackSteps(language);

  return (
    <div>
      {/* 1. HERO SECTION — COMPRÉHENSION EN 5 SECONDES */}
      <section className="bg-white pt-10 pb-14 lg:pt-14 lg:pb-18 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center rounded-xl border border-emerald-200 bg-emerald-50/95 px-3.5 py-2 text-xs sm:text-sm font-semibold text-[#047857]">
                <span>{copy.heroBadge}</span>
              </div>

              <h1 className="text-[clamp(2rem,3.3vw,3.15rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.08] text-balance">
                {copy.h1}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                {copy.baseline}
              </p>

              {/* 3 pilules visuelles clés */}
              <ul className="flex flex-wrap items-center gap-2 pt-0.5">
                {copy.heroHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-1.5 text-xs font-semibold text-[#1E293B]"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-[#10B981] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Double CTA : Bleu -> /tarifs | Outline Midnight -> /contact */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
                >
                  {copy.primaryCta}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] hover:bg-slate-50 bg-white text-[#1E293B] text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
                >
                  {copy.secondaryCta}
                </Link>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 pt-1">{copy.sectorsLine}</p>
            </div>

            <div className="lg:col-span-6">
              <HeroCompositeMockup />
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU DE RÉASSURANCE */}
      <section aria-label={copy.reassuranceAria} className="bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#1E293B]">
            {copy.reassuranceItems.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                  {item}
                </span>
                {index < copy.reassuranceItems.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300 hidden sm:inline">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GRILLE DES 6 LEVIERS DE RÉFÉRENCEMENT & FIDÉLISATION */}
      <section className="bg-white py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-12">
            <div className="max-w-2xl space-y-2.5">
              <p className="text-sm font-semibold text-[#2563EB]">{copy.leversKicker}</p>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
                {copy.leversH2}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {copy.leversSubtitle}
              </p>
            </div>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] whitespace-nowrap shrink-0"
            >
              {copy.leversPricingLink}
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.levers.map((lever) => {
              const Icon = LEVER_ICONS[lever.icon];
              const isEssential = lever.tierId === 'essentiel';
              return (
                <article
                  key={lever.id}
                  className="group rounded-2xl border border-slate-200 bg-[#F8FAFC]/70 hover:bg-white hover:border-[#2563EB]/60 p-6 flex flex-col justify-between gap-5 transition-all hover:shadow-[0_16px_36px_-22px_rgba(37,99,235,0.28)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                            isEssential
                              ? 'bg-blue-50 border-blue-200/80 text-[#2563EB]'
                              : 'bg-emerald-50 border-emerald-200/80 text-[#047857]'
                          }`}
                        >
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </span>
                        <span className="text-xs font-extrabold text-slate-400 tabular-nums">
                          {lever.number}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-bold px-2.5 py-1 rounded-md border whitespace-nowrap tabular-nums ${
                          isEssential
                            ? 'bg-white border-slate-200 text-[#1E293B]'
                            : 'bg-slate-900 border-slate-900 text-white'
                        }`}
                      >
                        {lever.tierLabel}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-extrabold text-[#1E293B] leading-snug">
                        <Link
                          to={lever.path}
                          className="hover:text-[#2563EB] transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {lever.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{lever.description}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 space-y-2.5">
                    <p className="text-xs font-semibold text-[#047857] flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" aria-hidden="true" />
                      <span>{lever.proof}</span>
                    </p>
                    <Link
                      to={lever.path}
                      aria-label={`${copy.leversDiscoverPrefix} ${lever.title}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                    >
                      <span>
                        {copy.leversDiscoverPrefix} {lever.title}
                      </span>
                      <ArrowRight
                        className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <GoogleProfileShowcase />
        </div>
      </section>

      {/* 3. SECTION STARTER PACK CONTACTS & AVIS GOOGLE */}
      <section
        id="starter-pack"
        className="bg-[#F8FAFC] py-16 lg:py-22 border-y border-slate-200/80 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_20px_50px_-32px_rgba(30,41,59,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-5 bg-white p-7 sm:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80">
                <StarterPackVisual />
              </div>

              <div className="lg:col-span-7 bg-[#F8FAFC]/60 p-7 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#10B981] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-2xs">
                    <Gift className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {copy.starterBadge}
                  </span>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
                    {copy.starterTitle}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {copy.starterSubtitle}
                  </p>
                </div>

                <ol className="space-y-3.5">
                  {starterSteps.map((item, idx) => {
                    const StepIcon = STEP_ICONS[idx] ?? QrCode;
                    return (
                      <li
                        key={item.step}
                        className="flex items-center gap-4 rounded-xl bg-white border border-slate-200/90 px-4 py-4 sm:px-5 shadow-[0_6px_18px_-12px_rgba(30,41,59,0.16)]"
                      >
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] tabular-nums w-7 text-center shrink-0">
                          {item.step}
                        </span>

                        <span className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#1E293B] flex items-center justify-center shrink-0">
                          <StepIcon className="w-5 h-5" aria-hidden="true" />
                        </span>

                        <div className="min-w-0 space-y-0.5">
                          <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-center text-xs sm:text-sm font-semibold text-[#065F46]">
                  {copy.starterBanner}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <Link
                    to="/roue-de-la-chance"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    {copy.starterLinkWheel}
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/tarifs"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E293B] hover:text-[#2563EB] transition-colors"
                  >
                    {copy.starterLinkPricing}
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3B. PREUVE SOCIALE — EXEMPLES D'USAGE EN BOUTIQUE */}
      <section className="bg-white py-16 lg:py-22 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2.5 mb-10 lg:mb-12">
            <p className="text-sm font-semibold text-[#047857]">{copy.fieldCasesKicker}</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1E293B] leading-[1.12] text-balance">
              {copy.fieldCasesH2}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {copy.fieldCasesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copy.fieldCases.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-bold text-[#047857]">
                      {copy.fieldCasesBadge}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" aria-hidden="true" />
                      {item.city}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1E293B] leading-snug">
                      {item.business}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      {item.quote}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                  <p className="text-xs text-slate-600 flex items-start gap-2 leading-snug">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item.routine}</span>
                  </p>
                  <p className="text-xs font-semibold text-[#065F46] bg-emerald-50 border border-emerald-200/80 rounded-lg px-3 py-2 flex items-center gap-1.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 text-[#10B981] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item.resultTag}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Encart démarrage immédiat : essai gratuit 7 jours ou démo 5 minutes */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 sm:px-6 sm:py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <p className="text-sm font-medium text-[#1E293B] leading-relaxed">
              {copy.readyPrompt}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                {copy.readyTrialCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                {copy.readyDemoCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BANDEAU FINAL D'ORIENTATION VERS /tarifs ET /contact */}
      <section aria-label={copy.bottomAria} className="bg-white py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-10">
            <p className="text-sm font-semibold text-[#047857]">{copy.bottomKicker}</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E293B] text-balance">
              {copy.bottomH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            <article className="rounded-2xl border-2 border-[#2563EB] bg-white p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold text-[#047857]">{copy.buyTagline}</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                  {copy.buyTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {copy.buyBody}
                </p>
              </div>
              <div>
                <Link
                  to="/tarifs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap"
                >
                  {copy.buyCta}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 sm:p-9 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-[#1E293B] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-semibold text-slate-500">{copy.demoTagline}</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                  {copy.demoTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {copy.demoBody}
                </p>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm sm:text-base font-semibold transition-colors whitespace-nowrap"
                >
                  {copy.demoCta}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
