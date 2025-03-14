import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurStory from "@/components/about/our-story"
import MissionVision from "@/components/about/mission-vision"
import CoreValues from "@/components/about/core-values"
import TeamSection from "@/components/about/team-section"
import Achievements from "@/components/about/achievements"
import Timeline from "@/components/about/timeline"
import Testimonials from "@/components/about/testimonials"
import OfficeLocations from "@/components/about/office-locations"
import CSRInitiatives from "@/components/about/csr-initiatives"
import JoinOurTeam from "@/components/about/join-our-team"
import Partners from "@/components/about/partners"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"
import { generateOrganizationSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About Saudi Ease | Leading Digital Solutions Provider in Saudi Arabia",
  description:
    "Learn about Saudi Ease, our journey, mission, values, and the team behind our innovative digital solutions that are transforming businesses across Saudi Arabia since 2018.",
  keywords: [
    "Saudi Ease company",
    "digital agency Saudi Arabia",
    "Saudi tech company",
    "web development Riyadh",
    "Saudi digital transformation",
    "IT services Saudi Arabia",
  ],
  openGraph: {
    title: "About Saudi Ease | Leading Digital Solutions Provider in Saudi Arabia",
    description:
      "Learn about Saudi Ease, our journey, mission, values, and the team behind our innovative digital solutions that are transforming businesses across Saudi Arabia since 2018.",
    url: "https://saudiease.com/about",
    siteName: "Saudi Ease",
    images: [
      {
        url: "https://saudiease.com/images/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saudi Ease Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function AboutPage() {
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <Script
        id="schema-organization-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <CoreValues />
        <Timeline />
        <TeamSection />
        <Achievements />
        <Testimonials />
        <OfficeLocations />
        <CSRInitiatives />
        <Partners />
        <JoinOurTeam />
      </main>
      <Footer />
    </>
  )
}

