"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactFAQ() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const faqs = [
    {
      question: "What types of digital services do you offer?",
      answer:
        "We offer a wide range of digital services including web development, e-invoicing solutions, graphic design & branding, and digital marketing.",
    },
    {
      question: "How can I request a quote for my project?",
      answer:
        "You can request a quote by filling out the contact form on this page or by contacting us directly via phone or email.",
    },
    {
      question: "What is the typical turnaround time for a project?",
      answer:
        "The turnaround time varies depending on the scope and complexity of the project. We'll provide a detailed timeline during the initial consultation.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your digital solutions remain up-to-date and perform optimally.",
    },
    {
      question: "Are your e-invoicing solutions ZATCA compliant?",
      answer: "Yes, our e-invoicing solutions are fully compliant with ZATCA regulations in Saudi Arabia.",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements - Omitted for brevity */}

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            Common Questions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-saudi-black mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Find answers to common questions about our services
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-50 rounded-lg border border-gray-100"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-saudi-black hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

