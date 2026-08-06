import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import MissileDetailContent from '@/components/missiles/MissileDetailContent';
import { missiles } from '@/lib/missiles';

export function generateStaticParams() {
  return missiles.map((missile) => ({ slug: missile.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const missile = missiles.find((item) => item.slug === slug);
  if (!missile) return {};
  return {
    title: missile.name,
    description: missile.purpose,
    alternates: { canonical: `/missiles/${missile.slug}` },
    openGraph: { title: missile.name, description: missile.purpose, url: `/missiles/${missile.slug}` }
  };
}

export default async function MissileDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const missile = missiles.find((item) => item.slug === slug);
  if (!missile) notFound();

  return <MissileDetailContent missile={missile} />;
}
