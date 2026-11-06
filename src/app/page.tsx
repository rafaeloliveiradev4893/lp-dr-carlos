import { Atendimento } from "@/components/Atendimento";
import { Atuacao } from "@/components/Atuacao";
import { Contato } from "@/components/Contato";
import { Direitos } from "@/components/Direitos";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Direitos />
        <Atuacao />
        <Sobre />
        <Atendimento />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
