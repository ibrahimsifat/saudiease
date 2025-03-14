"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Calculator,
  Clock,
  Calendar,
  DollarSign,
  Users,
  Layers,
  Code,
  Smartphone,
  Globe,
  Database,
  PieChart,
  CheckCircle,
  ChevronRight,
  Send,
  Download,
  Share2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Project types with their base costs and timelines
const PROJECT_TYPES = [
  {
    id: "website",
    name: "Website",
    icon: <Globe className="h-5 w-5" />,
    basePrice: 5000,
    baseTimeWeeks: 4,
    description: "Custom website development with responsive design and content management system.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    icon: <DollarSign className="h-5 w-5" />,
    basePrice: 12000,
    baseTimeWeeks: 8,
    description: "Full-featured online store with product catalog, secure checkout, and inventory management.",
  },
  {
    id: "mobile-app",
    name: "Mobile Application",
    icon: <Smartphone className="h-5 w-5" />,
    basePrice: 15000,
    baseTimeWeeks: 10,
    description: "Native or cross-platform mobile application for iOS and Android devices.",
  },
  {
    id: "custom-software",
    name: "Custom Software",
    icon: <Code className="h-5 w-5" />,
    basePrice: 20000,
    baseTimeWeeks: 12,
    description: "Bespoke software solution tailored to your specific business requirements.",
  },
  {
    id: "e-invoicing",
    name: "E-Invoicing Solution",
    icon: <Database className="h-5 w-5" />,
    basePrice: 8000,
    baseTimeWeeks: 6,
    description: "ZATCA-compliant e-invoicing system with integration to your existing systems.",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: <PieChart className="h-5 w-5" />,
    basePrice: 3500,
    baseTimeWeeks: 4,
    description: "Comprehensive digital marketing strategy and implementation.",
  },
]

// Complexity levels with their multipliers
const COMPLEXITY_LEVELS = [
  { id: "basic", name: "Basic", priceMultiplier: 1, timeMultiplier: 1 },
  { id: "standard", name: "Standard", priceMultiplier: 1.5, timeMultiplier: 1.3 },
  { id: "advanced", name: "Advanced", priceMultiplier: 2, timeMultiplier: 1.7 },
  { id: "enterprise", name: "Enterprise", priceMultiplier: 3, timeMultiplier: 2.5 },
]

// Features with their additional costs and time
const FEATURES = [
  {
    id: "user-auth",
    name: "User Authentication",
    additionalPrice: 1500,
    additionalTimeWeeks: 1,
    applicableTo: ["website", "ecommerce", "mobile-app", "custom-software"],
    description: "Secure login, registration, and user profile management.",
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway Integration",
    additionalPrice: 2000,
    additionalTimeWeeks: 1.5,
    applicableTo: ["ecommerce", "mobile-app", "custom-software"],
    description: "Integration with popular payment gateways like Mada, Apple Pay, and credit cards.",
  },
  {
    id: "multi-language",
    name: "Multi-language Support",
    additionalPrice: 1800,
    additionalTimeWeeks: 1,
    applicableTo: ["website", "ecommerce", "mobile-app", "custom-software", "e-invoicing"],
    description: "Support for Arabic, English, and other languages with RTL compatibility.",
  },
  {
    id: "analytics",
    name: "Advanced Analytics",
    additionalPrice: 1200,
    additionalTimeWeeks: 0.5,
    applicableTo: ["website", "ecommerce", "mobile-app", "custom-software", "digital-marketing"],
    description: "Detailed analytics dashboard with custom reports and insights.",
  },
  {
    id: "api-integration",
    name: "Third-party API Integration",
    additionalPrice: 2500,
    additionalTimeWeeks: 2,
    applicableTo: ["website", "ecommerce", "mobile-app", "custom-software", "e-invoicing"],
    description: "Integration with external services and APIs.",
  },
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    additionalPrice: 1000,
    additionalTimeWeeks: 1,
    applicableTo: ["website", "ecommerce", "digital-marketing"],
    description: "On-page and technical SEO optimization for better search engine rankings.",
  },
  {
    id: "content-management",
    name: "Advanced Content Management",
    additionalPrice: 1500,
    additionalTimeWeeks: 1,
    applicableTo: ["website", "ecommerce"],
    description: "Sophisticated content management system with workflow and approval processes.",
  },
  {
    id: "social-integration",
    name: "Social Media Integration",
    additionalPrice: 800,
    additionalTimeWeeks: 0.5,
    applicableTo: ["website", "ecommerce", "mobile-app", "digital-marketing"],
    description: "Integration with social media platforms for sharing and authentication.",
  },
  {
    id: "offline-mode",
    name: "Offline Mode",
    additionalPrice: 2000,
    additionalTimeWeeks: 1.5,
    applicableTo: ["mobile-app", "custom-software"],
    description: "Ability to use the application without an internet connection.",
  },
  {
    id: "push-notifications",
    name: "Push Notifications",
    additionalPrice: 1200,
    additionalTimeWeeks: 1,
    applicableTo: ["mobile-app"],
    description: "Real-time push notifications to engage users.",
  },
  {
    id: "reporting",
    name: "Custom Reporting",
    additionalPrice: 1800,
    additionalTimeWeeks: 1.5,
    applicableTo: ["ecommerce", "custom-software", "e-invoicing", "digital-marketing"],
    description: "Customizable reports and dashboards for business intelligence.",
  },
  {
    id: "zatca-compliance",
    name: "ZATCA Compliance",
    additionalPrice: 3000,
    additionalTimeWeeks: 2,
    applicableTo: ["ecommerce", "custom-software", "e-invoicing"],
    description: "Full compliance with Saudi Arabian tax authority requirements.",
  },
]

