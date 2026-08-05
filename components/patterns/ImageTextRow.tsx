import Image, { type StaticImageData } from 'next/image';

export default function ImageTextRow({
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  credit
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
  credit?: string;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div className="relative aspect-[4/3] overflow-hidden border border-line">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          placeholder={typeof imageSrc === 'string' ? undefined : 'blur'}
          className="object-cover"
        />
        {credit && (
          <p className="absolute bottom-0 right-0 bg-charcoal/80 px-2.5 py-1 text-[11px] text-white/85">{credit}</p>
        )}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-isroBlue">{eyebrow}</p>
        <h3 className="mt-3 text-2xl font-semibold text-charcoal sm:text-3xl">{title}</h3>
        <div className="mt-4 space-y-4 text-sm leading-7 text-steel">{children}</div>
      </div>
    </div>
  );
}
