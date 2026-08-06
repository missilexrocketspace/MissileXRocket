'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MasonryGallery from '@/components/patterns/MasonryGallery';
import { galleryImages, type GalleryImage } from '@/lib/gallery';

const categories: (GalleryImage['category'] | 'All')[] = ['All', 'Rocket Launches', 'Satellites & Spacecraft', 'Missiles', 'Defence Forces', 'Research Labs'];

export default function GalleryBrowser() {
  const { t } = useTranslation('pages');
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const filtered = active === 'All' ? galleryImages : galleryImages.filter((image) => image.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line pb-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`border-b-2 pb-2 text-sm font-semibold transition ${
              active === category ? 'border-isroBlue text-isroBlue' : 'border-transparent text-steel hover:text-charcoal'
            }`}
          >
            {t(`gallery.categories.${category === 'All' ? 'all' : category}`)}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <MasonryGallery images={filtered} />
      </div>
    </div>
  );
}
