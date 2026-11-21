// Blog decision (MASTER-PLAN task 3-12, owner 2026-11-21): keep the 3 posts that
// support services we sell; 301 the other 17 to the closest live page.
// Plain .mjs so both next.config.mjs and the TypeScript data layer can import it.

export const KEPT_BLOG_SLUGS = [
  "zatca-phase-2-e-invoicing-saudi-businesses",
  "crafting-compelling-corporate-profile-b2b-clients",
  "web-development-vs-custom-cms-right-for-business",
];

// slug -> path without locale prefix
export const RETIRED_BLOG_REDIRECTS = {
  "guide-designing-powerful-logo-saudi-business": "/services/brand-identity",
  "lasting-impact-professional-print-design-digital-world": "/services/brand-identity",
  "ui-ux-design-key-customer-retention-saudi-arabia": "/services/website-design-development",
  "scaling-retail-business-ecommerce-solutions-kingdom": "/services/website-design-development",
  "importance-mobile-first-design-saudi-businesses": "/services/website-design-development",
  "multilingual-websites-best-practices-saudi-businesses": "/services/website-design-development",
  "optimizing-website-performance-saudi-arabia-internet": "/services/website-design-development",
  "designing-user-friendly-arabic-interfaces": "/services/website-design-development",
  "future-mobile-app-development-saudi-market": "/services/mobile-app-development",
  "e-invoicing-transforming-business-saudi-arabia": "/services/zatca-e-invoicing",
  "cybersecurity-best-practices-saudi-businesses": "/services/it-support-retainer",
  "advanced-digital-marketing-strategies-eastern-province": "/services",
  "custom-api-development-streamlines-business-operations": "/services",
  "maximizing-enterprise-efficiency-ems-dashboard": "/services",
  "arabic-seo-strategies-saudi-businesses": "/blog",
  "top-5-trends-saudi-digital-marketing-2023": "/blog",
  "vision-2030-digital-transformation-opportunities": "/blog",
};
