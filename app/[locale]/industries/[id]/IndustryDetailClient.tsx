"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  businessCategories,
  type BusinessCategory,
} from "@/data/business-categories";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  Clock,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the case studies type
type CaseStudy = {
  id: string;
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
};

// Define the FAQ type
type FAQ = {
  question: string;
  answer: string;
};

// Generate case studies based on the industry
const generateCaseStudies = (
  industry: BusinessCategory,
  t: any
): CaseStudy[] => {
  return [
    {
      id: `${industry.id}-case-1`,
      title: t("caseStudies.case1.title", { industry: industry.name }),
      client: t("caseStudies.case1.client", { industry: industry.name }),
      challenge: t("caseStudies.case1.challenge", {
        industry: industry.name.toLowerCase(),
      }),
      solution: t("caseStudies.case1.solution", {
        services: industry.services.join(", "),
      }),
      results: [
        t("caseStudies.case1.results.result1"),
        t("caseStudies.case1.results.result2"),
        t("caseStudies.case1.results.result3"),
        t("caseStudies.case1.results.result4"),
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: `${industry.id}-case-2`,
      title: t("caseStudies.case2.title", { industry: industry.name }),
      client: t("caseStudies.case2.client", { industry: industry.name }),
      challenge: t("caseStudies.case2.challenge", {
        industry: industry.name.toLowerCase(),
      }),
      solution: t("caseStudies.case2.solution", {
        service1: industry.services[0],
        service2: industry.services[1],
      }),
      results: [
        t("caseStudies.case2.results.result1"),
        t("caseStudies.case2.results.result2"),
        t("caseStudies.case2.results.result3"),
        t("caseStudies.case2.results.result4"),
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ];
};

// Generate FAQs based on the industry
const generateFAQs = (industry: BusinessCategory, t: any): FAQ[] => {
  return [
    {
      question: t("faqs.faq1.question", {
        industry: industry.name.toLowerCase(),
      }),
      answer: t("faqs.faq1.answer", {
        industry: industry.name.toLowerCase(),
        services: industry.services.join(", "),
      }),
    },
    {
      question: t("faqs.faq2.question", {
        industry: industry.name.toLowerCase(),
      }),
      answer: t("faqs.faq2.answer", { industry: industry.name.toLowerCase() }),
    },
    {
      question: t("faqs.faq3.question", {
        industry: industry.name.toLowerCase(),
      }),
      answer: t("faqs.faq3.answer", { industry: industry.name.toLowerCase() }),
    },
    {
      question: t("faqs.faq4.question", {
        industry: industry.name.toLowerCase(),
      }),
      answer: t("faqs.faq4.answer", { industry: industry.name.toLowerCase() }),
    },
    {
      question: t("faqs.faq5.question", {
        industry: industry.name.toLowerCase(),
      }),
      answer: t("faqs.faq5.answer", { industry: industry.name.toLowerCase() }),
    },
  ];
};

// Generate key benefits based on the industry
const generateKeyBenefits = (industry: BusinessCategory, t: any) => {
  return [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit1.title"),
      description: t("benefits.benefit1.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit2.title"),
      description: t("benefits.benefit2.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit3.title"),
      description: t("benefits.benefit3.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit4.title"),
      description: t("benefits.benefit4.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit5.title"),
      description: t("benefits.benefit5.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t("benefits.benefit6.title"),
      description: t("benefits.benefit6.description", {
        industry: industry.name.toLowerCase(),
      }),
    },
  ];
};

export default function IndustryDetailClient({ id }: { id?: string }) {
  const params = useParams();
  const industryId = id || (params?.id as string);
  const industry =
    businessCategories.find((category) => category.id === industryId) ||
    businessCategories[0];

  const [activeTab, setActiveTab] = useState("overview");
  const [isRTL, setIsRTL] = useState(false);
  const t = useTranslations("industryDetail");

  const caseStudies = generateCaseStudies(industry, t);
  const faqs = generateFAQs(industry, t);
  const keyBenefits = generateKeyBenefits(industry, t);

  // Get related industries (excluding current one)
  const relatedIndustries = businessCategories
    .filter((category) => category.id !== industry.id)
    .slice(0, 3);

  // Detect RTL languages
  useEffect(() => {
    const locale = document.documentElement.lang;
    setIsRTL(locale === "ar" || locale === "bn");
  }, []);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform -translate-y-32"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={isRTL ? "lg:order-2" : ""}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                {t("hero.badge")}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6">
                {industry.name}
                <span className="text-primary relative mx-2">
                  {t("hero.titleSuffix")}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 C50,0 150,0 200,5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                {t("hero.description", { industry: industry.name })}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {industry.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                >
                  {t("hero.getStartedButton")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  {t("hero.scheduleButton")}
                </Button>
              </div>

              {/* Industry stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {industry.id === "retail"
                      ? "SAR 375B"
                      : industry.id === "healthcare"
                      ? "SAR 185B"
                      : industry.id === "manufacturing"
                      ? "SAR 420B"
                      : industry.id === "corporate"
                      ? "SAR 510B"
                      : industry.id === "smb"
                      ? "SAR 150B"
                      : "SAR 200B+"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("hero.marketSize")}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {industry.id === "retail"
                      ? "8.5%"
                      : industry.id === "healthcare"
                      ? "12.3%"
                      : industry.id === "manufacturing"
                      ? "7.2%"
                      : industry.id === "corporate"
                      ? "9.1%"
                      : industry.id === "smb"
                      ? "11.7%"
                      : "8.0%+"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("hero.annualGrowth")}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">
                    {t("hero.clientSatisfaction")}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative ${isRTL ? "lg:order-1" : ""}`}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    isRTL ? "bg-gradient-to-tl" : "bg-gradient-to-tr"
                  } from-primary/40 to-transparent mix-blend-multiply`}
                ></div>

                {/* Floating info card */}
                <div
                  className={`absolute bottom-6 ${
                    isRTL ? "left-6" : "right-6"
                  } bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-white/50`}
                >
                  <h4 className="font-bold text-primary mb-1">
                    {t("hero.vision2030")}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {t("hero.vision2030Description", {
                      industry: industry.name.toLowerCase(),
                    })}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -top-6 ${
                  isRTL ? "-left-6" : "-right-6"
                } h-24 w-24 bg-primary/10 rounded-full`}
              ></div>
              <div
                className={`absolute -bottom-6 ${
                  isRTL ? "-right-6" : "-left-6"
                } h-32 w-32 bg-primary/5 rounded-full`}
              ></div>

              {/* Floating badges */}
              <div className="absolute top-4 left-4 bg-white py-1.5 px-3 rounded-full shadow-md flex items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm font-medium">
                  {t("hero.saudiCertified")}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              {t("benefits.badge")}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              {t("benefits.title", { industry: industry.name })}
            </h2>

            <p className="text-gray-600">
              {t("benefits.description", {
                industry: industry.name.toLowerCase(),
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-saudi-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="overview"
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-gray-100 p-1.5 shadow-lg rounded-full">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  {t("tabs.overview")}
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  {t("tabs.features")}
                </TabsTrigger>
                <TabsTrigger
                  value="case-studies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  {t("tabs.caseStudies")}
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  {t("tabs.faq")}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-saudi-black mb-6">
                      {t("overview.title", { industry: industry.name })}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {t("overview.description", {
                        industry: industry.name.toLowerCase(),
                      })}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className={`${isRTL ? "mr-3" : "ml-3"}`}>
                          <h4 className="font-medium text-saudi-black">
                            {t("overview.feature1.title")}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t("overview.feature1.description", {
                              industry: industry.name.toLowerCase(),
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className={`${isRTL ? "mr-3" : "ml-3"}`}>
                          <h4 className="font-medium text-saudi-black">
                            {t("overview.feature2.title")}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t("overview.feature2.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className={`${isRTL ? "mr-3" : "ml-3"}`}>
                          <h4 className="font-medium text-saudi-black">
                            {t("overview.feature3.title")}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t("overview.feature3.description")}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className={`${isRTL ? "mr-3" : "ml-3"}`}>
                          <h4 className="font-medium text-saudi-black">
                            {t("overview.feature4.title")}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {t("overview.feature4.description")}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-white">
                      {t("overview.scheduleButton")}
                    </Button>
                  </div>

                  <div className="relative h-[400px] lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt={`${industry.name} Solutions Overview`}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 ${
                        isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
                      } from-primary/40 to-transparent mix-blend-multiply`}
                    ></div>

                    {/* Floating stats */}
                    <div
                      className={`absolute top-8 ${
                        isRTL ? "left-8" : "right-8"
                      } bg-white p-4 rounded-xl shadow-lg`}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        200+
                      </div>
                      <div className="text-sm text-gray-600">
                        {t("overview.projectsCompleted")}
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-8 ${
                        isRTL ? "right-8" : "left-8"
                      } bg-white p-4 rounded-xl shadow-lg`}
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">
                        {t("overview.clientSatisfaction")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-saudi-black mb-8 text-center">
                  {t("features.title", { industry: industry.name })}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {industry.services.slice(0, 2).map((service, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                      >
                        <h4 className="text-xl font-bold text-saudi-black mb-4">
                          {service}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {t("features.serviceDescription", {
                            service: service.toLowerCase(),
                            industry: industry.name.toLowerCase(),
                          })}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit1")}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit2")}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit3")}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {industry.services.slice(2, 4).map((service, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                      >
                        <h4 className="text-xl font-bold text-saudi-black mb-4">
                          {service}
                        </h4>
                        <p className="text-gray-600 mb-4">
                          {t("features.enhanceDescription", {
                            industry: industry.name.toLowerCase(),
                            service: service.toLowerCase(),
                          })}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit4")}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit5")}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">
                              {t("features.benefit6")}
                            </span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t("features.exploreButton")}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-0">
              <div className="space-y-8">
                {caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div
                        className={`relative h-[250px] lg:h-auto ${
                          isRTL ? "lg:order-3" : ""
                        }`}
                      >
                        <Image
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                        />
                        <div
                          className={`absolute inset-0 ${
                            isRTL ? "bg-gradient-to-l" : "bg-gradient-to-r"
                          } from-primary/40 to-transparent mix-blend-multiply`}
                        ></div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                            <h4 className="font-bold text-primary">
                              {caseStudy.client}
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`lg:col-span-2 p-8 ${
                          isRTL ? "lg:order-1" : ""
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-saudi-black mb-4">
                          {caseStudy.title}
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {t("caseStudies.challengeLabel")}
                            </h4>
                            <p className="text-gray-600">
                              {caseStudy.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              {t("caseStudies.solutionLabel")}
                            </h4>
                            <p className="text-gray-600">
                              {caseStudy.solution}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            {t("caseStudies.resultsLabel")}
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {caseStudy.results.map((result, i) => (
                              <div key={i} className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-2">
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-saudi-black mb-8 text-center">
                  {t("faqs.title", { industry: industry.name })}
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border-b border-gray-200 py-2"
                    >
                      <AccordionTrigger className="text-left font-medium text-saudi-black hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-saudi-black mb-2">
                    {t("faqs.moreQuestionsTitle")}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {t("faqs.moreQuestionsDescription", {
                      industry: industry.name.toLowerCase(),
                    })}
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    {t("faqs.contactButton")}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-saudi-black mb-4">
              {t("relatedIndustries.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("relatedIndustries.description", {
                industry: industry.name.toLowerCase(),
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((relatedIndustry) => (
              <Card
                key={relatedIndustry.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={relatedIndustry.image || "/placeholder.svg"}
                    alt={relatedIndustry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      {relatedIndustry.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {relatedIndustry.description}
                  </p>
                  <Link
                    href={`/industries/${relatedIndustry.id}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    {t("relatedIndustries.learnMore")}
                    {isRTL ? (
                      <ArrowLeft className="h-4 w-4 mr-2 rtl:order-1" />
                    ) : (
                      <ArrowRight className="h-4 w-4 ml-2" />
                    )}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            className={`bg-gradient-to-r ${
              isRTL
                ? "from-primary/5 to-primary/10"
                : "from-primary/10 to-primary/5"
            } rounded-2xl p-8 md:p-12 relative overflow-hidden`}
          >
            {/* Decorative elements */}
            <div
              className={`absolute top-0 ${
                isRTL ? "left-0" : "right-0"
              } w-64 h-64 bg-primary/10 rounded-full ${
                isRTL ? "-translate-x-1/2" : "translate-x-1/2"
              } -translate-y-1/2`}
            ></div>
            <div
              className={`absolute bottom-0 ${
                isRTL ? "right-0" : "left-0"
              } w-64 h-64 bg-primary/10 rounded-full ${
                isRTL ? "translate-x-1/2" : "-translate-x-1/2"
              } translate-y-1/2`}
            ></div>

            <div
              className={`relative z-10 max-w-3xl ${
                isRTL ? "mr-auto" : "ml-auto"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
                {t("cta.title", { industry: industry.name })}
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                {t("cta.description", {
                  industry: industry.name.toLowerCase(),
                })}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                >
                  {t("cta.scheduleButton")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  {t("cta.caseStudiesButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
