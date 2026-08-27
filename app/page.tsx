import Hero from "./components/HeroSection/hero";
import Sobre from "./components/sobre/sobre";
import Demonstracao from "./components/demonstracao/demonstracao";
import Funciona from "./components/funciona/page";
import Solucoes from "./components/solucoes/solucoes";
import Contato from "./components/contato/contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Demonstracao />
      <Funciona />
      <Solucoes />
      <Contato />
    </>
  );
}
