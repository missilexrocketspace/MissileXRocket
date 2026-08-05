import type { Metadata } from 'next';
import GalleryBrowser from '@/components/gallery/GalleryBrowser';
import GalleryPageBanner from '@/components/gallery/GalleryPageBanner';

export const metadata: Metadata = {
  title: 'Gallery',
  description: "Curated imagery from India's space and defence research programs — launches, spacecraft integration, and research facilities, reproduced under GODL-India with attribution.",
  alternates: { canonical: '/gallery' },
  openGraph: { title: 'Gallery', description: "Curated imagery from India's space and defence research programs.", url: '/gallery' }
};

export default function GalleryPage() {
  return (
    <main className="bg-white">
      <GalleryPageBanner />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <GalleryBrowser />
      </div>
    </main>
  );
}
