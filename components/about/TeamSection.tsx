'use client';

import { useTranslation } from 'react-i18next';

const memberKeys = ['priya', 'arjun', 'nikhil'] as const;

export default function TeamSection() {
  const { t } = useTranslation('about');

  return (
    <ul className="divide-y divide-line border-y border-line">
      {memberKeys.map((key) => {
        const name = t(`leadership.members.${key}.name`);
        return (
          <li key={key} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-isroBlue/30 text-lg font-semibold text-isroBlue">
              {name.charAt(0)}
            </div>
            <div className="sm:w-64">
              <p className="text-lg font-semibold text-charcoal">{name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-isroBlue">{t(`leadership.members.${key}.role`)}</p>
            </div>
            <p className="text-sm leading-6 text-steel">{t(`leadership.members.${key}.focus`)}</p>
          </li>
        );
      })}
    </ul>
  );
}
