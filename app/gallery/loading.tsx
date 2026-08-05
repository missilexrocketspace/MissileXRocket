import { SkeletonBanner, SkeletonBlock } from '@/components/patterns/Skeleton';

export default function GalleryLoading() {
  return (
    <main className="bg-white">
      <SkeletonBanner />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <div className="flex gap-6 border-b border-line pb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-4 w-24" />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBlock key={i} className="aspect-[4/3] w-full" />
          ))}
        </div>
      </div>
    </main>
  );
}
