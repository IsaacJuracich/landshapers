import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/providers/AOSProvider";
import FramerProvider from "./components/providers/FramerProvider";
import MetaPixelProvider from "./components/providers/MetaPixelProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animation Template | Next.js with AOS, Framer Motion & Meta Pixel",
  description:
    "A comprehensive Next.js template featuring AOS (Animate On Scroll), Framer Motion animations, and Meta Pixel tracking with TypeScript and Tailwind CSS",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "AOS",
    "Framer Motion",
    "Meta Pixel",
    "Facebook Pixel",
    "Analytics",
    "Animations",
    "Template",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Animation Template | Next.js with AOS, Framer Motion & Meta Pixel",
    description:
      "A comprehensive Next.js template featuring AOS (Animate On Scroll), Framer Motion animations, and Meta Pixel tracking",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Template | Next.js with AOS, Framer Motion & Meta Pixel",
    description:
      "A comprehensive Next.js template featuring AOS (Animate On Scroll), Framer Motion animations, and Meta Pixel tracking",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixelProvider
          config={{
            pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_PIXEL_ID",
            autoConfig: true,
            debug: process.env.NODE_ENV === "development",
            testMode: process.env.NODE_ENV === "development",
          }}
        >
          <FramerProvider>
            <AOSProvider>{children}</AOSProvider>
          </FramerProvider>
        </MetaPixelProvider>
      </body>
    </html>
  );
}
