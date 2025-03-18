import type { Locale } from "@/config/i18n";
import { getServiceDetails } from "@/data/service-details/index";
import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";
// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const serviceDetails = getServiceDetails(locale);
  const service = serviceDetails[params.id];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: service.pageTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    openGraph: {
      title: service.pageTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: service.pageTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { id: string; locale: Locale };
}) {
  const { id, locale } = await params;
  return <ServiceDetailClient id={id} locale={locale} />;
}
