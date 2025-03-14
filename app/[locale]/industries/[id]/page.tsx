import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { businessCategories } from "@/data/business-categories"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import IndustryDetailClient from "./IndustryDetailClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = businessCategories.find((category) => category.id === params.id)

  if (!industry) {
    return {
      title: "Industry Not Found | Saudi Ease",
      description: "The requested industry page could not be found.",
    }
  }

  return {
    title: `${industry.name} Solutions | Saudi Ease`,
    description:
      industry.metaDescription ||
      `Specialized digital solutions for the ${industry.name.toLowerCase()} industry in Saudi Arabia. Tailored to meet your specific needs and aligned with Vision 2030.`,
    keywords: industry.keywords || [
      `${industry.name.toLowerCase()} Saudi Arabia`,
      "digital solutions",
      "Vision 2030",
      "industry-specific technology",
    ],
  }
}

export async function generateStaticParams() {
  return businessCategories.map((category) => ({
    id: category.id,
  }))
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = businessCategories.find((category) => category.id === params.id)

  if (!industry) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <IndustryDetailClient industry={industry} />
      <ContactSection />
      <Footer />
    </main>
  )
}

