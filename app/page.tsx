import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/HeroSection/hero";
import Parceiros from "./components/parceiros/parceiro";
import Footer from "./components/footer/footer";
import Oferta from "./components/ofertas/ofertas";
import Funciona from "./components/funciona/page";
import Contato from "./components/contato/contato";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Funciona />
        <Oferta />
        
        <Contato />
        <Footer />
      </main>
    </>
  );
}
