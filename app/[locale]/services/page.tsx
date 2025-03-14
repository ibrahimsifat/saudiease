import type { Metadata } from "next"
import Script from "next/script"
import { generateServiceSchema } from "@/lib/schema"
import { generatePageMetadata } from "@/lib/seo-utils"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = generatePageMetadata({
  title: "Professional Digital Services for Saudi Businesses",
  description:
    "Comprehensive digital services including web development, mobile apps, e-invoicing, graphic design, and digital marketing tailored for Saudi businesses.",
  keywords: [
    "digital services Saudi Arabia",
    "web development Riyadh",
    "mobile app development KSA",
    "e-invoicing ZATCA",
    "graphic design Saudi",
    "digital marketing services",
    "Saudi business solutions",
    "Vision 2030 digital transformation",
    "Arabic website development",
    "Saudi e-commerce solutions",
  ],
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              title: "Digital Services",
              description:
                "Comprehensive digital services for Saudi businesses including web development, mobile apps, e-invoicing, graphic design, and digital marketing.",
              provider: {
                name: "Saudi Ease",
                url: "https://saudiease.com",
              },
            }),
          ),
        }}
      />
      <ServicesPageClient />
    </>
  )
}

