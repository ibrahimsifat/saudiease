import type { Locale } from "@/config/i18n";

// Function to get translations for a specific namespace
export async function getTranslations(locale: Locale, namespace: string) {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages[namespace] || {};
  } catch (error) {
    console.error(
      `Failed to load translations for ${locale}.${namespace}:`,
      error
    );
    return {};
  }
}

// Function to get all translations for a locale
export async function getAllTranslations(locale: Locale) {
  try {
    const messages = await import(`../messages/${locale}.json`);
    return messages.default || messages;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    return {};
  }
}

// Function to get a translator for a specific namespace
export async function getTranslator(locale: Locale, namespace: string) {
  const translations = await getTranslations(locale, namespace);

  return function translate(
    key: string,
    params?: Record<string, string | number>
  ) {
    let message = key
      .split(".")
      .reduce((obj, key) => obj?.[key], translations as any);

    if (!message) {
      console.warn(`Translation missing: ${locale}.${namespace}.${key}`);
      return key;
    }

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        message = message.replace(new RegExp(`{${key}}`, "g"), String(value));
      });
    }

    return message;
  };
}
