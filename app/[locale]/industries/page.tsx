import { Locale } from "@/config/i18n";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import IndustriesClientPage from "./IndustriesClientPage";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations("industriesPage");

  return {
    title: `${t("hero.badge")} | Saudi Ease`,
    description: t("hero.description"),
    keywords:
      "Saudi industry solutions, digital transformation Saudi Arabia, industry-specific technology, Vision 2030 digital solutions",
  };
}

export default function IndustriesPage() {
  return <IndustriesClientPage />;
}
