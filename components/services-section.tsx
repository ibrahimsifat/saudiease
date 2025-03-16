"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Locale } from "@/config/i18n";
import { getServices } from "@/data/services/index";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useState } from "react";
export default function ServicesSection({ locale }: { locale: string }) {
  const t = useTranslations("services");
  const services = getServices(locale as Locale);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: t("categories.all") },
    { id: "development", name: t("categories.development") },
    { id: "design", name: t("categories.design") },
    { id: "marketing", name: t("categories.marketing") },
    { id: "finance", name: t("categories.finance") },
  ];

  // Memoize filtered services to prevent unnecessary recalculations
  const filteredServices = useMemo(() => {
    return activeCategory === "all"
      ? services.slice(0, 8) // Show only 8 services on homepage
      : services
          .filter((service) => service.category === activeCategory)
          .slice(0, 8);
  }, [activeCategory]);

  // Count services in each category for badges
  const categoryCounts = useMemo(() => {
    return categories.reduce((acc, category) => {
      if (category.id === "all") {
        acc[category.id] = services.length;
      } else {
        acc[category.id] = services.filter(
          (service) => service.category === category.id
        ).length;
      }
      return acc;
    }, {} as Record<string, number>);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Modern background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 opacity-80"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            {t("subtitle")}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-saudi-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Modern category tabs */}
        <div className="flex justify-center mb-5 overflow-x-auto hide-scrollbar pb-4">
          <div className="bg-white border border-gray-100 p-1.5 shadow-lg rounded-full flex space-x-1 will-change-transform">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-2.5 rounded-full transition-all duration-300 font-medium text-sm flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>{category.name}</span>
                <Badge
                  variant={
                    activeCategory === category.id ? "secondary" : "outline"
                  }
                  className={`ml-1.5 ${
                    activeCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {categoryCounts[category.id]}
                </Badge>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="will-change-transform"
              >
                <Card className="h-full overflow-hidden group border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl relative">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full transform transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10"></div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 transform group-hover:rotate-3">
                      {<service.icon className="h-7 w-7 text-primary" />}
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="pt-2 pb-6">
                    <Button
                      variant="ghost"
                      className="p-0 text-primary hover:text-primary/90 hover:bg-transparent group-hover:translate-x-1 transition-transform duration-300 font-medium"
                      asChild
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className="flex items-center"
                      >
                        {t("viewDetails")}
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>

                  {/* Animated bottom border */}
                  <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 rounded-full"
            asChild
          >
            <Link href="/services" className="flex items-center">
              <span>{t("viewAll")}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
