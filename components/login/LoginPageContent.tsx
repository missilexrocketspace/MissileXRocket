'use client';

import { useTranslation } from 'react-i18next';
import LoginPanel from '@/components/login/LoginPanel';
import PageBanner from '@/components/patterns/PageBanner';

export default function LoginPageContent() {
  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen bg-white text-charcoal">
      <PageBanner eyebrow={t('login.eyebrow')} title={t('login.title')} description={t('login.description')} />
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 xl:px-12">
        <LoginPanel />
      </div>
    </main>
  );
}
