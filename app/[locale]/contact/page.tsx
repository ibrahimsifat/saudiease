import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us | Saudi Ease",
  description:
    "Get in touch with Saudi Ease for all your digital transformation needs. Our team is ready to help your business thrive in the digital landscape.",
}

export default function ContactPage() {
  return <ContactClient />
}

