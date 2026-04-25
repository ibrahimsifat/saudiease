import { Locale } from "@/config/i18n";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LegalHubClient from "./LegalHubClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/legal`,
    locale,
  }) as Metadata;
}

export default async function LegalHubPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;

  return <LegalHubClient locale={locale} />;
}
