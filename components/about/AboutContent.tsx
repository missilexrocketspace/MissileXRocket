'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import Timeline from '@/components/patterns/Timeline';
import OrgChart from '@/components/about/OrgChart';
import TeamSection from '@/components/about/TeamSection';

const timelineKeys = ['founded', 'cohort', 'platform', 'expanded'] as const;

export default function AboutContent() {
  const { t } = useTranslation('about');

  const orgTimeline = timelineKeys.map((key) => ({
    date: t(`timeline.entries.${key}.date`),
    title: t(`timeline.entries.${key}.title`),
    description: t(`timeline.entries.${key}.description`)
  }));

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('banner.eyebrow')} title={t('banner.title')} description={t('banner.description')} />

      <section className="border-b border-line py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 md:grid-cols-2 xl:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-isroBlue">{t('vision.eyebrow')}</p>
            <h2 className="mt-3 text-2xl font-semibold text-charcoal">{t('vision.title')}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">{t('vision.body')}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-isroBlue">{t('mission.eyebrow')}</p>
            <h2 className="mt-3 text-2xl font-semibold text-charcoal">{t('mission.title')}</h2>
            <p className="mt-4 text-sm leading-7 text-steel">{t('mission.body')}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('orgStructure.eyebrow')} title={t('orgStructure.title')} />
          <div className="mt-12">
            <OrgChart />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('timeline.eyebrow')} title={t('timeline.title')} />
          <div className="mt-10 max-w-3xl">
            <Timeline entries={orgTimeline} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('leadership.eyebrow')} title={t('leadership.title')} description={t('leadership.description')} />
          <div className="mt-10">
            <TeamSection />
          </div>
        </div>
      </section>
    </main>
  );
}
