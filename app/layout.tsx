import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://mevi.gersonback.uk";

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
  title: "Criar Landing Page Profissional | Agência Web Mevi",
  description:
    "Crie seu site de vendas com a Mevi. Desenvolvemos landing pages de alta conversão, websites institucionais e sites profissionais otimizados para SEO. Mais leads e vendas garantidas!",
  keywords: [
    "criar site profissional",
    "vender site",
    "agência web",
    "landing page de vendas",
    "website de alta conversão",
    "site responsivo",
    "desenvolvimento web",
    "SEO",
    "marketing digital",
    "site institucional",
    "website otimizado",
    "agência digital",
    "criar landing page",
    "site com resultado",
    "web design profissional",
  ],
  authors: [{ name: "Mevi" }],
  creator: "Mevi",
  publisher: "Mevi",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: baseUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mevi",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Criar Landing Page Profissional | Agência Web Mevi",
    description:
      "Desenvolvemos landing pages de alta conversão e websites profissionais. Sites otimizados para vendas e SEO. Transforme seus visitantes em clientes!",
    siteName: "Mevi",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mevi - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criar Landing Page Profissional | Agência Web Mevi",
    description:
      "Landing pages de alta conversão, websites profissionais e sites otimizados para SEO. Aumente suas vendas online!",
    images: [`${baseUrl}/twitter-image.png`],
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
              name: "Mevi",
              url: "https://mevi.gersonback.uk",
              image: "https://mevi.gersonback.uk/logo.png",
              description:
                "Agência web especializada em criar landing pages de alta conversão, websites profissionais e sites otimizados para vendas. Desenvolvimento web com foco em SEO e resultados.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressLocality: "Recife",
                addressRegion: "PE",
              },
              telephone: "+55-81-98358-3549",
              email: "contato@mevi.gersonback.uk",
              sameAs: [
                "https://www.facebook.com/mevidigital",
                "https://www.instagram.com/mevidigital",
                "https://www.linkedin.com/company/mevidigital",
                "https://twitter.com/mevidigital",
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
                email: "contato@mevi.gersonback.uk",
                availableLanguage: ["pt-BR", "en"],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "1",
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
        <main className="flex-1" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}