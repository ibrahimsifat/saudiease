"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type Locale, localeMetadata } from "@/config/i18n";
import { getServiceDetails } from "@/data/service-details/index";
import { getServices } from "@/data/services";
import { Link } from "@/i18n/routing";
import { generateServiceSchema } from "@/lib/schema";
import * as LucideIcons from "lucide-react";
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Clock,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Script from "next/script";

export default function ServiceDetailClient({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const t = useTranslations("serviceDetail");
  const isRtl = localeMetadata[locale].dir === "rtl";
  const serviceDetails = getServiceDetails(locale);
  const serviceDetail = serviceDetails[id];
  const services = getServices(locale);
  // Get related services
  const relatedServicesData = serviceDetail.relatedServices
    .map((id: string) => services.find((service) => service.id === id))
    .filter(Boolean);
  // Get Lucide icons dynamically
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
    return Icon;
  };

  // Testimonials specific to this service
  const serviceTestimonials = [
    {
      text: t("testimonials.first.text"),
      author: t("testimonials.first.author"),
      position: t("testimonials.first.position"),
      company: t("testimonials.first.company"),
      rating: 5,
    },
    {
      text: t("testimonials.second.text"),
      author: t("testimonials.second.author"),
      position: t("testimonials.second.position"),
      company: t("testimonials.second.company"),
      rating: 5,
    },
  ];

  // Service packages/tiers
  const serviceTiers = [
    {
      name: t("pricing.essential.name"),
      price: t("pricing.essential.price"),
      description: t("pricing.essential.description"),
      featuresCount: 4,
      tierKey: "essential",
      recommended: false,
    },
    {
      name: t("pricing.professional.name"),
      price: t("pricing.professional.price"),
      description: t("pricing.professional.description"),
      featuresCount: 5,
      tierKey: "professional",
      recommended: true,
    },
    {
      name: t("pricing.enterprise.name"),
      price: t("pricing.enterprise.price"),
      description: t("pricing.enterprise.description"),
      featuresCount: 6,
      tierKey: "enterprise",
      recommended: false,
    },
  ];

  // Industry certifications
  const certifications = [
    {
      name: t("certifications.iso.name"),
      description: t("certifications.iso.description"),
    },
    {
      name: t("certifications.sbb.name"),
      description: t("certifications.sbb.description"),
    },
    {
      name: t("certifications.citc.name"),
      description: t("certifications.citc.description"),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Add structured data */}
      <Script
        id={`schema-service-${serviceDetail.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(serviceDetail)),
        }}
      />

      {/* Sticky Table of Contents */}
      <div
        className={`hidden lg:block fixed ${
          isRtl ? "left-4" : "right-4"
        } top-1/3 z-40 bg-white rounded-lg shadow-lg border border-gray-100 p-4 w-48`}
      >
        <h3 className="text-sm font-bold text-saudi-black mb-3 pb-2 border-b">
          {t("tableOfContents")}
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="#overview"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.overview")}
            </a>
          </li>
          <li>
            <Link
              href="/features"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.features")}
            </Link>
          </li>
          <li>
            <a
              href="#process"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.process")}
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.technologies")}
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.pricing")}
            </a>
          </li>
          <li>
            <Link
              href="/estimator"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.caseStudies")}
            </Link>
          </li>
          <li>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.testimonials")}
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {t("sections.faq")}
            </a>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            asChild
          >
            <Link href="/contact">{t("contactUs")}</Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-gray-50 py-8 md:py-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
            <ol
              className={`inline-flex items-center space-x-1 md:space-x-3 ${
                isRtl ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <li className="inline-flex items-center">
                <Link
                  href={`/${locale}`}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {t("breadcrumbs.home")}
                </Link>
              </li>
              <li>
                <div
                  className={`flex items-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 ${
                      isRtl ? "rotate-180" : ""
                    }`}
                  />
                  <Link
                    href={`/${locale}/services`}
                    className={`${
                      isRtl ? "mr-1" : "ml-1"
                    } text-gray-600 hover:text-primary transition-colors`}
                  >
                    {t("breadcrumbs.services")}
                  </Link>
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <ChevronRight
                    className={`h-4 w-4 text-gray-400 ${
                      isRtl ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`${
                      isRtl ? "mr-1" : "ml-1"
                    } text-primary font-medium`}
                    aria-current="page"
                  >
                    {serviceDetail.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              isRtl ? "rtl" : "ltr"
            }`}
          >
            <div className={`order-2 lg:order-1 ${isRtl ? "lg:order-2" : ""}`}>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                {t("professionalServices")}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">
                {serviceDetail.title}
                <span className="block text-primary relative">
                  <span className="relative z-10">{t("solutions")}</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 C50,0 150,0 200,5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {serviceDetail.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {serviceDetail.benefits.map(
                  (benefit: string, index: number) => (
                    <div
                      key={index}
                      className={`flex items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                        isRtl ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ${
                          isRtl ? "ml-3" : "mr-3"
                        }`}
                      >
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <div className={`flex flex-col sm:flex-row gap-4`}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link
                    href="/contact"
                    className={`flex items-center ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    {t("getStarted")}
                    <ArrowRight
                      className={`${
                        isRtl ? "mr-2 rotate-180" : "ml-2"
                      } h-4 w-4`}
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <a href="#pricing">{t("viewPricing")}</a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {t("trustIndicators.experts")}
                  </p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {t("trustIndicators.experience")}
                  </p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {t("trustIndicators.clients")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`order-1 lg:order-2 ${
                isRtl ? "lg:order-1" : ""
              } relative`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={serviceDetail.heroImage || "/placeholder.svg"}
                  alt={serviceDetail.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px] transform rotate-3 z-10">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <p className="font-medium text-saudi-black">
                      {t("floatingElements.satisfaction.title")}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600">
                    {t("floatingElements.satisfaction.description")}
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px] transform -rotate-2 z-10">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <p className="font-medium text-saudi-black">
                      {t("floatingElements.delivery.title")}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600">
                    {t("floatingElements.delivery.description")}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-dashed border-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.overview")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("whatWeOffer")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {serviceDetail.overview}
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              isRtl ? "rtl" : "ltr"
            }`}
          >
            <div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Service overview illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute transform translate-y-[-50%] translate-x-[10%] bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-saudi-black">98%</p>
                  <p className="text-sm text-gray-600">
                    {t("clientSatisfaction")}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3
                  className={`text-xl font-bold text-saudi-black mb-4 flex items-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ${
                      isRtl ? "ml-4" : "mr-4"
                    }`}
                  >
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  {t("whyChoose")} {serviceDetail.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("whyChooseDescription", { service: serviceDetail.title })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className={`flex items-start ${
                      isRtl ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 ${
                        isRtl ? "ml-2" : "mr-2"
                      }`}
                    >
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-700">
                      {t("whyChoosePoints.expertise")}
                    </span>
                  </div>
                  <div
                    className={`flex items-start ${
                      isRtl ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 ${
                        isRtl ? "ml-2" : "mr-2"
                      }`}
                    >
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-700">
                      {t("whyChoosePoints.tailored")}
                    </span>
                  </div>
                  <div
                    className={`flex items-start ${
                      isRtl ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 ${
                        isRtl ? "ml-2" : "mr-2"
                      }`}
                    >
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-700">
                      {t("whyChoosePoints.methodology")}
                    </span>
                  </div>
                  <div
                    className={`flex items-start ${
                      isRtl ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1 ${
                        isRtl ? "ml-2" : "mr-2"
                      }`}
                    >
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-700">
                      {t("whyChoosePoints.support")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3
                  className={`text-xl font-bold text-saudi-black mb-4 flex items-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ${
                      isRtl ? "ml-4" : "mr-4"
                    }`}
                  >
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  {t("whoFor")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("whoForDescription", { service: serviceDetail.title })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">
                      {t("businessTypes.small")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("businessTypes.smallDesc")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">
                      {t("businessTypes.medium")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("businessTypes.mediumDesc")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">
                      {t("businessTypes.large")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("businessTypes.largeDesc")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">
                      {t("businessTypes.government")}
                    </p>
                    <p className="text-sm text-gray-600">
                      {t("businessTypes.governmentDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("keyFeatures")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("comprehensiveSolutions")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("featuresDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetail.sections.map((section: any, index: number) => (
              <Card
                key={index}
                className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 relative">
                  <Image
                    src={
                      section.image || "/placeholder.svg?height=600&width=800"
                    }
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div
                    className={`absolute bottom-4 ${
                      isRtl ? "right-4 text-right" : "left-4"
                    }`}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {section.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                    {section.content}
                  </p>
                </CardContent>
                <div
                  className={`h-1 w-0 bg-primary absolute bottom-0 ${
                    isRtl
                      ? "right-0 group-hover:right-auto group-hover:left-0"
                      : "left-0"
                  } group-hover:w-full transition-all duration-500`}
                ></div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${
                isRtl ? "rtl" : "ltr"
              }`}
            >
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-saudi-black mb-4">
                  {t("technicalSpecs")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("technicalSpecsDescription", {
                    service: serviceDetail.title,
                  })}
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link href="/contact">{t("requestDetailedSpecs")}</Link>
                </Button>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">
                      {t("specs.performance.title")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-2" : "mr-2"
                            }`}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {t(`specs.performance.points.${index}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">
                      {t("specs.security.title")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.from({
                        length: 2,
                      }).map((_, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-2" : "mr-2"
                            }`}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {t(`specs.security.points.${index}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">
                      {t("specs.compatibility.title")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-2" : "mr-2"
                            }`}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {t(`specs.compatibility.points.${index}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">
                      {t("specs.support.title")}
                    </h4>
                    <ul className="space-y-2">
                      {Array.from({ length: 2 }).map((_, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-2" : "mr-2"
                            }`}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700 text-sm">
                            {t(`specs.support.points.${index}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.process")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("ourProcess")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("processDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 z-0"></div>

            <div className="relative z-10">
              {serviceDetail.process.map((step: any, index: number) => {
                const Icon = getIcon(step.icon);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex items-center mb-12 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        isEven ? "text-right pr-12" : "text-left pl-12"
                      } ${
                        isRtl
                          ? isEven
                            ? "text-left pl-12"
                            : "text-right pr-12"
                          : ""
                      }`}
                    >
                      <div
                        className={`inline-flex items-center ${
                          isRtl ? "flex-row-reverse" : ""
                        } ${isEven && !isRtl ? "flex-row-reverse" : ""} ${
                          isEven && isRtl ? "" : ""
                        }`}
                      >
                        <span className="text-primary font-bold text-lg">
                          {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <span
                          className={`${isRtl ? "mr-2" : "ml-2"} ${
                            isEven && !isRtl ? "mr-2" : ""
                          } ${
                            isEven && isRtl ? "ml-2" : ""
                          } h-px w-12 bg-primary/50`}
                        ></span>
                      </div>
                      <h3 className="text-xl font-bold text-saudi-black mt-3 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.technologies")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("technologiesWeUse")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("technologiesDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceDetail.technologies.map((tech: any, index: number) => {
              const Icon = getIcon(tech.icon);

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div
                    className={`flex items-center mb-4 ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${
                        isRtl ? "ml-4" : "mr-4"
                      } group-hover:bg-primary/20 transition-colors`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-saudi-black">
                      {tech.name}
                    </h3>
                  </div>
                  <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">{t("technologiesFooter")}</p>
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/contact">{t("discussTechStack")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.caseStudies")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("successStories")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("caseStudiesDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="space-y-16">
            {serviceDetail.caseStudies.map((caseStudy: any, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isRtl ? "rtl" : "ltr"
                  }`}
                >
                  <div
                    className={
                      isEven
                        ? isRtl
                          ? "order-1"
                          : ""
                        : isRtl
                        ? ""
                        : "order-1 lg:order-2"
                    }
                  >
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={
                          caseStudy.image ||
                          "/placeholder.svg?height=800&width=1200"
                        }
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
                    </div>
                  </div>

                  <div
                    className={
                      isEven
                        ? isRtl
                          ? "order-2"
                          : ""
                        : isRtl
                        ? ""
                        : "order-2 lg:order-1"
                    }
                  >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                      {caseStudy.client}
                    </div>
                    <h3 className="text-2xl font-bold text-saudi-black mb-4">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {caseStudy.description}
                    </p>

                    <div className="bg-gray-50 p-6 rounded-xl mb-6">
                      <h4 className="font-bold text-saudi-black mb-3">
                        {t("results")}
                      </h4>
                      <p className="text-gray-600">{caseStudy.results}</p>
                    </div>

                    <Button
                      className="bg-primary hover:bg-primary/90 text-white"
                      asChild
                    >
                      <Link href="/contact">{t("similarResults")}</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.pricing")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("transparentPricing")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("pricingDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg border ${
                  tier.recommended ? "border-primary" : "border-gray-100"
                } overflow-hidden transition-all hover:shadow-xl relative ${
                  tier.recommended ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                )}

                {tier.recommended && (
                  <div className="absolute top-6 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t("mostPopular")}
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-bold text-saudi-black mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{tier.description}</p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold text-saudi-black">
                      {tier.price}
                    </span>
                    {tier.price !== t("pricing.enterprise.price") && (
                      <span className="text-gray-500 ml-2">
                        {t("perProject")}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {Array.from({ length: tier.featuresCount }).map(
                      (_, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-3" : "mr-3"
                            }`}
                          >
                            <Check className="h-3 w-3 text-primary" />
                          </div>
                          <span className="text-gray-700">
                            {t(
                              `pricing.${tier.tierKey}.features.${featureIndex}`
                            )}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.recommended
                        ? "bg-primary hover:bg-primary/90 text-white"
                        : "bg-white border-primary text-primary hover:bg-primary/10"
                    }`}
                    variant={tier.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">
                      {tier.price === t("pricing.enterprise.price")
                        ? t("contactForQuote")
                        : t("getStarted")}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 p-8 rounded-2xl">
            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
                isRtl ? "rtl" : "ltr"
              }`}
            >
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-saudi-black mb-4">
                  {t("customSolutions")}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t("customSolutionsDescription")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`flex items-start ${
                        isRtl ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                          isRtl ? "ml-4" : "mr-4"
                        }`}
                      >
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-saudi-black">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="font-bold text-saudi-black mb-4">
                  {t("needHelp")}
                </h4>
                <p className="text-gray-600 mb-6">{t("needHelpDescription")}</p>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link href="/contact">{t("scheduleConsultation")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.testimonials")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("clientTestimonials")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("testimonialsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
                <div className="absolute top-8 right-8 text-primary/20">
                  <svg
                    className="h-16 w-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="inline-block h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-lg text-gray-700 mb-6 relative z-10">
                  {testimonial.text}
                </p>

                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-saudi-black">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("sections.faq")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("frequentlyAsked")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("faqDescription", { service: serviceDetail.title })}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div
              className={`bg-white rounded-2xl shadow-md overflow-hidden ${
                isRtl ? "rtl" : "ltr"
              }`}
            >
              {serviceDetail.faqs.map((faq: any, index: number) => (
                <div
                  key={index}
                  className={`border-b border-gray-100 ${
                    index === serviceDetail.faqs.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full p-6 text-left"
                    onClick={() => {
                      /* Toggle FAQ */
                    }}
                  >
                    <span className="font-bold text-saudi-black">
                      {faq.question}
                    </span>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-400 transform transition-transform ${
                        isRtl ? "-rotate-90" : ""
                      }`}
                    />
                  </button>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">{t("moreQuestions")}</p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <Link href="/contact">{t("askQuestion")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("exploreMore")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("relatedServices")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("relatedServicesDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServicesData.map((service: any, index: number) => (
              <Link
                key={index}
                href={`/services/${service.id}`}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div
                    className={`flex items-center text-primary font-medium ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    {t("learnMore")}
                    <ArrowRight
                      className={`${
                        isRtl ? "mr-2 rotate-180" : "ml-2"
                      } h-4 w-4`}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link href={`/services`}>{t("viewAllServices")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
