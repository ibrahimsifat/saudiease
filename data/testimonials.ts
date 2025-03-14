export interface Testimonial {
  id: number
  text: string
  name: string
  position: string
  company: string
  image: string
  rating: number
  location: string
  project: string
  industry?: string
  date?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Saudi Ease transformed our online presence with a stunning e-commerce platform. Our sales have increased by 40% since launch, and customer feedback has been overwhelmingly positive.",
    name: "Abdullah Al-Qahtani",
    position: "CEO",
    company: "Al-Madinah Retail Group",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    location: "Riyadh",
    project: "E-commerce Platform",
    industry: "Retail",
    date: "March 2023",
  },
  {
    id: 2,
    text: "The e-invoicing solution provided by Saudi Ease has streamlined our accounting processes and saved us countless hours of manual work. Their team was professional and responsive throughout the implementation.",
    name: "Layla Mohammed",
    position: "Finance Director",
    company: "Saudi Retail Group",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    location: "Jeddah",
    project: "E-invoicing System",
    industry: "Retail",
    date: "February 2023",
  },
  {
    id: 3,
    text: "We're extremely satisfied with the website Saudi Ease created for our medical center. The online appointment booking system has significantly reduced our administrative workload and improved patient satisfaction.",
    name: "Dr. Fahad Al-Harbi",
    position: "Medical Director",
    company: "Riyadh Medical Center",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    location: "Riyadh",
    project: "Healthcare Website",
    industry: "Healthcare",
    date: "January 2023",
  },
  {
    id: 4,
    text: "Saudi Ease delivered a beautiful, functional website for our manufacturing business that perfectly represents our brand. Their attention to detail and technical expertise exceeded our expectations.",
    name: "Khalid Al-Otaibi",
    position: "Marketing Manager",
    company: "Saudi Industrial Solutions",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    location: "Dammam",
    project: "Corporate Website",
    industry: "Manufacturing",
    date: "December 2022",
  },
]

