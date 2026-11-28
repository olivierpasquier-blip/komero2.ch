import { useState } from 'react';
import {
  Bell,
  Camera,
  CheckCircle2,
  Clock,
  Gift,
  Layers,
  MessageSquare,
  Monitor,
  Smartphone,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { ASSETS } from '../../data/komeroContent';
import { useLanguage } from '../../i18n/LanguageContext';
import { MOCKUP_TRANSLATIONS, type HeroMockupCopy } from '../../i18n/mockupTranslations';
import { TRANSLATIONS } from '../../i18n/translations';

type HeroViewMode = 'composite' | 'desktop' | 'mobile';

function KomeroDesktopDashboardScreen({ copy }: { copy: HeroMockupCopy }) {
  return (
    <div
      role="img"
      aria-label={copy.desktopAria}
      className="bg-[#F8FAFC] text-[#1E293B] select-none grid grid-cols-12 min-h-[290px] sm:min-h-[340px]"
    >
      {/* Left sidebar */}
      <div className="col-span-4 sm:col-span-3 bg-[#11223E] text-white p-3.5 sm:p-4 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={ASSETS.logoIcon}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="w-6 h-6 rounded-md object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm font-extrabold tracking-tight truncate">
              Kome<span className="text-[#10B981]">ro</span>
            </span>
          </div>

          <div className="space-y-1 text-[10px] sm:text-[11px]">
            <div className="px-2 py-1.5 rounded-lg bg-[#2563EB] text-white font-semibold flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.navHome}</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.navReviews}</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.navSocial}</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.navResponder}</span>
            </div>
            <div className="px-2 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-300 shrink-0" aria-hidden="true" />
              <span className="truncate">{copy.navSms}</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-emerald-500/15 border border-emerald-400/30 p-2 space-y-0.5 mt-4">
          <p className="text-[9px] sm:text-[10px] font-bold text-emerald-300 flex items-center gap-1">
            <Gift className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span className="truncate">{copy.starterActive}</span>
          </p>
          <p className="text-[9px] text-slate-300 tabular-nums">{copy.contactsCount}</p>
        </div>
      </div>

      {/* Main dashboard pane */}
      <div className="col-span-8 sm:col-span-9 p-3.5 sm:p-5 space-y-3.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-extrabold text-[#1E293B] truncate">
              {copy.shopName}
            </p>
            <p className="text-[10px] sm:text-xs text-slate-500">{copy.morningSummary}</p>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#047857] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0 tabular-nums">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {copy.hoursSaved}
          </span>
        </div>

        {/* 3 KPIs */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="rounded-xl bg-white border border-slate-200 p-2.5">
            <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">
              {copy.kpiGoogleLabel}
            </p>
            <p className="text-sm sm:text-base font-extrabold text-[#1E293B] tabular-nums mt-0.5">
              4.8 / 5
            </p>
            <p className="text-[9px] font-semibold text-[#047857]">{copy.kpiGoogleSub}</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-2.5">
            <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">
              {copy.kpiCallsLabel}
            </p>
            <p className="text-sm sm:text-base font-extrabold text-[#1E293B] tabular-nums mt-0.5">
              100 %
            </p>
            <p className="text-[9px] font-semibold text-[#2563EB]">{copy.kpiCallsSub}</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-200 p-2.5">
            <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">
              {copy.kpiBaseLabel}
            </p>
            <p className="text-sm sm:text-base font-extrabold text-[#1E293B] tabular-nums mt-0.5">
              148
            </p>
            <p className="text-[9px] font-semibold text-[#047857]">{copy.kpiBaseSub}</p>
          </div>
        </div>

        {/* Action Queue */}
        <div className="rounded-xl bg-white border border-slate-200 p-3 space-y-2">
          <p className="text-[10px] sm:text-xs font-bold text-[#1E293B]">
            {copy.prioritiesHeading}
          </p>

          <div className="flex items-center justify-between gap-2 py-1.5 border-b border-slate-100">
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold text-[#1E293B] truncate">
                {copy.reviewTitle}
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">{copy.reviewSub}</p>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-[#2563EB] text-white text-[9px] sm:text-[10px] font-semibold whitespace-nowrap shrink-0">
              <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
              {copy.publishBtn}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 pt-0.5">
            <div className="min-w-0">
              <p className="text-[10px] sm:text-xs font-semibold text-[#1E293B] truncate">
                {copy.postTitle}
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 truncate">{copy.postSub}</p>
            </div>
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#047857] text-[9px] sm:text-[10px] font-semibold whitespace-nowrap shrink-0">
              {copy.readyBadge}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function KomeroMobilePwaScreen({
  copy,
  compact = false,
}: {
  copy: HeroMockupCopy;
  compact?: boolean;
}) {
  return (
    <div
      className={`bg-[#0F172A] text-white flex flex-col justify-between h-full select-none ${
        compact ? 'p-2.5 gap-2' : 'p-4 gap-3'
      }`}
    >
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img
              src={ASSETS.logoIcon}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              className="w-5 h-5 rounded-md object-contain shrink-0"
            />
            <span className={`${compact ? 'text-[11px]' : 'text-sm'} font-extrabold tracking-tight`}>
              Kome<span className="text-[#10B981]">ro</span>
            </span>
          </div>
          <span
            className={`${
              compact ? 'text-[8px] px-1.5 py-0.5' : 'text-[10px] px-2 py-0.5'
            } rounded bg-emerald-500/20 text-emerald-300 font-semibold`}
          >
            {copy.mobileBadge}
          </span>
        </div>

        <div>
          <p className={`${compact ? 'text-[10px]' : 'text-xs'} font-bold text-white truncate`}>
            {copy.shopName.split(' · ')[0]}
          </p>
          <p className={`${compact ? 'text-[8px]' : 'text-[10px]'} text-slate-400 truncate`}>
            {copy.mobileSub}
          </p>
        </div>
      </div>

      <div
        className={`rounded-xl bg-[#1E293B] border border-blue-500/40 overflow-hidden ${
          compact ? 'text-[8px]' : 'text-[11px]'
        }`}
      >
        <div className="bg-[#2563EB] px-2.5 py-1 flex items-center gap-1.5 font-semibold text-white">
          <Bell className={compact ? 'w-2.5 h-2.5' : 'w-3 h-3'} aria-hidden="true" />
          <span className="truncate">{copy.mobileUrgentBadge}</span>
        </div>
        <div className={compact ? 'p-2 space-y-1' : 'p-2.5 space-y-1.5'}>
          <p className="font-semibold text-white truncate">{copy.mobileAlertTitle}</p>
          <p className="text-slate-300 line-clamp-2">{copy.mobileAlertSub}</p>
        </div>
      </div>

      <div
        className={`rounded-xl bg-emerald-500/15 border border-emerald-400/35 ${
          compact ? 'p-2 space-y-1 text-[8px]' : 'p-2.5 space-y-1.5 text-[10px]'
        }`}
      >
        <p className="font-bold text-emerald-300 truncate">{copy.mobileActionTitle}</p>
        <p className="text-slate-200 line-clamp-2">{copy.mobileActionSub}</p>
        <span className="inline-flex items-center justify-center w-full py-1 rounded-md bg-[#10B981] text-white font-bold text-center">
          {copy.mobileActionBtn}
        </span>
      </div>

      <div className={`grid grid-cols-2 ${compact ? 'gap-1.5' : 'gap-2'}`}>
        <div className="rounded-lg bg-[#1E293B] border border-slate-700/80 p-2 space-y-0.5">
          <Star className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-amber-400`} aria-hidden="true" />
          <p className={`${compact ? 'text-[8px]' : 'text-[10px]'} font-semibold text-white truncate`}>
            {copy.navReviews}
          </p>
          <p className={`${compact ? 'text-[7px]' : 'text-[9px]'} text-emerald-400 truncate`}>
            {copy.mobileQuick1}
          </p>
        </div>

        <div className="rounded-lg bg-[#1E293B] border border-slate-700/80 p-2 space-y-0.5">
          <Camera className={`${compact ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-blue-400`} aria-hidden="true" />
          <p className={`${compact ? 'text-[8px]' : 'text-[10px]'} font-semibold text-white truncate`}>
            {copy.navSocial}
          </p>
          <p className={`${compact ? 'text-[7px]' : 'text-[9px]'} text-blue-300 truncate`}>
            {copy.mobileQuick2}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroCompositeMockup() {
  const { language } = useLanguage();
  const copy = MOCKUP_TRANSLATIONS[language].hero;
  const frameCopy = TRANSLATIONS[language].deviceFrames;
  const [viewMode, setViewMode] = useState<HeroViewMode>('composite');

  return (
    <div className="relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
        <span className="text-xs font-medium text-slate-500">{copy.pcCaption}</span>
        <div
          role="tablist"
          aria-label={copy.pcSlot}
          className="inline-flex items-center self-start sm:self-auto p-1 rounded-lg bg-slate-100 border border-slate-200/80"
        >
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'composite'}
            onClick={() => setViewMode('composite')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'composite'
                ? 'bg-white text-[#1E293B] shadow-xs'
                : 'text-slate-600 hover:text-[#1E293B]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            {copy.tabComposite}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'desktop'}
            onClick={() => setViewMode('desktop')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'desktop'
                ? 'bg-white text-[#1E293B] shadow-xs'
                : 'text-slate-600 hover:text-[#1E293B]'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
            {copy.tabDesktop}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={viewMode === 'mobile'}
            onClick={() => setViewMode('mobile')}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              viewMode === 'mobile'
                ? 'bg-white text-[#1E293B] shadow-xs'
                : 'text-slate-600 hover:text-[#1E293B]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            {copy.tabMobile}
          </button>
        </div>
      </div>

      {viewMode === 'composite' && (
        <div className="relative pb-10 sm:pb-12">
          <figure
            aria-label={copy.pcSlot}
            className="rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(30,41,59,0.28)] overflow-hidden"
          >
            <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              </div>
              <span className="px-3 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-500 truncate">
                {copy.pcUrl}
              </span>
              <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap shrink-0">
                {copy.previewBadge}
              </span>
            </div>
            <KomeroDesktopDashboardScreen copy={copy} />
          </figure>

          <figure
            aria-label={copy.mobileSlot}
            className="w-[144px] sm:w-[172px] lg:w-[184px] absolute -bottom-2 right-2 sm:right-4 lg:-right-2 z-20"
          >
            <div className="rounded-[1.9rem] bg-[#020617] p-2 shadow-[0_26px_50px_-14px_rgba(15,23,42,0.55)] ring-1 ring-slate-700">
              <div className="rounded-[1.4rem] overflow-hidden aspect-[9/16.8]">
                <KomeroMobilePwaScreen copy={copy} compact />
              </div>
            </div>
          </figure>
        </div>
      )}

      {viewMode === 'desktop' && (
        <figure
          aria-label={copy.pcSlot}
          className="rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(30,41,59,0.28)] overflow-hidden"
        >
          <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <span className="text-[11px] font-medium text-slate-500">{copy.pcUrl}</span>
            <span className="text-[11px] text-slate-400">{frameCopy.pcLabel}</span>
          </div>
          <KomeroDesktopDashboardScreen copy={copy} />
          <figcaption className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
            <span>{copy.shopName}</span>
            <span className="text-[11px] text-slate-400">{frameCopy.pcCaptionTag}</span>
          </figcaption>
        </figure>
      )}

      {viewMode === 'mobile' && (
        <figure
          aria-label={copy.mobileSlot}
          className="flex flex-col items-center py-4 bg-[#F8FAFC] rounded-2xl border border-slate-200"
        >
          <div className="w-[248px] sm:w-[270px] rounded-[2.2rem] bg-[#020617] p-2.5 shadow-[0_24px_50px_-14px_rgba(15,23,42,0.5)] ring-1 ring-slate-700">
            <div className="rounded-[1.6rem] overflow-hidden aspect-[9/16.8]">
              <KomeroMobilePwaScreen copy={copy} />
            </div>
          </div>
          <figcaption className="mt-3 text-xs text-slate-500 text-center">
            {copy.mobileCaption}
          </figcaption>
        </figure>
      )}
    </div>
  );
}
