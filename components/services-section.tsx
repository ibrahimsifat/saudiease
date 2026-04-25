"use client";

import { Locale } from "@/config/i18n";
import { getServices } from "@/data/services/index";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCheck,
  Palette,
  QrCode,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

const RenderVisual = ({ id }: { id: string }) => {
  switch (id) {
    case "website-design-development":
      return (
        <div className="w-full h-full flex flex-col font-mono text-xs sm:text-sm bg-[#050505]">
          <div className="flex border-b border-white/10 shrink-0">
            <div className="px-4 py-3 bg-white/5 border-r border-white/10 text-gray-300 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" /> page.tsx
            </div>
            <div className="px-4 py-3 text-gray-600 flex items-center gap-2">
              terminal
            </div>
          </div>
          <div className="p-5 sm:p-8 flex-1 text-gray-400 leading-relaxed overflow-hidden relative">
            <div className="z-10 relative space-y-1">
              <div><span className="text-purple-400">import</span> {'{'} motion {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'framer-motion'</span>;</div>
              <div className="pb-4"><span className="text-purple-400">import</span> {'{'} AramcoAPI {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@jubail/industrial-core'</span>;</div>
              
              <div><span className="text-blue-400">export default function</span> <span className="text-yellow-200">IndustrialPlatform</span>() {'{'}</div>
              <div><span className="ml-4 text-purple-400">return</span> (</div>
              <div><span className="ml-8 text-gray-500">&lt;!-- Real-time Saudi factory metrics sync --&gt;</span></div>
              <div><span className="ml-8">&lt;</span><span className="text-blue-300">DashboardLayout</span><span className="ml-0">&gt;</span></div>
              <div><span className="ml-12">&lt;</span><span className="text-blue-300">LiveMetricsGrid</span><span className="text-blue-200"> region</span>=<span className="text-green-400">"Eastern Province"</span><span className="ml-0"> /&gt;</span></div>
              <div><span className="ml-12">&lt;</span><span className="text-blue-300">AramcoSyncStatus</span><span className="text-blue-200"> status</span>=<span className="text-green-400">"Online"</span><span className="ml-0"> /&gt;</span></div>
              <div><span className="ml-8">&lt;/</span><span className="text-blue-300">DashboardLayout</span><span className="ml-0">&gt;</span></div>
              <div><span className="ml-4">);</span></div>
              <div><span>{'}'}</span></div>
            </div>
            <div className="absolute top-1/2 right-4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>
      );

    case "zatca-e-invoicing":
      return (
        <div className="w-full h-full bg-[#050505] p-5 sm:p-8 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm md:text-base font-semibold text-gray-200">Phase 2 Invoices</div>
            <div className="px-3 py-1.5 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ZATCA CONNECTED
            </div>
          </div>
          
          <div className="flex flex-col gap-3 flex-1 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-200 text-sm font-medium">INV-{1000 + i * 23}</div>
                    <div className="text-gray-500 text-xs">Fatoorah Cleared</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <div className="text-gray-200 text-sm font-mono font-medium">SAR {(45000 * i).toLocaleString()}</div>
                    <div className="text-green-400 text-xs mt-0.5">Verified</div>
                  </div>
                  <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <QrCode className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      );

    case "company-profile-branding":
      return (
        <div className="w-full h-full bg-[#050505] p-5 sm:p-8 flex flex-col gap-8 relative overflow-hidden">
          <div className="flex items-center justify-between relative z-10">
             <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                 <span className="text-sm text-gray-300 font-semibold uppercase tracking-wider">Brand System</span>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-6 relative z-10 w-full max-w-md">
             <div className="space-y-4">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Industrial Palette</div>
                <div className="flex flex-col gap-3">
                   <div className="h-10 rounded-lg bg-[#ffffff] flex items-center px-4 shadow-sm">
                      <span className="text-xs font-mono text-black font-bold">#FFFFFF</span>
                   </div>
                   <div className="h-10 rounded-lg bg-[#0055ff] flex items-center px-4 shadow-sm">
                      <span className="text-xs font-mono text-white font-bold">#0055FF</span>
                   </div>
                   <div className="h-10 rounded-lg bg-[#111111] border border-white/20 flex items-center px-4 shadow-sm">
                      <span className="text-xs font-mono text-white font-bold">#111111</span>
                   </div>
                </div>
             </div>
             <div className="space-y-4">
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider">Typography</div>
                <div className="flex flex-col gap-4 bg-white/5 p-4 rounded-xl border border-white/10 h-full">
                   <div className="text-4xl font-bold tracking-tight text-white font-sans">Aa</div>
                   <div className="text-xs text-gray-400 leading-relaxed font-sans">Building the future of industrial services in Jubail.</div>
                </div>
             </div>
          </div>
          
          <div className="absolute bottom-6 right-6 left-6 h-28 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-blue-500/20 border border-white/10 p-5 z-10 flex flex-col justify-center gap-3">
             <div className="w-2/3 h-4 bg-white/20 rounded-md" />
             <div className="w-5/6 h-2 bg-white/10 rounded-md" />
             <div className="w-1/2 h-2 bg-white/10 rounded-md" />
          </div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        </div>
      );

    case "aramco-sabic-vendor-code":
      return (
        <div className="w-full h-full bg-[#050505] p-5 sm:p-8 flex flex-col gap-6 relative overflow-hidden">
           <div className="flex items-center gap-4 relative z-10 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                 <FileCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                 <div className="text-base sm:text-lg font-bold text-white">Vendor Prequalification</div>
                 <div className="text-xs text-gray-400 font-mono mt-1">ID: VQ-899120 &bull; AL JUBAIL</div>
              </div>
           </div>

           <div className="flex-1 flex flex-col gap-3 sm:gap-4 relative z-10 max-w-md w-full">
              <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                 <span className="text-sm text-emerald-100 font-medium tracking-wide">Aramco Registration</span>
                 <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
                 <span className="text-sm text-emerald-100 font-medium tracking-wide">SABIC Vendor Code</span>
                 <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5">
                 <span className="text-sm text-gray-300 font-medium tracking-wide">Royal Commission</span>
                 <div className="w-5 h-5 rounded-full border-2 border-primary/50 border-t-primary animate-spin" />
              </div>
           </div>
           
           {/* Decorative elements */}
           <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[2px] h-3/4 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:flex flex-col items-center justify-start py-8 gap-16">
               <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
               <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
               <div className="w-2 h-2 rounded-full bg-primary/50" />
           </div>

           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        </div>
      );

    default:
      return (
         <div className="w-full h-full bg-[#050505] flex items-center justify-center p-6 text-center">
             <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mb-6 mx-auto border border-white/10">
                <Sparkles className="w-10 h-10 text-primary" />
             </div>
             <p className="text-base font-bold text-gray-300 tracking-widest uppercase">Premium Solution</p>
         </div>
      );
  }
};

export default function ServicesSection({ locale }: { locale: Locale }) {
  const t = useTranslations("services");
  const services = getServices(locale as Locale);
  const isRTL = locale === "ar";
  
  // Select top 4 premium services to feature on the home page
  const featuredServices = useMemo(() => {
    const featuredIds = [
      "website-design-development",
      "zatca-e-invoicing",
      "company-profile-branding",
      "aramco-sabic-vendor-code",
    ];
    return featuredIds
      .map(id => services.find(s => s.id === id))
      .filter(Boolean) as typeof services;
  }, [services]);

  const [activeServiceId, setActiveServiceId] = useState(
    featuredServices[0]?.id || ""
  );

  // Auto-rotate
  useEffect(() => {
    if (!featuredServices.length) return;
    const timer = setInterval(() => {
      setActiveServiceId((currentId) => {
        const index = featuredServices.findIndex((s) => s.id === currentId);
        const nextIndex = (index + 1) % featuredServices.length;
        return featuredServices[nextIndex].id;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredServices]);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white border-t border-gray-100 pointer-events-auto">
      {/* Vercel-style Base Grids & Glows */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"
        style={{ 
           maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 20%, transparent 80%)", 
           WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, #000 20%, transparent 80%)" 
        }}
      />
      <div className="absolute top-1/4 right-0 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] bg-primary/10 blur-[150px] rounded-[100%] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-blue-500/10 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-[1400px]">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Top: Text & Interactive List */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className={cn("w-full lg:col-span-5 flex flex-col space-y-8 lg:pr-8", isRTL && "lg:pr-0 lg:pl-8 text-right")}
          >
            <div className={cn("space-y-6", isRTL && "flex flex-col items-end")}>
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/10 bg-primary/5 backdrop-blur-md text-primary text-[10px] sm:text-xs font-semibold tracking-widest uppercase shadow-sm">
                <Sparkles className={cn("w-3.5 h-3.5 mr-2 text-primary", isRTL && "mr-0 ml-2")} />
                {t("subtitle")}
              </div>

              <h2 className={cn(
                "text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600 leading-[1.15] tracking-tight",
                isRTL && "font-cairo"
              )}>
                {t("title")}
              </h2>

              <p className="text-base sm:text-lg text-gray-600 font-medium max-w-lg leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Services List for Desktop/Mobile (Stacks on top on mobile naturally) */}
            <div className="grid gap-3 pt-4 w-full">
              {featuredServices.map((service) => {
                const isActive = activeServiceId === service.id;
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={cn(
                      "group relative flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden text-left w-full",
                      isActive 
                        ? "bg-white border border-gray-200 shadow-xl shadow-gray-200/50" 
                        : "hover:bg-gray-50 border border-transparent"
                    )}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeServiceIndicator"
                        className={cn("absolute inset-y-0 w-1 bg-primary", isRTL ? "right-0" : "left-0")}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-500 shrink-0 relative z-10",
                      isActive 
                        ? "bg-primary/10 text-primary border-primary/20 shadow-sm" 
                        : "bg-gray-50 text-gray-400 group-hover:text-gray-600 border-gray-100"
                    )}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className={cn("flex-1 relative z-10", isRTL && "text-right")}>
                      <h3 className={cn("text-base font-bold transition-colors duration-500", isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900")}>
                        {service.title}
                      </h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 4 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="text-sm text-gray-500 overflow-hidden"
                          >
                            {service.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={cn("pt-4", isRTL && "flex justify-end")}>
              <Link 
                href="/services" 
                className="inline-flex h-12 sm:h-14 items-center justify-center rounded-full bg-gray-900 px-8 text-sm sm:text-base font-bold text-white transition-colors hover:bg-black shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] group/btn"
              >
                {t("viewAll")}
                <ArrowRight className={cn("ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1", isRTL && "ml-0 mr-2 rotate-180 group-hover/btn:-translate-x-1")} />
              </Link>
            </div>
          </motion.div>

          {/* Right / Bottom: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:col-span-7 relative min-h-[400px] sm:min-h-[450px] lg:min-h-[600px] flex items-center justify-center lg:pl-4"
            style={{ perspective: 1500 }}
          >
            {/* The Visual Container */}
            <div className="relative w-full max-w-[800px] aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-2xl sm:rounded-3xl border border-gray-800 bg-[#0a0a0a] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col group/visualizer transition-transform duration-1000 z-10">
              
              {/* Fake Mac Header */}
              <div className="h-10 border-b border-gray-800 bg-white/[0.02] flex items-center px-4 sm:px-5 gap-2 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-700 group-hover/visualizer:bg-red-400 transition-colors duration-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-700 group-hover/visualizer:bg-yellow-400 transition-colors duration-500 delay-75" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-700 group-hover/visualizer:bg-green-400 transition-colors duration-500 delay-150" />
                
                <div className="ml-4 flex-1 flex justify-center opacity-50">
                    <div className="h-5 w-40 sm:w-64 bg-white/5 border border-white/5 rounded flex items-center justify-center">
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-gray-500">saudiease.com / preview</span>
                    </div>
                </div>
              </div>

              {/* Dynamic Internal Interface */}
              <div className="flex-1 relative bg-[#050505] overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeServiceId}
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <RenderVisual id={activeServiceId} />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-b-2xl sm:rounded-b-3xl" />
              </div>
            </div>

            {/* Glowing Accent Orbs for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0" />
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
