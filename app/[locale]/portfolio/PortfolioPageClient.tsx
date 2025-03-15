"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Locale } from "@/config/i18n";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, Filter, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PortfolioPageClientProps = {
  locale: Locale;
};

export default function PortfolioPageClient({
  locale,
}: PortfolioPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [translations, setTranslations] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const isRTL = locale === "ar" || locale === "bn";

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const { getTranslations } = await import(
          "@/lib/get-translation-namespace"
        );
        const portfolioTranslations = await getTranslations(
          locale,
          "portfolio"
        );
        setTranslations(portfolioTranslations);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to load translations:", error);
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  // Filter projects based on search query and selected category
  useEffect(() => {
    let result = projects;

    if (searchQuery) {
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (project) => project.category === selectedCategory
      );
    }

    setFilteredProjects(result);
  }, [searchQuery, selectedCategory]);

  // Get unique categories
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category)),
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const t = translations;

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-white to-gray-50 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm border border-primary/10"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2 rtl:ml-2 rtl:mr-0"
              ></motion.span>
              {t.hero?.badge || "Our Project Portfolio"}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saudi-black to-saudi-black/80">
              {t.hero?.title ||
                "Transforming Saudi Businesses Through Digital Excellence"}
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mb-8">
              {t.hero?.description ||
                "Explore our collection of successful digital projects that have helped businesses across Saudi Arabia achieve their goals and transform their digital presence."}
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 rtl:left-auto rtl:right-3" />
                <Input
                  type="text"
                  placeholder={t.search?.placeholder || "Search projects..."}
                  className={`pl-10 rtl:pl-4 rtl:pr-10 w-full rounded-lg border-gray-200 focus:border-primary focus:ring-primary`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Tabs
                  defaultValue="all"
                  className="w-full"
                  onValueChange={setSelectedCategory}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <Filter className="h-4 w-4 text-gray-500 mr-2 rtl:ml-2 rtl:mr-0" />
                      <span className="text-sm font-medium text-gray-700">
                        {t.filter?.label || "Filter by:"}
                      </span>
                    </div>
                  </div>
                  <TabsList className="grid grid-flow-col auto-cols-max gap-2 bg-transparent">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white px-3 py-1 text-xs rounded-full capitalize"
                      >
                        {t.categories?.[category] || category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {t.categories?.[project.category] || project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-saudi-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/5 group"
                      asChild
                    >
                      <Link
                        href={`/${locale}/portfolio/${project.id}`}
                        className="flex items-center justify-center"
                      >
                        <span>{t.viewCaseStudy || "View Case Study"}</span>
                        <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  {t.noResults?.title || "No projects found"}
                </h3>
                <p className="text-gray-500">
                  {t.noResults?.description ||
                    "Try adjusting your search or filter to find what you're looking for."}
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  {t.noResults?.resetButton || "Reset filters"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-purple-400/5 rounded-2xl p-8 md:p-12 border border-primary/10 shadow-lg max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-saudi-black">
              {t.cta?.title || "Ready to Transform Your Digital Presence?"}
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              {t.cta?.description ||
                "Let's discuss how we can help your business achieve its digital goals with our expertise in web development, e-commerce, and digital marketing."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg shadow-primary/20"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  {t.cta?.primaryButton || "Start Your Project"}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <Link href={`/${locale}/services`}>
                  {t.cta?.secondaryButton || "Explore Our Services"}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
