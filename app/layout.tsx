import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
// import Preloader from "@/components/Preloader";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barotse Highway Limited",
  description:
    "Barotse Highway Limited - Connecting Zambia's Rich mineral resources to the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {/* <Preloader /> */}
          {children}
        </Suspense>
      </body>
    </html>
  );
}
