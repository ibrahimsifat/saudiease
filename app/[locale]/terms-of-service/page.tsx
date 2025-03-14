import type { Metadata } from "next"
import TermsOfServiceClient from "./TermsOfServiceClient"

export const metadata: Metadata = {
  title: "Terms of Service | Saudi Ease",
  description: "The terms and conditions governing your use of Saudi Ease services and platform.",
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />
}

