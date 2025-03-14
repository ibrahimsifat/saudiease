"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PartnersSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
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
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Strategic Alliances
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Our Technology Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading technology providers to deliver cutting-edge solutions that drive your business
            forward.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
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

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-saudi-black mb-4">Become a Partner</h3>
              <p className="text-gray-600 mb-6">
                Join our partner ecosystem to collaborate on innovative solutions for Saudi businesses. Together, we can
                create greater value for our clients.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white">Partner With Us</Button>
            </div>
            <div className="relative h-48 md:h-64">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Partnership illustration"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

