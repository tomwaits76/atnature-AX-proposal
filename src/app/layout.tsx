import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AtNature x AX Strategy Proposal",
  description: "Wellness Tech & Autonomous Operation Strategy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AtNature AX",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
