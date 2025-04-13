"use client";

import OptimizedImage from "@/components/optimized-image";
import { Button } from "@/components/ui/button";
import { CONSTANT } from "@/config/constants";
import { Link } from "@/i18n/routing";
import { getOptimizedAnimations } from "@/lib/performance-optimizations";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart,
  CheckCircle,
  ChevronRight,
  Globe,
  Play,
  Users,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Testimonials data structure
const testimonials = [
  {
    text: "Saudi Ease transformed our digital presence with their exceptional web development services. Their deep understanding of Saudi market regulations and Vision 2030 initiatives helped us increase customer engagement by 45% while ensuring full compliance.",
    author: "Ahmed Al-Saud",
    position: "CEO",
    company: "RiyadhTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    text: "Their ZATCA-compliant e-invoicing solution streamlined our accounting process and ensured we met all regulatory requirements. The implementation was smooth, and their ongoing support has been outstanding.",
    author: "Fatima Khalid",
    position: "Finance Director",
    company: "Saudi Business Solutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    text: "The bilingual branding package they created perfectly captured our company's vision and values. Their understanding of both Arabic and English markets helped us stand out in the competitive Saudi business landscape.",
    author: "Mohammed Al-Harbi",
    position: "Marketing Manager",
    company: "Gulf Innovations Group",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const CounterAnimation = memo(
  ({
    value,
    label,
    icon,
  }: {
    value: string;
    label: string;
    icon: React.ReactNode;
  }) => {
    const count = useMotionValue(0);
    const roundedCount = useSpring(count, { stiffness: 100, damping: 30 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      const numericValue = Number.parseInt(value.replace(/\D/g, ""));
      count.set(numericValue);
    }, [value, count]);

    useEffect(() => {
      const unsubscribe = roundedCount.onChange((v) => {
        setDisplayValue(Math.round(v));
      });
      return unsubscribe;
    }, [roundedCount]);

    return (
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 text-center transform transition-all duration-300 hover:scale-105"
        whileHover={{ y: -5 }}
      >
        <div className="flex justify-center mb-2">{icon}</div>
        <p className="text-2xl font-bold text-primary">
          {value.includes("+") ? displayValue + "+" : displayValue}
        </p>
        <p className="text-xs text-gray-600">{label}</p>
      </motion.div>
    );
  }
);

CounterAnimation.displayName = "CounterAnimation";

const HeroSection = () => {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animations = useMemo(() => getOptimizedAnimations(), []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    animations.reducedMotion ? [0, 0] : [0, 200]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(
    () => [
      {
        value: "250+",
        label: t("projectsCompleted", { defaultMessage: "Projects Completed" }),
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      },
      {
        value: "98%",
        label: t("clientSatisfaction", {
          defaultMessage: "Client Satisfaction",
        }),
        icon: <Users className="h-5 w-5 text-blue-500" />,
      },
      {
        value: "5+",
        label: t("yearsExperience", { defaultMessage: "Years Experience" }),
        icon: <BarChart className="h-5 w-5 text-purple-500" />,
      },
      {
        value: "15+",
        label: t("citiesServed", { defaultMessage: "Saudi Cities Served" }),
        icon: <Globe className="h-5 w-5 text-amber-500" />,
      },
    ],
    [t]
  );

  const renderParticles = useCallback(() => {
    if (!isLoaded || !inView || !animations.enableBackgroundEffects)
      return null;

    const particleCount = animations.reducedMotion ? 5 : 10;

    return [...Array(particleCount)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          x: Math.random() * 100 + "%",
          y: Math.random() * 100 + "%",
          opacity: Math.random() * 0.5 + 0.3,
        }}
        animate={{
          y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
          x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
        }}
        transition={{
          duration: Math.random() * 20 + 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute rounded-full"
        style={{
          width: `${Math.random() * 8 + 5}px`,
          height: `${Math.random() * 8 + 5}px`,
          background: `rgba(230, 62, 101, ${Math.random() * 0.2 + 0.1})`,
        }}
      ></motion.div>
    ));
  }, [
    isLoaded,
    inView,
    animations.enableBackgroundEffects,
    animations.reducedMotion,
  ]);

  const particles = useMemo(() => renderParticles(), [renderParticles]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll indicator animation
  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -45 },
    visible: {
      opacity: scrollY > 100 ? 0 : 1,
      y: scrollY > 100 ? -20 : 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-8 pb-12 md:pt-16 md:pb-24 overflow-hidden"
    >
      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <span className="text-sm text-gray-700 mb-2">Scroll to explore</span> */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your_business_video_id?autoplay=1"
                title="Saudi Ease Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>

        {animations.enableBackgroundEffects && (
          <>
            <motion.div
              className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-100/30 rounded-full blur-3xl"
              animate={
                animations.enableComplexAnimations
                  ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }
                  : { opacity: 1 }
              }
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>

            <motion.div
              className="absolute top-[60%] -left-[5%] w-[30%] h-[40%] bg-gradient-to-tr from-primary/10 to-purple-100/20 rounded-full blur-3xl"
              animate={
                animations.enableComplexAnimations
                  ? {
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }
                  : { opacity: 1 }
              }
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>

            <motion.div
              className="absolute top-[20%] left-[60%] w-[15%] h-[15%] bg-gradient-to-bl from-primary/15 to-amber-100/20 rounded-full blur-2xl"
              animate={
                animations.enableComplexAnimations
                  ? {
                      scale: [1, 1.15, 1],
                      opacity: [0.6, 0.8, 0.6],
                    }
                  : { opacity: 1 }
              }
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            ></motion.div>
          </>
        )}

        {animations.enableComplexAnimations && (
          <>
            <motion.div
              className="absolute top-1/4 right-1/4 w-24 h-24 border border-primary/10 rounded-full opacity-70"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            ></motion.div>

            <motion.div
              className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-primary/10 rounded-full opacity-50"
              animate={{ rotate: -360 }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            ></motion.div>
          </>
        )}

        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
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

      {animations.enableBackgroundEffects && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles}
        </div>
      )}

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative"
      >
        <div
          className={cn(
            "relative grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 xl:gap-16 items-center",
            isRTL && "lg:flex-row-reverse"
          )}
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>

          {animations.enableComplexAnimations && (
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
              <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent absolute left-1/4"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent absolute left-2/4"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent absolute left-3/4"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent absolute top-1/4"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent absolute top-2/4"></div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent absolute top-3/4"></div>
            </div>
          )}

          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100 md:flex hidden items-center gap-2 text-xs text-gray-600 z-10">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-1"></span>
            <span>
              {t("trustedBy", {
                defaultMessage: "Trusted by 500+ Saudi businesses",
              })}
            </span>
            <span className="mx-2">•</span>
            <span className="md:flex items-center hidden">
              <svg
                className="h-3 w-3 text-amber-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-3 w-3 text-amber-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-3 w-3 text-amber-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-3 w-3 text-amber-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-3 w-3 text-amber-500 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {t("rating", { defaultMessage: "4.9/5 Rating" })}
            </span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <svg
                className="h-3 w-3 text-primary mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {t("vision2030Partner", {
                defaultMessage: "Vision 2030 Partner",
              })}
            </span>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
              "flex flex-col space-y-6 lg:col-span-6",
              isRTL && "text-right"
            )}
          >
            <motion.div
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 text-primary text-sm font-medium mb-2 backdrop-blur-sm"
              )}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span
                className={cn(
                  "flex h-2 w-2 rounded-full bg-primary",
                  isRTL ? "ml-2" : "mr-2"
                )}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.span>
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-primary pr-1">
                {t("leadingDigitalSolutions", {
                  defaultMessage: "Leading Digital Solutions in Saudi Arabia",
                })}
              </span>
            </motion.div>

            <h1
              className={cn(
                "text-3xl md:text-5xl lg:text-6xl font-bold text-saudi-black leading-tight",
                isRTL && "text-right"
              )}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t("premierDigitalSolutions", {
                  defaultMessage: "Premier Digital Solutions",
                })}
              </motion.span>
              <motion.span
                className="relative inline-block rtl:mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t("forSaudiBusinesses", {
                    defaultMessage: "for Saudi Businesses",
                  })}
                </span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    inView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: 0, opacity: 0 }
                  }
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
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
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.svg>
              </motion.span>
              <motion.span
                className="block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {t("vision2030Aligned", {
                  defaultMessage: "Vision 2030 Aligned",
                })}
              </motion.span>
            </h1>

            <motion.p
              className={"text-lg text-gray-600 max-w-lg"}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t("heroDescription", {
                defaultMessage:
                  "We provide comprehensive digital transformation services across Saudi Arabia, helping businesses thrive in the digital landscape with tailored solutions that align with Saudi Vision 2030 and ZATCA compliance requirements.",
              })}
            </motion.p>

            <motion.div
              className={"flex flex-col sm:flex-row gap-4 pt-2"}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white group transition-all duration-300 transform hover:translate-y-[-2px] relative overflow-hidden"
                asChild
              >
                <Link
                  href="/schedule-consultation"
                  className={cn(
                    "flex items-center",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <span className="relative z-10">
                    {t("getStarted", { defaultMessage: "Get Started" })}
                  </span>
                  <ArrowRight
                    className={cn(
                      "h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10",
                      isRTL
                        ? "mr-2 rotate-180 group-hover:translate-x-[-0.25rem]"
                        : "ml-2"
                    )}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 transform hover:translate-y-[-2px]"
                asChild
              >
                <Link
                  href="/services"
                  className={cn(
                    "flex items-center",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  {t("exploreServices", { defaultMessage: "Explore Services" })}
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform group-hover:translate-x-1",
                      isRTL
                        ? "mr-2 rotate-180 group-hover:translate-x-[-0.25rem]"
                        : "ml-2"
                    )}
                  />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-saudi-black hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px]"
                onClick={() => setShowVideo(true)}
              >
                <div
                  className={cn(
                    "h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center",
                    isRTL ? "ml-2" : "mr-2"
                  )}
                >
                  <Play className="h-3 w-3 text-primary" />
                </div>
                {t("watchVideo", { defaultMessage: "Watch Video" })}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className={"mt-8 relative group hidden md:block"}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-blue-400/10 to-purple-400/10 rounded-lg opacity-70 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 via-blue-400/30 to-purple-400/20"></div>

                <div className="h-[90px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="text-center max-w-md mx-auto"
                    >
                      <motion.p
                        className={cn(
                          "text-gray-700 text-xs md:text-sm leading-relaxed line-clamp-3",
                          isRTL && "text-right"
                        )}
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        "
                        {t(`testimonial${currentTestimonial + 1}`, {
                          defaultMessage: testimonials[currentTestimonial].text,
                        })}
                        "
                      </motion.p>

                      <motion.div
                        className={cn(
                          "mt-2 flex items-center justify-center space-x-1.5",
                          isRTL && "flex-row-reverse space-x-reverse"
                        )}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <div className="relative h-6 w-6 rounded-full overflow-hidden border border-gray-100">
                          <OptimizedImage
                            src={
                              testimonials[currentTestimonial].image ||
                              "/placeholder.svg"
                            }
                            alt={t(
                              `testimonialAuthor${currentTestimonial + 1}`,
                              {
                                defaultMessage:
                                  testimonials[currentTestimonial].author,
                              }
                            )}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className={cn("text-left", isRTL && "text-right")}>
                          <p className="text-primary text-xs font-medium">
                            {t(`testimonialAuthor${currentTestimonial + 1}`, {
                              defaultMessage:
                                testimonials[currentTestimonial].author,
                            })}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {t(`testimonialCompany${currentTestimonial + 1}`, {
                              defaultMessage:
                                testimonials[currentTestimonial].company,
                            })}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex justify-center space-x-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-1 h-1 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-primary w-3"
                          : "bg-gray-200"
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative hidden md:block"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              {animations.enableComplexAnimations && (
                <div className="absolute inset-0 opacity-30">
                  <svg
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="grad1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#e63e65"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#e63e65"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <linearGradient
                        id="grad2"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#e63e65"
                          stopOpacity="0.2"
                        />
                        <stop
                          offset="100%"
                          stopColor="#e63e65"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grad1)" />
                    <rect width="100%" height="100%" fill="url(#grad2)" />

                    {isLoaded &&
                      animations.enableComplexAnimations &&
                      [...Array(3)].map((_, i) => (
                        <motion.circle
                          key={i}
                          cx={`${20 + i * 25}%`}
                          cy={`${20 + (i % 3) * 25}%`}
                          r="30"
                          fill="url(#grad1)"
                          animate={{
                            cx: [
                              `${20 + i * 25}%`,
                              `${25 + i * 25}%`,
                              `${20 + i * 25}%`,
                            ],
                            cy: [
                              `${20 + (i % 3) * 25}%`,
                              `${25 + (i % 3) * 25}%`,
                              `${20 + (i % 3) * 25}%`,
                            ],
                          }}
                          transition={{
                            duration: 8 + i,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                  </svg>
                </div>
              )}

              <OptimizedImage
                src={isRTL ? CONSTANT.images.heroAr : CONSTANT.images.hero}
                alt={t("heroImageAlt", {
                  defaultMessage:
                    "Digital transformation services for Saudi businesses",
                })}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                fadeIn={true}
                previewSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y4ZjhmOCIvPjwvc3ZnPg=="
              />

              {isLoaded && animations.enableComplexAnimations && (
                <>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute top-[10%] right-[10%] z-20"
                  >
                    <motion.div
                      className={cn(
                        "bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center space-x-2 w-48 transform rotate-3",
                        isRTL && "flex-row-reverse space-x-reverse"
                      )}
                      whileHover={{ y: -5, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          className="h-4 w-4 text-green-600"
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
                      <div className={cn("text-left", isRTL && "text-right")}>
                        <p className="text-xs font-medium">
                          {t("zatcaCompliant", {
                            defaultMessage: "ZATCA Compliant",
                          })}
                        </p>
                        <p className="text-xs text-gray-500">
                          {t("eInvoicingReady", {
                            defaultMessage: "E-invoicing ready",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="absolute bottom-[15%] left-[5%] z-20"
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 w-48 transform -rotate-2"
                      whileHover={{ y: -5, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={cn(
                          "flex justify-between items-center mb-2",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        <p className="text-xs font-medium">
                          {t("digitalGrowth", {
                            defaultMessage: "Digital Growth",
                          })}
                        </p>
                        <span className="text-xs text-green-600">+45%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1, delay: 1 }}
                          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-[40%] left-[10%] z-20"
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-3"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                          className="h-5 w-5 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] grid grid-cols-4 gap-3 z-30">
              {stats.map((stat, index) => (
                <CounterAnimation
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(HeroSection);
