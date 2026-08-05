'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import { missiles } from '@/lib/missiles';

export default function MissilesPageContent() {
  const { t } = useTranslation(['pages', 'common']);

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('missiles.eyebrow')} title={t('missiles.title')} description={t('missiles.description')} />
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 xl:px-12">
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-mist text-xs font-semibold uppercase tracking-[0.18em] text-steel">
                <th className="px-4 py-3">{t('missiles.table.designation')}</th>
                <th className="px-4 py-3">{t('missiles.table.type')}</th>
                <th className="px-4 py-3">{t('missiles.table.range')}</th>
                <th className="px-4 py-3">{t('missiles.table.guidance')}</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {missiles.map((missile, index) => (
                <tr key={missile.slug} className={`border-b border-line last:border-b-0 ${index % 2 === 1 ? 'bg-mist/50' : 'bg-white'}`}>
                  <td className="px-4 py-4 font-semibold text-charcoal">{missile.name}</td>
                  <td className="px-4 py-4 text-steel">{missile.type}</td>
                  <td className="px-4 py-4 text-steel">{missile.range}</td>
                  <td className="px-4 py-4 text-steel">{missile.guidance}</td>
                  <td className="px-4 py-4 text-right">
                    <Link href={`/missiles/${missile.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-isroBlue hover:text-isroBlueDark">
                      {t('common:details')} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
          {missiles.slice(0, 4).map((missile) => (
            <div key={missile.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-isroBlue">{missile.type}</p>
              <Link href={`/missiles/${missile.slug}`} className="mt-1 block text-lg font-semibold text-charcoal hover:text-isroBlue">{missile.name}</Link>
              <p className="mt-2 text-sm leading-6 text-steel">{missile.purpose}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
