import type { Locale } from "@/config/i18n";
import { companyInfoAr } from "./ar";
import { companyInfoBn } from "./bn";
import { companyInfoEn } from "./en";
import type { CompanyInfo } from "./types";

// Export a function to get company info based on locale
export function getCompanyInfo(locale: Locale): CompanyInfo {
  switch (locale) {
    case "ar":
      return companyInfoAr;
    case "bn":
      return companyInfoBn;
    case "en":
    default:
      return companyInfoEn;
  }
}

// Export the default English version for backward compatibility
export const companyInfo = companyInfoAr;
