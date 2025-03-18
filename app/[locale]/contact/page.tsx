import type { Locale } from "@/config/i18n";
import { generateLocalizedMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactClient from "./ContactClient";

// Generate metadata for the page with proper localization
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  // Get translations for this page
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return <ContactClient locale={locale} />;
}
