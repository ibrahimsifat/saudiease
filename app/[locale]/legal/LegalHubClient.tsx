"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Scale, Clock, ArrowRight, FileCheck, FileLock, FileWarning } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LegalHubClient() {
  const lastUpdated = "March 10, 2025"

  const legalDocuments = [
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your personal information",
      icon: <FileLock className="h-6 w-6 text-primary" />,
      link: "/privacy-policy",
      updated: "March 10, 2025",
    },
    {
      title: "Terms of Service",
      description: "The terms governing your use of our services",
      icon: <FileCheck className="h-6 w-6 text-primary" />,
      link: "/terms-of-service",
      updated: "March 5, 2025",
    },
    {
      title: "Cookie Policy",
      description: "How we use cookies and similar technologies",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "/cookie-policy",
      updated: "February 28, 2025",
    },
    {
      title: "Data Processing Agreement",
      description: "Terms for processing personal data in compliance with regulations",
      icon: <Shield className="h-6 w-6 text-primary" />,
      link: "/data-processing-agreement",
      updated: "February 15, 2025",
    },
    {
      title: "Acceptable Use Policy",
      description: "Guidelines for acceptable use of our services",
      icon: <FileWarning className="h-6 w-6 text-primary" />,
      link: "/acceptable-use-policy",
      updated: "January 20, 2025",
    },
    {
      title: "Service Level Agreement",
      description: "Our commitments regarding service availability and support",
      icon: <Scale className="h-6 w-6 text-primary" />,
      link: "/service-level-agreement",
      updated: "January 10, 2025",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/" className="flex items-center text-gray-600 hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Legal Hub</h1>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-8">
              <Clock className="h-4 w-4 mr-2" />
              <span>Last Updated: {lastUpdated}</span>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-700">
                    Welcome to the Saudi Ease Legal Hub. Here you'll find all the legal documents governing your use of
                    our services. We believe in transparency and clarity in our legal terms to build trust with our
                    clients and users.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legal Documents Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {legalDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                        {doc.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{doc.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Updated: {doc.updated}</span>
                          <Button variant="ghost" className="text-primary p-0 hover:bg-transparent" asChild>
                            <Link href={doc.link} className="flex items-center">
                              Read Document
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How often are these documents updated?</h3>
                <p className="text-gray-600">
                  We review our legal documents regularly to ensure they comply with current laws and regulations.
                  Documents are updated as needed, and the "Last Updated" date on each document indicates when it was
                  last revised.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How will I be notified of changes to these documents?
                </h3>
                <p className="text-gray-600">
                  For significant changes, we'll notify you via email or through a prominent notice on our website.
                  Continued use of our services after changes indicates your acceptance of the updated terms.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do I need to agree to all these documents?</h3>
                <p className="text-gray-600">
                  Yes, by using our services, you agree to be bound by all applicable legal documents. If you don't
                  agree with any terms, you should discontinue use of our services and contact us to discuss your
                  concerns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How do these documents comply with Saudi regulations?
                </h3>
                <p className="text-gray-600">
                  Our legal documents are drafted in compliance with Saudi Arabian laws and regulations, including those
                  related to e-commerce, data protection, and consumer rights. We regularly review and update them to
                  ensure continued compliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Have Legal Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions or concerns about our legal documents or need clarification on specific terms,
              our legal team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact" className="flex items-center">
                  Contact Our Legal Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:legal@saudiease.com">Email: legal@saudiease.com</a>
              </Button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 border-t border-gray-200 pt-8"
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Saudi Ease. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-sm text-primary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-sm text-primary hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

