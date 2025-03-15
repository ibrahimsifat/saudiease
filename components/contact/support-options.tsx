"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText,
  HelpCircle,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

export default function SupportOptions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Get translations
  const t = useTranslations("contact.support");

  const supportOptions = [
    {
      title: t("liveChat.title"),
      description: t("liveChat.description"),
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      action: t("liveChat.action"),
      url: "#chat",
    },
    {
      title: t("phone.title"),
      description: t("phone.description"),
      icon: <Phone className="h-6 w-6 text-primary" />,
      action: t("phone.action"),
      url: "tel:+966558845503",
    },
    {
      title: t("ticket.title"),
      description: t("ticket.description"),
      icon: <FileText className="h-6 w-6 text-primary" />,
      action: t("ticket.action"),
      url: "#ticket",
    },
    {
      title: t("video.title"),
      description: t("video.description"),
      icon: <Video className="h-6 w-6 text-primary" />,
      action: t("video.action"),
      url: "#consultation",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            {t("badge") || "Customer Support"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-saudi-black mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6">{option.description}</p>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href={option.url}>{option.action}</a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/4 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div className="md:w-3/4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-saudi-black mb-2">
              {t("specialized.title")}
            </h3>
            <p className="text-gray-600 mb-4">{t("specialized.description")}</p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              {t("specialized.action")}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
