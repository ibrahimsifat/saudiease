import { faqs } from "@/data/faq";
import { generateFAQSchema, generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions | Saudi Ease",
  description:
    "Find answers to common questions about our web development, e-invoicing, digital marketing, and other services for Saudi businesses.",
  path: "/faq",
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(
    faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <FAQPageClient />
      </Suspense>
    </>
  );
}
