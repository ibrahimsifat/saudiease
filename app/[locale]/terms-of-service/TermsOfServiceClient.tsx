"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Scale, Clock } from "lucide-react"

export default function TermsOfServiceClient() {
  const lastUpdated = "March 5, 2025"

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms of Service</h1>
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
                    Please read these Terms of Service carefully before using our services. By accessing or using Saudi
                    Ease's services, you agree to be bound by these terms and conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#introduction"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Introduction
              </a>
              <a
                href="#services"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#user-responsibilities"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                User Responsibilities
              </a>
              <a
                href="#intellectual-property"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Intellectual Property
              </a>
              <a
                href="#payment"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Payment Terms
              </a>
              <a
                href="#termination"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Termination
              </a>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  1
                </span>
                Introduction
              </h2>
              <p>
                Welcome to Saudi Ease. These Terms of Service govern your use of our website, products, and services. By
                accessing or using our services, you agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
              <p>
                Saudi Ease provides digital solutions including web development, e-commerce solutions, ZATCA-compliant
                e-invoicing, branding, and digital marketing services. Our services are designed to help businesses
                across Saudi Arabia achieve their digital transformation goals in alignment with Vision 2030.
              </p>
              <p>
                If you do not agree with any part of these terms, you may not use our services. Please read these terms
                carefully before proceeding.
              </p>
            </section>

            <section id="services" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  2
                </span>
                Services
              </h2>
              <p>Saudi Ease offers a range of digital services including but not limited to:</p>
              <ul>
                <li>Website and mobile application development</li>
                <li>E-commerce solutions with SADAD integration</li>
                <li>ZATCA-compliant e-invoicing systems</li>
                <li>Graphic design and branding</li>
                <li>Digital marketing and SEO services</li>
                <li>IT consulting and digital transformation services</li>
              </ul>
              <p>
                Service descriptions, deliverables, timelines, and costs will be outlined in individual project
                proposals or agreements. Saudi Ease reserves the right to modify, suspend, or discontinue any aspect of
                our services at any time.
              </p>
              <p>
                While we strive to ensure high quality and timely delivery of all services, we cannot guarantee specific
                results or outcomes from the use of our services.
              </p>
            </section>

            <section id="user-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  3
                </span>
                User Responsibilities
              </h2>
              <p>When using our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information as required for service delivery</li>
                <li>Maintain the confidentiality of any account credentials provided to you</li>
                <li>
                  Use our services in compliance with all applicable laws and regulations, including Saudi Arabian laws
                </li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not infringe upon the intellectual property rights of others</li>
                <li>Provide timely feedback and approvals as required for project progression</li>
                <li>Make payments according to the agreed payment schedule</li>
              </ul>
              <p>
                You are responsible for ensuring that any content you provide for use in our services complies with all
                applicable laws and does not infringe upon the rights of any third party.
              </p>
            </section>

            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  4
                </span>
                Intellectual Property
              </h2>
              <p>Unless otherwise specified in a written agreement:</p>
              <ul>
                <li>
                  Saudi Ease retains ownership of all intellectual property rights in our services, including but not
                  limited to software, designs, methodologies, and processes
                </li>
                <li>
                  Upon full payment, clients receive a non-exclusive license to use the deliverables for their intended
                  purpose
                </li>
                <li>
                  Clients retain ownership of their pre-existing intellectual property and content provided to Saudi
                  Ease for use in the services
                </li>
                <li>
                  Saudi Ease may use client projects in our portfolio and marketing materials unless explicitly
                  prohibited in writing
                </li>
              </ul>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of our services
                without express written permission from Saudi Ease.
              </p>
            </section>

            <section id="payment" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  5
                </span>
                Payment Terms
              </h2>
              <p>Payment terms will be specified in individual project proposals or agreements. Generally:</p>
              <ul>
                <li>A non-refundable deposit is required to commence work</li>
                <li>Payment schedules are typically tied to project milestones</li>
                <li>Final deliverables will be released upon receipt of full payment</li>
                <li>Late payments may incur additional fees and result in work suspension</li>
                <li>All prices are quoted in Saudi Riyal (SAR) unless otherwise specified</li>
                <li>Payment methods accepted include bank transfer, credit card, and SADAD</li>
              </ul>
              <p>
                For subscription-based services, payments are due according to the subscription terms. Failure to make
                timely payments may result in service suspension or termination.
              </p>
            </section>

            <section id="termination" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  6
                </span>
                Termination
              </h2>
              <p>Either party may terminate the service agreement:</p>
              <ul>
                <li>As specified in the individual project agreement</li>
                <li>If the other party breaches a material term of the agreement</li>
                <li>By providing written notice according to the notice period specified in the agreement</li>
              </ul>
              <p>Upon termination:</p>
              <ul>
                <li>Client shall pay for all services rendered up to the termination date</li>
                <li>Saudi Ease shall deliver all completed work for which payment has been received</li>
                <li>Any confidential information shall be returned or destroyed as requested</li>
              </ul>
              <p>
                Saudi Ease reserves the right to terminate services immediately if a client violates these Terms of
                Service or engages in illegal or fraudulent activities.
              </p>
            </section>

            <section id="limitation-of-liability" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  7
                </span>
                Limitation of Liability
              </h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>
                  Saudi Ease shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages
                </li>
                <li>
                  Our total liability for any claims arising from or related to our services shall not exceed the amount
                  paid by the client for the specific service giving rise to the claim
                </li>
                <li>We do not warrant that our services will be uninterrupted, error-free, or completely secure</li>
                <li>We are not responsible for third-party services or products integrated with our services</li>
              </ul>
              <p>
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for
                certain damages, so some of the above limitations may not apply to you.
              </p>
            </section>

            <section id="governing-law" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  8
                </span>
                Governing Law
              </h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Kingdom of
                Saudi Arabia, without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from or relating to these terms or our services shall be subject to the exclusive
                jurisdiction of the courts in Riyadh, Saudi Arabia.
              </p>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  9
                </span>
                Changes to Terms
              </h2>
              <p>
                Saudi Ease reserves the right to modify these Terms of Service at any time. We will provide notice of
                significant changes through our website or by direct communication.
              </p>
              <p>
                Your continued use of our services after such modifications constitutes your acceptance of the updated
                terms. If you do not agree to the modified terms, you should discontinue use of our services.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  10
                </span>
                Contact Information
              </h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-medium">Saudi Ease</p>
                <p>King Fahd Road, Al Olaya District</p>
                <p>Riyadh, Saudi Arabia</p>
                <p>Email: info@saudiease.com</p>
                <p>Phone: +966 558845503</p>
              </div>
            </section>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 border-t border-gray-200 pt-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-start">
                <Scale className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-700 font-medium mb-2">Acceptance of Terms</p>
                  <p className="text-gray-600 text-sm">
                    By using Saudi Ease's services, you acknowledge that you have read, understood, and agree to be
                    bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Saudi Ease. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-sm text-primary hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/legal" className="text-sm text-primary hover:underline">
                  Legal Hub
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

