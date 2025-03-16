import { generateFAQSchema, generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Script from "next/script";
import { Suspense } from "react";
import FAQPageClient from "./FAQPageClient";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "faqPage" });

  return generatePageMetadata({
    title: t("metadata.title"),
    description: t("metadata.description"),
    path: `/${locale}/faq`,
  });
}

export default async function FAQPage({ params: { locale } }: Props) {
  // unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "faqPage" });

  // Generate FAQ schema with translated content
  const faqSchema = generateFAQSchema(
    Array.from({ length: 5 }, (_, i) => ({
      question: t(`questions.${i}.question`),
      answer: t(`questions.${i}.answer`),
    }))
  );

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            {t("loading")}
          </div>
        }
      >
        <FAQPageClient locale={locale} />
      </Suspense>
    </>
  );
}
