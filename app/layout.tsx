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
    "Roselia Vrtni Centar u Podlugovima – vaš lokalni izbor za sadnice, cvijeće, vrtni alat i sjeme. Posjetite nas u ulici Moševićka, Podlugovi. Radimo pon–sub 8:00–17:00. ☎ 061 559 593",
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
