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
      "Saudi digital portfolio, web development projects, Saudi e-commerce case studies, ZATCA e-invoicing implementations, Saudi Arabia digital marketing success stories, Eastern Province projects",
    alternates: {
      canonical: `https://saudiease.com/${locale}/portfolio`,
      languages: {
        en: "https://saudiease.com/en/portfolio",
        ar: "https://saudiease.com/ar/portfolio",
        bn: "https://saudiease.com/bn/portfolio",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://saudiease.com/${locale}/portfolio`,
      siteName: "Saudi Ease",
      locale: locale,
      type: "website",
      images: [
        {
          url: "https://saudiease.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://saudiease.com/opengraph-image"],
      creator: "@saudiease0",
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
