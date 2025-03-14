"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      text: "Saudi Ease transformed our online presence with a stunning e-commerce platform. Our sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive.",
      name: "Abdullah Al-Qahtani",
      position: "CEO",
      company: "Al-Madinah Retail Group",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      text: "The e-invoicing solution provided by Saudi Ease has streamlined our accounting processes and saved us countless hours of manual work. Their team was professional and responsive throughout the implementation.",
      name: "Layla Mohammed",
      position: "Finance Director",
      company: "Saudi Retail Group",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
    {
      text: "We're extremely satisfied with the website Saudi Ease created for our medical center. The online appointment booking system has significantly reduced our administrative workload and improved patient satisfaction.",
      name: "Dr. Fahad Al-Harbi",
      position: "Medical Director",
      company: "Riyadh Medical Center",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
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
            Client Feedback
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Hear from the businesses we've helped transform through our digital solutions
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="absolute top-0 right-0 -mt-6 -mr-6 h-12 w-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-primary/10 mx-auto">
                    <Image
                      src={testimonials[activeIndex].image || "/placeholder.svg"}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex items-center mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-xl text-gray-700 italic mb-6">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div>
                    <p className="text-lg font-bold text-saudi-black">{testimonials[activeIndex].name}</p>
                    <p className="text-primary">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>

                <div className="flex items-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "bg-primary w-6" : "bg-gray-300 w-2"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

