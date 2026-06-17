import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://honeybee.in"),
  title: "Honey Bee | Premium Single-Serve Honey Sachets for Cafés in Ahmedabad",
  description: "Upgrade your café's beverage experience with Honey Bee. Premium, 100% pure single-serve honey sachets. Hygienic, portion-controlled, and waste-free. Supplying cafes in Ahmedabad, Gujarat.",
  keywords: [
    "honey sachets Ahmedabad",
    "premium honey packets for cafes",
    "single-serve honey supplier Gujarat",
    "honey pouches Ahmedabad",
    "cafe sugar alternatives India"
  ],
  authors: [{ name: "Honey Bee Team" }],
  openGraph: {
    title: "Honey Bee | Premium Single-Serve Honey Sachets for Cafés",
    description: "Premium 100% pure single-serve honey sachets for cafes and restaurants in Ahmedabad. Hygienic, portion-controlled, and elegant.",
    url: "https://honeybee.in",
    siteName: "Honey Bee",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Honey Bee Premium Honey Sachets for Cafés",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Bee | Premium Single-Serve Honey Sachets",
    description: "Upgrade your café's customer experience with clean, portion-controlled single-serve honey sachets.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://honeybee.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Honey Bee Single-Serve Honey Sachets",
    "image": "https://honeybee.in/hero_honey_sachet.jpg",
    "description": "Premium 100% pure single-serve honey sachets (8-10g) for cafes and restaurants.",
    "brand": {
      "@type": "Brand",
      "name": "Honey Bee"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "4",
      "highPrice": "6",
      "offerCount": "1"
    }
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Honey Bee",
    "image": "https://honeybee.in/hero_honey_sachet.jpg",
    "description": "Premium single-serve honey sachet supplier for cafes and restaurants in Ahmedabad, Gujarat.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": "https://honeybee.in",
    "telephone": "+919876543210",
    "priceRange": "₹₹"
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-charcoal text-brand-cream selection:bg-brand-gold selection:text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
