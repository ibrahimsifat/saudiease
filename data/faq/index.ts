import { Locale } from "@/config/i18n";
import { arFAQCategories, arFAQs } from "./ar";
import { bnFAQCategories, bnFAQs } from "./bn";
import { enFAQCategories, enFAQs } from "./en";

export type FAQ = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export const getFAQs = (locale: Locale) => {
  switch (locale) {
    case "ar":
      return arFAQs;
    case "bn":
      return bnFAQs;
    default:
      return enFAQs;
  }
};

export const getFAQCategories = (locale: Locale) => {
  switch (locale) {
    case "ar":
      return arFAQCategories;
    case "bn":
      return bnFAQCategories;
    default:
      return enFAQCategories;
  }
};

// Export the English FAQs as default for backward compatibility
export const faqs = enFAQs;
export const faqCategories = enFAQCategories;
