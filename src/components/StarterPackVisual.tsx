import { ASSETS } from '../data/komeroContent';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

/**
 * Crisp product visual combining a boutique countertop QR code stand (chevalet)
 * and a smartphone showing the interactive wheel game + 5-star Google review prompt.
 */
export function StarterPackVisual() {
  const { language } = useLanguage();
  const copy = TRANSLATIONS[language].home;

  return (
    <figure className="w-full max-w-[440px] mx-auto flex flex-col items-center">
      <div
        role="img"
        aria-label={copy.starterVisualAria}
        className="relative w-full py-6 px-3 sm:px-5 flex items-end justify-center gap-3 sm:gap-5 select-none"
      >
        {/* Subtle countertop ground shadow */}
        <div
          aria-hidden="true"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[88%] h-5 rounded-full bg-slate-900/8 blur-md"
        />

        {/* LEFT: Countertop QR Code Stand */}
        <div className="relative z-10 flex flex-col items-center -rotate-2 shrink-0">
          <div className="w-[144px] sm:w-[162px] rounded-t-2xl rounded-b-md border-2 border-[#1E293B] bg-white shadow-[0_14px_30px_-14px_rgba(30,41,59,0.32)] overflow-hidden">
            <div className="relative h-[68px] sm:h-[74px] bg-gradient-to-br from-[#10B981] to-[#059669] flex flex-col items-center justify-end overflow-hidden pt-2">
              <span className="relative z-10 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-white/95 mb-1">
                {copy.starterVisualScan}
              </span>
              <svg
                viewBox="0 0 120 60"
                className="w-[96px] sm:w-[106px] h-auto -mb-1"
                aria-hidden="true"
              >
                <g transform="translate(60,60)">
                  <path d="M0,0 L-52,0 A52,52 0 0,1 -36.8,-36.8 Z" fill="#F59E0B" />
                  <path d="M0,0 L-36.8,-36.8 A52,52 0 0,1 0,-52 Z" fill="#EF4444" />
                  <path d="M0,0 L0,-52 A52,52 0 0,1 36.8,-36.8 Z" fill="#2563EB" />
                  <path d="M0,0 L36.8,-36.8 A52,52 0 0,1 52,0 Z" fill="#34D399" />
                  <circle cx="0" cy="0" r="52" fill="none" stroke="#1E293B" strokeWidth="3.5" />
                  <circle cx="0" cy="0" r="10" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2.5" />
                </g>
                <polygon points="60,12 54,2 66,2" fill="#FBBF24" stroke="#1E293B" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="p-3 sm:p-3.5 bg-white flex flex-col items-center gap-2">
              <div className="relative w-[92px] h-[92px] sm:w-[104px] sm:h-[104px] p-1.5 rounded-lg border border-slate-200 bg-white">
                <svg viewBox="0 0 29 29" className="w-full h-full" aria-hidden="true">
                  <rect x="0" y="0" width="7" height="7" rx="1" fill="#1E293B" />
                  <rect x="1.2" y="1.2" width="4.6" height="4.6" rx="0.5" fill="#FFFFFF" />
                  <rect x="2.3" y="2.3" width="2.4" height="2.4" rx="0.3" fill="#1E293B" />
                  <rect x="22" y="0" width="7" height="7" rx="1" fill="#1E293B" />
                  <rect x="23.2" y="1.2" width="4.6" height="4.6" rx="0.5" fill="#FFFFFF" />
                  <rect x="24.3" y="2.3" width="2.4" height="2.4" rx="0.3" fill="#1E293B" />
                  <rect x="0" y="22" width="7" height="7" rx="1" fill="#1E293B" />
                  <rect x="1.2" y="23.2" width="4.6" height="4.6" rx="0.5" fill="#FFFFFF" />
                  <rect x="2.3" y="24.3" width="2.4" height="2.4" rx="0.3" fill="#1E293B" />
                  <rect x="9" y="1" width="2" height="2" fill="#1E293B" />
                  <rect x="13" y="1" width="2" height="2" fill="#1E293B" />
                  <rect x="17" y="1" width="2" height="2" fill="#1E293B" />
                  <rect x="11" y="3" width="2" height="2" fill="#1E293B" />
                  <rect x="15" y="3" width="2" height="2" fill="#1E293B" />
                  <rect x="19" y="3" width="1.5" height="2" fill="#1E293B" />
                  <rect x="9" y="5" width="2" height="2" fill="#1E293B" />
                  <rect x="13" y="5" width="3" height="2" fill="#1E293B" />
                  <rect x="18" y="5" width="2" height="2" fill="#1E293B" />
                  <rect x="1" y="9" width="2" height="2" fill="#1E293B" />
                  <rect x="5" y="9" width="2" height="2" fill="#1E293B" />
                  <rect x="3" y="11" width="2" height="2" fill="#1E293B" />
                  <rect x="1" y="13" width="2" height="2" fill="#1E293B" />
                  <rect x="5" y="13" width="2" height="2" fill="#1E293B" />
                  <rect x="3" y="15" width="2" height="2" fill="#1E293B" />
                  <rect x="1" y="18" width="2" height="2" fill="#1E293B" />
                  <rect x="5" y="18" width="2" height="2" fill="#1E293B" />
                  <rect x="22" y="9" width="2" height="2" fill="#1E293B" />
                  <rect x="26" y="9" width="2" height="2" fill="#1E293B" />
                  <rect x="24" y="11" width="2" height="2" fill="#1E293B" />
                  <rect x="22" y="14" width="2" height="2" fill="#1E293B" />
                  <rect x="26" y="14" width="2" height="2" fill="#1E293B" />
                  <rect x="24" y="17" width="2" height="2" fill="#1E293B" />
                  <rect x="22" y="20" width="2" height="2" fill="#1E293B" />
                  <rect x="26" y="20" width="2" height="2" fill="#1E293B" />
                  <rect x="9" y="22" width="2" height="2" fill="#1E293B" />
                  <rect x="13" y="22" width="2" height="2" fill="#1E293B" />
                  <rect x="17" y="22" width="2" height="2" fill="#1E293B" />
                  <rect x="21" y="23" width="2" height="2" fill="#1E293B" />
                  <rect x="25" y="23" width="3" height="2" fill="#1E293B" />
                  <rect x="11" y="25" width="2" height="3" fill="#1E293B" />
                  <rect x="15" y="25" width="2" height="2" fill="#1E293B" />
                  <rect x="19" y="26" width="2" height="2" fill="#1E293B" />
                  <rect x="23" y="26" width="2" height="2" fill="#1E293B" />
                  <rect x="27" y="26" width="2" height="2" fill="#1E293B" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-7 h-7 rounded-md bg-white p-0.5 shadow-xs border border-slate-200 flex items-center justify-center">
                    <img
                      src={ASSETS.logoIcon}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-bold text-[#1E293B] tracking-tight">
                {copy.starterVisualGift}
              </p>
            </div>
          </div>

          <div className="w-[156px] sm:w-[176px] h-6 rounded-b-lg rounded-t-xs bg-gradient-to-b from-slate-100 to-slate-200 border-2 border-[#1E293B] -mt-0.5 shadow-sm flex items-center justify-center">
            <span className="w-16 h-1 rounded-full bg-slate-300" aria-hidden="true" />
          </div>
        </div>

        {/* RIGHT: Smartphone with Interactive Wheel + Google 5★ Card */}
        <div className="relative z-20 w-[166px] sm:w-[186px] rounded-[2rem] bg-[#0F172A] p-2 shadow-[0_24px_48px_-16px_rgba(15,23,42,0.48)] ring-1 ring-slate-700 shrink-0">
          <div className="w-14 h-3 bg-[#0F172A] rounded-b-lg mx-auto -mb-1.5 relative z-20 flex items-center justify-center">
            <span className="w-7 h-1 rounded-full bg-slate-700" aria-hidden="true" />
          </div>

          <div className="rounded-[1.5rem] overflow-hidden bg-gradient-to-b from-[#11223E] via-[#1B3A73] to-[#2563EB] px-3 pt-4 pb-3 flex flex-col items-center gap-3">
            <div className="text-center leading-tight">
              <p className="text-[11px] sm:text-xs font-extrabold text-white tracking-tight">
                {copy.starterVisualWheelTitle}
              </p>
              <p className="text-[9px] text-blue-200 font-medium mt-0.5">
                {copy.starterVisualWheelSub}
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                className="w-[104px] h-[104px] sm:w-[116px] sm:h-[116px] drop-shadow-md"
                aria-hidden="true"
              >
                <g transform="translate(60,60)">
                  <path d="M0,0 L0,-50 A50,50 0 0,1 35.35,-35.35 Z" fill="#FACC15" />
                  <path d="M0,0 L35.35,-35.35 A50,50 0 0,1 50,0 Z" fill="#10B981" />
                  <path d="M0,0 L50,0 A50,50 0 0,1 35.35,35.35 Z" fill="#EF4444" />
                  <path d="M0,0 L35.35,35.35 A50,50 0 0,1 0,50 Z" fill="#2563EB" />
                  <path d="M0,0 L0,50 A50,50 0 0,1 -35.35,35.35 Z" fill="#FACC15" />
                  <path d="M0,0 L-35.35,35.35 A50,50 0 0,1 -50,0 Z" fill="#10B981" />
                  <path d="M0,0 L-50,0 A50,50 0 0,1 -35.35,-35.35 Z" fill="#EF4444" />
                  <path d="M0,0 L-35.35,-35.35 A50,50 0 0,1 0,-50 Z" fill="#3B82F6" />
                  <circle cx="0" cy="0" r="50" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                  <circle cx="0" cy="0" r="11" fill="#FFFFFF" />
                  <circle cx="0" cy="0" r="5" fill="#10B981" />
                </g>
                <polygon
                  points="60,18 53,5 67,5"
                  fill="#EF4444"
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="w-full rounded-xl bg-white px-3 py-2.5 shadow-sm text-center space-y-1">
              <p className="text-sm font-extrabold tracking-tight leading-none">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </p>
              <div
                className="flex items-center justify-center gap-0.5 text-[#F59E0B] text-sm leading-none"
                aria-hidden="true"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-[9px] font-semibold text-slate-600">
                {copy.starterVisualGoogleSub}
              </p>
            </div>
          </div>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs sm:text-sm font-semibold text-slate-600">
        {copy.starterVisualCaption}
      </figcaption>
    </figure>
  );
}
