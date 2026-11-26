import { useState } from 'react';
import { CheckCircle2, MapPin, QrCode, Sparkles, Star } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS } from '../../i18n/mockupTranslations';
import { DesktopFrame, MobileFrame } from '../DeviceFrames';

export function GoogleReviewsMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].googleReviews;

  const [selectedId, setSelectedId] = useState<'positif' | 'negatif'>('positif');
  const [publishedIds, setPublishedIds] = useState<Record<string, boolean>>({ positif: true });

  const scenario = copy.scenarios.find((s) => s.id === selectedId) ?? copy.scenarios[0];
  const isPublished = Boolean(publishedIds[scenario.id]);

  const handlePublish = () => {
    setPublishedIds((prev) => ({ ...prev, [scenario.id]: true }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{copy.intro}</p>
        <div
          role="tablist"
          aria-label={copy.tablistAria}
          className="inline-flex items-center p-1 rounded-lg bg-slate-100 border border-slate-200"
        >
          {copy.scenarios.map((item) => (
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
              {item.tabLabel}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: PC Komero Interface */}
        <div className="lg:col-span-7">
          <DesktopFrame urlLabel={copy.pcUrl} slotLabel={copy.pcSlot} caption={copy.pcCaption}>
            <div className="p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">{copy.shopSubline}</p>
                  <h3 className="text-base font-bold text-[#1E293B]">{copy.heading}</h3>
                </div>
                <span className="text-xs font-semibold text-[#047857] tabular-nums">
                  {copy.currentRating}
                </span>
              </div>

              <div className="rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[#1E293B]">{scenario.author}</span>
                  <span className="text-xs text-slate-500">{scenario.dateLabel}</span>
                </div>
                <div className="flex items-center gap-0.5" aria-label={copy.ratingAria(scenario.rating)}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < scenario.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-slate-200 text-slate-200'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">« {scenario.comment} »</p>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857]">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    {copy.aiProposalBadge}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {copy.keywordsLabel} {scenario.detectedKeywords.join(' · ')}
                  </span>
                </div>
                <p className="text-sm text-[#1E293B] leading-relaxed">{scenario.aiReply}</p>
                <p className="text-xs text-[#047857] font-medium">{scenario.seoBenefit}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <QrCode className="w-4 h-4 text-[#2563EB]" aria-hidden="true" />
                  {copy.qrActiveNote}
                </span>
                <button
                  type="button"
                  onClick={handlePublish}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isPublished
                      ? 'bg-[#10B981] text-white'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  {isPublished ? copy.publishedBtn : copy.publishBtn}
                </button>
              </div>
            </div>
          </DesktopFrame>
        </div>

        {/* Right: Smartphone Google Maps Listing Preview */}
        <div className="lg:col-span-5 flex justify-center">
          <MobileFrame slotLabel={copy.mobileSlot} caption={copy.mobileCaption}>
            <div className="bg-white text-[#1E293B]">
              <div className="px-4 pt-5 pb-3 border-b border-slate-100">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-medium text-[#2563EB]">{copy.mapsHeader}</p>
                    <h4 className="text-sm font-bold text-[#1E293B] mt-0.5">{copy.mapsShopName}</h4>
                  </div>
                  <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-1" aria-hidden="true" />
                </div>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-600 tabular-nums">
                  <span className="font-bold text-[#1E293B]">4.8</span>
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span>{copy.mapsMeta}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 text-center text-[11px] font-semibold border-b border-slate-200">
                <span className="py-2 text-slate-400">{copy.tabOverview}</span>
                <span className="py-2 text-[#2563EB] border-b-2 border-[#2563EB]">
                  {copy.tabReviews}
                </span>
                <span className="py-2 text-slate-400">{copy.tabPhotos}</span>
              </div>

              <div className="p-4 space-y-3 min-h-[295px]">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1E293B]">{scenario.author}</span>
                    <span className="text-[10px] text-slate-400">{scenario.dateLabel}</span>
                  </div>
                  <div className="flex items-center gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-3 h-3 ${
                          idx < scenario.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-200 text-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{scenario.comment}</p>
                </div>

                {isPublished ? (
                  <div className="rounded-lg bg-[#F8FAFC] border border-slate-200 p-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#1E293B]">
                        {copy.ownerReplyTitle}
                      </span>
                      <span className="text-[10px] font-semibold text-[#047857]">
                        {copy.justNow}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{scenario.aiReply}</p>
                  </div>
                ) : (
                  <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3 text-center space-y-1">
                    <p className="text-xs font-medium text-slate-600">{copy.pendingTitle}</p>
                    <p className="text-[11px] text-slate-400">{copy.pendingSub}</p>
                  </div>
                )}
              </div>
            </div>
          </MobileFrame>
        </div>
      </div>
    </div>
  );
}
