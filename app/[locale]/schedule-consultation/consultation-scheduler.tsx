"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowRight, CalendarIcon, Check, Clock, Loader2 } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define the form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(9, {
    message: "Please enter a valid phone number.",
  }),
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  companySize: z.string({
    required_error: "Please select your company size.",
  }),
  industry: z.string({
    required_error: "Please select your industry.",
  }),
  serviceInterest: z.string({
    required_error: "Please select a service you're interested in.",
  }),
  consultationDate: z.date({
    required_error: "Please select a date for your consultation.",
  }),
  consultationTime: z.string({
    required_error: "Please select a time for your consultation.",
  }),
  consultationType: z.enum(["virtual", "inPerson"], {
    required_error: "Please select a consultation type.",
  }),
  projectDescription: z
    .string()
    .min(10, {
      message: "Project description must be at least 10 characters.",
    })
    .max(500, {
      message: "Project description must not exceed 500 characters.",
    }),
  hearAboutUs: z.string().optional(),
});
// Available time slots
const timeSlots = {
  en: [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ],
  ar: [
    "٠٩:٠٠ ص",
    "٠٩:٣٠ ص",
    "١٠:٠٠ ص",
    "١٠:٣٠ ص",
    "١١:٠٠ ص",
    "١١:٣٠ ص",
    "١٢:٠٠ م",
    "١٢:٣٠ م",
    "٠١:٠٠ م",
    "٠١:٣٠ م",
    "٠٢:٠٠ م",
    "٠٢:٣٠ م",
    "٠٣:٠٠ م",
    "٠٣:٣٠ م",
    "٠٤:٠٠ م",
    "٠٤:٣٠ م",
  ],
  bn: [
    "০৯:০০ সকাল",
    "০৯:৩০ সকাল",
    "১০:০০ সকাল",
    "১০:৩০ সকাল",
    "১১:০০ সকাল",
    "১১:৩০ সকাল",
    "১২:০০ দুপুর",
    "১২:৩০ দুপুর",
    "০১:০০ দুপুর",
    "০১:৩০ দুপুর",
    "০২:০০ দুপুর",
    "০২:৩০ দুপুর",
    "০৩:০০ বিকেল",
    "০৩:৩০ বিকেল",
    "০৪:০০ বিকেল",
    "০৪:৩০ বিকেল",
  ],
};

// Industry options
const industries = {
  en: [
    "Retail & E-commerce",
    "Corporate & Enterprise",
    "Small & Medium Business",
    "Education",
    "Healthcare",
    "Manufacturing",
    "Real Estate",
    "Travel & Hospitality",
    "Financial Services",
    "Government",
    "Technology",
    "Other",
  ],
  ar: [
    "البيع بالتجزئة والتجارة الإلكترونية",
    "الشركات والمؤسسات",
    "الأعمال الصغيرة والمتوسطة",
    "التعليم",
    "الرعاية الصحية",
    "التصنيع",
    "العقارات",
    "السفر والضيافة",
    "الخدمات المالية",
    "الحكومة",
    "التكنولوجيا",
    "أخرى",
  ],
  bn: [
    "খুচরা ও ই-কমার্স",
    "কর্পোরেট ও এন্টারপ্রাইজ",
    "ক্ষুদ্র ও মাঝারি ব্যবসা",
    "শিক্ষা",
    "স্বাস্থ্যসেবা",
    "উৎপাদন",
    "রিয়েল এস্টেট",
    "ভ্রমণ ও আতিথেয়তা",
    "আর্থিক সেবা",
    "সরকারি সংস্থা",
    "প্রযুক্তি",
    "অন্যান্য",
  ],
};

// Service options
const services = {
  en: [
    "Digital Transformation",
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Digital Marketing",
    "IT Consulting",
    "Cybersecurity",
    "Business Intelligence",
    "Other",
  ],
  ar: [
    "التحول الرقمي",
    "تطوير الويب",
    "تطوير تطبيقات الهواتف المحمولة",
    "حلول التجارة الإلكترونية",
    "تصميم واجهات المستخدم وتجربة المستخدم (UI/UX)",
    "حلول السحابة",
    "الذكاء الاصطناعي والتعلم الآلي",
    "التسويق الرقمي",
    "استشارات تقنية المعلومات",
    "الأمن السيبراني",
    "ذكاء الأعمال",
    "أخرى",
  ],
  bn: [
    "ডিজিটাল রূপান্তর",
    "ওয়েব ডেভেলপমেন্ট",
    "মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট",
    "ই-কমার্স সমাধান",
    "UI/UX ডিজাইন",
    "ক্লাউড সমাধান",
    "এআই এবং মেশিন লার্নিং",
    "ডিজিটাল মার্কেটিং",
    "আইটি পরামর্শ",
    "সাইবার সিকিউরিটি",
    "ব্যবসায়িক বুদ্ধিমত্তা",
    "অন্যান্য",
  ],
};

