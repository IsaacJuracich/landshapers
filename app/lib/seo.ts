import type { Metadata } from "next";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
}

const defaultConfig: Required<SEOConfig> = {
  title: "Landshapers - Premium Landscaping & Erosion Control Solutions",
  description:
    "Stop erosion, shape space, and love your outdoors. Landshapers designs and builds outdoor environments that solve water problems, protect your property, and look incredible—season after season.",
  keywords: [
    "landscaping",
    "erosion control",
    "retaining walls",
    "outdoor design",
    "water management",
    "landscape design",
    "property protection",
    "hardscaping",
    "drainage solutions",
    "patio design",
  ],
  url: "https://landshapers.com",
  image: "/images/og-image.jpg", // TODO: Create proper 1200x630 social media image
  type: "website",
  locale: "en_US",
};

export function generateMetadata(config?: SEOConfig): Metadata {
  const seoConfig = { ...defaultConfig, ...config };

  return {
    title: {
      default: seoConfig.title,
      template: "%s | Landshapers",
    },
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    authors: [{ name: "Landshapers" }],
    creator: "Landshapers",
    publisher: "Landshapers",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.url),
    alternates: {
      canonical: seoConfig.url,
    },
    openGraph: {
      title: seoConfig.title,
      description: seoConfig.description,
      url: seoConfig.url,
      siteName: "Landshapers",
      images: [
        {
          url: seoConfig.image,
          width: 1200,
          height: 630,
          alt: "Landshapers - Premium Landscaping Solutions",
        },
      ],
      locale: seoConfig.locale,
      type: seoConfig.type,
    },
    twitter: {
      card: "summary_large_image",
      title: seoConfig.title,
      description: seoConfig.description,
      images: [seoConfig.image],
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
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_SITE_VERIFICATION,
    },
  };
}

// Helper function for page-specific SEO
export function createPageMetadata(
  title: string,
  description: string,
  path: string = "",
  additionalConfig?: Partial<SEOConfig>
): Metadata {
  return generateMetadata({
    title: `${title} | Landshapers`,
    description,
    url: `${defaultConfig.url}${path}`,
    ...additionalConfig,
  });
}

// Common SEO configurations for different page types
export const seoConfigs = {
  home: {
    title: defaultConfig.title,
    description: defaultConfig.description,
    keywords: defaultConfig.keywords,
  },
  services: {
    title: "Professional Landscaping Services | Landshapers",
    description:
      "Comprehensive landscaping services including erosion control, retaining walls, drainage solutions, and outdoor space design. Transform your property with expert craftsmanship.",
    keywords: [
      ...defaultConfig.keywords,
      "landscaping services",
      "professional landscapers",
      "outdoor construction",
      "landscape contractors",
    ],
  },
  contact: {
    title: "Contact Landshapers - Get Your Custom Landscaping Plan",
    description:
      "Ready to transform your outdoor space? Contact Landshapers for a custom landscaping plan. Call 608-632-8046 or request a consultation online.",
    keywords: [
      ...defaultConfig.keywords,
      "landscaping consultation",
      "landscaping quote",
      "contact landscaper",
    ],
  },
} as const;
