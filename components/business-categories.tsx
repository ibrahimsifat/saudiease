"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { businessCategories } from "@/data/business-categories"

export default function BusinessCategories() {
  const [activeTab, setActiveTab] = useState("retail")

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-64 bg-primary/5 skew-y-3 transform translate-y-32"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Saudi Industry Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6">
            Tailored For{" "}
            <span className="text-primary relative inline-block">
              Saudi Industries
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We understand the unique challenges and opportunities across different Saudi business sectors. Our solutions
            are customized to meet industry-specific requirements and compliance standards, helping businesses thrive in
            the Kingdom's dynamic economy.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
            >
              <div className="text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
            >
              <div className="text-3xl font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
            >
              <div className="text-3xl font-bold text-primary mb-1">200+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-4 shadow-md border border-gray-100"
            >
              <div className="text-3xl font-bold text-primary mb-1">8+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </motion.div>
          </div>
        </motion.div>

        <Tabs defaultValue="retail" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 hide-scrollbar">
            <TabsList className="bg-white border border-gray-100 p-1.5 shadow-lg rounded-full">
              {businessCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-gray-50"
                >
                  {<category.icon className="h-5 w-5" />}
                  <span className="hidden sm:inline font-medium">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {businessCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="order-2 lg:order-1 lg:col-span-5">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                      <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                      {category.name} Solutions
                    </div>
                    <h3 className="text-2xl font-bold text-saudi-black mb-4">{category.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {category.services.map((service, index) => (
                        <div key={index} className="flex items-start group">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors duration-300">
                            <svg
                              className="h-3.5 w-3.5 text-primary"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-2.5 text-gray-700 group-hover:text-primary transition-colors duration-300">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Industry stats */}
                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Industry Insights</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <div className="w-2 h-8 bg-primary rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm text-gray-500">Market Size</div>
                            <div className="font-medium">
                              {category.id === "retail"
                                ? "SAR 375B"
                                : category.id === "healthcare"
                                  ? "SAR 185B"
                                  : category.id === "manufacturing"
                                    ? "SAR 420B"
                                    : category.id === "finance"
                                      ? "SAR 510B"
                                      : category.id === "government"
                                        ? "SAR 290B"
                                        : category.id === "education"
                                          ? "SAR 150B"
                                          : "SAR 200B+"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-8 bg-primary/60 rounded-full mr-3"></div>
                          <div>
                            <div className="text-sm text-gray-500">Growth Rate</div>
                            <div className="font-medium">
                              {category.id === "retail"
                                ? "8.5%"
                                : category.id === "healthcare"
                                  ? "12.3%"
                                  : category.id === "manufacturing"
                                    ? "7.2%"
                                    : category.id === "finance"
                                      ? "9.1%"
                                      : category.id === "government"
                                        ? "5.4%"
                                        : category.id === "education"
                                          ? "11.7%"
                                          : "8.0%+"}{" "}
                              YoY
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
                        size="lg"
                        asChild
                      >
                        <a href="#contact">Get Started</a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/5"
                        size="lg"
                        asChild
                      >
                        <a href={`/industries/${category.id}`}>Learn More</a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2 lg:col-span-7 relative">
                  <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>

                    {/* Floating info card */}
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-white/50">
                      <h4 className="font-bold text-primary mb-1">Vision 2030 Alignment</h4>
                      <p className="text-sm text-gray-700">
                        Our {category.name.toLowerCase()} solutions support Saudi Vision 2030 goals by enhancing
                        efficiency, digital transformation, and sustainable growth.
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/5 rounded-full"></div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 bg-white py-1.5 px-3 rounded-full shadow-md flex items-center">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                    <span className="text-sm font-medium">Saudi Certified</span>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

