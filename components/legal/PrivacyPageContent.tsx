'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';

export default function PrivacyPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('privacy.eyebrow')} title={t('privacy.title')} description={t('privacy.description')} />
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-7 text-steel sm:px-8 xl:px-12">
        <p>{t('privacy.p1')}</p>
        <p>{t('privacy.p2')}</p>
        <p>{t('privacy.p3')}</p>
      </div>
    </main>
  );
}
