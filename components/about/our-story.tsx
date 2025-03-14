"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function OurStory() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Our Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            The Saudi Ease Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Our journey from a small startup to a leading digital solutions provider in Saudi Arabia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Saudi Ease founding team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <p className="text-white/80 text-sm">Our founding team, 2018</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/10 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 text-gray-600">
              <p>
                <span className="text-saudi-black font-semibold">Saudi Ease was founded in 2018</span> by Abdullah
                Al-Qahtani, a visionary entrepreneur with a passion for technology and a deep understanding of the Saudi
                market. Recognizing the growing need for digital transformation in the Kingdom, Abdullah assembled a
                team of talented professionals to help businesses navigate the digital landscape.
              </p>

              <p>
                Our journey began in a small office in Riyadh with just five team members and a handful of clients.
                Despite our modest beginnings, we had a clear vision: to become the leading digital solutions provider
                in Saudi Arabia by delivering exceptional value and innovative solutions tailored to the unique needs of
                Saudi businesses.
              </p>

              <p>
                As Saudi Arabia embarked on its ambitious Vision 2030 journey, we positioned ourselves as enablers of
                digital transformation, helping businesses of all sizes embrace technology and thrive in the digital
                age. Our commitment to excellence and client satisfaction quickly earned us a reputation for reliability
                and innovation.
              </p>

              <p>
                <span className="text-saudi-black font-semibold">
                  By 2020, we had expanded our team to 15 professionals
                </span>{" "}
                and moved to a larger office to accommodate our growing operations. We broadened our service offerings
                to include e-commerce solutions, mobile app development, and digital marketing, allowing us to provide
                comprehensive digital solutions to our clients.
              </p>

              <p>
                <span className="text-saudi-black font-semibold">
                  Today, Saudi Ease stands as a testament to our founding vision.
                </span>{" "}
                With over 35 team members, offices in Riyadh and Jeddah, and more than 250 successful projects
                completed, we continue to drive digital innovation across the Kingdom. Our diverse team of experts
                brings together a wealth of knowledge and experience, enabling us to tackle complex challenges and
                deliver exceptional results for our clients.
              </p>

              <p>
                As we look to the future, we remain committed to our mission of empowering Saudi businesses with
                innovative digital solutions that drive growth and success. We continue to invest in our team, stay
                ahead of technological trends, and refine our processes to ensure we deliver the highest quality
                services to our clients.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

