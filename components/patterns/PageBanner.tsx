export default function PageBanner({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-isroBlueDark bg-hero-band">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:py-16 xl:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-signal">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{description}</p>}
      </div>
    </div>
  );
}
