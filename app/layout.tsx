import Navbar from "@/components/widgets/navbar";
import PageTransition from "@/components/widgets/page-transition";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Guillaume Ceccoli",
  description: "Développeur Web à Saint-Etienne-Les-Orgues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} min-h-dvh backgroundImage text-white flex flex-col items-start justify-start md:flex-row`}
      >
        <Navbar />
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}

