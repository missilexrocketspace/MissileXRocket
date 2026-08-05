export default function StatBar({ stats, tone = 'light' }: { stats: { label: string; value: string }[]; tone?: 'light' | 'dark' }) {
  const isDark = tone === 'dark';
  return (
    <div className={`grid divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0 ${isDark ? 'divide-white/15 border-y border-white/15' : 'divide-line border-y border-line'}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="px-6 py-6 text-center first:pl-0 last:pr-0 sm:text-left">
          <p className={`text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-isroBlue'}`}>{stat.value}</p>
          <p className={`mt-2 text-xs uppercase tracking-[0.24em] ${isDark ? 'text-white/60' : 'text-steel'}`}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
