"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, FileText, Scale, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function TermsOfServiceClient({ locale }: { locale: string }) {
  const t = useTranslations("termsOfService");
  const isRTL = locale === "ar";

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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
                  className={`${
                    isRTL ? "ml-2 rtl:rotate-180" : "mr-2"
                  } h-4 w-4`}
                />
                {t("backToHome")}
              </Link>
            </Button>

            <div
              className={`flex items-center mb-4 ${
                isRTL ? "rtl:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("title")}
              </h1>
            </div>

            <div
              className={`flex items-center text-sm text-gray-500 mb-8 ${
                isRTL ? "rtl:flex-row-reverse" : ""
              }`}
            >
              <Clock className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
              <span>{t("lastUpdated", { date: t("lastUpdatedDate") })}</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
              <div
                className={`flex items-start ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <Shield
                  className={`h-5 w-5 text-primary ${
                    isRTL ? "ml-3" : "mr-3"
                  } mt-0.5`}
                />
                <div>
                  <p className="text-gray-700">{t("disclaimer")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#introduction"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.introduction.title")}
              </a>
              <Link
                href="/services"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.services.title")}
              </Link>
              <a
                href="#user-responsibilities"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.userResponsibilities.title")}
              </a>
              <a
                href="#intellectual-property"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.intellectualProperty.title")}
              </a>
              <a
                href="#payment"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.payment.title")}
              </a>
              <a
                href="#termination"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.termination.title")}
              </a>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`prose prose-lg max-w-none ${
              isRTL ? "rtl:text-right" : ""
            }`}
          >
            <section id="introduction" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  1
                </span>
                {t("sections.introduction.title")}
              </h2>
              <p>{t("sections.introduction.paragraph1")}</p>
              <p>{t("sections.introduction.paragraph2")}</p>
              <p>{t("sections.introduction.paragraph3")}</p>
            </section>

            <section id="services" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  2
                </span>
                {t("sections.services.title")}
              </h2>
              <p>{t("sections.services.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.services.servicesList")
                  .map((service: string, index: number) => (
                    <li key={index}>{service}</li>
                  ))}
              </ul>
              <p>{t("sections.services.paragraph2")}</p>
              <p>{t("sections.services.paragraph3")}</p>
            </section>

            <section id="user-responsibilities" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  3
                </span>
                {t("sections.userResponsibilities.title")}
              </h2>
              <p>{t("sections.userResponsibilities.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.userResponsibilities.responsibilitiesList")
                  .map((responsibility: string, index: number) => (
                    <li key={index}>{responsibility}</li>
                  ))}
              </ul>
              <p>{t("sections.userResponsibilities.paragraph2")}</p>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  4
                </span>
                {t("sections.intellectualProperty.title")}
              </h2>
              <p>{t("sections.intellectualProperty.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.intellectualProperty.ipRightsList")
                  .map((right: string, index: number) => (
                    <li key={index}>{right}</li>
                  ))}
              </ul>
              <p>{t("sections.intellectualProperty.paragraph2")}</p>
            </section>

            <section id="payment" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  5
                </span>
                {t("sections.payment.title")}
              </h2>
              <p>{t("sections.payment.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.payment.paymentTermsList")
                  .map((term: string, index: number) => (
                    <li key={index}>{term}</li>
                  ))}
              </ul>
              <p>{t("sections.payment.paragraph2")}</p>
            </section>

            <section id="termination" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  6
                </span>
                {t("sections.termination.title")}
              </h2>
              <p>{t("sections.termination.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.termination.terminationConditionsList")
                  .map((condition: string, index: number) => (
                    <li key={index}>{condition}</li>
                  ))}
              </ul>
              <p>{t("sections.termination.paragraph2")}</p>
              <ul>
                {t
                  .raw("sections.termination.postTerminationList")
                  .map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
              <p>{t("sections.termination.paragraph3")}</p>
            </section>

            <section id="limitation-of-liability" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  7
                </span>
                {t("sections.limitationOfLiability.title")}
              </h2>
              <p>{t("sections.limitationOfLiability.paragraph1")}</p>
              <ul>
                {t
                  .raw("sections.limitationOfLiability.limitationsList")
                  .map((limitation: string, index: number) => (
                    <li key={index}>{limitation}</li>
                  ))}
              </ul>
              <p>{t("sections.limitationOfLiability.paragraph2")}</p>
            </section>

            <section id="governing-law" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  8
                </span>
                {t("sections.governingLaw.title")}
              </h2>
              <p>{t("sections.governingLaw.paragraph1")}</p>
              <p>{t("sections.governingLaw.paragraph2")}</p>
            </section>

            <section id="changes" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  9
                </span>
                {t("sections.changes.title")}
              </h2>
              <p>{t("sections.changes.paragraph1")}</p>
              <p>{t("sections.changes.paragraph2")}</p>
            </section>

            <section id="contact" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${
                    isRTL ? "ml-3" : "mr-3"
                  } text-primary text-sm`}
                >
                  10
                </span>
                {t("sections.contact.title")}
              </h2>
              <p>{t("sections.contact.paragraph1")}</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-medium">
                  {t("sections.contact.companyName")}
                </p>
                <p>{t("sections.contact.address1")}</p>
                <p>{t("sections.contact.address2")}</p>
                <p>{t("sections.contact.email")}</p>
                <p>{t("sections.contact.phone")}</p>
              </div>
            </section>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 border-t border-gray-200 pt-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div
                className={`flex items-start ${
                  isRTL ? "rtl:flex-row-reverse" : ""
                }`}
              >
                <Scale
                  className={`h-5 w-5 text-primary ${
                    isRTL ? "ml-3" : "mr-3"
                  } mt-0.5`}
                />
                <div>
                  <p className="text-gray-700 font-medium mb-2">
                    {t("acceptanceOfTerms.title")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {t("acceptanceOfTerms.description")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-between items-center mt-8 ${
                isRTL ? "rtl:flex-row-reverse" : ""
              }`}
            >
              <p className="text-sm text-gray-500">
                {t("copyright", { year: new Date().getFullYear() })}
              </p>
              <div
                className={`flex ${
                  isRTL
                    ? "rtl:flex-row-reverse space-x-reverse space-x-4"
                    : "space-x-4"
                }`}
              >
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="text-sm text-primary hover:underline"
                >
                  {t("privacyPolicy")}
                </Link>
                <Link
                  href={`/${locale}/legal`}
                  className="text-sm text-primary hover:underline"
                >
                  {t("legalHub")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
