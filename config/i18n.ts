export const locales = ["en", "ar", "bn"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  bn: "বাংলা",
};

export const localeFlags: Record<Locale, string> = {
  en: "/images/flags/en.svg",
  ar: "/images/flags/ar.svg",
  bn: "/images/flags/bn.svg",
};

export const localeMetadata: Record<Locale, { dir: "ltr" | "rtl" }> = {
  en: { dir: "ltr" },
  ar: { dir: "rtl" },
  bn: { dir: "ltr" },
};

export const defaultLocale: Locale = "ar";

// Paths that don't require a locale prefix
export const pathsWithoutLocale = [
  "/api",
  "/images",
  "/_next",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/manifest.json",
];

// Function to check if a path needs a locale prefix
export function shouldAddLocalePrefix(path: string): boolean {
  return !pathsWithoutLocale.some((prefix) => path.startsWith(prefix));
}
