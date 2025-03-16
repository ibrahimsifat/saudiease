import type { Locale } from "@/config/i18n";
import { blogPosts as arBlogs } from "./ar";
import { blogPosts as bnBlogs } from "./bn";
import { blogPosts as enBlogs } from "./en";

// Map of locale to service
const blogsMap = {
  en: enBlogs,
  ar: arBlogs,
  // Add other languages as they become available
  bn: bnBlogs, // Fallback to English for Bengali until translated
};

// Function to get service  for a specific locale
export function getBlogs(locale: Locale) {
  return blogsMap[locale] || arBlogs; // Fallback to Arabic if locale not found
}

// Export the interface for use elsewhere
export type { blogPosts } from "./ar";
