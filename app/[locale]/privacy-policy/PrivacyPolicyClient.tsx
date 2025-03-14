"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield, Lock, Clock } from "lucide-react"

export default function PrivacyPolicyClient() {
  const lastUpdated = "March 10, 2025"

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
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
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
                    At Saudi Ease, we are committed to protecting your privacy and ensuring the security of your
                    personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#information-collection"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Information Collection
              </a>
              <a
                href="#information-use"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Information Use
              </a>
              <a
                href="#information-sharing"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Information Sharing
              </a>
              <a
                href="#data-security"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Data Security
              </a>
              <a
                href="#your-rights"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Your Rights
              </a>
              <a
                href="#cookies"
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm text-gray-700 transition-colors"
              >
                Cookies
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
            <section id="information-collection" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  1
                </span>
                Information Collection
              </h2>
              <p>We collect several types of information from and about users of our services, including:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, company name, and other
                  contact details you provide when you register for our services, submit inquiries, or request
                  information.
                </li>
                <li>
                  <strong>Business Information:</strong> Information about your business needs, requirements, and
                  preferences related to our services.
                </li>
                <li>
                  <strong>Technical Information:</strong> Internet protocol (IP) address, browser type, device
                  information, operating system, and other technology identifiers when you use our website.
                </li>
                <li>
                  <strong>Usage Information:</strong> Information about how you use our website and services, including
                  pages visited, time spent, and interaction data.
                </li>
                <li>
                  <strong>Marketing Information:</strong> Your preferences in receiving marketing communications from
                  us.
                </li>
              </ul>
              <p>We collect this information when you:</p>
              <ul>
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Request a quote or consultation</li>
                <li>Engage with our services</li>
                <li>Participate in surveys or feedback requests</li>
                <li>Interact with our website through cookies and similar technologies</li>
              </ul>
            </section>

            <section id="information-use" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  2
                </span>
                Information Use
              </h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing and fulfilling your requests</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Personalizing your experience with our services</li>
                <li>Analyzing usage patterns to enhance our website and services</li>
                <li>Protecting our rights, property, or safety, and that of our users</li>
                <li>Complying with legal obligations and resolving disputes</li>
              </ul>
              <p>We process your personal information based on one or more of the following legal grounds:</p>
              <ul>
                <li>Your consent</li>
                <li>Performance of a contract with you</li>
                <li>Compliance with legal obligations</li>
                <li>Our legitimate business interests</li>
              </ul>
            </section>

            <section id="information-sharing" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  3
                </span>
                Information Sharing
              </h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                  web hosting, data analysis, payment processing, and customer service.
                </li>
                <li>
                  <strong>Business Partners:</strong> Trusted partners who help us provide and improve our services.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.
                </li>
                <li>
                  <strong>Corporate Transactions:</strong> In connection with a merger, acquisition, or sale of assets.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties. Any third parties with whom we share your
                information are contractually obligated to use it only for the purposes for which it was disclosed.
              </p>
            </section>

            <section id="data-security" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  4
                </span>
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data</li>
                <li>Secure network architecture</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection</li>
              </ul>
              <p>
                While we strive to protect your personal information, no method of transmission over the Internet or
                electronic storage is 100% secure. We cannot guarantee absolute security of your data.
              </p>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it
                was collected, including legal, accounting, or reporting requirements.
              </p>
            </section>

            <section id="your-rights" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  5
                </span>
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>
                  <strong>Access:</strong> Request access to your personal information.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information in certain circumstances.
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing of your personal information.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request transfer of your personal information to another service
                  provider.
                </li>
                <li>
                  <strong>Objection:</strong> Object to processing of your personal information.
                </li>
                <li>
                  <strong>Withdrawal of Consent:</strong> Withdraw consent where processing is based on consent.
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Information"
                section. We will respond to your request within the timeframe required by applicable law.
              </p>
            </section>

            <section id="cookies" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  6
                </span>
                Cookies and Similar Technologies
              </h2>
              <p>
                We use cookies and similar technologies to enhance your experience on our website. Cookies are small
                text files stored on your device that help us:
              </p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our services</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our
                  website.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> Remember your preferences and settings.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> Record your visit to our website, the pages you visit, and the
                  links you follow.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies may limit your
                ability to use some features of our website.
              </p>
            </section>

            <section id="children" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  7
                </span>
                Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you are a parent or guardian and believe that your child has provided us
                with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section id="international-transfers" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  8
                </span>
                International Data Transfers
              </h2>
              <p>
                Your personal information may be transferred to and processed in countries other than the one in which
                you reside. These countries may have data protection laws that are different from those in your country.
              </p>
              <p>
                When we transfer your personal information to other countries, we take appropriate safeguards to ensure
                that your information receives an adequate level of protection, including:
              </p>
              <ul>
                <li>Using approved standard contractual clauses</li>
                <li>Ensuring third-party service providers adhere to data protection principles</li>
                <li>Implementing appropriate technical and organizational measures</li>
              </ul>
            </section>

            <section id="changes" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  9
                </span>
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the updated Privacy Policy on our
                website and updating the "Last Updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use,
                and protect your information.
              </p>
            </section>

            <section id="contact" className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary text-sm">
                  10
                </span>
                Contact Information
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p className="font-medium">Saudi Ease</p>
                <p>King Fahd Road, Al Olaya District</p>
                <p>Riyadh, Saudi Arabia</p>
                <p>Email: privacy@saudiease.com</p>
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
                <Shield className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-700 font-medium mb-2">Your Privacy Matters</p>
                  <p className="text-gray-600 text-sm">
                    By using Saudi Ease's services, you acknowledge that you have read and understood this Privacy
                    Policy. We are committed to protecting your privacy and handling your data with transparency and
                    care.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} Saudi Ease. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/terms-of-service" className="text-sm text-primary hover:underline">
                  Terms of Service
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

