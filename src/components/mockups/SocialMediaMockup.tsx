import { useState } from 'react';
import { ASSETS } from '../../data/komeroContent';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS } from '../../i18n/mockupTranslations';
import { ResilientImage } from '../DeviceFrames';

const PRESET_IMAGES: Record<'brioche' | 'vin', string> = {
  brioche: ASSETS.socialBrioche,
  vin: ASSETS.socialWine,
};

export function SocialMediaMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].socialMedia;
  const [activeId, setActiveId] = useState<'brioche' | 'vin'>('brioche');

  const preset = copy.presets.find((item) => item.id === activeId) ?? copy.presets[0];
  const imageSrc = PRESET_IMAGES[preset.id];

  return (
    <div className="space-y-6">
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
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <figure
        role="tabpanel"
        aria-label={preset.label}
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-24px_rgba(30,41,59,0.22)] overflow-hidden"
      >
        <ResilientImage
          key={imageSrc}
          src={imageSrc}
          alt={preset.imageAlt}
          loading="lazy"
          className="w-full h-auto block"
        />
        <figcaption className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <span>{preset.caption}</span>
          <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0">
            {copy.footerTag}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
