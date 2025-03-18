import { Locale } from "@/config/i18n";
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

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  return <PrivacyPolicyClient locale={locale} />;
}
