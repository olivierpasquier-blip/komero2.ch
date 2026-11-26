import { ArrowRight, CheckCircle2, Gift, MessageSquare, QrCode, ShieldCheck, Star } from 'lucide-react';
import { ASSETS, getStarterPackSteps } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { ResilientImage } from '../components/DeviceFrames';
import { Link } from '../components/Router';

const BENEFIT_ICONS = [
  { icon: Star, boxClass: 'bg-blue-50 text-[#2563EB]' },
  { icon: MessageSquare, boxClass: 'bg-emerald-50 text-[#047857]' },
  { icon: ShieldCheck, boxClass: 'bg-emerald-50 text-[#047857]' },
] as const;

export function LuckyWheelPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].luckyWheel;
  const starterSteps = getStarterPackSteps(language);

  return (
    <div>
      {/* 1. HERO ROUE DE LA CHANCE */}
      <section className="bg-white pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#047857]">
              <Gift className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>{copy.kicker}</span>
            </p>
            <h1 className="text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.1] text-balance">
              {copy.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{copy.subtitle}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
              >
                {copy.primaryCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact?motif=roue"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-sm sm:text-base font-semibold text-[#1E293B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRÉSENTATION VISUELLE CÔTE À CÔTE */}
      <section className="bg-[#F8FAFC] py-14 lg:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200/90 bg-white overflow-hidden shadow-[0_20px_50px_-28px_rgba(17,34,62,0.16)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80">
                <ResilientImage
                  src={ASSETS.roueChance}
                  alt={copy.imageAlt}
                  loading="lazy"
                  className="w-full max-w-[420px] h-auto rounded-xl object-contain"
                />
              </div>

              <div className="lg:col-span-7 p-7 sm:p-10 space-y-6">
                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-[#047857]">{copy.howKicker}</p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E293B] text-balance">
                    {copy.howH2}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {copy.howBody}
                  </p>
                </div>

                <ol className="space-y-3.5">
                  {starterSteps.map((item) => (
                    <li
                      key={item.step}
                      className="flex items-start gap-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/90 p-4"
                    >
                      <span className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-[#047857] text-xs font-extrabold flex items-center justify-center shrink-0 tabular-nums">
                        {item.step}
                      </span>
                      <div className="space-y-0.5">
                        <h3 className="text-sm sm:text-base font-bold text-[#1E293B]">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#047857]">
                  <QrCode className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                  <span>{copy.smsBanner}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES 3 BÉNÉFICES CLÉS */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {copy.benefits.map((benefit, idx) => {
              const cfg = BENEFIT_ICONS[idx] ?? BENEFIT_ICONS[0];
              const Icon = cfg.icon;
              return (
                <article
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-3"
                >
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${cfg.boxClass}`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-bold text-[#1E293B]">{benefit.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. MAILLAGE INTERNE */}
      <section
        aria-label={copy.complementaryAria}
        className="bg-white border-t border-slate-200/90 py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl space-y-1.5">
            <p className="text-xs font-semibold text-[#2563EB]">{copy.complementaryKicker}</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
              {copy.complementaryH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {copy.complementaryCards.map((card) => (
              <article
                key={card.to}
                className="rounded-2xl border border-slate-200 hover:border-[#2563EB] bg-[#F8FAFC] p-5 flex flex-col justify-between gap-4 transition-colors"
              >
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-slate-500">{card.meta}</p>
                  <h3 className="text-base font-bold text-[#1E293B]">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.body}</p>
                </div>
                <Link
                  to={card.to}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DOUBLE CTA FINAL */}
      <section className="bg-[#F8FAFC] border-t border-slate-200/80 py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                <span>{copy.finalKicker}</span>
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">{copy.finalH2}</h2>
              <p className="text-sm sm:text-base text-slate-600">{copy.finalBody}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {copy.finalPricingCta}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact?motif=roue"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {copy.finalDemoCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
