import type { Metadata } from "next"
import { TechStackPage } from "./tech-stack-client"

export const metadata: Metadata = {
  title: "Our Technology Stack | Saudi Ease - Digital Solutions for Saudi Businesses",
  description:
    "Explore the cutting-edge technologies we use to build powerful, scalable, and efficient digital solutions for businesses in Saudi Arabia.",
  openGraph: {
    title: "Our Technology Stack | Saudi Ease - Digital Solutions for Saudi Businesses",
    description:
      "Explore the cutting-edge technologies we use to build powerful, scalable, and efficient digital solutions for businesses in Saudi Arabia.",
    type: "website",
    url: "https://saudiease.com/tech-stack",
  },
}

export default function TechStack() {
  return <TechStackPage />
}

