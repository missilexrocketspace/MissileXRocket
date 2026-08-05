'use client';

import { useTranslation } from 'react-i18next';
import { LANGUAGE_STORAGE_KEY, type SupportedLanguage } from '@/lib/i18n/config';

export function useLanguageSwitcher() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  };

  return { language: i18n.language as SupportedLanguage, setLanguage };
}
