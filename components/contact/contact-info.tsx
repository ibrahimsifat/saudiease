"use client";

import { Locale } from "@/config/i18n";
import { getCompanyInfo } from "@/data/company-info/index";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function ContactInfo() {
  const t = useTranslations("contact");
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const isRTL = locale === "ar";
  const companyInfo = getCompanyInfo(locale as Locale);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t("contactInfoTitle")}
          </h2>

          <div className="">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("getInTouch")}
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${
                      isRTL ? "ml-3" : "mr-3"
                    } mt-1 bg-primary/10 p-2 rounded-full`}
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {t("email")}
                    </p>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-primary hover:underline"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${
                      isRTL ? "ml-3" : "mr-3"
                    } mt-1 bg-primary/10 p-2 rounded-full`}
                  >
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {t("phone")}
                    </p>
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
                  </div>
                </li>

                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${
                      isRTL ? "ml-3" : "mr-3"
                    } mt-1 bg-primary/10 p-2 rounded-full`}
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {t("address")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.contact.address.street},{" "}
                      {companyInfo.contact.address.city},{" "}
                      {companyInfo.contact.address.country}
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div
                    className={`flex-shrink-0 ${
                      isRTL ? "ml-3" : "mr-3"
                    } mt-1 bg-primary/10 p-2 rounded-full`}
                  >
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-300">
                      {t("workingHours")}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.contact.businessHours.map((hours) => (
                        <span key={hours.days} className="block">
                          {hours.days}: {hours.hours}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t("followUs")}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("socialMediaText")}
              </p>

              <div className="flex space-x-4 rtl:space-x-reverse">
                {companyInfo.contact.socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
