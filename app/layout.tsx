import type { Metadata } from "next";
import { Montserrat, Open_Sans, Inter, Jost } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jost",
  display: "swap",
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
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barotse ExpressWay Limited",
  description:
    "Barotse ExpressWay Limited - Connecting Zambia's Rich mineral resources to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        </ThemeProvider>
      </body>
    </html>
  );
}
