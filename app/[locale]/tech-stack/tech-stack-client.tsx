"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Cloud,
  Shield,
  Layers,
  Cpu,
  BarChart,
  Braces,
  Globe,
  Zap,
  ExternalLink,
  CheckCircle2,
  CodepenIcon as ReactIcon,
  FileCode,
  FileType,
  Palette,
  Monitor,
  LayoutGrid,
  FileJson,
  ServerCog,
  Boxes,
  Flame,
  Leaf,
  Rocket,
  Fingerprint,
  Webhook,
  Laptop,
  AppWindow,
  Blocks,
  Atom,
  Infinity,
  Puzzle,
  Lightbulb,
  Sparkles,
  Bot,
  Brain,
  Scan,
} from "lucide-react"

// Function to get the appropriate icon for each technology
const getTechIcon = (techName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    // Frontend
    React: <ReactIcon className="h-8 w-8 text-primary" />,
    "Next.js": <FileCode className="h-8 w-8 text-primary" />,
    TypeScript: <FileType className="h-8 w-8 text-primary" />,
    "Tailwind CSS": <Palette className="h-8 w-8 text-primary" />,
    "Vue.js": <Monitor className="h-8 w-8 text-primary" />,
    Angular: <LayoutGrid className="h-8 w-8 text-primary" />,

    // Backend
    "Node.js": <ServerCog className="h-8 w-8 text-primary" />,
    "Express.js": <Server className="h-8 w-8 text-primary" />,
    Django: <Boxes className="h-8 w-8 text-primary" />,
    Laravel: <Flame className="h-8 w-8 text-primary" />,
    "Spring Boot": <Leaf className="h-8 w-8 text-primary" />,
    "ASP.NET Core": <Rocket className="h-8 w-8 text-primary" />,

    // Database
    MongoDB: <Database className="h-8 w-8 text-primary" />,
    PostgreSQL: <Database className="h-8 w-8 text-primary" />,
    MySQL: <Database className="h-8 w-8 text-primary" />,
    Redis: <Database className="h-8 w-8 text-primary" />,
    Firebase: <Fingerprint className="h-8 w-8 text-primary" />,
    Elasticsearch: <Webhook className="h-8 w-8 text-primary" />,

    // Mobile
    "React Native": <Smartphone className="h-8 w-8 text-primary" />,
    Flutter: <Smartphone className="h-8 w-8 text-primary" />,
    Swift: <AppWindow className="h-8 w-8 text-primary" />,
    Kotlin: <Smartphone className="h-8 w-8 text-primary" />,
    Ionic: <Laptop className="h-8 w-8 text-primary" />,
    Xamarin: <Blocks className="h-8 w-8 text-primary" />,

    // Cloud
    AWS: <Cloud className="h-8 w-8 text-primary" />,
    Azure: <Cloud className="h-8 w-8 text-primary" />,
    "Google Cloud": <Cloud className="h-8 w-8 text-primary" />,
    Docker: <Boxes className="h-8 w-8 text-primary" />,
    Kubernetes: <Atom className="h-8 w-8 text-primary" />,
    Terraform: <Infinity className="h-8 w-8 text-primary" />,

    // AI
    TensorFlow: <Brain className="h-8 w-8 text-primary" />,
    PyTorch: <Puzzle className="h-8 w-8 text-primary" />,
    "OpenAI API": <Lightbulb className="h-8 w-8 text-primary" />,
    "Hugging Face": <Sparkles className="h-8 w-8 text-primary" />,
    "scikit-learn": <Bot className="h-8 w-8 text-primary" />,
    "Computer Vision": <Scan className="h-8 w-8 text-primary" />,
  }

  return iconMap[techName] || <FileJson className="h-8 w-8 text-primary" />
}

