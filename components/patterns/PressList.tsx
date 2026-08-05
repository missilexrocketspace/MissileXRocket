import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export type PressItem = { tag: string; date: string; title: string; excerpt: string; href?: string };

function PressRow({ item }: { item: PressItem }) {
  return (
    <div className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8">
      <div className="flex shrink-0 items-center gap-3 sm:w-40 sm:flex-col sm:items-start">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-signalDark">{item.tag}</span>
        <span className="text-xs text-steel">{item.date}</span>
      </div>
      <div className="flex-1">
        <p className="flex items-center gap-2 text-lg font-semibold text-charcoal">
          {item.title}
          {item.href && <ArrowUpRight className="h-4 w-4 text-steel" />}
        </p>
        <p className="mt-2 text-sm leading-6 text-steel">{item.excerpt}</p>
      </div>
    </div>
  );
}

export default function PressList({ items }: { items: PressItem[] }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((item) =>
        item.href ? (
          <Link key={item.title} href={item.href} className="group block transition hover:bg-mist/50">
            <PressRow item={item} />
          </Link>
        ) : (
          <div key={item.title}>
            <PressRow item={item} />
          </div>
        )
      )}
    </div>
  );
}
