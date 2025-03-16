"use client";

import PreFooterCTA from "@/components/pre-footer-cta";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Database,
  Globe,
  Layers,
  Layout,
  Palette,
  Server,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TechStackPage({ locale }: { locale: string }) {
  const t = useTranslations("techStack");
  const isRTL = locale === "ar" || locale === "bn";
  const [activeTab, setActiveTab] = useState("frontend");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const techCategories = [
    {
      id: "frontend",
      icon: <Layout className="h-5 w-5" />,
      label: t("categories.frontend"),
    },
    {
      id: "backend",
      icon: <Server className="h-5 w-5" />,
      label: t("categories.backend"),
    },
    {
      id: "database",
      icon: <Database className="h-5 w-5" />,
      label: t("categories.database"),
    },
    {
      id: "mobile",
      icon: <Smartphone className="h-5 w-5" />,
      label: t("categories.mobile"),
    },
    {
      id: "design",
      icon: <Palette className="h-5 w-5" />,
      label: t("categories.design"),
    },
    {
      id: "devops",
      icon: <Cloud className="h-5 w-5" />,
      label: t("categories.devops"),
    },
  ];

  const techStacks = {
    frontend: [
      { name: "React", icon: <Code />, description: t("technologies.react") },
      { name: "Next.js", icon: <Zap />, description: t("technologies.nextjs") },
      {
        name: "TypeScript",
        icon: <Code />,
        description: t("technologies.typescript"),
      },
      {
        name: "Tailwind CSS",
        icon: <Palette />,
        description: t("technologies.tailwind"),
      },
      {
        name: "Framer Motion",
        icon: <Layers />,
        description: t("technologies.framer"),
      },
      { name: "Redux", icon: <Layers />, description: t("technologies.redux") },
    ],
    backend: [
      {
        name: "Node.js",
        icon: <Server />,
        description: t("technologies.nodejs"),
      },
      {
        name: "Express",
        icon: <Server />,
        description: t("technologies.express"),
      },
      {
        name: "NestJS",
        icon: <Server />,
        description: t("technologies.nestjs"),
      },
      {
        name: "GraphQL",
        icon: <Code />,
        description: t("technologies.graphql"),
      },
      {
        name: "REST API",
        icon: <Globe />,
        description: t("technologies.restapi"),
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: <Database />,
        description: t("technologies.mongodb"),
      },
      {
        name: "PostgreSQL",
        icon: <Database />,
        description: t("technologies.postgresql"),
      },
      {
        name: "MySQL",
        icon: <Database />,
        description: t("technologies.mysql"),
      },
      {
        name: "Redis",
        icon: <Database />,
        description: t("technologies.redis"),
      },
      {
        name: "Firebase",
        icon: <Database />,
        description: t("technologies.firebase"),
      },
    ],
    mobile: [
      {
        name: "React Native",
        icon: <Smartphone />,
        description: t("technologies.reactnative"),
      },
      {
        name: "Flutter",
        icon: <Smartphone />,
        description: t("technologies.flutter"),
      },
      {
        name: "iOS (Swift)",
        icon: <Smartphone />,
        description: t("technologies.ios"),
      },
      {
        name: "Android (Kotlin)",
        icon: <Smartphone />,
        description: t("technologies.android"),
      },
    ],
    design: [
      {
        name: "Figma",
        icon: <Palette />,
        description: t("technologies.figma"),
      },
      {
        name: "Adobe XD",
        icon: <Palette />,
        description: t("technologies.adobexd"),
      },
      {
        name: "Photoshop",
        icon: <Palette />,
        description: t("technologies.photoshop"),
      },
      {
        name: "Illustrator",
        icon: <Palette />,
        description: t("technologies.illustrator"),
      },
    ],
    devops: [
      {
        name: "Docker",
        icon: <Cloud />,
        description: t("technologies.docker"),
      },
      {
        name: "Kubernetes",
        icon: <Cloud />,
        description: t("technologies.kubernetes"),
      },
      { name: "AWS", icon: <Cloud />, description: t("technologies.aws") },
      { name: "CI/CD", icon: <Zap />, description: t("technologies.cicd") },
      { name: "Vercel", icon: <Zap />, description: t("technologies.vercel") },
    ],
  };

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="mb-4" variant="outline">
              {t("hero.badge")}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              {t("hero.title")}
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Tabs */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="outline">{t("tabs.badge")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("tabs.title")}
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                {t("tabs.description")}
              </p>
            </div>

            <Tabs
              defaultValue="frontend"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full max-w-4xl"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                {techCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    <span>{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(techStacks).map(([category, technologies]) => (
                <TabsContent key={category} value={category}>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === category ? "show" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {technologies.map((tech, index) => (
                      <motion.div key={index} variants={item}>
                        <Card>
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="bg-primary/10 p-2 rounded-full">
                              {tech.icon}
                            </div>
                            <CardTitle>{tech.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>
                              {tech.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="outline">{t("process.badge")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("process.title")}
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                {t("process.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
              {[1, 2, 3, 4].map((step) => (
                <Card key={step} className="border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {step}
                      </div>
                      <CardTitle>{t(`process.steps.${step}.title`)}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {t(`process.steps.${step}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="outline">{t("security.badge")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("security.title")}
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                {t("security.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {t(`security.items.${item}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`security.items.${item}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="outline">{t("performance.badge")}</Badge>
              <h2 className="text-3xl font-bold tracking-tighter">
                {t("performance.title")}
              </h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                {t("performance.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>
                        {t(`performance.items.${item}.title`)}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {t(`performance.items.${item}.description`)}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <PreFooterCTA />
    </div>
  );
}
