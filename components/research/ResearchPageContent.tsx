'use client';

import { useTranslation } from 'react-i18next';
import PageBanner from '@/components/patterns/PageBanner';
import DownloadList from '@/components/patterns/DownloadItem';
import ResearchSubmissionForm from '@/components/research/ResearchSubmissionForm';
import RequireAuth from '@/components/auth/RequireAuth';
import { researchPapers, publications } from '@/lib/publications';

export default function ResearchPageContent() {
  const { t } = useTranslation(['pages', 'auth', 'common']);

  const sidebarLinks = [
    { href: '#overview', label: t('research.sidebar.overview') },
    { href: '#papers', label: t('research.sidebar.papers') },
    { href: '#publications', label: t('research.sidebar.publications') },
    { href: '#submit', label: t('research.sidebar.submit') }
  ];

  return (
    <main className="bg-white">
      <PageBanner eyebrow={t('research.eyebrow')} title={t('research.title')} description={t('research.description')} />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">{t('common:onThisPage')}</p>
            <ul className="mt-4 space-y-3 border-l border-line pl-4 text-sm">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-steel transition hover:text-isroBlue">{link.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-16">
            <article id="overview" className="max-w-3xl scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-2xl font-semibold text-charcoal">{t('research.approachTitle')}</h2>
              <p>{t('research.approachP1')}</p>
              <p>{t('research.approachP2')}</p>
            </article>

            <section id="papers" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('research.papersTitle')}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">{t('research.papersDesc')}</p>
              <div className="mt-6">
                <DownloadList items={researchPapers} />
              </div>
            </section>

            <section id="publications" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('research.publicationsTitle')}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">{t('research.publicationsDesc')}</p>
              <div className="mt-6">
                <DownloadList items={publications} />
              </div>
            </section>

            <section id="submit" className="scroll-mt-24 border-t border-line pt-12">
              <h2 className="text-xl font-semibold text-charcoal">{t('research.submitTitle')}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-steel">{t('research.submitDesc')}</p>
              <div className="mt-6">
                <RequireAuth title={t('auth:requireAuth.researchTitle')} description={t('auth:requireAuth.researchDescription')}>
                  <ResearchSubmissionForm />
                </RequireAuth>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
