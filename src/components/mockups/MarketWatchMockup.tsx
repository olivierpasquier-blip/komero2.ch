import { useState } from 'react';
import {
  CheckCircle2,
  Compass,
  Flame,
  MapPin,
  Send,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { ASSETS } from '../../data/komeroContent';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS } from '../../i18n/mockupTranslations';
import { DesktopFrame, MobileFrame, ResilientImage } from '../DeviceFrames';

export function MarketWatchMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].marketWatch;

  const [selectedId, setSelectedId] = useState<'boulangerie' | 'coiffure' | 'caviste'>(
    'boulangerie'
  );
  const [queuedIds, setQueuedIds] = useState<Record<string, boolean>>({});

  const preset = copy.presets.find((p) => p.id === selectedId) ?? copy.presets[0];
  const isQueued = Boolean(queuedIds[preset.id]);

  const handleQueuePost = () => {
    setQueuedIds((prev) => ({ ...prev, [preset.id]: true }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{copy.intro}</p>
        <div
          role="tablist"
          aria-label={copy.tablistAria}
          className="inline-flex flex-wrap items-center p-1 rounded-lg bg-slate-100 border border-slate-200"
        >
          {copy.presets.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selectedId === item.id}
              onClick={() => setSelectedId(item.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedId === item.id
                  ? 'bg-white text-[#1E293B] shadow-xs'
                  : 'text-slate-600 hover:text-[#1E293B]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: PC Local Trends & Competitor Dashboard */}
        <div className="lg:col-span-7">
          <DesktopFrame urlLabel={copy.pcUrl} slotLabel={copy.pcSlot} caption={copy.pcCaption}>
            <div className="p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500 inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                    {preset.cityContext}
                  </p>
                  <h3 className="text-base font-bold text-[#1E293B] mt-0.5">{copy.reportTitle}</h3>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#047857]">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  {copy.updatedLabel}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 space-y-1.5">
                  <p className="text-xs font-bold text-[#2563EB] inline-flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                    {copy.competitorTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {preset.competitorInsight}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-1.5">
                  <p className="text-xs font-bold text-[#047857] inline-flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5" aria-hidden="true" />
                    {copy.trendTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {preset.seasonalTrend}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5">
                <p className="text-xs font-bold text-[#1E293B]">{copy.searchesTitle}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-600">
                  {preset.topLocalSearches.map((kw, index) => (
                    <span key={kw} className="inline-flex items-center gap-3">
                      <span className="text-[#1E293B] font-semibold">« {kw} »</span>
                      {index < preset.topLocalSearches.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">
                          ·
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500">{copy.searchesNote}</p>
              </div>
            </div>
          </DesktopFrame>
        </div>

        {/* Right: Mobile PWA Actionable Post Idea */}
        <div className="lg:col-span-5 flex justify-center">
          <MobileFrame slotLabel={copy.mobileSlot} caption={copy.mobileCaption}>
            <div className="bg-white text-[#1E293B]">
              <div className="bg-[#1E293B] text-white px-4 pt-5 pb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                  {copy.ideaHeader}
                </span>
                <span className="text-[10px] text-emerald-300 font-semibold">Mobile</span>
              </div>

              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <ResilientImage
                  src={ASSETS.localMarketStreet}
                  alt={preset.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <p className="text-[11px] font-semibold text-[#2563EB]">{preset.bestSlot}</p>
                  <h4 className="text-sm font-bold text-[#1E293B] mt-0.5">
                    {preset.postIdeaTitle}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{preset.postIdeaCaption}</p>

                <button
                  type="button"
                  onClick={handleQueuePost}
                  className={`w-full py-2.5 px-3 rounded-lg text-xs font-semibold transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer ${
                    isQueued
                      ? 'bg-[#10B981] text-white'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                  }`}
                >
                  {isQueued ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      {copy.queuedBtn}
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      {copy.queueBtn}
                    </>
                  )}
                </button>
              </div>
            </div>
          </MobileFrame>
        </div>
      </div>
    </div>
  );
}
