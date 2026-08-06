'use client';

import Link from 'next/link';
import { LockKeyhole } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';

export default function RequireAuth({
  children,
  title,
  description
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  const { user, loading } = useAuth();
  const { t } = useTranslation(['auth', 'forms']);

  if (loading) {
    return (
      <div className="border border-line bg-white p-10 text-center">
        <p className="text-sm text-steel">{t('requireAuth.checkingSession')}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="border border-line bg-mist p-10 text-center">
        <LockKeyhole className="mx-auto h-6 w-6 text-isroBlue" />
        <h2 className="mt-4 text-xl font-semibold text-charcoal">{title ?? t('requireAuth.defaultTitle')}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-steel">{description ?? t('requireAuth.defaultDescription')}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/login" className="rounded bg-isroBlue px-6 py-3 text-sm font-semibold text-white transition hover:bg-isroBlueDark">
            {t('forms:buttons.signIn')}
          </Link>
          <Link href="/register" className="rounded border border-isroBlue/25 px-6 py-3 text-sm font-medium text-isroBlue transition hover:bg-isroBlue/5">
            {t('requireAuth.createAccount')}
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
