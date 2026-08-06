'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/lib/gallery';

const spanClasses = ['row-span-2', '', '', 'row-span-2', '', ''];

export default function MasonryGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const show = (delta: number) => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + delta + images.length) % images.length);
  };

  useEffect(() => {
    if (activeIndex === null) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowLeft') show(-1);
      if (event.key === 'ArrowRight') show(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <div className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:grid-cols-3 sm:auto-rows-[180px] lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.slug}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden border border-line text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-isroBlue ${spanClasses[index % spanClasses.length]}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" placeholder="blur" className="object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3">
              <p className="text-xs font-medium leading-4 text-white">{image.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-10" role="dialog" aria-modal="true" aria-label={active.caption}>
          <button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)} aria-label="Close" className="absolute right-4 top-4 text-white/80 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <X className="h-6 w-6" />
          </button>
          <button type="button" onClick={() => show(-1)} aria-label="Previous image" className="absolute left-4 text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-8">
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button type="button" onClick={() => show(1)} aria-label="Next image" className="absolute right-4 text-white/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8">
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="relative max-h-[80vh] w-full max-w-4xl">
            <div className="relative aspect-[4/3] w-full">
              <Image src={active.src} alt={active.alt} fill sizes="90vw" placeholder="blur" className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-white">{active.caption}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">{active.credit} · {active.license}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
