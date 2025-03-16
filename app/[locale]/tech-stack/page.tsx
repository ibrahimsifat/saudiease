import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TechStackPage from "./tech-stack-client";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "techStack.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://saudiease.com/${params.locale}/tech-stack`,
    },
  };
}

export default async function TechStack({
  params,
}: {
  params: { locale: string };
}) {
  return <TechStackPage locale={params.locale} />;
}
