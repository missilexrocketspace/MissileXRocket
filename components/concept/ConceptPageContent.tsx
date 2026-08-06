'use client';

import { ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import SectionHeading from '@/components/patterns/SectionHeading';

const pillarKeys = ['sensorFusion', 'aiDecision', 'spaceAwareness', 'systemsIntegration', 'digitalTwin'] as const;
const boundaryKeys = ['weapon', 'targeting', 'claim', 'classified'] as const;

export default function ConceptPageContent() {
  const { t } = useTranslation('pages');

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('concept.eyebrow')} title={t('concept.title')} description={t('concept.description')} />

      <div className="border-b border-line py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <div className="flex items-start gap-4 border-l-4 border-signal bg-signal/5 px-6 py-5">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-signalDark" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signalDark">{t('concept.disclosureLabel')}</p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-charcoal/80">{t('concept.disclosureBody')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <p className="max-w-3xl text-sm leading-7 text-steel">{t('concept.intro')}</p>

        <div className="mt-14">
          <SectionHeading eyebrow={t('concept.pillarsEyebrow')} title={t('concept.pillarsTitle')} />
          <div className="mt-8 divide-y divide-line border-t border-line">
            {pillarKeys.map((key) => (
              <div key={key} className="grid gap-2 py-6 sm:grid-cols-[260px_1fr]">
                <h3 className="text-base font-semibold text-charcoal">{t(`concept.pillars.${key}.title`)}</h3>
                <p className="text-sm leading-6 text-steel">{t(`concept.pillars.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-mist py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-isroBlue">{t('concept.boundariesLabel')}</p>
          <h2 className="mt-3 text-2xl font-semibold text-charcoal">{t('concept.boundariesTitle')}</h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-steel md:grid-cols-2">
            {boundaryKeys.map((key) => (
              <li key={key}>· {t(`concept.boundaries.${key}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
