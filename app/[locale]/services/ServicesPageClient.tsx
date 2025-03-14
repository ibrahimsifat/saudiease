"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ArrowRight, Search, CheckCircle2, Star, Users, BarChart3, Clock, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { services } from "@/data/services"
import Script from "next/script"
import { useEffect } from "react"

// Service categories for filtering
const categories = [
  { id: "all", name: "All Services" },
  { id: "web", name: "Web & Apps" },
  { id: "finance", name: "Finance & Accounting" },
  { id: "design", name: "Design & Branding" },
  { id: "marketing", name: "Marketing & Growth" },
]

// Frequently asked questions about services
const faqs = [
  {
    question: "How long does it take to develop a custom website?",
    answer:
      "The timeline for custom website development typically ranges from 4-12 weeks depending on the complexity, features required, and your feedback cycles. We provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "Are your e-invoicing solutions compliant with ZATCA regulations?",
    answer:
      "Yes, all our e-invoicing solutions are fully compliant with the latest ZATCA (Zakat, Tax and Customs Authority) regulations in Saudi Arabia. We stay updated with regulatory changes to ensure continuous compliance for your business.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "We offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our support includes technical troubleshooting, content updates, security patches, and performance optimization.",
  },
  {
    question: "Can you help with migrating from our existing systems?",
    answer:
      "Yes, we specialize in smooth transitions from existing systems. Our team will assess your current setup, develop a migration strategy, and implement it with minimal disruption to your business operations.",
  },
  {
    question: "Do you offer services in both English and Arabic?",
    answer:
      "Yes, we provide fully bilingual services in both English and Arabic. All our websites, applications, and marketing materials can be developed in either or both languages to best serve your target audience in Saudi Arabia.",
  },
]

// Service comparison data
const serviceComparison = [
  {
    category: "Web Development",
    tiers: [
      {
        name: "Essential",
        price: "Starting at SAR 5,000",
        features: ["Responsive design", "5 pages", "Contact form", "Basic SEO", "3 months support"],
      },
      {
        name: "Professional",
        price: "Starting at SAR 12,000",
        features: [
          "Responsive design",
          "10-15 pages",
          "Advanced forms",
          "CMS integration",
          "Comprehensive SEO",
          "6 months support",
        ],
      },
      {
        name: "Enterprise",
        price: "Starting at SAR 25,000",
        features: [
          "Custom design",
          "Unlimited pages",
          "Advanced functionality",
          "E-commerce capabilities",
          "API integrations",
          "12 months support",
        ],
      },
    ],
  },
]

// Client testimonials specific to services
const serviceTestimonials = [
  {
    id: 1,
    name: "Mohammed Al-Harbi",
    position: "CEO, Al Madar Technologies",
    company: "Al Madar Technologies",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Saudi Ease transformed our online presence with a stunning website that perfectly represents our brand. Their attention to detail and technical expertise exceeded our expectations.",
    service: "web-development",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Al-Saud",
    position: "Finance Director",
    company: "Riyadh Retail Group",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Implementing Saudi Ease's e-invoicing solution has streamlined our financial processes and ensured our compliance with ZATCA regulations. Their team provided exceptional support throughout the transition.",
    service: "e-invoicing",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Al-Qahtani",
    position: "Marketing Manager",
    company: "Saudi Vision Enterprises",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The digital marketing campaign developed by Saudi Ease delivered remarkable results. Our online visibility increased significantly, and we saw a 40% growth in qualified leads within just three months.",
    service: "digital-marketing",
    rating: 5,
  },
]

// Function to filter services by category
const filterServicesByCategory = (category: string) => {
  if (category === "all") return services

  const categoryMapping: Record<string, string[]> = {
    web: ["web-development"],
    finance: ["e-invoicing"],
    design: ["graphic-design"],
    marketing: ["digital-marketing"],
  }

  return services.filter((service) => categoryMapping[category]?.includes(service.id))
}

// Function to generate structured data for the services page
const generateServicesPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Saudi Ease",
          url: "https://saudiease.com",
        },
        url: `https://saudiease.com/services/${service.id}`,
      },
    })),
  }
}

