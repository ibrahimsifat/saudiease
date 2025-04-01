"use client";

import { processSteps } from "@/data/process-steps";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import React from "react";

// Dynamically import motion to reduce initial bundle size
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const ProcessStepCard = React.memo(({ step, index, locale }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="absolute -top-5 ltr:left-6 rtl:right-6 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
        {<step.icon className="h-6 w-6 text-white" />}
      </div>
      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <span className="text-primary ltr:mr-2 rtl:ml-2">{index + 1}.</span>{" "}
          {step.title[locale] || step.title.ar}
        </h3>
        <p className="text-gray-300">
          {step.description[locale] || step.description.ar}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl transition-all duration-300 w-0 group-hover:w-full"></div>
    </MotionDiv>
  );
});

ProcessStepCard.displayName = "ProcessStepCard";

export default function ProcessSection() {
  const t = useTranslations("process");
  const params = useParams();
  const locale = (params?.locale as string) || "en";

  return (
    <section className="py-16 bg-gradient-to-br from-saudi-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 rtl:flex-row-reverse">
            <span className="flex h-2 w-2 rounded-full bg-primary ltr:mr-2 rtl:ml-2"></span>
            {t("sectionLabel")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title").split(" ")[0]}{" "}
            <span className="text-primary relative">
              {t("title").split(" ")[1]}
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
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.id}
              step={step}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
