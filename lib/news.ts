import type { StaticImageData } from 'next/image';
import { galleryImages } from '@/lib/gallery';

export type NewsArticle = { tag: string; date: string; title: string; excerpt: string; lead?: boolean; image?: StaticImageData };

const spacecraftIntegrationImage = galleryImages.find((image) => image.slug === 'spacecraft-integration')!.src;

export const newsArticles: NewsArticle[] = [
  {
    tag: 'Programme',
    date: '28 Jul 2026',
    title: 'AI Mission Planning Lab reaches full operational capacity',
    excerpt:
      'The lab now supports concurrent simulation runs for mission scheduling and payload-priority research, marking the completion of its second expansion phase since 2024.',
    lead: true,
    image: spacecraftIntegrationImage
  },
  {
    tag: 'Technology',
    date: '14 Jul 2026',
    title: 'Launch Vehicle Simulation Network expanded to twelve nodes',
    excerpt: 'New compute nodes extend trajectory-modelling capacity for the Space Research Programme.'
  },
  {
    tag: 'Announcement',
    date: '02 Jul 2026',
    title: 'Research Fellowship 2026 cohort announced',
    excerpt: 'Twenty-two fellows join structured research tracks in guidance systems and satellite analytics.'
  },
  {
    tag: 'Research',
    date: '22 Jun 2026',
    title: 'Concept lab publishes open architecture whitepaper',
    excerpt: 'The AI defence research initiative released a technical framework for secure sensor fusion and digital twin systems.'
  },
  {
    tag: 'Programme',
    date: '05 Jun 2026',
    title: 'New Space Research Program launched for graduate researchers',
    excerpt: 'A new fellowship is now accepting applications for AI-enabled satellite analytics and missile guidance studies.'
  },
  {
    tag: 'Technology',
    date: '19 May 2026',
    title: 'Rocket systems simulation suite reaches mission-ready status',
    excerpt: 'Expanded launch vehicle modelling infrastructure is now available to registered research teams.'
  },
  {
    tag: 'Announcement',
    date: '30 Apr 2026',
    title: 'Dashboard analytics module updated for research leads',
    excerpt: 'Programme administrators can now export submission and review activity for quarterly reporting.'
  }
];
