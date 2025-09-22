import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wallace Energy Solutions",
  description:
    "Unlock new revenue streams and maximize your property value with commercial EV charging solutions from Wallace Energy.",
  generator: "Wallace Energy",
  keywords: [
    "EV Charging",
    "Commercial",
    "Wallace Energy",
    "Revenue",
    "Property Value",
    "Sustainability",
  ],
  authors: [{ name: "Wallace Energy Team", url: "https://wallaceenergy.com" }],
  openGraph: {
    title: "Wallace Energy Solutions",
    description:
      "Unlock new revenue streams and maximize your property value with commercial EV charging solutions from Wallace Energy.",
    url: "https://wallaceenergy.com",
    siteName: "Wallace Energy Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wallace Energy Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wallace Energy Solutions",
    description:
      "Unlock new revenue streams and maximize your property value with commercial EV charging solutions from Wallace Energy.",
    images: ["/og-image.png"],
    creator: "@wallaceenergy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          {children}
        </Suspense>
        <Analytics />
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
