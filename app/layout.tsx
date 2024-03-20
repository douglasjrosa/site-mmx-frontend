import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import {
  siteInfo,
  robots,
  icons,
  openGraph,
  twitter,
  baseUrl,
} from "@/data/global";

export const viewport: Viewport = {
  themeColor: siteInfo.themeColor,
};

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.title} - ${siteInfo.slogan}`,
    template: `%s - ${siteInfo.title}`,
  },
  description: siteInfo.description,
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/produtos",
  },
  other: {
    rating: "General",
    "revisit-after": "7 days",
  },
  manifest: "/manifest.json",
  robots,
  icons,
  openGraph,
  twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <base href={baseUrl as string} />
        <meta name="geo.placename" content="Ribeirão Preto-SP" />
        <meta name="geo.position" content="-21.137191167625403; -47.78776210888562" />
        <meta name="geo.region" content="SP-BR" />
        <meta name="ICBM" content="-21.137191167625403, -47.78776210888562" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
