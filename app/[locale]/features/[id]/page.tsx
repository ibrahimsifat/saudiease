import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { features } from "@/data/features"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { generateServiceSchema } from "@/lib/schema"

// Generate metadata for each feature page
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const feature = features.find((f) => f.id === params.id)

  if (!feature) {
    return {
      title: "Feature Not Found",
      description: "The requested feature could not be found.",
    }
  }

  return {
    title: `${feature.title} | Saudi Ease Features`,
    description: `Learn about our ${feature.title} feature and how it can benefit your Saudi business with enhanced performance, security, and user experience.`,
    openGraph: {
      title: `${feature.title} | Saudi Ease Features`,
      description: `Learn about our ${feature.title} feature and how it can benefit your Saudi business with enhanced performance, security, and user experience.`,
      type: "website",
      url: `https://saudiease.com/features/${feature.id}`,
    },
  }
}

// Generate static paths for all features
export async function generateStaticParams() {
  return features.map((feature) => ({
    id: feature.id,
  }))
}

// Feature detail content based on feature ID
const featureDetails: Record<string, any> = {
  performance: {
    title: "Fast Performance",
    subtitle: "Lightning-fast digital experiences for Saudi businesses",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Fast Performance feature ensures your digital platforms load quickly and operate smoothly, providing an exceptional user experience that keeps customers engaged and satisfied.",
    benefits: [
      "Reduced bounce rates with pages that load in under 2 seconds",
      "Improved user engagement and conversion rates",
      "Better search engine rankings with optimized performance",
      "Enhanced mobile experience with fast-loading responsive designs",
      "Reduced server costs with optimized resource usage",
    ],
    keyFeatures: [
      {
        title: "Advanced Caching",
        description: "Intelligent caching mechanisms that store frequently accessed data for faster retrieval.",
      },
      {
        title: "Image Optimization",
        description: "Automatic image compression and lazy loading to reduce page load times.",
      },
      {
        title: "Code Minification",
        description: "Removal of unnecessary characters from code without changing functionality.",
      },
      {
        title: "Content Delivery Network",
        description: "Strategic distribution of servers to deliver content faster to users across Saudi Arabia.",
      },
    ],
    caseStudy: {
      title: "How a Saudi E-commerce Platform Increased Sales by 35%",
      description:
        "A leading Saudi e-commerce platform was struggling with slow page load times, resulting in high bounce rates and abandoned carts. After implementing our Fast Performance solutions, they saw a dramatic improvement in user experience.",
      results: [
        "Page load time reduced from 5.2 seconds to 1.8 seconds",
        "Bounce rate decreased by 42%",
        "Mobile conversions increased by 28%",
        "Overall sales increased by 35% within three months",
      ],
    },
    faq: [
      {
        question: "How does page speed affect my business?",
        answer:
          "Page speed directly impacts user experience, conversion rates, and search engine rankings. Studies show that 53% of mobile users abandon sites that take longer than 3 seconds to load, and Google uses page speed as a ranking factor for both mobile and desktop searches.",
      },
      {
        question: "Will improving performance require a complete redesign of my website?",
        answer:
          "Not necessarily. Our performance optimization process begins with a thorough audit to identify specific bottlenecks. In many cases, we can significantly improve performance through targeted optimizations without requiring a complete redesign.",
      },
      {
        question: "How do you ensure fast performance for users across Saudi Arabia?",
        answer:
          "We utilize a combination of local servers, content delivery networks with nodes in the Middle East, and optimization techniques specifically designed for the Saudi internet infrastructure to ensure fast loading times throughout the Kingdom.",
      },
      {
        question: "Can you optimize performance for Arabic content and RTL layouts?",
        answer:
          "Absolutely. We have specialized expertise in optimizing Arabic websites with RTL layouts, ensuring that the unique characteristics of Arabic typography and design don't negatively impact performance.",
      },
    ],
    relatedFeatures: ["responsive", "security", "growth"],
  },
  security: {
    title: "Secure Solutions",
    subtitle: "Enterprise-grade security for Saudi businesses",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Secure Solutions feature provides comprehensive protection for your digital assets, ensuring compliance with Saudi regulations while safeguarding sensitive data from increasingly sophisticated cyber threats.",
    benefits: [
      "Protection against the latest cyber threats and vulnerabilities",
      "Compliance with Saudi data protection regulations",
      "Enhanced customer trust with visible security measures",
      "Reduced risk of data breaches and associated costs",
      "Regular security audits and updates to maintain protection",
    ],
    keyFeatures: [
      {
        title: "Advanced Encryption",
        description: "End-to-end encryption for sensitive data both in transit and at rest.",
      },
      {
        title: "Multi-factor Authentication",
        description: "Additional security layers beyond passwords to verify user identities.",
      },
      {
        title: "Regular Security Audits",
        description: "Proactive identification and remediation of potential vulnerabilities.",
      },
      {
        title: "Compliance Management",
        description: "Ensuring adherence to Saudi regulations including CITC and NCA requirements.",
      },
    ],
    caseStudy: {
      title: "Securing a Saudi Financial Institution Against Cyber Threats",
      description:
        "A prominent Saudi financial services provider needed to strengthen their digital security posture while maintaining a seamless user experience. Our comprehensive security solution provided the protection they needed without compromising on performance.",
      results: [
        "Zero security breaches since implementation",
        "100% compliance with Saudi financial regulations",
        "Reduced unauthorized access attempts by 94%",
        "Customer trust metrics improved by 28%",
      ],
    },
    faq: [
      {
        question: "How do you stay current with evolving security threats?",
        answer:
          "Our security team continuously monitors global threat intelligence feeds, participates in security communities, and undergoes regular training. We implement a proactive approach to security, regularly updating our systems and conducting penetration testing to identify and address vulnerabilities before they can be exploited.",
      },
      {
        question: "What Saudi-specific security regulations do you address?",
        answer:
          "We ensure compliance with all relevant Saudi regulations, including the Essential Cybersecurity Controls (ECC) from the National Cybersecurity Authority (NCA), CITC regulations, and Saudi Data & AI Authority (SDAIA) requirements. Our solutions are also designed to help clients meet international standards like ISO 27001 and GDPR where applicable.",
      },
      {
        question: "How do you balance security with user experience?",
        answer:
          "We design security measures that provide robust protection while minimizing friction in the user experience. This includes implementing contextual security that adapts based on risk factors, using biometric authentication where appropriate, and designing intuitive security interfaces that guide users through secure processes.",
      },
      {
        question: "Can you help with security training for our staff?",
        answer:
          "Yes, we offer comprehensive security awareness training programs customized for Saudi businesses. These programs cover best practices, common threats specific to the Saudi market, and practical exercises to help staff recognize and respond appropriately to security threats.",
      },
    ],
    relatedFeatures: ["performance", "local-expertise", "timely"],
  },
  responsive: {
    title: "Mobile Responsive",
    subtitle: "Seamless experiences across all devices",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Mobile Responsive feature ensures your digital platforms look and function perfectly on all devices, from desktop computers to smartphones, providing a consistent and optimized experience for all users.",
    benefits: [
      "Reach the 97% of Saudi consumers who access the internet via mobile devices",
      "Provide consistent brand experience across all screen sizes",
      "Improve SEO rankings with mobile-friendly designs",
      "Reduce development and maintenance costs with a single responsive solution",
      "Future-proof your digital presence for new devices and screen sizes",
    ],
    keyFeatures: [
      {
        title: "Fluid Grid Layouts",
        description: "Designs that automatically adjust to any screen size or resolution.",
      },
      {
        title: "Touch-Optimized Interfaces",
        description: "Interactive elements designed specifically for touch navigation.",
      },
      {
        title: "Adaptive Images",
        description: "Images that automatically resize and optimize for different devices.",
      },
      {
        title: "Cross-Browser Compatibility",
        description: "Consistent experience across all popular browsers used in Saudi Arabia.",
      },
    ],
    caseStudy: {
      title: "How a Saudi Retailer Increased Mobile Conversions by 65%",
      description:
        "A major Saudi retail chain was losing mobile customers due to a poor smartphone shopping experience. After implementing our responsive design solutions, they saw dramatic improvements in mobile engagement and sales.",
      results: [
        "Mobile traffic increased by 42% within two months",
        "Average time on site from mobile users increased by 3.5 minutes",
        "Mobile conversion rate improved by 65%",
        "Customer satisfaction scores for mobile experience increased from 3.2/5 to 4.7/5",
      ],
    },
    faq: [
      {
        question: "Is responsive design really necessary if I already have a mobile app?",
        answer:
          "Yes, absolutely. While mobile apps provide a dedicated experience for committed users, responsive websites serve as the first point of contact for new customers. Many users prefer to browse websites before downloading an app, and search engines primarily index web content, not app content. A responsive website ensures you don't miss out on these potential customers.",
      },
      {
        question: "How do you handle Arabic text and RTL layouts in responsive designs?",
        answer:
          "We have specialized expertise in responsive RTL layouts for Arabic content. Our approach includes proper text flow management, appropriate font scaling, and careful consideration of how UI elements should reposition in RTL layouts at different screen sizes. We also ensure that mixed content (Arabic and English) displays correctly across all devices.",
      },
      {
        question: "Will responsive design slow down my website?",
        answer:
          "When implemented correctly, responsive design should not significantly impact performance. Our approach includes performance optimization techniques such as conditional loading (only loading resources needed for the current device), proper image optimization, and efficient CSS. In fact, our responsive solutions often improve performance by eliminating the need for redirects to separate mobile sites.",
      },
      {
        question: "How do you test responsive designs for the Saudi market?",
        answer:
          "We conduct extensive testing on the most popular devices and browsers used in Saudi Arabia, including various Android phones, iPhones, and tablets at different screen sizes and resolutions. We also test on common network conditions experienced in different regions of Saudi Arabia to ensure good performance even in areas with slower connections.",
      },
    ],
    relatedFeatures: ["performance", "local-expertise", "growth"],
  },
  "local-expertise": {
    title: "Local Expertise",
    subtitle: "Deep understanding of the Saudi market",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Local Expertise feature provides you with insights and solutions specifically tailored to the Saudi market, ensuring cultural relevance, regulatory compliance, and alignment with local business practices.",
    benefits: [
      "Culturally appropriate content and design that resonates with Saudi audiences",
      "Full compliance with Saudi regulations and business requirements",
      "Localized user experiences that feel familiar to Saudi customers",
      "Strategic guidance on navigating the unique Saudi business landscape",
      "Competitive advantage through deep market understanding",
    ],
    keyFeatures: [
      {
        title: "Cultural Adaptation",
        description: "Content and design elements tailored to Saudi cultural preferences and sensitivities.",
      },
      {
        title: "Arabic Optimization",
        description: "Perfect RTL layouts, typography, and user interfaces for Arabic language users.",
      },
      {
        title: "Regulatory Compliance",
        description: "Built-in compliance with Saudi laws including CITC, NCA, and SDAIA requirements.",
      },
      {
        title: "Local Market Insights",
        description: "Strategic guidance based on deep understanding of Saudi consumer behavior.",
      },
    ],
    caseStudy: {
      title: "How Local Expertise Helped a Global Brand Succeed in Saudi Arabia",
      description:
        "An international brand was struggling to gain traction in the Saudi market despite significant marketing investment. By leveraging our local expertise, we helped them adapt their digital presence to better resonate with Saudi consumers.",
      results: [
        "User engagement increased by 87% after cultural adaptation",
        "Conversion rates improved by 53% with localized user journeys",
        "Customer acquisition costs decreased by 41%",
        "Brand perception scores among Saudi consumers improved from 62% to 89%",
      ],
    },
    faq: [
      {
        question: "How does your local expertise translate into better digital solutions?",
        answer:
          "Our team includes Saudi nationals and long-term residents who deeply understand the cultural nuances, consumer behaviors, and business practices unique to the Kingdom. This expertise informs every aspect of our work, from user interface design and content creation to technical implementation and strategic planning. The result is digital solutions that feel authentically Saudi rather than merely translated or adapted from Western models.",
      },
      {
        question: "Can you help international businesses enter the Saudi market?",
        answer:
          "Absolutely. We specialize in helping international businesses successfully enter and thrive in the Saudi market. Our services include market research, localization strategy, regulatory guidance, cultural adaptation, and connecting you with the right local partners. We help you avoid common pitfalls and accelerate your path to success in Saudi Arabia.",
      },
      {
        question: "How do you stay current with Saudi regulations and market trends?",
        answer:
          "We maintain close relationships with regulatory bodies, participate in industry forums, and continuously monitor policy developments. Our team regularly conducts market research and analysis to track evolving consumer preferences and competitive landscapes. This ongoing commitment to market intelligence ensures our clients benefit from the most current insights and compliance guidance.",
      },
      {
        question: "Do you provide bilingual (Arabic/English) solutions?",
        answer:
          "Yes, we excel at creating truly bilingual digital experiences that work seamlessly in both Arabic and English. Rather than treating one language as an afterthought, we design with both languages in mind from the beginning, ensuring proper layout, typography, and user experience for both language options. We also provide professional translation services that capture the right tone and cultural context.",
      },
    ],
    relatedFeatures: ["responsive", "security", "growth"],
  },
  growth: {
    title: "Growth Focused",
    subtitle: "Strategic solutions for business expansion",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Growth Focused feature provides strategic digital solutions designed to help your Saudi business expand, attract new customers, and increase revenue through data-driven optimization and scalable architecture.",
    benefits: [
      "Scalable solutions that grow with your business needs",
      "Data-driven insights to identify growth opportunities",
      "Conversion optimization to increase customer acquisition",
      "Customer retention strategies to maximize lifetime value",
      "Competitive analysis to help you outperform in the Saudi market",
    ],
    keyFeatures: [
      {
        title: "Scalable Architecture",
        description: "Technical foundations that can handle growing traffic and expanding business needs.",
      },
      {
        title: "Conversion Optimization",
        description: "Continuous improvement of user journeys to increase conversion rates.",
      },
      {
        title: "Analytics Integration",
        description: "Comprehensive data collection and analysis to inform growth strategies.",
      },
      {
        title: "Marketing Technology",
        description: "Integration with marketing tools to automate and optimize customer acquisition.",
      },
    ],
    caseStudy: {
      title: "Accelerating Growth for a Saudi Startup",
      description:
        "A promising Saudi startup had a great product but was struggling to scale their customer base. Our growth-focused approach helped them identify and remove barriers to growth while implementing systems to support rapid expansion.",
      results: [
        "Customer acquisition increased by 215% in six months",
        "Customer lifetime value improved by 47%",
        "Successfully scaled to handle 10x traffic without performance issues",
        "Secured Series A funding based on improved growth metrics",
      ],
    },
    faq: [
      {
        question: "How do you measure the success of growth initiatives?",
        answer:
          "We establish clear KPIs at the beginning of each project, tailored to your specific business goals. These typically include metrics like conversion rates, customer acquisition cost, lifetime value, retention rates, and revenue growth. We implement comprehensive analytics to track these metrics and provide regular reports with actionable insights.",
      },
      {
        question: "Can your growth solutions adapt to changing market conditions?",
        answer:
          "Absolutely. Our growth frameworks are designed to be agile and responsive to changing market dynamics. We implement continuous monitoring and testing systems that allow for quick pivots when needed. Additionally, we build modular solutions that can be reconfigured as your business evolves or market conditions change.",
      },
      {
        question: "How do you balance short-term growth with long-term sustainability?",
        answer:
          "We believe sustainable growth comes from building strong foundations. While we implement tactics to drive immediate results, we always ensure these align with long-term strategic objectives. Our approach includes building brand equity, focusing on customer satisfaction, and creating scalable systems rather than just pursuing quick wins that might compromise future growth.",
      },
      {
        question: "Do you provide ongoing growth support after the initial implementation?",
        answer:
          "Yes, we offer ongoing growth partnerships where we continue to optimize and evolve your digital presence based on performance data and changing business needs. Many clients find this approach valuable as it provides continuous improvement without the need to manage multiple vendors or build an extensive in-house team.",
      },
    ],
    relatedFeatures: ["performance", "local-expertise", "timely"],
  },
  timely: {
    title: "Timely Delivery",
    subtitle: "Reliable project execution and delivery",
    heroImage: "/placeholder.svg?height=600&width=800",
    overview:
      "Our Timely Delivery feature ensures your digital projects are completed on schedule and within budget, with transparent communication throughout the process and rigorous project management methodologies.",
    benefits: [
      "Predictable timelines for better business planning",
      "Reduced time-to-market for competitive advantage",
      "Transparent progress tracking and reporting",
      "Efficient resource allocation and cost management",
      "Minimized business disruption during implementation",
    ],
    keyFeatures: [
      {
        title: "Agile Methodology",
        description: "Flexible, iterative approach that delivers value throughout the project lifecycle.",
      },
      {
        title: "Dedicated Project Management",
        description: "Experienced project managers who ensure smooth execution and timely delivery.",
      },
      {
        title: "Transparent Reporting",
        description: "Regular updates and clear visibility into project progress and milestones.",
      },
      {
        title: "Risk Management",
        description: "Proactive identification and mitigation of potential delays or issues.",
      },
    ],
    caseStudy: {
      title: "Delivering a Complex E-Government Portal on Time",
      description:
        "A Saudi government entity needed a sophisticated digital portal delivered within a strict timeline to meet regulatory requirements. Despite the complexity and scale of the project, our timely delivery approach ensured successful completion within the mandated timeframe.",
      results: [
        "Completed 2 weeks ahead of the critical deadline",
        "Delivered within budget despite scope expansions",
        "Achieved 100% of required functionality",
        "Received commendation from ministry leadership for execution quality",
      ],
    },
    faq: [
      {
        question: "How do you handle unexpected challenges that might cause delays?",
        answer:
          "We build buffer time into our project plans specifically to accommodate unexpected challenges. Additionally, our risk management process identifies potential issues early, allowing us to develop mitigation strategies before they impact timelines. When unforeseen issues do arise, we immediately assess the impact, present options to the client, and implement the agreed-upon solution with transparency throughout the process.",
      },
      {
        question: "Can you accommodate changing requirements during a project?",
        answer:
          "Yes, our agile methodology is designed to accommodate evolving requirements. We work in sprints with regular review points where changes can be incorporated. For significant changes, we provide clear impact assessments on timeline, budget, and other project parameters, allowing you to make informed decisions about how to proceed.",
      },
      {
        question: "How do you ensure quality isn't compromised when meeting tight deadlines?",
        answer:
          "Quality assurance is integrated throughout our development process, not just added at the end. We implement automated testing, continuous integration, and regular code reviews to maintain quality standards while working efficiently. When timelines are particularly tight, we may suggest a phased approach, delivering critical functionality first while maintaining our quality standards.",
      },
      {
        question: "What is your track record for on-time delivery?",
        answer:
          "We're proud to maintain a 94% on-time delivery rate across all projects, with the remaining 6% typically involving significant scope changes requested by clients. For fixed-scope projects with clearly defined requirements, our on-time delivery rate exceeds 98%. We consider our ability to deliver reliably a core competitive advantage and a key reason clients choose to work with us repeatedly.",
      },
    ],
    relatedFeatures: ["performance", "security", "local-expertise"],
  },
}

