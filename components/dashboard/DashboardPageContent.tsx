'use client';

import { useTranslation } from 'react-i18next';
import DashboardShell from '@/components/dashboard/DashboardShell';
import RequireAuth from '@/components/auth/RequireAuth';

export default function DashboardPageContent() {
  const { t } = useTranslation('auth');

  return (
    <main className="min-h-screen bg-white pb-24">
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 xl:px-12">
        <RequireAuth title={t('requireAuth.dashboardTitle')} description={t('requireAuth.dashboardDescription')}>
          <DashboardShell />
        </RequireAuth>
      </div>
    </main>
  );
}
