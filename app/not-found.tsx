'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Compass } from 'lucide-react';

export default function NotFound() {
  const { t } = useTranslation('pages');

  return (
    <main className="flex min-h-[70vh] items-center bg-white">
      <div className="mx-auto max-w-xl px-6 py-20 text-center sm:px-8">
        <Compass className="mx-auto h-10 w-10 text-isroBlue" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-signalDark">{t('notFound.eyebrow')}</p>
        <h1 className="mt-3 text-3xl font-semibold text-charcoal">{t('notFound.title')}</h1>
        <p className="mt-4 text-sm leading-7 text-steel">{t('notFound.description')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <Link href="/" className="rounded bg-isroBlue px-6 py-3 text-white transition hover:bg-isroBlueDark">
            {t('notFound.backHome')}
          </Link>
          <Link href="/missiles" className="rounded border border-isroBlue/25 px-6 py-3 text-isroBlue transition hover:bg-isroBlue/5">
            {t('notFound.browseMissiles')}
          </Link>
          <Link href="/contact" className="text-isroBlue transition hover:text-isroBlueDark">
            {t('notFound.contactUs')}
          </Link>
        </div>
      </div>
    </main>
  );
}
