"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function OfficeLocations() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get translations
  const t = useTranslations("contact.locations");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const offices = [
    {
      city: "Riyadh",
      address: "King Fahd Road, Al Olaya District, Riyadh, Saudi Arabia",
      phone: "+966 11 123 4567",
      email: "riyadh@saudiease.com",
      image: "/placeholder.svg?height=400&width=600",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://maps.google.com/?q=King+Fahd+Road+Al+Olaya+District+Riyadh+Saudi+Arabia",
      isHeadquarters: true,
    },
    {
      city: "Jeddah",
      address: "Prince Sultan Road, Al Rawdah District, Jeddah, Saudi Arabia",
      phone: "+966 12 345 6789",
      email: "jeddah@saudiease.com",
      image: "/placeholder.svg?height=400&width=600",
      hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
      mapUrl:
        "https://maps.google.com/?q=Prince+Sultan+Road+Al+Rawdah+District+Jeddah+Saudi+Arabia",
      isHeadquarters: false,
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 rtl:mr-0 rtl:ml-2"></span>
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-full p-6">
                  <div className="flex items-center">
                    <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full mr-2 rtl:mr-0 rtl:ml-2">
                      {office.isHeadquarters
                        ? t("headquarters")
                        : t("branchOffice")}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-2">
                    {office.city}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start rtl:flex-row-reverse rtl:text-right">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="ml-3 rtl:ml-0 rtl:mr-3 text-gray-600">
                    {office.address}
                  </p>
                </div>

                <div className="flex items-start rtl:flex-row-reverse rtl:text-right">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="ml-3 rtl:ml-0 rtl:mr-3 text-gray-600">
                    {office.phone}
                  </p>
                </div>

                <div className="flex items-start rtl:flex-row-reverse rtl:text-right">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="ml-3 rtl:ml-0 rtl:mr-3 text-gray-600">
                    {office.email}
                  </p>
                </div>

                <div className="flex items-start rtl:flex-row-reverse rtl:text-right">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="ml-3 rtl:ml-0 rtl:mr-3 text-gray-600">
                    {office.hours}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-medium hover:underline rtl:flex-row-reverse"
                  >
                    {t("getDirections")}
                    {isRTL ? (
                      <svg
                        className="mr-1 h-4 w-4 rotate-180"
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
                    ) : (
                      <svg
                        className="ml-1 h-4 w-4"
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
                    )}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
        >
          <h3 className="text-xl font-bold text-saudi-black mb-4">
            {t("interactiveMap")}
          </h3>
          <p className="text-gray-600 mb-6">{t("mapDescription")}</p>
          <div className="relative h-96 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6554789132896!2d46.6745!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMjguMiJF!5e0!3m2!1sen!2ssa!4v1625123456789!5m2!1sen!2ssa"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saudi Ease office locations"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
