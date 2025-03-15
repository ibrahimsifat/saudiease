"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
export default function ContactForm() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get translations
  const t = useTranslations("contact.form");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeframe: "",
    message: "",
    hearAbout: "google",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate Saudi phone number
    if (name === "phone") {
      const saudiPhoneRegex = /^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
      if (value && !saudiPhoneRegex.test(value)) {
        setPhoneError(t("phoneError"));
      } else {
        setPhoneError("");
      }
    }

    // Validate email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setEmailError(t("emailError"));
      } else {
        setEmailError("");
      }
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, hearAbout: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const saudiPhoneRegex = /^(05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError(t("emailError"));
      return;
    }

    if (formData.phone && !saudiPhoneRegex.test(formData.phone)) {
      setPhoneError(t("phoneError"));
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);

      // Simulate successful submission (90% of the time)
      if (Math.random() > 0.1) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          timeframe: "",
          message: "",
          hearAbout: "google",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        // Simulate error
        setSubmitError(true);
      }
    }, 1500);
  };

  const services = [
    "Website Development",
    "E-Commerce Solutions",
    "Mobile App Development",
    "E-Invoicing Systems",
    "Graphic Design & Branding",
    "Digital Marketing",
    "Other",
  ];

  const budgetRanges = [
    "SAR 5,000 - 10,000",
    "SAR 10,000 - 25,000",
    "SAR 25,000 - 50,000",
    "SAR 50,000+",
  ];

  const timeframes = [
    "Immediately",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Not sure yet",
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 mb-16"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-saudi-black mb-2">
          {t("title")}
        </h2>
        <p className="text-gray-600">{t("description")}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t("fullName")} <span className="text-primary">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("fullName")}
              className="border-gray-200 focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              {t("email")} <span className="text-primary">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={`border-gray-200 focus:border-primary ${
                  emailError ? "border-red-500" : ""
                }`}
                required
              />
              {emailError && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {emailError && (
              <p className="text-red-500 text-xs mt-1">{emailError}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">
              {t("phone")}
            </Label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="05xxxxxxxx"
                className={`border-gray-200 focus:border-primary ${
                  phoneError ? "border-red-500" : ""
                }`}
              />
              {phoneError && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
              )}
            </div>
            {phoneError && (
              <p className="text-red-500 text-xs mt-1">{phoneError}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium">
              {t("company")}
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("company")}
              className="border-gray-200 focus:border-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium">
              {t("service")} <span className="text-primary">*</span>
            </Label>
            <Select
              required
              onValueChange={(value) => handleSelectChange("service", value)}
              value={formData.service}
            >
              <SelectTrigger className="border-gray-200 focus:border-primary">
                <SelectValue placeholder={t("service")} />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">{t("budget")}</Label>
            <Select
              onValueChange={(value) => handleSelectChange("budget", value)}
              value={formData.budget}
            >
              <SelectTrigger className="border-gray-200 focus:border-primary">
                <SelectValue placeholder={t("budget")} />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">{t("timeframe")}</Label>
            <Select
              onValueChange={(value) => handleSelectChange("timeframe", value)}
              value={formData.timeframe}
            >
              <SelectTrigger className="border-gray-200 focus:border-primary">
                <SelectValue placeholder={t("timeframe")} />
              </SelectTrigger>
              <SelectContent>
                {timeframes.map((timeframe) => (
                  <SelectItem key={timeframe} value={timeframe}>
                    {timeframe}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            {t("details")} <span className="text-primary">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("details")}
            rows={5}
            className="border-gray-200 focus:border-primary resize-none"
            required
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">{t("hearAbout")}</Label>
          <RadioGroup
            value={formData.hearAbout}
            onValueChange={handleRadioChange}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="google" id="google" />
                <Label htmlFor="google" className="text-sm">
                  {t("google")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="social" id="social" />
                <Label htmlFor="social" className="text-sm">
                  {t("social")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="referral" id="referral" />
                <Label htmlFor="referral" className="text-sm">
                  {t("referral")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="text-sm">
                  {t("other")}
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t("processing")}
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                {t("submit")}
              </span>
            )}
          </Button>
        </div>

        {submitSuccess && (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md flex items-start animate-fade-in">
            <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">{t("success")}</p>
              <p className="text-sm">{t("successDetail")}</p>
            </div>
          </div>
        )}

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md flex items-start animate-fade-in">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">{t("error")}</p>
              <p className="text-sm">{t("errorDetail")}</p>
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
}
