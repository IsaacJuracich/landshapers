import { Metadata } from "next";

const defaultMetadata = {
  title: "Landshapers — Drainage, Erosion Control & Outdoor Living",
  description:
    "Premium landscaping that stops erosion, solves drainage, and builds beautiful outdoor spaces. Call 608-632-8046 for a custom plan.",
  keywords: [
    "landscaping",
    "drainage solutions",
    "erosion control",
    "outdoor living",
    "patios",
    "retaining walls",
    "french drains",
    "landscape design",
    "water management",
    "Wisconsin landscaping",
  ],
  url: "https://landshapers.com",
  image: "/og-image.jpg",
  color: "#1B5E20",
};

export function generateMetadata(
  title?: string,
  description?: string,
  path?: string,
  image?: string
): Metadata {
  const pageTitle = title ? `${title} | Landshapers` : defaultMetadata.title;
  const pageDescription = description || defaultMetadata.description;
  const pageUrl = path ? `${defaultMetadata.url}${path}` : defaultMetadata.url;
  const pageImage = image || defaultMetadata.image;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: defaultMetadata.keywords,
    authors: [{ name: "Landshapers" }],
    creator: "Landshapers",
    publisher: "Landshapers",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: "Landshapers",
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    alternates: {
      canonical: pageUrl,
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
    themeColor: defaultMetadata.color,
  };
}
