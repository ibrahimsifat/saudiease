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
const timeSlots = [
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
];

// Industry options
const industries = [
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
];

// Service options
const services = [
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
];

export default function ConsultationScheduler() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
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
              Consultation Scheduled Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for scheduling a consultation with Saudi Ease. We've
              sent a confirmation email with all the details. Our team will
              contact you shortly to confirm your appointment.
            </p>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
              <ul className="space-y-4">
                {[
                  "You'll receive a calendar invitation for your scheduled consultation",
                  "Our consultant will prepare for your meeting based on the information provided",
                  "We'll send you a reminder 24 hours before your scheduled time",
                  "During the consultation, we'll discuss your needs and recommend tailored solutions",
                ].map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-medium text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => router.push("/")}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Return to Homepage
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
            Schedule a Personalized Consultation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book a one-on-one session with our digital transformation experts to
            discuss your business needs and explore tailored solutions.
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
              <span className="text-center">Your Information</span>
              <span className="text-center">Consultation Details</span>
              <span className="text-center">Project Information</span>
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
                {step === 1 && "Tell us about yourself"}
                {step === 2 && "Schedule your consultation"}
                {step === 3 && "Share your project details"}
              </CardTitle>
              <CardDescription>
                {step === 1 &&
                  "Please provide your contact and company information"}
                {step === 2 &&
                  "Select your preferred date, time and consultation type"}
                {step === 3 && "Help us understand your project requirements"}
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
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+966 50 123 4567"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Acme Inc." {...field} />
                              </FormControl>
                              <FormMessage />
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
                              <FormLabel>Company Size</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1-10">
                                    1-10 employees
                                  </SelectItem>
                                  <SelectItem value="11-50">
                                    11-50 employees
                                  </SelectItem>
                                  <SelectItem value="51-200">
                                    51-200 employees
                                  </SelectItem>
                                  <SelectItem value="201-500">
                                    201-500 employees
                                  </SelectItem>
                                  <SelectItem value="501+">
                                    501+ employees
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your industry" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {industries.map((industry) => (
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
                              <FormMessage />
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
                            <FormLabel>Service of Interest</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem
                                    key={service}
                                    value={service
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}
                                  >
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consultationDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Consultation Date</FormLabel>
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
                                      <span>Pick a date</span>
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
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="consultationTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Consultation Time</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a time" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Consultation Type</FormLabel>
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
                                    Virtual Meeting (Zoom/Teams)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="inPerson"
                                    id="inPerson"
                                  />
                                  <Label htmlFor="inPerson">
                                    In-Person Meeting (Riyadh Office)
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
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
                            <FormLabel>Project Description</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project, goals, and any specific requirements..."
                                className="resize-none min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This helps us prepare for your consultation and
                              provide relevant solutions.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="hearAboutUs"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>How did you hear about us?</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="search">
                                  Search Engine (Google, Bing, etc.)
                                </SelectItem>
                                <SelectItem value="social">
                                  Social Media
                                </SelectItem>
                                <SelectItem value="referral">
                                  Referral from a Friend/Colleague
                                </SelectItem>
                                <SelectItem value="event">
                                  Event or Conference
                                </SelectItem>
                                <SelectItem value="advertisement">
                                  Advertisement
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
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
                            What to expect
                          </h3>
                          <p className="text-sm text-blue-700 mt-1">
                            Your consultation will last approximately 45
                            minutes. Our expert will discuss your business
                            needs, answer your questions, and recommend tailored
                            solutions for your specific challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-100 pt-6">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevStep}
                >
                  Back
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
                  Continue
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
                      Submitting...
                    </>
                  ) : (
                    <>Schedule Consultation</>
                  )}
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Expert Consultation",
              description:
                "Our consultants have deep industry knowledge and technical expertise to guide your digital journey.",
              icon: (
                <div className="p-2 bg-primary/10 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              ),
            },
            {
              title: "Tailored Solutions",
              description:
                "We provide customized recommendations based on your specific business needs and goals.",
              icon: (
                <div className="p-2 bg-primary/10 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              ),
            },
            {
              title: "No Obligation",
              description:
                "The consultation is completely free with no obligation to purchase any services.",
              icon: (
                <div className="p-2 bg-primary/10 rounded-full">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex items-start">
                {item.icon}
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
