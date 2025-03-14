import type { Metadata } from "next"

export const baseSeoMetadata: Metadata = {
  title: {
    default: "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
    template: "%s | Saudi Ease",
  },
  description:
    "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
  keywords:
    "Web Development Saudi Arabia, Digital Marketing Services, E-Invoicing Solutions, ZATCA Compliance, Graphic Design Riyadh, Vision 2030 Digital Transformation, Mobile App Development Saudi, Custom CMS Solutions",
  authors: [{ name: "Saudi Ease Team" }],
  creator: "Saudi Ease",
  publisher: "Saudi Ease",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saudiease.com",
    siteName: "Saudi Ease",
    title: "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
    description:
      "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
    images: [
      {
        url: "https://saudiease.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
    description:
      "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
    images: ["https://saudiease.com/twitter-image.jpg"],
    creator: "@saudiease",
  },
  alternates: {
    canonical: "https://saudiease.com",
    languages: {
      "en-US": "https://saudiease.com/en",
      "ar-SA": "https://saudiease.com/ar",
    },
  },
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
  keywords = "",
  type = "website",
}: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string
  type?: "website" | "article" | "product" | "service"
}): Metadata {
  const url = `https://saudiease.com${path}`
  const combinedKeywords = keywords ? `${baseSeoMetadata.keywords}, ${keywords}` : baseSeoMetadata.keywords

  return {
    title,
    description,
    keywords: combinedKeywords,
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
  }
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://saudiease.com/#organization",
    name: "Saudi Ease",
    url: "https://saudiease.com",
    logo: {
      "@type": "ImageObject",
      url: "https://saudiease.com/logo.svg",
      width: 180,
      height: 60,
    },
    sameAs: [
      "https://www.facebook.com/saudiease",
      "https://www.twitter.com/saudiease",
      "https://www.linkedin.com/company/saudiease",
      "https://www.instagram.com/saudiease",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966558845503",
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
        contactOption: "TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "17:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+966558845504",
        contactType: "technical support",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Fahd Road, Al Olaya District",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      postalCode: "12214",
      addressCountry: "SA",
    },
    description:
      "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
    foundingDate: "2018-01-01",
    founders: [
      {
        "@type": "Person",
        name: "Abdullah Al-Saud",
        jobTitle: "CEO & Founder",
      },
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    slogan: "Transforming Saudi Businesses for the Digital Age",
    award: "Top Digital Agency in Saudi Arabia 2023",
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://saudiease.com/#website",
    name: "Saudi Ease",
    url: "https://saudiease.com",
    description:
      "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
    publisher: {
      "@id": "https://saudiease.com/#organization",
    },
    inLanguage: ["en-US", "ar-SA"],
    copyrightYear: new Date().getFullYear(),
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://saudiease.com/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "ReadAction",
        target: [
          "https://saudiease.com/services",
          "https://saudiease.com/about",
          "https://saudiease.com/blog",
          "https://saudiease.com/contact",
        ],
      },
    ],
  }
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://saudiease.com/#localbusiness",
    name: "Saudi Ease",
    image: "https://saudiease.com/images/office.jpg",
    "@id": "https://saudiease.com",
    url: "https://saudiease.com",
    telephone: "+966558845503",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Fahd Road, Al Olaya District",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      postalCode: "12214",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/saudiease",
      "https://www.twitter.com/saudiease",
      "https://www.linkedin.com/company/saudiease",
      "https://www.instagram.com/saudiease",
    ],
    department: [
      {
        "@type": "Organization",
        name: "Web Development Department",
        description: "Specializing in custom web development solutions for Saudi businesses",
      },
      {
        "@type": "Organization",
        name: "Digital Marketing Department",
        description: "Providing comprehensive digital marketing strategies for the Saudi market",
      },
      {
        "@type": "Organization",
        name: "E-Invoicing Solutions Department",
        description: "ZATCA-compliant e-invoicing implementation and support",
      },
    ],
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://saudiease.com/faq#faqpage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  image?: string
  provider?: string
  areaServed?: string
  price?: string
  category?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider || "Saudi Ease",
      url: "https://saudiease.com",
    },
    serviceType: service.category || "Digital Service",
    url: service.url,
    image: service.image || "https://saudiease.com/og-image.jpg",
    areaServed: {
      "@type": "Country",
      name: service.areaServed || "Saudi Arabia",
    },
    offers: {
      "@type": "Offer",
      price: service.price || "Contact for pricing",
      priceCurrency: "SAR",
    },
    termsOfService: "https://saudiease.com/terms-of-service",
    brand: {
      "@type": "Brand",
      name: "Saudi Ease",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Saudi Businesses",
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://saudiease.com/#breadcrumb",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  publisherName?: string
  publisherLogo?: string
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.authorName,
      url: article.authorUrl || "https://saudiease.com/team",
    },
    publisher: {
      "@type": "Organization",
      name: article.publisherName || "Saudi Ease",
      logo: {
        "@type": "ImageObject",
        url: article.publisherLogo || "https://saudiease.com/logo.svg",
        width: 180,
        height: 60,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
    keywords: article.keywords || ["Saudi Arabia", "Digital Services", "Web Development"],
    inLanguage: "en-US",
  }
}

export function generateGlobalSchema() {
  return [
    generateOrganizationSchema(),
    generateWebsiteSchema(),
    generateLocalBusinessSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://saudiease.com/#webpage",
      url: "https://saudiease.com",
      name: "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
      description:
        "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
      isPartOf: {
        "@id": "https://saudiease.com/#website",
      },
      about: {
        "@id": "https://saudiease.com/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://saudiease.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
      datePublished: "2018-01-01T00:00:00+00:00",
      dateModified: new Date().toISOString(),
      breadcrumb: {
        "@id": "https://saudiease.com/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://saudiease.com"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": "https://saudiease.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://saudiease.com",
        },
      ],
    },
  ]
}

