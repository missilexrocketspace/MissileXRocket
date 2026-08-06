'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  const footerLinks = [
    { key: 'programs', href: '/programs' },
    { key: 'research', href: '/research' },
    { key: 'news', href: '/news' },
    { key: 'contact', href: '/contact' }
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-hero-band px-6 py-12 sm:px-8 xl:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-signal">MissileX Rocket Space</p>
          <p className="text-sm leading-7 text-white/75">{t('tagline')}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">{t('rights')}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{t('quickLinks')}</p>
            <div className="flex flex-col gap-2 text-sm text-white/75">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-signal">
                  {t(`links.${link.key}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{t('resources')}</p>
            <div className="flex flex-col gap-2 text-sm text-white/75">
              <Link href="/privacy" className="transition hover:text-signal">{t('resourceLinks.privacy')}</Link>
              <Link href="/terms" className="transition hover:text-signal">{t('resourceLinks.terms')}</Link>
              <Link href="/careers" className="transition hover:text-signal">{t('resourceLinks.careers')}</Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{t('contact')}</p>
            <p className="text-sm text-white/75">admin@missilexspace.in</p>
            <p className="text-sm text-white/75">+91 22 4000 9000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
