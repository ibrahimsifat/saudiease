"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Building2,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Factory,
  Home,
  Plane,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

// Add keyframes for floating animation
const floatKeyframes = `
@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}
`

// Add the keyframes to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.innerHTML = floatKeyframes
  document.head.appendChild(style)
}

export default function IndustriesSection() {
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

  const industries = [
    {
      name: "Retail & E-commerce",
      icon: <ShoppingBag className="h-6 w-6" />,
      description:
        "Digital solutions for retail businesses, from e-commerce platforms to inventory management systems.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Corporate & Enterprise",
      icon: <Building2 className="h-6 w-6" />,
      description:
        "Enterprise-grade solutions for large corporations, including digital transformation and IT consulting.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Small & Medium Business",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "Affordable digital solutions for SMBs, helping establish online presence and streamline operations.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      description:
        "Digital solutions for educational institutions, including learning management systems and student portals.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Healthcare",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Specialized solutions for healthcare providers, including appointment systems and patient portals.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Manufacturing",
      icon: <Factory className="h-6 w-6" />,
      description: "Digital solutions for manufacturing businesses, including inventory and supply chain optimization.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Real Estate",
      icon: <Home className="h-6 w-6" />,
      description: "Property management systems, virtual tours, and marketing solutions for real estate businesses.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Travel & Hospitality",
      icon: <Plane className="h-6 w-6" />,
      description:
        "Booking systems, customer experience platforms, and marketing solutions for the hospitality sector.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden perspective-1000">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-primary/30 rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(50px)",
                animation: `float ${Math.random() * 10 + 15}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute h-px w-full bg-primary" style={{ top: `${i * 5}%` }}></div>
          ))}
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-px h-full bg-primary" style={{ left: `${i * 5}%` }}></div>
          ))}
        </div>
      </div>

      <motion.div
        ref={ref}
        style={{ y }}
        className="container mx-auto px-4 relative"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10">
          {/* Section header with clean, modern design */}
          <div className="flex flex-col items-center mb-16 relative">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-10 bg-primary/30"></div>
              <span className="mx-4 text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                INDUSTRIES
              </span>
              <div className="h-px w-10 bg-primary/30"></div>
            </div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-saudi-black mb-4 text-center"
            >
              Digital Solutions <span className="text-primary">Across Industries</span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-600 max-w-2xl text-center"
            >
              We deliver tailored digital solutions that drive innovation and growth across diverse sectors in Saudi
              Arabia.
            </motion.p>
          </div>

          {/* Carousel for industry cards */}
          <div className="relative mt-12 mb-16">
            {/* Carousel container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6 py-4"
                drag="x"
                dragConstraints={{ left: -1200, right: 0 }}
                initial={{ x: 0 }}
                animate={{ x: inView ? [-1200, 0] : 0 }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "mirror",
                  duration: 30,
                  ease: "linear",
                }}
              >
                {/* Double the industries for infinite scroll effect */}
                {[...industries, ...industries].map((industry, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="flex-shrink-0 w-[300px] bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Card header with gradient */}
                    <div className="h-3 bg-gradient-to-r from-primary/80 via-primary to-primary/80"></div>

                    {/* Card content */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 shadow-inner">
                          {industry.icon}
                        </div>
                        <h3 className="text-xl font-bold text-saudi-black">{industry.name}</h3>
                      </div>

                      <p className="text-gray-600 mb-4">{industry.description}</p>

                      {/* Key services tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Digital Strategy", "Custom Solutions", "Data Analytics"].map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card footer */}
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                        <span className="text-sm text-primary font-medium">Learn more</span>
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Carousel controls */}
            <div className="flex justify-center mt-8 gap-2">
              {[...Array(4)].map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? "w-8 bg-primary" : "w-2 bg-gray-300"}`}
                  aria-label={`Go to slide ${i + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Simple, informative industry stats section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Stats and information */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-saudi-black mb-4">Industry Expertise</h3>
                <p className="text-gray-600 mb-6">
                  Our team brings specialized knowledge across multiple industries, allowing us to create solutions that
                  address your unique challenges.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">12+</span>
                    <span className="text-gray-600">Industries Served</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">200+</span>
                    <span className="text-gray-600">Projects Completed</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">95%</span>
                    <span className="text-gray-600">Client Retention</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">8+</span>
                    <span className="text-gray-600">Years Experience</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <Link href="/schedule-consultation">Schedule Consultation</Link>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    View Case Studies
                  </Button>
                </div>
              </div>

              {/* Image section */}
              <div className="relative h-full min-h-[300px] bg-gray-100">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Industry expertise"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent mix-blend-multiply"></div>

                {/* Floating industry badges */}
                <div className="absolute top-6 right-6 bg-white rounded-lg shadow-md p-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="font-medium">Enterprise Solutions</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md p-3">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span className="font-medium">Retail Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

