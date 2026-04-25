import type { Locale } from "@/config/i18n";
import { serviceDetailsAR as arServiceDetails } from "./ar";
import { serviceDetailsBn as bnServiceDetails } from "./bn";
import { serviceDetails as enServiceDetails } from "./en";

import { getServices } from "../services";

// Map of locale to service details
const serviceDetailsMap = {
  en: enServiceDetails,
  ar: arServiceDetails,
  // Add other languages as they become available
  bn: bnServiceDetails, // Fallback to English for Bengali until translated
};

// Function to get service details for a specific locale
export function getServiceDetails(locale: Locale): Record<string, ServiceDetail> {
  const baseDetails = serviceDetailsMap[locale] || arServiceDetails; // Fallback to Arabic if locale not found
  const services = getServices(locale);
  const enhancedDetails = { ...baseDetails } as Record<string, ServiceDetail>;

  // Dynamically inject any missing services from the main services list
  services.forEach((service) => {
    if (!enhancedDetails[service.id]) {
      enhancedDetails[service.id] = {
        id: service.id,
        icon: service.icon,
        title: service.title,
        description: service.description,
        longDescription: service.longDescription || service.description,
        pageTitle: `${service.title} Services in Saudi Arabia`,
        metaDescription: service.description,
        metaKeywords: [service.title, "Saudi Arabia", "Industrial Services"],
        benefits: service.benefits || [],
        features: service.features || [],
        category: service.category || "General",
        heroImage: service.image || "/placeholder.svg",
        overview: service.longDescription || service.description,
        sections: [
          {
            title: `Our ${service.title} Solutions`,
            content: service.longDescription || service.description,
            image: service.image || "/placeholder.svg",
          }
        ],
        process: [],
        technologies: [],
        caseStudies: [],
        faqs: [],
        relatedServices: [],
      };
    }
  });

  return enhancedDetails;
}

// Export the interface for use elsewhere
export type { ServiceDetail } from "./ar";
