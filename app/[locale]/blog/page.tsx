import type { Metadata } from "next"
import BlogPageClient from "./BlogPageClient"

export const metadata: Metadata = {
  title: "Blog | Saudi Ease Digital Solutions",
  description:
    "Stay updated with the latest digital transformation trends, ZATCA e-invoicing updates, and digital marketing insights for Saudi businesses.",
  keywords:
    "Saudi digital blog, ZATCA e-invoicing updates, Saudi digital marketing trends, web development insights, Saudi Arabia business technology",
  openGraph: {
    title: "Blog | Saudi Ease Digital Solutions",
    description: "Digital transformation insights and trends for Saudi businesses.",
    url: "https://saudiease.com/blog",
    siteName: "Saudi Ease",
    locale: "en_US",
    type: "website",
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}

