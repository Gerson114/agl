import type { Metadata } from "next";
import Script from "next/script";
import Hero from "./components/HeroSection/hero";
import Sobre from "./components/sobre/sobre";
import Funciona from "./components/funciona/page";
import Solucoes from "./components/solucoes/solucoes";
import Contato from "./components/contato/contato";

export const metadata: Metadata = {
  title: "Sistemas Personalizados e Landing Pages | AGL Digital",
  description:
    "Desenvolvemos sistemas web sob medida e landing pages de alta conversão. Software personalizado para o seu processo e páginas otimizadas para SEO. Mais eficiência e mais vendas!",
  keywords: [
    "sistema personalizado",
    "desenvolvimento de sistemas sob medida",
    "criar sistema web",
    "software sob medida",
    "automação de processos",
    "landing page de vendas",
    "website de alta conversão",
    "site responsivo",
    "desenvolvimento web",
    "criar landing page",
    "site com resultado",
  ],
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AGL Digital",
    "description":
      "Empresa especializada em desenvolvimento de sistemas web personalizados e landing pages de alta conversão otimizadas para vendas e SEO",
    "url": "https://agl.digital",
    "telephone": "+5581983583549",
    "email": "contato@agl.digital",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Recife",
      "addressRegion": "PE",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "500",
      "highPrice": "5000",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sistema Web Personalizado",
          "description":
            "Painéis, CRMs, automações e integrações desenvolvidos sob medida para o processo da sua empresa.",
          "priceCurrency": "BRL",
        },
        {
          "@type": "Offer",
          "name": "Landing Page de Alta Conversão",
          "description":
            "Página única ultra-otimizada para transformar visitantes em clientes. Perfeita para campanhas de tráfego pago.",
          "price": "500",
          "priceCurrency": "BRL",
        },
        {
          "@type": "Offer",
          "name": "Site Institucional Completo",
          "description":
            "Presença digital robusta com múltiplas páginas para passar autoridade e apresentar sua empresa.",
          "price": "800",
          "priceCurrency": "BRL",
        },
      ],
    },
    "sameAs": [
      "https://www.facebook.com/agldigital",
      "https://www.instagram.com/agldigital",
      "https://www.linkedin.com/company/agldigital",
    ],
  };

  return (
    <>
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Hero />
      <Sobre />
      <Funciona />
      <Solucoes />
      <Contato />
    </>
  );
}
