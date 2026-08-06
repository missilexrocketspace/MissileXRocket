'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';

export default function IsroLeadershipPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('isroLeadership.eyebrow')} title={t('isroLeadership.title')} description={t('isroLeadership.description')} />

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 xl:px-12">
        <article className="space-y-4 text-sm leading-7 text-steel">
          <h2 className="text-xl font-semibold text-charcoal">{t('isroLeadership.chairmanTitle')}</h2>
          <p>{t('isroLeadership.chairmanBody')}</p>
        </article>

        <article className="mt-10 space-y-4 text-sm leading-7 text-steel">
          <h2 className="text-xl font-semibold text-charcoal">{t('isroLeadership.programmeTitle')}</h2>
          <p>{t('isroLeadership.programmeBody')}</p>
        </article>

        <article className="mt-10 space-y-4 text-sm leading-7 text-steel">
          <h2 className="text-xl font-semibold text-charcoal">{t('isroLeadership.pastChairmenTitle')}</h2>
          <p>{t('isroLeadership.pastChairmenBody')}</p>
        </article>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('isroLeadership.focusAreasLabel')}</p>
            <p className="mt-3 text-sm leading-7 text-steel">{t('isroLeadership.focusAreasBody')}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('isroLeadership.directionLabel')}</p>
            <p className="mt-3 text-sm leading-7 text-steel">{t('isroLeadership.directionBody')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
