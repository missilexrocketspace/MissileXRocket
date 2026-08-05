export function SkeletonBlock({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-line/70 ${className}`} />;
}

export function SkeletonBanner() {
  return (
    <div className="border-b border-line bg-mist px-6 py-14 sm:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        <SkeletonBlock className="h-3 w-40" />
        <SkeletonBlock className="mt-4 h-9 w-2/3" />
        <SkeletonBlock className="mt-4 h-4 w-1/2" />
      </div>
    </div>
  );
}
