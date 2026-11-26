import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  HTML_LANG_BY_LANGUAGE,
  SUPPORTED_LANGUAGES,
  type Language,
} from '../config/siteConfig';

export const LANGUAGE_STORAGE_KEY = 'komero_ch_language';

interface LanguageContextValue {
  language: Language;
  htmlLang: 'fr-CH' | 'de-CH' | 'en-CH';
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: 'fr',
  htmlLang: 'fr-CH',
  setLanguage: () => {},
});

export function isSupportedLanguage(value: unknown): value is Language {
  return typeof value === 'string' && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

export function resolveInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';

  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get('lang')?.toLowerCase();
    if (isSupportedLanguage(fromQuery)) {
      return fromQuery;
    }
  } catch {
    // Ignore URL parsing issues
  }

  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)?.toLowerCase();
    if (isSupportedLanguage(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage issues (private mode / restricted iframe)
  }

  return 'fr';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage);

  const setLanguage = useCallback((nextLang: Language) => {
    if (!isSupportedLanguage(nextLang)) return;
    setLanguageState(nextLang);

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
      } catch {
        // Ignore storage write errors
      }
      document.documentElement.lang = HTML_LANG_BY_LANGUAGE[nextLang];
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = HTML_LANG_BY_LANGUAGE[language];
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        htmlLang: HTML_LANG_BY_LANGUAGE[language],
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
