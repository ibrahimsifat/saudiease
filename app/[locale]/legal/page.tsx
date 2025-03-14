import type { Metadata } from "next"
import LegalHubClient from "./LegalHubClient"

export const metadata: Metadata = {
  title: "Legal Hub | Saudi Ease",
  description: "Legal information, privacy policy, terms of service, and other legal documents for Saudi Ease.",
}

export default function LegalHubPage() {
  return <LegalHubClient />
}

