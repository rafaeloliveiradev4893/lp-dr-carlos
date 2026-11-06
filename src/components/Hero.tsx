"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { buttons, hero } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const statueY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.2 : 0.7, ease: easeOut },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      aria-labelledby="inicio-titulo"
      className="on-dark relative overflow-hidden bg-navy"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? { scaleX: -1 } : { y: statueY, scaleX: -1 }}
        aria-hidden
      >
        <Image
          src="/images/justitia.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/35" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 px-5 pt-28 sm:px-6 lg:min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.85fr)] lg:pt-24">
        <motion.div
          className="max-w-xl border-l border-gold py-10 pl-5 sm:pl-6 lg:self-center lg:py-28"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
          }}
        >
          <motion.h1
            id="inicio-titulo"
            variants={item}
            className="font-display text-[clamp(2.25rem,1.35rem+2.5vw,3.75rem)] leading-[1.14] text-balance text-white"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 font-display text-lg leading-relaxed text-white md:text-xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.div variants={item} className="mt-8 pr-16 lg:pr-0">
            <WhatsAppLink>{buttons.whatsapp}</WhatsAppLink>
          </motion.div>
          <motion.p variants={item} className="mt-4 text-sm tracking-wide text-white/85">
            {hero.microcopy}
          </motion.p>
        </motion.div>

        <motion.div
          className="relative h-[420px] w-full sm:h-[500px] lg:h-[min(74vh,680px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : 0.28, ease: easeOut }}
        >
          <div className="absolute inset-x-0 bottom-0 top-0 border-x border-t border-gold/80">
            <Image
              src="/images/advogado.jpg"
              alt="Retrato profissional do Dr. Carlos M., advogado, de terno azul-marinho."
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
