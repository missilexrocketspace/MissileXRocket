'use client';

import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/patterns/SectionHeading';
import Timeline from '@/components/patterns/Timeline';
import { missionTimeline } from '@/lib/site-data';

export default function ResearchTimelineSection() {
  const { t } = useTranslation('home');

  return (
    <section className="border-t border-line bg-mist py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('timeline.eyebrow')} title={t('timeline.title')} description={t('timeline.description')} />
        <div className="mt-10 max-w-3xl">
          <Timeline entries={missionTimeline} />
        </div>
      </div>
    </section>
  );
}
