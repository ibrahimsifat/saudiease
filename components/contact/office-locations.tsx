"use client";

import { Locale } from "@/config/i18n";
import { getCompanyInfo } from "@/data/company-info/index";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function OfficeLocations() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const isRTL = locale === "ar";
  const companyInfo = getCompanyInfo(locale as Locale);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("officeLocationsTitle")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("officeLocationsSubtitle")}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-600 relative">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(
                  companyInfo.contact.address.street
                )}`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title={`Map of ${companyInfo.contact.address.city} office`}
              ></iframe>
              <a
                href={companyInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label={t("viewLargerMap")}
              >
                <ExternalLink className="h-4 w-4 text-primary" />
              </a>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {companyInfo.contact.address.city}
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${isRTL ? "ml-3" : "mr-3"} mt-1`}
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {companyInfo.contact.address.street}{" "}
                    {companyInfo.contact.address.city},{" "}
                    {companyInfo.contact.address.country}
                  </span>
                </li>

                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${isRTL ? "ml-3" : "mr-3"} mt-1`}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href={`tel:${companyInfo.contact.phone.replace(
                      /\s+/g,
                      ""
                    )}`}
                    className="text-primary hover:underline"
                    dir="ltr"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </li>

                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${isRTL ? "ml-3" : "mr-3"} mt-1`}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {companyInfo.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
