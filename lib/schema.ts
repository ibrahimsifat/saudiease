import { companyInfo } from "@/data/company-info/index";
import type { FAQ } from "@/data/faq";

const BASE_URL = "https://saudiease.com";

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: companyInfo.name,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logos/ar-logo.png`,
    description: companyInfo.description,
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
  };
}

// Generate Service Schema
export function generateServiceSchema(service: {
  title: string;
  description: string;
  provider?: { name: string; url: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: service.provider || {
      "@type": "Organization",
      name: companyInfo.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    serviceType: service.title,
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: FAQ[]) {
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
    url: BASE_URL,
    description: companyInfo.description,
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: ["ar", "en", "bn"],
  };
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema(props?: any) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: props?.name || companyInfo.name,
    image: `${BASE_URL}/images/logos/ar-logo.png`,
    "@id": `${BASE_URL}/#localbusiness`,
    url: BASE_URL,
    telephone: props?.telephone || "+966558845503",
    email: props?.email || "info@saudiease.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: props?.address?.streetAddress || "Jubail City Center",
      addressLocality: props?.address?.addressLocality || "Al Jubail",
      addressRegion: props?.address?.addressRegion || "Eastern Province",
      addressCountry: props?.address?.addressCountry || "SA",
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
  };
}

// Generate enriched BlogPosting Schema
export function generateBlogPostSchema(post: any) {
  const postUrl = post.slug
    ? `${BASE_URL}/en/blog/${post.slug}`
    : `${BASE_URL}/blog`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: post.title,
    description: post.excerpt || post.metaDescription || "",
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image}`
      : `${BASE_URL}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/ar-logo.png`,
      },
    },
    articleSection: post.category || "Technology",
    keywords: post.tags ? post.tags.join(", ") : "",
    inLanguage: "en",
    url: postUrl,
  };
}
