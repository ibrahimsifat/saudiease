"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type Locale } from "@/config/i18n";
import { featureDetails } from "@/data/feature-details";
import { features } from "@/data/features";
import { Link } from "@/i18n/routing";
import { generateServiceSchema } from "@/lib/schema";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function FeatureDetailPageClient({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const feature = features.find((f) => f.id === id);
  const t = useTranslations("featuresDetailsPage");
  const isRTL = true;

  if (!feature) {
    notFound();
  }

  const details = featureDetails[id];
  const relatedFeaturesList = details.relatedFeatures
    .map((id) => features.find((f) => f.id === id))
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(feature)),
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                isRTL ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <Link
                  href={`/features`}
                  className={`inline-flex items-center text-primary hover:text-primary/80 mb-4 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  {isRTL ? (
                    <>
                      {t("backToFeatures")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t("backToFeatures")}
                    </>
                  )}
                </Link>
                <div
                  className={`inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <span
                    className={`flex h-2 w-2 rounded-full bg-primary ${
                      isRTL ? "ml-2" : "mr-2"
                    }`}
                  ></span>
                  {t("featureSpotlight")}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-4">
                  {t(`detail.${id}.title`)}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {t(`detail.${id}.subtitle`)}
                </p>
                <p className="text-gray-600 mb-8">
                  {t(`detail.${id}.overview`)}
                </p>
                <div className={`flex flex-wrap gap-4 `}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href={`/contact`}>{t("requestDemo")}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Link href="#benefits">{t("learnMore")}</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={details.heroImage || "/placeholder.svg"}
                    alt={t(`detail.${id}.title`)}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">
                {t("keyBenefits")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("benefitsDescription", {
                  feature: t(`detail.${id}.title`),
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {details.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div
                    className={`flex items-start mb-4 ${
                      isRTL ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <div className={`${isRTL ? "ml-4" : "mr-4"} mt-1`}>
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {t(`detail.${id}.benefits.${index}`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Details Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="features">{t("keyFeatures")}</TabsTrigger>
                <TabsTrigger value="case-study">{t("caseStudy")}</TabsTrigger>
                <TabsTrigger value="faq">{t("faq")}</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {details.keyFeatures.map((keyFeature, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-gray-200"
                    >
                      <CardContent
                        className={`p-6 ${isRTL ? "text-right" : ""}`}
                      >
                        <h3 className="text-xl font-semibold text-saudi-black mb-3">
                          {t(`detail.${id}.keyFeatures.${index}.title`)}
                          <span
                            className={`block h-0.5 w-12 bg-primary mt-2 ${
                              isRTL ? "mr-auto" : ""
                            }`}
                          ></span>
                        </h3>
                        <p className="text-gray-600">
                          {t(`detail.${id}.keyFeatures.${index}.description`)}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="case-study" className="mt-6">
                <div
                  className={`bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-xl border border-gray-100 ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-2xl font-bold text-saudi-black mb-4">
                    {t(`detail.${id}.caseStudy.title`)}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t(`detail.${id}.caseStudy.description`)}
                  </p>

                  <h4 className="text-lg font-semibold text-saudi-black mb-4">
                    {t("results")}:
                  </h4>
                  <ul className="space-y-3">
                    {details.caseStudy.results.map((result, index) => (
                      <li
                        key={index}
                        className={`flex items-start ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <CheckCircle
                          className={`h-5 w-5 text-green-500 ${
                            isRTL ? "ml-3" : "mr-3"
                          } mt-0.5 flex-shrink-0`}
                        />
                        <span className="text-gray-700">
                          {t(`detail.${id}.caseStudy.results.${index}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className={`mt-8 ${isRTL ? "text-right" : ""}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Link href={`/contact`}>{t("discussYourProject")}</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {details.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger
                        className={`text-left font-medium text-lg ${
                          isRTL ? "flex-row-reverse text-right" : ""
                        }`}
                      >
                        {t(`detail.${id}.faq.${index}.question`)}
                      </AccordionTrigger>
                      <AccordionContent
                        className={`text-gray-600 ${isRTL ? "text-right" : ""}`}
                      >
                        {t(`detail.${id}.faq.${index}.answer`)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-saudi-black mb-4">
                {t("relatedFeatures")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("relatedFeaturesDescription", {
                  feature: t(`detail.${id}.title`),
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedFeaturesList.map((relatedFeature) => (
                <Card
                  key={relatedFeature?.id}
                  className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden"
                >
                  <CardContent className={`p-6 ${isRTL ? "text-right" : ""}`}>
                    <div
                      className={`flex items-center mb-4 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`relative h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-white flex items-center justify-center ${
                          isRTL ? "ml-3" : "mr-3"
                        }`}
                      >
                        {relatedFeature && (
                          <relatedFeature.icon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">
                        {t(`detail.${relatedFeature?.id}.title`)}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {t(`detail.${relatedFeature?.id}.shortDescription`)}
                    </p>
                    <Button
                      variant="ghost"
                      className={`text-primary hover:bg-primary/10 hover:text-primary w-full justify-between group p-0 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Link
                        href={`/features/${relatedFeature?.id}`}
                        className={`flex items-center w-full ${
                          isRTL
                            ? "flex-row-reverse justify-between"
                            : "justify-between"
                        }`}
                      >
                        <span>{t("learnMore")}</span>
                        {isRTL ? (
                          <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                        ) : (
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        )}
                      </Link>
                    </Button>
                  </CardContent>
                  <div className="h-1 w-0 bg-gradient-to-r from-primary/80 to-primary/40 group-hover:w-full transition-all duration-500"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 bg-primary/10 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 -ml-20 -mb-20 bg-primary/10 rounded-full transform rotate-12"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
                  {t("readyToImplement", {
                    feature: t(`detail.${id}.title`),
                  })}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t("ctaDescription")}
                </p>
                <div
                  className={`flex flex-wrap justify-center gap-4 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Link href={`/contact`}>{t("contactUs")}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Link href={`/services`}>{t("exploreServices")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
