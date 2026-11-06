"use client";

import { Clock, IdCard, ScrollText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { direitos } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";

const icons = [ScrollText, IdCard, Clock];

export function Direitos() {
  const reduce = useReducedMotion();

  return (
    <section
      id="direitos"
      aria-labelledby="direitos-titulo"
      className="scroll-mt-[4.75rem] bg-white py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading id="direitos-titulo" title={direitos.title} />
        <p className="mt-6 max-w-3xl text-base leading-[1.75] text-navy md:text-lg">
          {direitos.intro}
        </p>

        <motion.div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          variants={stagger(reduce)}
        >
          {direitos.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                variants={fadeUp(reduce)}
                whileHover={reduce ? undefined : { y: -4 }}
                className="flex h-full flex-col border border-navy/10 bg-white p-6 transition-[border-color] duration-500 hover:border-gold sm:p-7"
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center bg-navy text-gold">
                  <Icon aria-hidden strokeWidth={1.5} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl leading-snug text-navy">{item.title}</h3>
                <p className="mt-4 text-[0.98rem] leading-[1.75] text-navy">{item.body}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.aside
          className="relative mt-10 border border-navy/10 bg-navy/[0.03] px-6 py-6 sm:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduce)}
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-gold" />
          <p className="pl-3 text-base leading-[1.75] text-navy md:text-lg [&_strong]:font-display [&_strong]:font-medium">
            <RichText text={direitos.prazo} />
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