export default function ServicesPageClient() {
  useEffect(() => {
    console.log("Client component mounted")
  }, [])

  return (
    <main className="min-h-screen">
      {/* Structured Data */}
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServicesPageSchema()) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-primary font-medium" aria-current="page">
                    Services
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Tailored Digital Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-saudi-black mb-6 tracking-tight">
                Empowering Saudi Businesses with{" "}
                <span className="text-primary relative">
                  Premium Services
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive digital solutions designed specifically for the Saudi market, helping your business thrive
                in the digital age with innovative technology and strategic expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="#service-finder">Find Your Ideal Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="#comparison">Compare Service Packages</Link>
                </Button>
              </div>

              {/* Service stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-gray-600">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Saudi Ease Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Trusted by Leading Saudi Businesses</h3>
                  <p className="text-white/80 mb-4">
                    Join hundreds of successful companies leveraging our digital expertise
                  </p>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="text-white ml-2">5.0 (120+ reviews)</span>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full shadow-lg p-4 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full shadow-lg p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Finder Section */}
      <section id="service-finder" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Find Your Perfect Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Discover Our Specialized Services</h2>
            <p className="text-lg text-gray-600">
              Browse our comprehensive range of digital services tailored for businesses in Saudi Arabia
            </p>
          </div>

          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search services..."
                className="pl-10 py-6 text-base rounded-lg border-gray-200 focus:border-primary"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select className="pl-10 pr-10 py-3 text-base rounded-lg border border-gray-200 focus:border-primary w-full appearance-none bg-white">
                <option value="">Filter by industry</option>
                <option value="retail">Retail</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="hospitality">Hospitality</option>
              </select>
              <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Service categories tabs */}
          <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white py-3 px-4 rounded-lg text-gray-700 border border-gray-200 hover:border-primary/50 transition-all"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterServicesByCategory(category.id).map((service) => (
                    <Card
                      key={service.id}
                      className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 relative bg-white"
                    >
                      {/* Hover effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>

                      {/* Service badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-medium">
                          {service.id === "web-development"
                            ? "Popular"
                            : service.id === "e-invoicing"
                              ? "ZATCA Compliant"
                              : service.id === "graphic-design"
                                ? "Creative"
                                : "Growth"}
                        </Badge>
                      </div>

                      <CardHeader className="relative pt-12 pb-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          {<service.icon className="h-8 w-8 text-primary relative z-10" />}
                        </div>
                        <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="relative pb-4">
                        <CardDescription className="text-gray-600 text-base mb-6">
                          {service.description}
                        </CardDescription>

                        {/* Key features list */}
                        <div className="space-y-3 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                <svg
                                  className="h-3 w-3 text-primary"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Service metrics */}
                        <div className="flex justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>
                              {service.id === "web-development"
                                ? "4-8 weeks"
                                : service.id === "e-invoicing"
                                  ? "2-4 weeks"
                                  : service.id === "graphic-design"
                                    ? "1-3 weeks"
                                    : "Ongoing"}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <BarChart3 className="h-4 w-4 mr-1" />
                            <span>
                              {service.id === "web-development"
                                ? "High ROI"
                                : service.id === "e-invoicing"
                                  ? "Compliance"
                                  : service.id === "graphic-design"
                                    ? "Brand Value"
                                    : "Growth"}
                            </span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button className="bg-primary hover:bg-primary/90 text-white w-full group" asChild>
                          <Link href={`/services/${service.id}`} className="flex items-center justify-center">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>

                      {/* Animated border on hover */}
                      <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Service Comparison Section */}
      <section id="comparison" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Service Packages
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Compare Our Service Tiers</h2>
            <p className="text-lg text-gray-600">
              Find the perfect package that aligns with your business needs and budget
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 border-b-2 border-gray-200"></th>
                  {serviceComparison[0].tiers.map((tier, index) => (
                    <th
                      key={index}
                      className={`p-4 text-center border-b-2 ${
                        index === 1 ? "bg-primary/10 border-primary" : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="text-xl font-bold mb-2">{tier.name}</div>
                      <div className="text-sm text-gray-600">{tier.price}</div>
                      {index === 1 && <Badge className="bg-primary text-white mt-2">Most Popular</Badge>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {serviceComparison[0].tiers[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-100">
                    <td className="p-4 font-medium text-gray-700">
                      {featureIndex === 0
                        ? "Design"
                        : featureIndex === 1
                          ? "Pages"
                          : featureIndex === 2
                            ? "Forms & Interaction"
                            : featureIndex === 3
                              ? "Content Management"
                              : featureIndex === 4
                                ? "SEO Features"
                                : "Support Period"}
                    </td>
                    {serviceComparison[0].tiers.map((tier, tierIndex) => (
                      <td key={tierIndex} className={`p-4 text-center ${tierIndex === 1 ? "bg-primary/5" : ""}`}>
                        <div className="flex items-center justify-center">
                          <CheckCircle2
                            className={`h-5 w-5 mr-2 ${tierIndex === 1 ? "text-primary" : "text-gray-500"}`}
                          />
                          <span>{tier.features[featureIndex]}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4"></td>
                  {serviceComparison[0].tiers.map((tier, index) => (
                    <td key={index} className="p-4 text-center">
                      <Button
                        className={
                          index === 1
                            ? "bg-primary hover:bg-primary/90 text-white w-full"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800 w-full"
                        }
                      >
                        Select {tier.name}
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>
              Need a custom package?{" "}
              <Link href="/contact" className="text-primary font-medium">
                Contact us
              </Link>{" "}
              for a tailored solution.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Client Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from businesses that have transformed their digital presence with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-primary/10 font-serif">"</div>

                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-primary/20"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6">{testimonial.quote}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/10">
                    {testimonial.service === "web-development"
                      ? "Website Development"
                      : testimonial.service === "e-invoicing"
                        ? "E-Invoicing Solution"
                        : testimonial.service === "graphic-design"
                          ? "Graphic Design"
                          : "Digital Marketing"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">
              Common Questions About Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to the most frequently asked questions about our digital services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                  <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/5 rounded-tr-full"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full mix-blend-overlay filter blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Let's discuss how our tailored digital services can help your business thrive in the competitive Saudi
                  market. Our team of experts is ready to develop solutions that meet your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/portfolio">View Our Portfolio</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-2 relative">
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur-sm"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Fill out this form for a no-obligation quote for your project
                  </p>

                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    />
                    <Input
                      placeholder="Email Address"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                    />
                    <select className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white focus:border-white">
                      <option value="" className="text-gray-800">
                        Select a Service
                      </option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id} className="text-gray-800">
                          {service.title}
                        </option>
                      ))}
                    </select>
                    <Button className="w-full bg-white text-primary hover:bg-white/90">Request Quote</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  )
}

