"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { features } from "@/data/features"

export default function FeaturesShowcase() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[30%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Advanced Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-saudi-black mb-4">
            Cutting-Edge{" "}
            <span className="text-primary relative">
              Features
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our solutions leverage the latest technologies to provide Saudi businesses with powerful, secure, and
            scalable digital capabilities that drive growth and ensure compliance with local regulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-primary/10 rounded-full transform rotate-12 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Card content */}
                  <div className="relative p-6 z-10">
                    {/* Icon with gradient background */}
                    <div className="relative mb-5">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-lg blur-sm transform group-hover:scale-110 transition-all duration-300"></div>
                      <div className="relative h-14 w-14 rounded-lg bg-gradient-to-br from-primary/20 to-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        {
                          <feature.icon className="h-7 w-7 text-primary group-hover:text-primary/90 transition-colors duration-300" />
                        }
                      </div>
                    </div>

                    {/* Title with underline effect */}
                    <h3 className="text-xl font-semibold text-saudi-black mb-3 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                      <span className="block h-0.5 w-0 bg-primary group-hover:w-1/3 transition-all duration-500 mt-1"></span>
                    </h3>

                    {/* Description with improved typography */}
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Learn more link that appears on hover */}
                    <div className="mt-4 overflow-hidden h-0 group-hover:h-6 transition-all duration-300">
                      <a
                        href={`/features/${feature.id}`}
                        className="text-primary font-medium text-sm flex items-center"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-1 w-0 bg-gradient-to-r from-primary/80 to-primary/40 group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center md:text-left"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
            </motion.div>
          </div>

          <motion.div style={{ y }} className="relative hidden lg:block">
            <div className="relative h-[600px] w-full">
              <div className="absolute top-0 left-[10%] w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Digital services showcase"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-[15%] -left-[5%] h-[200px] w-[200px]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"></div>
                </div>
              </div>

              <div className="absolute bottom-[10%] right-[5%] h-[150px] w-[150px]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow-reverse"></div>
                </div>
              </div>

              {/* Feature cards */}
              <div className="absolute top-[10%] -right-[10%] bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-medium">SEO Optimized</p>
                </div>
                <p className="text-xs text-gray-600">Rank higher in search results with our SEO-focused development.</p>
              </div>

              <div className="absolute bottom-[20%] -left-[10%] bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Fast Loading</p>
                </div>
                <p className="text-xs text-gray-600">Optimized for speed to keep your visitors engaged.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

