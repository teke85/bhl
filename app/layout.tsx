import type React from "react";
import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans, Inter, Jost } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import CookiePrivacyPopup from "@/components/CookiePrivacyPopup";
import { siteConfig } from "@/lib/seo-config";
import StructuredData from "@/components/seo/StructuredData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

const larken = localFont({
  src: [
    {
      path: "../public/fonts/LarkenDEMO-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/LarkenDEMO-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/LarkenDEMO-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/LarkenDEMO-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-larken",
  display: "swap",
  preload: true,
});

const aeonik = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aeonik-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
  preload: true,
});

// Enhanced metadata with SEO optimization
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Barotse Highway",
    "Zambia infrastructure",
    "road construction Zambia",
    "Mutanda Kaoma highway",
    "Zambian expressway",
    "infrastructure development",
    "toll road Zambia",
    "BeefCo Holdings",
    "First Quantum Minerals",
    "Walvis Bay corridor",
    "regional connectivity",
    "sustainable infrastructure",
  ],
  authors: [{ name: "Barotse Highway Limited" }],
  creator: "Barotse Highway Limited",
  publisher: "Barotse Highway Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZM",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Barotse Highway Limited - Connecting Zambia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
    creator: "@BarotseHighway",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Organization Structured Data */}
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${aeonik.variable} ${inter.variable} ${jost.variable} ${larken.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookiePrivacyPopup />
        </ThemeProvider>
      </body>
    </html>
  );
}
