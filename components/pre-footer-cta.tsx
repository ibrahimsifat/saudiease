"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONSTANT } from "@/config/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Shield,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { default as Image, default as NextImage } from "next/image";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useInView } from "react-intersection-observer";

const partners = [
  CONSTANT.clients.deals,
  CONSTANT.clients.kic,
  CONSTANT.clients.kullesh,
  CONSTANT.clients.nextRide,
  CONSTANT.clients.ranchiUniversity,
  CONSTANT.clients.sarah,
];
export default function PreFooterCTA() {
  const t = useTranslations("preFooterCTA");
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("quick-contact");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    if (!name || !email || !message) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("footer_contact_form");
      }

      // Send data to API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          data: {
            name,
            email,
            message,
            hearAbout: "footer",
            recaptchaToken,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);

        // Reset form after submission
        setTimeout(() => {
          setName("");
          setEmail("");
          setMessage("");
          setSubmitted(false);
        }, 3000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 rtl:ml-2 rtl:mr-0"></span>
              {t("sectionLabel")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("description")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left Side - Contact Form */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="mb-8">
                  <div className="flex space-x-2 rtl:space-x-reverse mb-6">
                    <button
                      onClick={() => setActiveTab("quick-contact")}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        activeTab === "quick-contact"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      )}
                    >
                      {t("quickContact")}
                    </button>
                    <button
                      onClick={() => setActiveTab("schedule-call")}
                      className={cn(
                        "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        activeTab === "schedule-call"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                      )}
                    >
                      {t("scheduleCall")}
                    </button>
                  </div>

                  {activeTab === "quick-contact" && (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {t("form.name")}
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t("form.namePlaceholder")}
                          className="w-full"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {t("form.email")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t("form.emailPlaceholder")}
                          className="w-full"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                        >
                          {t("form.message")}
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder={t("form.messagePlaceholder")}
                          className="w-full min-h-[120px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </span>
                        ) : submitted ? (
                          <span className="flex items-center">
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Message Sent!
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start animate-fade-in">
                          <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Something went wrong</p>
                            <p className="text-sm">
                              There was an error sending your message. Please
                              try again or contact us directly by phone.
                            </p>
                          </div>
                        </div>
                      )}
                    </form>
                  )}

                  {activeTab === "schedule-call" && (
                    <div className="space-y-6">
                      <p className="text-gray-600 dark:text-gray-300">
                        {t("scheduleDescription")}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Calendar className="h-5 w-5 text-primary mr-2 rtl:ml-2 rtl:mr-0" />
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {t("chooseDate")}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {t("chooseDateDescription")}
                          </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                          <div className="flex items-center mb-3">
                            <Clock className="h-5 w-5 text-primary mr-2 rtl:ml-2 rtl:mr-0" />
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {t("pickTime")}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {t("pickTimeDescription")}
                          </p>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() =>
                          (window.location.href = "/schedule-consultation")
                        }
                      >
                        <Calendar className="mr-2 rtl:ml-2 rtl:mr-0 h-4 w-4" />
                        {t("scheduleConsultation")}
                      </Button>

                      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        {t("orCallDirectly")}{" "}
                        <a
                          href="tel:+966558845503"
                          className="text-primary font-medium"
                        >
                          +966 558845503
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {t("whyChooseUs")}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {t("saudiMarketExperts")}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t("saudiMarketExpertsDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {t("zatcaCompliance")}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t("zatcaComplianceDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {t("fastTurnaround")}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t("fastTurnaroundDescription")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-white">
                          {t("bilingualSupport")}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t("bilingualSupportDescription")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image and Contact Info */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <Image
                    src={CONSTANT.images.iconLogo}
                    alt={t("officeImageAlt")}
                    fill
                    className="object-cover opacity-35"
                  />
                </div>

                <div className="relative p-8 md:p-10 h-full flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">
                      {t("contactInformation")}
                    </h3>
                    <p className="text-white/80">{t("contactDescription")}</p>
                  </div>

                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/70">
                          {t("phone")}
                        </p>
                        <a
                          href="tel:+966558845503"
                          className="text-white hover:text-white/80 text-lg font-semibold"
                        >
                          +966 558845503
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-4 rtl:ml-4 rtl:mr-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/70">
                          {t("email")}
                        </p>
                        <a
                          href="mailto:info@saudiease.com"
                          className="text-white hover:text-white/80"
                        >
                          info@saudiease.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/10">
                    <h4 className="font-semibold mb-4">{t("followUs")}</h4>
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Twitter"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("trustedBy")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* Client logos would go here */}

              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <NextImage
                    src={partner || "/placeholder.svg"}
                    alt={`${t("partner")} ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain h-8 w-24"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
