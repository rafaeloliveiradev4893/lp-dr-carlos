"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { faq } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const baseId = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = faq.items.length - 1;
    let next = index;

    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;

    event.preventDefault();
    buttons.current[next]?.focus();
  }

  return (
    <section
      id="perguntas"
      aria-labelledby="perguntas-titulo"
      className="scroll-mt-[4.75rem] bg-white py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6">
        <SectionHeading
          id="perguntas-titulo"
          title={faq.title}
          subtitle={faq.subtitle}
          align="center"
        />

        <div className="mt-10 border-t border-navy/15">
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            const buttonId = `${baseId}-button-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div key={item.question} className="border-b border-navy/15">
                <h3>
                  <button
                    ref={(node) => {
                      buttons.current[index] = node;
                    }}
                    id={buttonId}
                    type="button"
                    className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left font-display text-lg leading-snug text-navy"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                  >
                    <span>{item.question}</span>
                    <span aria-hidden className="shrink-0 font-sans text-2xl leading-none text-gold">
                      {open ? "–" : "+"}
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0.15 : 0.55, ease: easeOut }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-base leading-[1.75] text-navy">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
