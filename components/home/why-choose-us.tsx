"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Shield } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Trusted by Saudi Businesses",
      description:
        "We've built a reputation for reliability and excellence across Saudi Arabia.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Saudi-Focused Expertise",
      description:
        "Our deep understanding of the local market ensures solutions tailored to Saudi needs.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Your Success, Our Priority",
      description:
        "We measure our success by the results we deliver for our clients.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-purple-300/20 rounded-full blur-[100px]"></div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full">
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <motion.div
              className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium inline-flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Why Saudi Businesses Trust Us
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saudi-black to-primary">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Saudi Ease delivers exceptional digital solutions with a focus on
            quality, innovation, and client satisfaction. Our deep understanding
            of the Saudi market gives us a unique advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow border border-gray-100 h-full z-10 relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0L100 0L100 100"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 100L0 100L0 0"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                    {feature.icon}
                    <div className="absolute inset-0 rounded-xl border border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-saudi-black mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6">{feature.description}</p>

                {/* Additional information that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "auto" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="border-t border-gray-100 pt-4 mt-4"
                >
                  <h4 className="text-sm font-semibold text-primary mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Trusted by 200+ Saudi businesses</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>95% client retention rate</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Award-winning service quality</span>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>10+ years in the Saudi market</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Compliant with local regulations</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Culturally-aware solutions</span>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Dedicated account managers</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>24/7 support in Arabic & English</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Transparent reporting</span>
                        </li>
                      </>
                    )}
                  </ul>
                </motion.div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-10">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  200+
                </motion.div>
                <p className="text-gray-600">Saudi Clients</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  95%
                </motion.div>
                <p className="text-gray-600">Client Retention</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  10+
                </motion.div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  500+
                </motion.div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
