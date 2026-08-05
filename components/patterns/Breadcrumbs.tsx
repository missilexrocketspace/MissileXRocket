'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const { t } = useTranslation('common');
  const allItems: Crumb[] = [{ label: t('home'), href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://missilex-rocket-space.vercel.app${item.href}` } : {})
    }))
  };

  return (
    <nav aria-label={t('breadcrumbsLabel')} className="text-xs">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {allItems.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="h-3 w-3 text-steel/60" />}
            {item.href && index < allItems.length - 1 ? (
              <Link href={item.href} className="text-steel transition hover:text-isroBlue">{item.label}</Link>
            ) : (
              <span className="font-medium text-charcoal" aria-current={index === allItems.length - 1 ? 'page' : undefined}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
