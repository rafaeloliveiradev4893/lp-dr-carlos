import type { Metadata, Viewport } from "next";
import { Fustat, Kaisei_Opti } from "next/font/google";
import { metadataCopy } from "@/lib/content";
import { structuredData } from "@/lib/structured-data";
import "./globals.css";

const kaisei = Kaisei_Opti({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-kaisei",
  display: "swap",
});

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
  display: "swap",
});

export const metadata: Metadata = {
  title: metadataCopy.title,
  description: metadataCopy.description,
  openGraph: {
    title: metadataCopy.title,
    description: metadataCopy.description,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#162F53",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${kaisei.variable} ${fustat.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-navy">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