export function TechStackPage() {
  const [activeTab, setActiveTab] = useState("frontend")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const techCategories = [
    { id: "frontend", label: "Frontend", icon: <Code2 className="h-4 w-4" /> },
    { id: "backend", label: "Backend", icon: <Server className="h-4 w-4" /> },
    { id: "database", label: "Database", icon: <Database className="h-4 w-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
    { id: "cloud", label: "Cloud & DevOps", icon: <Cloud className="h-4 w-4" /> },
    { id: "ai", label: "AI & ML", icon: <Cpu className="h-4 w-4" /> },
  ]

  const technologies = {
    frontend: [
      {
        name: "React",
        logo: "/placeholder.svg?height=80&width=80",
        description: "A JavaScript library for building user interfaces with component-based architecture.",
        useCases: ["Single Page Applications", "Interactive UIs", "Enterprise Dashboards"],
        benefits: ["Component Reusability", "Virtual DOM for Performance", "Rich Ecosystem"],
        projects: ["E-commerce Platforms", "Admin Dashboards", "Interactive Web Apps"],
      },
      {
        name: "Next.js",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "React framework that enables server-side rendering and static site generation for improved SEO and performance.",
        useCases: ["Corporate Websites", "E-commerce", "Content-heavy Applications"],
        benefits: ["SEO Optimization", "Fast Page Loads", "Built-in API Routes"],
        projects: ["Corporate Portals", "E-commerce Stores", "Marketing Websites"],
      },
      {
        name: "TypeScript",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Strongly typed programming language that builds on JavaScript, giving better tooling at any scale.",
        useCases: ["Large-scale Applications", "Team Projects", "Enterprise Software"],
        benefits: ["Type Safety", "Better IDE Support", "Reduced Runtime Errors"],
        projects: ["Financial Applications", "Healthcare Platforms", "Enterprise Systems"],
      },
      {
        name: "Tailwind CSS",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Utility-first CSS framework for rapidly building custom user interfaces.",
        useCases: ["Responsive Designs", "Custom UI Components", "Rapid Prototyping"],
        benefits: ["Development Speed", "Consistency", "Low Bundle Size"],
        projects: ["Marketing Sites", "Web Applications", "Admin Interfaces"],
      },
      {
        name: "Vue.js",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Progressive JavaScript framework for building user interfaces with an approachable learning curve.",
        useCases: ["Interactive Web Applications", "Prototypes", "Progressive Enhancement"],
        benefits: ["Easy Integration", "Gentle Learning Curve", "Flexible Architecture"],
        projects: ["Customer Portals", "Internal Tools", "Interactive Websites"],
      },
      {
        name: "Angular",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Platform and framework for building single-page client applications using HTML and TypeScript.",
        useCases: ["Enterprise Applications", "Dynamic Web Apps", "Large-scale Projects"],
        benefits: ["Comprehensive Framework", "Strong Typing", "Dependency Injection"],
        projects: ["Banking Portals", "Healthcare Systems", "Enterprise Applications"],
      },
    ],
    backend: [
      {
        name: "Node.js",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "JavaScript runtime built on Chrome's V8 JavaScript engine for building scalable network applications.",
        useCases: ["API Servers", "Real-time Applications", "Microservices"],
        benefits: ["JavaScript Everywhere", "Non-blocking I/O", "Large Ecosystem"],
        projects: ["REST APIs", "Real-time Dashboards", "Payment Gateways"],
      },
      {
        name: "Express.js",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Fast, unopinionated, minimalist web framework for Node.js for building web applications and APIs.",
        useCases: ["RESTful APIs", "Web Applications", "Microservices"],
        benefits: ["Minimalist", "Flexible", "Easy to Learn"],
        projects: ["Backend Services", "API Gateways", "Web Servers"],
      },
      {
        name: "Django",
        logo: "/placeholder.svg?height=80&width=80",
        description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
        useCases: ["Content Management", "Scientific Applications", "Financial Platforms"],
        benefits: ["Batteries Included", "Security", "Scalability"],
        projects: ["Content Platforms", "Financial Systems", "E-learning Platforms"],
      },
      {
        name: "Laravel",
        logo: "/placeholder.svg?height=80&width=80",
        description: "PHP framework with expressive, elegant syntax for web application development.",
        useCases: ["Web Applications", "Content Management", "E-commerce"],
        benefits: ["Elegant Syntax", "Robust Tools", "MVC Architecture"],
        projects: ["Business Applications", "CMS Systems", "E-commerce Backends"],
      },
      {
        name: "Spring Boot",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Java-based framework used to create stand-alone, production-grade Spring applications.",
        useCases: ["Enterprise Applications", "Microservices", "Cloud-native Apps"],
        benefits: ["Production-ready", "Spring Ecosystem", "Opinionated Defaults"],
        projects: ["Banking Systems", "Insurance Platforms", "Enterprise Solutions"],
      },
      {
        name: "ASP.NET Core",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications.",
        useCases: ["Enterprise Web Apps", "Microservices", "Cloud Services"],
        benefits: ["Cross-platform", "High Performance", "Modern Architecture"],
        projects: ["Government Portals", "Enterprise Systems", "Cloud Services"],
      },
    ],
    database: [
      {
        name: "MongoDB",
        logo: "/placeholder.svg?height=80&width=80",
        description: "NoSQL database that provides high performance, high availability, and easy scalability.",
        useCases: ["Content Management", "Real-time Analytics", "Mobile Applications"],
        benefits: ["Schema Flexibility", "Horizontal Scaling", "JSON-like Documents"],
        projects: ["Content Platforms", "IoT Applications", "Real-time Analytics"],
      },
      {
        name: "PostgreSQL",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Powerful, open source object-relational database system with strong reputation for reliability and data integrity.",
        useCases: ["Complex Applications", "Data Warehousing", "GIS Applications"],
        benefits: ["ACID Compliance", "Advanced Features", "Extensibility"],
        projects: ["Financial Systems", "GIS Applications", "Enterprise Databases"],
      },
      {
        name: "MySQL",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Open-source relational database management system that is fast, reliable, and easy to use.",
        useCases: ["Web Applications", "E-commerce", "Content Management"],
        benefits: ["Ease of Use", "Reliability", "Wide Adoption"],
        projects: ["E-commerce Platforms", "CMS Systems", "Web Applications"],
      },
      {
        name: "Redis",
        logo: "/placeholder.svg?height=80&width=80",
        description: "In-memory data structure store, used as a database, cache, and message broker.",
        useCases: ["Caching", "Session Storage", "Real-time Analytics"],
        benefits: ["Speed", "Versatility", "Data Structures"],
        projects: ["Caching Layers", "Real-time Leaderboards", "Message Queues"],
      },
      {
        name: "Firebase",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Platform developed by Google for creating mobile and web applications with real-time database capabilities.",
        useCases: ["Mobile Apps", "Real-time Applications", "Rapid Prototyping"],
        benefits: ["Real-time Sync", "Authentication", "Hosting"],
        projects: ["Mobile Applications", "Real-time Collaboration Tools", "MVPs"],
      },
      {
        name: "Elasticsearch",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Distributed, RESTful search and analytics engine capable of addressing a growing number of use cases.",
        useCases: ["Search Functionality", "Log Analysis", "Business Analytics"],
        benefits: ["Full-text Search", "Analytics", "Scalability"],
        projects: ["Search Engines", "Log Analysis Systems", "Business Intelligence"],
      },
    ],
    mobile: [
      {
        name: "React Native",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Framework for building native mobile applications using React and JavaScript.",
        useCases: ["Cross-platform Mobile Apps", "MVPs", "Enterprise Mobile Solutions"],
        benefits: ["Code Reusability", "Native Performance", "Fast Development"],
        projects: ["E-commerce Apps", "Social Media Apps", "Business Applications"],
      },
      {
        name: "Flutter",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
        useCases: ["Cross-platform Apps", "Material Design Apps", "MVPs"],
        benefits: ["Single Codebase", "Fast Development", "Beautiful UI"],
        projects: ["E-commerce Apps", "Utility Applications", "Business Tools"],
      },
      {
        name: "Swift",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS.",
        useCases: ["iOS Applications", "macOS Applications", "Apple Ecosystem"],
        benefits: ["Performance", "Safety", "Modern Syntax"],
        projects: ["iOS Apps", "macOS Applications", "Apple Watch Apps"],
      },
      {
        name: "Kotlin",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Modern programming language that makes developers happier, used for Android development.",
        useCases: ["Android Applications", "Server-side Applications", "Cross-platform Mobile"],
        benefits: ["Concise Syntax", "Safety", "Interoperability with Java"],
        projects: ["Android Apps", "Enterprise Mobile Solutions", "Mobile Games"],
      },
      {
        name: "Ionic",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Open source mobile UI toolkit for building high-quality cross-platform native and web app experiences.",
        useCases: ["Hybrid Mobile Apps", "Progressive Web Apps", "Enterprise Applications"],
        benefits: ["Web Technologies", "Single Codebase", "UI Components"],
        projects: ["Business Apps", "Customer Portals", "Enterprise Solutions"],
      },
      {
        name: "Xamarin",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Microsoft's framework for building cross-platform mobile applications using C#.",
        useCases: ["Enterprise Mobile Apps", "Cross-platform Solutions", ".NET Integration"],
        benefits: [".NET Ecosystem", "Code Sharing", "Native Performance"],
        projects: ["Enterprise Mobile Solutions", "Business Applications", "Field Service Apps"],
      },
    ],
    cloud: [
      {
        name: "AWS",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Comprehensive and widely adopted cloud platform offering over 200 fully featured services.",
        useCases: ["Web Hosting", "Serverless Applications", "Data Processing"],
        benefits: ["Scalability", "Comprehensive Services", "Global Infrastructure"],
        projects: ["Enterprise Cloud Migration", "Serverless Applications", "Big Data Processing"],
      },
      {
        name: "Azure",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Microsoft's cloud computing service for building, testing, deploying, and managing applications and services.",
        useCases: ["Enterprise Cloud", ".NET Applications", "Hybrid Cloud"],
        benefits: ["Microsoft Integration", "Enterprise Focus", "Hybrid Solutions"],
        projects: ["Enterprise Systems", "Government Solutions", "Healthcare Platforms"],
      },
      {
        name: "Google Cloud",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Suite of cloud computing services that runs on the same infrastructure that Google uses internally.",
        useCases: ["Big Data", "Machine Learning", "Containerized Applications"],
        benefits: ["Data Analytics", "AI/ML Capabilities", "Global Network"],
        projects: ["Data Analytics Platforms", "ML Applications", "Containerized Workloads"],
      },
      {
        name: "Docker",
        logo: "/placeholder.svg?height=80&width=80",
        description: "Platform for developing, shipping, and running applications in containers.",
        useCases: ["Application Containerization", "Microservices", "DevOps"],
        benefits: ["Consistency", "Isolation", "Efficiency"],
        projects: ["Microservices Architecture", "CI/CD Pipelines", "Development Environments"],
      },
      {
        name: "Kubernetes",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Open-source system for automating deployment, scaling, and management of containerized applications.",
        useCases: ["Container Orchestration", "Microservices", "Cloud-native Apps"],
        benefits: ["Scalability", "Self-healing", "Automated Rollouts"],
        projects: ["Microservices Platforms", "Cloud-native Applications", "Scalable Services"],
      },
      {
        name: "Terraform",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure.",
        useCases: ["Infrastructure as Code", "Multi-cloud Deployment", "DevOps"],
        benefits: ["Declarative Syntax", "Multi-provider", "State Management"],
        projects: ["Cloud Infrastructure", "Multi-cloud Environments", "DevOps Automation"],
      },
    ],
    ai: [
      {
        name: "TensorFlow",
        logo: "/placeholder.svg?height=80&width=80",
        description: "End-to-end open source platform for machine learning, with comprehensive tools and libraries.",
        useCases: ["Image Recognition", "Natural Language Processing", "Predictive Analytics"],
        benefits: ["Flexibility", "Scalability", "Production Readiness"],
        projects: ["Computer Vision Systems", "NLP Applications", "Recommendation Engines"],
      },
      {
        name: "PyTorch",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Open source machine learning library based on the Torch library, used for applications such as computer vision and NLP.",
        useCases: ["Research", "Deep Learning", "Computer Vision"],
        benefits: ["Dynamic Computation", "Python Integration", "Research Friendly"],
        projects: ["Research Applications", "Computer Vision", "NLP Systems"],
      },
      {
        name: "OpenAI API",
        logo: "/placeholder.svg?height=80&width=80",
        description: "API for accessing new AI models developed by OpenAI for natural language processing tasks.",
        useCases: ["Chatbots", "Content Generation", "Language Translation"],
        benefits: ["Advanced NLP", "Easy Integration", "Continuous Improvement"],
        projects: ["AI Assistants", "Content Platforms", "Customer Support Systems"],
      },
      {
        name: "Hugging Face",
        logo: "/placeholder.svg?height=80&width=80",
        description: "AI community building the future of AI with open source models, datasets, and applications.",
        useCases: ["NLP", "Text Classification", "Sentiment Analysis"],
        benefits: ["Pre-trained Models", "Community Support", "Easy Deployment"],
        projects: ["Text Analysis Tools", "Sentiment Analysis", "Language Applications"],
      },
      {
        name: "scikit-learn",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Machine learning library for Python that features various classification, regression and clustering algorithms.",
        useCases: ["Data Analysis", "Predictive Modeling", "Feature Engineering"],
        benefits: ["Ease of Use", "Comprehensive", "Well-documented"],
        projects: ["Data Analysis Tools", "Predictive Models", "Classification Systems"],
      },
      {
        name: "Computer Vision",
        logo: "/placeholder.svg?height=80&width=80",
        description:
          "Field of AI that enables computers to derive meaningful information from digital images and videos.",
        useCases: ["Object Detection", "Facial Recognition", "Medical Imaging"],
        benefits: ["Automation", "Accuracy", "Real-time Processing"],
        projects: ["Security Systems", "Medical Diagnostics", "Retail Analytics"],
      },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>

          {/* Tech-inspired background pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-primary"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Cutting-Edge Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-saudi-black mb-6">
              Our Advanced
              <span className="text-primary relative ml-2">
                Technology Stack
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
              We leverage the latest technologies to build scalable, secure, and high-performance digital solutions
              tailored for the Saudi market and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Categories */}
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Comprehensive Technology Ecosystem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our carefully selected technology stack enables us to deliver optimal solutions for every project type,
              ensuring performance, scalability, and future-readiness.
            </p>
          </div>

          <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {techCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(technologies).map(([category, techs]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={activeTab === category ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {techs.map((tech, index) => (
                    <motion.div key={index} variants={itemVariants} className="group">
                      <Card className="h-full border border-gray-200 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-blue-500/80 to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                              {getTechIcon(tech.name)}
                            </div>
                            <div>
                              <CardTitle className="text-xl font-semibold">{tech.name}</CardTitle>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {tech.useCases.slice(0, 2).map((useCase, i) => (
                                  <Badge
                                    key={i}
                                    variant="outline"
                                    className="text-xs bg-primary/5 text-primary border-primary/20"
                                  >
                                    {useCase}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="pb-4">
                          <CardDescription className="text-gray-600 mb-4">{tech.description}</CardDescription>

                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-saudi-black mb-2 flex items-center">
                                <Zap className="h-4 w-4 text-primary mr-1" />
                                Key Benefits
                              </h4>
                              <ul className="grid grid-cols-1 gap-1">
                                {tech.benefits.map((benefit, i) => (
                                  <li key={i} className="flex items-start text-sm">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-sm font-medium text-saudi-black mb-2 flex items-center">
                                <Layers className="h-4 w-4 text-primary mr-1" />
                                Project Types
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {tech.projects.map((project, i) => (
                                  <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>

                        <CardFooter className="pt-0">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:bg-primary/10 hover:text-primary w-full justify-between group"
                          >
                            <span>Learn More</span>
                            <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Project Type Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-saudi-black mb-4">Tailored Technology Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We select the optimal technology stack for each project based on specific requirements, industry
              standards, and future scalability needs to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-primary to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">Corporate Websites</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern, responsive websites that showcase your brand and engage visitors with seamless user
                  experiences.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Next.js</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Tailwind CSS</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Framer Motion</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Vercel</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-600/10 flex items-center justify-center mr-4">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">E-commerce Platforms</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Scalable online stores with secure payment processing, inventory management, and personalized shopping
                  experiences.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-none">Next.js</Badge>
                    <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-none">MongoDB</Badge>
                    <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-none">Node.js</Badge>
                    <Badge className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20 border-none">AWS</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-purple-600/10 flex items-center justify-center mr-4">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">Mobile Applications</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android
                  devices.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600/20 border-none">
                      React Native
                    </Badge>
                    <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600/20 border-none">
                      Firebase
                    </Badge>
                    <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600/20 border-none">
                      TypeScript
                    </Badge>
                    <Badge className="bg-purple-600/10 text-purple-600 hover:bg-purple-600/20 border-none">Redux</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-green-600 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-green-600/10 flex items-center justify-center mr-4">
                    <Braces className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">Enterprise Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Robust, secure, and scalable enterprise applications that streamline operations and enhance
                  productivity.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-600/10 text-green-600 hover:bg-green-600/20 border-none">
                      Spring Boot
                    </Badge>
                    <Badge className="bg-green-600/10 text-green-600 hover:bg-green-600/20 border-none">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-green-600/10 text-green-600 hover:bg-green-600/20 border-none">Angular</Badge>
                    <Badge className="bg-green-600/10 text-green-600 hover:bg-green-600/20 border-none">Azure</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-amber-600 to-orange-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-amber-600/10 flex items-center justify-center mr-4">
                    <Cpu className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">AI-Powered Applications</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Intelligent applications leveraging machine learning and AI to deliver personalized experiences and
                  insights.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 border-none">
                      TensorFlow
                    </Badge>
                    <Badge className="bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 border-none">Python</Badge>
                    <Badge className="bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 border-none">React</Badge>
                    <Badge className="bg-amber-600/10 text-amber-600 hover:bg-amber-600/20 border-none">
                      Google Cloud
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-red-600 to-pink-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-lg bg-red-600/10 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-saudi-black">Secure Financial Systems</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Highly secure financial applications with robust authentication, encryption, and compliance with Saudi
                  regulations.
                </p>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-saudi-black">Recommended Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 border-none">ASP.NET Core</Badge>
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 border-none">SQL Server</Badge>
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 border-none">React</Badge>
                    <Badge className="bg-red-600/10 text-red-600 hover:bg-red-600/20 border-none">Azure</Badge>
                  </div>
                </div>
              </div>
            </div>
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
                Ready to Build Your Next Project with Cutting-Edge Technology?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts is ready to help you select the perfect technology stack for your specific business
                needs and goals.
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

