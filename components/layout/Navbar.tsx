'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Radar, ShieldCheck, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/components/auth/AuthContext';
import { navItems } from '@/lib/nav-data';
import TopUtilityBar from '@/components/layout/TopUtilityBar';
import SiteSearch from '@/components/layout/SiteSearch';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { user, role, signOutUser } = useAuth();
  const { t } = useTranslation('nav');

  return (
    <header className="sticky top-0 z-40">
      <TopUtilityBar />

      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 sm:px-8 xl:px-12">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-isroBlue/20 bg-isroBlue text-white shadow-card">
              <Radar className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-tight text-charcoal">{t('orgTitleHi')}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-steel">{t('orgTitle')}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            <SiteSearch />
            {user ? (
              <>
                <span className="inline-flex items-center gap-2 rounded border border-isroBlue/20 bg-isroBlue/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-isroBlue">
                  <ShieldCheck className="h-4 w-4" />
                  {role}
                </span>
                <Link href="/profile" className="rounded border border-isroBlue/25 px-4 py-2 text-sm font-medium text-isroBlue transition hover:bg-isroBlue/5">
                  {t('profile')}
                </Link>
                <Link href="/dashboard" className="rounded border border-isroBlue/25 px-4 py-2 text-sm font-medium text-isroBlue transition hover:bg-isroBlue/5">
                  {t('dashboard')}
                </Link>
                <button
                  type="button"
                  onClick={signOutUser}
                  className="rounded bg-signal px-5 py-2 text-sm font-semibold text-white transition hover:bg-signalDark"
                >
                  {t('logout')}
                </button>
              </>
            ) : (
              <Link href="/login" className="rounded bg-isroBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-isroBlueDark">
                {t('login')}
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center rounded border border-line bg-mist p-2 text-charcoal lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav aria-label="Primary" className="hidden border-b border-white/10 bg-isroBlue lg:block">
        <ul className="mx-auto flex max-w-7xl flex-nowrap items-stretch px-3 sm:px-4 xl:px-6">
          {navItems.map((item) => (
            <li
              key={item.href}
              className="relative shrink-0"
              onMouseEnter={() => item.children && setOpenMenu(item.href)}
              onMouseLeave={() => item.children && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 whitespace-nowrap px-2 py-3 text-[13px] font-medium text-white/90 transition hover:bg-isroBlueDark hover:text-white xl:px-2.5"
                aria-haspopup={item.children ? 'true' : undefined}
                aria-expanded={item.children ? openMenu === item.href : undefined}
              >
                {t(`items.${item.i18nKey}`)}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {item.children && openMenu === item.href && (
                <div className="absolute left-0 top-full z-50 w-80 border border-line border-t-0 bg-white p-3 shadow-card">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-3 transition hover:bg-mist"
                    >
                      <p className="text-sm font-semibold text-charcoal">{t(`items.${child.i18nKey}`)}</p>
                      <p className="mt-1 text-xs leading-5 text-steel">{t(`items.${child.i18nKey}Desc`)}</p>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {mobileOpen ? (
        <div className="max-h-[75vh] overflow-y-auto border-t border-line bg-white px-6 py-5 lg:hidden">
          <div className="mb-4">
            <SiteSearch />
          </div>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="flex-1 py-2.5 text-sm font-medium text-charcoal transition hover:text-isroBlue"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(`items.${item.i18nKey}`)}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${t(`items.${item.i18nKey}`)} submenu`}
                      onClick={() => setMobileExpanded(mobileExpanded === item.href ? null : item.href)}
                      className="p-2 text-steel"
                    >
                      <ChevronDown className={`h-4 w-4 transition ${mobileExpanded === item.href ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.href && (
                  <div className="ml-3 mb-2 flex flex-col gap-1 border-l border-line pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-steel transition hover:text-isroBlue"
                        onClick={() => setMobileOpen(false)}
                      >
                        {t(`items.${child.i18nKey}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              {user ? (
                <>
                  <Link href="/profile" className="rounded border border-isroBlue/25 px-4 py-2 text-center text-sm font-medium text-isroBlue">
                    {t('profile')}
                  </Link>
                  <Link href="/dashboard" className="rounded border border-isroBlue/25 px-4 py-2 text-center text-sm font-medium text-isroBlue">
                    {t('dashboard')}
                  </Link>
                  <button
                    type="button"
                    onClick={signOutUser}
                    className="rounded bg-signal px-4 py-2 text-sm font-semibold text-white"
                  >
                    {t('logout')}
                  </button>
                </>
              ) : (
                <Link href="/login" className="rounded bg-isroBlue px-4 py-2 text-center text-sm font-semibold text-white">
                  {t('login')}
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
