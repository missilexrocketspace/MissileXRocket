import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import RocketDetailContent from '@/components/rockets/RocketDetailContent';
import { rockets } from '@/lib/rockets';

export function generateStaticParams() {
  return rockets.map((rocket) => ({ slug: rocket.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rocket = rockets.find((item) => item.slug === slug);
  if (!rocket) return {};
  return {
    title: rocket.name,
    description: rocket.mission,
    alternates: { canonical: `/rockets/${rocket.slug}` },
    openGraph: { title: rocket.name, description: rocket.mission, url: `/rockets/${rocket.slug}` }
  };
}

export default async function RocketDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rocket = rockets.find((item) => item.slug === slug);
  if (!rocket) notFound();

  return <RocketDetailContent rocket={rocket} />;
}
