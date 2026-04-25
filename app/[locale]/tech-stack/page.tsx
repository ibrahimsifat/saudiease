import { Locale } from "@/config/i18n";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TechStackPage from "./tech-stack-client";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "techStack.metadata",
  });

  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    path: `/${locale}/tech-stack`,
    locale,
  });
}

export default async function TechStack({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  return <TechStackPage locale={locale} />;
}
