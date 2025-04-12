import { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import EstimatorClient from "./estimator-client";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "estimator" });

  return generatePageMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
    path: "/estimator",
    keywords: keywords[locale as keyof typeof keywords].join(", "),
  });
}

export default async function EstimatorPage({ params }: Props) {
  const { locale } = await params;

  return <EstimatorClient locale={locale} />;
}
