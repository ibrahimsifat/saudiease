"use client"

import { motion } from "framer-motion"
import ContactSection from "@/components/contact-section"
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              We're Here to Help
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6">Contact Us</h1>
            <p className="text-gray-600 text-lg mb-8">
              Have questions about our services? Need a quote for your project? Our team is ready to assist you with all
              your digital transformation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border-none shadow-lg h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex items-start">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-saudi-black">Call Us</h3>
                        <p className="text-sm text-gray-500">Direct phone support</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Our customer service team is available during business hours to assist you.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <a href="tel:+966558845503" className="text-primary font-medium hover:underline">
                        +966 558845503
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border-none shadow-lg h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex items-start">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-saudi-black">Email Us</h3>
                        <p className="text-sm text-gray-500">24/7 email support</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Send us an email and we'll respond within 24 hours during business days.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <a href="mailto:info@saudiease.com" className="text-primary font-medium hover:underline">
                        info@saudiease.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="border-none shadow-lg h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex items-start">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-saudi-black">Visit Us</h3>
                        <p className="text-sm text-gray-500">Our office location</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Schedule a meeting at our office in Riyadh for in-person consultation.
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-primary font-medium">King Fahd Road, Al Olaya District, Riyadh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="border-none shadow-lg h-full overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex items-start">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-saudi-black">Business Hours</h3>
                        <p className="text-sm text-gray-500">When we're available</p>
                      </div>
                    </div>
                    <div className="text-gray-600 space-y-1 mb-4">
                      <div className="flex justify-between">
                        <span>Sunday - Thursday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday:</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-primary font-medium">Saudi Arabia Time (GMT+3)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-saudi-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services and processes.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md bg-gray-100/80 backdrop-blur-sm p-1 rounded-full">
                  <TabsTrigger value="general" className="rounded-full">
                    General
                  </TabsTrigger>
                  <TabsTrigger value="services" className="rounded-full">
                    Services
                  </TabsTrigger>
                  <TabsTrigger value="support" className="rounded-full">
                    Support
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="general">
                <Card className="border-none shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">What is Saudi Ease?</h3>
                        <p className="text-gray-600">
                          Saudi Ease is a digital transformation company based in Riyadh, Saudi Arabia. We provide
                          comprehensive digital services including website development, e-commerce solutions, mobile app
                          development, e-invoicing systems, graphic design & branding, and digital marketing services.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          Do you work with businesses outside of Saudi Arabia?
                        </h3>
                        <p className="text-gray-600">
                          Yes, while we specialize in the Saudi market, we work with clients from across the GCC region
                          and beyond. Our expertise in Saudi regulations and business practices makes us particularly
                          valuable for international companies looking to establish a digital presence in Saudi Arabia.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          What makes Saudi Ease different from other digital agencies?
                        </h3>
                        <p className="text-gray-600">
                          Our deep understanding of the Saudi market, combined with our technical expertise and
                          commitment to quality, sets us apart. We offer end-to-end solutions that are compliant with
                          local regulations, culturally appropriate, and designed to achieve your business objectives.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          How can I get started with Saudi Ease?
                        </h3>
                        <p className="text-gray-600">
                          Getting started is easy! Simply fill out our contact form, call us, or send us an email. We'll
                          schedule an initial consultation to understand your needs and provide you with a customized
                          proposal.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card className="border-none shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">What services do you offer?</h3>
                        <p className="text-gray-600">
                          We offer a comprehensive range of digital services including website development, e-commerce
                          solutions, mobile app development, e-invoicing systems compliant with ZATCA regulations,
                          graphic design & branding, and digital marketing services tailored for the Saudi market.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          How long does it take to complete a project?
                        </h3>
                        <p className="text-gray-600">
                          Project timelines vary depending on the scope and complexity. A simple website might take 2-4
                          weeks, while a complex e-commerce platform or mobile app could take 2-4 months. During our
                          initial consultation, we'll provide you with a detailed timeline based on your specific
                          requirements.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          Do you provide ongoing support after project completion?
                        </h3>
                        <p className="text-gray-600">
                          Yes, we offer various maintenance and support packages to ensure your digital assets continue
                          to perform optimally. These can include technical support, content updates, security
                          monitoring, performance optimization, and more.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          Can you help with ZATCA e-invoicing compliance?
                        </h3>
                        <p className="text-gray-600">
                          Absolutely! We specialize in implementing e-invoicing solutions that comply with ZATCA (Zakat,
                          Tax and Customs Authority) requirements in Saudi Arabia. Our solutions can be integrated with
                          your existing systems or implemented as standalone solutions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="support">
                <Card className="border-none shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          How can I get technical support?
                        </h3>
                        <p className="text-gray-600">
                          For technical support, you can contact us through our support email at support@saudiease.com,
                          call our support line at +966 558845503, or submit a ticket through your client portal. Our
                          support team is available Sunday through Thursday from 9:00 AM to 6:00 PM Saudi time.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          What is your response time for support requests?
                        </h3>
                        <p className="text-gray-600">
                          We aim to respond to all support requests within 4 business hours. For critical issues, our
                          response time is typically under 2 hours. Resolution times vary depending on the complexity of
                          the issue.
                        </p>
                      </div>

                      <div className="border-b border-gray-100 pb-4">
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          Do you offer training for the systems you develop?
                        </h3>
                        <p className="text-gray-600">
                          Yes, we provide comprehensive training for all the systems we develop. This can include
                          in-person training sessions, video tutorials, documentation, and ongoing support to ensure
                          your team can effectively use and manage your digital assets.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-saudi-black mb-2">
                          What if I have questions about my invoice or billing?
                        </h3>
                        <p className="text-gray-600">
                          For billing inquiries, please contact our finance department at finance@saudiease.com or call
                          +966 558845503. You can also find answers to common billing questions in our client portal
                          under the Billing section.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your question here? Contact our support team for assistance.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link href="#contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/faq">
                  <Globe className="mr-2 h-4 w-4" />
                  Visit Full FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-saudi-black mb-4">Legal Information</h2>
              <p className="text-gray-600">
                We are committed to transparency and compliance with all applicable laws and regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/privacy-policy" className="group">
                <Card className="border-none shadow-lg h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-saudi-black mb-2 group-hover:text-primary transition-colors">
                      Privacy Policy
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Learn how we collect, use, and protect your personal information in compliance with Saudi data
                      protection laws.
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-medium">Read Policy</span>
                      <svg
                        className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/terms-of-service" className="group">
                <Card className="border-none shadow-lg h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-saudi-black mb-2 group-hover:text-primary transition-colors">
                      Terms of Service
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Understand the terms and conditions that govern your use of our services and your relationship
                      with Saudi Ease.
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-medium">Read Terms</span>
                      <svg
                        className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/legal" className="group">
                <Card className="border-none shadow-lg h-full overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-saudi-black mb-2 group-hover:text-primary transition-colors">
                      Legal Hub
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Access all our legal documents in one place, including privacy policy, terms of service, and more.
                    </p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-medium">View All Documents</span>
                      <svg
                        className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
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
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 text-sm">
                For legal inquiries, please contact our legal team at{" "}
                <a href="mailto:legal@saudiease.com" className="text-primary hover:underline">
                  legal@saudiease.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

