"use client";

import { Button } from "@/components/ui/button";
import { CONSTANT } from "@/config/constants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Update the component to accept isRTL prop
interface JoinOurTeamProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  isRTL?: boolean;
}

export default function JoinOurTeam({
  title,
  subtitle,
  description,
  buttonText,
  isRTL = false,
}: JoinOurTeamProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const t = useTranslations("about");

  const benefits = [
    t("benefits.competitiveSalary"),
    t("benefits.flexibleWork"),
    t("benefits.professionalDevelopment"),
    t("benefits.collaborativeEnvironment"),
    t("benefits.healthInsurance"),
    t("benefits.regularTeamBuilding"),
  ];

  return (
    <section
      ref={ref}
      className={`py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden ${
        isRTL ? "rtl:text-right" : ""
      }`}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="p-8 md:p-12"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                {t("careers")}
              </div>
              <h2 className="text-3xl font-bold text-saudi-black mb-6">
                {title || "Join Our Team"}
              </h2>
              <p className="text-gray-600 mb-6">
                {description ||
                  "We're always looking for talented individuals to join our team. At Saudi Ease, you'll have the opportunity to work on exciting projects, grow professionally, and make a real impact in the digital landscape of Saudi Arabia."}
              </p>

              <h3 className="text-xl font-bold text-saudi-black mb-4">
                {t("whyWorkWithUs")}
              </h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <svg
                        className="h-3 w-3 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="bg-primary hover:bg-primary/90 text-white">
                {buttonText || "View Open Positions"}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-full min-h-[300px] lg:min-h-full"
            >
              <Image
                src={CONSTANT.images.joinOurTeam}
                alt="Saudi Ease team members"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-multiply"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-saudi-black mb-2">
                  {t("currentOpenings")}
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Senior Web Developer</span>
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      Riyadh
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">UX/UI Designer</span>
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      Jeddah
                    </span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Digital Marketing Specialist
                    </span>
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      Riyadh
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
