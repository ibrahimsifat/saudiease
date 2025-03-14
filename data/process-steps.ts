import { ClipboardList, PenTool, Code, Zap, Rocket, HeartHandshake } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ProcessStep {
  id: string
  icon: LucideIcon
  title: string
  description: string
  detailedDescription?: string
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    icon: ClipboardList,
    title: "Discovery",
    description: "We start by understanding your business, goals, and requirements through in-depth consultation.",
    detailedDescription:
      "Our discovery phase involves comprehensive research about your business, industry, competitors, and target audience. We conduct stakeholder interviews and workshops to gather requirements and establish project goals.",
  },
  {
    id: "design",
    icon: PenTool,
    title: "Design",
    description: "Our designers create visually appealing mockups and prototypes tailored to your brand.",
    detailedDescription:
      "We create wireframes, mockups, and interactive prototypes that visualize the user experience. Our design process is iterative, incorporating your feedback at every stage to ensure the final design meets your expectations.",
  },
  {
    id: "development",
    icon: Code,
    title: "Development",
    description: "Our developers bring the designs to life with clean, efficient, and scalable code.",
    detailedDescription:
      "Our development team uses the latest technologies and best practices to build robust, scalable solutions. We follow agile methodologies, with regular sprints and demos to keep you involved throughout the development process.",
  },
  {
    id: "testing",
    icon: Zap,
    title: "Testing",
    description: "Rigorous testing ensures your solution works flawlessly across all devices and browsers.",
    detailedDescription:
      "We conduct comprehensive testing including functionality testing, compatibility testing across devices and browsers, performance testing, security testing, and user acceptance testing to ensure a high-quality final product.",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Launch",
    description: "We deploy your solution and ensure everything is running smoothly for your users.",
    detailedDescription:
      "Our launch process includes final quality checks, deployment to production servers, domain configuration, and monitoring to ensure a smooth transition. We provide training and documentation to help your team manage the new system.",
  },
  {
    id: "support",
    icon: HeartHandshake,
    title: "Support",
    description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance.",
    detailedDescription:
      "We offer various support and maintenance packages to ensure your digital solution continues to perform optimally. Our support includes regular updates, security patches, performance optimization, and technical assistance.",
  },
]

