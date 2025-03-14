import type { Metadata } from "next"
import IndustriesClientPage from "./IndustriesClientPage"

export const metadata: Metadata = {
  title: "Industry Solutions | Saudi Ease",
  description:
    "Discover tailored digital solutions for various industries in Saudi Arabia. From retail to healthcare, we provide specialized services aligned with Vision 2030.",
  keywords:
    "Saudi industry solutions, digital transformation Saudi Arabia, industry-specific technology, Vision 2030 digital solutions",
}

export default function IndustriesPage() {
  return <IndustriesClientPage />
}

