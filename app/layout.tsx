import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { rockSalt } from "./fonts/fonts"; // 
import "./globals.css";


import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasmine Meftah | Portfolio",
  description: "Portfolio de Yasmine Meftah",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${rockSalt.variable}   // font rocksalt
          antialiased
        `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}