'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type FontScale = 'normal' | 'large' | 'xlarge';

type SitePreferencesValue = {
  fontScale: FontScale;
  increaseFontScale: () => void;
  decreaseFontScale: () => void;
  highContrast: boolean;
  toggleHighContrast: () => void;
};

const FONT_SCALES: FontScale[] = ['normal', 'large', 'xlarge'];
const FONT_SCALE_PERCENT: Record<FontScale, string> = { normal: '100%', large: '112%', xlarge: '125%' };

const SitePreferencesContext = createContext<SitePreferencesValue | undefined>(undefined);

export default function SitePreferencesProvider({ children }: { children: React.ReactNode }) {
  const [fontScale, setFontScale] = useState<FontScale>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SCALE_PERCENT[fontScale];
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle('contrast-high', highContrast);
  }, [highContrast]);

  const increaseFontScale = () => {
    setFontScale((current) => {
      const index = FONT_SCALES.indexOf(current);
      return FONT_SCALES[Math.min(index + 1, FONT_SCALES.length - 1)];
    });
  };

  const decreaseFontScale = () => {
    setFontScale((current) => {
      const index = FONT_SCALES.indexOf(current);
      return FONT_SCALES[Math.max(index - 1, 0)];
    });
  };

  const value = useMemo(
    () => ({
      fontScale,
      increaseFontScale,
      decreaseFontScale,
      highContrast,
      toggleHighContrast: () => setHighContrast((current) => !current)
    }),
    [fontScale, highContrast]
  );

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);

  if (!context) {
    throw new Error('useSitePreferences must be used within a SitePreferencesProvider');
  }

  return context;
}
