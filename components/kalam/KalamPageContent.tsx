'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Rocket, ShieldCheck, Landmark, Award } from 'lucide-react';
import Timeline from '@/components/patterns/Timeline';
import Accordion from '@/components/patterns/Accordion';
import Breadcrumbs from '@/components/patterns/Breadcrumbs';
import { kalamPortrait, kalamGallery } from '@/lib/kalam';

const awardKeys = ['padmaBhushan', 'padmaVibhushan', 'bharatRatna', 'indiraGandhi', 'veerSavarkar', 'honoraryDoctorates'] as const;
const timelineYears = ['1931', '1954', '1960', '1969', '1980', '1982', '1997', '1998', '2002', '2007', '2015'] as const;

export default function KalamPageContent() {
  const { t } = useTranslation(['apjKalam', 'common']);

  const timelineEntries = timelineYears.map((year) => ({ date: year, title: t(`timeline.${year}`) }));
  const quotes = t('quotes', { returnObjects: true }) as string[];
  const books = t('books', { returnObjects: true }) as { title: string; year: string; desc: string }[];
  const faq = t('faq', { returnObjects: true }) as { q: string; a: string }[];

  const sections = [
    { id: 'biography', label: t('sections.biography') },
    { id: 'childhood', label: t('sections.childhood') },
    { id: 'education', label: t('sections.education') },
    { id: 'isro', label: t('sections.isroCareer') },
    { id: 'drdo', label: t('sections.drdoCareer') },
    { id: 'missiles', label: t('sections.missileProgramme') },
    { id: 'pokhran', label: t('sections.pokhran') },
    { id: 'presidency', label: t('sections.presidency') },
    { id: 'awards', label: t('sections.awards') },
    { id: 'vision2020', label: t('sections.vision2020') },
    { id: 'quotes', label: t('sections.quotes') },
    { id: 'timeline', label: t('sections.timeline') },
    { id: 'gallery', label: t('sections.gallery') },
    { id: 'books', label: t('sections.books') },
    { id: 'legacy', label: t('sections.legacy') },
    { id: 'faq', label: t('sections.faq') }
  ];

  return (
    <main className="bg-white">
      <div className="border-b border-isroBlueDark bg-hero-band">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-8 lg:grid-cols-[1fr_360px] lg:items-center xl:px-12">
          <div>
            <div className="[&_span]:text-white/70 [&_a]:text-white/70 [&_a:hover]:text-white [&_svg]:text-white/40">
              <Breadcrumbs items={[{ label: t('banner.eyebrow') }]} />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.34em] text-signal">{t('banner.eyebrow')}</p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">{t('banner.title')}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{t('banner.description')}</p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-lg border border-white/15">
            <Image src={kalamPortrait.src} alt="Official portrait of Dr. A.P.J. Abdul Kalam" fill sizes="280px" placeholder="blur" className="object-cover" priority />
            <p className="absolute inset-x-0 bottom-0 bg-black/60 px-2 py-1.5 text-[10px] text-white/85">{kalamPortrait.credit} · {kalamPortrait.license}</p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-6 sm:px-8 md:grid-cols-4 xl:px-12">
            {(['born', 'died', 'known', 'honour'] as const).map((key) => (
              <div key={key} className="px-4 py-5 first:pl-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-signal">{t(`quickFacts.${key}`)}</dt>
                <dd className="mt-1.5 text-sm leading-5 text-white">{t(`quickFacts.${key}Value`)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 xl:px-12">
        <div className="grid gap-14 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-steel">{t('common:onThisPage')}</p>
            <ul className="mt-4 space-y-2.5 border-l border-line pl-4 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="text-steel transition hover:text-isroBlue">{section.label}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-16">
            <article id="biography" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-2xl font-semibold text-charcoal">{t('sections.biography')}</h2>
              <p>{t('biography.p1')}</p>
              <p>{t('biography.p2')}</p>
            </article>

            <article id="childhood" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.childhood')}</h2>
              <p>{t('childhood.p1')}</p>
              <p>{t('childhood.p2')}</p>
            </article>

            <article id="education" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.education')}</h2>
              <p>{t('education.p1')}</p>
              <p>{t('education.p2')}</p>
            </article>

            <article id="isro" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <div className="flex items-center gap-2.5">
                <Rocket className="h-5 w-5 text-isroBlue" />
                <h2 className="text-xl font-semibold text-charcoal">{t('sections.isroCareer')}</h2>
              </div>
              <p>{t('isroCareer.p1')}</p>
              <p>{t('isroCareer.p2')}</p>
            </article>

            <article id="drdo" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-5 w-5 text-isroBlue" />
                <h2 className="text-xl font-semibold text-charcoal">{t('sections.drdoCareer')}</h2>
              </div>
              <p>{t('drdoCareer.p1')}</p>
              <p>{t('drdoCareer.p2')}</p>
            </article>

            <article id="missiles" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.missileProgramme')}</h2>
              <p>{t('missileProgramme.p1')}</p>
              <ul className="space-y-2 border-y border-line py-4">
                {(['agni', 'prithvi', 'akash', 'trishul', 'nag'] as const).map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="text-isroBlue">–</span> {t(`missileProgramme.${key}`)}
                  </li>
                ))}
              </ul>
              <p>{t('missileProgramme.p2')}</p>
            </article>

            <article id="pokhran" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.pokhran')}</h2>
              <p>{t('pokhran.p1')}</p>
              <p>{t('pokhran.p2')}</p>
            </article>

            <article id="presidency" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <div className="flex items-center gap-2.5">
                <Landmark className="h-5 w-5 text-isroBlue" />
                <h2 className="text-xl font-semibold text-charcoal">{t('sections.presidency')}</h2>
              </div>
              <p>{t('presidency.p1')}</p>
              <p>{t('presidency.p2')}</p>
            </article>

            <section id="awards" className="scroll-mt-24">
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-isroBlue" />
                <h2 className="text-xl font-semibold text-charcoal">{t('sections.awards')}</h2>
              </div>
              <dl className="mt-6 divide-y divide-line border-y border-line">
                {awardKeys.map((key) => (
                  <div key={key} className="grid gap-2 py-4 sm:grid-cols-[100px_1fr]">
                    <dt className="text-sm font-semibold text-isroBlue">{t(`awards.${key}.year`)}</dt>
                    <dd>
                      <p className="font-semibold text-charcoal">{t(`awards.${key}.title`)}</p>
                      <p className="mt-1 text-sm leading-6 text-steel">{t(`awards.${key}.desc`)}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <article id="vision2020" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.vision2020')}</h2>
              <p>{t('vision2020.p1')}</p>
              <p>{t('vision2020.p2')}</p>
            </article>

            <section id="quotes" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.quotes')}</h2>
              <div className="mt-6 space-y-6 border-l-4 border-isroBlue pl-6">
                {quotes.map((quote) => (
                  <blockquote key={quote} className="text-lg italic leading-8 text-charcoal">&ldquo;{quote}&rdquo;</blockquote>
                ))}
              </div>
            </section>

            <section id="timeline" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.timeline')}</h2>
              <div className="mt-8 max-w-2xl">
                <Timeline entries={timelineEntries} />
              </div>
            </section>

            <section id="gallery" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.gallery')}</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {kalamGallery.map((image) => (
                  <div key={image.slug} className="relative aspect-[4/3] overflow-hidden border border-line">
                    <Image src={image.src} alt={image.credit} fill sizes="(max-width: 640px) 100vw, 50vw" placeholder="blur" className="object-cover" />
                    <p className="absolute inset-x-0 bottom-0 bg-black/60 px-3 py-2 text-xs text-white">{image.credit} · {image.license}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="books" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.books')}</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {books.map((book) => (
                  <li key={book.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_80px]">
                    <div>
                      <p className="font-semibold text-charcoal">{book.title}</p>
                      <p className="mt-1 text-sm leading-6 text-steel">{book.desc}</p>
                    </div>
                    <p className="text-sm text-steel sm:text-right">{book.year}</p>
                  </li>
                ))}
              </ul>
            </section>

            <article id="legacy" className="scroll-mt-24 space-y-4 text-sm leading-7 text-steel">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.legacy')}</h2>
              <p>{t('legacy.p1')}</p>
              <p>{t('legacy.p2')}</p>
            </article>

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-xl font-semibold text-charcoal">{t('sections.faq')}</h2>
              <div className="mt-6">
                <Accordion items={faq.map((item) => ({ question: item.q, answer: item.a }))} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
