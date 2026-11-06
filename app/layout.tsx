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

const baseUrl = "https://chonnostech.com";

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
  title: "Chonnostech — Sistemas Internos e Automação de Processos",
  description:
    "Desenvolvimento de sistemas internos e automação de processos para empresas. Organize tarefas, conecte ferramentas e acompanhe a operação com soluções sob medida.",
  keywords: [
    "sistema interno para empresas",
    "desenvolvimento de sistemas personalizados",
    "automação de processos empresariais",
    "gestão de tarefas para equipes",
    "dashboard empresarial",
    "integração de sistemas",
    "software de gestão sob medida",
    "automação de tarefas repetitivas",
    "sistemas de gestão empresarial",
    "digitalização de processos empresariais",
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
    title: "Chonnostech — Sistemas Internos e Automação de Processos",
    description:
      "Sistemas internos sob medida, gestão de tarefas e equipes, dashboards e automação de processos para empresas.",
    siteName: "Chonnostech",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Chonnostech — Sistemas Internos e Automação de Processos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chonnostech — Sistemas Internos e Automação de Processos",
    description:
      "Sistemas internos, dashboards e automação de processos para a sua empresa.",
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
              "@type": "ProfessionalService",
              name: "Chonnostech",
              url: baseUrl,
              image: `${baseUrl}/logo.png`,
              description:
                "Desenvolvimento de sistemas internos e automação de processos para empresas, com gestão de tarefas, dashboards e integrações sob medida.",
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
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Sales",
                telephone: "+55-81-98358-3549",
                email: "contato@chonnostech.com.br",
                availableLanguage: ["pt-BR"],
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Sistemas internos e automação de processos",
                itemListElement: [
                  { "@type": "Service", name: "Sistema interno sob medida", description: "Sistemas internos personalizados para organizar as rotinas e informações da empresa." },
                  { "@type": "Service", name: "Automação de processos", description: "Mapeamento e automação de processos empresariais e integração entre ferramentas." },
                  { "@type": "Service", name: "Gestão de tarefas e equipes", description: "Sistemas de tarefas, projetos, prazos e equipes feitos sob medida." },
                  { "@type": "Service", name: "Dashboards e indicadores", description: "Painéis de gestão com indicadores da operação e do negócio." },
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
