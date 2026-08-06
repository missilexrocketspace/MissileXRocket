'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import { newsArticles } from '@/lib/news';

export default function NewsPageContent() {
  const { t } = useTranslation('pages');
  const [lead, ...rest] = newsArticles;
  const columns = [rest.filter((_, i) => i % 3 === 0), rest.filter((_, i) => i % 3 === 1), rest.filter((_, i) => i % 3 === 2)];

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('news.eyebrow')} title={t('news.title')} description={t('news.description')} />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <div className="border-b-4 border-charcoal pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signalDark">{lead.tag} · {lead.date}</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-charcoal sm:text-4xl">{lead.title}</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-steel">{lead.excerpt}</p>
            </div>
            {lead.image && (
              <div className="relative aspect-[3/2] overflow-hidden border border-line">
                <Image src={lead.image} alt={lead.title} fill sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" className="object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:divide-x md:divide-line">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8 md:px-6 md:first:pl-0 md:last:pr-0">
              {column.map((item) => (
                <article key={item.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signalDark">{item.tag} · {item.date}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-charcoal">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-steel">{item.excerpt}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
