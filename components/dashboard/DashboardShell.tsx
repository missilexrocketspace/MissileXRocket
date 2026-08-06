'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';
import { FolderKanban, Newspaper, Users, FileCheck, Rocket, User } from 'lucide-react';

const adminToolKeys = [
  { icon: Users, key: 'manageUsers' },
  { icon: FileCheck, key: 'approveProjects' },
  { icon: Newspaper, key: 'manageNews' }
] as const;

const researcherToolKeys = [
  { icon: FolderKanban, key: 'mySubmissions' },
  { icon: Rocket, key: 'programEnrollment' }
] as const;

export default function DashboardShell() {
  const { user, role } = useAuth();
  const { t } = useTranslation('pages');

  return (
    <div>
      <div className="border-b border-isroBlueDark bg-hero-band px-8 py-10 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-signal">{role} {t('dashboard.control')}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{t('dashboard.welcomeBack')}{user?.name ? `, ${user.name}` : ''}.</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/75">{t('dashboard.description')}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/profile" className="inline-flex items-center gap-2 rounded border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
            <User className="h-4 w-4" /> {t('dashboard.viewProfile')}
          </Link>
          <Link href="/research" className="inline-flex items-center gap-2 rounded bg-signal px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-signalDark">
            {t('dashboard.submitResearch')}
          </Link>
        </div>
      </div>

      <div className="border border-t-0 border-line px-8 py-10 sm:px-10">
        {role === 'Admin' && (
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('dashboard.adminPanel')}</p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {adminToolKeys.map((tool) => {
                const Icon = tool.icon;
                return (
                  <li key={tool.key} className="flex items-center gap-4 py-4">
                    <Icon className="h-5 w-5 shrink-0 text-isroBlue" />
                    <div>
                      <p className="font-semibold text-charcoal">{t(`dashboard.adminTools.${tool.key}.title`)}</p>
                      <p className="text-sm text-steel">{t(`dashboard.adminTools.${tool.key}.description`)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">{t('dashboard.researchOperations')}</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {researcherToolKeys.map((tool) => {
              const Icon = tool.icon;
              return (
                <li key={tool.key} className="flex items-center gap-4 py-4">
                  <Icon className="h-5 w-5 shrink-0 text-isroBlue" />
                  <div>
                    <p className="font-semibold text-charcoal">{t(`dashboard.researcherTools.${tool.key}.title`)}</p>
                    <p className="text-sm text-steel">{t(`dashboard.researcherTools.${tool.key}.description`)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
