"use client";

import OptimizedImage from "@/components/optimized-image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import {
  motion,
} from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Globe,
  Play,
  Settings,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { memo, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatBadge = memo(({ icon: Icon, label, value, delay }: { icon: any, label: string, value: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-white/10 hover:bg-white/[0.06] transition-colors pointer-events-auto"
  >
    <div className="p-2 bg-white/5 rounded-xl border border-white/5 shadow-inner">
      <Icon className="w-4 h-4 text-primary" />
    </div>
    <div className="flex flex-col">
      <span className="text-[9px] text-gray-500 font-medium uppercase tracking-widest">{label}</span>
      <span className="text-xs sm:text-sm font-semibold text-gray-200 tracking-wide">{value}</span>
    </div>
  </motion.div>
));

StatBadge.displayName = "StatBadge";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-14 pb-14 lg:pt-20 lg:pb-20 overflow-hidden bg-[#030303]"
    >
      {/* Vercel-style Base Grids & Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        style={{ 
           maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 20%, transparent 80%)", 
           WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 20%, transparent 80%)" 
        }}
      />
      <div className="absolute top-[-10%] left-1/2 -translateX-1/2 w-full max-w-[800px] h-[500px] bg-primary/20 blur-[140px] rounded-[100%] pointer-events-none" />

      <div
        className="container mx-auto px-4 sm:px-6 relative z-10 w-full"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            ref={ref}
            className={cn("flex flex-col space-y-8 lg:col-span-6 xl:col-span-5", isRTL && "items-end text-right")}
          >
            <div className={cn("space-y-5 lg:space-y-6", isRTL && "text-right")}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn(
                  "inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-xs font-medium tracking-wider uppercase shadow-2xl"
                )}
              >
                <Sparkles className={cn("w-3.5 h-3.5 mr-2 text-primary", isRTL && "mr-0 ml-2")} />
                {t("leadingDigitalSolutions")}
              </motion.div>

              <h1 className={cn(
                "text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-gray-500 leading-[1.1] tracking-tight pb-2 pt-2",
                isRTL && "font-cairo"
              )}>
                {t("premierDigitalSolutions")}{" "}
                <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 pb-2">
                  {t("forSaudiBusinesses")}
                </span>
                <span className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-normal text-gray-500 block mt-4 sm:mt-6">
                  {t("vision2030Aligned")}
                </span>
              </h1>

              <p className={cn("text-base sm:text-lg text-gray-400 font-light max-w-xl leading-relaxed", isRTL ? "text-right" : "")}>
                {t("heroDescription")}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 sm:pt-6">
              <Link 
                href="/schedule-consultation" 
                className="h-12 sm:h-14 px-6 sm:px-8 bg-white text-black rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] group/btn"
              >
                {t("getStarted")}
                <ArrowRight className={cn("w-4 h-4 transition-transform group-hover/btn:translate-x-1", isRTL && "rotate-180 group-hover/btn:-translate-x-1")} />
              </Link>

              <Link 
                href="/services" 
                className="h-12 sm:h-14 px-6 sm:px-8 border border-white/15 bg-white/[0.02] text-white rounded-full font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/5 transition-colors group/sec"
              >
                {t("exploreServices")}
                <ChevronRight className={cn("w-4 h-4 transition-transform group-hover/sec:translate-x-1 text-gray-400", isRTL && "rotate-180 group-hover/sec:-translate-x-1")} />
              </Link>

              <button
                onClick={() => setShowVideo(true)}
                className="h-12 sm:h-14 flex items-center gap-3 px-4 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 text-primary ml-0.5" fill="currentColor" />
                </div>
                <span className="font-semibold text-xs tracking-widest uppercase">{t("watchVideo")}</span>
              </button>
            </div>

            {/* Quick Stats/Badges */}
            <div className="flex flex-wrap gap-3 pt-6 lg:pt-10">
              <StatBadge icon={ShieldCheck} label="Compliance" value="ZATCA Ready" delay={0.6} />
              <StatBadge icon={Globe} label="Support" value="Bilingual Ready" delay={0.7} />
              <StatBadge icon={Settings} label="System" value="Gulf Orbit EMS" delay={0.8} />
            </div>
          </motion.div>

          {/* Right Visual SaaS Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={{ perspective: 1500 }}
            className="relative lg:col-span-6 xl:col-span-7 flex items-center justify-center xl:pl-8 w-full mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[800px] group">
              <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_80px_rgba(var(--primary),0.15)] overflow-hidden">
                {/* Fake Mac/Browser Header */}
                <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-5 gap-2">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20 group-hover:bg-red-400 transition-colors" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20 group-hover:bg-yellow-400 transition-colors" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white/20 group-hover:bg-green-400 transition-colors" />
              </div>
              
              {/* Content Viewport */}
              <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10] w-full bg-black overflow-hidden">
                 <div className="absolute inset-0 bg-[#050505]/40 mix-blend-overlay z-10 pointer-events-none" />
                 <OptimizedImage 
                    src="/images/hero.webp" 
                    fill 
                    alt={t("heroImageAlt") || "Dashboard Preview"}
                    className="object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out" 
                    priority
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 z-10 pointer-events-none" />
              </div>
            </div>

            {/* Floating Glass Metric Panel 1 */}
              <motion.div 
                animate={{ y: [0, -8, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className={cn("absolute top-16 sm:top-24 p-3 sm:p-5 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-2 z-20", isRTL ? "-left-2 sm:-left-8" : "-right-2 sm:-right-8")}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
                   <span className="text-[9px] sm:text-[10px] text-gray-400 font-mono tracking-widest uppercase">System Status</span>
                </div>
                <div className="flex justify-between items-end gap-6 sm:gap-10">
                  <span className="text-gray-100 font-semibold text-xs sm:text-sm">ERP Sync Line</span>
                  <span className="text-green-400 text-xs sm:text-sm font-mono font-bold">100%</span>
                </div>
                <div className="h-1 sm:h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-1">
                   <div className="h-full w-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                </div>
              </motion.div>

              {/* Floating Glass Metric Panel 2 */}
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className={cn("absolute bottom-8 sm:bottom-16 p-3 sm:p-4 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3 z-20", isRTL ? "-right-2 sm:-right-8" : "-left-2 sm:-left-8")}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary shadow-inner">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-100">ZATCA Verified</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-0.5">Phase 2 Compliant</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Background (unchanged largely, just styled darker) */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl" onClick={() => setShowVideo(false)}>
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative w-full max-w-5xl aspect-video bg-[#050505] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={e => e.stopPropagation()}
          >
             <div className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#0a0a0a]">
                <p className="font-mono text-sm uppercase tracking-widest">Video Player Container</p>
             </div>
             <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors text-white backdrop-blur-md"
            >
              <div className="w-3 h-0.5 bg-white rotate-45 absolute" />
              <div className="w-3 h-0.5 bg-white -rotate-45 absolute" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
