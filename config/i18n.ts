export const locales = ["en", "ar", "bn"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];

// Define RTL languages
export const rtlLocales = ["ar"];
export const isRtl = (locale: Locale) => rtlLocales.includes(locale);

// Define language names for display
export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  bn: "বাংলা",
};

// Define language metadata
export const localeMetadata: Record<
  Locale,
  { dir: "ltr" | "rtl"; name: string }
> = {
  en: { dir: "ltr", name: "English" },
  ar: { dir: "rtl", name: "العربية" },
  bn: { dir: "ltr", name: "বাংলা" },
};
