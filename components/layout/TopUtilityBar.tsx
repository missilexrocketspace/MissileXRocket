'use client';

import { Contrast, Minus, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSitePreferences } from '@/components/providers/SitePreferences';
import { useLanguageSwitcher } from '@/lib/i18n/useLanguageSwitcher';

export default function TopUtilityBar() {
  const { t } = useTranslation('common');
  const { increaseFontScale, decreaseFontScale, highContrast, toggleHighContrast } = useSitePreferences();
  const { language, setLanguage } = useLanguageSwitcher();

  return (
    <div className="bg-isroBlueDark px-6 py-1.5 text-xs text-white/80 sm:px-8 xl:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a
          href="#main-content"
          className="rounded px-2 py-1 focus:bg-white focus:text-isroBlueDark focus:outline-none sr-only focus:not-sr-only"
        >
          {t('skipToContent')}
        </a>
        <p className="hidden sm:block">भारत सरकार-शैली अनुसंधान पोर्टल · {t('govBanner')}</p>

        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-1" role="group" aria-label={t('textSize')}>
            <span className="hidden md:inline text-white/60">{t('textSize')}</span>
            <button type="button" onClick={decreaseFontScale} aria-label="Decrease text size" className="rounded p-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Minus className="h-3 w-3" />
            </button>
            <span className="font-semibold">A</span>
            <button type="button" onClick={increaseFontScale} aria-label="Increase text size" className="rounded p-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <Plus className="h-3 w-3" />
            </button>
          </div>

          <button
            type="button"
            onClick={toggleHighContrast}
            aria-pressed={highContrast}
            className="flex items-center gap-1.5 rounded p-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Contrast className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{t('highContrast')}</span>
          </button>

          <div className="flex items-center gap-1" role="group" aria-label={t('language')}>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`rounded px-1.5 py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${language === 'en' ? 'bg-white/20 font-semibold text-white' : 'text-white/70 hover:text-white'}`}
            >
              English
            </button>
            <span className="text-white/40">|</span>
            <button
              type="button"
              onClick={() => setLanguage('hi')}
              aria-pressed={language === 'hi'}
              className={`rounded px-1.5 py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${language === 'hi' ? 'bg-white/20 font-semibold text-white' : 'text-white/70 hover:text-white'}`}
            >
              हिंदी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
