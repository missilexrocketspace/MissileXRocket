'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import CareerApplicationForm from '@/components/careers/CareerApplicationForm';
import { careerData } from '@/lib/site-data';

export default function CareersPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('careers.eyebrow')} title={t('careers.title')} description={t('careers.description')} />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('careers.openPositions')} title={t('careers.openPositionsDesc')} />
        <div className="mt-8 divide-y divide-line border-t border-line">
          {careerData.map((position) => (
            <div key={position.title} className="grid gap-4 py-8 lg:grid-cols-[260px_1fr]">
              <div>
                <h3 className="text-lg font-semibold text-charcoal">{position.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-isroBlue">{position.location}</p>
              </div>
              <div>
                <p className="text-sm leading-6 text-steel">{position.summary}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-steel">{t('careers.requirements')}</p>
                <ul className="mt-2 space-y-1.5 text-sm text-steel">
                  {position.requirements.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl border-t border-line pt-12">
          <CareerApplicationForm />
        </div>
      </div>
    </main>
  );
}
