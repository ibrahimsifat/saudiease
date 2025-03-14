"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function NewsSection() {
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

  const newsItems = [
    {
      title: "Saudi Ease Wins Best Digital Agency Award 2023",
      date: "October 15, 2023",
      category: "Awards",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "Saudi Ease has been recognized as the Best Digital Agency at the prestigious Saudi Digital Awards 2023.",
    },
    {
      title: "Saudi Ease Launches New AI-Powered Service",
      date: "September 5, 2023",
      category: "Product Launch",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "We're excited to announce our new AI-powered service designed to help businesses automate customer interactions.",
    },
    {
      title: "Saudi Ease Expands Operations to Jeddah",
      date: "August 20, 2023",
      category: "Company News",
      image: "/placeholder.svg?height=400&width=600",
      excerpt:
        "We're thrilled to announce the opening of our new office in Jeddah to better serve our clients in the western region.",
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
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">News & Announcements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest news, events, and announcements from Saudi Ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-saudi-black mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button
                  variant="ghost"
                  className="p-0 text-primary hover:text-primary/90 hover:bg-transparent group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">View All News</Button>
        </div>
      </motion.div>
    </section>
  )
}

