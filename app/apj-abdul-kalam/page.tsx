import type { Metadata } from 'next';
import KalamPageContent from '@/components/kalam/KalamPageContent';

export const metadata: Metadata = {
  title: 'APJ Abdul Kalam',
  description: "A comprehensive, educational profile of Dr. A.P.J. Abdul Kalam — his childhood, education, ISRO and DRDO careers, the missile development programme, Pokhran-II, his presidency, awards, books, and lasting legacy.",
  alternates: { canonical: '/apj-abdul-kalam' },
  openGraph: {
    title: "APJ Abdul Kalam — Legacy of India's Missile Man",
    description: 'Biography, career, missile development programme, presidency, awards, books and legacy.',
    url: '/apj-abdul-kalam',
    type: 'profile'
  }
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'A. P. J. Abdul Kalam',
  alternateName: 'Avul Pakir Jainulabdeen Abdul Kalam',
  birthDate: '1931-10-15',
  deathDate: '2015-07-27',
  birthPlace: 'Rameswaram, Madras Presidency, India',
  jobTitle: ['Aerospace Scientist', '11th President of India'],
  description:
    "Indian aerospace scientist who led India's satellite launch vehicle and missile development programmes before serving as the 11th President of India.",
  award: ['Bharat Ratna', 'Padma Vibhushan', 'Padma Bhushan'],
  affiliation: [
    { '@type': 'Organization', name: 'Indian Space Research Organisation' },
    { '@type': 'Organization', name: 'Defence Research and Development Organisation' }
  ]
};

export default function KalamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <KalamPageContent />
    </>
  );
}
