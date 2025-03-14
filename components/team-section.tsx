"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
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

  const teamMembers = [
    {
      name: "Abdullah Al-Qahtani",
      position: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in digital transformation, Abdullah leads our vision to empower Saudi businesses.",
      linkedin: "#",
      twitter: "#",
      email: "abdullah@saudiease.com",
    },
    {
      name: "Fatima Al-Saud",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Fatima brings extensive expertise in software development and emerging technologies to drive innovation.",
      linkedin: "#",
      twitter: "#",
      email: "fatima@saudiease.com",
    },
    {
      name: "Mohammed Al-Harbi",
      position: "Creative Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mohammed leads our design team with a passion for creating beautiful, functional digital experiences.",
      linkedin: "#",
      twitter: "#",
      email: "mohammed@saudiease.com",
    },
    {
      name: "Layla Khalid",
      position: "Client Success Manager",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Layla ensures our clients receive exceptional service and achieve their business objectives.",
      linkedin: "#",
      twitter: "#",
      email: "layla@saudiease.com",
    },
  ]

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our talented team brings together decades of experience in digital solutions, technology, and business
            strategy to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={member.twitter}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-saudi-black mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to join our team? We're always looking for talented individuals.</p>
          <a href="/careers" className="text-primary font-medium hover:underline inline-flex items-center">
            View Open Positions
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

