'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DataTable from '@/components/patterns/DataTable';
import Breadcrumbs from '@/components/patterns/Breadcrumbs';
import type { RocketData } from '@/lib/rockets';
import { galleryImages } from '@/lib/gallery';

export default function RocketDetailContent({ rocket }: { rocket: RocketData }) {
  const { t } = useTranslation('pages');

  const relatedImages = galleryImages.filter((image) => image.category === 'Rocket Launches' || image.category === 'Satellites & Spacecraft');
  const specRows: [string, string][] = [
    [t('rockets.table.category'), rocket.category],
    [t('rockets.table.payload'), rocket.payload],
    ...Object.entries(rocket.specifications)
  ];

  const sections = [
    { href: '#overview', label: t('rockets.detail.overview') },
    { href: '#specifications', label: t('rockets.detail.specifications') },
    { href: '#launch-history', label: t('rockets.detail.launchHistory') },
    { href: '#gallery', label: t('rockets.detail.gallery') }
  ];

  return (
    <main className="bg-white">
      <div className="border-b border-line bg-mist">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 xl:px-12">
          <Breadcrumbs items={[{ label: t('rockets.eyebrow'), href: '/rockets' }, { label: rocket.name }]} />
          <Link href="/rockets" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-isroBlue hover:text-isroBlueDark">
            <ArrowLeft className="h-4 w-4" /> {t('rockets.detail.backLink')}
          </Link>
          <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-isroBlue">{t('rockets.detail.technicalDocument')} · {rocket.category}</p>
              <h1 className="mt-2 text-3xl font-semibold text-charcoal sm:text-4xl">{rocket.name}</h1>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-steel">{t('rockets.table.payload')}: {rocket.payload}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">{t('rockets.detail.sections')}</p>
            <ul className="mt-4 space-y-3 border-l border-line pl-4 text-sm">
              {sections.map((section) => (
                <li key={section.href}>
                  <a href={section.href} className="text-steel transition hover:text-isroBlue">{section.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-14">
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('rockets.detail.overview')}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-steel">{rocket.history}</p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-steel"><strong className="text-charcoal">{t('rockets.detail.missionProfile')}</strong> {rocket.mission}</p>
            </section>

            <section id="specifications" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('rockets.detail.specifications')}</h2>
              <div className="mt-6 max-w-2xl">
                <DataTable rows={specRows} caption={`${rocket.name} — ${t('rockets.detail.dataSheet')}`} />
              </div>
            </section>

            <section id="launch-history" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('rockets.detail.launchHistory')}</h2>
              <ol className="mt-6 max-w-2xl divide-y divide-line border-y border-line">
                {rocket.launches.map((entry, index) => (
                  <li key={entry} className="flex gap-4 py-3.5 text-sm">
                    <span className="w-6 shrink-0 font-semibold text-isroBlue">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-steel">{entry}</span>
                  </li>
                ))}
              </ol>
            </section>

            {relatedImages.length > 0 && (
              <section id="gallery" className="scroll-mt-24">
                <h2 className="text-xl font-semibold text-charcoal">{t('rockets.detail.gallery')}</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {relatedImages.map((image) => (
                    <div key={image.slug} className="relative aspect-[3/2] overflow-hidden border border-line">
                      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" placeholder="blur" className="object-cover" />
                      <p className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-xs text-white">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
