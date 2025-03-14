"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, BarChart2, Award, Clock } from "lucide-react"

export default function StatisticsSection() {
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

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "250+",
      label: "Clients Served",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "15+",
      label: "Industry Awards",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "5+",
      label: "Years Experience",
    },
  ]

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-blue-50/30"></div>

        {/* Animated floating shapes */}
        <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-blue-200/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-[15%] w-72 h-72 rounded-full bg-gradient-to-l from-primary/5 to-purple-100/20 blur-3xl animate-pulse-slow-reverse"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[20%] w-20 h-20 rounded-full border border-primary/10 animate-spin-slow opacity-70"></div>
        <div className="absolute bottom-1/3 left-[25%] w-16 h-16 rounded-full border border-primary/10 animate-spin-slow-reverse opacity-70"></div>

        {/* SVG pattern overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
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

      <motion.div ref={ref} style={{ y }} className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 border border-white/40 relative overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/30 rounded-br-2xl"></div>

            {/* Glowing accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group relative"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    <div className="inline-flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 shadow-inner">
                        {stat.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 group-hover:text-primary/80 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

