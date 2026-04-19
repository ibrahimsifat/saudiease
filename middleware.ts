import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "bn"],
  defaultLocale: "ar",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
