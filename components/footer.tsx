"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONSTANT } from "@/config/constants";
import { getCompanyInfo } from "@/data/company-info/index";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";
import { useState } from "react";
import { Locale } from "../config/i18n";
export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations("footer");
  const companyInfo = getCompanyInfo(locale as Locale);
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Update the services array with more SEO-friendly service names
  const services = [
    { name: t("services.webDevelopment"), link: "/services/web-development" },
    { name: t("services.eCommerce"), link: "/services/e-commerce" },
    { name: t("services.eInvoicing"), link: "/services/e-invoicing" },
    { name: t("services.graphicDesign"), link: "/services/graphic-design" },
    {
      name: t("services.digitalMarketing"),
      link: "/services/digital-marketing",
    },
    { name: t("services.seo"), link: "/services/seo" },
  ];

  const quickLinks = [
    { name: t("quickLinks.home"), link: "/" },
    { name: t("quickLinks.about"), link: "/about" },
    { name: t("quickLinks.services"), link: "/services" },
    { name: t("quickLinks.portfolio"), link: "/portfolio" },
    { name: t("quickLinks.blog"), link: "/blog" },
    { name: t("quickLinks.contact"), link: "/contact" },
  ];

  // Update the resources array with properly organized legal links
  const resources = [
    {
      name: t("resources.digitalTransformation"),
      link: "/services/digital-transformation",
    },
    {
      name: t("resources.zatcaCompliance"),
      link: "/services/zatca-compliance",
    },
    { name: t("resources.careers"), link: "/careers" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[60px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary pt-20 pb-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-saudi-black mb-3">
                  {t("newsletter.title")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("newsletter.description")}
                </p>
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    placeholder={t("newsletter.emailPlaceholder")}
                    className="flex-grow border-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
                  >
                    {t("newsletter.subscribe")}
                    <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-4 w-4" />
                  </Button>
                </form>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm mt-2"
                  >
                    {t("newsletter.thankYou")}
                  </motion.p>
                )}
              </div>
              <div className="hidden md:flex justify-end">
                <div className="relative h-32 w-32">
                  <NextImage
                    src={CONSTANT.images.subscribe}
                    alt={t("newsletter.illustrationAlt")}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full border border-white/10 opacity-20"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full border border-white/10 opacity-20"
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          ></motion.div>

          <motion.div
            className="absolute top-[40%] left-[20%] w-[100px] h-[100px] rounded-full border border-white/20 opacity-30"
            animate={{
              rotate: 360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-saudi-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 space-y-6"
            >
              <Link href="/" className="inline-block">
                <div className="relative h-12 w-48">
                  <NextImage
                    src={companyInfo.logo}
                    alt={t("logoAlt")}
                    fill
                    className="object-contain brightness-200 contrast-200"
                  />
                </div>
              </Link>
              <p className="text-gray-400 max-w-md">
                {companyInfo.shortDescription}
              </p>

              <div className="flex space-x-4 rtl:space-x-reverse">
                {companyInfo.contact.socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 rtl:ml-3 rtl:mr-0 mt-0.5" />
                  <div>
                    <a
                      href={`tel:${companyInfo.contact.phone}`}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {companyInfo.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 rtl:ml-3 rtl:mr-0 mt-0.5" />
                  <div>
                    <a
                      href={`mailto:${companyInfo.contact.email}`}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {companyInfo.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 rtl:ml-3 rtl:mr-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">
                      {companyInfo.contact.address.street}
                      <br />
                      {companyInfo.contact.address.city},{" "}
                      {companyInfo.contact.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="text-xl font-semibold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:h-0.5 after:w-12 after:bg-primary">
                {t("quickLinksTitle")}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.link}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0 text-primary transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-4"
            >
              <h3 className="text-xl font-semibold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:h-0.5 after:w-12 after:bg-primary">
                {t("servicesTitle")}
              </h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0 text-primary transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 space-y-4"
            >
              <h3 className="text-xl font-semibold text-white relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 rtl:after:right-0 rtl:after:left-auto after:h-0.5 after:w-12 after:bg-primary">
                {t("resourcesTitle")}
              </h3>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link
                      href={resource.link}
                      className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-1 rtl:ml-1 rtl:mr-0 text-primary transform transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-white font-medium mb-3">{t("weAccept")}</h4>
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9H2M22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9H2M22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="bg-white/10 h-8 w-12 rounded flex items-center justify-center">
                    <svg
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 9H2M22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Replace the copyright section with this enhanced legal footer section */}
          <div className="pt-8 border-t border-white/10">
            {/* Legal Links Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                {t("legalDocuments")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link href="/privacy-policy" className="group">
                  <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0 group-hover:bg-primary/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                    <div>
                      <span className="text-white group-hover:text-primary transition-colors font-medium">
                        {t("privacyPolicy")}
                      </span>
                      <p className="text-gray-400 text-xs mt-1">
                        {t("updatedOn", { date: "Mar 10, 2025" })}
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/terms-of-service" className="group">
                  <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0 group-hover:bg-primary/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                    <div>
                      <span className="text-white group-hover:text-primary transition-colors font-medium">
                        {t("termsOfService")}
                      </span>
                      <p className="text-gray-400 text-xs mt-1">
                        {t("updatedOn", { date: "Mar 5, 2025" })}
                      </p>
                    </div>
                  </div>
                </Link>

                <Link href="/legal" className="group">
                  <div className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-lg flex items-center">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center mr-3 rtl:ml-3 rtl:mr-0 group-hover:bg-primary/30 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
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
                    <div>
                      <span className="text-white group-hover:text-primary transition-colors font-medium">
                        {t("legalHub")}
                      </span>
                      <p className="text-gray-400 text-xs mt-1">
                        {t("allLegalDocuments")}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Copyright and Secondary Links */}
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} {t("copyright")} | {t("saudiCR")}:
                1234567890
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {t("privacyPolicy")}
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {t("termsOfService")}
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {t("faq")}
                </Link>
                <Link
                  href="/sitemap.xml"
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {t("sitemap")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
