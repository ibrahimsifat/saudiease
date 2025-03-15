import { type Locale, locales } from "@/config/i18n";
import { companyInfo } from "@/data/company-info";
import type { Metadata } from "next/types";

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://saudiease.com",
    logo: "https://saudiease.com/logo.png",
    description: companyInfo.description,
  };
}
// generateGlobalSchema function
export function generateGlobalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: "https://saudiease.com",
    description: companyInfo.description,
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate Website Schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: "https://saudiease.com",
    description: companyInfo.description,
  };
}

// Generate alternate URLs for all supported locales
export function generateAlternateUrls(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};

  locales.forEach((locale) => {
    languages[locale] = `https://saudiease.com/${locale}${cleanPath}`;
  });

  return languages;
}

// Base SEO metadata
export const baseSeoMetadata = {
  title: "SaudiEase - Digital Solutions for Saudi Businesses",
  description:
    "We provide comprehensive digital solutions tailored for Saudi businesses, helping you thrive in the digital age.",
  keywords:
    "digital solutions, saudi arabia, web development, app development, digital marketing",
  authors: [{ name: "SaudiEase Team" }],
  creator: "SaudiEase",
  publisher: "SaudiEase",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL("https://saudiease.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saudiease.com",
    title: "SaudiEase - Digital Solutions for Saudi Businesses",
    description:
      "We provide comprehensive digital solutions tailored for Saudi businesses, helping you thrive in the digital age.",
    siteName: "SaudiEase",
    images: [
      {
        url: "https://saudiease.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SaudiEase - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaudiEase - Digital Solutions for Saudi Businesses",
    description:
      "We provide comprehensive digital solutions tailored for Saudi businesses, helping you thrive in the digital age.",
    creator: "@saudiease",
    images: ["https://saudiease.com/twitter-image.jpg"],
  },
};

// Generate localized metadata for a specific page
export async function generateLocalizedMetadata(
  locale: Locale,
  pageName: string
): Promise<Metadata> {
  try {
    // Try to load the messages for the locale
    const messages = await import(`../messages/${locale}.json`);
    const pageMetadata = messages[pageName]?.meta || {};

    // Get the appropriate locale for OpenGraph
    const ogLocale =
      locale === "en" ? "en_US" : locale === "ar" ? "ar_SA" : "bn_BD";

    return {
      ...baseSeoMetadata,
      title: pageMetadata.title || baseSeoMetadata.title,
      description: pageMetadata.description || baseSeoMetadata.description,
      alternates: {
        canonical: `https://saudiease.com/${locale}`,
        languages: generateAlternateUrls(),
      },
      openGraph: {
        ...baseSeoMetadata.openGraph,
        locale: ogLocale,
        title: pageMetadata.title || baseSeoMetadata.title,
        description: pageMetadata.description || baseSeoMetadata.description,
      },
      twitter: {
        ...baseSeoMetadata.twitter,
        title: pageMetadata.title || baseSeoMetadata.title,
        description: pageMetadata.description || baseSeoMetadata.description,
      },
    };
  } catch (error) {
    // If there's an error loading the messages, return the base metadata
    return baseSeoMetadata;
  }
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  keywords = "",
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article" | "product" | "service";
}): Metadata {
  const url = `https://saudiease.com${path}`;
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
