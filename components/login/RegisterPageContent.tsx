'use client';

import { useTranslation } from 'react-i18next';
import RegisterPanel from '@/components/login/RegisterPanel';
import PageBanner from '@/components/patterns/PageBanner';

export default function RegisterPageContent() {
  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen bg-white text-charcoal">
      <PageBanner eyebrow={t('register.eyebrow')} title={t('register.title')} description={t('register.description')} />
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 xl:px-12">
        <RegisterPanel />
      </div>
    </main>
  );
}
