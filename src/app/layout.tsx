import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/organisms/";
import { Header } from "@/components/molecules";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finanças Zap",
  description: "Seu controle de finanças pessoal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="pt-br">
        <body className={inter.className + " flex flex-row "}>
          <Navbar />
          <main className="flex min-h-screen flex-1 flex-col   bg-grey">
            <Header />
            <div className="px-2 py-5">{children}</div>
          </main>
        </body>
      </html>
  );
}

