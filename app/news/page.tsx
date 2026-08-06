import type { Metadata } from 'next';
import NewsPageContent from '@/components/news/NewsPageContent';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest technology updates and research highlights covering platform developments, research publications, and defence aerospace collaboration milestones.',
  alternates: { canonical: '/news' },
  openGraph: { title: 'News', description: 'Latest technology updates and research highlights.', url: '/news' }
};

export default function NewsPage() {
  return <NewsPageContent />;
}
