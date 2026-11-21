import type { Locale } from "@/config/i18n";
import { blogPosts as arBlogs } from "./ar";
import { blogPosts as bnBlogs } from "./bn";
import { blogPosts as enBlogs } from "./en";
import { KEPT_BLOG_SLUGS } from "./retired.mjs";

// Map of locale to service
const blogsMap = {
  en: enBlogs,
  ar: arBlogs,
  // Add other languages as they become available
  bn: bnBlogs, // Fallback to English for Bengali until translated
};

// Function to get service  for a specific locale
export function getBlogs(locale: Locale) {
  const all = blogsMap[locale] || arBlogs; // Fallback to Arabic if locale not found
  // Only the posts that support services we sell (task 3-12); the rest 301 (next.config.mjs)
  return all.filter((post) => KEPT_BLOG_SLUGS.includes(post.slug));
}

// Export the interface for use elsewhere
export type { blogPosts } from "./ar";
