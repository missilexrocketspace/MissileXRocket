'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import { rockets } from '@/lib/rockets';

export default function RocketsPageContent() {
  const { t } = useTranslation(['pages', 'common']);

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('rockets.eyebrow')} title={t('rockets.title')} description={t('rockets.description')} />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 xl:px-12">
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-mist text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                <th className="px-4 py-3">{t('rockets.table.vehicle')}</th>
                <th className="px-4 py-3">{t('rockets.table.category')}</th>
                <th className="px-4 py-3">{t('rockets.table.payload')}</th>
                <th className="px-4 py-3">{t('rockets.table.stages')}</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {rockets.map((rocket, index) => (
                <tr key={rocket.slug} className={`border-b border-line last:border-b-0 ${index % 2 === 1 ? 'bg-mist/50' : 'bg-white'}`}>
                  <td className="px-4 py-4 font-semibold text-charcoal">{rocket.name}</td>
                  <td className="px-4 py-4 text-steel">{rocket.category}</td>
                  <td className="px-4 py-4 text-steel">{rocket.payload}</td>
                  <td className="px-4 py-4 text-steel">{rocket.specifications.Stages}</td>
                  <td className="px-4 py-4 text-right">
                    <Link href={`/rockets/${rocket.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-isroBlue hover:text-isroBlueDark">
                      {t('common:details')} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          {rockets.slice(0, 4).map((rocket) => (
            <div key={rocket.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-isroBlue">{rocket.category}</p>
              <Link href={`/rockets/${rocket.slug}`} className="mt-1 block text-lg font-semibold text-charcoal hover:text-isroBlue">{rocket.name}</Link>
              <p className="mt-2 text-sm leading-6 text-steel">{rocket.mission}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
