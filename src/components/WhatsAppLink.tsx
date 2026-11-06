import { whatsappHref } from "@/lib/config";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type WhatsAppLinkProps = {
  children: string;
  className?: string;
};

export function WhatsAppLink({ children, className = "" }: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2.5 bg-gold px-5 py-3 text-center text-[0.95rem] font-medium text-navy transition duration-500 hover:-translate-y-0.5 hover:bg-white ${className}`}
    >
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
