'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BadgeCheck, Bookmark, Mail, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';

export default function ProfileShell() {
  const { user, role, sendVerificationEmail } = useAuth();
  const { t } = useTranslation(['pages', 'forms']);
  const [verifyStatus, setVerifyStatus] = useState<'idle' | 'sent' | 'error'>('idle');

  const handleResendVerification = async () => {
    try {
      await sendVerificationEmail();
      setVerifyStatus('sent');
    } catch (error) {
      setVerifyStatus('error');
    }
  };

  return (
    <div>
      <div className="border-b border-isroBlueDark bg-hero-band px-8 py-10 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">{t('pages:profile.title')}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{user?.name || user?.email}</h1>
        <div className="mt-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <ShieldCheck className="h-3.5 w-3.5" /> {role}
          </span>
          <span className="inline-flex items-center gap-2 rounded border border-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            <Mail className="h-3.5 w-3.5" /> {user?.email}
          </span>
        </div>
      </div>

      <div className="grid gap-x-10 border border-t-0 border-line px-8 py-10 sm:px-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('pages:profile.accountStatus')}</p>
          <div className="mt-4 flex items-center gap-3">
            <BadgeCheck className={`h-5 w-5 shrink-0 ${user?.emailVerified ? 'text-emerald-600' : 'text-signalDark'}`} />
            <div>
              <p className="font-semibold text-charcoal">{user?.emailVerified ? t('pages:profile.emailVerified') : t('pages:profile.emailNotVerified')}</p>
              <p className="text-sm text-steel">{user?.emailVerified ? t('pages:profile.verifiedDesc') : t('pages:profile.notVerifiedDesc')}</p>
            </div>
          </div>
          {!user?.emailVerified && (
            <button
              type="button"
              onClick={handleResendVerification}
              className="mt-4 rounded border border-isroBlue/25 px-4 py-2 text-sm font-medium text-isroBlue transition hover:bg-isroBlue/5"
            >
              {t('forms:buttons.resendVerification')}
            </button>
          )}
          {verifyStatus === 'sent' && <p className="mt-3 text-sm text-emerald-700">{t('forms:status.verificationSent')}</p>}
          {verifyStatus === 'error' && <p className="mt-3 text-sm text-red-600">{t('forms:status.verificationError')}</p>}
        </div>

        <div className="mt-10 lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('pages:profile.quickActions')}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/dashboard" className="text-charcoal transition hover:text-isroBlue">{t('pages:profile.goToDashboard')} →</Link></li>
            <li><Link href="/research" className="text-charcoal transition hover:text-isroBlue">{t('pages:profile.submitResearchProject')} →</Link></li>
            <li><Link href="/programs" className="text-charcoal transition hover:text-isroBlue">{t('pages:profile.browsePrograms')} →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border border-t-0 border-line px-8 py-10 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('pages:profile.savedProjects')}</p>
        <div className="mt-5 flex flex-col items-center justify-center border border-dashed border-line px-6 py-10 text-center">
          <Bookmark className="h-6 w-6 text-isroBlue" />
          <p className="mt-3 font-semibold text-charcoal">{t('pages:profile.noSavedProjects')}</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-steel">{t('pages:profile.noSavedProjectsDesc')}</p>
          <Link href="/missiles" className="mt-4 rounded bg-isroBlue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-isroBlueDark">
            {t('pages:profile.browseMissiles')}
          </Link>
        </div>
      </div>
    </div>
  );
}
