import type { Metadata } from "next";
<<<<<<< HEAD
import { Playfair_Display, Jost, Inter, Outfit } from "next/font/google";
=======
import {
  Playfair_Display,
  Jost,
  Poppins,
  Roboto,
  Inter,
} from "next/font/google";
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
import "./globals.css";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

<<<<<<< HEAD
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
=======
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
});

export const metadata: Metadata = {
  title: "Barotse Highway Limited",
  description:
<<<<<<< HEAD
    "Barotse Highway Limited - Connecting Zambia's Rich mineral resources to the world",
=======
    "Barotse Highway Limited - Connecting Zambia's Mineral Wealth to International Markets",
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
<<<<<<< HEAD
        className={`${playfair.variable} ${jost.variable} ${inter.variable} ${outfit.variable} antialiased`}
=======
        className={`${playfair.variable} ${jost.variable} ${poppins.variable} ${roboto.variable} ${inter.variable} antialiased`}
>>>>>>> e662db40e2c772e8f8b4e5a7be1cec13ace7689f
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
