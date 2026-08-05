'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import { activityCards } from '@/lib/site-data';

export default function ActivitiesPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('activities.eyebrow')} title={t('activities.title')} description={t('activities.description')} />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <div className="divide-y divide-line border-t border-line">
          {activityCards.map((activity) => (
            <div key={activity.title} className="grid gap-2 py-8 sm:grid-cols-[240px_1fr] sm:gap-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{activity.title}</p>
              <p className="text-lg font-semibold text-charcoal">{activity.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
