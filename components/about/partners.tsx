"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Partners() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const partners = [
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Technology Partner",
    },
    {
      name: "Oracle",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Technology Partner",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Cloud Partner",
    },
    {
      name: "Google Cloud",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Cloud Partner",
    },
    {
      name: "Salesforce",
      logo: "/placeholder.svg?height=80&width=160",
      type: "CRM Partner",
    },
    {
      name: "Adobe",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Creative Partner",
    },
    {
      name: "SAP",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Enterprise Partner",
    },
    {
      name: "HubSpot",
      logo: "/placeholder.svg?height=80&width=160",
      type: "Marketing Partner",
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
            Strategic Alliances
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Our Technology Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We collaborate with leading technology providers to deliver cutting-edge solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
            >
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-saudi-black font-medium text-center">{partner.name}</h3>
              <p className="text-gray-500 text-sm text-center">{partner.type}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Interested in partnering with Saudi Ease? We're always looking for strategic partnerships that create value
            for our clients.
          </p>
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            Become a Partner
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

