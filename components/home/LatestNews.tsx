'use client';

import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/patterns/SectionHeading';
import PressList from '@/components/patterns/PressList';
import { newsArticles } from '@/lib/news';

const newsItems = newsArticles.slice(0, 3).map((item) => ({ ...item, href: '/news' }));

export default function LatestNews() {
  const { t } = useTranslation('home');

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('news.eyebrow')} title={t('news.title')} linkHref="/news" linkLabel={t('news.viewAll')} />
        <PressList items={newsItems} />
      </div>
    </section>
  );
}
