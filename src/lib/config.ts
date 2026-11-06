const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5500000000000";

export const whatsappNumber = rawNumber.replace(/\D/g, "");

export const whatsappMessage =
  "Olá, Dr. Carlos. Gostaria de conversar sobre uma questão trabalhista.";

export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const contactChannels = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@exemplo.com",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/",
} as const;

export const emailHref = `mailto:${contactChannels.email}`;
