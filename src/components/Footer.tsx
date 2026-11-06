import { footer, lawyer } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="on-dark border-t border-gold/50 bg-navy-deep">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pt-10 pb-24 sm:px-6">
        <a href="#inicio" className="flex min-h-11 w-fit items-center gap-3">
          <Logo />
          <span className="font-display text-base text-white">{lawyer.name}</span>
        </a>
        <p className="text-sm text-white">{footer.copyright}</p>
        <p className="max-w-3xl text-sm leading-relaxed text-white/85 italic">{footer.legal}</p>
        <p className="max-w-3xl text-sm leading-relaxed text-white/85 italic">{footer.study}</p>
      </div>
    </footer>
  );
}
