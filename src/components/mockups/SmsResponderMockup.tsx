import { useState } from 'react';
import { CheckCircle2, Clock, Inbox, MessageSquare, PhoneMissed, Sparkles } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS } from '../../i18n/mockupTranslations';
import { DesktopFrame, MobileFrame } from '../DeviceFrames';

export function SmsResponderMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].smsResponder;

  const [simulated, setSimulated] = useState(false);
  const [sentOverrides, setSentOverrides] = useState<Record<string, boolean>>({});

  const threads = [
    ...(simulated
      ? [
          {
            id: 'sms-new',
            ...copy.simulatedThread,
            sent: Boolean(sentOverrides['sms-new']),
          },
        ]
      : []),
    ...copy.initialThreads.map((item) => ({
      ...item,
      sent: sentOverrides[item.id] ?? item.sent,
    })),
  ];

  const sendReply = (id: string) => {
    setSentOverrides((prev) => ({ ...prev, [id]: true }));
  };

  const activeThread = threads[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-600">{copy.intro}</p>
        <button
          type="button"
          onClick={() => setSimulated(true)}
          disabled={simulated}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
            simulated
              ? 'bg-emerald-50 text-[#047857] border border-emerald-200 cursor-default'
              : 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white cursor-pointer'
          }`}
        >
          <PhoneMissed className="w-4 h-4" aria-hidden="true" />
          {simulated ? copy.btnSimulated : copy.btnSimulate}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Smartphone Instant SMS received by client */}
        <div className="lg:col-span-5 flex justify-center">
          <MobileFrame slotLabel={copy.mobileSlot} caption={copy.mobileCaption}>
            <div className="bg-[#F8FAFC] text-[#1E293B] min-h-[410px] flex flex-col">
              <div className="bg-[#1E293B] text-white px-3.5 pt-5 pb-2.5 flex items-center gap-2">
                <PhoneMissed className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold truncate">{copy.proNumberHeader}</p>
                  <p className="text-[10px] text-slate-300">{copy.missedCallSub}</p>
                </div>
              </div>

              <div className="p-3.5 space-y-2.5 flex-1 text-[11px] leading-relaxed">
                <div className="text-center text-[10px] text-slate-400 font-medium">
                  {copy.todayPrefix} · {activeThread.time}
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-3 shadow-2xs max-w-[92%]">
                  <p className="text-[10px] font-semibold text-[#047857] mb-1">
                    {copy.autoSmsTitle}
                  </p>
                  <p>{copy.autoSmsBody}</p>
                </div>

                <div className="bg-[#2563EB] text-white rounded-2xl rounded-tr-sm p-3 shadow-2xs max-w-[88%] ml-auto">
                  <p>{activeThread.customerMessage}</p>
                </div>

                {activeThread.sent ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl rounded-tl-sm p-3 max-w-[92%]">
                    <p className="text-[10px] font-semibold text-[#047857] mb-1">
                      {copy.validatedLabel}
                    </p>
                    <p className="text-[#1E293B]">{activeThread.aiDraftReply}</p>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-white px-3 py-2 text-[10px] text-slate-500 text-center">
                    {copy.pendingNote}
                  </div>
                )}
              </div>
            </div>
          </MobileFrame>
        </div>

        {/* Right: PC Komero AI SMS Inbox */}
        <div className="lg:col-span-7">
          <DesktopFrame urlLabel={copy.pcUrl} slotLabel={copy.pcSlot} caption={copy.pcCaption}>
            <div className="p-5 sm:p-6 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <p className="text-xs font-medium text-slate-500">{copy.dedicatedNumberLine}</p>
                  <h3 className="text-base font-bold text-[#1E293B]">{copy.inboxTitle}</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#047857] tabular-nums">
                  <Inbox className="w-4 h-4" aria-hidden="true" />
                  {copy.recoveredCount(threads.length)}
                </span>
              </div>

              <div className="space-y-3">
                {threads.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-slate-200 bg-white p-4 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 font-semibold text-slate-500 tabular-nums">
                          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                          {item.time}
                        </span>
                        <span className="font-bold text-[#1E293B]">{item.customer}</span>
                        <span className="text-slate-400 tabular-nums">{item.phoneMasked}</span>
                        <span className="text-[#2563EB] font-medium">· {item.trigger}</span>
                      </div>

                      {item.sent ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#047857]">
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                          {copy.statusSent}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB]">
                          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                          {copy.statusReady}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 bg-[#F8FAFC] rounded-lg px-3 py-2 border border-slate-100">
                      <MessageSquare
                        className="w-3.5 h-3.5 text-slate-400 inline mr-1.5 -mt-0.5"
                        aria-hidden="true"
                      />
                      « {item.customerMessage} »
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <p className="text-xs text-slate-600 leading-relaxed flex-1">
                        <span className="font-semibold text-[#047857]">
                          {copy.aiSuggestionPrefix}{' '}
                        </span>
                        {item.aiDraftReply}
                      </p>
                      {!item.sent && (
                        <button
                          type="button"
                          onClick={() => sendReply(item.id)}
                          className="px-3.5 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          {copy.validateAndSend}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DesktopFrame>
        </div>
      </div>
    </div>
  );
}
