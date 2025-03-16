import type { Locale } from "@/config/i18n";
import FeatureDetailPageClient from "./FeatureDetailPageClient";

// Generate metadata for each feature page
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string; locale: Locale };
// }): Promise<Metadata> {
//   const feature = features.find((f) => f.id === params.id);
//   const t = await getTranslations({
//     locale: params.locale,
//     namespace: "features",
//   });

//   if (!feature) {
//     return {
//       title: t("notFound.title"),
//       description: t("notFound.description"),
//     };
//   }

//   const metadata = await generateLocalizedMetadata(params.locale, "features");

//   return {
//     ...metadata,
//     title: `${t(`detail.${params.id}.title`)} | ${t("seoTitle")}`,
//     description: t(`detail.${params.id}.description`),
//     openGraph: {
//       ...metadata.openGraph,
//       title: `${t(`detail.${params.id}.title`)} | ${t("seoTitle")}`,
//       description: t(`detail.${params.id}.description`),
//       url: `https://saudiease.com/${params.locale}/features/${params.id}`,
//     },
//   };
// }

// // Generate static paths for all features
// export async function generateStaticParams() {
//   const locales = ["en", "ar", "bn"];
//   const paths = [];

//   for (const locale of locales) {
//     for (const feature of features) {
//       paths.push({ locale, id: feature.id });
//     }
//   }

//   return paths;
// }

export default async function FeatureDetailPage({
  params,
}: {
  params: { id: string; locale: Locale };
}) {
  const { id, locale } = await params;
  return <FeatureDetailPageClient id={id} locale={locale} />;
}
