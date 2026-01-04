import type { Metadata } from "next";
import { Bebas_Neue, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Yggdrasil Archive | TVA Temporal Database",
  description:
    "An interactive educational exploration of the MCU's temporal mechanics, the TVA, and Loki's journey from variant to the God of Stories.",
  keywords: [
    "MCU",
    "Loki",
    "TVA",
    "Multiverse",
    "Yggdrasil",
    "Timeline",
    "Sacred Timeline",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${ibmPlexMono.variable} ${inter.variable}`}
    >
      <body
        className="bg-tva-black text-tva-cream-100 font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
