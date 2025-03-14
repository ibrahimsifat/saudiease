"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Users, CheckCircle, BarChart2 } from "lucide-react"

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "15+",
      label: "Industry Awards",
      description: "Recognition for excellence in digital solutions",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "250+",
      label: "Clients Served",
      description: "Across various industries in Saudi Arabia",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      value: "500+",
      label: "Projects Completed",
      description: "Delivering exceptional results on time",
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys",
    },
  ]

  const awards = [
    {
      name: "Best Digital Agency",
      organization: "Saudi Digital Awards",
      year: "2023",
    },
    {
      name: "Excellence in Web Development",
      organization: "MENA Tech Awards",
      year: "2022",
    },
    {
      name: "Innovation in E-commerce",
      organization: "Saudi E-commerce Forum",
      year: "2022",
    },
    {
      name: "Best UX Design",
      organization: "Gulf Design Awards",
      year: "2021",
    },
    {
      name: "Rising Star Agency",
      organization: "Riyadh Business Excellence Awards",
      year: "2020",
    },
    {
      name: "Best Mobile App",
      organization: "Saudi Mobile App Competition",
      year: "2019",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Our Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Celebrating our success and the impact we've made in the digital landscape
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex h-16 w-16 rounded-full bg-primary/10 items-center justify-center mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{achievement.value}</h3>
              <p className="text-lg font-semibold text-saudi-black mb-2">{achievement.label}</p>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-saudi-black mb-6 text-center">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-start"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-saudi-black">{award.name}</h4>
                  <p className="text-sm text-gray-600">{award.organization}</p>
                  <p className="text-xs text-primary mt-1">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

