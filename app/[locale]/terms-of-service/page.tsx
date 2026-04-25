import { Locale } from "@/config/i18n";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TermsOfServiceClient from "./TermsOfServiceClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsOfService" });

  return generatePageMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
    path: `/${locale}/terms-of-service`,
    locale,
  });
}

export default async function TermsOfServicePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  return <TermsOfServiceClient locale={locale} />;
}
