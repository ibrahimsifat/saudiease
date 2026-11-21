import { defaultLocale, locales, type Locale } from "@/config/i18n";

/**
 * The one canonical origin for the whole site (canonicals, hreflang, sitemap,
 * schema, robots). Change it here only. Vercel serves this host with 200 and
 * 308-redirects saudiease.com to it (set 2026-11-21).
 */
export const SITE_URL = "https://www.saudiease.com";

export const WHATSAPP_NUMBER = "966558845503";

function cleanPath(path = ""): string {
  if (!path || path === "/") return "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return p.replace(/\/+$/, "");
}

/** Locale-aware path: Arabic (default) has no prefix, en/bn are prefixed. */
export function localePath(locale: Locale | string | undefined, path = ""): string {
  const p = cleanPath(path);
  const l = (locales as readonly string[]).includes(locale as string)
    ? (locale as Locale)
    : defaultLocale;
  if (l === defaultLocale) return p || "/";
  return `/${l}${p}`;
}

/** Absolute URL for a locale + path. */
export function localeUrl(locale: Locale | string | undefined, path = ""): string {
  const p = localePath(locale, path);
  return p === "/" ? SITE_URL : `${SITE_URL}${p}`;
}

/**
 * Self-canonical + reciprocal hreflang for one page.
 * `path` is the path WITHOUT a locale prefix, e.g. "/about".
 * `available` limits hreflang to locales where the page really exists.
 */
export function pageAlternates(
  locale: Locale | string,
  path = "",
  available: readonly Locale[] = locales
) {
  const languages: Record<string, string> = {};
  for (const l of available) languages[l] = localeUrl(l, path);
  if (available.includes(defaultLocale)) {
    languages["x-default"] = localeUrl(defaultLocale, path);
  }
  return { canonical: localeUrl(locale, path), languages };
}

/** Strip a leading /en, /ar or /bn from a path. */
export function stripLocale(path = ""): { locale?: Locale; path: string } {
  const m = path.match(/^\/(en|ar|bn)(?=\/|$)/);
  if (!m) return { path: cleanPath(path) };
  return { locale: m[1] as Locale, path: cleanPath(path.slice(m[0].length)) };
}

export const BRAND: Record<string, string> = {
  ar: "سعودي إيز",
  en: "Saudi Ease",
  bn: "সৌদি ইজ",
};

/** "<page> | <brand>" when it fits in 60 characters, else the page title alone. */
export function withBrand(title: string, locale: string): string {
  const full = `${title} | ${BRAND[locale] || BRAND.en}`;
  return [...full].length <= 60 ? full : title;
}
