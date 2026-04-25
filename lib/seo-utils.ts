import { type Locale, locales } from "@/config/i18n";
import { companyInfo } from "@/data/company-info/index";
import type { Metadata } from "next/types";

const BASE_URL = "https://saudiease.com";

// Generate enriched Organization Schema with full contact, social, and area info
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: companyInfo.name,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logos/ar-logo.png`,
      width: 512,
      height: 512,
    },
    description: companyInfo.description,
    foundingDate: "2018",
    founder: {
      "@type": "Person",
      name: "Ibrahim Sifat",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jubail City Center",
      addressLocality: "Al Jubail",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    telephone: "+966558845503",
    email: "info@saudiease.com",
    sameAs: [
      "https://facebook.com/saudiease0",
      "https://twitter.com/saudiease0",
      "https://linkedin.com/company/saudiease0",
      "https://instagram.com/saudiease0",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Al Jubail",
      },
      {
        "@type": "City",
        name: "Dammam",
      },
      {
        "@type": "City",
        name: "Khobar",
      },
      {
        "@type": "AdministrativeArea",
        name: "Eastern Province",
      },
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 35,
    },
    knowsLanguage: ["ar", "en", "bn"],
  };
}

// Generate WebSite schema with search action
export function generateGlobalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: companyInfo.name,
    url: BASE_URL,
    description: companyInfo.description,
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: ["ar", "en", "bn"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/en/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// Generate LocalBusiness schema for Google Maps / local SEO
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/#localbusiness`,
    name: companyInfo.name,
    image: `${BASE_URL}/images/logos/ar-logo.png`,
    url: BASE_URL,
    telephone: "+966558845503",
    email: "info@saudiease.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jubail City Center",
      addressLocality: "Al Jubail",
      addressRegion: "Eastern Province",
      postalCode: "35516",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.0046,
      longitude: 49.6625,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://facebook.com/saudiease0",
      "https://twitter.com/saudiease0",
      "https://linkedin.com/company/saudiease0",
      "https://instagram.com/saudiease0",
    ],
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

// Generate Website Schema (alias for backward compat)
export function generateWebsiteSchema() {
  return generateGlobalSchema();
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate alternate URLs for all supported locales
export function generateAlternateUrls(path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};

  locales.forEach((locale) => {
    languages[locale] = `${BASE_URL}/${locale}${cleanPath}`;
  });

  return languages;
}

// Base SEO metadata
export const baseSeoMetadata = {
  title: "SaudiEase - Professional IT & Digital Solutions in Eastern Province",
  description:
    "SaudiEase provides professional IT and digital solutions for businesses in Al Jubail, Dammam, Khobar, and across the Eastern Province. Web development, mobile apps, e-invoicing, branding, and more.",
  keywords:
    "digital solutions, Saudi Arabia, Eastern Province, Al Jubail, web development, mobile apps, ZATCA e-invoicing, branding, digital marketing, Dammam, Khobar",
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
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website" as const,
    locale: "ar_SA",
    url: BASE_URL,
    title: "SaudiEase - Professional IT & Digital Solutions in Eastern Province",
    description:
      "Professional IT and digital solutions for businesses in Al Jubail, Dammam, and the Eastern Province. Web development, mobile apps, e-invoicing, and more.",
    siteName: "SaudiEase",
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "SaudiEase - Professional IT & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "SaudiEase - Professional IT & Digital Solutions in Eastern Province",
    description:
      "Professional IT and digital solutions for businesses in Al Jubail, Dammam, and the Eastern Province.",
    creator: "@saudiease0",
    images: [`${BASE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

// Generate localized metadata for a specific page
export async function generateLocalizedMetadata(
  locale: Locale,
  pageName: string
): Promise<Metadata> {
  try {
    const messages = await import(`../messages/${locale}.json`);
    const pageMetadata = messages[pageName]?.meta || {};

    const ogLocale =
      locale === "en" ? "en_US" : locale === "ar" ? "ar_SA" : "bn_BD";

    return {
      ...baseSeoMetadata,
      title: pageMetadata.title || baseSeoMetadata.title,
      description: pageMetadata.description || baseSeoMetadata.description,
      alternates: {
        canonical: `${BASE_URL}/${locale}`,
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
    return baseSeoMetadata;
  }
}

export function generatePageMetadata({
  title,
  description,
  path = "/",
  image,
  keywords = "",
  type = "website",
  locale = "ar",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
  type?: "website" | "article";
  locale?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/opengraph-image`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: generateAlternateUrls(
        path.replace(/^\/(en|ar|bn)/, "")
      ),
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: "SaudiEase",
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
      creator: "@saudiease0",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}
