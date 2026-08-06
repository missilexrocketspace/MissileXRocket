import { Megaphone } from 'lucide-react';

export type Notice = { date: string; text: string };

export default function NoticeBoard({ notices, label = 'Announcements' }: { notices: Notice[]; label?: string }) {
  return (
    <div className="border border-line">
      <div className="flex items-center gap-2 border-b border-line bg-isroBlue px-5 py-3">
        <Megaphone className="h-4 w-4 text-white" />
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white">{label}</p>
      </div>
      <ul className="divide-y divide-line">
        {notices.map((notice) => (
          <li key={notice.text} className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-xs font-semibold text-steel sm:w-28">{notice.date}</span>
            <span className="text-sm text-charcoal">{notice.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
