import type { Metadata } from "next";
import React from "react";
import { Montserrat, Open_Sans, Inter, Jost } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import CookiePrivacyPopup from "@/components/CookiePrivacyPopup";

export const metadata: Metadata = {
  title: {
    default: "Western Corridor Limited",
    template: "%s | Western Corridor Limited",
  },
  description: "The Western Corridor Limited is a strategic infrastructure initiative that significantly enhances regional connectivity.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://westerncorridor.com/", // Replace with actual domain if known, or leave as generic placeholder they can update
    siteName: "Western Corridor Limited",
  },
  twitter: {
    card: "summary_large_image",
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${aeonik.variable} ${inter.variable} ${jost.variable} ${larken.variable} antialiased`}
        suppressHydrationWarning
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
