import React from 'react';
import { ArrowRight, CheckCircle2, Gift, XCircle } from 'lucide-react';
import { getAdjacentFeatures } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import type { FeatureRoutePath } from '../lib/seo';
import { Link } from './Router';

export interface FeaturePageTemplateProps {
  currentPath: FeatureRoutePath;
  moduleNumber: string;
  tierLabel: string;
  tierNote: string;
  headline: string;
  subtitle: string;
  problemTitle: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionPoints: string[];
  heroVisual: React.ReactNode;
  mockup: React.ReactNode;
  children?: React.ReactNode;
}

export function FeaturePageTemplate({
  currentPath,
  moduleNumber,
  tierLabel,
  tierNote,
  headline,
  subtitle,
  problemTitle,
  problemPoints,
  solutionTitle,
  solutionPoints,
  heroVisual,
  mockup,
  children,
}: FeaturePageTemplateProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].featureTemplate;
  const homeCopy = TRANSLATIONS[language].home;
  const { previous, next } = getAdjacentFeatures(currentPath, language);

  return (
    <div>
      {/* 1. HERO BENEFICE CLIENT + VISUEL INTERACTIF DOUBLE ÉCRAN */}
      <section className="bg-white pt-10 pb-12 lg:pt-14 lg:pb-16 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm font-semibold text-[#047857]">
                {t.modulePrefix} {moduleNumber} · {t.formulaPrefix} {tierLabel} · {tierNote}
              </p>
              <h1 className="text-[clamp(1.95rem,3.1vw,2.9rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.1] text-balance">
                {headline}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{subtitle}</p>

              {/* Strict CTA Color Rule: Blue = /tarifs (Subscribe) | Outline Midnight = /contact (Demo) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
                >
                  {homeCopy.primaryCta}
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-sm sm:text-base font-semibold text-[#1E293B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1E293B]"
                >
                  {homeCopy.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">{heroVisual}</div>
          </div>
        </div>
      </section>

      {/* 2. BLOC PROBLÈME / SOLUTION */}
      <section
        aria-label={t.beforeAfterAria}
        className="bg-[#F8FAFC] py-12 lg:py-16 border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
              <p className="text-xs font-semibold text-slate-500">{t.problemKicker}</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">{problemTitle}</h2>
              <ul className="space-y-3 text-sm sm:text-base text-slate-600">
                {problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-slate-400 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-8 space-y-4">
              <p className="text-xs font-semibold text-[#047857]">{t.solutionKicker}</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">{solutionTitle}</h2>
              <ul className="space-y-3 text-sm sm:text-base text-[#1E293B]">
                {solutionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 3. MOCKUP DOUBLE ÉCRAN PC / MOBILE */}
      <section className="bg-[#F8FAFC] pb-14 lg:pb-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>{mockup}</div>
        </div>
      </section>

      {/* 4. CONTENU MÉTIER SPÉCIFIQUE */}
      {children}

      {/* 5. MAILLAGE INTERNE : 3 FONCTIONNALITÉS COMPLÉMENTAIRES */}
      <section
        aria-label={t.complementaryAria}
        className="bg-white border-t border-slate-200/90 py-12 lg:py-14"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#2563EB]">{t.complementaryKicker}</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">
                {t.complementaryH2}
              </h2>
            </div>
            <Link
              to="/tarifs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] whitespace-nowrap shrink-0"
            >
              {t.comparePlansLink}
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="rounded-2xl border border-slate-200 hover:border-[#2563EB] bg-[#F8FAFC] p-5 flex flex-col justify-between gap-4 transition-colors">
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-slate-500">
                  {t.moduleLabel} {previous.number} · {t.formulaPrefix} {previous.tierLabel}
                </p>
                <h3 className="text-base font-bold text-[#1E293B]">{previous.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{previous.hook}</p>
              </div>
              <Link
                to={previous.path}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
              >
                <span>
                  {t.discoverPrefix} {previous.title}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-2xl border border-slate-200 hover:border-[#2563EB] bg-[#F8FAFC] p-5 flex flex-col justify-between gap-4 transition-colors">
              <div className="space-y-1.5">
                <p className="text-xs font-medium text-slate-500">
                  {t.moduleLabel} {next.number} · {t.formulaPrefix} {next.tierLabel}
                </p>
                <h3 className="text-base font-bold text-[#1E293B]">{next.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{next.hook}</p>
              </div>
              <Link
                to={next.path}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
              >
                <span>
                  {t.discoverPrefix} {next.title}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </article>

            <article className="rounded-2xl border border-emerald-200 hover:border-[#10B981] bg-emerald-50/50 p-5 flex flex-col justify-between gap-4 transition-colors">
              <div className="space-y-1.5">
                <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
                  <Gift className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                  <span>{t.wheelBonusBadge}</span>
                </p>
                <h3 className="text-base font-bold text-[#1E293B]">{t.wheelBonusTitle}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.wheelBonusDesc}
                </p>
              </div>
              <Link
                to="/roue-de-la-chance"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#047857] hover:text-[#065F46] transition-colors"
              >
                <span>{t.wheelBonusCta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* 6. DOUBLE CTA FINAL UNIFIÉ (/tarifs & /contact) */}
      <section className="bg-[#F8FAFC] border-t border-slate-200/80 py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold text-[#047857]">{t.finalCtaKicker}</p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B]">{t.finalCtaH2}</h2>
              <p className="text-sm sm:text-base text-slate-600">{t.finalCtaBody}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {t.finalCtaPricing}
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {t.finalCtaDemo}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
