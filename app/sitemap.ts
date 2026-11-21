import { locales, type Locale } from "@/config/i18n";
import { localeUrl, pageAlternates } from "@/config/site";
import { getBlogs } from "@/data/blog-posts/index";
import { getFeatures } from "@/data/features";
import { CITIES, CITY_SERVICE } from "@/data/city-pages";
import { INDUSTRY_ID } from "@/data/industry-pages";
import { getServiceDetails } from "@/data/service-details/index";
import type { MetadataRoute } from "next";

// Only indexable pages that return 200 on the canonical host.
// Arabic (default locale) URLs have no /ar prefix.
// Excluded on purpose: template /industries/<id> pages (404; only real industries are listed),
// admin, API.
const staticPaths = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/blog",
  "/contact",
  "/faq",
  "/features",
  "/industries",
  "/schedule-consultation",
  "/tech-stack",
  "/legal",
  "/privacy-policy",
  "/terms-of-service",
];

function entry(
  locale: Locale,
  path: string,
  available: readonly Locale[] = locales,
  lastModified?: Date
): MetadataRoute.Sitemap[number] {
  return {
    url: localeUrl(locale, path),
    ...(lastModified ? { lastModified } : {}),
    alternates: { languages: pageAlternates(locale, path, available).languages },
  };
}

function parseDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) entries.push(entry(locale, path));
  }

  // Services: every ID that renders (both data sets), per locale.
  for (const locale of locales) {
    for (const id of Object.keys(getServiceDetails(locale))) {
      const available = locales.filter((l) => Boolean(getServiceDetails(l)[id]));
      entries.push(entry(locale, `/services/${id}`, available));
    }
  }

  // Service × city pages (only where on-site delivery is real)
  for (const locale of locales) {
    for (const city of CITIES) {
      entries.push(entry(locale, `/services/${CITY_SERVICE}/${city}`));
    }
  }

  // Industry pages with real delivery history (task 3-8)
  for (const locale of locales) {
    entries.push(entry(locale, `/industries/${INDUSTRY_ID}`));
  }

  // Blog posts, with their own publish date as lastmod.
  for (const locale of locales) {
    for (const post of getBlogs(locale)) {
      const available = locales.filter((l) =>
        getBlogs(l).some((p) => p.slug === post.slug)
      );
      entries.push(
        entry(locale, `/blog/${post.slug}`, available, parseDate(post.date))
      );
    }
  }

  for (const locale of locales) {
    for (const feature of getFeatures(locale)) {
      entries.push(entry(locale, `/features/${feature.id}`));
    }
  }

  return entries;
}
