import type React from "react";
import { Montserrat, Open_Sans, Inter, Jost } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import CookiePrivacyPopup from "@/components/CookiePrivacyPopup";

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
