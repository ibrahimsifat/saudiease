import type { Locale } from "@/config/i18n";
import { projects as arProject } from "./ar";
import { projects as bnProject } from "./bn";
import { projects as enProject } from "./en";

// Map of locale to project
const projectMap = {
  en: enProject,
  ar: arProject,
  // Add other languages as they become available
  bn: bnProject, // Fallback to English for Bengali until translated
};

// Function to get project  for a specific locale
export function getProjects(locale: Locale) {
  return projectMap[locale] || arProject; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { projects } from "./ar";
