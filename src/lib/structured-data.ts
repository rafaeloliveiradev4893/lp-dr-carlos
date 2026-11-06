import { lawyer, metadataCopy } from "@/lib/content";
import { whatsappNumber } from "@/lib/config";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Attorney",
      "@id": "#advogado",
      name: lawyer.name,
      description: "Advogado com atuação em Direito do Trabalho.",
      identifier: lawyer.oab,
      telephone: `+${whatsappNumber}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Exemplo, 000",
        addressLocality: "Salvador",
        addressRegion: "BA",
        addressCountry: "BR",
      },
      knowsAbout: ["Direito do Trabalho"],
    },
    {
      "@type": "LegalService",
      name: "Dr. Carlos M. — Direito do Trabalho",
      description: metadataCopy.description,
      provider: { "@id": "#advogado" },
      areaServed: {
        "@type": "City",
        name: "Salvador",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Exemplo, 000",
        addressLocality: "Salvador",
        addressRegion: "BA",
        addressCountry: "BR",
      },
    },
  ],
};
