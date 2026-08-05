import type { StaticImageData } from 'next/image';
import portrait from '@/public/images/kalam/portrait.jpg';
import bastiCollege from '@/public/images/kalam/basti-college.jpg';
import veena from '@/public/images/kalam/veena.jpg';

export type KalamImage = { slug: string; src: StaticImageData; credit: string; license: string };

export const kalamPortrait: KalamImage = {
  slug: 'portrait',
  src: portrait,
  credit: 'Government of India, via Wikimedia Commons',
  license: 'GODL-India'
};

export const kalamGallery: KalamImage[] = [
  {
    slug: 'basti-college',
    src: bastiCollege,
    credit: 'Photo: Abdulqavi11, via Wikimedia Commons',
    license: 'CC BY-SA 4.0'
  },
  {
    slug: 'veena',
    src: veena,
    credit: 'Photo: DesiBoy101, via Wikimedia Commons — his veena, on display at the Rashtrapati Bhavan Museum',
    license: 'CC BY 4.0'
  }
];
