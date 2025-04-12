import { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
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

  return {
    title: t("title"),
    description: t("description"),
    keywords: keywords[locale as keyof typeof keywords].join(", "),
  } as Metadata;
}

export default async function LegalHubPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return <LegalHubClient locale={locale} />;
}
