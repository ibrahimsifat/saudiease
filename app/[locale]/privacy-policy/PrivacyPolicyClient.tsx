"use client";

import { Button } from "@/components/ui/button";
import { Locale, localeMetadata } from "@/config/i18n";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Lock, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyClient({ locale }: { locale: Locale }) {
  const t = useTranslations("privacyPolicy");
  const isRtl =
    localeMetadata[locale as keyof typeof localeMetadata]?.dir === "rtl";
  const lastUpdated = t("lastUpdated");
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
                href="/"
                className="flex items-center text-gray-600 hover:text-primary rtl:flex-row-reverse"
              >
                <ArrowLeft
                  className={`${isRtl ? "ml-2 rotate-180" : "mr-2"} h-4 w-4`}
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
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t("title")}
              </h1>
            </div>

            <div
              className={`flex items-center text-sm text-gray-500 mb-8 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <Clock className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
              <span>
                {t("lastUpdatedLabel")}: {lastUpdated}
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
                  <p className="text-gray-700">{t("introduction")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8 rtl:justify-end">
              <a
                href="#information-collection"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.informationCollection")}
              </a>
              <a
                href="#information-use"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.informationUse")}
              </a>
              <a
                href="#information-sharing"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.informationSharing")}
              </a>
              <a
                href="#data-security"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.dataSecurity")}
              </a>
              <a
                href="#your-rights"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.yourRights")}
              </a>
              <a
                href="#cookies"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                {t("sections.cookies")}
              </a>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`prose prose-lg max-w-none ${
              isRtl ? "rtl text-right" : ""
            }`}
          >
            <section id="information-collection" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  1
                </span>
                {t("informationCollection.title")}
              </h2>
              <p>{t("informationCollection.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index}>
                    <strong>
                      {t(`informationCollection.types.${index}.title`)}:
                    </strong>{" "}
                    {t(`informationCollection.types.${index}.description`)}
                  </li>
                ))}
              </ul>
              <p>{t("informationCollection.howWeCollect.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <li key={index}>
                    {t(`informationCollection.howWeCollect.methods.${index}`)}
                  </li>
                ))}
              </ul>
            </section>

            <section id="information-use" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  2
                </span>
                {t("informationUse.title")}
              </h2>
              <p>{t("informationUse.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <li key={index}>{t(`informationUse.purposes.${index}`)}</li>
                ))}
              </ul>
              <p>{t("informationUse.legalBasis.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>
                    {t(`informationUse.legalBasis.grounds.${index}`)}
                  </li>
                ))}
              </ul>
            </section>

            <section id="information-sharing" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  3
                </span>
                {t("informationSharing.title")}
              </h2>
              <p>{t("informationSharing.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>
                    <strong>
                      {t(`informationSharing.recipients.${index}.title`)}:
                    </strong>{" "}
                    {t(`informationSharing.recipients.${index}.description`)}
                  </li>
                ))}
              </ul>
              <p>{t("informationSharing.noSelling")}</p>
            </section>

            <section id="data-security" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  4
                </span>
                {t("dataSecurity.title")}
              </h2>
              <p>{t("dataSecurity.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3, 4].map((index) => (
                  <li key={index}>{t(`dataSecurity.measures.${index}`)}</li>
                ))}
              </ul>
              <p>{t("dataSecurity.disclaimer")}</p>
              <p>{t("dataSecurity.retention")}</p>
            </section>

            <section id="your-rights" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  5
                </span>
                {t("yourRights.title")}
              </h2>
              <p>{t("yourRights.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                  <li key={index}>
                    <strong>{t(`yourRights.rights.${index}.title`)}:</strong>{" "}
                    {t(`yourRights.rights.${index}.description`)}
                  </li>
                ))}
              </ul>
              <p>{t("yourRights.howToExercise")}</p>
            </section>

            <section id="cookies" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  6
                </span>
                {t("cookies.title")}
              </h2>
              <p>{t("cookies.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>{t(`cookies.purposes.${index}`)}</li>
                ))}
              </ul>
              <p>{t("cookies.types.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2, 3].map((index) => (
                  <li key={index}>
                    <strong>{t(`cookies.types.list.${index}.title`)}:</strong>{" "}
                    {t(`cookies.types.list.${index}.description`)}
                  </li>
                ))}
              </ul>
              <p>{t("cookies.control")}</p>
            </section>

            <section id="children" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  7
                </span>
                {t("children.title")}
              </h2>
              <p>{t("children.policy")}</p>
            </section>

            <section id="international-transfers" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  8
                </span>
                {t("internationalTransfers.title")}
              </h2>
              <p>{t("internationalTransfers.intro")}</p>
              <p>{t("internationalTransfers.safeguards.intro")}</p>
              <ul className={isRtl ? "rtl:pl-0 rtl:pr-5" : ""}>
                {[0, 1, 2].map((index) => (
                  <li key={index}>
                    {t(`internationalTransfers.safeguards.measures.${index}`)}
                  </li>
                ))}
              </ul>
            </section>

            <section id="changes" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  9
                </span>
                {t("changes.title")}
              </h2>
              <p>{t("changes.policy")}</p>
              <p>{t("changes.recommendation")}</p>
            </section>

            <section id="contact" className="mb-12">
              <h2
                className={`text-2xl font-bold mb-4 flex items-center ${
                  isRtl ? "flex-row-reverse" : ""
                }`}
              >
                <span
                  className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm ${
                    isRtl ? "ml-3" : "mr-3"
                  }`}
                >
                  10
                </span>
                {t("contact.title")}
              </h2>
              <p>{t("contact.intro")}</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-medium">{t("contact.company")}</p>
                <p>{t("contact.address.line1")}</p>
                <p>{t("contact.address.line2")}</p>
                <p>{t("contact.email")}: privacy@saudiease.com</p>
                <p>{t("contact.phone")}: +966 558845503</p>
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
                  isRtl ? "flex-row-reverse text-right" : ""
                }`}
              >
                <Shield
                  className={`h-5 w-5 text-primary ${
                    isRtl ? "ml-3 mt-0.5" : "mr-3 mt-0.5"
                  }`}
                />
                <div>
                  <p className="text-gray-700 font-medium mb-2">
                    {t("footer.privacyMatters")}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {t("footer.acknowledgement")}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-between items-center mt-8 ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {t("footer.copyright")}
              </p>
              <div
                className={`flex space-x-4 ${isRtl ? "space-x-reverse" : ""}`}
              >
                <Link
                  href="/terms-of-service"
                  className="text-sm text-primary hover:underline"
                >
                  {t("footer.termsOfService")}
                </Link>
                <Link
                  href="/legal"
                  className="text-sm text-primary hover:underline"
                >
                  {t("footer.legalHub")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
