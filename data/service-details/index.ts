import type { Locale } from "@/config/i18n";
import { serviceDetails as arServiceDetails } from "./ar";
import { serviceDetails as enServiceDetails } from "./en";

// Map of locale to service details
const serviceDetailsMap = {
  en: enServiceDetails,
  ar: arServiceDetails,
  // Add other languages as they become available
  bn: enServiceDetails, // Fallback to English for Bengali until translated
};

// Function to get service details for a specific locale
export function getServiceDetails(locale: Locale) {
  return serviceDetailsMap[locale] || arServiceDetails; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { ServiceDetail } from "./ar";
