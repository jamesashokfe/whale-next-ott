import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import Footer from "@components/Footer";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whalepop Streaming",
  description: "Bringing cine experience to your home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen items-center ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
