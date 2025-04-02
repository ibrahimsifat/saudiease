import { ConsultationEmailTemplate } from "@/components/email-templates/consultation-email";
import { ContactEmailTemplate } from "@/components/email-templates/contact-email";
import { QuoteEmailTemplate } from "@/components/email-templates/quote-email";
import { Resend } from "resend";
import { verifyRecaptchaToken } from "./recaptcha";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Email types
export type EmailType = "contact" | "quote" | "consultation";

// Base email data interface
interface BaseEmailData {
  name: string;
  email: string;
  recaptchaToken: string;
}

// Contact form data
export interface ContactFormData extends BaseEmailData {
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeframe?: string;
  message: string;
  hearAbout?: string;
}

// Quote form data
export interface QuoteFormData extends BaseEmailData {
  phone?: string;
  company?: string;
  projectType: string;
  complexity: string;
  features: string[];
  estimatedPrice: number;
  estimatedTimeWeeks: number;
  message?: string;
}

// Consultation form data
export interface ConsultationFormData extends BaseEmailData {
  phone?: string;
  companyName?: string;
  companySize?: string;
  industry?: string;
  serviceInterest?: string;
  consultationDate: Date;
  consultationTime: string;
  consultationType: string;
  projectDescription?: string;
  hearAboutUs?: string;
}

// Function to send emails
export async function sendEmail(
  type: EmailType,
  data: ContactFormData | QuoteFormData | ConsultationFormData
) {
  try {
    // Verify reCAPTCHA token first
    const recaptchaValid = await verifyRecaptchaToken(data.recaptchaToken);

    if (!recaptchaValid) {
      throw new Error("reCAPTCHA verification failed");
    }

    // Email subject based on type
    const subjects = {
      contact: "New Contact Form Submission - Saudi Ease",
      quote: "New Quote Request - Saudi Ease",
      consultation: "New Consultation Request - Saudi Ease",
    };

    // Get the appropriate email template based on type
    let emailContent;
    switch (type) {
      case "contact":
        emailContent = await ContactEmailTemplate(data as ContactFormData);
        break;
      case "quote":
        emailContent = await QuoteEmailTemplate(data as QuoteFormData);
        break;
      case "consultation":
        emailContent = await ConsultationEmailTemplate(
          data as ConsultationFormData
        );
        break;
      default:
        throw new Error("Invalid email type");
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "Saudi Ease <no-reply@saudiease.com>",
      to: ["ibrahimsifat.me@gmail.com"], // Main recipient
      cc: data.email, // Send a copy to the submitter
      subject: subjects[type],
      react: emailContent,
      text: `New ${type} form submission from ${data.name}. Please check the HTML version of this email for complete details.`,
    });

    // Send auto-reply to the submitter
    await sendAutoReply(type, data);

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Function to send auto-reply emails
async function sendAutoReply(
  type: EmailType,
  data: ContactFormData | QuoteFormData | ConsultationFormData
) {
  try {
    // Auto-reply subjects
    const subjects = {
      contact: "Thank you for contacting Saudi Ease",
      quote: "Your Quote Request Has Been Received - Saudi Ease",
      consultation: "Your Consultation Request Has Been Confirmed - Saudi Ease",
    };

    // Simple text-based auto-reply for now
    // In a real implementation, you would create separate React templates for auto-replies
    await resend.emails.send({
      from: "Saudi Ease <no-reply@saudiease.com>",
      to: [data.email],
      subject: subjects[type],
      text: getAutoReplyText(type, data.name),
    });

    return { success: true };
  } catch (error) {
    console.error("Error sending auto-reply:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

// Helper function to generate auto-reply text
function getAutoReplyText(type: EmailType, name: string): string {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  switch (type) {
    case "contact":
      return `Dear ${name},\n\nThank you for contacting Saudi Ease. We have received your message and will get back to you within 24 hours.\n\nDate: ${currentDate}\n\nBest regards,\nThe Saudi Ease Team`;

    case "quote":
      return `Dear ${name},\n\nThank you for requesting a quote from Saudi Ease. Our team is reviewing your project requirements and will provide a detailed quote within 48 hours.\n\nDate: ${currentDate}\n\nBest regards,\nThe Saudi Ease Team`;

    case "consultation":
      return `Dear ${name},\n\nThank you for scheduling a consultation with Saudi Ease. We have received your request and will confirm your appointment shortly.\n\nDate: ${currentDate}\n\nBest regards,\nThe Saudi Ease Team`;

    default:
      return `Dear ${name},\n\nThank you for your submission. We will get back to you soon.\n\nBest regards,\nThe Saudi Ease Team`;
  }
}
