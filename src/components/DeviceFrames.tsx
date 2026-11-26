import React, { useState } from 'react';
import { Monitor, Smartphone, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface DesktopFrameProps {
  urlLabel: string;
  slotLabel: string;
  caption?: string;
  children: React.ReactNode;
  className?: string;
}

export function DesktopFrame({
  urlLabel,
  slotLabel,
  caption,
  children,
  className = '',
}: DesktopFrameProps) {
  const { language } = useLanguage();
  const frameCopy = TRANSLATIONS[language].deviceFrames;

  return (
    <figure
      aria-label={slotLabel}
      className={`rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_-24px_rgba(30,41,59,0.25)] overflow-hidden ${className}`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex-1 max-w-xs mx-auto px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-500 truncate text-center">
          {urlLabel}
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0">
          <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="hidden sm:inline">{frameCopy.pcLabel}</span>
        </div>
      </div>
      <div className="relative bg-white">{children}</div>
      {caption && (
        <figcaption className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2 text-xs text-slate-500">
          <span>{caption}</span>
          <span className="text-[11px] text-slate-400 whitespace-nowrap shrink-0 hidden sm:inline">
            {frameCopy.pcCaptionTag}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

interface MobileFrameProps {
  slotLabel: string;
  caption?: string;
  darkBezel?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function MobileFrame({
  slotLabel,
  caption,
  darkBezel = true,
  children,
  className = '',
}: MobileFrameProps) {
  return (
    <figure aria-label={slotLabel} className={`flex flex-col items-center ${className}`}>
      <div
        className={`w-full max-w-[310px] rounded-[2.2rem] p-2.5 shadow-[0_24px_54px_-18px_rgba(15,23,42,0.42)] ${
          darkBezel
            ? 'bg-[#0F172A] ring-1 ring-slate-700/80'
            : 'bg-slate-800 ring-1 ring-slate-700'
        }`}
      >
        <div className="w-20 h-4 bg-[#0F172A] rounded-b-xl mx-auto -mb-2.5 relative z-10 flex items-center justify-center">
          <span className="w-10 h-1 rounded-full bg-slate-700" aria-hidden="true" />
        </div>
        <div className="rounded-[1.65rem] overflow-hidden bg-white">{children}</div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-slate-500 max-w-[300px]">
          <span className="inline-flex items-center gap-1 font-medium text-slate-600">
            <Smartphone className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallbackTitle,
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-slate-100 text-slate-500 p-6 text-center ${className}`}
      >
        <ImageIcon className="w-7 h-7 text-slate-400" aria-hidden="true" />
        <span className="text-xs font-medium">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
