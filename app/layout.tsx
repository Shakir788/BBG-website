import type { Metadata } from "next";
import { Playfair_Display, Lato, Great_Vibes } from "next/font/google"; 
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LaraChat from "../components/LaraChat"; // ✅ NEW: LARA Import ki

// 1. Standard Fonts
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});

// 2. Signature Font
const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Beauty Box by Geeta | Luxury Salon & Academy",
  description: "Experience premium bridal makeup and professional makeup courses in Dehradun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} font-sans antialiased bg-[#F4F1EA]`}>
        <Navbar />
        {children}
        <LaraChat /> {/* ✅ NEW: LARA har page par dikhegi */}
        <Footer />
      </body>
    </html>
  );
}