export default function FeatureDetailPage({ params }: { params: { id: string } }) {
  const feature = features.find((f) => f.id === params.id)

  if (!feature) {
    notFound()
  }

  const details = featureDetails[params.id]
  const relatedFeaturesList = details.relatedFeatures.map((id) => features.find((f) => f.id === id)).filter(Boolean)

  return (
    <main className="min-h-screen">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema(feature)),
        }}
      />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] -right-[5%] w-[30%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <Link href="/features" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Features
              </Link>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Feature Spotlight
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-saudi-black mb-4">{details.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{details.subtitle}</p>
              <p className="text-gray-600 mb-8">{details.overview}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="#benefits">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={details.heroImage || "/placeholder.svg"}
                  alt={details.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Key Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our {details.title} feature can transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="case-study">Case Study</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {details.keyFeatures.map((keyFeature, index) => (
                  <Card key={index} className="overflow-hidden border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-saudi-black mb-3">
                        {keyFeature.title}
                        <span className="block h-0.5 w-12 bg-primary mt-2"></span>
                      </h3>
                      <p className="text-gray-600">{keyFeature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="case-study" className="mt-6">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-saudi-black mb-4">{details.caseStudy.title}</h3>
                <p className="text-gray-600 mb-6">{details.caseStudy.description}</p>

                <h4 className="text-lg font-semibold text-saudi-black mb-4">Results:</h4>
                <ul className="space-y-3">
                  {details.caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                {details.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-lg">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-saudi-black mb-4">Related Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore other features that work well with {details.title} to create a comprehensive digital solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedFeaturesList.map((relatedFeature) => (
              <Card
                key={relatedFeature?.id}
                className="group hover:shadow-lg transition-all duration-300 border-gray-200 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-white flex items-center justify-center mr-3">
                      {relatedFeature && <relatedFeature.icon className="h-5 w-5 text-primary" />}
                    </div>
                    <h3 className="text-lg font-semibold">{relatedFeature?.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{relatedFeature?.description}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:bg-primary/10 hover:text-primary w-full justify-between group p-0"
                  >
                    <Link href={`/features/${relatedFeature?.id}`} className="flex items-center w-full justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
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
                Ready to Implement {details.title} in Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is ready to help you leverage this feature to drive growth and success for your
                Saudi business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
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

