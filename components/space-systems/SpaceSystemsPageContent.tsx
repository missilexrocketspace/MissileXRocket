'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import { spaceMissions, achievements } from '@/lib/site-data';

export default function SpaceSystemsPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('spaceSystems.eyebrow')} title={t('spaceSystems.title')} description={t('spaceSystems.description')} />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('spaceSystems.timelineEyebrow')} title={t('spaceSystems.timelineTitle')} />
        <div className="mt-6 divide-y divide-line border-t border-line">
          {spaceMissions.map((mission) => (
            <div key={mission.name} className="grid gap-3 py-6 lg:grid-cols-[1fr_0.5fr_1.4fr_0.6fr] lg:items-start lg:gap-6">
              <div>
                <p className="text-lg font-semibold text-charcoal">{mission.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-isroBlue">{mission.vehicle}</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel lg:pt-1">{t('spaceSystems.objectiveLabel')}</p>
              <p className="text-sm leading-7 text-steel">{mission.objective}</p>
              <span className="inline-flex h-fit items-center border border-defence/30 px-3 py-1 text-xs font-semibold text-defence">
                {mission.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('spaceSystems.achievementsEyebrow')} title={t('spaceSystems.achievementsTitle')} />
          <dl className="mt-8 divide-y divide-line border-t border-line">
            {achievements.map((item) => (
              <div key={item.year} className="grid gap-2 py-5 sm:grid-cols-[100px_1fr]">
                <dt className="text-sm font-semibold text-isroBlue">{item.year}</dt>
                <dd>
                  <p className="font-semibold text-charcoal">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-steel">{item.detail}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
