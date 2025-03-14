import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo-utils"
import EstimatorClient from "./estimator-client"

export const metadata: Metadata = generatePageMetadata({
  title: "Project Estimator | Get Instant Cost & Timeline Estimates",
  description:
    "Use our interactive project estimator to get instant cost and timeline estimates for your digital project. Plan your budget and timeline with Saudi Ease.",
  path: "/estimator",
  keywords:
    "project estimator, cost calculator, digital project timeline, web development cost, app development cost, Saudi Arabia digital services pricing",
})

export default function EstimatorPage() {
  return <EstimatorClient />
}

