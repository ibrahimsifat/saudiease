import type { Locale } from "@/config/i18n";
import { businessCategories as arCategories } from "./ar";
import { businessCategories as bnCategories } from "./bn";
import { businessCategories as enCategories } from "./en";

// Map of locale to service
const businessCategoriesMap = {
  en: enCategories,
  ar: arCategories,
  // Add other languages as they become available
  bn: bnCategories, // Fallback to English for Bengali until translated
};

// Function to get service  for a specific locale
export function getBusinessCategories(locale: Locale) {
  return businessCategoriesMap[locale] || arCategories; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { businessCategories } from "./ar";
