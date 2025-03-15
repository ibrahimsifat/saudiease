"use client";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { businessCategories } from "@/data/business-categories";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function IndustriesClientPage() {
  const params = useParams();
  const locale = params.locale || "en";
  const isRTL = locale === "ar";
  const t = useTranslations("industriesPage");

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform -translate-y-32"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("hero.badge")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-saudi-black mb-6">
              {t("hero.titleStart")}
              <span className="text-primary relative ml-2 inline-block">
                {t("hero.titleHighlight")}
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

            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
              >
                {t("hero.exploreButton")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/5"
              >
                {t("hero.scheduleButton")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 Alignment */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  {t("vision2030.badge")}
                </div>

                <h2 className="text-3xl font-bold text-saudi-black mb-6">
                  {t("vision2030.title")}
                </h2>

                <p className="text-gray-600 mb-8">
                  {t("vision2030.description")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className={`${isRTL ? "mr-4" : "ml-4"}`}>
                      <h3 className="text-lg font-semibold text-saudi-black mb-1">
                        {t("vision2030.benefit1.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("vision2030.benefit1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className={`${isRTL ? "mr-4" : "ml-4"}`}>
                      <h3 className="text-lg font-semibold text-saudi-black mb-1">
                        {t("vision2030.benefit2.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("vision2030.benefit2.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className={`${isRTL ? "mr-4" : "ml-4"}`}>
                      <h3 className="text-lg font-semibold text-saudi-black mb-1">
                        {t("vision2030.benefit3.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("vision2030.benefit3.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className={`${isRTL ? "mr-4" : "ml-4"}`}>
                      <h3 className="text-lg font-semibold text-saudi-black mb-1">
                        {t("vision2030.benefit4.title")}
                      </h3>
                      <p className="text-gray-600">
                        {t("vision2030.benefit4.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={t("vision2030.imageAlt")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>

                {/* Floating badge */}
                <div className="absolute top-8 right-8 bg-white py-2 px-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <Building2 className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">{t("vision2030.badge")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("industriesGrid.badge")}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("industriesGrid.title")}
            </h2>

            <p className="text-gray-600">{t("industriesGrid.description")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.services.slice(0, 2).map((service, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                      {category.services.length > 2 && (
                        <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                          +{category.services.length - 2}{" "}
                          {t("industriesGrid.more")}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {category.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <Link
                      href={`/industries/${category.id}`}
                      className="text-primary font-medium flex items-center group-hover:underline"
                    >
                      {t("industriesGrid.exploreSolutions")}
                      <ArrowIcon
                        className={`h-4 w-4 ${
                          isRTL ? "mr-2" : "ml-2"
                        } transition-transform group-hover:${
                          isRTL ? "-translate-x-1" : "translate-x-1"
                        }`}
                      />
                    </Link>

                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-saudi-black mb-4">
              {t("stats.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("stats.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-gray-600">{t("stats.industriesServed")}</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[100%] rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">
                {t("stats.projectsCompleted")}
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">
                {t("stats.clientSatisfaction")}
              </div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[95%] rounded-full"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-gray-600">{t("stats.yearsExperience")}</div>
              <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[80%] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
                {t("cta.title")}
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                {t("cta.description")}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                >
                  {t("cta.scheduleButton")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  {t("cta.caseStudiesButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}
