"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { sobre } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";

export function Sobre() {
  const reduce = useReducedMotion();

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-[4.75rem] bg-white py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(260px,0.82fr)_minmax(0,1.15fr)] lg:gap-16">
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduce)}
        >
          <span
            aria-hidden
            className="absolute -left-2.5 top-3 h-[calc(100%-0.75rem)] w-full border border-gold sm:-left-3 sm:top-4"
          />
          <div className="relative aspect-[3/4] border border-navy/10">
            <Image
              src="/images/advogado.jpg"
              alt="Retrato profissional do Dr. Carlos M., advogado, de terno azul-marinho."
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </motion.div>

        <div>
          <SectionHeading id="sobre-titulo" title={sobre.title} subtitle={sobre.subtitle} />
          <div className="mt-6 space-y-4 text-base leading-[1.75] text-navy md:text-lg [&_strong]:font-semibold">
            {sobre.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-3">
            {sobre.facts.map((fact) => (
              <div key={fact.value}>
                <dt className="font-display text-xl text-navy">{fact.value}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-navy">
                  — {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
