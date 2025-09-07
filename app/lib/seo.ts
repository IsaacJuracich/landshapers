import type { Metadata } from "next";

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const defaultConfig: Required<SEOConfig> = {
  title: "Landshapers - Professional Landscaping & Design Services",
  description:
    "Transform your outdoor space with Landshapers. Professional landscaping, garden design, and maintenance services. Creating beautiful, sustainable landscapes that enhance your property value.",
  keywords: [
    "landscaping",
    "garden design",
    "landscape architecture",
    "outdoor design",
    "lawn care",
    "landscape maintenance",
    "hardscaping",
    "irrigation",
    "tree services",
    "landscape contractor",
  ],
  image: "/images/logo.png",
  url: "https://landshapers.com",
  type: "website",
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const { title, description, keywords, image, url, type } = {
    ...defaultConfig,
    ...config,
  };

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Landshapers" }],
    creator: "Landshapers",
    publisher: "Landshapers",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Landshapers",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: type as any,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@landshapers",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function generatePageMetadata(
  pageTitle: string,
  pageDescription: string,
  pageUrl?: string,
  pageImage?: string
): Metadata {
  return generateMetadata({
    title: `${pageTitle} | Landshapers`,
    description: pageDescription,
    url: pageUrl,
    image: pageImage,
  });
}
