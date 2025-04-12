"use client";

import type { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
import { Link } from "@/i18n/routing";
import { getTranslations } from "@/lib/get-translation-namespace";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const t = await getTranslations(locale, "notFound");

  return {
    title: t.title || "Page Not Found | Saudi Ease",
    description:
      t.description ||
      "The page you are looking for does not exist or has been moved.",
    keywords: keywords[locale as keyof typeof keywords].join(", "),
  };
}

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">{t("title")}</h2>
        <p className="text-gray-600 mb-8">{t("message")}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("returnHome")}
        </Link>
      </div>
    </div>
  );
}
