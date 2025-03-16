import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "privacyPolicy" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return <PrivacyPolicyClient locale={locale} />;
}
