'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';
import { programData } from '@/lib/site-data';

export default function InnovationPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('innovation.eyebrow')} title={t('innovation.title')} description={t('innovation.description')} />

      <div className="border-b border-line py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <Link href="/concept" className="group flex items-center justify-between gap-4 border border-line px-6 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('innovation.featuredConcept')}</p>
              <p className="mt-1 text-xl font-semibold text-charcoal">{t('innovation.featuredConceptTitle')}</p>
              <p className="mt-1 text-sm text-steel">{t('innovation.featuredConceptDesc')}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-steel transition group-hover:text-isroBlue" />
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('innovation.programmesEyebrow')} title={t('innovation.programmesTitle')} />
        <div className="mt-8 divide-y divide-line border-t border-line">
          {programData.map((program) => (
            <div key={program.title} className="grid gap-3 py-7 lg:grid-cols-[260px_1fr]">
              <h3 className="text-base font-semibold text-charcoal">{program.title}</h3>
              <div>
                <p className="text-sm leading-6 text-steel">{program.description}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-steel">
                  {program.details.map((detail) => (
                    <li key={detail}>· {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl border-t border-line pt-8 text-sm leading-7 text-steel">
          {t('innovation.closingPart1')}{' '}
          <Link href="/programs" className="font-semibold text-isroBlue hover:text-isroBlueDark">{t('innovation.closingProgramsLink')}</Link>{' '}
          {t('innovation.closingPart2')}{' '}
          <Link href="/research" className="font-semibold text-isroBlue hover:text-isroBlueDark">{t('innovation.closingResearchLink')}</Link>{' '}
          {t('innovation.closingPart3')}
        </p>
      </div>
    </main>
  );
}
