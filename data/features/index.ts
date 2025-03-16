import type { Locale } from "@/config/i18n";
import { features as arFeature } from "./ar";
import { features as bnFeature } from "./bn";
import { features as enFeature } from "./en";

// Map of locale to feature
const featureMap = {
  en: enFeature,
  ar: arFeature,
  // Add other languages as they become available
  bn: bnFeature, // Fallback to English for Bengali until translated
};

// Function to get feature  for a specific locale
export function getFeatures(locale: Locale) {
  return featureMap[locale] || arFeature; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { features } from "./ar";
