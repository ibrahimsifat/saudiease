"use client";
import ContactFAQ from "@/components/contact/contact-faq";
import ContactForm from "@/components/contact/contact-form";
import ContactHero from "@/components/contact/contact-hero";
import ContactInfo from "@/components/contact/contact-info";
import SupportOptions from "@/components/contact/support-options";
import type { Locale } from "@/config/i18n";

export default function ContactClient({ locale }: { locale: Locale }) {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <OfficeLocations /> */}

      {/* Support Options */}
      <SupportOptions />

      {/* FAQ Section */}
      <ContactFAQ />
    </main>
  );
}
