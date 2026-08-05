import { FileText, Download } from 'lucide-react';

export type Publication = { title: string; meta: string; format: string };

export default function DownloadList({ items }: { items: Publication[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item.title} className="flex items-start justify-between gap-4 py-4">
          <div className="flex items-start gap-3">
            <FileText className="mt-0.5 h-4 w-4 shrink-0 text-isroBlue" />
            <div>
              <p className="text-sm font-semibold text-charcoal">{item.title}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-steel">{item.meta}</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 border border-line px-2.5 py-1 text-xs font-semibold text-steel">
            <Download className="h-3.5 w-3.5" /> {item.format}
          </span>
        </li>
      ))}
    </ul>
  );
}
