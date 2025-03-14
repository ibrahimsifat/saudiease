"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AboutHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Animated gradient orbs */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-gradient-to-br from-primary/10 to-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      {/* SVG pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="ml-1 text-primary font-medium" aria-current="page">
                  About Us
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">
              Transforming Saudi Businesses Through
              <span className="relative ml-3">
                <span className="relative z-10 text-primary">Digital Innovation</span>
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,5 C50,0 150,0 200,5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2018, Saudi Ease has been at the forefront of digital transformation in the Kingdom, helping
              businesses of all sizes embrace technology and thrive in the digital age. Our journey is defined by
              innovation, excellence, and a deep commitment to our clients' success.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">Years of Excellence</p>
                  <p className="text-sm text-gray-600">Serving Saudi businesses</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">250+</span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">Clients Served</p>
                  <p className="text-sm text-gray-600">Across Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">35+</span>
                </div>
                <div>
                  <p className="font-medium text-saudi-black">Team Members</p>
                  <p className="text-sm text-gray-600">Dedicated professionals</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Saudi Ease team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[200px] z-10"
              >
                <p className="text-sm font-medium text-saudi-black mb-1">Our Vision</p>
                <p className="text-xs text-gray-600">
                  To be the leading digital transformation partner for businesses across Saudi Arabia
                </p>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-dashed border-primary/20 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

