import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './locales/en/common.json';
import navEn from './locales/en/nav.json';
import footerEn from './locales/en/footer.json';
import formsEn from './locales/en/forms.json';
import authEn from './locales/en/auth.json';
import homeEn from './locales/en/home.json';
import aboutEn from './locales/en/about.json';
import apjKalamEn from './locales/en/apjKalam.json';
import pagesEn from './locales/en/pages.json';

import commonHi from './locales/hi/common.json';
import navHi from './locales/hi/nav.json';
import footerHi from './locales/hi/footer.json';
import formsHi from './locales/hi/forms.json';
import authHi from './locales/hi/auth.json';
import homeHi from './locales/hi/home.json';
import aboutHi from './locales/hi/about.json';
import apjKalamHi from './locales/hi/apjKalam.json';
import pagesHi from './locales/hi/pages.json';

export const LANGUAGE_STORAGE_KEY = 'missilex-language';
export const supportedLanguages = ['en', 'hi'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultNS = 'common';

export const resources = {
  en: {
    common: commonEn,
    nav: navEn,
    footer: footerEn,
    forms: formsEn,
    auth: authEn,
    home: homeEn,
    about: aboutEn,
    apjKalam: apjKalamEn,
    pages: pagesEn
  },
  hi: {
    common: commonHi,
    nav: navHi,
    footer: footerHi,
    forms: formsHi,
    auth: authHi,
    home: homeHi,
    about: aboutHi,
    apjKalam: apjKalamHi,
    pages: pagesHi
  }
} as const;

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS,
    ns: Object.keys(resources.en),
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });
}

export default i18next;
