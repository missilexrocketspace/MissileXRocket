'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { searchSite, type SearchEntry } from '@/lib/search-index';

export default function SiteSearch() {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchEntry[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setResults(searchSite(query, i18n.language as 'en' | 'hi'));
  }, [query, i18n.language]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateTo = (href: string) => {
    setOpen(false);
    setQuery('');
    router.push(href);
  };

  return (
    <div ref={containerRef} className="relative">
      {open ? (
        <div className="flex items-center gap-2 rounded border border-line bg-mist px-4 py-2">
          <Search className="h-4 w-4 text-steel" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && results[0]) {
                navigateTo(results[0].href);
              }
              if (event.key === 'Escape') {
                setOpen(false);
              }
            }}
            placeholder={t('searchPlaceholder')}
            aria-label={t('search')}
            className="w-56 bg-transparent text-sm text-charcoal placeholder-steel outline-none sm:w-72"
          />
          <button type="button" aria-label="Close search" onClick={() => setOpen(false)} className="text-steel hover:text-charcoal">
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t('search')}
          className="inline-flex items-center gap-2 rounded border border-line bg-mist px-4 py-2 text-sm text-charcoal transition hover:bg-white hover:border-isroBlue/30"
        >
          <Search className="h-4 w-4" />
          <span className="hidden sm:inline">{t('search')}</span>
        </button>
      )}

      {open && query.trim() && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden border border-line bg-white shadow-card">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.map((entry) => (
                <li key={`${entry.category}-${entry.label}`}>
                  <button
                    type="button"
                    onClick={() => navigateTo(entry.href)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm text-charcoal transition hover:bg-mist"
                  >
                    <span>{entry.label}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-isroBlue">{entry.category}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-steel">{t('searchNoResults')}</p>
          )}
        </div>
      )}
    </div>
  );
}
