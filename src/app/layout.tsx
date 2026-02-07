import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AtNature x AX Strategy Proposal",
  description: "Wellness Tech & Autonomous Operation Strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased text-sage-900 bg-sage-50 overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
