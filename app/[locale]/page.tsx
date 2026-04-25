import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo-utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

// Static components
import AboutSection from "@/components/about-section";
import BusinessCategories from "@/components/business-categories";
import HeroSection from "@/components/hero-section";
import ClientBlogSection from "@/components/home/blog-client-section";
import ClientCTASection from "@/components/home/cta-client-section";
import ClientFeaturesSection from "@/components/home/features-client-section";
import ClientLatestTechnologies from "@/components/home/latest-technologies-client-section";
import ClientProcessSection from "@/components/home/process-client-section";

import ClientsSection from "@/components/clients-section";
import ServicesSection from "@/components/services-section";
import EMSProductSection from "@/components/ems-product-section";
import { LoadingFallback } from "@/components/ui/loading-fallback";
import { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("meta");
  return {
    title: t("title"),
    description: t("description"),
    keywords: keywords[locale as keyof typeof keywords].join(", "),
    alternates: {
      canonical: `https://saudiease.com/${locale}`,
      languages: {
        en: "https://saudiease.com/en",
        ar: "https://saudiease.com/ar",
        bn: "https://saudiease.com/bn",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://saudiease.com/${locale}`,
      siteName: "SaudiEase",
      locale: locale === "en" ? "en_US" : locale === "ar" ? "ar_SA" : "bn_BD",
      type: "website",
      images: [
        {
          url: "https://saudiease.com/opengraph-image",
          width: 1200,
          height: 630,
          alt: "SaudiEase - Professional IT & Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://saudiease.com/opengraph-image"],
      creator: "@saudiease0",
    },
  };
}

type Props = {
  params: { locale: Locale };
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  return (
    <>
      {/* Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      {/* Hero Section */}
      <HeroSection />
      {/* Clients Section */}
      <ClientsSection />
      {/* Services Section */}
      <ServicesSection locale={locale} />
      {/* EMS Product Section */}
      <EMSProductSection />

      {/* About Section */}
      <AboutSection />
      {/* Business Categories */}
      <BusinessCategories />
      {/* Features Showcase */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientFeaturesSection />
      </Suspense>
      {/* Process Section */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientProcessSection />
      </Suspense>
      {/* Latest Technologies */}
      <Suspense fallback={<LoadingFallback height="300px" />}>
        <ClientLatestTechnologies />
      </Suspense>
      {/* Blog Section */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientBlogSection locale={locale} />
      </Suspense>
      {/* CTA Section */}
      <Suspense fallback={<LoadingFallback height="300px" />}>
        <ClientCTASection />
      </Suspense>
    </>
  );
}
