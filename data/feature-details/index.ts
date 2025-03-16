import type { Locale } from "@/config/i18n";
import { featureDetails as arFeatureDetails } from "./ar";
import { featureDetails as bnFeatureDetails } from "./bn";
import { featureDetails as enFeatureDetails } from "./en";

// Map of locale to featureDetails
const featureDetailsMap = {
  en: enFeatureDetails,
  ar: arFeatureDetails,
  // Add other languages as they become available
  bn: bnFeatureDetails, // Fallback to English for Bengali until translated
};

// Function to get featureDetails  for a specific locale
export function getFeatureDetails(locale: Locale) {
  return featureDetailsMap[locale] || arFeatureDetails; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { featureDetails } from "./ar";
