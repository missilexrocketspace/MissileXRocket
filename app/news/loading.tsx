import { SkeletonBanner, SkeletonBlock } from '@/components/patterns/Skeleton';

export default function NewsLoading() {
  return (
    <main className="bg-white">
      <SkeletonBanner />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <SkeletonBlock className="h-40 w-full" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <SkeletonBlock className="h-3 w-1/2" />
              <SkeletonBlock className="h-5 w-full" />
              <SkeletonBlock className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
