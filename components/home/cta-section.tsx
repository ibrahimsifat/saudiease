"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("ctaSection");

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Animated Circles */}
      <div className="absolute top-[20%] left-[10%] rtl:left-auto rtl:right-[10%] w-[300px] h-[300px] rounded-full border border-primary/20 opacity-50"></div>
      <div className="absolute bottom-[10%] right-[5%] rtl:right-auto rtl:left-[5%] w-[200px] h-[200px] rounded-full border border-primary/10 opacity-30"></div>
      <div className="absolute top-[40%] right-[20%] rtl:right-auto rtl:left-[20%] w-[100px] h-[100px] rounded-full border border-primary/30 opacity-40"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group"
              asChild
            >
              <a href="#contact" className="flex items-center">
                {t("primaryButton")}
                <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:group-hover:translate-x-0 rtl:rotate-180" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#services">{t("secondaryButton")}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            <div>
              <p className="text-3xl font-bold text-primary">
                {t("stat1Value")}
              </p>
              <p className="text-gray-600 text-sm">{t("stat1Label")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {t("stat2Value")}
              </p>
              <p className="text-gray-600 text-sm">{t("stat2Label")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {t("stat3Value")}
              </p>
              <p className="text-gray-600 text-sm">{t("stat3Label")}</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">
                {t("stat4Value")}
              </p>
              <p className="text-gray-600 text-sm">{t("stat4Label")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
