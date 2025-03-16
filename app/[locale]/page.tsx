import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo-utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";

// Static components
import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ClientBlogSection from "@/components/home/blog-client-section";
import ClientCTASection from "@/components/home/cta-client-section";
import ClientFeaturesSection from "@/components/home/features-client-section";
import ClientIndustriesSection from "@/components/home/industries-client-section";
import ClientLatestTechnologies from "@/components/home/latest-technologies-client-section";
import ClientProcessSection from "@/components/home/process-client-section";
import ClientTestimonialsSection from "@/components/home/testimonialsSection-client-section";
import ClientWhyChooseUs from "@/components/home/why-choose-client-section";
import ServicesSection from "@/components/services-section";
import TrustedBy from "@/components/trusted-by";
import { LoadingFallback } from "@/components/ui/loading-fallback";
import { Locale } from "@/config/i18n";
import type {} from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
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

      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Services Section */}
      <ServicesSection locale={locale} />

      {/* Why Choose Us Section */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientWhyChooseUs />
      </Suspense>

      {/* About Section */}
      <AboutSection />

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

      {/* Industries Section */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientIndustriesSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<LoadingFallback height="400px" />}>
        <ClientTestimonialsSection />
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
