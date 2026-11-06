"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { atendimento } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { SectionHeading } from "@/components/SectionHeading";

export function Atendimento() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="atendimento"
      aria-labelledby="atendimento-titulo"
      className="on-dark scroll-mt-[4.75rem] bg-navy py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading
          id="atendimento-titulo"
          title={atendimento.title}
          subtitle={atendimento.subtitle}
          onDark
        />

        <div ref={trackRef} className="relative mt-14">
          <div aria-hidden className="absolute top-[21px] bottom-4 left-[21px] w-px bg-white/20 md:hidden" />
          <motion.div
            aria-hidden
            className="absolute top-[21px] bottom-4 left-[21px] w-px origin-top bg-gold md:hidden"
            style={reduce ? undefined : { scaleY }}
          />
          <div
            aria-hidden
            className="absolute top-[21px] right-[12.5%] left-[12.5%] hidden h-px bg-white/20 md:block"
          />
          <motion.div
            aria-hidden
            className="absolute top-[21px] right-[12.5%] left-[12.5%] hidden h-px origin-left bg-gold md:block"
            style={reduce ? undefined : { scaleX }}
          />

          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {atendimento.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-4 md:grid-cols-1 md:text-center">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center border border-gold bg-navy font-display text-lg text-gold md:mx-auto">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl leading-snug text-white">{step.title}</h3>
                  <p className="mt-3 text-[0.98rem] leading-[1.75] text-white/85">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <motion.aside
          className="relative mt-16 border border-white/15 px-6 py-6 sm:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduce)}
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-gold" />
          <h3 className="pl-3 font-display text-xl text-white">{atendimento.documentos.title}</h3>
          <p className="mt-3 pl-3 leading-[1.75] text-white/85">{atendimento.documentos.body}</p>
        </motion.aside>
      </div>
    </section>
  );
}
