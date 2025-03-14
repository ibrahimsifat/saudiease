import type { Metadata } from "next"
import PrivacyPolicyClient from "./PrivacyPolicyClient"

export const metadata: Metadata = {
  title: "Privacy Policy | Saudi Ease",
  description:
    "Learn how Saudi Ease collects, uses, and protects your personal information in compliance with Saudi data protection regulations.",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />
}

