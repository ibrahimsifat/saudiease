import { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import IndustriesClientPage from "./IndustriesClientPage";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("industriesPage");

  return {
    title: `${t("hero.badge")} | Saudi Ease`,
    description: t("hero.description"),
    keywords: keywords[locale as keyof typeof keywords].join(", "),
  };
}

export default function IndustriesPage() {
  return <IndustriesClientPage />;
}
