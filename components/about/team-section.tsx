"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const executives = [
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
      position: "Client Success Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Layla ensures our clients receive exceptional service and achieve their business objectives.",
      linkedin: "#",
      twitter: "#",
      email: "layla@saudiease.com",
    },
  ]

  const departments = [
    {
      name: "Development",
      count: 12,
      description: "Expert developers specializing in web, mobile, and custom applications.",
    },
    {
      name: "Design",
      count: 8,
      description: "Creative professionals crafting beautiful, user-centered digital experiences.",
    },
    {
      name: "Marketing",
      count: 6,
      description: "Digital marketing specialists driving growth and engagement.",
    },
    {
      name: "Client Success",
      count: 5,
      description: "Dedicated team ensuring client satisfaction and project success.",
    },
    {
      name: "Operations",
      count: 4,
      description: "Professionals managing our internal processes and operations.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
            Our People
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Meet Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            The talented individuals guiding our company's vision and success
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {executives.map((executive, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={executive.image || "/placeholder.svg"}
                  alt={executive.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a
                        href={executive.linkedin}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`${executive.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={executive.twitter}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`${executive.name}'s Twitter profile`}
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={`mailto:${executive.email}`}
                        className="bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors"
                        aria-label={`Email ${executive.name}`}
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-saudi-black mb-1">{executive.name}</h3>
                <p className="text-primary font-medium mb-3">{executive.position}</p>
                <p className="text-gray-600 text-sm">{executive.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-saudi-black mb-6 text-center">Our Team Composition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="relative h-full flex items-center justify-center">
                <div className="relative h-64 w-64">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#f3f4f6" />
                    <circle cx="50" cy="50" r="35" fill="white" />
                    <path d="M50 15 A35 35 0 0 1 85 50 L50 50 Z" fill="#e63e65" opacity="0.8" />
                    <path d="M50 15 A35 35 0 0 0 15 50 L50 50 Z" fill="#e63e65" opacity="0.6" />
                    <path d="M50 85 A35 35 0 0 0 15 50 L50 50 Z" fill="#e63e65" opacity="0.4" />
                    <path d="M50 85 A35 35 0 0 1 85 50 L50 50 Z" fill="#e63e65" opacity="0.2" />
                    <text x="50" y="45" textAnchor="middle" fontSize="10" fontWeight="bold">
                      35
                    </text>
                    <text x="50" y="60" textAnchor="middle" fontSize="6">
                      Team Members
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {departments.map((department, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-saudi-black">{department.name}</h4>
                      <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded-full">
                        {department.count}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{department.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-saudi-black mb-2">Team Diversity</h4>
                <p className="text-gray-600 mb-4">
                  Our diverse team brings together talent from across Saudi Arabia and beyond, with a mix of experienced
                  professionals and fresh graduates.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[65%] rounded-full relative">
                        <span className="absolute right-2 text-xs text-white">65%</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Saudi Nationals</p>
                  </div>
                  <div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[40%] rounded-full relative">
                        <span className="absolute right-2 text-xs text-white">40%</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Women in workforce</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

