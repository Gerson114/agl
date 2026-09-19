import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PageTransition from "./components/ui/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://chonnostech.com.br";

// 1. Exportação isolada do Viewport (Exigência do Next.js App Router)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1120",
};

// 2. Exportação do Metadata com boas práticas
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Chonnostech — Sistema, Site e Loja Online para a sua Empresa",
  description:
    "Sistema de gestão sob medida (vendas, financeiro, estoque e cobrança), sites institucionais e lojas virtuais para empresas de qualquer setor. Sua empresa, num lugar só.",
  keywords: [
    "sistema para empresa",
    "sistema de gestão empresarial",
    "software sob medida",
    "automação de processos",
    "gestão empresarial",
    "painel administrativo personalizado",
    "controle de estoque online",
    "sistema de vendas",
    "loja virtual",
    "criar loja online",
    "e-commerce sob medida",
    "site institucional",
    "dashboard para empresa",
    "sistema de gestão para empresas",
    "software para pequenas empresas",
  ],
  authors: [{ name: "Chonnostech" }],
  creator: "Chonnostech",
  publisher: "Chonnostech",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: baseUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Chonnostech",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Chonnostech — Sistema, Site e Loja Online para a sua Empresa",
    description:
      "Vendas, financeiro e estoque num painel só, atualizado na hora. Sistema de gestão sob medida, sites e lojas virtuais para empresas de qualquer setor.",
    siteName: "Chonnostech",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Chonnostech - Sistema, Site e Loja Online para a sua Empresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chonnostech — Sistema, Site e Loja Online para a sua Empresa",
    description:
      "Vendas, financeiro e estoque num painel só, atualizado na hora. Sistema de gestão sob medida para a sua empresa.",
    images: [`${baseUrl}/twitter-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Fontes: carregadas uma única vez aqui (em vez de repetidas por componente) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Schema markup JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Chonnostech",
              url: baseUrl,
              image: `${baseUrl}/logo.png`,
              description:
                "Soluções em sistemas e automações para otimizar a gestão da sua empresa: estoque, vendas, financeiro e cobrança num só lugar, além de sites e lojas virtuais.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Recife",
                addressRegion: "PE",
              },
              telephone: "+55-81-98358-3549",
              email: "contato@chonnostech.com.br",
              sameAs: ["https://www.instagram.com/chonnostech/"],
              areaServed: {
                "@type": "Country",
                name: "BR",
              },
              priceRange: "R$ 100 - R$ 5000+",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+55-81-98358-3549",
                email: "contato@chonnostech.com.br",
                availableLanguage: ["pt-BR"],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços Chonnostech",
                itemListElement: [
                  {
                    "@type": "Offer",
                    priceCurrency: "BRL",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: 100,
                      maxPrice: 5000,
                      priceCurrency: "BRL",
                    },
                    itemOffered: {
                      "@type": "Service",
                      name: "Sistema Personalizado (Dashboard)",
                      description:
                        "Vendas, financeiro, estoque e cobrança num painel só, sob medida para o processo da sua empresa. A partir de R$ 100/mês alugando o sistema.",
                    },
                  },
                  {
                    "@type": "Offer",
                    price: "500",
                    priceCurrency: "BRL",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Page de Alta Conversão",
                      description:
                        "Página única ultra-otimizada para transformar visitantes em clientes, ideal para campanhas de tráfego pago.",
                    },
                  },
                  {
                    "@type": "Offer",
                    price: "1200",
                    priceCurrency: "BRL",
                    itemOffered: {
                      "@type": "Service",
                      name: "Loja Virtual (Loja Online)",
                      description:
                        "Loja virtual com catálogo, carrinho e pagamento integrados ao sistema de estoque.",
                    },
                  },
                  {
                    "@type": "Offer",
                    price: "500",
                    priceCurrency: "BRL",
                    itemOffered: {
                      "@type": "Service",
                      name: "Site Institucional",
                      description:
                        "Presença profissional na internet para passar confiança e reunir os canais de contato da empresa.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NB2S56FH');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB2S56FH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="flex-1 pt-24" role="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
