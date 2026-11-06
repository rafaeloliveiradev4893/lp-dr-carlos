"use client";

import { Clock, FileSearch, Handshake, HeartPulse, Landmark, ShieldAlert } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { atuacao, buttons } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { RichText } from "@/components/RichText";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const icons = [FileSearch, Clock, ShieldAlert, Handshake, HeartPulse, Landmark];

export function Atuacao() {
  const reduce = useReducedMotion();

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-titulo"
      className="on-dark scroll-mt-[4.75rem] bg-navy py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <SectionHeading
          id="atuacao-titulo"
          title={atuacao.title}
          subtitle={atuacao.subtitle}
          onDark
        />

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          variants={stagger(reduce)}
        >
          {atuacao.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                variants={fadeUp(reduce)}
                whileHover={reduce ? undefined : { y: -4 }}
                className="flex h-full flex-col border border-white/15 bg-white/[0.03] p-6 transition-[border-color] duration-500 hover:border-gold"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center border border-gold/80 text-gold">
                  <Icon aria-hidden strokeWidth={1.5} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl leading-snug text-white">{item.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-[1.75] text-white/85">{item.body}</p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mx-auto mt-14 max-w-2xl border-t border-white/15 pt-10 text-center">
          <p className="font-display text-xl leading-relaxed text-white md:text-2xl [&_strong]:font-medium">
            <RichText text={atuacao.chamada} />
          </p>
          <WhatsAppLink className="mt-7">{buttons.whatsapp}</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
