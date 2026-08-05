import { missiles } from '@/lib/missiles';
import { rockets } from '@/lib/rockets';
import { programData, careerData } from '@/lib/site-data';
import { navItems } from '@/lib/nav-data';
import navEn from '@/lib/i18n/locales/en/nav.json';
import navHi from '@/lib/i18n/locales/hi/nav.json';
import type { SupportedLanguage } from '@/lib/i18n/config';

export type SearchEntry = { label: string; href: string; category: string };

const navResources: Record<SupportedLanguage, typeof navEn> = { en: navEn, hi: navHi };

export function buildSearchIndex(lang: SupportedLanguage = 'en'): SearchEntry[] {
  const navLabels = navResources[lang]?.items ?? navEn.items;

  const pages: SearchEntry[] = navItems.flatMap((item) => {
    const base: SearchEntry = { label: navLabels[item.i18nKey as keyof typeof navLabels] ?? item.i18nKey, href: item.href, category: 'Page' };
    const children = (item.children ?? []).map((child) => ({
      label: navLabels[child.i18nKey as keyof typeof navLabels] ?? child.i18nKey,
      href: child.href,
      category: 'Page'
    }));
    return [base, ...children];
  });

  const missileEntries: SearchEntry[] = missiles.map((missile) => ({
    label: missile.name,
    href: `/missiles/${missile.slug}`,
    category: 'Missile'
  }));

  const rocketEntries: SearchEntry[] = rockets.map((rocket) => ({
    label: rocket.name,
    href: `/rockets/${rocket.slug}`,
    category: 'Rocket System'
  }));

  const programEntries: SearchEntry[] = programData.map((program) => ({
    label: program.title,
    href: '/programs',
    category: 'Program'
  }));

  const careerEntries: SearchEntry[] = careerData.map((position) => ({
    label: position.title,
    href: '/careers',
    category: 'Career'
  }));

  return [...pages, ...missileEntries, ...rocketEntries, ...programEntries, ...careerEntries];
}

export function searchSite(query: string, lang: SupportedLanguage = 'en', limit = 8): SearchEntry[] {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  return buildSearchIndex(lang)
    .filter((entry) => entry.label.toLowerCase().includes(trimmed))
    .slice(0, limit);
}
