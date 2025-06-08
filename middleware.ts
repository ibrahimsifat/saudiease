import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "bn"],
  defaultLocale: "ar",
  localePrefix: "as-needed",
  localeDetection: false, // Disable automatic locale detection
});

export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
