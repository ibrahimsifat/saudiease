"use client";

import { processSteps } from "@/data/process-steps";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-saudi-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Our Proven Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-saudi-white mb-4">
            Streamlined{" "}
            <span className="text-primary relative">
              Process
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
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our systematic approach ensures efficient delivery of high-quality
            digital solutions tailored to the Saudi market, with clear
            communication and transparency at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                {<step.icon className="h-6 w-6 text-white" />}
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="text-primary mr-2">{index + 1}.</span>{" "}
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl transition-all duration-300 w-0 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
