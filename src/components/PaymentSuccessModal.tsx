import { useEffect } from 'react';
import { CheckCircle2, Clock, Gift, Mail, Phone, ShieldCheck, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';
import { useRouter } from './Router';

export function PaymentSuccessModal() {
  const { path, search, navigate } = useRouter();
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].paymentModal;

  const params = new URLSearchParams(search);
  const isPaymentSuccess = params.get('paiement') === 'ok';

  const handleClose = () => {
    const nextParams = new URLSearchParams(search);
    nextParams.delete('paiement');
    const qs = nextParams.toString();
    navigate(`${path}${qs ? `?${qs}` : ''}`);
  };

  useEffect(() => {
    if (!isPaymentSuccess) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  if (!isPaymentSuccess) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-success-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/60 backdrop-blur-xs print:hidden"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-[0_32px_80px_-24px_rgba(15,23,42,0.45)] overflow-hidden">
        <div className="bg-[#1E293B] text-white px-6 py-5 sm:px-8 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <span className="w-10 h-10 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-semibold text-emerald-400">{copy.kicker}</p>
              <h2
                id="payment-success-title"
                className="text-lg sm:text-xl font-extrabold tracking-tight text-white mt-0.5 text-balance"
              >
                {copy.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label={copy.closeAria}
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/70 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-5">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {copy.introPrefix}
            <strong className="text-[#047857]">{copy.introBonus}</strong>
            {copy.introAnd}
            <strong className="text-[#047857]">{copy.introTrial}</strong>
            {copy.introSuffix}
          </p>

          <ul className="space-y-3 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5 text-sm text-[#1E293B]">
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>{copy.bullet1Strong}</strong> : {copy.bullet1Text}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Gift className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>{copy.bullet2Strong}</strong> : {copy.bullet2Text}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>{copy.bullet3Strong}</strong> : {copy.bullet3Text}
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs sm:text-sm text-slate-600">
            <a
              href={`tel:${SITE_CONFIG.contactPhoneE164}`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#1E293B] hover:text-[#2563EB] tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
              {SITE_CONFIG.contactPhoneDisplay}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-1.5 font-semibold text-[#2563EB] hover:underline"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {SITE_CONFIG.contactEmail}
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleClose}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2563EB]"
            >
              {copy.continueBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
