import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Header from "./components/header/header";
import Hero from "./components/HeroSection/hero";
import Parceiros from "./components/parceiros/parceiro";
import Footer from "./components/footer/footer";
import Oferta from "./components/ofertas/ofertas";
import Funciona from "./components/funciona/page";
import Contato from "./components/contato/contato";

export const metadata: Metadata = {
  title: "Criar Landing Page Profissional | Agência Web AGL Digital",
  description:
    "Crie seu site de vendas com a AGL Digital. Desenvolvemos landing pages de alta conversão, websites institucionais e sites profissionais otimizados para SEO. Mais leads e vendas garantidas!",
  keywords: [
    "criar site profissional",
    "vender site",
    "agência web",
    "landing page de vendas",
    "website de alta conversão",
    "site responsivo",
    "desenvolvimento web",
    "website otimizado",
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
      "Agência especializada em criar landing pages de alta conversão e websites profissionais otimizados para vendas e SEO",
    "url": "https://agl.gersonback.uk",
    "telephone": "+5581983583549",
    "email": "contato@agl.gersonback.uk",
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <main className="pt-24" role="main">
        <Hero />
        <Funciona />
        <Oferta />
        <Contato />
        <Footer />
      </main>
    </>
  );
}
