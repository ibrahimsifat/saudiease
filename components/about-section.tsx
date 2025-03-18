"use client";

import OptimizedImage from "@/components/optimized-image";
import { Button } from "@/components/ui/button";
import { CONSTANT } from "@/config/constants";
import { getOptimizedAnimations } from "@/lib/performance-optimizations";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Globe,
  Users,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("mission");

  // Get translations
  const t = useTranslations("about");

  // Get animation settings based on device capabilities
  const animations = getOptimizedAnimations();

  // Get current locale and direction
  const locale = (useParams()?.locale as string) || "en";
  const isRTL = locale === "ar";

  // Core values with translations
  const coreValues = [
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      title: t("coreValues.excellence.title"),
      description: t("coreValues.excellence.description"),
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      title: t("coreValues.innovation.title"),
      description: t("coreValues.innovation.description"),
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: t("coreValues.clientCentric.title"),
      description: t("coreValues.clientCentric.description"),
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: t("coreValues.localExpertise.title"),
      description: t("coreValues.localExpertise.description"),
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: t("coreValues.agility.title"),
      description: t("coreValues.agility.description"),
    },
  ];

  // Tab content with translations
  const tabContent = {
    mission: {
      title: t("tabs.mission.title"),
      description: t("tabs.mission.description"),
      points: [
        t("tabs.mission.points.0"),
        t("tabs.mission.points.1"),
        t("tabs.mission.points.2"),
        t("tabs.mission.points.3"),
      ],
    },
    vision: {
      title: t("tabs.vision.title"),
      description: t("tabs.vision.description"),
      points: [
        t("tabs.vision.points.0"),
        t("tabs.vision.points.1"),
        t("tabs.vision.points.2"),
        t("tabs.vision.points.3"),
      ],
    },
    story: {
      title: t("tabs.story.title"),
      description: t("tabs.story.description"),
      points: [
        t("tabs.story.points.0"),
        t("tabs.story.points.1"),
        t("tabs.story.points.2"),
        t("tabs.story.points.3"),
      ],
    },
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-white to-transparent"></div>
      <div
        className={`absolute bottom-0 ${
          isRTL ? "left-0" : "right-0"
        } w-2/3 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl`}
      ></div>

      {/* Animated background elements - only if enabled */}
      {animations.enableBackgroundEffects && (
        <>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </>
      )}

      <div
        className="container mx-auto px-4 relative z-10 max-w-7xl"
        aria-labelledby="about-section-title"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        {/* Decorative elements for visual appeal */}
        <div
          className={`absolute ${
            isRTL ? "right-0" : "left-0"
          } top-20 w-24 h-24 bg-primary/5 rounded-full blur-xl`}
        ></div>
        <div
          className={`absolute ${
            isRTL ? "left-0" : "right-0"
          } bottom-20 w-32 h-32 bg-blue-50 rounded-full blur-xl`}
        ></div>

        {/* Decorative dots pattern */}
        <div
          className={`absolute ${
            isRTL ? "left-10" : "right-10"
          } top-40 hidden lg:block`}
        >
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-primary/20"></div>
            ))}
          </div>
        </div>

        {/* Decorative line */}
        <div
          className={`absolute ${
            isRTL ? "right-0" : "left-0"
          } top-1/2 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block`}
        ></div>

        {/* SEO-friendly metadata */}
        <meta itemProp="name" content={t("seo.name")} />
        <meta itemProp="description" content={t("seo.description")} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            {t("sectionLabel")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-saudi-black mb-4 tracking-tight">
            {t("title.part1")}
            <span
              className={`text-primary relative ${isRTL ? "mr-2" : "ml-2"}`}
            >
              {t("title.part2")}
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
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden ">
              <OptimizedImage
                src={CONSTANT.images.homeAbout}
                alt={t("imageAlt")}
                fill
                className="object-cover"
                fadeIn={true}
              />

              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div> */}

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-white">
                    <p className="text-3xl font-bold">5+</p>
                    <p className="text-sm opacity-80">
                      {t("stats.yearsExperience")}
                    </p>
                  </div>
                  <div className="text-white">
                    <p className="text-3xl font-bold">250+</p>
                    <p className="text-sm opacity-80">
                      {t("stats.projectsCompleted")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className={`absolute -top-6 ${
                isRTL ? "-right-6" : "-left-6"
              } h-24 w-24 bg-primary/10 rounded-full`}
            ></div>
            <div
              className={`absolute -bottom-6 ${
                isRTL ? "-left-6" : "-right-6"
              } h-32 w-32 bg-primary/5 rounded-full`}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Tab navigation */}
            <div className="flex space-x-2 mb-6 border-b border-gray-200">
              {Object.entries(tabContent).map(([key, content]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    activeTab === key
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {content.title}
                  {activeTab === key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-saudi-black mb-4">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {tabContent[activeTab].description}
              </p>

              <ul className="space-y-3">
                {tabContent[activeTab].points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span
                      className={`${isRTL ? "mr-3" : "ml-3"} text-gray-700`}
                    >
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/about" className="flex items-center">
                {t("learnMoreButton")}
                <ArrowRight
                  className={`${isRTL ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`}
                />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative bg-gradient-to-br from-white via-white to-gray-50 p-10 rounded-3xl border border-gray-100 overflow-hidden"
          style={{ willChange: "opacity, transform" }}
        >
          {/* Decorative elements */}
          <div
            className={`absolute top-0 ${
              isRTL ? "left-0" : "right-0"
            } w-64 h-64 bg-primary/5 rounded-full ${
              isRTL ? "-ml-32" : "-mr-32"
            } -mt-32`}
          ></div>
          <div
            className={`absolute bottom-0 ${
              isRTL ? "right-0" : "left-0"
            } w-64 h-64 bg-blue-50 rounded-full ${
              isRTL ? "-mr-32" : "-ml-32"
            } -mb-32`}
          ></div>

          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="relative">
            <div className="flex flex-col items-center mb-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                {t("coreValues.sectionLabel")}
              </div>
              <h3 className="text-3xl font-bold text-saudi-black mb-2 text-center">
                {t("coreValues.titlePart1")}{" "}
                <span className="text-primary relative">
                  {t("coreValues.titlePart2")}
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-primary/20"
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
              </h3>
              <p className="text-gray-600 max-w-xl text-center">
                {t("coreValues.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    type: animations.enableAdvancedAnimations
                      ? "spring"
                      : "tween",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={
                    animations.enableAdvancedAnimations
                      ? {
                          y: -5,
                          boxShadow:
                            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                        }
                      : {}
                  }
                  className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  style={{ willChange: "transform" }}
                >
                  {/* Decorative corner accent */}
                  <div
                    className={`absolute top-0 ${
                      isRTL ? "left-0" : "right-0"
                    } w-16 h-16 bg-primary/5 rounded-bl-3xl transform -translate-y-8 ${
                      isRTL ? "-translate-x-8" : "translate-x-8"
                    } group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500`}
                  ></div>

                  {/* Icon with enhanced styling */}
                  <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 mx-auto transform group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-xl bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>

                  {/* Title with animated underline */}
                  <h4 className="text-lg font-semibold text-saudi-black mb-3 text-center relative">
                    {value.title}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transform -translate-x-1/2 group-hover:w-1/2 transition-all duration-300"></span>
                  </h4>

                  <p className="text-gray-600 text-sm text-center">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
