"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Locale, localeMetadata } from "@/config/i18n";
import { getServices } from "@/data/services/index";
import { ArrowRight, Filter, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServicesPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations("servicesPage");
  const isRtl = localeMetadata[locale].dir === "rtl";
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const services = getServices(locale);
  // Get unique categories
  const categories = [
    "all",
    ...new Set(services.map((service) => service.category)),
  ];

  // Filter services by search term and category
  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-gray-50 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("hero.subtitle")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("hero.description")}
            </p>

            {/* Search Bar */}
            <div
              className={`flex ${
                isRtl ? "flex-row-reverse" : ""
              } max-w-xl mx-auto bg-white rounded-lg shadow-md p-2 border border-gray-100`}
            >
              <div className="relative flex-grow">
                <div
                  className={`absolute ${
                    isRtl ? "right-3" : "left-3"
                  } top-1/2 transform -translate-y-1/2 text-gray-400`}
                >
                  <Search className="h-5 w-5" />
                </div>
                <Input
                  type="text"
                  placeholder={t("search.placeholder")}
                  className={`w-full ${
                    isRtl ? "pr-10 text-right" : "pl-10"
                  } border-0 focus-visible:ring-0 focus-visible:ring-offset-0`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                {t("search.button")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-saudi-black">
                {t("categories.title")}
              </h2>
              <div
                className={`flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <Filter
                  className={`h-5 w-5 text-gray-500 ${isRtl ? "ml-2" : "mr-2"}`}
                />
                <span className="text-gray-600">{t("categories.filter")}</span>
              </div>
            </div>

            <Tabs
              defaultValue="all"
              value={activeCategory}
              onValueChange={setActiveCategory}
            >
              <TabsList className="bg-gray-100 p-1 rounded-lg">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-md px-4 py-2"
                  >
                    {t(`categories.${category}`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/${locale}/services/${service.id}`}
                  className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div
                      className={`flex items-center text-primary font-medium ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      {t("viewDetails")}
                      <ArrowRight
                        className={`${
                          isRtl ? "mr-2 rotate-180" : "ml-2"
                        } h-4 w-4`}
                      />
                    </div>
                  </div>

                  {/* Bottom border animation */}
                  <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="No results"
                    width={200}
                    height={200}
                    className="mx-auto opacity-50"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {t("noResults.title")}
                </h3>
                <p className="text-gray-500 mb-6">
                  {t("noResults.description")}
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                  }}
                >
                  {t("noResults.reset")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {t("cta.contactButton")}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-white/10"
                asChild
              >
                <Link href={`/${locale}/schedule-consultation`}>
                  {t("cta.scheduleButton")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