// Team size multipliers
const TEAM_SIZE_MULTIPLIERS = [
  { id: "small", name: "Small (1-10 employees)", priceMultiplier: 0.8, timeMultiplier: 0.9 },
  { id: "medium", name: "Medium (11-50 employees)", priceMultiplier: 1, timeMultiplier: 1 },
  { id: "large", name: "Large (51-200 employees)", priceMultiplier: 1.2, timeMultiplier: 1.1 },
  { id: "enterprise", name: "Enterprise (201+ employees)", priceMultiplier: 1.5, timeMultiplier: 1.3 },
]

// Maintenance plans
const MAINTENANCE_PLANS = [
  {
    id: "basic",
    name: "Basic Support",
    monthlyPrice: 500,
    features: ["Bug fixes", "Security updates", "Email support (business hours)", "Monthly performance report"],
  },
  {
    id: "standard",
    name: "Standard Support",
    monthlyPrice: 1200,
    features: [
      "All Basic Support features",
      "Minor feature updates",
      "Phone support (business hours)",
      "Weekly backups",
      "Monthly performance optimization",
    ],
  },
  {
    id: "premium",
    name: "Premium Support",
    monthlyPrice: 2500,
    features: [
      "All Standard Support features",
      "Priority bug fixes",
      "Quarterly feature additions",
      "24/7 emergency support",
      "Dedicated account manager",
      "Daily backups",
      "Monthly strategy consultation",
    ],
  },
]

