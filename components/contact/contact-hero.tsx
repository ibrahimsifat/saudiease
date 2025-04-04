"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

export default function ContactHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get translations
  const t = useTranslations("contact.hero");

  return (
    <section className="relative pt-16 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      {/* SVG pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span
                  className="ml-1 text-primary font-medium"
                  aria-current="page"
                >
                  {t("breadcrumb")}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div ref={ref} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            {t("badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-saudi-black mb-6"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-gray-100">
              <p className="text-gray-600">{t("phone")}</p>
              <p className="text-lg font-semibold text-primary">
                +966 558845503
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-gray-100">
              <p className="text-gray-600">{t("email")}</p>
              <p className="text-lg font-semibold text-primary">
                info@saudiease.com
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md px-6 py-4 border border-gray-100">
              <p className="text-gray-600">{t("hours")}</p>
              <p className="text-lg font-semibold text-primary">
                Sun-Thu: 9AM-6PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
