'use client';

import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/patterns/SectionHeading';
import { programData } from '@/lib/site-data';

export default function ProgramsList() {
  const { t } = useTranslation('home');

  return (
    <section className="border-t border-line bg-mist py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('programs.eyebrow')} title={t('programs.title')} linkHref="/programs" linkLabel={t('programs.viewAll')} />
        <div className="mt-8 divide-y divide-line border-t border-line">
          {programData.slice(0, 4).map((program) => (
            <div key={program.title} className="grid gap-2 py-5 sm:grid-cols-[280px_1fr] sm:gap-8">
              <p className="text-lg font-semibold text-charcoal">{program.title}</p>
              <p className="text-sm leading-6 text-steel">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
