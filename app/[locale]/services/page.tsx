import type { Locale } from "@/config/i18n";
import { generateServiceSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import Script from "next/script";
import ServicesPageClient from "./ServicesPageClient";

import { getTranslations } from "next-intl/server";
type Props = {
  params: { locale: Locale };
};
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = await params.locale;
  const t = await getTranslations({ locale, namespace: "servicesPage" });

  return generatePageMetadata({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords", { returnObjects: true }),
    path: `/${params.locale}/services`,
  });
}

export default async function ServicesPage({ params }: Props) {
  const locale = await params.locale;
  const t = await getTranslations({ locale, namespace: "servicesPage" });

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              title: t("meta.schemaTitle"),
              description: t("meta.schemaDescription"),
              provider: {
                name: "Saudi Ease",
                url: "https://saudiease.com",
              },
            })
          ),
        }}
      />
      <ServicesPageClient locale={params.locale} />
    </>
  );
}
