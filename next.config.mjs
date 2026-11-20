/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "placeholder.com" },
      { hostname: "saudiease.com" },
      { hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com" },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configure headers for better security and performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=31536000",
          },
        ],
      },
    ];
  },
  // Configure redirects for common paths
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      // Services no longer offered (docs/seo/business-goals.md, 2026-11-20)
      ...[
        "aramco-sabic-vendor-code",
        "excel-data-work",
        "cv-document-preparation",
        "digital-marketing",
        "ui-ux-design",
        "api-development",
      ].flatMap((id) => [
        { source: `/services/${id}`, destination: "/services", permanent: true },
        { source: `/ar/services/${id}`, destination: "/services", permanent: true },
        { source: `/:locale(en|bn)/services/${id}`, destination: "/:locale/services", permanent: true },
      ]),
      // Duplicate service pages merged into one URL per service (task 3-1)
      ...Object.entries({
        "web-development": "website-design-development",
        "custom-cms-development": "website-design-development",
        "e-commerce-solutions": "website-design-development",
        "e-invoicing": "zatca-e-invoicing",
        "corporate-profile": "company-profile-branding",
        "logo-design": "brand-identity",
        "print-design": "brand-identity",
      }).flatMap(([from, to]) => [
        { source: `/services/${from}`, destination: `/services/${to}`, permanent: true },
        { source: `/ar/services/${from}`, destination: `/services/${to}`, permanent: true },
        { source: `/:locale(en|bn)/services/${from}`, destination: `/:locale/services/${to}`, permanent: true },
      ]),
      // No published prices (owner decision 2026-11-20): estimator retired
      { source: "/estimator", destination: "/contact", permanent: true },
      { source: "/ar/estimator", destination: "/contact", permanent: true },
      { source: "/:locale(en|bn)/estimator", destination: "/:locale/contact", permanent: true },
      // Careers page never existed; the company is not hiring
      { source: "/careers", destination: "/contact", permanent: true },
      { source: "/:locale(en|bn)/careers", destination: "/:locale/contact", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
