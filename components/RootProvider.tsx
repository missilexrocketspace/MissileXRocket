'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthProvider from '@/components/auth/AuthContext';
import SitePreferencesProvider from '@/components/providers/SitePreferences';
import I18nProvider from '@/components/providers/I18nProvider';
import BackToTop from '@/components/layout/BackToTop';

export default function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <SitePreferencesProvider>
        <AuthProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </AuthProvider>
      </SitePreferencesProvider>
    </I18nProvider>
  );
}
