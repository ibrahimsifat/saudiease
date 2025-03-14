import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronRight, ArrowRight, Check, Star, Award, Clock, Users, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { services } from "@/data/services"
import { serviceDetails } from "@/data/service-details"
import Script from "next/script"
import { generateServiceSchema } from "@/lib/schema"
import * as LucideIcons from "lucide-react"

// Dynamic metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = serviceDetails[params.id]

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: service.pageTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    openGraph: {
      title: service.pageTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: service.pageTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  }
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  // Find the service
  const serviceData = services.find((service) => service.id === params.id)
  const serviceDetail = serviceDetails[params.id]

  // If service not found, return 404
  if (!serviceData || !serviceDetail) {
    notFound()
  }

  // Merge the icon from services data
  serviceDetail.icon = serviceData.icon

  // Get related services
  const relatedServicesData = serviceDetail.relatedServices
    .map((id) => services.find((service) => service.id === id))
    .filter(Boolean)

  // Get Lucide icons dynamically
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle
    return Icon
  }

  // Testimonials specific to this service
  const serviceTestimonials = [
    {
      text: "Saudi Ease delivered exceptional results with their professional approach and attention to detail. Their team went above and beyond to ensure our project was a success.",
      author: "Mohammed Al-Harbi",
      position: "CEO",
      company: "Riyadh Technologies",
      rating: 5,
    },
    {
      text: "Working with Saudi Ease was a game-changer for our business. Their expertise and innovative solutions helped us achieve our goals faster than expected.",
      author: "Fatima Al-Saud",
      position: "Marketing Director",
      company: "Saudi Retail Group",
      rating: 5,
    },
  ]

  // Service packages/tiers
  const serviceTiers = [
    {
      name: "Essential",
      price: "SAR 5,000",
      description: "Perfect for small businesses just getting started",
      features: ["Core service features", "Basic customization", "Email support", "1 month of maintenance"],
      recommended: false,
    },
    {
      name: "Professional",
      price: "SAR 12,000",
      description: "Ideal for growing businesses with specific needs",
      features: [
        "All Essential features",
        "Advanced customization",
        "Priority support",
        "3 months of maintenance",
        "Performance optimization",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Comprehensive solution for large organizations",
      features: [
        "All Professional features",
        "Full customization",
        "Dedicated support manager",
        "12 months of maintenance",
        "Regular updates and improvements",
        "Integration with existing systems",
      ],
      recommended: false,
    },
  ]

  // Industry certifications
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
    },
    {
      name: "Saudi Business Bureau",
      description: "Certified Service Provider",
    },
    {
      name: "CITC Certified",
      description: "Communications and IT Commission",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Add structured data */}
      <Script
        id={`schema-service-${serviceDetail.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema(serviceDetail)) }}
      />

      {/* Sticky Table of Contents */}
      <div className="hidden lg:block fixed right-4 top-1/3 z-40 bg-white rounded-lg shadow-lg border border-gray-100 p-4 w-48">
        <h3 className="text-sm font-bold text-saudi-black mb-3 pb-2 border-b">On This Page</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#overview" className="text-gray-600 hover:text-primary transition-colors">
              Overview
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#process" className="text-gray-600 hover:text-primary transition-colors">
              Our Process
            </a>
          </li>
          <li>
            <a href="#technologies" className="text-gray-600 hover:text-primary transition-colors">
              Technologies
            </a>
          </li>
          <li>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#case-studies" className="text-gray-600 hover:text-primary transition-colors">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
          </li>
        </ul>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-white to-gray-50 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
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
                  <Link href="/services" className="ml-1 text-gray-600 hover:text-primary transition-colors">
                    Services
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                  <span className="ml-1 text-primary font-medium" aria-current="page">
                    {serviceDetail.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Professional Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-6 leading-tight">
                {serviceDetail.title}
                <span className="block text-primary relative">
                  <span className="relative z-10">Solutions</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{serviceDetail.longDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {serviceDetail.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="#contact" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex justify-center mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">Certified Experts</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">5+ Years Experience</p>
                </div>
                <div>
                  <div className="flex justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">250+ Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={serviceDetail.heroImage || "/placeholder.svg"}
                  alt={serviceDetail.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px] transform rotate-3 z-10">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <p className="font-medium text-saudi-black">100% Satisfaction</p>
                  </div>
                  <p className="text-xs text-gray-600">We guarantee quality results that meet your expectations</p>
                </div>

                <div className="absolute bottom-8 left-8 bg-white rounded-lg shadow-lg p-4 max-w-[200px] transform -rotate-2 z-10">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-primary mr-2" />
                    <p className="font-medium text-saudi-black">Fast Delivery</p>
                  </div>
                  <p className="text-xs text-gray-600">Quick turnaround times without compromising quality</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary/5 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border-2 border-dashed border-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Service Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{serviceDetail.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="Service overview illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute transform translate-y-[-50%] translate-x-[10%] bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-saudi-black">98%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-saudi-black mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  Why Choose Our {serviceDetail.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Our {serviceDetail.title} services stand out due to our deep expertise, tailored approach, and
                  commitment to delivering exceptional results. We understand the unique challenges businesses face in
                  Saudi Arabia and provide solutions that address your specific needs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-700">Industry-leading expertise</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-700">Tailored to Saudi market</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-700">Proven methodology</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="ml-2 text-gray-700">Ongoing support</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-saudi-black mb-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  Who This Service Is For
                </h3>
                <p className="text-gray-600 mb-6">
                  Our {serviceDetail.title} services are ideal for businesses of all sizes looking to enhance their
                  digital presence and streamline operations. Whether you're a startup, SME, or large enterprise, we
                  have solutions tailored to your specific needs and budget.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">Small Businesses</p>
                    <p className="text-sm text-gray-600">Cost-effective solutions to establish your digital presence</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">Medium Enterprises</p>
                    <p className="text-sm text-gray-600">Scalable solutions to grow your business</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">Large Corporations</p>
                    <p className="text-sm text-gray-600">Enterprise-grade solutions for complex needs</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-saudi-black">Government Entities</p>
                    <p className="text-sm text-gray-600">Compliant solutions for public sector requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Comprehensive Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our {serviceDetail.title} services include a wide range of features designed to meet your business needs
              and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetail.sections.map((section, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 relative">
                  <Image
                    src={section.image || "/placeholder.svg?height=600&width=800"}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600">{section.content}</p>
                </CardContent>
                <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold text-saudi-black mb-4">Technical Specifications</h3>
                <p className="text-gray-600 mb-6">
                  Our {serviceDetail.title} solutions are built with the latest technologies and best practices to
                  ensure optimal performance, security, and scalability.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                  <a href="#contact">Request Detailed Specs</a>
                </Button>
              </div>

              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">Performance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Optimized for speed and efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Regular performance monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Scalable architecture</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">Security</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Industry-standard encryption</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Regular security audits</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Compliance with local regulations</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">Compatibility</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Cross-platform support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Integration with popular systems</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Mobile-friendly design</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-saudi-black mb-2">Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">24/7 technical support</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Regular maintenance updates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700 text-sm">Dedicated account manager</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to deliver high-quality solutions that meet your business needs and exceed
              your expectations.
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 hidden md:block rounded-full"></div>

            <div className="space-y-16">
              {serviceDetail.process.map((step, index) => {
                const Icon = getIcon(step.icon)

                return (
                  <div key={index} className="relative">
                    {/* Process number for mobile */}
                    <div className="md:hidden absolute left-0 top-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>

                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                        index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Empty div for alignment on even items */}
                      {index % 2 === 0 && <div className="hidden md:block"></div>}

                      <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                        {/* Process number for desktop */}
                        <div className="hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2 h-14 w-14 rounded-full bg-white border-4 border-primary items-center justify-center text-primary font-bold text-xl shadow-lg z-10">
                          {index + 1}
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          <div className="flex items-center mb-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-saudi-black">{step.title}</h3>
                          </div>
                          <p className="text-gray-600">{step.description}</p>

                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-sm text-primary font-medium">
                              {index < serviceDetail.process.length - 1
                                ? "Next: " + serviceDetail.process[index + 1].title
                                : "Final Step"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Empty div for alignment on odd items */}
                      {index % 2 !== 0 && <div className="hidden md:block"></div>}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies & Case Studies */}
      <section id="technologies" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="technologies" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-gray-100 p-1 shadow-md rounded-full">
                <TabsTrigger
                  value="technologies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
                >
                  Technologies
                </TabsTrigger>
                <TabsTrigger
                  value="case-studies"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6"
                >
                  Case Studies
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="technologies" className="mt-0">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Advanced Tools
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Technologies We Use</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We leverage the latest technologies and tools to deliver high-quality solutions that drive results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceDetail.technologies.map((tech, index) => {
                  const TechIcon = getIcon(tech.icon)

                  return (
                    <Card
                      key={index}
                      className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                            <TechIcon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                            {tech.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{tech.description}</p>
                      </CardContent>
                      <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
                    </Card>
                  )
                })}
              </div>

              <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <h3 className="text-2xl font-bold text-saudi-black mb-4">Industry Certifications</h3>
                    <p className="text-gray-600 mb-6">
                      Our team is certified in the latest technologies and methodologies, ensuring the highest quality
                      standards for your project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                          <div className="flex items-center mb-2">
                            <Award className="h-5 w-5 text-primary mr-2" />
                            <h4 className="font-semibold text-saudi-black">{cert.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{cert.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h4 className="text-lg font-semibold text-saudi-black mb-4">Our Technology Partners</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white h-16 rounded-lg flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=60&width=120"
                            alt="Technology Partner 1"
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="bg-white h-16 rounded-lg flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=60&width=120"
                            alt="Technology Partner 2"
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="bg-white h-16 rounded-lg flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=60&width=120"
                            alt="Technology Partner 3"
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                        <div className="bg-white h-16 rounded-lg flex items-center justify-center">
                          <Image
                            src="/placeholder.svg?height=60&width=120"
                            alt="Technology Partner 4"
                            width={120}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="case-studies" className="mt-0">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                  Success Stories
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Case Studies</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore how we've helped businesses achieve their goals with our {serviceDetail.title} solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {serviceDetail.caseStudies.map((caseStudy, index) => (
                  <Card
                    key={index}
                    className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-64">
                      <Image
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="text-white text-sm font-medium bg-primary/80 px-3 py-1 rounded-full mb-2 inline-block">
                          {caseStudy.client}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
                      </div>
                    </div>

                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-saudi-black mb-2">Challenge</h4>
                        <p className="text-gray-600">{caseStudy.description}</p>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold text-saudi-black mb-2">Results</h4>
                        <p className="text-gray-600">{caseStudy.results}</p>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">Read Full Case Study</Button>
                    </CardContent>
                    <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Pricing Options
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our core features and dedicated
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <Card
                key={index}
                className={`border ${tier.recommended ? "border-primary shadow-xl" : "border-gray-100 shadow-md"} hover:shadow-xl transition-all duration-300 overflow-hidden relative`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    RECOMMENDED
                  </div>
                )}

                <CardHeader className={`pb-4 ${tier.recommended ? "bg-primary/5" : ""}`}>
                  <CardTitle className="text-2xl font-bold text-saudi-black">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-4">
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-primary">{tier.price}</p>
                    <p className="text-sm text-gray-500">Starting price</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className={`w-full ${tier.recommended ? "bg-primary hover:bg-primary/90 text-white" : "bg-white border-primary text-primary hover:bg-primary/10"}`}
                    asChild
                  >
                    <a href="#contact">Get Started</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution? Contact us for a personalized quote.</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="#contact">Request Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Client Feedback
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our {serviceDetail.title}{" "}
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceTestimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>

                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-saudi-black">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
              <a href="#contact">Become Our Next Success Story</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our {serviceDetail.title} services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {serviceDetail.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white rounded-lg border border-gray-100 shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-saudi-black hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-primary/5 p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-bold text-saudi-black mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer to your question, please don't hesitate to contact our team. We're here
                to help!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Explore More
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">Related Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore other services that complement {serviceDetail.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServicesData.map(
              (service) =>
                service && (
                  <Card
                    key={service.id}
                    className="border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <CardHeader className="relative pb-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        {<service.icon className="h-6 w-6 text-primary" />}
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative pt-4">
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <Button
                        variant="ghost"
                        className="p-0 text-primary hover:text-primary/90 hover:bg-transparent group-hover:translate-x-1 transition-transform duration-300"
                        asChild
                      >
                        <Link href={`/services/${service.id}`} className="flex items-center">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                    <div className="h-1 w-0 bg-primary absolute bottom-0 left-0 group-hover:w-full transition-all duration-500"></div>
                  </Card>
                ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-saudi-black mb-6">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">
                  Contact us today to discuss how our {serviceDetail.title} services can help your business grow.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-saudi-black">Expert Team</h3>
                      <p className="text-sm text-gray-600">
                        Our specialists have years of experience in delivering successful projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-saudi-black">Satisfaction Guarantee</h3>
                      <p className="text-sm text-gray-600">
                        We're not satisfied until you're satisfied with the results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-saudi-black">Quick Response</h3>
                      <p className="text-sm text-gray-600">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <a href="tel:+966558845503">Call Us Now</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:info@saudiease.com">Email Us</a>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-saudi-black mb-4">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

