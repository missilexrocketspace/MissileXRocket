'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DataTable from '@/components/patterns/DataTable';
import Timeline from '@/components/patterns/Timeline';
import Breadcrumbs from '@/components/patterns/Breadcrumbs';
import type { MissileData } from '@/lib/missiles';
import { missiles } from '@/lib/missiles';
import { galleryImages } from '@/lib/gallery';

export default function MissileDetailContent({ missile }: { missile: MissileData }) {
  const { t } = useTranslation('pages');

  const relatedMissiles = missiles.filter((item) => item.type === missile.type && item.slug !== missile.slug).slice(0, 3);
  const relatedImages = galleryImages.filter((image) => image.category === 'Missiles');
  const specRows: [string, string][] = [
    [t('missiles.table.type'), missile.type],
    [t('missiles.table.range'), missile.range],
    [t('missiles.table.guidance'), missile.guidance],
    ...Object.entries(missile.specifications)
  ];

  return (
    <main className="bg-white">
      <div className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 pt-8 sm:px-8 xl:px-12">
          <Breadcrumbs items={[{ label: t('missiles.eyebrow'), href: '/missiles' }, { label: missile.name }]} />
          <Link href="/missiles" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-isroBlue hover:text-isroBlueDark">
            <ArrowLeft className="h-4 w-4" /> {t('missiles.detail.backLink')}
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center xl:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-isroBlue">{missile.type}</p>
            <h1 className="mt-3 text-3xl font-semibold text-charcoal sm:text-4xl">{missile.name}</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-steel">{missile.purpose}</p>
          </div>
          {relatedImages[0] && (
            <div className="relative aspect-[16/10] overflow-hidden border border-line">
              <Image src={relatedImages[0].src} alt={relatedImages[0].alt} fill sizes="(max-width: 1024px) 100vw, 50vw" placeholder="blur" className="object-cover" />
              <p className="absolute bottom-0 right-0 bg-charcoal/80 px-2.5 py-1 text-[11px] text-white/85">{t('missiles.detail.illustrative')} — {relatedImages[0].credit}</p>
            </div>
          )}
        </div>
      </div>

      <section className="border-b border-line py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <h2 className="text-xl font-semibold text-charcoal">{t('missiles.detail.history')}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{missile.history}</p>
          <h2 className="mt-10 text-xl font-semibold text-charcoal">{t('missiles.detail.techOverview')}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{missile.technology}</p>
          <p className="mt-3 max-w-3xl text-xs uppercase tracking-[0.18em] text-steel/70">{t('missiles.detail.disclaimer')}</p>
        </div>
      </section>

      <section className="border-b border-line bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <h2 className="text-xl font-semibold text-charcoal">{t('missiles.detail.specifications')}</h2>
          <div className="mt-6 max-w-2xl">
            <DataTable rows={specRows} />
          </div>
        </div>
      </section>

      <section className="border-b border-line py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
          <h2 className="text-xl font-semibold text-charcoal">{t('missiles.detail.timeline')}</h2>
          <div className="mt-8 max-w-2xl">
            <Timeline entries={missile.timeline.map((entry) => ({ date: entry.split(' ')[0], title: entry.replace(/^\S+\s/, '') }))} />
          </div>
        </div>
      </section>

      {relatedImages.length > 0 && (
        <section className="border-b border-line py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
            <h2 className="text-xl font-semibold text-charcoal">{t('missiles.detail.gallery')}</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {relatedImages.map((image) => (
                <div key={image.slug} className="relative aspect-[3/2] overflow-hidden border border-line">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" placeholder="blur" className="object-cover" />
                  <p className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-xs text-white">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedMissiles.length > 0 && (
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
            <h2 className="text-xl font-semibold text-charcoal">{t('missiles.detail.relatedResearch')}</h2>
            <ul className="mt-6 divide-y divide-line border-t border-line">
              {relatedMissiles.map((related) => (
                <li key={related.slug}>
                  <Link href={`/missiles/${related.slug}`} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold text-charcoal">{related.name}</p>
                      <p className="mt-1 text-sm text-steel">{related.purpose}</p>
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-isroBlue">{related.range}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