export default function EstimatorClient() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [projectType, setProjectType] = useState<string>("website")
  const [complexity, setComplexity] = useState<string>("standard")
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [teamSize, setTeamSize] = useState<string>("medium")
  const [urgencyMultiplier, setUrgencyMultiplier] = useState<number>(1)
  const [maintenancePlan, setMaintenancePlan] = useState<string>("standard")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [company, setCompany] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0)
  const [estimatedTimeWeeks, setEstimatedTimeWeeks] = useState<number>(0)
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(25)

  // Calculate the estimate whenever relevant inputs change
  useEffect(() => {
    calculateEstimate()
  }, [projectType, complexity, selectedFeatures, teamSize, urgencyMultiplier, maintenancePlan])

  // Update progress based on current step
  useEffect(() => {
    setProgress(currentStep * 25)
  }, [currentStep])

  const calculateEstimate = () => {
    const selectedProjectType = PROJECT_TYPES.find((type) => type.id === projectType)
    const selectedComplexity = COMPLEXITY_LEVELS.find((level) => level.id === complexity)
    const selectedTeamSizeMultiplier = TEAM_SIZE_MULTIPLIERS.find((size) => size.id === teamSize)

    if (!selectedProjectType || !selectedComplexity || !selectedTeamSizeMultiplier) return

    // Base calculation
    const basePrice =
      selectedProjectType.basePrice * selectedComplexity.priceMultiplier * selectedTeamSizeMultiplier.priceMultiplier
    const baseTime =
      selectedProjectType.baseTimeWeeks * selectedComplexity.timeMultiplier * selectedTeamSizeMultiplier.timeMultiplier

    // Add feature costs and time
    let featurePrice = 0
    let featureTime = 0

    selectedFeatures.forEach((featureId) => {
      const feature = FEATURES.find((f) => f.id === featureId)
      if (feature) {
        featurePrice += feature.additionalPrice
        featureTime += feature.additionalTimeWeeks
      }
    })

    // Apply urgency multiplier (affects both price and time)
    const totalPrice = (basePrice + featurePrice) * urgencyMultiplier
    // For urgent projects, we can reduce time but at a higher cost
    const totalTime =
      urgencyMultiplier < 1 ? baseTime + featureTime - (1 - urgencyMultiplier) * 5 : baseTime + featureTime

    // Set the calculated values
    setEstimatedPrice(Math.round(totalPrice))
    setEstimatedTimeWeeks(Math.round(totalTime * 10) / 10) // Round to 1 decimal place
  }

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      // Final step - show results
      setIsCalculating(true)
      setTimeout(() => {
        setIsCalculating(false)
        setShowResults(true)
      }, 1500)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log({
      projectType,
      complexity,
      selectedFeatures,
      teamSize,
      urgencyMultiplier,
      maintenancePlan,
      name,
      email,
      phone,
      company,
      message,
      estimatedPrice,
      estimatedTimeWeeks,
    })

    // Redirect to consultation page
    router.push("/schedule-consultation")
  }

  const getApplicableFeatures = () => {
    return FEATURES.filter((feature) => feature.applicableTo.includes(projectType))
  }

  const getMaintenancePlanDetails = () => {
    return MAINTENANCE_PLANS.find((plan) => plan.id === maintenancePlan)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-SA", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Interactive Project Estimator
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
            >
              Get an Instant Estimate for Your Project
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Use our interactive estimator to get an approximate cost and timeline for your digital project. Adjust
              parameters to see how different choices affect your project scope.
            </motion.p>

            {!showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-4 mb-8"
              >
                <div className="flex items-center">
                  <div className="w-full">
                    <Progress value={progress} className="h-2" />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Project Details</span>
                      <span>Features</span>
                      <span>Business Info</span>
                      <span>Contact</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          {!showResults ? (
            <div className="max-w-4xl mx-auto">
              {/* Step 1: Project Type and Complexity */}
              {currentStep === 1 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center">
                    <Layers className="mr-2 h-6 w-6 text-primary" />
                    Project Type & Complexity
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">What type of project do you need?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {PROJECT_TYPES.map((type) => (
                        <div
                          key={type.id}
                          className={cn(
                            "border rounded-xl p-4 cursor-pointer transition-all",
                            projectType === type.id
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-primary/50 hover:shadow-sm",
                          )}
                          onClick={() => setProjectType(type.id)}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                                projectType === type.id ? "bg-primary text-white" : "bg-gray-100 text-gray-500",
                              )}
                            >
                              {type.icon}
                            </div>
                            <h4 className="font-medium">{type.name}</h4>
                          </div>
                          <p className="text-sm text-gray-500">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Project Complexity</h3>
                    <RadioGroup
                      value={complexity}
                      onValueChange={setComplexity}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                      {COMPLEXITY_LEVELS.map((level) => (
                        <div key={level.id} className="relative">
                          <RadioGroupItem value={level.id} id={`complexity-${level.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`complexity-${level.id}`}
                            className={cn(
                              "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              complexity === level.id && "border-primary bg-primary/5",
                            )}
                          >
                            <div className="mb-2 text-center">
                              <span className="text-lg font-medium">{level.name}</span>
                            </div>
                            <div className="text-xs text-center text-gray-500">
                              {level.priceMultiplier}x cost multiplier
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">Complexity Guide:</h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>
                          <strong>Basic:</strong> Simple design, limited features, standard functionality
                        </li>
                        <li>
                          <strong>Standard:</strong> Custom design, common features, some integrations
                        </li>
                        <li>
                          <strong>Advanced:</strong> Complex design, advanced features, multiple integrations
                        </li>
                        <li>
                          <strong>Enterprise:</strong> Highly customized, complex architecture, extensive integrations
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Project Urgency</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Standard Timeline</span>
                        <span className="text-sm text-gray-500">Urgent (Higher Cost)</span>
                      </div>
                      <Slider
                        defaultValue={[1]}
                        max={2}
                        min={0.8}
                        step={0.1}
                        value={[urgencyMultiplier]}
                        onValueChange={(value) => setUrgencyMultiplier(value[0])}
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-green-500" />
                          <span className="text-green-600">Standard Timeline</span>
                          <span className="ml-1 text-gray-500">(1x cost)</span>
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-amber-500" />
                          <span className="text-amber-600">Expedited</span>
                          <span className="ml-1 text-gray-500">({urgencyMultiplier.toFixed(1)}x cost)</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-end">
                    <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                      Continue to Features
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 2: Features */}
              {currentStep === 2 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="mr-2 h-6 w-6 text-primary" />
                    Project Features
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Select the features you need</h3>
                    <p className="text-gray-500 mb-6">
                      Choose the features that are essential for your{" "}
                      {PROJECT_TYPES.find((t) => t.id === projectType)?.name.toLowerCase()}. Each feature affects the
                      overall cost and timeline.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getApplicableFeatures().map((feature) => (
                        <div
                          key={feature.id}
                          className={cn(
                            "border rounded-xl p-4 cursor-pointer transition-all",
                            selectedFeatures.includes(feature.id)
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-primary/50 hover:shadow-sm",
                          )}
                          onClick={() => handleFeatureToggle(feature.id)}
                        >
                          <div className="flex items-start">
                            <Checkbox
                              id={`feature-${feature.id}`}
                              checked={selectedFeatures.includes(feature.id)}
                              className="mt-1 mr-3"
                            />
                            <div>
                              <label htmlFor={`feature-${feature.id}`} className="font-medium cursor-pointer">
                                {feature.name}
                              </label>
                              <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                              <div className="flex items-center mt-2 text-xs text-gray-500">
                                <span className="flex items-center mr-3">
                                  <DollarSign className="h-3 w-3 mr-1 text-primary" />
                                  {formatCurrency(feature.additionalPrice)}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1 text-amber-500" />
                                  {feature.additionalTimeWeeks} {feature.additionalTimeWeeks === 1 ? "week" : "weeks"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Maintenance Plan</h3>
                    <p className="text-gray-500 mb-6">
                      Choose a maintenance plan to keep your project running smoothly after launch.
                    </p>

                    <RadioGroup
                      value={maintenancePlan}
                      onValueChange={setMaintenancePlan}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {MAINTENANCE_PLANS.map((plan) => (
                        <div key={plan.id} className="relative">
                          <RadioGroupItem value={plan.id} id={`plan-${plan.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`plan-${plan.id}`}
                            className={cn(
                              "flex flex-col h-full justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              maintenancePlan === plan.id && "border-primary bg-primary/5",
                            )}
                          >
                            <div className="mb-2">
                              <span className="text-lg font-medium">{plan.name}</span>
                              <p className="text-sm text-primary font-bold mt-1">
                                {formatCurrency(plan.monthlyPrice)}/month
                              </p>
                            </div>
                            <ul className="text-xs text-gray-500 space-y-1 mt-2">
                              {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <Button onClick={handlePrevStep} variant="outline">
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                      Continue to Business Info
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 3: Business Information */}
              {currentStep === 3 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Business Information
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Company Size</h3>
                    <p className="text-gray-500 mb-6">
                      The size of your organization helps us tailor the solution to your specific needs.
                    </p>

                    <RadioGroup
                      value={teamSize}
                      onValueChange={setTeamSize}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {TEAM_SIZE_MULTIPLIERS.map((size) => (
                        <div key={size.id} className="relative">
                          <RadioGroupItem value={size.id} id={`size-${size.id}`} className="peer sr-only" />
                          <Label
                            htmlFor={`size-${size.id}`}
                            className={cn(
                              "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              teamSize === size.id && "border-primary bg-primary/5",
                            )}
                          >
                            <div className="mb-2 text-center">
                              <span className="text-lg font-medium">{size.name}</span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <select
                          id="industry"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select your industry</option>
                          <option value="retail">Retail & E-commerce</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="finance">Finance & Banking</option>
                          <option value="education">Education</option>
                          <option value="manufacturing">Manufacturing</option>
                          <option value="technology">Technology</option>
                          <option value="hospitality">Hospitality & Tourism</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="government">Government</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <Button onClick={handlePrevStep} variant="outline">
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                      Continue to Contact Info
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
                >
                  <motion.h2 variants={itemVariants} className="text-2xl font-bold mb-6 flex items-center">
                    <Users className="mr-2 h-6 w-6 text-primary" />
                    Contact Information
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="+966 5X XXX XXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" placeholder="Your position" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your project requirements..."
                        className="min-h-[120px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex justify-between">
                    <Button onClick={handlePrevStep} variant="outline">
                      Back
                    </Button>
                    <Button onClick={handleNextStep} className="bg-primary hover:bg-primary/90">
                      Get Your Estimate
                      <Calculator className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            // Results View
            <div className="max-w-5xl mx-auto">
              {isCalculating ? (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-6"></div>
                  <h2 className="text-2xl font-bold mb-4">Calculating Your Estimate...</h2>
                  <p className="text-gray-500">Please wait while we process your project details.</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">Your Project Estimate</h2>
                    <p className="opacity-90">Based on the information you provided</p>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <DollarSign className="h-5 w-5 text-primary mr-2" />
                          Estimated Cost
                        </h3>
                        <div className="text-4xl font-bold text-primary mb-2">{formatCurrency(estimatedPrice)}</div>
                        <p className="text-sm text-gray-500 mb-4">One-time project cost</p>

                        {maintenancePlan && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Monthly Maintenance:</span>
                              <span className="font-medium">
                                {formatCurrency(getMaintenancePlanDetails()?.monthlyPrice || 0)}/month
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          Estimated Timeline
                        </h3>
                        <div className="text-4xl font-bold text-primary mb-2">{estimatedTimeWeeks} weeks</div>
                        <p className="text-sm text-gray-500 mb-4">From kickoff to launch</p>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Approximate Launch Date:</span>
                            <span className="font-medium">
                              {new Date(Date.now() + estimatedTimeWeeks * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">Project Summary</h3>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Project Type</h4>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                {PROJECT_TYPES.find((t) => t.id === projectType)?.icon}
                              </div>
                              <span>{PROJECT_TYPES.find((t) => t.id === projectType)?.name}</span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Complexity</h4>
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                              {COMPLEXITY_LEVELS.find((c) => c.id === complexity)?.name}
                            </Badge>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Selected Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedFeatures.length > 0 ? (
                                selectedFeatures.map((featureId) => (
                                  <Badge key={featureId} variant="outline" className="bg-gray-100">
                                    {FEATURES.find((f) => f.id === featureId)?.name}
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-sm text-gray-500">No additional features selected</span>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Maintenance Plan</h4>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                              {getMaintenancePlanDetails()?.name}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">Next Steps</h3>
                      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <p className="text-gray-600 mb-4">
                          This is an estimate based on the information provided. For a detailed proposal and to discuss
                          your project further:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                            <Calendar className="mr-2 h-4 w-4" />
                            Schedule Consultation
                          </Button>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                            <Download className="mr-2 h-4 w-4" />
                            Download Estimate
                          </Button>
                          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share Estimate
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-4">
                        Need to make changes? You can go back and adjust your selections.
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setShowResults(false)
                          setCurrentStep(1)
                        }}
                      >
                        Start Over
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Have questions about our estimator or project process? Find answers to common questions below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="estimator" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="estimator">About the Estimator</TabsTrigger>
                <TabsTrigger value="process">Our Process</TabsTrigger>
                <TabsTrigger value="pricing">Pricing & Payment</TabsTrigger>
              </TabsList>

              <TabsContent value="estimator" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">How accurate is this estimate?</h3>
                    <p className="text-gray-600">
                      This estimator provides an approximate cost and timeline based on the information you provide. The
                      final cost may vary based on detailed requirements, which we'll discuss during a consultation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Can I change my selections later?</h3>
                    <p className="text-gray-600">
                      Yes, you can go back and adjust your selections at any time before submitting. After submission,
                      we'll discuss any changes during the consultation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Is my information secure?</h3>
                    <p className="text-gray-600">
                      Yes, all information submitted through this estimator is encrypted and secure. We do not share
                      your information with third parties.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">What happens after I submit my estimate request?</h3>
                    <p className="text-gray-600">
                      Our team will review your requirements and schedule a consultation to discuss your project in
                      detail. We'll then provide a detailed proposal with exact pricing and timeline.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">How long does the development process take?</h3>
                    <p className="text-gray-600">
                      Development timelines vary based on project complexity and scope. The estimator provides an
                      approximate timeline, which we'll refine during our consultation based on your specific
                      requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Do you provide support after launch?</h3>
                    <p className="text-gray-600">
                      Yes, we offer various maintenance plans to ensure your project continues to run smoothly after
                      launch. These include bug fixes, security updates, and ongoing support.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
                    <p className="text-gray-600">
                      We accept bank transfers, credit cards, and digital payment methods. Payment terms and schedules
                      will be outlined in your project proposal.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Do you require a deposit?</h3>
                    <p className="text-gray-600">
                      Yes, we typically require a 50% deposit to begin work, with the remaining balance due upon project
                      completion. For larger projects, we can arrange milestone-based payments.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">Are there any hidden costs?</h3>
                    <p className="text-gray-600">
                      No, we provide transparent pricing with no hidden costs. Any additional requirements or changes to
                      the project scope will be discussed and approved before implementation.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get in touch with our team to discuss your project requirements and turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-primary hover:bg-gray-100" size="lg" asChild>
                <Link href="/schedule-consultation">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Consultation
                </Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg" asChild>
                <Link href="/contact">
                  <Send className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

