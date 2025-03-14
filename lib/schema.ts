import { companyInfo } from "@/data/company-info"
import type { Service } from "@/data/services"
import type { FAQ } from "@/data/faq"

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    url: "https://saudiease.com",
    logo: "https://saudiease.com/logo.png",
    description: companyInfo.description,
  }
}

// Generate Service Schema
export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
  }
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
  }
}

// Generate Website Schema
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: "https://saudiease.com",
    description: companyInfo.description,
  }
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema(props: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: props.name,
    image: "https://saudiease.com/office-image.jpg",
    "@id": "https://saudiease.com",
    url: "https://saudiease.com",
    telephone: props.telephone,
    email: props.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: props.address.streetAddress,
      addressLocality: props.address.addressLocality,
      addressRegion: props.address.addressRegion,
      addressCountry: props.address.addressCountry,
    },
  }
}

// Generate BlogPost Schema
export function generateBlogPostSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
  }
}

