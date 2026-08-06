'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export type AccordionItem = { question: string; answer: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base font-semibold text-charcoal">{item.question}</span>
              {isOpen ? <Minus className="h-4 w-4 shrink-0 text-isroBlue" /> : <Plus className="h-4 w-4 shrink-0 text-isroBlue" />}
            </button>
            {isOpen && <p className="max-w-3xl pb-5 text-sm leading-7 text-steel">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
