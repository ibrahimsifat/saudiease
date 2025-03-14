"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Add these CSS utility classes
const styles = {
  "perspective-1000": "perspective-[1000px]",
  "transform-style-3d": "transform-style-preserve-3d",
  "rotate-y-10": "rotate-y-[10deg]",
}

export default function LatestTechnologies() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Replace the technologies array with this updated version that includes SVG icons
  const technologies = [
    {
      name: "React",
      description: "Building interactive user interfaces",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#61DAFB]">
          <path
            fill="currentColor"
            d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
          />
        </svg>
      ),
    },
    {
      name: "Next.js",
      description: "The React framework for production",
      icon: (
        <svg viewBox="0 0 180 180" className="h-12 w-12">
          <mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
            <circle cx="90" cy="90" fill="black" r="90"></circle>
          </mask>
          <g mask="url(#mask0_408_134)">
            <circle cx="90" cy="90" fill="black" r="90"></circle>
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#paint0_linear_408_134)"
            ></path>
            <rect fill="url(#paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_408_134"
              x1="109"
              x2="144.5"
              y1="116.5"
              y2="160.5"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_408_134"
              x1="121"
              x2="120.799"
              y1="54"
              y2="106.875"
            >
              <stop stopColor="white"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#539e43]">
          <path
            fill="currentColor"
            d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.027.129-.016.185.021l1.87 1.12c.074.036.166.036.231 0l7.299-4.217c.072-.039.119-.119.119-.203v-8.408c0-.084-.047-.164-.119-.202l-7.299-4.219c-.068-.039-.164-.039-.231 0l-7.301 4.219c-.074.037-.119.118-.119.202v8.408c0 .084.045.164.119.203l1.999 1.154c1.082.541 1.762-.095 1.762-.735v-8.294c0-.11.091-.203.203-.203h.926c.11 0 .203.092.203.203v8.294c0 1.439-.788 2.264-2.149 2.264-.422 0-.752 0-1.688-.46l-1.904-1.1c-.478-.275-.772-.789-.772-1.34v-8.408c0-.55.295-1.064.772-1.339l7.299-4.219c.461-.258 1.084-.258 1.544 0l7.299 4.219c.479.275.772.789.772 1.339v8.408c0 .55-.295 1.064-.772 1.34l-7.299 4.217c-.24.128-.498.202-.773.202zm2.348-5.811c-3.195 0-3.867-1.469-3.867-2.693 0-.11.091-.203.203-.203h.943c.103 0 .186.075.203.175.137.955.547 1.432 2.519 1.432 1.545 0 2.202-.35 2.202-1.175 0-.477-.186-.825-2.599-1.064-2.013-.193-3.255-.646-3.255-2.274 0-1.492 1.256-2.383 3.375-2.383 2.375 0 3.551.825 3.688 2.587.006.055-.016.108-.051.148-.033.039-.084.062-.137.062h-.945c-.091 0-.174-.066-.193-.156-.214-1.012-.786-1.34-2.363-1.34-1.746 0-1.95.607-1.95 1.064 0 .55.239.711 2.519.999 2.265.293 3.337.707 3.337 2.324 0 1.615-1.347 2.498-3.691 2.498z"
          />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript for better code",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#3178c6]">
          <path
            fill="currentColor"
            d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#38bdf8]">
          <path
            fill="currentColor"
            d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c0.913 0.228 1.565 0.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8z M6.001 12c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c0.913 0.228 1.565 0.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
          />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      description: "NoSQL database solution",
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#47A248]">
          <path
            fill="currentColor"
            d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section ref={ref} className="py-28 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Modern Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/10 to-purple-500/5 rounded-full blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/10 to-primary/5 rounded-full blur-[100px] opacity-70"></div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 40 + 10,
              height: Math.random() * 40 + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 backdrop-blur-sm text-primary text-sm font-medium mb-6 border border-primary/10"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-blue-600 mr-2 animate-pulse"></span>
            Cutting-Edge Technology
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-saudi-black via-primary/90 to-blue-600/90"
          >
            Built With Modern Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We leverage the latest technologies to deliver high-performance, scalable solutions that keep you ahead of
            the competition
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="group perspective-1000"
            >
              <div className="relative h-full transform-style-3d group-hover:rotate-y-10 transition-all duration-500">
                {/* Tech-inspired background pattern */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20"></div>
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`tech-pattern-${index}`}
                        patternUnits="userSpaceOnUse"
                        width="10"
                        height="10"
                        patternTransform="rotate(45)"
                      >
                        <rect width="1" height="1" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#tech-pattern-${index})`} className="text-primary" />
                    {/* Circuit-like lines */}
                    <path
                      d="M20,20 L80,20 L80,80 L20,80 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary"
                    />
                    <path
                      d="M30,30 L70,30 L70,70 L30,70 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary"
                    />
                    <path
                      d="M20,20 L30,30 M80,20 L70,30 M80,80 L70,70 M20,80 L30,70"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-primary"
                    />
                  </svg>
                </div>

                {/* Card content */}
                <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-white/40 h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(8,112,184,0.2)] z-10">
                  {/* Glowing accent */}
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-blue-600/30 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

                  {/* Hexagonal icon container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl transform rotate-45 group-hover:rotate-[135deg] transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-600/10 rounded-xl transform -rotate-45 group-hover:rotate-[135deg] transition-all duration-700 delay-100"></div>
                    {/* Replace the Image component with the SVG icon in the card */}
                    <div className="relative h-20 w-20 flex items-center justify-center bg-white rounded-xl shadow-lg border border-white/50 group-hover:shadow-primary/20 transition-all duration-500 z-10">
                      {tech.icon}

                      {/* Animated dots */}
                      <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="absolute -left-1 -bottom-1 h-2 w-2 rounded-full bg-blue-600 animate-pulse delay-300"></div>
                    </div>
                  </div>

                  {/* Text content with enhanced styling */}
                  <h3 className="text-saudi-black font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className="w-10 h-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-full mb-3 transform origin-center scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"></div>
                  <p className="text-gray-600 text-sm">{tech.description}</p>

                  {/* Tech-inspired decorative elements */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 opacity-30 group-hover:opacity-70 transition-opacity duration-500">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" fill="none" />
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 text-center"
        >
          <Link href="/tech-stack">
            <Button className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white px-8 py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group">
              <span className="relative z-10">Explore Our Tech Stack</span>
              <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              <span className="absolute top-0 right-0 h-full w-8 bg-white/20 skew-x-[20deg] transform translate-x-10 group-hover:translate-x-32 transition-transform duration-1000"></span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

