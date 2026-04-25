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
  const { locale, id } = await params;
  const serviceDetails = getServiceDetails(locale);
  const service = serviceDetails[id];

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
    alternates: {
      canonical: `https://saudiease.com/${locale}/services/${id}`,
      languages: {
        en: `https://saudiease.com/en/services/${id}`,
        ar: `https://saudiease.com/ar/services/${id}`,
        bn: `https://saudiease.com/bn/services/${id}`,
      },
    },
    openGraph: {
      title: service.pageTitle,
      description: service.metaDescription,
      url: `https://saudiease.com/${locale}/services/${id}`,
      siteName: "SaudiEase",
      type: "website",
      images: [
        {
          url: service.heroImage?.startsWith("http")
            ? service.heroImage
            : `https://saudiease.com${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.pageTitle,
      description: service.metaDescription,
      images: [
        service.heroImage?.startsWith("http")
          ? service.heroImage
          : `https://saudiease.com${service.heroImage}`,
      ],
      creator: "@saudiease0",
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
