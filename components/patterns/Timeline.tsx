export type TimelineEntry = { date: string; title: string; description?: string };

export default function Timeline({ entries, tone = 'light' }: { entries: TimelineEntry[]; tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark';
  return (
    <ol className={`border-l-2 ${isDark ? 'border-white/20' : 'border-isroBlue/25'}`}>
      {entries.map((entry) => (
        <li key={`${entry.date}-${entry.title}`} className="relative pb-10 pl-8 last:pb-0">
          <span
            className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 ${isDark ? 'border-[#052239] bg-signal' : 'border-white bg-isroBlue'}`}
          />
          <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${isDark ? 'text-signal' : 'text-isroBlue'}`}>{entry.date}</p>
          <p className={`mt-2 text-lg font-semibold ${isDark ? 'text-white' : 'text-charcoal'}`}>{entry.title}</p>
          {entry.description && <p className={`mt-2 max-w-2xl text-sm leading-7 ${isDark ? 'text-white/70' : 'text-steel'}`}>{entry.description}</p>}
        </li>
      ))}
    </ol>
  );
}
