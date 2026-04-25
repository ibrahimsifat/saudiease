import { Locale } from "@/config/i18n";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

  return generatePageMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
    path: `/${locale}/privacy-policy`,
    locale,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  return <PrivacyPolicyClient locale={locale} />;
}
