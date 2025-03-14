import type { Metadata } from "next"
import PortfolioPageClient from "./PortfolioPageClient"

export const metadata: Metadata = {
  title: "Our Portfolio | Saudi Ease Digital Solutions",
  description:
    "Explore our portfolio of successful digital projects across Saudi Arabia. View our web development, e-commerce, and digital marketing case studies.",
  keywords:
    "Saudi digital portfolio, web development projects, Saudi e-commerce case studies, ZATCA e-invoicing implementations, Saudi Arabia digital marketing success stories",
  openGraph: {
    title: "Portfolio | Saudi Ease Digital Solutions",
    description: "Explore our portfolio of successful digital projects across Saudi Arabia.",
    url: "https://saudiease.com/portfolio",
    siteName: "Saudi Ease",
    locale: "en_US",
    type: "website",
  },
}

export default function PortfolioPage() {
  return <PortfolioPageClient />
}

