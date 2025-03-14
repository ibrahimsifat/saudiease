"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Users, Leaf } from "lucide-react"

export default function CSRSection() {
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
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Giving Back
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Corporate Social Responsibility</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Saudi Ease, we're committed to making a positive impact in our communities and contributing to Saudi
            Vision 2030.
          </p>
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

              <Button className="bg-primary hover:bg-primary/90 text-white mt-4">
                Learn More About Our Initiatives
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Want to partner with us on our CSR initiatives? We're always looking for like-minded organizations.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

