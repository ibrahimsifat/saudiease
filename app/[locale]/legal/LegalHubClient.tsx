"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { localeMetadata } from "@/config/i18n";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  FileCheck,
  FileLock,
  FileText,
  FileWarning,
  Scale,
  Shield,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function LegalHubClient({ locale }: { locale: string }) {
  const t = useTranslations("legal");
  const currentLocale = useLocale();
  const isRtl =
    localeMetadata[currentLocale as keyof typeof localeMetadata]?.dir === "rtl";
  const lastUpdated = "March 10, 2025";

  const legalDocuments = [
    {
      title: t("documents.privacyPolicy.title"),
      description: t("documents.privacyPolicy.description"),
      icon: <FileLock className="h-6 w-6 text-primary" />,
      link: `/${locale}/privacy-policy`,
      updated: t("documents.privacyPolicy.updated"),
    },
    {
      title: t("documents.termsOfService.title"),
      description: t("documents.termsOfService.description"),
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      link: `/${locale}/terms-of-service`,
      updated: t("documents.termsOfService.updated"),
    },
    {
      title: t("documents.cookiePolicy.title"),
      description: t("documents.cookiePolicy.description"),
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: `/${locale}/cookie-policy`,
      updated: t("documents.cookiePolicy.updated"),
    },
    {
      title: t("documents.dataProcessing.title"),
      description: t("documents.dataProcessing.description"),
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: `/${locale}/data-processing-agreement`,
      updated: t("documents.dataProcessing.updated"),
    },
    {
      title: t("documents.acceptableUse.title"),
      description: t("documents.acceptableUse.description"),
      icon: <FileWarning className="h-6 w-6 text-primary" />,
      link: `/${locale}/acceptable-use-policy`,
      updated: t("documents.acceptableUse.updated"),
    },
    {
      title: t("documents.serviceLevelAgreement.title"),
      description: t("documents.serviceLevelAgreement.description"),
      icon: <Scale className="h-6 w-6 text-primary" />,
      link: `/${locale}/service-level-agreement`,
      updated: t("documents.serviceLevelAgreement.updated"),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Button variant="ghost" className="mb-6" asChild>
              <Link
                href={`/${locale}`}
                className="flex items-center text-gray-600 hover:text-primary rtl:flex-row-reverse"
              >
                <ArrowLeft
                  className={`${isRtl ? "ml-2" : "mr-2"} h-4 w-4 ${
                    isRtl ? "rotate-180" : ""
                  }`}
                />
                {t("backToHome")}
              </Link>
            </Button>

            <div
              className={`flex items-center mb-4 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${
                  isRtl ? "ml-4" : "mr-4"
                }`}
              >
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("pageTitle")}
              </h1>
            </div>

            <div
              className={`flex items-center text-sm text-gray-500 mb-8 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <Clock className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
              <span>
                {t("lastUpdated")}: {lastUpdated}
              </span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
              <div
                className={`flex items-start ${
                  isRtl ? "flex-row-reverse text-right" : ""
                }`}
              >
                <Shield
                  className={`h-5 w-5 text-primary ${
                    isRtl ? "ml-3 mt-0.5" : "mr-3 mt-0.5"
                  }`}
                />
                <div>
                  <p className="text-gray-700">{t("introText")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal Documents Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div
                      className={`flex items-start ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center ${
                          isRtl ? "ml-4" : "mr-4"
                        } group-hover:bg-primary/20 transition-colors`}
                      >
                        {doc.icon}
                      </div>
                      <div className={`flex-1 ${isRtl ? "text-right" : ""}`}>
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{doc.description}</p>
                        <div
                          className={`flex items-center justify-between ${
                            isRtl ? "flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-xs text-gray-500">
                            {t("lastUpdated")}: {doc.updated}
                          </span>
                          <Button
                            variant="ghost"
                            className="text-primary p-0 hover:bg-transparent"
                            asChild
                          >
                            <Link
                              href={doc.link}
                              className={`flex items-center ${
                                isRtl ? "flex-row-reverse" : ""
                              }`}
                            >
                              {t("readDocument")}
                              <ArrowRight
                                className={`${
                                  isRtl ? "mr-2 rotate-180" : "ml-2"
                                } h-4 w-4 group-hover:${
                                  isRtl ? "-translate-x-1" : "translate-x-1"
                                } transition-transform`}
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2
              className={`text-2xl font-bold mb-6 text-gray-900 ${
                isRtl ? "text-right" : ""
              }`}
            >
              {t("faq.title")}
            </h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3
                  className={`text-lg font-semibold text-gray-800 mb-2 ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t("faq.questions.howOftenUpdated.question")}
                </h3>
                <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                  {t("faq.questions.howOftenUpdated.answer")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3
                  className={`text-lg font-semibold text-gray-800 mb-2 ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t("faq.questions.notificationOfChanges.question")}
                </h3>
                <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                  {t("faq.questions.notificationOfChanges.answer")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3
                  className={`text-lg font-semibold text-gray-800 mb-2 ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t("faq.questions.agreementRequired.question")}
                </h3>
                <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                  {t("faq.questions.agreementRequired.answer")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3
                  className={`text-lg font-semibold text-gray-800 mb-2 ${
                    isRtl ? "text-right" : ""
                  }`}
                >
                  {t("faq.questions.saudiCompliance.question")}
                </h3>
                <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>
                  {t("faq.questions.saudiCompliance.answer")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
          >
            <h2
              className={`text-2xl font-bold mb-4 text-gray-900 ${
                isRtl ? "text-right" : ""
              }`}
            >
              {t("legalQuestions.title")}
            </h2>
            <p className={`text-gray-600 mb-6 ${isRtl ? "text-right" : ""}`}>
              {t("legalQuestions.description")}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 ${
                isRtl ? "sm:flex-row-reverse" : ""
              }`}
            >
              <Button asChild>
                <Link
                  href={`/${locale}/contact`}
                  className={`flex items-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  {t("legalQuestions.contactTeam")}
                  <ArrowRight
                    className={`${isRtl ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`}
                  />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="mailto:legal@saudiease.com"
                  className={isRtl ? "text-right" : ""}
                >
                  {t("legalQuestions.emailUs")}
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 border-t border-gray-200 pt-8"
          >
            <div
              className={`flex justify-between items-center ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <p className="text-sm text-gray-500">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </p>
              <div
                className={`flex space-x-4 ${
                  isRtl ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="text-sm text-primary hover:underline"
                >
                  {t("footer.privacyPolicy")}
                </Link>
                <Link
                  href={`/${locale}/terms-of-service`}
                  className="text-sm text-primary hover:underline"
                >
                  {t("footer.termsOfService")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