export default function ConsultationScheduler() {
  const t = useTranslations("scheduleConsultation");
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      projectDescription: "",
      hearAboutUs: "",
      consultationType: "virtual",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log(values);
    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha("consultation_form");
      }

      // Send data to API
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "consultation",
          data: {
            name: values.fullName,
            email: values.email,
            phone: values.phone,
            companyName: values.companyName,
            companySize: values.companySize,
            industry: values.industry,
            serviceInterest: values.serviceInterest,
            consultationDate: values.consultationDate,
            consultationTime: values.consultationTime,
            consultationType: values.consultationType,
            projectDescription: values.projectDescription,
            hearAboutUs: values.hearAboutUs,
            recaptchaToken,
          },
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);

        // Redirect to thank you page or show success message
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        console.error("Error submitting form:", result.error);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  }

  // Next step handler
  const handleNextStep = async () => {
    console.log(step);
    if (step === 1) {
      const isValid = await form.trigger([
        "fullName",
        "email",
        "phone",
        "companyName",
        "companySize",
        "industry",
      ]);
      if (isValid) setStep(2);
    } else if (step === 2) {
      const isValid = await form.trigger([
        "serviceInterest",
        "consultationDate",
        "consultationTime",
        "consultationType",
      ]);
      if (isValid) setStep(3);
    }
  };

  // Previous step handler
  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const successSteps = {
    en: [
      "You'll receive a calendar invitation for your scheduled consultation",
      "Our consultant will prepare for your meeting based on the information provided",
      "We'll send you a reminder 24 hours before your scheduled time",
      "During the consultation, we'll discuss your needs and recommend tailored solutions",
    ],
    ar: [
      "سوف تتلقى دعوة تقويم لموعد الاستشارة المجدول",
      "سيقوم مستشارنا بالتحضير لاجتماعك بناءً على المعلومات المقدمة",
      "سوف نرسل إليك تذكيرًا قبل 24 ساعة من الموعد المحدد",
      "خلال الاستشارة، سنناقش احتياجاتك ونوصي بحلول مخصصة",
    ],
    bn: [
      "আপনি আপনার নির্ধারিত পরামর্শ সেশনের জন্য একটি ক্যালেন্ডার আমন্ত্রণ পাবেন",
      "আপনার প্রদত্ত তথ্যের ভিত্তিতে আমাদের পরামর্শক সেশনের জন্য প্রস্তুতি নেবেন",
      "নির্ধারিত সময়ের ২৪ ঘণ্টা আগে আমরা আপনাকে একটি স্মরণ করিয়ে দেব",
      "পরামর্শ সেশনে আমরা আপনার প্রয়োজনগুলো আলোচনা করব এবং উপযুক্ত সমাধানের পরামর্শ দেব",
    ],
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("success.title")}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{t("success.message")}</p>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">
                {t("success.nextSteps")}
              </h2>
              <ul className="space-y-4">
                {successSteps[locale as keyof typeof successSteps].map(
                  (step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-sm font-medium text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <Button
              onClick={() => router.push("/")}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              {t("success.returnHome")}
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-10 bg-primary/30"></div>
            <span className="mx-4 text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
              CONSULTATION
            </span>
            <div className="h-px w-10 bg-primary/30"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all duration-200",
                    step === i
                      ? "bg-primary text-white"
                      : step > i
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  {step > i ? <Check className="h-5 w-5" /> : i}
                </div>
                {i < 3 && (
                  <div
                    className={cn(
                      "h-1 w-20 mx-2",
                      step > i ? "bg-primary" : "bg-gray-200"
                    )}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <div className="text-sm text-gray-500 grid grid-cols-3 w-full max-w-md">
              <span className="text-center">{t("steps.step1")}</span>
              <span className="text-center">{t("steps.step2")}</span>
              <span className="text-center">{t("steps.step3")}</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <motion.div
          key={`step-${step}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border border-gray-100 shadow-md">
            <CardHeader>
              <CardTitle>
                {step === 1 && t("form.section1Title")}
                {step === 2 && t("form.section2Title")}
                {step === 3 && t("form.section3Title")}
              </CardTitle>
              <CardDescription>
                {step === 1 && t("form.step1Description")}
                {step === 2 && t("form.step2Description")}
                {step === 3 && t("form.step3Description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.fullName")}</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage>
                                {form.formState.errors.fullName?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.email")}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage>
                                {form.formState.errors.email?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.phone")}</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+966 50 123 4567"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage>
                                {form.formState.errors.phone?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.companyName")}</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Inc." {...field} />
                              </FormControl>
                              <FormMessage>
                                {form.formState.errors.companyName?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.companySize")}</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t("form.selectCompanySize")}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">
                                    1-10 {t("form.employees")}
                                  </SelectItem>
                                  <SelectItem value="11-50">
                                    11-50 {t("form.employees")}
                                  </SelectItem>
                                  <SelectItem value="51-200">
                                    51-200 {t("form.employees")}
                                  </SelectItem>
                                  <SelectItem value="201-500">
                                    201-500 {t("form.employees")}
                                  </SelectItem>
                                  <SelectItem value="501+">
                                    501+ {t("form.employees")}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage>
                                {form.formState.errors.companySize?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>{t("form.industry")}</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t("form.selectIndustry")}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {industries[
                                    locale as keyof typeof industries
                                  ].map((industry) => (
                                    <SelectItem
                                      key={industry}
                                      value={industry
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}
                                    >
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage>
                                {form.formState.errors.industry?.message}
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Consultation Details */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="serviceInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.serviceInterest")}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={t("form.selectService")}
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services[locale as keyof typeof services].map(
                                  (service) => (
                                    <SelectItem
                                      key={service}
                                      value={service
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}
                                    >
                                      {service}
                                    </SelectItem>
                                  )
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage>
                              {form.formState.errors.serviceInterest?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consultationDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>{t("form.consultationDate")}</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>{t("form.selectDate")}</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0 z-50"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) => {
                                    return (
                                      date <
                                        new Date(
                                          new Date().setHours(0, 0, 0, 0)
                                        ) ||
                                      date.getDay() === 0 || // Sunday
                                      date.getDay() === 6
                                    ); // Saturday
                                  }}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage>
                              {form.formState.errors.consultationDate?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="consultationTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t("form.consultationTime")}
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t("form.selectTime")}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots[
                                    locale as keyof typeof timeSlots
                                  ].map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage>
                                {
                                  form.formState.errors.consultationTime
                                    ?.message
                                }
                              </FormMessage>
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>{t("form.consultationType")}</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="virtual"
                                    id="virtual"
                                  />
                                  <Label htmlFor="virtual">
                                    {t("form.virtualMeeting")}
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="inPerson"
                                    id="inPerson"
                                  />
                                  <Label htmlFor="inPerson">
                                    {t("form.inPersonMeeting")}
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage>
                              {form.formState.errors.consultationType?.message}
                            </FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                  )}

                  {/* Step 3: Project Details */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              {t("form.projectDescription")}
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t(
                                  "form.projectDescriptionPlaceholder"
                                )}
                                className="resize-none min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              {t("form.projectDescriptionHelp")}
                            </FormDescription>
                            <FormMessage>
                              {
                                form.formState.errors.projectDescription
                                  ?.message
                              }
                            </FormMessage>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="hearAboutUs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("form.hearAboutUs")}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue
                                    placeholder={t("form.selectHearAboutUs")}
                                  />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="search">
                                  {t("form.hearAboutUsOptions.search")}
                                </SelectItem>
                                <SelectItem value="social">
                                  {t("form.hearAboutUsOptions.social")}
                                </SelectItem>
                                <SelectItem value="referral">
                                  {t("form.hearAboutUsOptions.referral")}
                                </SelectItem>
                                <SelectItem value="event">
                                  {t("form.hearAboutUsOptions.event")}
                                </SelectItem>
                                <SelectItem value="advertisement">
                                  {t("form.hearAboutUsOptions.advertisement")}
                                </SelectItem>
                                <SelectItem value="other">
                                  {t("form.hearAboutUsOptions.other")}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <h3 className="text-sm font-medium text-blue-800 flex items-center">
                            <div className="bg-blue-100 p-1 rounded-full mr-2">
                              <Clock className="h-4 w-4 text-blue-600" />
                            </div>
                            {t("form.whatToExpect.title")}
                          </h3>
                          <p className="text-sm text-blue-700 mt-1">
                            {t("form.whatToExpect.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <CardFooter className="flex justify-between border-t border-gray-100 pt-6">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handlePrevStep}
                      >
                        {t("buttons.back")}
                      </Button>
                    ) : (
                      <div></div>
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        {t("buttons.continue")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        onClick={form.handleSubmit(onSubmit)}
                        className="bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t("buttons.submitting")}
                          </>
                        ) : (
                          <>{t("buttons.submit")}</>
                        )}
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {t
            .raw("benefits")
            .map(
              (
                benefit: { title: string; description: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
        </motion.div>
      </div>
    </div>
  );
}
