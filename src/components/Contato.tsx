"use client";

import type { FormEvent } from "react";
import { Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { buttons, contato } from "@/lib/content";
import {
  contactChannels,
  emailHref,
  whatsappHref,
} from "@/lib/config";
import { fadeUp } from "@/lib/motion";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";

const channelIcons = {
  instagram: InstagramIcon,
  email: Mail,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
} as const;

const channelHrefs = {
  instagram: contactChannels.instagram,
  email: emailHref,
  linkedin: contactChannels.linkedin,
  facebook: contactChannels.facebook,
} as const;

export function Contato() {
  const reduce = useReducedMotion();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="on-dark scroll-mt-[4.75rem] bg-navy py-20 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start lg:gap-14">
        <div>
          <SectionHeading id="contato-titulo" title={contato.title} subtitle={contato.subtitle} onDark />
          <p className="mt-6 max-w-xl text-base leading-[1.75] text-white/90 md:text-lg">
            {contato.text}
          </p>
          <WhatsAppLink className="mt-8">{buttons.whatsappContato}</WhatsAppLink>
          <p className="mt-4 text-sm tracking-wide text-white/80">{contato.microcopy}</p>

          <div className="mt-10">
            <p className="font-display text-lg text-white">{contato.channelsLabel}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {contato.channels.map((channel) => {
                const Icon = channelIcons[channel.key];
                const href = channelHrefs[channel.key];
                const external = channel.key !== "email";

                return (
                  <a
                    key={channel.key}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 px-3 py-2.5 text-sm text-white transition duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-gold" />
                    <span>{channel.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <motion.address
            className="relative mt-10 border border-white/15 px-6 py-6 not-italic sm:px-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp(reduce)}
          >
            <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-gold" />
            <ul className="space-y-3 pl-3">
              {contato.details.map((detail) => (
                <li key={detail.text} className="text-base leading-relaxed text-white">
                  {detail.link ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center underline-offset-4 hover:text-gold hover:underline"
                    >
                      {detail.text}
                    </a>
                  ) : (
                    detail.text
                  )}
                </li>
              ))}
            </ul>
          </motion.address>
        </div>

        <motion.div
          className="relative border border-white/15 px-6 py-7 sm:px-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(reduce)}
        >
          <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-gold" />
          <h3 className="pl-3 font-display text-xl text-white md:text-2xl">
            {contato.formTitle}
          </h3>
          <p className="mt-2 pl-3 text-sm leading-relaxed text-white/75">
            {contato.formNote}
          </p>

          <form
            className="mt-7 space-y-5 pl-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <label htmlFor="contato-nome" className="mb-2 block text-sm text-white">
                {contato.form.name}
              </label>
              <input
                id="contato-nome"
                name="nome"
                type="text"
                autoComplete="name"
                className="min-h-11 w-full border border-white/20 bg-white/5 px-3 text-white outline-none transition duration-500 placeholder:text-white/40 focus:border-gold"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="contato-email" className="mb-2 block text-sm text-white">
                {contato.form.email}
              </label>
              <input
                id="contato-email"
                name="email"
                type="email"
                autoComplete="email"
                className="min-h-11 w-full border border-white/20 bg-white/5 px-3 text-white outline-none transition duration-500 placeholder:text-white/40 focus:border-gold"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="contato-mensagem" className="mb-2 block text-sm text-white">
                {contato.form.message}
              </label>
              <textarea
                id="contato-mensagem"
                name="mensagem"
                rows={5}
                className="w-full resize-y border border-white/20 bg-white/5 px-3 py-3 text-white outline-none transition duration-500 placeholder:text-white/40 focus:border-gold"
                placeholder="Descreva, de forma resumida, a sua dúvida."
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center bg-gold px-5 py-3 text-[0.95rem] font-medium text-navy transition duration-500 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
            >
              {contato.form.submit}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
