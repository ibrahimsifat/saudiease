"use client";

import { CONSTANT } from "@/config/constants";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Update the component to accept translated content
interface AboutHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  breadcrumbHome: string;
  breadcrumbAbout: string;
  ourStoryLabel: string;
  transformingText: string;
  digitalInnovation: string;
  journeyText: string;
  stats: {
    years: {
      value: string;
      title: string;
      subtitle: string;
    };
    clients: {
      value: string;
      title: string;
      subtitle: string;
    };
    team: {
      value: string;
      title: string;
      subtitle: string;
    };
  };
  visionTitle: string;
  visionDescription: string;
  isRTL?: boolean;
}

export default function AboutHero({
  title,
  subtitle,
  description,
  imageAlt,
  breadcrumbHome,
  breadcrumbAbout,
  ourStoryLabel,
  transformingText,
  digitalInnovation,
  journeyText,
  stats,
  visionTitle,
  visionDescription,
  isRTL = false,
}: AboutHeroProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative pt-16 pb-20 overflow-hidden rtl:text-right">
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
          <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:md:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {breadcrumbHome}
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 rtl:rotate-180" />
                <span
                  className="ml-1 rtl:mr-1 rtl:ml-0 text-primary font-medium"
                  aria-current="page"
                >
                  {breadcrumbAbout}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text content - order changes based on RTL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 rtl:lg:order-2"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 rtl:mr-0 rtl:ml-2"></span>
              {ourStoryLabel}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">
              {transformingText}
              <span className="relative ml-3 rtl:mr-3 rtl:ml-0">
                <span className="relative z-10 text-primary">
                  {digitalInnovation}
                </span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 rtl:left-auto rtl:right-0 w-full h-3 text-primary/20"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,5 C50,0 150,0 200,5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {journeyText}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3">
                  <span className="text-primary font-bold">
                    {stats.years.value}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">
                    {stats.years.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {stats.years.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3">
                  <span className="text-primary font-bold">
                    {stats.clients.value}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">
                    {stats.clients.title}
                  </p>
                  <p className="text-sm text-gray-600">
                    {stats.clients.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3">
                  <span className="text-primary font-bold">
                    {stats.team.value}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">
                    {stats.team.title}
                  </p>
                  <p className="text-sm text-gray-600">{stats.team.subtitle}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image - order changes based on RTL */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 rtl:lg:order-1 relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={CONSTANT.images.aboutUs}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-6 right-6 rtl:right-auto rtl:left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] z-10"
              >
                <p className="text-sm font-medium text-saudi-black mb-1">
                  {visionTitle}
                </p>
                <p className="text-xs text-gray-600">{visionDescription}</p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 rtl:-right-auto rtl:-left-6 h-24 w-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 rtl:-left-auto rtl:-right-6 h-32 w-32 bg-primary/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-dashed border-primary/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
