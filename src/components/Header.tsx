"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttons, lawyer, navigation } from "@/lib/content";
import { Logo } from "@/components/Logo";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const root = menuRef.current;
    const items = root
      ? [...root.querySelectorAll<HTMLElement>("a, button")]
      : [];
    items[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !root) return;
      const focusable = [...root.querySelectorAll<HTMLElement>("a, button")];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${
        scrolled || open
          ? "border-white/10 bg-navy/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="h-0.5 bg-gold" />
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-6">
        <a href="#inicio" className="flex min-h-11 items-center gap-3" onClick={close}>
          <Logo priority className="h-11" />
          <span className="leading-tight">
            <span className="block font-display text-[0.95rem] text-white sm:text-base">
              {lawyer.name}
            </span>
            <span className="block text-[0.7rem] tracking-wide text-white sm:text-xs">
              {lawyer.oab}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 min-[1180px]:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center px-2.5 text-[0.84rem] text-white transition duration-500 hover:text-gold xl:px-3 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/25 text-white min-[1180px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden strokeWidth={1.5} /> : <Menu aria-hidden strokeWidth={1.5} />}
        </button>
      </div>

      {open ? (
        <div
          ref={menuRef}
          id={menuId}
          className="on-dark h-[calc(100svh-4.75rem)] overflow-y-auto border-t border-white/10 bg-navy px-5 py-4 min-[1180px]:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex min-h-12 items-center border-b border-white/10 text-base text-white"
                onClick={close}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
