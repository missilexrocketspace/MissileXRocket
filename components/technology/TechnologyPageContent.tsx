'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import { aiDefenceTopics } from '@/lib/site-data';

export default function TechnologyPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('technology.eyebrow')} title={t('technology.title')} description={t('technology.description')} />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('technology.areasEyebrow')} title={t('technology.areasTitle')} />
        <div className="mt-8 grid gap-x-10 gap-y-8 border-t border-line pt-8 md:grid-cols-2">
          {aiDefenceTopics.map((topic) => (
            <div key={topic.title} className="border-b border-line pb-6">
              <p className="text-base font-semibold text-charcoal">{topic.title}</p>
              <p className="mt-2 text-sm leading-6 text-steel">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-isroBlue">{t('technology.boundaryLabel')}</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <p className="text-sm leading-7 text-steel">{t('technology.boundaryP1')}</p>
            <p className="text-sm leading-7 text-steel">{t('technology.boundaryP2')}</p>
            <p className="text-sm leading-7 text-steel">{t('technology.boundaryP3')}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
