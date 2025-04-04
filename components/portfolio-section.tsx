"use client";

import { Button } from "@/components/ui/button";
import { Locale } from "@/config/i18n";
import { getProjects } from "@/data/projects/index";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Code,
  ExternalLink,
  Layers,
} from "lucide-react";
import { useLocale } from "next-intl";
import NextImage from "next/image";
import { useState } from "react";
export default function PortfolioSection() {
  const locale = useLocale();
  const projects = getProjects(locale as Locale);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-purple-400/20 rounded-full blur-[60px]"></div>
        <div className="absolute top-1/3 right-10 w-60 h-60 bg-gradient-to-bl from-blue-400/20 to-primary/20 rounded-full blur-[80px]"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 1.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-purple-400/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm border border-primary/10"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2"
            ></motion.span>
            Our Award-Winning Portfolio
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-saudi-black to-saudi-black/80">
            Featured Projects
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our recent projects and see how we've helped businesses
            across Saudi Arabia achieve their digital goals with innovative
            solutions and cutting-edge technology.
          </p>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            <span className="px-3 py-1 bg-white shadow-md rounded-full text-xs font-medium text-gray-700 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
              100% Client Satisfaction
            </span>
            <span className="px-3 py-1 bg-white shadow-md rounded-full text-xs font-medium text-gray-700 flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>
              Award-Winning Designs
            </span>
            <span className="px-3 py-1 bg-white shadow-md rounded-full text-xs font-medium text-gray-700 flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-500 mr-1.5"></span>
              Industry-Leading Solutions
            </span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Project selection sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-4 relative">
            {/* Decorative corner element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 pointer-events-none opacity-30">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0L100 0L100 20L20 20L20 100L0 100L0 0Z"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: activeProject === index ? 1 : 1.02,
                  boxShadow:
                    activeProject === index
                      ? "0 10px 30px rgba(0, 0, 0, 0.1)"
                      : "0 5px 15px rgba(0, 0, 0, 0.05)",
                }}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                  activeProject === index
                    ? "bg-gradient-to-br from-white to-primary/5 shadow-lg border-l-4 border-primary"
                    : "bg-white hover:bg-white hover:shadow-md border border-gray-100"
                }`}
                onClick={() => setActiveProject(index)}
              >
                {/* Animated selection indicator */}
                {activeProject === index && (
                  <motion.div
                    layoutId="activeProjectIndicator"
                    className="absolute left-0 top-0 w-1 h-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      activeProject === index
                        ? "bg-primary/10 text-primary"
                        : "bg-gray-100 text-gray-700 group-hover:bg-primary/5 group-hover:text-primary/80"
                    }`}
                  >
                    {project.category}
                  </span>
                  <motion.div
                    animate={
                      activeProject === index ? { rotate: 90 } : { rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight
                      className={`h-5 w-5 ${
                        activeProject === index
                          ? "text-primary"
                          : "text-gray-400 group-hover:text-primary/70"
                      }`}
                    />
                  </motion.div>
                </div>

                <h3
                  className={`text-xl font-bold ${
                    activeProject === index
                      ? "text-primary"
                      : "text-saudi-black group-hover:text-primary/90"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2 group-hover:text-gray-700">
                  {project.description}
                </p>

                {/* Client logo/info - additional information */}
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-gray-100 flex items-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-gray-500">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Client</p>
                      <p className="text-sm font-medium">
                        {project.title.split(" ")[0]} Inc.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Project detail card */}
          <motion.div
            layoutId="projectDetailCard"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative"
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none opacity-10">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 0L0 0L0 20L80 20L80 100L100 100L100 0Z"
                  fill="currentColor"
                  className="text-primary"
                />
              </svg>
            </div>

            {/* Project image with overlay */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <NextImage
                src={projects[activeProject].image || "/placeholder.svg"}
                alt={projects[activeProject].title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Gradient overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white"
                >
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium inline-block mb-3">
                    {projects[activeProject].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-white/80 max-w-xl">
                    {projects[activeProject].description}
                  </p>
                </motion.div>
              </div>

              {/* Mobile preview with animated frame */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-10 right-8 w-[100px] h-[200px] rounded-xl overflow-hidden border-[3px] border-white shadow-lg"
              >
                <NextImage
                  src={
                    projects[activeProject].mobileImage || "/placeholder.svg"
                  }
                  alt={`${projects[activeProject].title} mobile view`}
                  fill
                  className="object-cover"
                />

                {/* Device frame details */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-300 rounded-full"></div>
              </motion.div>
            </div>

            <div className="p-6 md:p-8">
              {/* Technology tags with improved styling */}
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200 shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Project details with improved layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-saudi-black mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mr-3">
                      <Layers className="h-4 w-4 text-primary" />
                    </div>
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.3 }}
                        className="flex items-start group"
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
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
                        <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Project timeline - new informative element */}
                  <h4 className="text-lg font-semibold text-saudi-black mb-4 flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 mr-3">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    Project Timeline
                  </h4>

                  <div className="relative pl-6 border-l border-gray-200">
                    <div className="mb-4 relative">
                      <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <h5 className="text-sm font-semibold">
                        Discovery & Planning
                      </h5>
                      <p className="text-xs text-gray-500">2 weeks</p>
                    </div>

                    <div className="mb-4 relative">
                      <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <h5 className="text-sm font-semibold">
                        Design & Development
                      </h5>
                      <p className="text-xs text-gray-500">6 weeks</p>
                    </div>

                    <div className="mb-4 relative">
                      <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                      <h5 className="text-sm font-semibold">
                        Testing & Deployment
                      </h5>
                      <p className="text-xs text-gray-500">2 weeks</p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] w-5 h-5 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                        <svg
                          className="h-2.5 w-2.5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h5 className="text-sm font-semibold text-green-600">
                        Completed & Launched
                      </h5>
                      <p className="text-xs text-gray-500">Ongoing support</p>
                    </div>
                  </div>

                  {/* Results section with improved styling */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-lg font-semibold text-saudi-black mb-4">
                      Project Impact
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {projects[activeProject].stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index + 0.4 }}
                          whileHover={{
                            y: -5,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                          }}
                          className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-100 shadow-sm transition-all duration-300"
                        >
                          <div className="flex items-center text-gray-600 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-2">
                              {stat.icon}
                            </div>
                            <span className="text-xs font-medium">
                              {stat.label}
                            </span>
                          </div>
                          <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                            {stat.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Client testimonial - new informative element */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100 relative"
              >
                <div className="absolute -top-3 -left-3 text-primary text-4xl opacity-20">
                  "
                </div>
                <div className="absolute -bottom-3 -right-3 text-primary text-4xl opacity-20">
                  "
                </div>
                <p className="text-gray-600 italic text-sm">
                  "The team delivered an exceptional solution that exceeded our
                  expectations. The project was completed on time and within
                  budget, and the results have been outstanding."
                </p>
                <div className="mt-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">
                      {projects[activeProject].title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Client Representative</p>
                    <p className="text-xs text-gray-500">
                      {projects[activeProject].title.split(" ")[0]} Inc.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Action buttons with improved styling */}
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg shadow-primary/20"
                  asChild
                >
                  <a
                    href={projects[activeProject].link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 group"
                  asChild
                >
                  <Link
                    href={`/portfolio/${projects[activeProject].id}`}
                    className="flex items-center"
                  >
                    <span>View Case Study</span>
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-2xl font-bold text-saudi-black mb-2">
            Ready to Explore More?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Discover our complete portfolio of successful projects across
            various industries.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/portfolio" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
              asChild
            >
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
