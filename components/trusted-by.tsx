"use client";
import { CONSTANT } from "@/config/constants";
import { motion, useAnimation } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo } from "react";

const TrustedBy = () => {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const isRTL = locale === "ar";
  const t = useTranslations("trustedBy");

  // Trusted partners with more specific Saudi companies
  const partners = useMemo(
    () => [
      { name: "Right Visa", logo: CONSTANT.clients.rightVisa },
      { name: "Kullesh", logo: CONSTANT.clients.kullesh },
      { name: "UPF", logo: CONSTANT.clients.upf },
      { name: "Next Ride", logo: CONSTANT.clients.nextRide },
      { name: "ranchi-university", logo: CONSTANT.clients.ranchiUniversity },
      { name: "Sarah", logo: CONSTANT.clients.sarah },
      { name: "KIC Ads", logo: CONSTANT.clients.kic },
      { name: "24 Deals", logo: CONSTANT.clients.deals },
    ],
    []
  );

  // Double the partners array for seamless infinite scroll
  const allPartners = useMemo(() => [...partners, ...partners], [partners]);

  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();

  useEffect(() => {
    const animateRow1 = async () => {
      await controlsRow1.start({
        x: isRTL ? [0, 1920] : [0, -1920],
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      });
    };

    const animateRow2 = async () => {
      await controlsRow2.start({
        x: isRTL ? [0, -1920] : [0, 1920],
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      });
    };

    animateRow1();
    animateRow2();
  }, [controlsRow1, controlsRow2, isRTL]);

  return (
    <section
      aria-labelledby="trusted-by-heading"
      className="py-16 bg-gradient-to-r from-slate-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <header className="text-center md:mb-12 mb-4">
          <motion.h2
            id="trusted-by-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </header>

        {/* Auto-scrolling carousel - direction changes based on RTL */}
        <div
          role="list"
          aria-label="Trusted partners"
          className="relative overflow-hidden md:py-8 py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-slate-50 after:to-transparent rtl:before:left-auto rtl:before:right-0 rtl:before:bg-gradient-to-l rtl:before:from-slate-50 rtl:before:to-transparent rtl:after:right-auto rtl:after:left-0 rtl:after:bg-gradient-to-r rtl:after:from-slate-50 rtl:after:to-transparent"
        >
          {/* First row - scrolling direction based on RTL */}
          <motion.div
            role="listitem"
            className="flex items-center md:mb-10 mb-2 md:gap-16 gap-4"
            animate={controlsRow1}
          >
            {allPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group"
                role="listitem"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative md:p-5 p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 md:h-24 h-14 md:w-40 w-20 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} - ${t("partnerAltText")}`}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                    priority={index < 4} // Prioritize loading above-the-fold images
                    loading={index >= 4 ? "lazy" : "eager"} // Lazy load off-screen images
                  />
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Second row - scrolling in opposite direction */}
          <motion.div
            role="listitem"
            className="flex items-center md:gap-16 gap-4"
            animate={controlsRow2}
          >
            {allPartners.reverse().map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group"
                role="listitem"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative md:p-5 p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 md:h-24 h-14 md:w-40 w-20 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={`${partner.name} - ${t("partnerAltText")}`}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                    loading="lazy" // Lazy load off-screen images
                  />
                  <div className="absolute -bottom-2 left-0 right-0 mx-auto w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <footer className="text-center mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-500 max-w-xl mx-auto"
          >
            {t("footer")}
          </motion.p>
        </footer>
      </div>
    </section>
  );
};

export default React.memo(TrustedBy);
