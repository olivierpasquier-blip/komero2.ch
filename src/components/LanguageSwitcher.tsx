import type { Language } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';

interface FlagOption {
  code: Language;
  shortLabel: string;
  ariaLabel: string;
  title: string;
}

const FLAG_OPTIONS: readonly FlagOption[] = [
  {
    code: 'fr',
    shortLabel: 'FR',
    ariaLabel: 'Passer le site en français',
    title: 'Français (CH)',
  },
  {
    code: 'de',
    shortLabel: 'DE',
    ariaLabel: 'Website auf Deutsch umstellen',
    title: 'Deutsch (CH)',
  },
  {
    code: 'en',
    shortLabel: 'EN',
    ariaLabel: 'Switch website to English',
    title: 'English (CH)',
  },
] as const;

function FlagSvg({ code }: { code: Language }) {
  if (code === 'fr') {
    return (
      <svg
        viewBox="0 0 24 16"
        className="w-5 h-3.5 rounded-[3px] block shrink-0 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.12)]"
        aria-hidden="true"
      >
        <rect width="8" height="16" x="0" y="0" fill="#002395" />
        <rect width="8" height="16" x="8" y="0" fill="#FFFFFF" />
        <rect width="8" height="16" x="16" y="0" fill="#ED2939" />
      </svg>
    );
  }

  if (code === 'de') {
    return (
      <svg
        viewBox="0 0 24 16"
        className="w-5 h-3.5 rounded-[3px] block shrink-0 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.12)]"
        aria-hidden="true"
      >
        <rect width="24" height="5.34" x="0" y="0" fill="#111827" />
        <rect width="24" height="5.34" x="0" y="5.33" fill="#DD0000" />
        <rect width="24" height="5.34" x="0" y="10.66" fill="#FFCE00" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 16"
      className="w-5 h-3.5 rounded-[3px] block shrink-0 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.12)]"
      aria-hidden="true"
    >
      <rect width="24" height="16" fill="#012169" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFFFFF" strokeWidth="3.2" />
      <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" strokeWidth="1.4" />
      <path d="M12,0 L12,16 M0,8 L24,8" stroke="#FFFFFF" strokeWidth="5" />
      <path d="M12,0 L12,16 M0,8 L24,8" stroke="#C8102E" strokeWidth="2.8" />
    </svg>
  );
}

interface LanguageSwitcherProps {
  compact?: boolean;
  onSelect?: () => void;
}

export function LanguageSwitcher({ compact = false, onSelect }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={
        language === 'de'
          ? 'Sprachauswahl'
          : language === 'en'
            ? 'Language selector'
            : 'Sélecteur de langue'
      }
      data-testid="language-switcher"
      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-[#F8FAFC] p-1 shrink-0"
    >
      {FLAG_OPTIONS.map((option) => {
        const isActive = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            title={option.title}
            aria-label={option.ariaLabel}
            aria-pressed={isActive}
            data-lang-option={option.code}
            onClick={() => {
              setLanguage(option.code);
              onSelect?.();
            }}
            className={`inline-flex items-center justify-center gap-1 rounded-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
              compact ? 'px-1.5 py-1' : 'px-2 py-1'
            } ${
              isActive
                ? 'bg-white border-2 border-[#2563EB] text-[#1E293B] shadow-2xs'
                : 'border-2 border-transparent text-slate-500 hover:bg-white/80 hover:text-[#1E293B] opacity-80 hover:opacity-100'
            }`}
          >
            <FlagSvg code={option.code} />
            {!compact && (
              <span className="text-[11px] font-bold tracking-tight">{option.shortLabel}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
