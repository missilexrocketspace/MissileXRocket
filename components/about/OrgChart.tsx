'use client';

import { useTranslation } from 'react-i18next';

const divisionKeys = ['missileSystems', 'rocketSystems', 'aiSystems', 'programs'] as const;

export default function OrgChart() {
  const { t } = useTranslation('about');

  return (
    <div className="flex flex-col items-center">
      <div className="border border-isroBlue bg-isroBlue px-8 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-white/70">{t('orgStructure.governingBody')}</p>
        <p className="mt-1 text-base font-semibold text-white">{t('orgStructure.boardOfGovernors')}</p>
      </div>
      <div className="h-8 w-px bg-line" />
      <div className="border border-line px-8 py-4 text-center">
        <p className="text-xs uppercase tracking-[0.24em] text-steel">{t('orgStructure.executiveLeadership')}</p>
        <p className="mt-1 text-base font-semibold text-charcoal">{t('orgStructure.directorGeneral')}</p>
      </div>
      <div className="h-8 w-px bg-line" />
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 h-px w-[calc(100%-1px)] -translate-x-1/2 bg-line md:block hidden" />
        <div className="grid gap-6 pt-8 md:grid-cols-4">
          {divisionKeys.map((key) => (
            <div key={key} className="relative text-center">
              <div className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-line md:block hidden" />
              <div className="border border-line px-4 py-5">
                <p className="text-sm font-semibold text-charcoal">{t(`orgStructure.divisions.${key}.title`)}</p>
                <p className="mt-2 text-xs leading-5 text-steel">{t(`orgStructure.divisions.${key}.focus`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
