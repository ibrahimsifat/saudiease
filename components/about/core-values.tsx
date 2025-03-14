"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lightbulb, Shield, Users, Zap, Award } from "lucide-react"

export default function CoreValues() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description:
        "We constantly explore new technologies and approaches to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description:
        "We build relationships based on trust, transparency, and honest communication, ensuring our clients can rely on us completely.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our work, from design to development, delivering solutions that exceed expectations.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client Focus",
      description:
        "We put our clients at the center of everything we do, understanding their unique needs and tailoring our solutions accordingly.",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Agility",
      description:
        "We embrace change and adapt quickly to new challenges, ensuring we can respond effectively to evolving client needs and market trends.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            What Drives Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            These principles guide our decisions, shape our culture, and define how we work with our clients and each
            other
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-saudi-black mb-3 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

