import { type Locale } from "@/config/i18n";
import { SITE_URL, localeUrl, pageAlternates, stripLocale } from "@/config/site";
import { companyInfo } from "@/data/company-info/index";
import type { Metadata } from "next/types";

const BASE_URL = SITE_URL;

// JSON-LD lives in lib/schema.ts (single source); re-exported for existing imports.
export {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateWebsiteSchema as generateGlobalSchema,
} from "@/lib/schema";

// Generate alternate URLs for all supported locales (path without locale prefix)
export function generateAlternateUrls(path = "") {
  return pageAlternates("ar", path).languages;
}

// Base SEO metadata
export const baseSeoMetadata = {
  title: "Web Design & App Company in Al Khobar & Dammam | Saudi Ease",
  description:
    "Saudi Ease builds websites and mobile apps, designs company profiles and brand identities, and sets up ZATCA-compliant e-invoicing for businesses in Al Khobar and Dammam.",
  keywords:
    "web design Al Khobar, web design Dammam, mobile app development, ZATCA e-invoicing, company profile design, brand identity, Eastern Province",
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
    title: "Web Design & App Company in Al Khobar & Dammam | Saudi Ease",
    description:
      "Websites, mobile apps, company profiles, brand identity and ZATCA e-invoicing setup for businesses in Al Khobar and Dammam.",
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
    title: "Web Design & App Company in Al Khobar & Dammam | Saudi Ease",
    description:
      "Websites, mobile apps, company profiles and ZATCA e-invoicing setup in Al Khobar and Dammam.",
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
  pageName: string,
  path?: string
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
      // Only set canonical/hreflang when a page path is given. The layout
      // passes none, so pages never inherit the home page's canonical.
      ...(path !== undefined ? { alternates: pageAlternates(locale, path) } : {}),
      openGraph: {
        ...baseSeoMetadata.openGraph,
        locale: ogLocale,
        ...(path !== undefined ? { url: localeUrl(locale, path) } : {}),
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
  // Accepts "/en/faq" or "/faq" (+ locale); always emits the real URL.
  const parsed = stripLocale(path);
  const pageLocale = parsed.locale || locale || "ar";
  const alternates = pageAlternates(pageLocale, parsed.path);
  const url = alternates.canonical;
  const ogImage = image || `${BASE_URL}/opengraph-image`;
  return {
    title,
    description,
    keywords,
    alternates,
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
