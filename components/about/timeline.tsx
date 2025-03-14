"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description:
        "Saudi Ease was founded in Riyadh with a team of 5 professionals focused on web development services.",
    },
    {
      year: "2019",
      title: "Service Expansion",
      description: "Added e-invoicing and graphic design services to our portfolio, growing our client base by 150%.",
    },
    {
      year: "2020",
      title: "Team Growth",
      description: "Expanded to 15 team members and moved to a larger office space in Riyadh's business district.",
    },
    {
      year: "2021",
      title: "First Major Award",
      description: "Recognized as 'Best Digital Agency' at the Saudi Digital Awards, completing our 100th project.",
    },
    {
      year: "2022",
      title: "Jeddah Office",
      description: "Opened our second office in Jeddah to better serve clients in the western region of Saudi Arabia.",
    },
    {
      year: "2023",
      title: "International Partnership",
      description: "Formed strategic partnerships with global technology providers to enhance our service offerings.",
    },
  ]

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
            Our Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Key Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Significant moments that have shaped our growth and success over the years
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 h-full rounded-full hidden md:block"
          ></motion.div>

          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className={`md:text-right ${index % 2 !== 0 ? "md:col-start-2" : ""}`}
                  >
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 relative ${index % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}
                    >
                      <div className="absolute top-0 left-0 h-full w-1 bg-primary rounded-l-xl"></div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-saudi-black mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </motion.div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md hidden md:block"
                  ></motion.div>

                  {/* Empty column for layout */}
                  {index % 2 === 0 ? <div></div> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

