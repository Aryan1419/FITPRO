import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FITPRO Sports Solutions | Sports Coaching for Communities & Schools",
  description:
    "Professional sports coaching, qualified trainers, sports curriculum and facility management for gated communities and schools. Train • Play • Achieve with FITPRO.",
  keywords: [
    "sports coaching",
    "gated communities",
    "schools sports curriculum",
    "swimming coaching",
    "badminton coaching",
    "Telangana",
    "Hyderabad",
    "Khammam",
    "FITPRO",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
