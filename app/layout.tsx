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

const baseUrl = "https://agl.digital";

// 1. Exportação isolada do Viewport (Exigência do Next.js App Router)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

// 2. Exportação do Metadata com boas práticas
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sistemas Personalizados e Landing Pages | AGL Digital",
  description:
    "Sistemas web sob medida (painéis, CRMs, automações) e landing pages de alta conversão, feitos para o seu processo e para vender mais.",
  keywords: [
    "sistema personalizado",
    "desenvolvimento de sistemas sob medida",
    "criar sistema web",
    "software sob medida",
    "automação de processos",
    "painel administrativo personalizado",
    "criação de sistemas",
    "criação de sistemas web",
    "empresa de criação de sistemas",
    "criação de sistemas personalizados",
    "criar landing page",
    "landing page de vendas",
    "website de alta conversão",
    "site responsivo",
    "desenvolvimento web",
    "sistema para empresa",
    "criar site profissional",
    "web design profissional",
  ],
  authors: [{ name: "AGL Digital" }],
  creator: "AGL Digital",
  publisher: "AGL Digital",
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
    title: "AGL Digital",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Sistemas Personalizados e Landing Pages | AGL Digital",
    description:
      "Sistemas web sob medida e landing pages de alta conversão. Software que resolve o seu processo e páginas que transformam visitantes em clientes.",
    siteName: "AGL Digital",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AGL Digital - Sistemas Personalizados e Landing Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agldigital",
    creator: "@agldigital",
    title: "Sistemas Personalizados e Landing Pages | AGL Digital",
    description:
      "Sistemas web sob medida e landing pages de alta conversão para o seu negócio.",
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
              name: "AGL Digital",
              url: "https://agl.digital",
              image: "https://agl.digital/logo.png",
              description:
                "Empresa especializada em desenvolvimento de sistemas web personalizados (painéis, CRMs, automações) e landing pages de alta conversão para vendas.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Recife",
                addressRegion: "PE",
              },
              telephone: "+55-81-98358-3549",
              email: "contato@agl.digital",
              sameAs: [
                "https://www.facebook.com/agldigital",
                "https://www.instagram.com/agldigital",
                "https://www.linkedin.com/company/agldigital",
                "https://twitter.com/agldigital",
              ],
              areaServed: {
                "@type": "Country",
                name: "BR",
              },
              priceRange: "R$ 500 - R$ 5000+",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+55-81-98358-3549",
                email: "contato@agl.digital",
                availableLanguage: ["pt-BR", "en"],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços AGL Digital",
                itemListElement: [
                  {
                    "@type": "Offer",
                    priceCurrency: "BRL",
                    priceSpecification: {
                      "@type": "PriceSpecification",
                      minPrice: 500,
                      maxPrice: 5000,
                      priceCurrency: "BRL",
                    },
                    itemOffered: {
                      "@type": "Service",
                      name: "Criação de Sistemas Web Personalizados",
                      description:
                        "Criação de sistemas web sob medida: painéis, CRMs, automações e integrações desenvolvidos para o processo da sua empresa.",
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
                        "Página única ultra-otimizada para transformar visitantes em clientes. Perfeita para campanhas de tráfego pago.",
                    },
                  },
                  {
                    "@type": "Offer",
                    price: "800",
                    priceCurrency: "BRL",
                    itemOffered: {
                      "@type": "Service",
                      name: "Site Institucional Completo",
                      description:
                        "Presença digital robusta com múltiplas páginas para passar autoridade e apresentar sua empresa.",
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