import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./config/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Locale detection strategies
  localeDetection: true,

  // Locale prefix strategy
  localePrefix: "always", // 'as-needed' | 'never'
});

export const config = {
  // Match all pathnames except for
  // - files with extensions (e.g. static files)
  // - api routes
  // - _next paths (Next.js internals)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
