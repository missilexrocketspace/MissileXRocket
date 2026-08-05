import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  linkHref,
  linkLabel,
  tone = 'light'
}: {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
  tone?: 'light' | 'dark';
}) {
  const isDark = tone === 'dark';
  return (
    <div className={`flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between ${isDark ? 'border-white/15' : 'border-line'}`}>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-[0.32em] ${isDark ? 'text-signal' : 'text-isroBlue'}`}>{eyebrow}</p>
        <h2 className={`mt-3 max-w-3xl text-2xl font-semibold sm:text-3xl ${isDark ? 'text-white' : 'text-charcoal'}`}>{title}</h2>
        {description && <p className={`mt-3 max-w-2xl text-sm leading-7 ${isDark ? 'text-white/70' : 'text-steel'}`}>{description}</p>}
      </div>
      {linkHref && linkLabel && (
        <Link
          href={linkHref}
          className={`inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition ${isDark ? 'text-white/85 hover:text-signal' : 'text-isroBlue hover:text-isroBlueDark'}`}
        >
          {linkLabel} <ArrowUpRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
