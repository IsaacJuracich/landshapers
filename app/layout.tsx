import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/providers/AOSProvider";
import FramerProvider from "./components/providers/FramerProvider";
import MetaPixelProvider from "./components/providers/MetaPixelProvider";
import { generateMetadata } from "./lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
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
