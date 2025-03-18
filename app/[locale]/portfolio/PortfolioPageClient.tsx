"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Locale } from "@/config/i18n";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Filter, Search } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PortfolioPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations("portfolioPage");
  const isRtl = locale === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Get unique categories from projects
  const categories = [
    "all",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // Filter projects based on search query and selected category
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = projects.filter((project) => {
        const matchesSearch =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          );

        const matchesCategory =
          selectedCategory === "all" || project.category === selectedCategory;

        return matchesSearch && matchesCategory;
      });
      setFilteredProjects(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const ArrowIcon = isRtl
    ? ({ className }: { className?: string }) => (
        <ArrowRight className={`${className} rotate-180`} />
      )
    : ArrowRight;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
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
                <Link href={`/${locale}/contact`} className="flex items-center">
                  {t("hero.startProject")}
                  <ArrowIcon className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="#portfolio-grid">{t("hero.browseProjects")}</a>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>{t("hero.stats.projects")}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span>{t("hero.stats.industries")}</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span>{t("hero.stats.awardWinning")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="portfolio-grid" className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="relative">
                  <Search
                    className={`absolute ${
                      isRtl ? "right-3" : "left-3"
                    } top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5`}
                  />
                  <Input
                    type="text"
                    placeholder={t("filter.search")}
                    className={isRtl ? "pr-10 text-right" : "pl-10"}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
                  <div className="flex items-center mb-2">
                    <Filter className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">
                      {t("filter.filterBy")}
                    </span>
                  </div>
                  <TabsList className="w-full overflow-auto">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="capitalize"
                      >
                        {category === "all" ? t("filter.all") : category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border border-gray-100"
                >
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
                    <div className="mt-6 flex gap-2">
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          project.image ||
                          "/placeholder.svg?height=400&width=600"
                        }
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm">
                              {project.category}
                            </span>
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                              {project.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="mb-4 flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" asChild>
                          <Link
                            href={`/${locale}/portfolio/${project.id}`}
                            className="flex items-center"
                          >
                            {t("projectDetail.viewProject")}
                            <ArrowIcon
                              className={`${isRtl ? "mr-2" : "ml-2"} h-3 w-3`}
                            />
                          </Link>
                        </Button>
                        {project.link && (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              {t("projectDetail.liveDemo")}
                              <ExternalLink
                                className={`${isRtl ? "mr-2" : "ml-2"} h-3 w-3`}
                              />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {t("noProjects.title")}
                  </h3>
                  <p className="text-gray-500 mb-4">
                    {t("noProjects.description")}
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                  >
                    {t("noProjects.clearFilters")}
                  </Button>
                </div>
              </div>
            )}
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
                <Link href={`/${locale}/contact`} className="flex items-center">
                  {t("cta.startProject")}
                  <ArrowIcon className={`${isRtl ? "mr-2" : "ml-2"} h-4 w-4`} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}/services`}>
                  {t("cta.exploreServices")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
