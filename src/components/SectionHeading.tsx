"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "@/lib/motion";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  onDark?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  onDark = false,
  align = "left",
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const onLight = !onDark;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        id={id}
        className={`font-display text-[clamp(1.85rem,1.3rem+1.6vw,2.6rem)] leading-[1.2] text-balance ${
          onLight ? "text-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
      <motion.span
        aria-hidden
        className={`mt-4 block h-px w-16 bg-gold ${align === "center" ? "mx-auto origin-center" : "origin-left"}`}
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ duration: reduce ? 0.2 : 0.7, ease: easeOut }}
      />
      {subtitle ? (
        <p
          className={`mt-5 font-display text-lg leading-relaxed text-balance md:text-xl ${
            onLight ? "text-navy" : "text-white"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
