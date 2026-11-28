import { useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Check,
  ChevronDown,
  Gift,
  Lock,
  MessageSquare,
  Minus,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  getPricingComparisonRows,
  getPricingFaq,
  getPricingPlans,
} from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { Link } from '../components/Router';

export function PricingPage() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].pricing;
  const pricingPlans = getPricingPlans(language);
  const comparisonRows = getPricingComparisonRows(language);
  const pricingFaq = getPricingFaq(language);

  const [cgvAccepted, setCgvAccepted] = useState(false);
  const [cgvWarning, setCgvWarning] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(pricingFaq[0]?.id ?? null);
  const cgvBoxRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleBlockedSubscribe = () => {
    setCgvWarning(true);
    cgvBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const checkbox = document.getElementById('cgv-consent-checkbox');
    checkbox?.focus();
  };

  return (
    <div>
      {/* 1. EN-TÊTE TARIFS CHF & OFFRE 7 JOURS GRATUITS */}
      <section className="bg-white pt-10 pb-12 lg:pt-16 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm font-semibold text-[#2563EB]">{copy.kicker}</p>
            <h1 className="text-[clamp(2rem,3.6vw,3.2rem)] font-extrabold tracking-tight text-[#1E293B] leading-[1.1] text-balance">
              {copy.h1}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{copy.subtitle}</p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 rounded-xl border border-emerald-200 bg-emerald-50/90 px-5 py-4 flex items-center justify-center gap-3 text-center sm:text-left">
            <Sparkles className="w-5 h-5 text-[#10B981] shrink-0" aria-hidden="true" />
            <p className="text-sm sm:text-base font-bold text-[#065F46]">{copy.launchBanner}</p>
          </div>
        </div>
      </section>

      {/* 2. COMPARATIF 2 COLONNES CHF + CASE LÉGALE OBLIGATOIRE AVANT STRIPE */}
      <section className="bg-[#F8FAFC] py-12 lg:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Case à cocher légale obligatoire (non pré-cochée) */}
          <div
            ref={cgvBoxRef}
            className={`max-w-3xl mx-auto rounded-2xl border p-5 sm:p-6 transition-colors ${
              cgvAccepted
                ? 'border-emerald-300 bg-emerald-50/70'
                : cgvWarning
                  ? 'border-red-400 bg-red-50/80'
                  : 'border-slate-200 bg-white'
            }`}
          >
            <label
              htmlFor="cgv-consent-checkbox"
              className="flex items-start gap-3.5 cursor-pointer select-none"
            >
              <input
                id="cgv-consent-checkbox"
                type="checkbox"
                checked={cgvAccepted}
                onChange={(e) => {
                  setCgvAccepted(e.target.checked);
                  if (e.target.checked) setCgvWarning(false);
                }}
                className="mt-1 h-5 w-5 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB] shrink-0 cursor-pointer"
              />
              <span className="text-sm sm:text-base text-[#1E293B] leading-relaxed">
                <strong className="font-semibold">
                  {copy.cgvPrefix}
                  <Link
                    to="/cgv"
                    className="text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8]"
                  >
                    {copy.cgvLinkText}
                  </Link>
                </strong>
                {copy.cgvSuffix}
              </span>
            </label>

            {cgvWarning && !cgvAccepted && (
              <p
                role="alert"
                className="mt-3 pl-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-red-700"
              >
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                {copy.cgvWarning}
              </p>
            )}

            {cgvAccepted && (
              <p
                role="status"
                className="mt-3 pl-8 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#047857]"
              >
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                {copy.cgvAccepted}
              </p>
            )}
          </div>

          {/* 2-Column CHF Pricing Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between bg-white ${
                  plan.popular
                    ? 'border-2 border-[#2563EB] shadow-[0_24px_60px_-28px_rgba(37,99,235,0.28)]'
                    : 'border border-slate-200'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#2563EB]">{plan.objective}</p>
                      <h2 className="text-2xl font-extrabold text-[#1E293B] mt-1">{plan.name}</h2>
                    </div>
                    {plan.badgeLabel && (
                      <span className="px-3 py-1 rounded-md bg-[#10B981] text-white text-xs font-bold whitespace-nowrap shrink-0">
                        {plan.badgeLabel}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-y border-slate-200/80 py-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#1E293B] tabular-nums">
                        {plan.price}
                      </span>
                      <span className="text-sm font-medium text-slate-500">{plan.period}</span>
                    </div>
                    <span className="text-xs font-bold text-[#047857] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                      {copy.trialBadge}
                    </span>
                  </div>

                  {/* Bonus Starter Pack Highlight */}
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/90 p-4 space-y-1">
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-[#047857]">
                      <Gift className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{plan.bonusTitle}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed pl-6">
                      {plan.bonusDetail}
                    </p>
                  </div>

                  <ul className="space-y-3.5 text-sm sm:text-base text-slate-700">
                    {plan.features.map((feat, idx) => {
                      const targetPath = plan.featureLinks?.[idx];
                      return (
                        <li key={feat} className="flex items-start gap-3">
                          <Check
                            className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          {targetPath ? (
                            <Link
                              to={targetPath}
                              className="text-slate-700 hover:text-[#2563EB] underline decoration-slate-300 hover:decoration-[#2563EB] underline-offset-4 transition-colors"
                            >
                              {feat}
                            </Link>
                          ) : (
                            <span>{feat}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-8 space-y-2.5">
                  {cgvAccepted ? (
                    <a
                      href={plan.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-plan-cta={plan.id}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm sm:text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
                    >
                      <span>{plan.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={handleBlockedSubscribe}
                      data-plan-cta={plan.id}
                      aria-describedby="cgv-consent-checkbox"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-200 hover:bg-slate-300/90 text-slate-700 text-sm sm:text-base font-bold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
                    >
                      <Lock className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{plan.ctaLabel}</span>
                    </button>
                  )}

                  <p className="text-center text-xs text-slate-500">
                    {cgvAccepted ? copy.stripeRedirectNote : copy.stripeLockedNote}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-1.5 text-center max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-700 font-medium flex flex-wrap items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>{copy.reassuranceStripe}</span>
            </p>
            <p className="text-xs text-slate-500">{copy.vatNote}</p>
          </div>

          {/* TABLEAU COMPARATIF LIGNE PAR LIGNE */}
          <div className="max-w-5xl mx-auto pt-4 space-y-5">
            <div className="text-center space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold text-[#2563EB]">
                {copy.comparisonKicker}
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1E293B]">
                {copy.comparisonH2}
              </h2>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white overflow-x-auto shadow-[0_12px_32px_-24px_rgba(30,41,59,0.2)]">
              <table className="w-full text-left border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                    <th
                      scope="col"
                      className="py-4 px-5 text-xs sm:text-sm font-bold text-[#1E293B]"
                    >
                      {copy.comparisonFeatureCol}
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-4 text-center text-xs sm:text-sm font-bold text-[#1E293B] whitespace-nowrap tabular-nums"
                    >
                      {copy.comparisonEssentielCol}
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-4 text-center text-xs sm:text-sm font-bold text-[#2563EB] bg-blue-50/50 whitespace-nowrap tabular-nums"
                    >
                      {copy.comparisonPremiumCol}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                  {comparisonRows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                      <th scope="row" className="py-3.5 px-5 font-medium text-[#1E293B]">
                        {row.path ? (
                          <Link
                            to={row.path}
                            className="hover:text-[#2563EB] underline decoration-slate-300 hover:decoration-[#2563EB] underline-offset-4 transition-colors"
                          >
                            {row.label}
                          </Link>
                        ) : (
                          row.label
                        )}
                      </th>
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.essentiel === 'string' ? (
                          <span className="inline-flex items-center rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-[#047857] whitespace-nowrap">
                            {row.essentiel}
                          </span>
                        ) : row.essentiel ? (
                          <span className="inline-flex items-center justify-center">
                            <Check
                              className="w-5 h-5 text-[#10B981]"
                              aria-label={copy.comparisonIncluded}
                            />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <Minus
                              className="w-4 h-4 text-slate-300"
                              aria-label={copy.comparisonNotIncluded}
                            />
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-blue-50/30">
                        {typeof row.premium === 'string' ? (
                          <span className="inline-flex items-center rounded-md bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-xs font-bold text-[#047857] whitespace-nowrap">
                            {row.premium}
                          </span>
                        ) : row.premium ? (
                          <span className="inline-flex items-center justify-center">
                            <Check
                              className="w-5 h-5 text-[#10B981]"
                              aria-label={copy.comparisonIncluded}
                            />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center">
                            <Minus
                              className="w-4 h-4 text-slate-300"
                              aria-label={copy.comparisonNotIncluded}
                            />
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ TARIFAIRE & ENGAGEMENT */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-2.5 mb-10">
            <p className="text-sm font-semibold text-[#2563EB]">{copy.faqKicker}</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1E293B]">
              {copy.faqH2}
            </h2>
          </div>

          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white overflow-hidden">
            {pricingFaq.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`pricing-faq-${item.id}`}
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2563EB]"
                    >
                      <span className="text-base font-bold text-[#1E293B]">{item.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#2563EB]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={`pricing-faq-${item.id}`}
                      className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* 4. ENCART D'AIDE -> /contact */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#1E293B] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-[#1E293B]">{copy.helpTitle}</h3>
                <p className="text-sm text-slate-600">{copy.helpBody}</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#1E293B] bg-white hover:bg-slate-50 text-[#1E293B] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              {copy.helpCta}
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
