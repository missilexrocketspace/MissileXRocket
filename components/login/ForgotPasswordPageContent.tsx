'use client';

import { useTranslation } from 'react-i18next';
import ForgotPasswordPanel from '@/components/login/ForgotPasswordPanel';
import PageBanner from '@/components/patterns/PageBanner';

export default function ForgotPasswordPageContent() {
  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen bg-white text-charcoal">
      <PageBanner eyebrow={t('forgotPassword.eyebrow')} title={t('forgotPassword.title')} description={t('forgotPassword.description')} />
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 xl:px-12">
        <ForgotPasswordPanel />
      </div>
    </main>
  );
}
