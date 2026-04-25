import { locales } from "@/config/i18n";
import { getBlogs } from "@/data/blog-posts/index";
import { getBusinessCategories } from "@/data/business-categories/index";
import { getFeatures } from "@/data/features";
import type { MetadataRoute } from "next";

const baseUrl = "https://saudiease.com";

// All service detail page IDs
const serviceDetailIds = [
  "web-development",
  "mobile-app-development",
  "e-invoicing",
  "logo-design",
  "digital-marketing",
  "custom-cms-development",
  "e-commerce-solutions",
  "brand-identity",
  "api-development",
  "corporate-profile",
  "ui-ux-design",
  "print-design",
];

// Static pages with their change frequencies and priorities
const staticPages: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/features", changeFrequency: "monthly", priority: 0.7 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.7 },
  { path: "/estimator", changeFrequency: "monthly", priority: 0.6 },
  { path: "/schedule-consultation", changeFrequency: "monthly", priority: 0.6 },
  { path: "/tech-stack", changeFrequency: "monthly", priority: 0.5 },
  { path: "/legal", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // 1. Static pages for every locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  // 2. Service detail pages for every locale
  for (const locale of locales) {
    for (const serviceId of serviceDetailIds) {
      entries.push({
        url: `${baseUrl}/${locale}/services/${serviceId}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  // 3. Blog posts for every locale
  for (const locale of locales) {
    const blogs = getBlogs(locale);
    for (const blog of blogs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${blog.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // 4. Feature pages for every locale
  for (const locale of locales) {
    const features = getFeatures(locale);
    for (const feature of features) {
      entries.push({
        url: `${baseUrl}/${locale}/features/${feature.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  // 5. Industry pages for every locale
  for (const locale of locales) {
    const categories = getBusinessCategories(locale);
    for (const category of categories) {
      entries.push({
        url: `${baseUrl}/${locale}/industries/${category.id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return entries;
}
