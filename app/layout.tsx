import type { Metadata } from "next";
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

const baseUrl = "https://agl.gersonback.uk";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Criar Landing Page Profissional | Agência Web AGL Digital",
  description: "Crie seu site de vendas com a AGL Digital. Desenvolvemos landing pages de alta conversão, websites institucionais e sites profissionais otimizados para SEO. Mais leads e vendas garantidas!",
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
    "web design profissional"
  ],
  authors: [{ name: "AGL Digital" }],
  creator: "AGL Digital",
  publisher: "AGL Digital",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Criar Landing Page Profissional | Agência Web AGL Digital",
    description: "Desenvolvemos landing pages de alta conversão e websites profissionais. Sites otimizados para vendas e SEO. Transforme seus visitantes em clientes!",
    siteName: "AGL Digital",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AGL Digital - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criar Landing Page Profissional | Agência Web AGL Digital",
    description: "Landing pages de alta conversão, websites profissionais e sites otimizados para SEO. Aumente suas vendas online!",
    images: [`${baseUrl}/twitter-image.png`],
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
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
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AGL Digital" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para melhorar performance */}
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
              "name": "AGL Digital",
              "url": "https://agl.gersonback.uk",
              "image": "https://agl.gersonback.uk/logo.png",
              "description": "Agência web especializada em criar landing pages de alta conversão, websites profissionais e sites otimizados para vendas. Desenvolvimento web com foco em SEO e resultados.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
                "addressLocality": "Recife",
                "addressRegion": "PE",
              },
              "telephone": "+55-81-98358-3549",
              "email": "contato@agl.gersonback.uk",
              "sameAs": [
                "https://www.facebook.com/agldigital",
                "https://www.instagram.com/agldigital",
                "https://www.linkedin.com/company/agldigital",
                "https://twitter.com/agldigital"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "BR"
              },
              "priceRange": "R$ 500 - R$ 5000+",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "telephone": "+55-81-98358-3549",
                "email": "contato@agl.gersonback.uk",
                "availableLanguage": ["pt-BR", "en"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "1"
              }
            })
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
        <main className="flex-1" role="main">{children}</main>
      </body>
    </html>
  );
}