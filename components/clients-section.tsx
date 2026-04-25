"use client";

import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useMemo, useRef } from "react";
import OptimizedImage from "./optimized-image";
import clientsData from "@/data/clients.json";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Client {
  name: string;
  logo: string;
  homepageScreenshot: string;
  websiteUrl: string;
}

const ClientCard = ({ client, isRTL }: { client: Client; isRTL: boolean }) => {
  return (
    <motion.a
      href={client.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col w-[240px] sm:w-[280px] lg:w-[340px] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 px-3 py-3 sm:px-4 sm:py-3.5 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
        <div className="flex items-center gap-2 sm:gap-3">
           <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center p-1.5 border border-white/5 shadow-inner">
              <OptimizedImage
                src={client.logo}
                alt={`${client.name} logo`}
                width={20}
                height={20}
                className="object-contain filter brightness-0 invert opacity-50 group-hover:filter-none group-hover:opacity-100 transition-all duration-500"
              />
           </div>
           <div className="flex flex-col">
             <h3 className="text-white/90 font-bold text-xs sm:text-sm leading-none mb-1 group-hover:text-primary transition-colors">
                {client.name}
             </h3>
             <p className="text-white/30 text-[9px] sm:text-[10px] leading-none font-light tracking-wider">
                {client.websiteUrl.replace("https://", "").replace("www.", "")}
             </p>
           </div>
        </div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-45 shrink-0">
           <ArrowUpRight size={14} className={cn(isRTL && "-scale-x-100 group-hover:scale-x-[-1]")} />
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden z-10 bg-black">
        <div className="absolute inset-0 bg-[#050505]/60 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
        <OptimizedImage
          src={client.homepageScreenshot}
          alt={`${client.name} website preview`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
      </div>
    </motion.a>
  );
};

const SliderSet = ({ clients, isRTL }: { clients: Client[], isRTL: boolean }) => (
  // Padding at the end of exactly one set ensures seamless joining with the next set
  <div className={cn("flex shrink-0 gap-4 sm:gap-6 md:gap-8", isRTL ? "pl-4 sm:pl-6 md:pl-8" : "pr-4 sm:pr-6 md:pr-8")}>
    {clients.map((client, index) => (
      <ClientCard key={`client-${index}`} client={client} isRTL={isRTL} />
    ))}
  </div>
);

const SliderTrack = ({ clients, isRTL, reverse = false, speed = 25 }: { clients: Client[], isRTL: boolean, reverse?: boolean, speed?: number }) => {
  let animationName = "";
  if (isRTL) {
    animationName = reverse ? "marquee-right-rtl" : "marquee-left-rtl";
  } else {
    animationName = reverse ? "marquee-right" : "marquee-left";
  }

  return (
    <div className="flex overflow-hidden py-3 sm:py-4 select-none hover:cursor-grab active:cursor-grabbing group w-full">
      <div 
        className="flex shrink-0 w-max group-hover:[animation-play-state:paused]"
        style={{ animation: `${animationName} ${speed}s linear infinite` }}
      >
        <SliderSet clients={clients} isRTL={isRTL} />
        <SliderSet clients={clients} isRTL={isRTL} />
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "ar";
  const t = useTranslations("trustedBy");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "50px" });

  return (
    <section className="py-12 md:py-20 bg-[#030303] relative overflow-hidden border-y border-white/5">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-right {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @keyframes marquee-left-rtl {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(50%, 0, 0); }
        }
        @keyframes marquee-right-rtl {
          0% { transform: translate3d(50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
      
      {/* High-tech Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"
        style={{ 
           maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 90%)", 
           WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 90%)" 
        }}
      />
      <div className="absolute top-1/2 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 -ml-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-[100px] opacity-40 -translate-y-1/2 -mr-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-8 md:mb-12 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 backdrop-blur-md shadow-lg shadow-primary/10"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" />
            {t("sectionLabel")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 mb-2 sm:mb-3 leading-normal tracking-tight px-2 pb-4 pt-2"
          >
            {t("title")}
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-gray-400 text-sm sm:text-base md:text-lg font-light max-w-xl leading-relaxed px-2"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative z-10 mt-4 sm:mt-6" ref={containerRef}>
        <SliderTrack clients={clientsData as Client[]} isRTL={isRTL} speed={15} />
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12 text-center relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 sm:gap-4"
        >
          <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-white/20"></span>
          <span className="text-white/30 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
            {t("footer")}
          </span>
          <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-white/20"></span>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
