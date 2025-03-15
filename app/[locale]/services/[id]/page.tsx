import type { Locale } from "@/config/i18n";
import { getServiceDetails } from "@/data/service-details/index";
import { services } from "@/data/services";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: Locale };
}): Promise<Metadata> {
  const serviceDetails = getServiceDetails(params.locale);
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
  // Find the service
  const serviceData = services.find((service) => service.id === params.id);
  const serviceDetails = getServiceDetails(params.locale);
  const serviceDetail = serviceDetails[params.id];

  // If service not found, return 404
  if (!serviceData || !serviceDetail) {
    notFound();
  }

  // Merge the icon from services data
  serviceDetail.icon = serviceData.icon;

  return (
    <ServiceDetailClient
      serviceDetail={serviceDetail}
      serviceData={serviceData}
      params={params}
    />
  );
}
