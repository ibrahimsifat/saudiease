import type { Locale } from "@/config/i18n";
import { serviceDetailsAR as arServiceDetails } from "./ar";
import { serviceDetailsBn as bnServiceDetails } from "./bn";
import { serviceDetails as enServiceDetails } from "./en";

import { getServices } from "../services";
import { SERVICE_SEO } from "./seo";

// Map of locale to service details
const serviceDetailsMap = {
  en: enServiceDetails,
  ar: arServiceDetails,
  // Add other languages as they become available
  bn: bnServiceDetails, // Fallback to English for Bengali until translated
};

// One URL per service (MASTER-PLAN task 3-1). Each owner page takes the
// richest existing content and absorbs the sections/FAQs of the pages it
// replaces. The replaced IDs are 301-redirected in next.config.mjs.
const MERGE: Record<string, { from: string; absorb?: string[] }> = {
  "website-design-development": {
    from: "web-development",
    absorb: ["custom-cms-development", "e-commerce-solutions"],
  },
  "zatca-e-invoicing": { from: "e-invoicing" },
  "company-profile-branding": { from: "corporate-profile" },
  "brand-identity": { from: "brand-identity", absorb: ["logo-design", "print-design"] },
  "mobile-app-development": { from: "mobile-app-development" },
};

// Old ID -> owner ID (used for relatedServices and redirects).
export const SERVICE_ALIASES: Record<string, string> = {
  "web-development": "website-design-development",
  "custom-cms-development": "website-design-development",
  "e-commerce-solutions": "website-design-development",
  "e-invoicing": "zatca-e-invoicing",
  "corporate-profile": "company-profile-branding",
  "logo-design": "brand-identity",
  "print-design": "brand-identity",
};

// Services no longer offered (docs/seo/business-goals.md, 2026-11-20).
export const RETIRED_SERVICES = [
  "aramco-sabic-vendor-code",
  "excel-data-work",
  "cv-document-preparation",
  "digital-marketing",
  "ui-ux-design",
  "api-development",
];

function ownerId(id: string): string | null {
  if (RETIRED_SERVICES.includes(id)) return null;
  return SERVICE_ALIASES[id] || id;
}

// Function to get service details for a specific locale
export function getServiceDetails(locale: Locale): Record<string, ServiceDetail> {
  const base = (serviceDetailsMap[locale] || arServiceDetails) as Record<string, ServiceDetail>;
  const services = getServices(locale);
  const result: Record<string, ServiceDetail> = {};

  const owners = [
    ...services.map((s) => s.id),
    ...Object.keys(MERGE).filter((id) => !services.some((s) => s.id === id)),
  ].filter((id) => ownerId(id) === id);

  for (const id of owners) {
    const listed = services.find((s) => s.id === id);
    const plan = MERGE[id];
    const source = plan ? base[plan.from] : undefined;

    if (source) {
      const absorbed = (plan.absorb || [])
        .map((a) => base[a])
        .filter(Boolean) as ServiceDetail[];
      const faqs = [...source.faqs];
      for (const a of absorbed) {
        for (const f of a.faqs) {
          if (faqs.length >= 10) break;
          if (!faqs.some((x) => x.question === f.question)) faqs.push(f);
        }
      }
      result[id] = {
        ...source,
        id,
        icon: listed?.icon ?? source.icon,
        title: listed?.title ?? source.title,
        sections: [
          ...source.sections,
          ...absorbed.flatMap((a) => a.sections.slice(0, 2)),
        ],
        technologies: [
          ...source.technologies,
          ...absorbed
            .flatMap((a) => a.technologies)
            .filter((t, i, all) => all.findIndex((x) => x.name === t.name) === i)
            .filter((t) => !source.technologies.some((x) => x.name === t.name)),
        ].slice(0, 12),
        faqs,
        caseStudies: [],
        relatedServices: Array.from(
          new Set(
            source.relatedServices
              .map((r) => ownerId(r))
              .filter((r): r is string => Boolean(r) && r !== id)
          )
        ),
      };
      continue;
    }

    if (listed) {
      result[id] = {
        id: listed.id,
        icon: listed.icon,
        title: listed.title,
        description: listed.description,
        longDescription: listed.longDescription || listed.description,
        pageTitle: `${listed.title} Services in Saudi Arabia`,
        metaDescription: listed.description,
        metaKeywords: [listed.title, "Saudi Arabia", "Eastern Province"],
        benefits: listed.benefits || [],
        features: listed.features || [],
        category: listed.category || "General",
        heroImage: listed.image || "/placeholder.svg",
        overview: listed.longDescription || listed.description,
        sections: [
          {
            title: listed.title,
            content: listed.longDescription || listed.description,
            image: listed.image || "/placeholder.svg",
          },
        ],
        process: [],
        technologies: [],
        caseStudies: [],
        faqs: [],
        relatedServices: [],
      };
    }
  }

  // Hand-written SEO title/description per language for the main pages
  for (const [id, seo] of Object.entries(SERVICE_SEO[locale] || {})) {
    if (result[id]) result[id] = { ...result[id], ...seo };
  }
  return result;
}

// Export the interface for use elsewhere
export type { ServiceDetail } from "./ar";
