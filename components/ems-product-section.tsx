"use client";

import OptimizedImage from "@/components/optimized-image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Database,
  FileText,
  Users
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function EMSProductSection() {
  const t = useTranslations("ems");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const features = [
    {
      icon: Calendar,
      title: t("features.attendance"),
    },
    {
      icon: CheckCircle2,
      title: t("features.timesheet"),
    },
    {
      icon: Users,
      title: t("features.documents"),
    },
    {
      icon: FileText,
      title: t("features.payroll"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#030303] pointer-events-auto">
      {/* Vercel-style Grids & Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        style={{ 
           maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 20%, transparent 80%)", 
           WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 20%, transparent 80%)" 
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn("w-full lg:col-span-5 flex flex-col space-y-8", isRTL && "text-right")}
          >
            <div className={cn("flex flex-col items-start gap-4", isRTL && "items-end")}>
              {/* Top Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-gray-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-2xl">
                <Database className={cn("w-3.5 h-3.5 mr-2 text-primary", isRTL && "mr-0 ml-2")} />
                {t("sectionLabel")}
              </div>
              
              {/* Title */}
              <h2 className={cn(
                "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-gray-500 leading-[1.1] tracking-tight",
                isRTL && "font-cairo"
              )}>
                {t("title")}
              </h2>

              {/* Deployment Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                Cloud ERP &bull; Industrial Specialization
              </div>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
                {t("description")}
              </p>
            </div>
            
            {/* Features Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default",
                      isRTL && "flex-row-reverse text-right"
                    )}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-primary/20 bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-gray-200">
                      {feature.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA */}
            <div className={cn("pt-4", isRTL && "flex justify-end")}>
              <Link 
                href="/contact" 
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-white px-8 text-sm sm:text-base font-bold text-black transition-colors hover:bg-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.1)] group/btn"
              >
                {t("cta")}
                <ArrowRight className={cn("ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1", isRTL && "ml-0 mr-2 rotate-180 group-hover/btn:-translate-x-1")} />
              </Link>
            </div>
          </motion.div>
          
          {/* RIGHT: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:col-span-7 relative flex items-center justify-center perspective-[1500px]"
          >
            {/* Primary Visual Container */}
            <div className="relative w-full max-w-[800px] aspect-[4/3] sm:aspect-video lg:aspect-[16/10] rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl flex flex-col group/dashboard">
              
              {/* Fake Mac Header */}
              <div className="h-8 sm:h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover/dashboard:bg-red-400 transition-colors duration-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover/dashboard:bg-yellow-400 transition-colors duration-500 delay-75" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover/dashboard:bg-green-400 transition-colors duration-500 delay-150" />
                <div className="ml-4 flex-1 flex justify-center opacity-40">
                  <div className="h-5 w-32 sm:w-48 bg-white/5 rounded flex items-center justify-center">
                      <span className="text-[8px] sm:text-[9px] font-mono tracking-widest uppercase text-gray-400">gulf-orbit-ems</span>
                  </div>
                </div>
              </div>
              
              {/* The Provided Dashboard Image */}
              <div className="flex-1 relative bg-black overflow-hidden group/image">
                <div className="absolute inset-0 bg-[#050505]/20 mix-blend-overlay z-10 pointer-events-none" />
                <OptimizedImage
                  src="/images/products/ems_dashboard.png"
                  alt="Gulf Orbit EMS Dashboard Interface"
                  fill
                  className="object-cover object-top opacity-60 group-hover/image:opacity-90 group-hover/image:scale-105 transition-all duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 z-10 pointer-events-none" />
              </div>

            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none z-0" />

            {/* Floating Glass Panel 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                "absolute top-8 sm:top-16 z-20 bg-[#111111]/90 backdrop-blur-xl p-3 sm:p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 sm:gap-4",
                isRTL ? "-right-2 sm:-right-8 lg:-right-12" : "-left-2 sm:-left-8 lg:-left-12"
              )}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-400" />
              </div>
              <div className={cn("text-left", isRTL && "text-right")}>
                <p className="text-xs sm:text-sm font-bold text-white">500+ Staff Managed</p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest font-mono mt-0.5">Real-time Site Sync</p>
              </div>
            </motion.div>
            
            {/* Floating Glass Panel 2 */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={cn(
                "absolute bottom-8 sm:bottom-16 z-20 bg-[#111111]/90 backdrop-blur-xl p-3 sm:p-5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 sm:gap-4",
                isRTL ? "-left-2 sm:-left-8 lg:-left-12" : "-right-2 sm:-right-8 lg:-right-12"
              )}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
              </div>
              <div className={cn("text-left", isRTL && "text-right")}>
                <p className="text-xs sm:text-sm font-bold text-white">WPS Payroll Ready</p>
                <p className="text-[9px] sm:text-[10px] text-emerald-400 uppercase tracking-widest font-mono mt-0.5">100% Error-Free</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
