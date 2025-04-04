import { Locale, localeMetadata } from "@/config/i18n";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PortfolioPageClient from "./PortfolioPageClient";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale,
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
      url: `https://saudiease.com/${locale}/portfolio`,
      siteName: "Saudi Ease",
      locale: locale,
      type: "website",
    },
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  const dir =
    localeMetadata[locale as keyof typeof localeMetadata]?.dir || "ltr";

  return (
    <div dir={dir}>
      <PortfolioPageClient locale={locale} />
    </div>
  );
}
