'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { galleryImages } from '@/lib/gallery';

const heroImage = galleryImages.find((image) => image.slug === 'hero-launch')!;

export default function HeroSection() {
  const { t } = useTranslation('home');

  return (
    <section className="relative overflow-hidden bg-hero-band">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20 xl:px-12">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-signal">{t('hero.eyebrow')}</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
            {t('hero.title')}
          </h1>
          <p className="max-w-xl text-base leading-8 text-white/75">{t('hero.description')}</p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Link href="/research" className="inline-flex items-center justify-center bg-signal px-6 py-3 text-sm font-semibold text-white transition hover:bg-signalDark">
              {t('hero.cta1')}
            </Link>
            <Link href="/programs" className="inline-flex items-center gap-2 text-sm font-medium text-white/85 transition hover:text-signal">
              {t('hero.cta2')} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/10 lg:aspect-[4/5]">
          <Image
            src={heroImage.src}
            alt={t('hero.imageAlt')}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            placeholder="blur"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#03192b]/90 via-[#03192b]/10 to-transparent p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-signal">{t('hero.referenceImagery')}</p>
            <p className="mt-1.5 text-xs leading-5 text-white/80">{t('hero.imageCredit')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
