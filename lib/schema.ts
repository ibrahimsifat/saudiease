import { SITE_URL, localeUrl } from "@/config/site";
import { companyInfo } from "@/data/company-info/index";
import type { FAQ } from "@/data/faq";

// Single source for JSON-LD. Every fact here must be in docs/seo/business-goals.md:
// office city Al Khobar (no street published), on-site cities Al Khobar + Dammam,
// founded 2018, phone/email/hours as on the site. No ratings, reviews or prices.

const BASE_URL = SITE_URL;
export const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;

const SAME_AS = companyInfo.contact.socialMedia.map((s) => s.url);

const AREA_SERVED = [
  { "@type": "City", name: "Al Khobar" },
  { "@type": "City", name: "Dammam" },
  { "@type": "AdministrativeArea", name: "Eastern Province" },
];

/** Organization + ProfessionalService in one node (one entity, one @id). */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: "Saudi Ease",
    alternateName: ["سعودي إيز", "SaudiEase"],
    url: BASE_URL,
    logo: `${BASE_URL}/images/logos/ar-logo.png`,
    image: `${BASE_URL}/images/logos/ar-logo.png`,
    description: companyInfo.description,
    foundingDate: "2018",
    founder: { "@type": "Person", name: "Ibrahim Sifat" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al Khobar",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    areaServed: AREA_SERVED,
    telephone: "+966558845503",
    email: "info@saudiease.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966558845503",
      email: "info@saudiease.com",
      contactType: "sales",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English", "Bengali"],
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
    knowsLanguage: ["ar", "en", "bn"],
    sameAs: SAME_AS,
  };
}

/** Kept for existing callers: the business entity is the organization node. */
export function generateLocalBusinessSchema() {
  return generateOrganizationSchema();
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Saudi Ease",
    alternateName: "سعودي إيز",
    url: BASE_URL,
    publisher: { "@id": ORG_ID },
    inLanguage: ["ar", "en", "bn"],
  };
}

export function generateServiceSchema(
  service: { id?: string; title: string; description: string },
  locale?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    ...(service.id && locale ? { url: localeUrl(locale, `/services/${service.id}`) } : {}),
    provider: { "@id": ORG_ID, "@type": "Organization", name: "Saudi Ease", url: BASE_URL },
    areaServed: AREA_SERVED,
  };
}

export function generateFAQSchema(faqs: FAQ[] | { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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

export function generateBlogPostSchema(post: any, locale: string = "ar") {
  const postUrl = post.slug ? localeUrl(locale, `/blog/${post.slug}`) : localeUrl(locale, "/blog");
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.title,
    description: post.excerpt || post.metaDescription || "",
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image}`
      : `${BASE_URL}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@id": ORG_ID, "@type": "Organization", name: "Saudi Ease" },
    publisher: {
      "@id": ORG_ID,
      "@type": "Organization",
      name: "Saudi Ease",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logos/ar-logo.png` },
    },
    articleSection: post.category || "Technology",
    keywords: post.tags ? post.tags.join(", ") : "",
    inLanguage: locale,
    url: postUrl,
  };
}
