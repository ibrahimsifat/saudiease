import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import EstimatorClient from "./estimator-client";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "estimator" });

  return generatePageMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
    path: "/estimator",
    keywords: t("metadata.keywords"),
  });
}

export default async function EstimatorPage({ params: { locale } }: Props) {
  return <EstimatorClient locale={locale} />;
}
