"use client";

import OptimizedImage from "@/components/optimized-image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Users
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

export default function EMSProductSection() {
  const t = useTranslations("ems");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: t("features.attendance"),
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: t("features.timesheet"),
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: t("features.documents"),
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      title: t("features.payroll"),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-[-12deg] translate-x-1/2 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <LayoutDashboard className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
              {t("sectionLabel")}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-saudi-black leading-tight">
              {t("title")}
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {t("description")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 rtl:space-x-reverse"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-saudi-black">
                      {feature.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">
                {t("cta")}
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glassmorphism background for image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-2xl -z-10 rounded-[2rem]" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
              <OptimizedImage
                src="/images/ems-mockup.png"
                alt="EMS Dashboard Mockup"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Floating UI Elements for depth */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 hidden md:block"
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">120+ Active Workers</p>
                    <p className="text-[10px] text-gray-500">Attendance Tracked</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-50 hidden md:block"
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Payroll Prepared</p>
                    <p className="text-[10px] text-gray-500">Zero errors detected</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
