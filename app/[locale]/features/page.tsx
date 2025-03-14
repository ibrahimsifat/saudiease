import type { Metadata } from "next"
import Link from "next/link"
import { features } from "@/data/features"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { generateWebsiteSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Our Features | Saudi Ease - Digital Solutions for Saudi Businesses",
  description:
    "Explore the comprehensive features that make Saudi Ease the leading provider of digital solutions for businesses in Saudi Arabia.",
  openGraph: {
    title: "Our Features | Saudi Ease - Digital Solutions for Saudi Businesses",
    description:
      "Explore the comprehensive features that make Saudi Ease the leading provider of digital solutions for businesses in Saudi Arabia.",
    type: "website",
    url: "https://saudiease.com/features",
  },
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Powerful Features
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-saudi-black mb-6">
              Advanced Features for
              <span className="text-primary relative ml-2">
                Saudi Businesses
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our cutting-edge features can transform your business operations, enhance customer
              experiences, and drive growth in the Saudi market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="#features-grid" className="flex items-center">
                  Explore Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features-grid" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Comprehensive Feature Set</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each feature is designed with Saudi businesses in mind, ensuring compliance with local regulations while
              delivering world-class digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden"
              >
                <CardHeader className="pb-4 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-primary/10 rounded-full transform rotate-12 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="mb-3 flex items-center">
                      <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-primary/20 to-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mr-3">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Saudi market optimized</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regulatory compliant</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Continuous updates</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 hover:text-primary w-full justify-between group"
                  >
                    <Link href={`/features/${feature.id}`} className="flex items-center w-full justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
                <div className="h-1 w-0 bg-gradient-to-r from-primary/80 to-primary/40 group-hover:w-full transition-all duration-500"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 bg-primary/10 rounded-full transform rotate-12"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 -ml-20 -mb-20 bg-primary/10 rounded-full transform rotate-12"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-6">
                Ready to Transform Your Business with Our Features?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is ready to help you implement these features and customize them to your specific
                business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

