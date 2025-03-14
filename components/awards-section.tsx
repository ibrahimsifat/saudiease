"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Calendar, MapPin } from "lucide-react"

export default function AwardsSection() {
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

  const awards = [
    {
      title: "Best Digital Agency",
      organization: "Saudi Digital Awards",
      year: "2023",
      image: "/placeholder.svg?height=200&width=200",
      location: "Riyadh",
    },
    {
      title: "Excellence in Web Development",
      organization: "MENA Tech Awards",
      year: "2022",
      image: "/placeholder.svg?height=200&width=200",
      location: "Dubai",
    },
    {
      title: "Innovation in E-commerce",
      organization: "Saudi E-commerce Forum",
      year: "2022",
      image: "/placeholder.svg?height=200&width=200",
      location: "Jeddah",
    },
    {
      title: "Best UX Design",
      organization: "Gulf Design Awards",
      year: "2021",
      image: "/placeholder.svg?height=200&width=200",
      location: "Riyadh",
    },
  ]

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-400/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float-slow"></div>
      </div>

      <motion.div ref={ref} style={{ y }} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary mr-2 animate-pulse"></span>
            Our Recognition
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            Awards & Recognition
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Our commitment to excellence has been recognized by leading industry organizations across the region,
            reflecting our dedication to innovation and quality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card background with animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative z-10 border border-gray-100 group-hover:border-transparent h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <div className="absolute -right-2 -top-2 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        {award.year}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {award.title}
                      </h3>
                      <p className="text-primary font-medium">{award.organization}</p>
                    </div>
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-gray-700 mb-1">Achievement Highlights:</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Excellence in digital innovation</li>
                        <li>Outstanding client satisfaction</li>
                        <li>Industry-leading solutions</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{award.year}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{award.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-xl shadow-md p-6 border border-gray-100 max-w-3xl">
            <p className="text-gray-700 mb-4">
              These awards reflect our dedication to delivering exceptional digital solutions for our clients. Each
              recognition fuels our passion to continue pushing boundaries in digital innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Innovation", "Excellence", "Quality", "Client Satisfaction", "Digital Transformation"].map(
                (tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

