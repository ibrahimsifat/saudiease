"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Locale } from "@/config/i18n";
import { CASE_STUDIES, CASE_STUDY_UI } from "@/data/case-studies";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Filter, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PortfolioPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations("portfolioPage");
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl
    ? ({ className }: { className?: string }) => (
        <ArrowRight className={`${className} rotate-180`} />
      )
    : ArrowRight;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="md:pt-20 pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0"></div>

        {/* Decorative elements */}
        <div
          className={`absolute top-20 ${
            isRtl ? "left-10" : "right-10"
          } w-72 h-72 bg-primary/5 rounded-full blur-3xl`}
        ></div>
        <div
          className={`absolute bottom-10 ${
            isRtl ? "right-10" : "left-10"
          } w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30`}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-saudi-black">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild>
                <Link href={`/contact`} className="flex items-center">
                  {t("hero.startProject")}
                  <ArrowIcon className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#portfolio-grid">{t("hero.browseProjects")}</a>
              </Button>
            </div>

            
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="portfolio-grid" className="py-12">
        <div className="container mx-auto px-4">
          {/* Case studies (growth plan P1): real, approved client websites */}
          <div className={`mb-8 ${isRtl ? "text-right" : "text-left"}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-saudi-black mb-2">
              {CASE_STUDY_UI[locale]?.caseStudies}
            </h2>
            <p className="text-gray-600">{CASE_STUDY_UI[locale]?.caseStudiesIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <Card key={cs.slug} className="overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <Link href={`/portfolio/${cs.slug}`} className="block">
                  <div className="relative aspect-[16/10] bg-gray-100">
                    <Image src={cs.screenshot} alt={`${cs.name} website`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  </div>
                </Link>
                <CardContent className={`p-6 ${isRtl ? "text-right" : "text-left"}`}>
                  <p className="text-sm text-primary font-medium mb-1">{cs.text[locale]?.sector}</p>
                  <h3 className="text-xl font-bold text-saudi-black mb-3" dir="ltr">{cs.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cs.text[locale]?.summary}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/portfolio/${cs.slug}`} className="inline-flex items-center text-primary font-semibold hover:underline">
                      {CASE_STUDY_UI[locale]?.readCase}
                    </Link>
                    <a href={cs.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-600 hover:text-primary">
                      {CASE_STUDY_UI[locale]?.visitSite} <ExternalLink className="h-4 w-4 mx-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/contact`} className="flex items-center">
                  {t("cta.startProject")}
                  <ArrowIcon className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/services`}>{t("cta.exploreServices")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
