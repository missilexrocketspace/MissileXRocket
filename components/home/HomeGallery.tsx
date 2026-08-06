'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SectionHeading from '@/components/patterns/SectionHeading';
import { galleryImages } from '@/lib/gallery';

const featured = galleryImages.slice(0, 5);

export default function HomeGallery() {
  const { t } = useTranslation('home');

  return (
    <section className="border-t border-line py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 xl:px-12">
        <SectionHeading eyebrow={t('gallery.eyebrow')} title={t('gallery.title')} linkHref="/gallery" linkLabel={t('gallery.viewAll')} />
        <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-2">
          <div className="relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden border border-line sm:aspect-auto">
            <Image src={featured[0].src} alt={featured[0].alt} fill sizes="50vw" placeholder="blur" className="object-cover" />
            <p className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-xs text-white">{featured[0].caption}</p>
          </div>
          {featured.slice(1).map((image) => (
            <div key={image.slug} className="relative aspect-[4/3] overflow-hidden border border-line">
              <Image src={image.src} alt={image.alt} fill sizes="25vw" placeholder="blur" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
