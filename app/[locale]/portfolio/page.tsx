import type { Locale } from "@/config/i18n";
import { getAllTranslations } from "@/lib/get-translation-namespace";
import type { Metadata } from "next";
import PortfolioPageClient from "./PortfolioPageClient";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const translations = await getAllTranslations(locale);
  const t = translations.portfolio || {};

  return {
    title: t.metadata?.title || "Our Portfolio | Saudi Ease Digital Solutions",
    description:
      t.metadata?.description ||
      "Explore our portfolio of successful digital projects across Saudi Arabia. View our web development, e-commerce, and digital marketing case studies.",
    keywords:
      t.metadata?.keywords ||
      "Saudi digital portfolio, web development projects, Saudi e-commerce case studies, ZATCA e-invoicing implementations, Saudi Arabia digital marketing success stories",
    openGraph: {
      title: t.metadata?.ogTitle || "Portfolio | Saudi Ease Digital Solutions",
      description:
        t.metadata?.ogDescription ||
        "Explore our portfolio of successful digital projects across Saudi Arabia.",
      url: "https://saudiease.com/portfolio",
      siteName: "Saudi Ease",
      locale: locale,
      type: "website",
    },
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;
  return <PortfolioPageClient locale={locale} />;
}
