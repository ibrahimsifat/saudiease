"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { businessCategories, type BusinessCategory } from "@/data/business-categories"
import { ArrowRight, CheckCircle2, Users, TrendingUp, BarChart3, Zap, Award, Clock } from "lucide-react"

// Define the case studies type
type CaseStudy = {
  id: string
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

// Define the FAQ type
type FAQ = {
  question: string
  answer: string
}

// Generate case studies based on the industry
const generateCaseStudies = (industry: BusinessCategory): CaseStudy[] => {
  return [
    {
      id: `${industry.id}-case-1`,
      title: `Leading ${industry.name} Business Transformation`,
      client: `Major ${industry.name} Provider in Riyadh`,
      challenge: `A leading ${industry.name.toLowerCase()} business in Saudi Arabia was struggling with outdated systems that couldn't keep pace with the rapidly evolving market demands and Vision 2030 requirements.`,
      solution: `We implemented a comprehensive digital transformation strategy, including ${industry.services.join(", ")}, tailored specifically to their business needs and aligned with Saudi regulations.`,
      results: [
        "50% increase in operational efficiency",
        "35% reduction in processing time",
        "Seamless compliance with Saudi regulations",
        "Improved customer satisfaction scores by 40%",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: `${industry.id}-case-2`,
      title: `${industry.name} Digital Innovation`,
      client: `Growing ${industry.name} Company in Jeddah`,
      challenge: `A mid-sized ${industry.name.toLowerCase()} company needed to modernize their operations while maintaining compliance with Saudi regulations and meeting the expectations of increasingly tech-savvy customers.`,
      solution: `We developed a custom digital solution that integrated ${industry.services[0]} and ${industry.services[1]}, providing a seamless experience for both customers and staff while ensuring full compliance.`,
      results: [
        "200% increase in online engagement",
        "45% growth in revenue within 6 months",
        "Reduced operational costs by 30%",
        "Expanded market reach across Saudi Arabia",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]
}

// Generate FAQs based on the industry
const generateFAQs = (industry: BusinessCategory): FAQ[] => {
  return [
    {
      question: `What digital solutions are most important for the ${industry.name.toLowerCase()} sector in Saudi Arabia?`,
      answer: `For the ${industry.name.toLowerCase()} sector in Saudi Arabia, the most critical digital solutions include ${industry.services.join(", ")}. These solutions help businesses meet the unique challenges of the Saudi market while aligning with Vision 2030 goals for digital transformation.`,
    },
    {
      question: `How can ${industry.name.toLowerCase()} businesses comply with Saudi regulations through digital solutions?`,
      answer: `Our digital solutions for the ${industry.name.toLowerCase()} sector are built with Saudi regulations in mind, including ZATCA e-invoicing requirements, data localization laws, and industry-specific compliance needs. We ensure all implementations meet current regulations while being adaptable to future changes.`,
    },
    {
      question: `What is the typical implementation timeline for ${industry.name.toLowerCase()} digital solutions?`,
      answer: `Implementation timelines vary based on the specific needs and scale of your ${industry.name.toLowerCase()} business. Typically, our solutions can be implemented within 2-4 months, with phased approaches available for larger organizations to minimize disruption to ongoing operations.`,
    },
    {
      question: `How do your solutions support Vision 2030 goals for the ${industry.name.toLowerCase()} sector?`,
      answer: `Our digital solutions for the ${industry.name.toLowerCase()} sector directly support Vision 2030 by enabling digital transformation, improving operational efficiency, supporting economic diversification, and enhancing the overall customer experience. We align our implementations with the specific Vision 2030 initiatives relevant to your industry.`,
    },
    {
      question: `What ongoing support do you provide for ${industry.name.toLowerCase()} businesses after implementation?`,
      answer: `We provide comprehensive support including 24/7 technical assistance, regular updates to keep your systems current with Saudi regulations, performance optimization, staff training, and strategic consultations to ensure your digital solutions continue to meet your evolving business needs.`,
    },
  ]
}

// Generate key benefits based on the industry
const generateKeyBenefits = (industry: BusinessCategory) => {
  return [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Increased Efficiency",
      description: `Streamline ${industry.name.toLowerCase()} operations with automated workflows and integrated systems tailored to Saudi business practices.`,
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Enhanced Customer Experience",
      description: `Deliver exceptional service through digital channels designed specifically for Saudi ${industry.name.toLowerCase()} customers.`,
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Data-Driven Insights",
      description: `Make informed decisions with analytics solutions customized for the Saudi ${industry.name.toLowerCase()} market.`,
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Competitive Advantage",
      description: `Stay ahead in the Saudi market with innovative digital solutions that set your ${industry.name.toLowerCase()} business apart.`,
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Regulatory Compliance",
      description: `Ensure full compliance with Saudi regulations specific to the ${industry.name.toLowerCase()} sector.`,
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Future-Ready Operations",
      description: `Prepare your ${industry.name.toLowerCase()} business for future growth and Vision 2030 opportunities.`,
    },
  ]
}

export default function IndustryDetailClient({ industry }: { industry: BusinessCategory }) {
  const [activeTab, setActiveTab] = useState("overview")
  const caseStudies = generateCaseStudies(industry)
  const faqs = generateFAQs(industry)
  const keyBenefits = generateKeyBenefits(industry)

  // Get related industries (excluding current one)
  const relatedIndustries = businessCategories.filter((category) => category.id !== industry.id).slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-primary/5 -skew-y-3 transform -translate-y-32"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Industry Solutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6">
                {industry.name}
                <span className="text-primary relative ml-2">
                  Solutions
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8">{industry.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {industry.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  Schedule Consultation
                </Button>
              </div>

              {/* Industry stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {industry.id === "retail"
                      ? "SAR 375B"
                      : industry.id === "healthcare"
                        ? "SAR 185B"
                        : industry.id === "manufacturing"
                          ? "SAR 420B"
                          : industry.id === "corporate"
                            ? "SAR 510B"
                            : industry.id === "smb"
                              ? "SAR 150B"
                              : "SAR 200B+"}
                  </div>
                  <div className="text-sm text-gray-600">Market Size</div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {industry.id === "retail"
                      ? "8.5%"
                      : industry.id === "healthcare"
                        ? "12.3%"
                        : industry.id === "manufacturing"
                          ? "7.2%"
                          : industry.id === "corporate"
                            ? "9.1%"
                            : industry.id === "smb"
                              ? "11.7%"
                              : "8.0%+"}
                  </div>
                  <div className="text-sm text-gray-600">Annual Growth</div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>

                {/* Floating info card */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs border border-white/50">
                  <h4 className="font-bold text-primary mb-1">Vision 2030 Alignment</h4>
                  <p className="text-sm text-gray-700">
                    Our {industry.name.toLowerCase()} solutions support Saudi Vision 2030 goals by enhancing efficiency,
                    digital transformation, and sustainable growth.
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Why Choose Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
              Key Benefits for {industry.name} Businesses
            </h2>

            <p className="text-gray-600">
              Our tailored solutions provide significant advantages for {industry.name.toLowerCase()} businesses in
              Saudi Arabia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-saudi-black mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-gray-100 p-1.5 shadow-lg rounded-full">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  Key Features
                </TabsTrigger>
                <TabsTrigger
                  value="case-studies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  Case Studies
                </TabsTrigger>
                <TabsTrigger
                  value="faq"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md px-5 py-2.5 rounded-full transition-all duration-300"
                >
                  FAQ
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-saudi-black mb-6">
                      Comprehensive {industry.name} Solutions
                    </h3>

                    <p className="text-gray-600 mb-6">
                      Our {industry.name.toLowerCase()} solutions are designed specifically for the Saudi market,
                      addressing the unique challenges and opportunities in this sector. We combine industry expertise
                      with cutting-edge technology to deliver results that drive growth and efficiency.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-saudi-black">Saudi Market Expertise</h4>
                          <p className="text-sm text-gray-600">
                            Solutions tailored specifically for Saudi {industry.name.toLowerCase()} businesses
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-saudi-black">Regulatory Compliance</h4>
                          <p className="text-sm text-gray-600">
                            Full alignment with Saudi regulations and Vision 2030 requirements
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-saudi-black">End-to-End Implementation</h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive support from planning to deployment and ongoing maintenance
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium text-saudi-black">Scalable Solutions</h4>
                          <p className="text-sm text-gray-600">Flexible systems that grow with your business needs</p>
                        </div>
                      </div>
                    </div>

                    <Button className="bg-primary hover:bg-primary/90 text-white">Schedule Consultation</Button>
                  </div>

                  <div className="relative h-[400px] lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt={`${industry.name} Solutions Overview`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>

                    {/* Floating stats */}
                    <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-1">200+</div>
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>

                    <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-primary mb-1">95%</div>
                      <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-saudi-black mb-8 text-center">
                  Key Features of Our {industry.name} Solutions
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {industry.services.slice(0, 2).map((service, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="text-xl font-bold text-saudi-black mb-4">{service}</h4>
                        <p className="text-gray-600 mb-4">
                          Our {service.toLowerCase()} solutions are designed specifically for Saudi{" "}
                          {industry.name.toLowerCase()} businesses, ensuring compliance with local regulations while
                          delivering exceptional performance.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Customized for Saudi market requirements</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Seamless integration with existing systems</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Bilingual support (Arabic & English)</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {industry.services.slice(2, 4).map((service, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h4 className="text-xl font-bold text-saudi-black mb-4">{service}</h4>
                        <p className="text-gray-600 mb-4">
                          Enhance your {industry.name.toLowerCase()} operations with our advanced{" "}
                          {service.toLowerCase()} solutions, designed to meet the specific needs of businesses in Saudi
                          Arabia.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Vision 2030 aligned implementation</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Cloud-based and on-premise options</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                            <span className="text-gray-700">Comprehensive training and support</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">Explore All Features</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-0">
              <div className="space-y-8">
                {caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="relative h-[250px] lg:h-auto">
                        <Image
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                            <h4 className="font-bold text-primary">{caseStudy.client}</h4>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 p-8">
                        <h3 className="text-2xl font-bold text-saudi-black mb-4">{caseStudy.title}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                            <p className="text-gray-600">{caseStudy.challenge}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                            <p className="text-gray-600">{caseStudy.solution}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {caseStudy.results.map((result, i) => (
                              <div key={i} className="flex items-start">
                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-2">
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-0">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-saudi-black mb-8 text-center">
                  Frequently Asked Questions About {industry.name} Solutions
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-200 py-2">
                      <AccordionTrigger className="text-left font-medium text-saudi-black hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pt-2">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-saudi-black mb-2">Have more questions?</h4>
                  <p className="text-gray-600 mb-4">
                    Our team of {industry.name.toLowerCase()} experts is ready to help you find the right solutions for
                    your business.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">Contact Our Experts</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-saudi-black mb-4">Explore Related Industries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our solutions for other sectors that might complement your {industry.name.toLowerCase()} business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedIndustries.map((relatedIndustry) => (
              <Card key={relatedIndustry.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={relatedIndustry.image || "/placeholder.svg"}
                    alt={relatedIndustry.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{relatedIndustry.name}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedIndustry.description}</p>
                  <Link
                    href={`/industries/${relatedIndustry.id}`}
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
                Ready to Transform Your {industry.name} Business?
              </h2>

              <p className="text-lg text-gray-700 mb-8">
                Let's discuss how our specialized solutions can help your {industry.name.toLowerCase()} business thrive
                in Saudi Arabia's competitive market. Our team of experts is ready to provide tailored recommendations
                for your specific needs.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

