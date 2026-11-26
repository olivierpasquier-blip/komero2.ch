import { useEffect, useState } from 'react';
import { CheckCircle2, Send, ShieldCheck, Users } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS } from '../../i18n/mockupTranslations';
import { SMS_SINGLE_SEGMENT_MAX, computeSmsCampaignMetrics } from '../../lib/smsUtils';
import { DesktopFrame, MobileFrame } from '../DeviceFrames';

export function SmsFlashMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].smsFlash;

  const [selectedPresetId, setSelectedPresetId] = useState<string>(copy.presets[0].id);
  const [customBody, setCustomBody] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setCustomBody(null);
    setSent(false);
  }, [language]);

  const activePreset =
    copy.presets.find((preset) => preset.id === selectedPresetId) ?? copy.presets[0];
  const messageBody = customBody ?? activePreset.text;

  const metrics = computeSmsCampaignMetrics(
    activePreset.shop,
    messageBody,
    activePreset.recipients
  );

  const applyPreset = (id: string) => {
    setSelectedPresetId(id);
    setCustomBody(null);
    setSent(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{copy.intro}</p>
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
          {copy.presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => applyPreset(preset.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activePreset.id === preset.id
                  ? 'bg-white text-[#1E293B] shadow-xs'
                  : 'text-slate-600 hover:text-[#1E293B]'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: PC/Mobile Quick Editor with 145-char live counter */}
        <div className="lg:col-span-7">
          <DesktopFrame urlLabel={copy.pcUrl} slotLabel={copy.pcSlot} caption={copy.pcCaption}>
            <div className="p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">{copy.moduleSubtitle}</p>
                  <h3 className="text-base font-bold text-[#1E293B]">{copy.heading}</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857] tabular-nums">
                  <Users className="w-4 h-4" aria-hidden="true" />
                  {copy.recipientsLabel(activePreset.recipients)}
                </span>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="sms-flash-input"
                  className="block text-xs font-semibold text-[#1E293B]"
                >
                  {copy.inputLabel}
                </label>
                <textarea
                  id="sms-flash-input"
                  rows={3}
                  value={messageBody}
                  onChange={(e) => {
                    setCustomBody(e.target.value);
                    setSent(false);
                  }}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
                />
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 text-[#047857] font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                    {copy.stopNotice}
                  </span>
                  <span
                    className={`tabular-nums font-semibold ${
                      metrics.isWithinLimit ? 'text-[#047857]' : 'text-amber-700'
                    }`}
                  >
                    {metrics.characterCount} / {SMS_SINGLE_SEGMENT_MAX} {copy.charsUnit} ·{' '}
                    {metrics.isWithinLimit
                      ? copy.oneSmsLabel
                      : copy.segmentsLabel(metrics.segmentCount)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 rounded-xl bg-[#F8FAFC] border border-slate-200/80 p-3.5">
                <div>
                  <p className="text-[11px] text-slate-500">{copy.opensLabel}</p>
                  <p className="text-lg font-bold text-[#1E293B] tabular-nums">
                    ~{metrics.estimatedOpens} {copy.opensUnit}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-500">{copy.visitsLabel}</p>
                  <p className="text-lg font-bold text-[#047857] tabular-nums">
                    +{metrics.estimatedShopVisits} {copy.visitsUnit}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSent(true)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    sent
                      ? 'bg-[#10B981] text-white'
                      : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white'
                  }`}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      {copy.sentBtn(activePreset.recipients)}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden="true" />
                      {copy.sendBtn}
                    </>
                  )}
                </button>
              </div>
            </div>
          </DesktopFrame>
        </div>

        {/* Right: Smartphone Realistic Client SMS Bubble */}
        <div className="lg:col-span-5 flex justify-center">
          <MobileFrame slotLabel={copy.mobileSlot} caption={copy.mobileCaption}>
            <div className="bg-[#F8FAFC] text-[#1E293B] min-h-[370px] flex flex-col">
              <div className="bg-white border-b border-slate-200 px-4 pt-5 pb-3 text-center">
                <p className="text-xs font-bold text-[#1E293B]">{activePreset.shop}</p>
                <p className="text-[10px] text-slate-400">{copy.mobileSubline}</p>
              </div>

              <div className="flex-1 p-4 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <div className="text-center text-[10px] font-medium text-slate-400">
                    {copy.mobileTimestamp}
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-white border border-slate-200 p-3.5 shadow-2xs">
                    <p className="text-xs text-[#1E293B] leading-relaxed break-words">
                      {metrics.fullMessage}
                    </p>
                  </div>
                  <p className="text-[10px] text-slate-400 pl-1">
                    {sent ? copy.receivedNote : copy.previewNote}
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 border border-emerald-200/80 p-3 text-xs">
                  <p className="font-semibold text-[#047857]">{copy.impactTitle}</p>
                  <p className="text-slate-600 mt-0.5 text-[11px] leading-relaxed">
                    {copy.impactBody}
                  </p>
                </div>
              </div>
            </div>
          </MobileFrame>
        </div>
      </div>
    </div>
  );
}
