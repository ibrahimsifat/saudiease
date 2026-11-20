import { SITE_URL } from "@/config/site";
import type { MetadataRoute } from "next";

// /_next/ must stay crawlable: Googlebot needs the JS/CSS to render pages.
const disallow = ["/api/", "/admin/", "/*/admin/"];

// Search and AI answer-engine crawlers, allowed explicitly.
const crawlers = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: crawlers, allow: "/", disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
