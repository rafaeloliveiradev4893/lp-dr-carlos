import { buttons } from "@/lib/content";
import { whatsappHref } from "@/lib/config";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={buttons.whatsapp}
      className="on-dark fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center bg-gold text-navy shadow-[0_8px_20px_rgb(14_34_64/0.28)] transition duration-500 hover:-translate-y-0.5 hover:bg-white sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
