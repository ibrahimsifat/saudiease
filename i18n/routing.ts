import { CONSTANT } from "@/config/constants";
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: CONSTANT.locales,
  defaultLocale: CONSTANT.defaultLocale,
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/contact": "/contact",
    "/features": "/features",
    "/services": "/services",
    "/services/*": "/services/*",
    "/estimator": "/estimator",
    "/portfolio": "/portfolio",
    "/blog": "/blog",
    "/blog/*": "/blog/*",
    "/schedule-consultation": "/schedule-consultation",
    "/privacy-policy": "/privacy-policy",
    "/terms-of-service": "/terms-of-service",
    "/legal": "/legal",
    "/:path*": "/:path*",
    "/pathnames": {
      en: "/pathnames",
      bn: "/pfadnamen",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
