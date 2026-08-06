'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';

export default function TermsPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('terms.eyebrow')} title={t('terms.title')} description={t('terms.description')} />
      <div className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-sm leading-7 text-steel sm:px-8 xl:px-12">
        <p>{t('terms.p1')}</p>
        <p>{t('terms.p2')}</p>
        <p>{t('terms.p3')}</p>
      </div>
    </main>
  );
}
