"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Code,
  Database,
  DollarSign,
  Download,
  Globe,
  Layers,
  PieChart,
  Send,
  Share2,
  Smartphone,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type EstimatorClientProps = {
  locale: string;
};

export default function EstimatorClient({ locale }: EstimatorClientProps) {
  const t = useTranslations("estimator");
  const isRTL = locale === "ar";
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState<string>("website");
  const [complexity, setComplexity] = useState<string>("standard");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [teamSize, setTeamSize] = useState<string>("medium");
  const [urgencyMultiplier, setUrgencyMultiplier] = useState<number>(1);
  const [maintenancePlan, setMaintenancePlan] = useState<string>("standard");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [estimatedTimeWeeks, setEstimatedTimeWeeks] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(25);

  // Project types with their base costs and timelines
  const PROJECT_TYPES = [
    {
      id: "website",
      name: t("projectTypes.website.name"),
      icon: <Globe className="h-5 w-5" />,
      basePrice: 5000,
      baseTimeWeeks: 4,
      description: t("projectTypes.website.description"),
    },
    {
      id: "ecommerce",
      name: t("projectTypes.ecommerce.name"),
      icon: <DollarSign className="h-5 w-5" />,
      basePrice: 12000,
      baseTimeWeeks: 8,
      description: t("projectTypes.ecommerce.description"),
    },
    {
      id: "mobile-app",
      name: t("projectTypes.mobileApp.name"),
      icon: <Smartphone className="h-5 w-5" />,
      basePrice: 15000,
      baseTimeWeeks: 10,
      description: t("projectTypes.mobileApp.description"),
    },
    {
      id: "custom-software",
      name: t("projectTypes.customSoftware.name"),
      icon: <Code className="h-5 w-5" />,
      basePrice: 20000,
      baseTimeWeeks: 12,
      description: t("projectTypes.customSoftware.description"),
    },
    {
      id: "e-invoicing",
      name: t("projectTypes.eInvoicing.name"),
      icon: <Database className="h-5 w-5" />,
      basePrice: 8000,
      baseTimeWeeks: 6,
      description: t("projectTypes.eInvoicing.description"),
    },
    {
      id: "digital-marketing",
      name: t("projectTypes.digitalMarketing.name"),
      icon: <PieChart className="h-5 w-5" />,
      basePrice: 3500,
      baseTimeWeeks: 4,
      description: t("projectTypes.digitalMarketing.description"),
    },
  ];

  // Complexity levels with their multipliers
  const COMPLEXITY_LEVELS = [
    {
      id: "basic",
      name: t("complexity.basic.name"),
      priceMultiplier: 1,
      timeMultiplier: 1,
      costMultiplier: 1,
    },
    {
      id: "standard",
      name: t("complexity.standard.name"),
      priceMultiplier: 1.5,
      timeMultiplier: 1.3,
      costMultiplier: 1.2,
    },
    {
      id: "advanced",
      name: t("complexity.advanced.name"),
      priceMultiplier: 2,
      timeMultiplier: 1.7,
      costMultiplier: 1.5,
    },
    {
      id: "enterprise",
      name: t("complexity.enterprise.name"),
      priceMultiplier: 3,
      timeMultiplier: 2.5,
      costMultiplier: 2,
    },
  ];

  // Features with their additional costs and time
  const FEATURES = [
    {
      id: "user-auth",
      name: t("features.userAuth.name"),
      additionalPrice: 1500,
      additionalTimeWeeks: 1,
      applicableTo: ["website", "ecommerce", "mobile-app", "custom-software"],
      description: t("features.userAuth.description"),
    },
    {
      id: "payment-gateway",
      name: t("features.paymentGateway.name"),
      additionalPrice: 2000,
      additionalTimeWeeks: 1.5,
      applicableTo: ["ecommerce", "mobile-app", "custom-software"],
      description: t("features.paymentGateway.description"),
    },
    {
      id: "multi-language",
      name: t("features.multiLanguage.name"),
      additionalPrice: 1800,
      additionalTimeWeeks: 1,
      applicableTo: [
        "website",
        "ecommerce",
        "mobile-app",
        "custom-software",
        "e-invoicing",
      ],
      description: t("features.multiLanguage.description"),
    },
    {
      id: "analytics",
      name: t("features.analytics.name"),
      additionalPrice: 1200,
      additionalTimeWeeks: 0.5,
      applicableTo: [
        "website",
        "ecommerce",
        "mobile-app",
        "custom-software",
        "digital-marketing",
      ],
      description: t("features.analytics.description"),
    },
    {
      id: "api-integration",
      name: t("features.apiIntegration.name"),
      additionalPrice: 2500,
      additionalTimeWeeks: 2,
      applicableTo: [
        "website",
        "ecommerce",
        "mobile-app",
        "custom-software",
        "e-invoicing",
      ],
      description: t("features.apiIntegration.description"),
    },
    {
      id: "seo-optimization",
      name: t("features.seoOptimization.name"),
      additionalPrice: 1000,
      additionalTimeWeeks: 1,
      applicableTo: ["website", "ecommerce", "digital-marketing"],
      description: t("features.seoOptimization.description"),
    },
    {
      id: "content-management",
      name: t("features.contentManagement.name"),
      additionalPrice: 1500,
      additionalTimeWeeks: 1,
      applicableTo: ["website", "ecommerce"],
      description: t("features.contentManagement.description"),
    },
    {
      id: "social-integration",
      name: t("features.socialIntegration.name"),
      additionalPrice: 800,
      additionalTimeWeeks: 0.5,
      applicableTo: ["website", "ecommerce", "mobile-app", "digital-marketing"],
      description: t("features.socialIntegration.description"),
    },
    {
      id: "offline-mode",
      name: t("features.offlineMode.name"),
      additionalPrice: 2000,
      additionalTimeWeeks: 1.5,
      applicableTo: ["mobile-app", "custom-software"],
      description: t("features.offlineMode.description"),
    },
    {
      id: "push-notifications",
      name: t("features.pushNotifications.name"),
      additionalPrice: 1200,
      additionalTimeWeeks: 1,
      applicableTo: ["mobile-app"],
      description: t("features.pushNotifications.description"),
    },
    {
      id: "reporting",
      name: t("features.reporting.name"),
      additionalPrice: 1800,
      additionalTimeWeeks: 1.5,
      applicableTo: [
        "ecommerce",
        "custom-software",
        "e-invoicing",
        "digital-marketing",
      ],
      description: t("features.reporting.description"),
    },
    {
      id: "zatca-compliance",
      name: t("features.zatcaCompliance.name"),
      additionalPrice: 3000,
      additionalTimeWeeks: 2,
      applicableTo: ["ecommerce", "custom-software", "e-invoicing"],
      description: t("features.zatcaCompliance.description"),
    },
  ];

  // Team size multipliers
  const TEAM_SIZE_MULTIPLIERS = [
    {
      id: "small",
      name: t("teamSize.small.name"),
      priceMultiplier: 0.8,
      timeMultiplier: 0.9,
    },
    {
      id: "medium",
      name: t("teamSize.medium.name"),
      priceMultiplier: 1,
      timeMultiplier: 1,
    },
    {
      id: "large",
      name: t("teamSize.large.name"),
      priceMultiplier: 1.2,
      timeMultiplier: 1.1,
    },
    {
      id: "enterprise",
      name: t("teamSize.enterprise.name"),
      priceMultiplier: 1.5,
      timeMultiplier: 1.3,
    },
  ];

  // Maintenance plans
  const MAINTENANCE_PLANS = [
    {
      id: "basic",
      name: t("maintenancePlans.basic.name"),
      monthlyPrice: 500,
      features: {
        en: [
          "Bug fixes",
          "Security updates",
          "Email support (business hours)",
          "Monthly performance report",
        ],
        bn: [
          "বাগ ফিক্স",
          "সিকিউরিটি আপডেট",
          "ইমেইল সাপোর্ট (অফিস আওয়ার্স)",
          "মাসিক পারফরম্যান্স রিপোর্ট",
        ],
        ar: [
          "إصلاح الأخطاء",
          "تحديثات الأمان",
          "دعم البريد الإلكتروني (ساعات العمل)",
          "تقرير أداء شهري",
        ],
      },
    },
    {
      id: "standard",
      name: t("maintenancePlans.standard.name"),
      monthlyPrice: 1200,
      features: {
        en: [
          "All Basic Support features",
          "Minor feature updates",
          "Phone support (business hours)",
          "Weekly backups",
          "Monthly performance optimization",
        ],
        bn: [
          "সমস্ত বেসিক সাপোর্ট বৈশিষ্ট্য",
          "মাইনর ফিচার আপডেট",
          "ফোন সাপোর্ট (অফিস আওয়ার্স)",
          "সাপ্তাহিক ব্যাকআপ",
          "মাসিক পারফরম্যান্স অপটিমাইজেশন",
        ],
        ar: [
          "جميع ميزات الدعم الأساسي",
          "تحديثات الميزات الصغيرة",
          "دعم الهاتف (ساعات العمل)",
          "نسخ احتياطية أسبوعية",
          "تحسين الأداء الشهري",
        ],
      },
    },
    {
      id: "premium",
      name: t("maintenancePlans.premium.name"),
      monthlyPrice: 2500,
      features: {
        en: [
          "All Standard Support features",
          "Priority bug fixes",
          "Quarterly feature additions",
          "24/7 emergency support",
          "Dedicated account manager",
          "Daily backups",
          "Monthly strategy consultation",
        ],
        bn: [
          "সমস্ত স্ট্যান্ডার্ড সাপোর্ট বৈশিষ্ট্য",
          "অগ্রাধিকার বাগ ফিক্স",
          "ত্রৈমাসিক ফিচার যোগ",
          "24/7 জরুরি সাপোর্ট",
          "নিবেদিত অ্যাকাউন্ট ম্যানেজার",
          "দৈনিক ব্যাকআপ",
          "মাসিক কৌশলগত পরামর্শ",
        ],
        ar: [
          "جميع ميزات الدعم القياسي",
          "إصلاحات الأخطاء ذات الأولوية",
          "إضافات ميزات ربع سنوية",
          "دعم الطوارئ على مدار الساعة",
          "مدير حساب مخصص",
          "نسخ احتياطية يومية",
          "استشارة استراتيجية شهرية",
        ],
      },
    },
  ];

  // Calculate the estimate whenever relevant inputs change
  useEffect(() => {
    calculateEstimate();
  }, [
    projectType,
    complexity,
    selectedFeatures,
    teamSize,
    urgencyMultiplier,
    maintenancePlan,
  ]);

  // Update progress based on current step
  useEffect(() => {
    setProgress(currentStep * 25);
  }, [currentStep]);

  const calculateEstimate = () => {
    const selectedProjectType = PROJECT_TYPES.find(
      (type) => type.id === projectType
    );
    const selectedComplexity = COMPLEXITY_LEVELS.find(
      (level) => level.id === complexity
    );
    const selectedTeamSizeMultiplier = TEAM_SIZE_MULTIPLIERS.find(
      (size) => size.id === teamSize
    );

    if (
      !selectedProjectType ||
      !selectedComplexity ||
      !selectedTeamSizeMultiplier
    )
      return;

    // Base calculation
    const basePrice =
      selectedProjectType.basePrice *
      selectedComplexity.priceMultiplier *
      selectedTeamSizeMultiplier.priceMultiplier;
    const baseTime =
      selectedProjectType.baseTimeWeeks *
      selectedComplexity.timeMultiplier *
      selectedTeamSizeMultiplier.timeMultiplier;

    // Add feature costs and time
    let featurePrice = 0;
    let featureTime = 0;

    selectedFeatures.forEach((featureId) => {
      const feature = FEATURES.find((f) => f.id === featureId);
      if (feature) {
        featurePrice += feature.additionalPrice;
        featureTime += feature.additionalTimeWeeks;
      }
    });

    // Apply urgency multiplier (affects both price and time)
    const totalPrice = (basePrice + featurePrice) * urgencyMultiplier;
    // For urgent projects, we can reduce time but at a higher cost
    const totalTime =
      urgencyMultiplier < 1
        ? baseTime + featureTime - (1 - urgencyMultiplier) * 5
        : baseTime + featureTime;

    // Set the calculated values
    setEstimatedPrice(Math.round(totalPrice));
    setEstimatedTimeWeeks(Math.round(totalTime * 10) / 10); // Round to 1 decimal place
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Final step - show results
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    });

    // Redirect to consultation page
    router.push(`/${locale}/schedule-consultation`);
  };

  const getApplicableFeatures = () => {
    return FEATURES.filter((feature) =>
      feature.applicableTo.includes(projectType)
    );
  };

  const getMaintenancePlanDetails = () => {
    return MAINTENANCE_PLANS.find((plan) => plan.id === maintenancePlan);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(
      locale === "ar" ? "ar-SA" : locale === "bn" ? "bn-BD" : "en-SA",
      {
        style: "currency",
        currency: "SAR",
        maximumFractionDigits: 0,
      }
    ).format(amount);
  };

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
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
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
              <Calculator className={cn("w-4 h-4", isRTL ? "ml-2" : "mr-2")} />
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              {t("hero.description")}
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
                      <span>{t("steps.projectDetails")}</span>
                      <span>{t("steps.features")}</span>
                      <span>{t("steps.businessInfo")}</span>
                      <span>{t("steps.contact")}</span>
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
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6 flex items-center"
                  >
                    <Layers
                      className={cn(
                        "h-6 w-6 text-primary",
                        isRTL ? "ml-2" : "mr-2"
                      )}
                    />
                    {t("step1.title")}
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step1.projectTypeQuestion")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {PROJECT_TYPES.map((type) => (
                        <div
                          key={type.id}
                          className={cn(
                            "border rounded-xl p-4 cursor-pointer transition-all",
                            projectType === type.id
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-primary/50 hover:shadow-sm"
                          )}
                          onClick={() => setProjectType(type.id)}
                        >
                          <div className="flex items-center mb-2">
                            <div
                              className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center",
                                isRTL ? "ml-3" : "mr-3",
                                projectType === type.id
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 text-gray-500"
                              )}
                            >
                              {type.icon}
                            </div>
                            <h4 className="font-medium">{type.name}</h4>
                          </div>
                          <p className="text-sm text-gray-500">
                            {type.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step1.complexityTitle")}
                    </h3>
                    <RadioGroup
                      value={complexity}
                      onValueChange={setComplexity}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                      {COMPLEXITY_LEVELS.map((level) => (
                        <div key={level.id} className="relative">
                          <RadioGroupItem
                            value={level.id}
                            id={`complexity-${level.id}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`complexity-${level.id}`}
                            className={cn(
                              "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              complexity === level.id &&
                                "border-primary bg-primary/5"
                            )}
                          >
                            <div className="mb-2 text-center">
                              <span className="text-lg font-medium">
                                {level.name}
                              </span>
                            </div>
                            <div className="text-xs text-center text-gray-500">
                              {t("step1.costMultiplier", {
                                multiplier: level.priceMultiplier,
                              }) || `${level.priceMultiplier}x cost multiplier`}
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-700 mb-2">
                        {t("step1.complexityGuide.title")}
                      </h4>
                      <ul className="text-sm text-blue-600 space-y-1">
                        <li>
                          <strong>{t("complexity.basic.name")}:</strong>{" "}
                          {t("step1.complexityGuide.basic")}
                        </li>
                        <li>
                          <strong>{t("complexity.standard.name")}:</strong>{" "}
                          {t("step1.complexityGuide.standard")}
                        </li>
                        <li>
                          <strong>{t("complexity.advanced.name")}:</strong>{" "}
                          {t("step1.complexityGuide.advanced")}
                        </li>
                        <li>
                          <strong>{t("complexity.enterprise.name")}:</strong>{" "}
                          {t("step1.complexityGuide.enterprise")}
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step1.urgencyTitle")}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {t("step1.standardTimeline")}
                        </span>
                        <span className="text-sm text-gray-500">
                          {t("step1.urgentHigherCost")}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[1]}
                        max={2}
                        min={0.8}
                        step={0.1}
                        value={[urgencyMultiplier]}
                        onValueChange={(value) =>
                          setUrgencyMultiplier(value[0])
                        }
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <Calendar
                            className={cn(
                              "h-4 w-4 text-green-500",
                              isRTL ? "ml-1" : "mr-1"
                            )}
                          />
                          <span className="text-green-600">
                            {t("step1.standardTimelineLabel")}
                          </span>
                          <span
                            className={cn(
                              "text-gray-500",
                              isRTL ? "mr-1" : "ml-1"
                            )}
                          >
                            {t("step1.standardCost")}
                          </span>
                        </span>
                        <span className="flex items-center">
                          <Clock
                            className={cn(
                              "h-4 w-4 text-amber-500",
                              isRTL ? "ml-1" : "mr-1"
                            )}
                          />
                          <span className="text-amber-600">
                            {t("step1.expedited")}
                          </span>
                          <span
                            className={cn(
                              "text-gray-500",
                              isRTL ? "mr-1" : "ml-1"
                            )}
                          >
                            {t("step1.expeditedCost", {
                              multiplier: urgencyMultiplier.toFixed(1),
                            })}
                          </span>
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className={cn(
                      "flex",
                      isRTL ? "justify-start" : "justify-end"
                    )}
                  >
                    <Button
                      onClick={handleNextStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {t("navigation.continueToFeatures")}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4",
                          isRTL ? "mr-2 rotate-180" : "ml-2"
                        )}
                      />
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
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6 flex items-center"
                  >
                    <Code
                      className={cn(
                        "h-6 w-6 text-primary",
                        isRTL ? "ml-2" : "mr-2"
                      )}
                    />
                    {t("step2.title")}
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step2.selectFeaturesTitle")}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {t("step2.selectFeaturesDescription", {
                        projectType: PROJECT_TYPES.find(
                          (type) => type.id === projectType
                        )?.name.toLowerCase(),
                      })}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getApplicableFeatures().map((feature) => (
                        <div
                          key={feature.id}
                          className={cn(
                            "border rounded-xl p-4 cursor-pointer transition-all",
                            selectedFeatures.includes(feature.id)
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-gray-200 hover:border-primary/50 hover:shadow-sm"
                          )}
                          onClick={() => handleFeatureToggle(feature.id)}
                        >
                          <div className="flex items-start">
                            <Checkbox
                              id={`feature-${feature.id}`}
                              checked={selectedFeatures.includes(feature.id)}
                              className={cn("mt-1", isRTL ? "ml-3" : "mr-3")}
                            />
                            <div>
                              <label
                                htmlFor={`feature-${feature.id}`}
                                className="font-medium cursor-pointer"
                              >
                                {feature.name}
                              </label>
                              <p className="text-sm text-gray-500 mt-1">
                                {feature.description}
                              </p>
                              <div className="flex items-center mt-2 text-xs text-gray-500">
                                <span className="flex items-center mr-3">
                                  <DollarSign className="h-3 w-3 mr-1 text-primary" />
                                  {formatCurrency(feature.additionalPrice)}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1 text-amber-500" />
                                  {feature.additionalTimeWeeks}{" "}
                                  {t("step2.weeks", {
                                    count: feature.additionalTimeWeeks,
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step2.maintenancePlanTitle")}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {t("step2.maintenancePlanDescription")}
                    </p>

                    <RadioGroup
                      value={maintenancePlan}
                      onValueChange={setMaintenancePlan}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      {MAINTENANCE_PLANS.map((plan) => (
                        <div key={plan.id} className="relative">
                          <RadioGroupItem
                            value={plan.id}
                            id={`plan-${plan.id}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`plan-${plan.id}`}
                            className={cn(
                              "flex flex-col h-full justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              maintenancePlan === plan.id &&
                                "border-primary bg-primary/5"
                            )}
                          >
                            <div className="mb-2">
                              <span className="text-lg font-medium">
                                {plan.name}
                              </span>
                              <p className="text-sm text-primary font-bold mt-1">
                                {formatCurrency(plan.monthlyPrice)}/
                                {t("common.month")}
                              </p>
                            </div>
                            <ul className="text-xs text-gray-500 space-y-1 mt-2">
                              {plan.features.en.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <CheckCircle
                                    className={cn(
                                      "h-3 w-3 text-green-500 mt-0.5 flex-shrink-0",
                                      isRTL ? "ml-1" : "mr-1"
                                    )}
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex justify-between"
                  >
                    <Button onClick={handlePrevStep} variant="outline">
                      {isRTL && (
                        <ChevronRight className="ml-2 h-4 w-4 rotate-180" />
                      )}
                      {t("navigation.back")}
                      {!isRTL && (
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                      )}
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {t("navigation.continueToBusinessInfo")}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4",
                          isRTL ? "mr-2 rotate-180" : "ml-2"
                        )}
                      />
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
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6 flex items-center"
                  >
                    <Users
                      className={cn(
                        "h-6 w-6 text-primary",
                        isRTL ? "ml-2" : "mr-2"
                      )}
                    />
                    {t("step3.title")}
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step3.companySizeTitle")}
                    </h3>
                    <p className="text-gray-500 mb-6">
                      {t("step3.companySizeDescription")}
                    </p>

                    <RadioGroup
                      value={teamSize}
                      onValueChange={setTeamSize}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {TEAM_SIZE_MULTIPLIERS.map((size) => (
                        <div key={size.id} className="relative">
                          <RadioGroupItem
                            value={size.id}
                            id={`size-${size.id}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`size-${size.id}`}
                            className={cn(
                              "flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                              teamSize === size.id &&
                                "border-primary bg-primary/5"
                            )}
                          >
                            <div className="mb-2 text-center">
                              <span className="text-lg font-medium">
                                {size.name}
                              </span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step3.companyInfoTitle")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t("step3.companyName")}
                        </Label>
                        <Input
                          id="company"
                          placeholder={t("step3.companyNamePlaceholder")}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">{t("step3.industry")}</Label>
                        <select
                          id="industry"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">{t("step3.selectIndustry")}</option>
                          <option value="retail">
                            {t("industries.retail")}
                          </option>
                          <option value="healthcare">
                            {t("industries.healthcare")}
                          </option>
                          <option value="finance">
                            {t("industries.finance")}
                          </option>
                          <option value="education">
                            {t("industries.education")}
                          </option>
                          <option value="manufacturing">
                            {t("industries.manufacturing")}
                          </option>
                          <option value="technology">
                            {t("industries.technology")}
                          </option>
                          <option value="hospitality">
                            {t("industries.hospitality")}
                          </option>
                          <option value="real-estate">
                            {t("industries.realEstate")}
                          </option>
                          <option value="government">
                            {t("industries.government")}
                          </option>
                          <option value="other">{t("industries.other")}</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex justify-between"
                  >
                    <Button onClick={handlePrevStep} variant="outline">
                      {isRTL && (
                        <ChevronRight className="ml-2 h-4 w-4 rotate-180" />
                      )}
                      {t("navigation.back")}
                      {!isRTL && (
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                      )}
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {t("navigation.continueToContact")}
                      <ChevronRight
                        className={cn(
                          "h-4 w-4",
                          isRTL ? "mr-2 rotate-180" : "ml-2"
                        )}
                      />
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
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl font-bold mb-6 flex items-center"
                  >
                    <Users
                      className={cn(
                        "h-6 w-6 text-primary",
                        isRTL ? "ml-2" : "mr-2"
                      )}
                    />
                    {t("step4.title")}
                  </motion.h2>

                  <motion.div variants={itemVariants} className="mb-8">
                    <h3 className="text-lg font-medium mb-4">
                      {t("step4.yourDetailsTitle")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("step4.fullName")}</Label>
                        <Input
                          id="name"
                          placeholder={t("step4.fullNamePlaceholder")}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("step4.email")}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("step4.emailPlaceholder")}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("step4.phone")}</Label>
                        <Input
                          id="phone"
                          placeholder={t("step4.phonePlaceholder")}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">{t("step4.position")}</Label>
                        <Input
                          id="position"
                          placeholder={t("step4.positionPlaceholder")}
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("step4.additionalInfo")}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={t("step4.additionalInfoPlaceholder")}
                        className="min-h-[120px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex justify-between"
                  >
                    <Button onClick={handlePrevStep} variant="outline">
                      {isRTL && (
                        <ChevronRight className="ml-2 h-4 w-4 rotate-180" />
                      )}
                      {t("navigation.back")}
                      {!isRTL && (
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                      )}
                    </Button>
                    <Button
                      onClick={handleNextStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {t("navigation.getEstimate")}
                      <Calculator
                        className={cn("h-4 w-4", isRTL ? "mr-2" : "ml-2")}
                      />
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
                  <h2 className="text-2xl font-bold mb-4">
                    {t("results.calculating")}
                  </h2>
                  <p className="text-gray-500">{t("results.pleaseWait")}</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {t("results.title")}
                    </h2>
                    <p className="opacity-90">{t("results.subtitle")}</p>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <DollarSign
                            className={cn(
                              "h-5 w-5 text-primary",
                              isRTL ? "ml-2" : "mr-2"
                            )}
                          />
                          {t("results.estimatedCost")}
                        </h3>
                        <div className="text-4xl font-bold text-primary mb-2">
                          {formatCurrency(estimatedPrice)}
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          {t("results.oneTimeCost")}
                        </p>

                        {maintenancePlan && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">
                                {t("results.monthlyMaintenance")}:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(
                                  getMaintenancePlanDetails()?.monthlyPrice || 0
                                )}
                                /{t("common.month")}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <Clock
                            className={cn(
                              "h-5 w-5 text-primary",
                              isRTL ? "ml-2" : "mr-2"
                            )}
                          />
                          {t("results.estimatedTimeline")}
                        </h3>
                        <div className="text-4xl font-bold text-primary mb-2">
                          {estimatedTimeWeeks}{" "}
                          {t("results.weeks", { count: estimatedTimeWeeks })}
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                          {t("results.fromKickoffToLaunch")}
                        </p>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              {t("results.approximateLaunchDate")}:
                            </span>
                            <span className="font-medium">
                              {new Date(
                                Date.now() +
                                  estimatedTimeWeeks * 7 * 24 * 60 * 60 * 1000
                              ).toLocaleDateString(
                                locale === "ar"
                                  ? "ar-SA"
                                  : locale === "bn"
                                  ? "bn-BD"
                                  : "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">
                        {t("results.projectSummary")}
                      </h3>
                      <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              {t("results.projectType")}
                            </h4>
                            <div className="flex items-center">
                              <div
                                className={cn(
                                  "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center",
                                  isRTL ? "ml-2" : "mr-2"
                                )}
                              >
                                {
                                  PROJECT_TYPES.find(
                                    (t) => t.id === projectType
                                  )?.icon
                                }
                              </div>
                              <span>
                                {
                                  PROJECT_TYPES.find(
                                    (t) => t.id === projectType
                                  )?.name
                                }
                              </span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              {t("results.complexity")}
                            </h4>
                            <Badge
                              variant="outline"
                              className="bg-primary/5 text-primary border-primary/20"
                            >
                              {
                                COMPLEXITY_LEVELS.find(
                                  (c) => c.id === complexity
                                )?.name
                              }
                            </Badge>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              {t("results.selectedFeatures")}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedFeatures.length > 0 ? (
                                selectedFeatures.map((featureId) => (
                                  <Badge
                                    key={featureId}
                                    variant="outline"
                                    className="bg-gray-100"
                                  >
                                    {
                                      FEATURES.find((f) => f.id === featureId)
                                        ?.name
                                    }
                                  </Badge>
                                ))
                              ) : (
                                <span className="text-sm text-gray-500">
                                  {t("results.noFeaturesSelected")}
                                </span>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              {t("results.maintenancePlan")}
                            </h4>
                            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                              {getMaintenancePlanDetails()?.name}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-4">
                        {t("results.nextSteps")}
                      </h3>
                      <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                        <p className="text-gray-600 mb-4">
                          {t("results.nextStepsDescription")}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Button
                            onClick={handleSubmit}
                            className="bg-primary hover:bg-primary/90"
                          >
                            <Calendar
                              className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")}
                            />
                            {t("results.scheduleConsultation")}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/5"
                          >
                            <Download
                              className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")}
                            />
                            {t("results.downloadEstimate")}
                          </Button>
                          <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/5"
                          >
                            <Share2
                              className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")}
                            />
                            {t("results.shareEstimate")}
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-4">
                        {t("results.needChanges")}
                      </p>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setShowResults(false);
                          setCurrentStep(1);
                        }}
                      >
                        {t("results.startOver")}
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
            <h2 className="text-3xl font-bold mb-4">{t("faq.title")}</h2>
            <p className="text-gray-600">{t("faq.description")}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="estimator" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="estimator">
                  {t("faq.tabs.estimator")}
                </TabsTrigger>
                <TabsTrigger value="process">
                  {t("faq.tabs.process")}
                </TabsTrigger>
                <TabsTrigger value="pricing">
                  {t("faq.tabs.pricing")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="estimator" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.estimator.q1")}
                    </h3>
                    <p className="text-gray-600">{t("faq.estimator.a1")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.estimator.q2")}
                    </h3>
                    <p className="text-gray-600">{t("faq.estimator.a2")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.estimator.q3")}
                    </h3>
                    <p className="text-gray-600">{t("faq.estimator.a3")}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="process" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.process.q1")}
                    </h3>
                    <p className="text-gray-600">{t("faq.process.a1")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.process.q2")}
                    </h3>
                    <p className="text-gray-600">{t("faq.process.a2")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.process.q3")}
                    </h3>
                    <p className="text-gray-600">{t("faq.process.a3")}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.pricing.q1")}
                    </h3>
                    <p className="text-gray-600">{t("faq.pricing.a1")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.pricing.q2")}
                    </h3>
                    <p className="text-gray-600">{t("faq.pricing.a2")}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2">
                      {t("faq.pricing.q3")}
                    </h3>
                    <p className="text-gray-600">{t("faq.pricing.a3")}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              {t("cta.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="bg-white text-primary hover:bg-gray-100"
                size="lg"
                asChild
              >
                <Link href={`/${locale}/schedule-consultation`}>
                  <Calendar
                    className={cn("h-5 w-5", isRTL ? "ml-2" : "mr-2")}
                  />
                  {t("cta.scheduleConsultation")}
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
                asChild
              >
                <Link href={`/${locale}/contact`}>
                  <Send className={cn("h-5 w-5", isRTL ? "ml-2" : "mr-2")} />
                  {t("cta.contactUs")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
