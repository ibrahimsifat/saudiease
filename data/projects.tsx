import type { JSX } from "react"

export interface Project {
  id: number
  title: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  image: string
  mobileImage: string
  stats: {
    icon: JSX.Element
    label: string
    value: string
  }[]
  link: string
  client?: string
  duration?: string
  completionDate?: string
  testimonial?: string
  challenge?: string
  solution?: string
  results?: string
}

export const projects = [
  {
    id: 1,
    title: "Al-Madinah E-Commerce Platform",
    category: "E-Commerce",
    description:
      "A comprehensive e-commerce solution for a leading Saudi retailer, featuring product catalog, secure checkout, and customer account management.",
    features: [
      "Responsive design for all devices",
      "Integration with local payment gateways",
      "Arabic and English language support",
      "Advanced product filtering and search",
      "Customer reviews and ratings system",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=800&width=1200",
    mobileImage: "/placeholder.svg?height=600&width=300",
    stats: [
      {
        icon: (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
        label: "Conversion Rate",
        value: "+45%",
      },
      {
        icon: (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ),
        label: "Customer Satisfaction",
        value: "4.9/5",
      },
    ],
    link: "#",
    client: "Al-Madinah Retail Group",
    duration: "4 months",
    completionDate: "March 2023",
    challenge:
      "Al-Madinah Retail Group needed a modern e-commerce platform to expand their business online while maintaining their brand identity and providing a seamless shopping experience for their customers.",
    solution:
      "We developed a custom e-commerce platform with a focus on user experience, mobile responsiveness, and integration with local payment gateways. The platform includes advanced product filtering, customer reviews, and a robust admin dashboard for inventory management.",
    results:
      "Since launch, the platform has seen a 45% increase in conversion rates and a significant boost in online sales. Customer feedback has been overwhelmingly positive, with a 4.9/5 satisfaction rating.",
  },
  {
    id: 2,
    title: "Riyadh Medical Center Website",
    category: "Healthcare",
    description:
      "A modern, user-friendly website for a leading medical center in Riyadh, featuring appointment booking, doctor profiles, and service information.",
    features: [
      "Online appointment scheduling system",
      "Doctor search and filtering",
      "Service information and pricing",
      "Patient testimonials",
      "Interactive clinic location map",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase", "Google Maps API"],
    image: "/placeholder.svg?height=800&width=1200",
    mobileImage: "/placeholder.svg?height=600&width=300",
    stats: [
      {
        icon: (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
        label: "Appointment Bookings",
        value: "+120%",
      },
      {
        icon: (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ),
        label: "Patient Satisfaction",
        value: "4.8/5",
      },
    ],
    link: "#",
    client: "Riyadh Medical Center",
    duration: "3 months",
    completionDate: "January 2023",
    challenge:
      "Riyadh Medical Center needed to modernize their online presence and streamline their appointment booking process to reduce administrative workload and improve patient experience.",
    solution:
      "We developed a modern, user-friendly website with an integrated appointment booking system, comprehensive doctor profiles, and detailed service information. The website is fully responsive and optimized for both Arabic and English users.",
    results:
      "The new website has resulted in a 120% increase in online appointment bookings and significantly reduced administrative workload. Patient satisfaction has improved to 4.8/5 based on post-appointment surveys.",
  },
]

