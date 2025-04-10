import { Locale } from "@/config/i18n";
import { getBusinessCategories } from "@/data/business-categories";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import IndustryDetailClient from "./IndustryDetailClient";

type Props = {
  params: { id: string; locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const industry = getBusinessCategories(locale).find(
    (category) => category.id === params.id
  );
  const t = await getTranslations({
    locale: params.locale,
    namespace: "industryDetail.meta",
  });

  if (!industry) {
    return {
      title: t("notFound"),
    };
  }

  return {
    title: t("title", { industry: industry.name }),
    description: t("description", {
      industry: industry.name,
      industryLower: industry.name.toLowerCase(),
    }),
    keywords: t("keywords", {
      industry: industry.name,
      industryLower: industry.name.toLowerCase(),
    }),
  };
}

export default function IndustryDetailPage({ params }: Props) {
  return <IndustryDetailClient id={params.id} />;
}
