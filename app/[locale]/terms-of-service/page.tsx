import { Locale } from "@/config/i18n";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TermsOfServiceClient from "./TermsOfServiceClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "termsOfService" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function TermsOfServicePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <TermsOfServiceClient locale={locale} />;
}
