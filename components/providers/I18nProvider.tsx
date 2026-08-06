'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next, { LANGUAGE_STORAGE_KEY, type SupportedLanguage, supportedLanguages } from '@/lib/i18n/config';

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) as SupportedLanguage | null;
    if (stored && supportedLanguages.includes(stored) && stored !== i18next.language) {
      i18next.changeLanguage(stored);
    }
    document.documentElement.lang = stored && supportedLanguages.includes(stored) ? stored : 'en';
    setReady(true);
  }, []);

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18next.on('languageChanged', handleLanguageChanged);
    return () => i18next.off('languageChanged', handleLanguageChanged);
  }, []);

  // Render immediately with the server-matching default ('en') to avoid a blank first paint;
  // the effect above swaps to the persisted language right after mount (not a hydration mismatch,
  // since it happens in a post-mount effect rather than during the initial render).
  void ready;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
