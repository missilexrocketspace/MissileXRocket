'use client';

import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/patterns/SectionHeading';
import { achievements } from '@/lib/site-data';

export default function AchievementsList() {
  const { t } = useTranslation('home');

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('achievements.eyebrow')} title={t('achievements.title')} />
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
    </section>
  );
}
