'use client';

import { useTranslation } from 'react-i18next';
import ProfileShell from '@/components/profile/ProfileShell';
import RequireAuth from '@/components/auth/RequireAuth';

export default function ProfilePageContent() {
  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="mx-auto max-w-5xl px-6 pt-16 sm:px-8 xl:px-12">
        <RequireAuth title={t('requireAuth.profileTitle')} description={t('requireAuth.profileDescription')}>
          <ProfileShell />
        </RequireAuth>
      </div>
    </main>
  );
}
