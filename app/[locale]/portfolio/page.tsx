import { Locale, localeMetadata } from "@/config/i18n";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PortfolioPageClient from "./PortfolioPageClient";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "portfolioPage",
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "Saudi digital portfolio, web development projects, Saudi e-commerce case studies, ZATCA e-invoicing implementations, Saudi Arabia digital marketing success stories",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://saudiease.com/${params.locale}/portfolio`,
      siteName: "Saudi Ease",
      locale: params.locale,
      type: "website",
    },
  };
}

export default function PortfolioPage({ params }: Props) {
  const dir =
    localeMetadata[params.locale as keyof typeof localeMetadata]?.dir || "ltr";

  return (
    <div dir={dir}>
      <PortfolioPageClient locale={params.locale} />
    </div>
  );
}
