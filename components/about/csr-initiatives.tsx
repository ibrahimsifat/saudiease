"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { BookOpen, Leaf, Users, Heart } from "lucide-react"

export default function CSRInitiatives() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const initiatives = [
    {
      title: "Digital Skills Training",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      description:
        "We provide free digital skills training to underprivileged youth across Saudi Arabia, empowering the next generation with valuable tech skills.",
    },
    {
      title: "Environmental Sustainability",
      icon: <Leaf className="h-6 w-6 text-primary" />,
      description:
        "Our green initiatives include paperless operations, energy-efficient practices, and regular tree-planting activities across the Kingdom.",
    },
    {
      title: "Community Support",
      icon: <Users className="h-6 w-6 text-primary" />,
      description:
        "We actively support local communities through various outreach programs, volunteer work, and charitable donations.",
    },
    {
      title: "Pro Bono Services",
      icon: <Heart className="h-6 w-6 text-primary" />,
      description:
        "We provide free digital services to selected non-profit organizations that are making a positive impact in Saudi society.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
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
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Giving Back
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Corporate Social Responsibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            At Saudi Ease, we're committed to making a positive impact in our communities and contributing to Saudi
            Vision 2030
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=1200" alt="CSR initiatives" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-saudi-black mb-2">{initiative.title}</h3>
                      <p className="text-gray-600">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 mt-4">
                <p className="text-gray-600 mb-4">
                  Our CSR initiatives align with Saudi Vision 2030's goals of social responsibility and sustainable
                  development. We believe that as a business, we have a responsibility to contribute positively to
                  society and the environment.
                </p>
                <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                  Learn More About Our CSR Initiatives
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

