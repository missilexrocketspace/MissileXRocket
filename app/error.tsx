'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { AlertTriangle } from 'lucide-react';

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useTranslation('pages');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center bg-white">
      <div className="mx-auto max-w-xl px-6 py-20 text-center sm:px-8">
        <AlertTriangle className="mx-auto h-10 w-10 text-signalDark" />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-signalDark">{t('serverError.eyebrow')}</p>
        <h1 className="mt-3 text-3xl font-semibold text-charcoal">{t('serverError.title')}</h1>
        <p className="mt-4 text-sm leading-7 text-steel">{t('serverError.description')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
          <button type="button" onClick={reset} className="rounded bg-isroBlue px-6 py-3 text-white transition hover:bg-isroBlueDark">
            {t('serverError.retry')}
          </button>
          <Link href="/" className="rounded border border-isroBlue/25 px-6 py-3 text-isroBlue transition hover:bg-isroBlue/5">
            {t('serverError.backHome')}
          </Link>
        </div>
      </div>
    </main>
  );
}
