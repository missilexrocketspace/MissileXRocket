'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import Timeline from '@/components/patterns/Timeline';
import DataTable from '@/components/patterns/DataTable';
import ProgramApplicationForm from '@/components/programs/ProgramApplicationForm';
import { programData } from '@/lib/site-data';

const stepKeys = ['step1', 'step2', 'step3', 'step4'] as const;
const eligibilityKeys = ['level', 'duration', 'mode', 'window'] as const;

export default function ProgramsPageContent() {
  const { t } = useTranslation('pages');

  const applicationCycle = stepKeys.map((key) => ({
    date: t(`programs.steps.${key}.date`),
    title: t(`programs.steps.${key}.title`),
    description: t(`programs.steps.${key}.description`)
  }));

  const eligibility: [string, string][] = eligibilityKeys.map((key) => {
    const row = t(`programs.eligibilityRows.${key}`, { returnObjects: true }) as [string, string];
    return row;
  });

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('programs.eyebrow')} title={t('programs.title')} description={t('programs.description')} />

      <section className="border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('programs.cycleEyebrow')} title={t('programs.cycleTitle')} />
          <div className="mt-10 max-w-3xl">
            <Timeline entries={applicationCycle} />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('programs.eligibilityEyebrow')} title={t('programs.eligibilityTitle')} description={t('programs.eligibilityDesc')} />
          <div className="mt-8 max-w-2xl">
            <DataTable rows={eligibility} />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('programs.detailsEyebrow')} title={t('programs.detailsTitle')} />
          <div className="mt-8 divide-y divide-line border-t border-line">
            {programData.map((program) => (
              <div key={program.title} className="grid gap-3 py-8 lg:grid-cols-[280px_1fr] lg:gap-10">
                <h3 className="text-lg font-semibold text-charcoal">{program.title}</h3>
                <div>
                  <p className="text-sm leading-7 text-steel">{program.description}</p>
                  <ul className="mt-4 space-y-2 text-sm text-steel">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="text-isroBlue">–</span> {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <SectionHeading eyebrow={t('programs.applicationEyebrow')} title={t('programs.applicationTitle')} />
          <div className="mt-8 max-w-2xl">
            <ProgramApplicationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
