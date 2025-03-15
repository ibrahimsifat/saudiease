"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import NextImage from "next/image";
import { useRef, useState } from "react";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const partners = [
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
    "/placeholder.svg?height=80&width=160",
  ];

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            {t("sectionLabel")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            style={{ y }}
            className={`lg:col-span-5 relative ${isRTL ? "lg:order-last" : ""}`}
          >
            <div className="relative">
              <div
                className={`absolute -top-6 ${
                  isRTL ? "-right-6" : "-left-6"
                } w-12 h-12 rounded-full bg-primary/10 z-0`}
              ></div>
              <div
                className={`absolute -bottom-6 ${
                  isRTL ? "-left-6" : "-right-6"
                } w-16 h-16 rounded-full bg-primary/10 z-0`}
              ></div>

              <Card className="bg-white p-8 rounded-xl shadow-xl relative z-10 border-none">
                <div
                  className={`absolute -top-5 ${
                    isRTL ? "-left-5" : "-right-5"
                  } h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-lg`}
                >
                  <Quote className="h-5 w-5 text-white" />
                </div>

                <div
                  className={`flex items-center mb-6 ${
                    isRTL ? "flex-row-reverse text-right" : ""
                  }`}
                >
                  <div
                    className={`relative h-16 w-16 rounded-full overflow-hidden ${
                      isRTL ? "ml-4" : "mr-4"
                    } border-2 border-primary`}
                  >
                    <NextImage
                      src={
                        testimonials[activeIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-saudi-black">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonials[activeIndex].position}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div
                    className={`flex items-center mb-3 ${
                      isRTL ? "flex-row-reverse justify-end" : ""
                    }`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonials[activeIndex].rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span
                      className={`${
                        isRTL ? "mr-2" : "ml-2"
                      } text-sm text-gray-600`}
                    >
                      5.0
                    </span>
                  </div>

                  <p
                    className={`text-gray-700 italic text-lg ${
                      isRTL ? "text-right" : ""
                    }`}
                  >
                    "{t(`testimonial${activeIndex + 1}.text`)}"
                  </p>
                </div>

                <div
                  className={`flex flex-wrap items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-100 ${
                    isRTL ? "rtl:space-x-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 text-primary ${
                        isRTL ? "ml-1" : "mr-1"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      {testimonials[activeIndex].location}, {t("saudiArabia")}
                    </span>
                  </div>
                  <div
                    className={`flex items-center mt-2 sm:mt-0 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 text-primary ${
                        isRTL ? "ml-1" : "mr-1"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    <span>
                      {t("project")}:{" "}
                      {t(`testimonial${activeIndex + 1}.project`)}
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-center mt-6 space-x-2 rtl:space-x-reverse">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-100"
                onClick={isRTL ? nextTestimonial : prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">{t("previous")}</span>
              </Button>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-primary w-6" : "bg-gray-300"
                    }`}
                    aria-label={`${t("goToTestimonial")} ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white shadow-md hover:bg-gray-100"
                onClick={isRTL ? prevTestimonial : nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">{t("next")}</span>
              </Button>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials
                .filter((_, i) => i !== activeIndex)
                .map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100"
                    onClick={() =>
                      setActiveIndex(
                        testimonials.findIndex((t) => t.id === testimonial.id)
                      )
                    }
                  >
                    <div
                      className={`flex items-center mb-4 ${
                        isRTL ? "flex-row-reverse text-right" : ""
                      }`}
                    >
                      <div
                        className={`relative h-12 w-12 rounded-full overflow-hidden ${
                          isRTL ? "ml-3" : "mr-3"
                        } border border-primary/30`}
                      >
                        <NextImage
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-saudi-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center mb-3 ${
                        isRTL ? "flex-row-reverse justify-end" : ""
                      }`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p
                      className={`text-gray-700 text-sm line-clamp-3 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      "
                      {t(
                        `testimonial${
                          testimonials.findIndex(
                            (t) => t.id === testimonial.id
                          ) + 1
                        }.text`
                      )}
                      "
                    </p>

                    <div
                      className={`mt-3 text-xs text-gray-500 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      {t("project")}:{" "}
                      {t(
                        `testimonial${
                          testimonials.findIndex(
                            (t) => t.id === testimonial.id
                          ) + 1
                        }.project`
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-xl font-bold text-saudi-black mb-6 text-center">
                {t("trustedBy")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                      className="object-contain h-12"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <a href="#contact">{t("becomeNextSuccess")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
