import { Locale } from "@/config/i18n";
import { getBlogs } from "@/data/blog-posts/index";
import { getProjects } from "@/data/projects/index";
import { getServices } from "@/data/services/index";

// Define search result types
export type SearchResultType = "service" | "project" | "blog" | "page";

export interface SearchResult {
  id: string | number;
  title: string;
  description: string;
  type: SearchResultType;
  url: string;
  image?: string;
  category?: string;
  tags?: string[];
  relevance: number; // Higher is more relevant
}

// Static pages for search
const pages = [
  {
    id: "home",
    title: "Home",
    description:
      "Saudi Ease - Leading Digital Solutions Provider in Saudi Arabia",
    url: "/",
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn about Saudi Ease, our mission, vision, and team",
    url: "/about",
  },
  {
    id: "contact",
    title: "Contact Us",
    description: "Get in touch with Saudi Ease for your digital needs",
    url: "/contact",
  },
];

// Search function that searches across all content types
export function searchContent(
  query: string,
  filters: SearchResultType[] = [],
  locale: Locale
): SearchResult[] {
  if (!query.trim()) return [];
  const services = getServices(locale);
  const projects = getProjects(locale);
  const blogPosts = getBlogs(locale);
  const normalizedQuery = query.toLowerCase().trim();
  const terms = normalizedQuery.split(/\s+/);
  const results: SearchResult[] = [];

  // Search in services
  if (filters.length === 0 || filters.includes("service")) {
    services.forEach((service) => {
      const relevance = calculateRelevance(
        service.title,
        service.description,
        terms
      );
      if (relevance > 0) {
        results.push({
          id: service.id,
          title: service.title,
          description: service.description,
          type: "service",
          url: `/services/${service.id}`,
          relevance,
        });
      }
    });
  }

  // Search in projects
  if (filters.length === 0 || filters.includes("project")) {
    projects.forEach((project) => {
      const relevance = calculateRelevance(
        project.title,
        project.description,
        terms,
        [project.category, ...project.technologies]
      );
      if (relevance > 0) {
        results.push({
          id: project.id,
          title: project.title,
          description: project.description,
          type: "project",
          url: `/portfolio/${project.id}`,
          image: project.image,
          category: project.category,
          relevance,
        });
      }
    });
  }

  // Search in blog posts
  if (filters.length === 0 || filters.includes("blog")) {
    blogPosts.forEach((post) => {
      const relevance = calculateRelevance(post.title, post.excerpt, terms, [
        ...post.tags,
        post.category,
      ]);
      if (relevance > 0) {
        results.push({
          id: post.id,
          title: post.title,
          description: post.excerpt,
          type: "blog",
          url: `/blog/${post.slug}`,
          image: post.image,
          category: post.category,
          tags: post.tags,
          relevance,
        });
      }
    });
  }

  // Search in pages
  if (filters.length === 0 || filters.includes("page")) {
    pages.forEach((page) => {
      const relevance = calculateRelevance(page.title, page.description, terms);
      if (relevance > 0) {
        results.push({
          id: page.id,
          title: page.title,
          description: page.description,
          type: "page",
          url: page.url,
          relevance,
        });
      }
    });
  }

  // Sort by relevance (highest first)
  return results.sort((a, b) => b.relevance - a.relevance);
}

// Calculate relevance score based on matches in title, description, and tags
function calculateRelevance(
  title: string,
  description: string,
  searchTerms: string[],
  tags: string[] = []
): number {
  const normalizedTitle = title.toLowerCase();
  const normalizedDesc = description.toLowerCase();
  const normalizedTags = tags.map((tag) => tag.toLowerCase());

  let score = 0;

  // Check for exact matches in title (highest weight)
  if (normalizedTitle.includes(searchTerms.join(" "))) {
    score += 10;
  }

  // Check for individual term matches
  searchTerms.forEach((term) => {
    // Title matches (high weight)
    if (normalizedTitle.includes(term)) {
      score += 5;

      // Bonus for term at the beginning of title
      if (normalizedTitle.startsWith(term)) {
        score += 3;
      }
    }

    // Description matches (medium weight)
    if (normalizedDesc.includes(term)) {
      score += 3;
    }

    // Tag matches (high weight)
    normalizedTags.forEach((tag) => {
      if (tag.includes(term) || term.includes(tag)) {
        score += 4;
      }
    });
  });

  return score;
}

// Get search suggestions based on partial input
export function getSearchSuggestions(
  partialQuery: string,
  locale: Locale
): string[] {
  if (!partialQuery.trim() || partialQuery.length < 2) return [];
  const services = getServices(locale);
  const projects = getProjects(locale);
  const blogPosts = getBlogs(locale);
  const normalizedQuery = partialQuery.toLowerCase().trim();
  const suggestions = new Set<string>();

  // Collect potential suggestions from services
  services.forEach((service) => {
    if (service.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(service.title);
    }
  });

  // Collect from projects
  projects.forEach((project) => {
    if (project.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(project.title);
    }
    if (project.category.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(project.category);
    }
  });

  // Collect from blog posts
  blogPosts.forEach((post) => {
    if (post.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(post.title);
    }
    post.tags.forEach((tag) => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(tag);
      }
    });
  });

  // Convert to array, limit to 5 suggestions
  return Array.from(suggestions).slice(0, 5);
}

// Popular search terms
export const popularSearchTerms = {
  en: [
    "web development",
    "e-invoicing",
    "ZATCA compliance",
    "mobile app",
    "digital marketing",
    "SEO",
    "graphic design",
    "Saudi business",
  ],
  ar: [
    "تطوير الويب",
    "الفواتير الإلكترونية",
    "الامتثال لزكاة",
    "تطبيق محمول",
    "التسويق الرقمي",
    "تحسين محركات البحث",
    "تصميم جرافيك",
    "الأعمال السعودية",
  ],
  bn: [
    "ওয়েব ডেভেলপমেন্ট",
    "ই-ইনভয়েসিং",
    "ZATCA কমপ্লায়েন্স",
    "মোবাইল অ্যাপ",
    "ডিজিটাল মার্কেটিং",
    "এসইও",
    "গ্রাফিক ডিজাইন",
    "সৌদি ব্যবসা",
  ],
};
