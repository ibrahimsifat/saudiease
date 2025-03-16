import type { Locale } from "@/config/i18n";
import ServiceDetailClient from "./ServiceDetailClient";
// Dynamic metadata
// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string; locale: Locale };
// }): Promise<Metadata> {
//   const serviceDetails = getServiceDetails(params.locale);
//   const service = serviceDetails[params.id];
//   console.log(service);
//   if (!service) {
//     return {
//       title: "Service Not Found",
//       description: "The requested service could not be found.",
//     };
//   }

//   return {
//     title: service.pageTitle,
//     description: service.metaDescription,
//     keywords: service.metaKeywords,
//     openGraph: {
//       title: service.pageTitle,
//       description: service.metaDescription,
//       images: [service.heroImage],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: service.pageTitle,
//       description: service.metaDescription,
//       images: [service.heroImage],
//     },
//   };
// }

export default async function ServiceDetailPage({
  params,
}: {
  params: { id: string; locale: Locale };
}) {
  const { id, locale } = await params;
  // Find the service

  // // If service not found, return 404
  // if (!serviceData || !serviceDetail) {
  //   notFound();
  // }

  // // Merge the icon from services data
  // serviceDetail.icon = serviceData.icon;
  console.log(locale);
  return <ServiceDetailClient id={id} locale={locale} />;
}
