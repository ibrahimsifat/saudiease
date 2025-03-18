"use client";

import type React from "react";

import { Locale } from "@/config/i18n";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Bookmark,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Download,
  ExternalLink,
  Eye,
  Heart,
  Layers,
  Lightbulb,
  Maximize2,
  Share2,
  Star,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PortfolioDetailClient({
  project,
  relatedProjects,
  locale,
}: {
  project: Project;
  relatedProjects: Project[];
  locale: Locale;
}) {
  const t = useTranslations("portfolioPage.projectDetail");
  const isRtl = locale === "ar";

  const [activeTab, setActiveTab] = useState<
    "overview" | "challenge" | "solution" | "results"
  >("overview");
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    Math.floor(Math.random() * 50) + 10
  );
  const [viewCount, setViewCount] = useState(
    Math.floor(Math.random() * 500) + 100
  );

  // References for scroll sections
  const overviewRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Mock gallery images (in a real app, these would come from the project data)
  const galleryImages = [
    project.image,
    project.mobileImage,
    "/placeholder.svg?height=800&width=1200&text=Project+Screenshot+2",
    "/placeholder.svg?height=800&width=1200&text=Project+Screenshot+3",
    "/placeholder.svg?height=800&width=1200&text=Project+Screenshot+4",
    "/placeholder.svg?height=800&width=1200&text=Project+Screenshot+5",
  ];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Mock project timeline data
  const projectTimeline = [
    {
      date: "Week 1",
      title: t("timeline.discovery"),
      description: t("timeline.discoveryDesc"),
      icon: <Lightbulb className="w-4 h-4" />,
    },
    {
      date: "Week 2-3",
      title: t("timeline.design"),
      description: t("timeline.designDesc"),
      icon: <Layers className="w-4 h-4" />,
    },
    {
      date: "Week 4-7",
      title: t("timeline.development"),
      description: t("timeline.developmentDesc"),
      icon: <Code className="w-4 h-4" />,
    },
    {
      date: "Week 8",
      title: t("timeline.testing"),
      description: t("timeline.testingDesc"),
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      date: "Week 9",
      title: t("timeline.deployment"),
      description: t("timeline.deploymentDesc"),
      icon: <Award className="w-4 h-4" />,
    },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = [
        { id: "overview", ref: overviewRef },
        { id: "challenge", ref: challengeRef },
        { id: "solution", ref: solutionRef },
        { id: "results", ref: resultsRef },
        { id: "gallery", ref: galleryRef },
        { id: "testimonial", ref: testimonialRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.ref.current &&
          scrollPosition >= section.ref.current.offsetTop
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Increment view count on load
  useEffect(() => {
    setViewCount((prev) => prev + 1);
  }, []);

  // Handle like button
  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  // Open lightbox
  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  // Scroll to section
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Create RTL-aware arrow components
  const ArrowLeftIcon = isRtl
    ? ({ className }: { className?: string }) => (
        <ArrowLeft className={`${className} rotate-180`} />
      )
    : ArrowLeft;

  const ArrowRightIcon = isRtl
    ? ({ className }: { className?: string }) => (
        <ArrowRight className={`${className} rotate-180`} />
      )
    : ArrowRight;

  const ChevronRightIcon = isRtl
    ? ({ className }: { className?: string }) => (
        <ChevronRight className={`${className} rotate-180`} />
      )
    : ChevronRight;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-r from-primary/90 to-primary pt-32 pb-24"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div
            className={`absolute top-0 ${
              isRtl ? "left-0" : "right-0"
            } w-1/3 h-1/3 bg-white rounded-full blur-3xl transform ${
              isRtl ? "-translate-x-1/2" : "translate-x-1/2"
            } -translate-y-1/2`}
          ></div>
          <div
            className={`absolute bottom-0 ${
              isRtl ? "right-0" : "left-0"
            } w-1/4 h-1/4 bg-white rounded-full blur-3xl transform ${
              isRtl ? "translate-x-1/2" : "-translate-x-1/2"
            } translate-y-1/2`}
          ></div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Animated lines */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full"
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

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className={`flex items-center text-white/80 mb-8`}>
            <Link
              href={`/${locale}`}
              className="hover:text-white transition-colors"
            >
              {t("breadcrumb.home")}
            </Link>
            <ChevronRightIcon
              className={`w-4 h-4 mx-2 ${isRtl ? "rotate-180" : ""}`}
            />
            <Link
              href={`/${locale}/portfolio`}
              className="hover:text-white transition-colors"
            >
              {t("breadcrumb.portfolio")}
            </Link>
            <ChevronRightIcon
              className={`w-4 h-4 mx-2 ${isRtl ? "rotate-180" : ""}`}
            />
            <span className="text-white">{project.title}</span>
          </div>

          <div className={`flex flex-col md:flex-row items-start gap-8`}>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  {project.category}
                </span>

                <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  <Eye className="w-3 h-3 mr-1" />
                  {viewCount} views
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>

              <p className="text-white/90 text-lg mb-6">
                {project.description}
              </p>

              {/* Project Meta */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {project.client && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center text-white/80 mb-1">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{t("client")}</span>
                    </div>
                    <div className="text-white font-medium">
                      {project.client}
                    </div>
                  </div>
                )}

                {project.duration && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center text-white/80 mb-1">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{t("duration")}</span>
                    </div>
                    <div className="text-white font-medium">
                      {project.duration}
                    </div>
                  </div>
                )}

                {project.completionDate && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center text-white/80 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{t("completed")}</span>
                    </div>
                    <div className="text-white font-medium">
                      {project.completionDate}
                    </div>
                  </div>
                )}
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 mb-8">
                <button
                  onClick={handleLike}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm transition-colors",
                    isLiked
                      ? "bg-red-500/20 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  <Heart className={cn("w-4 h-4", isLiked && "fill-white")} />
                  <span>{likeCount}</span>
                </button>

                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={cn(
                    "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm transition-colors",
                    isBookmarked
                      ? "bg-primary/20 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  )}
                >
                  <Bookmark
                    className={cn("w-4 h-4", isBookmarked && "fill-white")}
                  />
                  <span>{t("save")}</span>
                </button>

                <button className="flex items-center gap-1 px-3 py-1.5 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>{t("share")}</span>
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t("visitProject")}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/30 transition-colors"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                  {t("requestSimilar")}
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />

                {/* Expand button */}
                <button
                  onClick={() => openLightbox(project.image)}
                  className={`absolute bottom-4 ${
                    isRtl ? "left-4" : "right-4"
                  } w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors`}
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile mockup (floating) */}
              <div
                className={`absolute -bottom-10 ${
                  isRtl ? "-left-10" : "-right-10"
                } w-1/3 shadow-2xl rounded-xl overflow-hidden border-4 border-white/20`}
              >
                <Image
                  src={project.mobileImage || "/placeholder.svg"}
                  alt={`${project.title} mobile view`}
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Featured badge */}
              <div
                className={`absolute -top-4 ${
                  isRtl ? "-right-4" : "-left-4"
                } w-24 h-24 overflow-hidden`}
              >
                <div
                  className={`absolute top-0 ${
                    isRtl ? "right-0" : "left-0"
                  } w-24 h-24 bg-yellow-500 ${
                    isRtl ? "-rotate-45" : "rotate-45"
                  } transform origin-bottom-${
                    isRtl ? "left" : "right"
                  } translate-y-[-50%]`}
                >
                  <div className="absolute bottom-0 left-0 right-0 text-center text-xs font-bold text-white pb-1">
                    <Star className="w-3 h-3 mx-auto mb-0.5" />
                    {t("featured")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center justify-between py-4 ${
              isRtl ? "flex-row-reverse" : ""
            }`}
          >
            <Link
              href={`/${locale}/portfolio`}
              className={`flex items-center gap-2 text-primary font-medium hover:underline ${
                isRtl ? "flex-row-reverse" : ""
              }`}
            >
              <ArrowLeftIcon className="w-4 h-4" />
              {t("backToPortfolio")}
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => {
                  setActiveTab("overview");
                  scrollToSection(overviewRef);
                }}
                className={cn(
                  "text-sm font-medium border-b-2 py-2 transition-colors",
                  activeSection === "overview"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                )}
              >
                {t("overview")}
              </button>

              {project.challenge && (
                <button
                  onClick={() => {
                    setActiveTab("challenge");
                    scrollToSection(challengeRef);
                  }}
                  className={cn(
                    "text-sm font-medium border-b-2 py-2 transition-colors",
                    activeSection === "challenge"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  )}
                >
                  {t("challenge")}
                </button>
              )}

              {project.solution && (
                <button
                  onClick={() => {
                    setActiveTab("solution");
                    scrollToSection(solutionRef);
                  }}
                  className={cn(
                    "text-sm font-medium border-b-2 py-2 transition-colors",
                    activeSection === "solution"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  )}
                >
                  {t("solution")}
                </button>
              )}

              {project.results && (
                <button
                  onClick={() => {
                    setActiveTab("results");
                    scrollToSection(resultsRef);
                  }}
                  className={cn(
                    "text-sm font-medium border-b-2 py-2 transition-colors",
                    activeSection === "results"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  )}
                >
                  {t("results")}
                </button>
              )}

              <button
                onClick={() => scrollToSection(galleryRef)}
                className={cn(
                  "text-sm font-medium border-b-2 py-2 transition-colors",
                  activeSection === "gallery"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                )}
              >
                {t("gallery")}
              </button>

              {project.testimonial && (
                <button
                  onClick={() => scrollToSection(testimonialRef)}
                  className={cn(
                    "text-sm font-medium border-b-2 py-2 transition-colors",
                    activeSection === "testimonial"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  )}
                >
                  {t("testimonial")}
                </button>
              )}
            </nav>

            {/* Mobile dropdown */}
            <div className="relative md:hidden">
              <select
                className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={activeSection}
                onChange={(e) => {
                  const section = e.target.value;
                  setActiveSection(section);

                  if (section === "overview") scrollToSection(overviewRef);
                  else if (section === "challenge")
                    scrollToSection(challengeRef);
                  else if (section === "solution") scrollToSection(solutionRef);
                  else if (section === "results") scrollToSection(resultsRef);
                  else if (section === "gallery") scrollToSection(galleryRef);
                  else if (section === "testimonial")
                    scrollToSection(testimonialRef);
                }}
              >
                <option value="overview">{t("overview")}</option>
                {project.challenge && (
                  <option value="challenge">{t("challenge")}</option>
                )}
                {project.solution && (
                  <option value="solution">{t("solution")}</option>
                )}
                {project.results && (
                  <option value="results">{t("results")}</option>
                )}
                <option value="gallery">{t("gallery")}</option>
                {project.testimonial && (
                  <option value="testimonial">{t("testimonial")}</option>
                )}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-col lg:flex-row gap-12 ${
              isRtl ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Overview Section */}
              <div ref={overviewRef} className="mb-16">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h2
                    variants={fadeIn}
                    className={`text-2xl font-bold mb-6 flex items-center ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    {t("overview")}
                  </motion.h2>

                  <motion.p
                    variants={fadeIn}
                    className="text-gray-600 mb-8 text-lg leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div variants={fadeIn} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">
                      {t("keyFeatures")}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className={`flex items-start ${
                            isRtl ? "flex-row-reverse text-right" : ""
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 ${
                              isRtl ? "ml-2" : "mr-2"
                            } flex-shrink-0`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={fadeIn}>
                    <h3 className="text-xl font-bold mb-4">
                      {t("technologiesUsed")}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Challenge Section */}
              {project.challenge && (
                <div ref={challengeRef} className="mb-16">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={fadeIn}
                      className={`flex items-center gap-3 mb-6 ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-orange-600" />
                      </div>
                      <h2 className="text-2xl font-bold">{t("challenge")}</h2>
                    </motion.div>

                    <motion.p
                      variants={fadeIn}
                      className="text-gray-600 mb-8 text-lg leading-relaxed"
                    >
                      {project.challenge}
                    </motion.p>

                    {/* Project Timeline */}
                    <motion.div variants={fadeIn} className="mt-8">
                      <h3 className="text-xl font-bold mb-6">
                        {t("projectTimeline")}
                      </h3>
                      <div
                        className={`relative ${
                          isRtl ? "pr-8 border-r-2" : "pl-8 border-l-2"
                        } border-gray-200`}
                      >
                        {projectTimeline.map((item, index) => (
                          <div key={index} className="mb-8 relative">
                            <div
                              className={`absolute ${
                                isRtl ? "-right-[17px]" : "-left-[17px]"
                              } w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center`}
                            >
                              {item.icon}
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="text-xs text-gray-500 mb-1">
                                {item.date}
                              </div>
                              <h4 className="text-lg font-semibold mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <div ref={solutionRef} className="mb-16">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={fadeIn}
                      className={`flex items-center gap-3 mb-6 ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold">{t("solution")}</h2>
                    </motion.div>

                    <motion.p
                      variants={fadeIn}
                      className="text-gray-600 mb-8 text-lg leading-relaxed"
                    >
                      {project.solution}
                    </motion.p>

                    {/* Solution Highlights */}
                    <motion.div
                      variants={fadeIn}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                    >
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Code className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {t("technicalExcellence")}
                        </h4>
                        <p className="text-gray-600">
                          {t("technicalDescription")}
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {t("userCenteredDesign")}
                        </h4>
                        <p className="text-gray-600">
                          {t("userCenteredDescription")}
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Layers className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {t("scalableArchitecture")}
                        </h4>
                        <p className="text-gray-600">
                          {t("scalableDescription")}
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">
                          {t("efficientDelivery")}
                        </h4>
                        <p className="text-gray-600">
                          {t("efficientDescription")}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}

              {/* Results Section */}
              {project.results && (
                <div ref={resultsRef} className="mb-16">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div
                      variants={fadeIn}
                      className={`flex items-center gap-3 mb-6 ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold">{t("results")}</h2>
                    </motion.div>

                    <motion.p
                      variants={fadeIn}
                      className="text-gray-600 mb-8 text-lg leading-relaxed"
                    >
                      {project.results}
                    </motion.p>

                    {/* Stats */}
                    {project.stats && (
                      <motion.div
                        variants={fadeIn}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
                      >
                        {project.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                          >
                            <div className="flex justify-center mb-3 text-primary">
                              {stat.icon}
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-500">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Results Chart (Placeholder) */}
                    <motion.div
                      variants={fadeIn}
                      className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                    >
                      <h3 className="text-xl font-bold mb-4">
                        {t("performanceMetrics")}
                      </h3>
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">
                          Interactive chart would be displayed here
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}

              {/* Gallery */}
              <div ref={galleryRef} className="mb-16">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h2
                    variants={fadeIn}
                    className={`text-2xl font-bold mb-6 flex items-center ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Image className="w-5 h-5 text-primary" />
                    </div>
                    {t("gallery")}
                  </motion.h2>

                  <motion.div variants={fadeIn} className="mb-4">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src={activeImage || "/placeholder.svg"}
                        alt={project.title}
                        width={1200}
                        height={675}
                        className="w-full h-full object-cover"
                      />

                      {/* Expand button */}
                      <button
                        onClick={() => openLightbox(activeImage)}
                        className={`absolute bottom-4 ${
                          isRtl ? "left-4" : "right-4"
                        } w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-white transition-colors`}
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    className="grid grid-cols-6 gap-4"
                  >
                    {galleryImages.map((image, index) => (
                      <div
                        key={index}
                        className={cn(
                          "cursor-pointer rounded-lg overflow-hidden border-2 transition-all",
                          activeImage === image
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-transparent hover:border-gray-200"
                        )}
                        onClick={() => setActiveImage(image)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Gallery image ${index + 1}`}
                          width={300}
                          height={200}
                          className="w-full h-full object-cover aspect-video"
                        />
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div ref={testimonialRef} className="mb-12">
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.h2
                      variants={fadeIn}
                      className={`text-2xl font-bold mb-6 flex items-center ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      {t("clientTestimonial")}
                    </motion.h2>

                    <motion.div
                      variants={fadeIn}
                      className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 relative"
                    >
                      <div
                        className={`absolute top-4 ${
                          isRtl ? "right-4" : "left-4"
                        } text-primary text-5xl opacity-10`}
                      >
                        "
                      </div>
                      <div
                        className={`absolute bottom-4 ${
                          isRtl ? "left-4" : "right-4"
                        } text-primary text-5xl opacity-10`}
                      >
                        "
                      </div>

                      <blockquote className="text-gray-600 italic text-lg mb-6 relative z-10">
                        "
                        {project.testimonial ||
                          "The team delivered an exceptional solution that exceeded our expectations. The project was completed on time and within budget, and the results have been outstanding."}
                        "
                      </blockquote>

                      <div
                        className={`flex items-center ${
                          isRtl ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-12 h-12 bg-gray-300 rounded-full ${
                            isRtl ? "ml-4" : "mr-4"
                          } flex items-center justify-center text-white font-bold`}
                        >
                          {project.client ? project.client.charAt(0) : "C"}
                        </div>
                        <div className={isRtl ? "text-right" : ""}>
                          <div className="font-medium">
                            Client Representative
                          </div>
                          <div className="text-sm text-gray-500">
                            {project.client}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}

              {/* Download Resources */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-100"
              >
                <motion.h2
                  variants={fadeIn}
                  className="text-2xl font-bold mb-6"
                >
                  {t("projectResources")}
                </motion.h2>

                <motion.div
                  variants={fadeIn}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div
                    className={`bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ${
                          isRtl ? "ml-3" : "mr-3"
                        }`}
                      >
                        <Download className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className={isRtl ? "text-right" : ""}>
                        <h4 className="font-medium">{t("caseStudy")}</h4>
                        <p className="text-xs text-gray-500">PDF, 2.4 MB</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                      {t("download")}
                    </button>
                  </div>

                  <div
                    className={`bg-white p-4 rounded-lg border border-gray-100 flex items-center justify-between ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`flex items-center ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ${
                          isRtl ? "ml-3" : "mr-3"
                        }`}
                      >
                        <Download className="w-5 h-5 text-green-600" />
                      </div>
                      <div className={isRtl ? "text-right" : ""}>
                        <h4 className="font-medium">{t("presentation")}</h4>
                        <p className="text-xs text-gray-500">PPTX, 5.7 MB</p>
                      </div>
                    </div>
                    <button className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors">
                      {t("download")}
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* Project Info Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">{t("projectInfo")}</h3>
                <div className="space-y-4">
                  <div
                    className={`flex justify-between ${
                      isRtl ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="text-gray-500">{t("category")}:</span>
                    <span className="font-medium">{project.category}</span>
                  </div>
                  {project.client && (
                    <div
                      className={`flex justify-between ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-gray-500">{t("client")}:</span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                  )}
                  {project.duration && (
                    <div
                      className={`flex justify-between ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-gray-500">{t("duration")}:</span>
                      <span className="font-medium">{project.duration}</span>
                    </div>
                  )}
                  {project.completionDate && (
                    <div
                      className={`flex justify-between ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-gray-500">{t("completed")}:</span>
                      <span className="font-medium">
                        {project.completionDate}
                      </span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-medium mb-2">
                      {t("technologiesUsed")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-white mb-8">
                <h3 className="text-xl font-bold mb-4">
                  {t("interestedSimilar")}
                </h3>
                <p className="mb-6 text-white/90">{t("discussHelp")}</p>
                <Link
                  href={`/${locale}/contact`}
                  className="block w-full py-3 bg-white text-primary font-medium rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  {t("getInTouch")}
                </Link>
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    {t("relatedProjects")}
                  </h3>
                  <div className="space-y-4">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.id}
                        href={`/${locale}/portfolio/${relatedProject.id}`}
                        className={`flex items-start group hover:bg-gray-50 p-2 rounded-lg transition-colors ${
                          isRtl ? "flex-row-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                            isRtl ? "ml-3" : "mr-3"
                          }`}
                        >
                          <Image
                            src={relatedProject.image || "/placeholder.svg"}
                            alt={relatedProject.title}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={isRtl ? "text-right" : ""}>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {relatedProject.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Download Brochure */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold mb-2">
                  {t("downloadPortfolio")}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t("portfolioDescription")}
                </p>
                <button
                  className={`w-full py-2 bg-primary text-white rounded-lg flex items-center justify-center ${
                    isRtl ? "flex-row-reverse" : ""
                  }`}
                >
                  <Download className={`w-4 h-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                  {t("downloadPDF")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t("relatedProjects")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/${locale}/portfolio/${relatedProject.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {relatedProject.description}
                    </p>
                    <div
                      className={`flex items-center text-primary font-medium ${
                        isRtl ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span>{t("viewProject")}</span>
                      <ChevronRightIcon
                        className={`w-4 h-4 ${
                          isRtl
                            ? "mr-1 group-hover:mr-2"
                            : "ml-1 group-hover:ml-2"
                        } transition-all`}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="max-w-5xl max-h-[80vh] relative">
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
