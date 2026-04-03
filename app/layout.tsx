import type { Metadata } from "next";
import { Playfair_Display, Crimson_Text } from "next/font/google";
import "./globals.css";
import Preloader from "./components/layout/Preloader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roselia.ba";

export const metadata: Metadata = {
  title:
    "Roselia Vrtni Centar Podlugovi | Sadnice, Cvijeće i Alat – Ilijaš, Breza, Visoko",
  description:
    "Roselia Vrtni Centar u Podlugovima – vaš lokalni izbor za sadnice, cvijeće, vrtni alat i sjeme. Sjemenski krompir, sadnice paradajza, paprike i povrća. Posjetite nas u ulici Moševićka, Podlugovi. Radimo pon–sub 8:00–17:00. ☎ 061 559 593",
  keywords: [
    "vrtni centar Ilijaš",
    "vrtni centar Podlugovi",
    "sadnice Ilijaš",
    "cvijeće Podlugovi",
    "sjemenski krompir",
    "sjemenski krompir Ilijaš",
    "krompir sadnice",
    "sadnice paradajza",
    "sadnice paprike",
    "sadnice krastavaca",
    "sadnice jagoda",
    "sjeme povrća Ilijaš",
    "sjeme povrća Podlugovi",
    "sadnice Breza",
    "vrtni centar Visoko",
    "sadnice Visoko",
    "kupiti cvijeće Ilijaš",
    "ruže sadnice Podlugovi",
    "alat za vrt Ilijaš",
    "vrtlarstvo Ilijaš",
    "luk sadnice",
    "češnjak sadnice",
    "Roselia vrtni centar",
    "scheppach",
    "scheppach Ilijaš",
    "scheppach Podlugovi",
    "scheppach BiH",
    "scheppach Bosna",
    "scheppach motokultivator",
    "scheppach kosilica",
    "scheppach trimer",
    "scheppach lančana pila",
    "scheppach drobilica",
    "kupiti scheppach Ilijaš",
    "scheppach ovlašteni prodavač",
  ],
  metadataBase: new URL(siteUrl),
  openGraph: {
    title:
      "Roselia Vrtni Centar Podlugovi | Sadnice, Cvijeće i Alat – Ilijaš, Breza, Visoko",
    description:
      "Roselia Vrtni Centar u Podlugovima – vaš lokalni izbor za sadnice, cvijeće, vrtni alat i sjeme. Posjetite nas u ulici Moševićka, Podlugovi. Radimo pon–sub 8:00–17:00. ☎ 061 559 593",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roselia Vrtni Centar Podlugovi",
      },
    ],
    type: "website",
    locale: "bs_BA",
    siteName: "Roselia Vrtni Centar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roselia Vrtni Centar Podlugovi",
    description:
      "Vaš lokalni izbor za sadnice, cvijeće, vrtni alat i sjeme u Podlugovima.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GardenStore",
  name: "Roselia Vrtni Centar",
  image: `${siteUrl}/og-image.jpg`,
  url: siteUrl,
  telephone: "+38761559593",
  email: "vrt.roselia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Moševićka bb",
    addressLocality: "Podlugovi",
    postalCode: "71380",
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.9747,
    longitude: 18.2853,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/vrtroselia/",
    "https://www.facebook.com/roseliavrt/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ponuda Roselia Vrtnog Centra",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sjemenski krompir" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sadnice paradajza" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sadnice paprike" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sadnice krastavaca" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sadnice jagoda" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sjeme povrća" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Luk i češnjak" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sadnice cvijeća i ruža" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ukrasno bilje i četinari" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Gnojiva i zaštitna sredstva" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Vrtni alat i oprema" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Motokultivatori i kosilice" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scheppach motokultivator", brand: { "@type": "Brand", name: "Scheppach" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scheppach kosilica za travu", brand: { "@type": "Brand", name: "Scheppach" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scheppach trimer", brand: { "@type": "Brand", name: "Scheppach" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scheppach lančana pila", brand: { "@type": "Brand", name: "Scheppach" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Scheppach drobilica", brand: { "@type": "Brand", name: "Scheppach" } } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lončanice i tegle" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${playfair.variable} ${crimson.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
