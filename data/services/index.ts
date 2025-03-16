import type { Locale } from "@/config/i18n";
import { services as arService } from "./ar";
import { services as bnService } from "./bn";
import { services as enService } from "./en";

// Map of locale to service
const serviceMap = {
  en: enService,
  ar: arService,
  // Add other languages as they become available
  bn: bnService, // Fallback to English for Bengali until translated
};

// Function to get service  for a specific locale
export function getServices(locale: Locale) {
  return serviceMap[locale] || arService; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { services } from "./ar";
