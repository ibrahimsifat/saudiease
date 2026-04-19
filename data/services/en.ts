import { CONSTANT } from "@/config/constants";
import type { LucideIcon } from "lucide-react";
import {
  Monitor,
  Smartphone,
  Palette,
  UserCheck,
  ReceiptText,
  Mail,
  MapPin,
  Briefcase,
  Table,
  ClipboardList,
  LifeBuoy,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  image: string;
  description: string;
  longDescription?: string;
  benefits?: string[];
  features?: string[];
  category?: string;
}

export const services: Service[] = [
  {
    id: "website-design-development",
    icon: Monitor,
    title: "Website Design & Development",
    image: CONSTANT.images.service.webDevelopment,
    description: "Professional sites that win clients and tenders in the industrial sector.",
    longDescription: "We create high-performance, professional websites specifically designed for contracting and construction companies. Our sites are built to showcase your projects, certifications, and capabilities, helping you win more tenders and clients.",
    benefits: [
      "Showcase project portfolios effectively",
      "Highlight safety and quality certifications",
      "Win more industrial tenders",
      "Bilingual (Arabic/English) as standard",
      "Mobile-friendly for field access"
    ],
    features: [
      "Custom industrial-themed design",
      "Project gallery & case studies",
      "Career/Hiring portal for workforce",
      "Bilingual content management",
      "SEO optimized for local searches"
    ],
    category: "development",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    image: CONSTANT.images.service.mobileDevelopment,
    description: "Custom apps for field teams and industrial management.",
    longDescription: "Our custom mobile solutions are built for the unique needs of the industrial sector. From tracking workforce attendance on-site to managing equipment and materials, we build apps that improve field efficiency.",
    benefits: [
      "Real-time site reporting",
      "Improved field team coordination",
      "Offline capabilities for remote sites",
      "Direct communication with management"
    ],
    features: [
      "Attendance & GPS tracking",
      "Site photo/video reporting",
      "Equipment maintenance logs",
      "Material request systems"
    ],
    category: "development",
  },
  {
    id: "company-profile-branding",
    icon: Palette,
    title: "Company Profile & Branding",
    image: CONSTANT.images.service.brandIdentity,
    description: "Logo, identity, and brochures designed for the Industrial Sector.",
    longDescription: "We build a strong, professional identity for your business. For industrial companies, a high-quality company profile is essential for pre-qualification with major clients like Aramco and SABIC.",
    benefits: [
      "Look professional to major clients",
      "Consistent branding across all documents",
      "Pre-qualification ready company profiles",
      "Professional image in the market"
    ],
    features: [
      "Unique logo design",
      "Bilingual Company Profile (PDF/Print)",
      "Letterhead & Business Card design",
      "Marketing brochures & flyers"
    ],
    category: "design",
  },
  {
    id: "aramco-sabic-vendor-code",
    icon: UserCheck,
    title: "Aramco & SABIC Vendor Code",
    image: CONSTANT.images.service.apiDevelopment,
    description: "Registration support for major industrial clients.",
    longDescription: "Navigating the registration process for major industrial players like Saudi Aramco (Amana) and SABIC can be complex. We provide expert support to help your company obtain its vendor code and start participating in their ecosystem.",
    benefits: [
      "Access to multi-billion riyal tenders",
      "Official vendor status with KSA giants",
      "Expert guidance through the paperwork",
      "Faster registration turnaround"
    ],
    features: [
      "Aramco (Amana) registration support",
      "SABIC vendor code application",
      "Document collection & verification",
      "Follow-up with registration portals"
    ],
    category: "consultation",
  },
  {
    id: "zatca-e-invoicing",
    icon: ReceiptText,
    title: "ZATCA E-Invoicing",
    image: CONSTANT.images.service.eInvoicing,
    description: "Fatoorah-compliant electronic invoicing setup.",
    longDescription: "Ensure your company is fully compliant with ZATCA (Fatoorah) regulations. We set up electronic invoicing systems that meet all phase 1 and phase 2 requirements, including XML generation and QR codes.",
    benefits: [
      "Avoid heavy non-compliance fines",
      "Fully compliant with KSA laws",
      "Automated tax calculations",
      "Easy audit preparation"
    ],
    features: [
      "Fatoorah Phase 2 integration",
      "QR Code generation",
      "ZATCA portal linking",
      "Bilingual invoices (AR/EN)"
    ],
    category: "finance",
  },
  {
    id: "professional-email-setup",
    icon: Mail,
    title: "Professional Email Setup",
    image: CONSTANT.images.service.customCmsDevelopment,
    description: "Business email with your own company domain.",
    longDescription: "Stop using Gmail or Outlook for business. Build trust with clients and vendors by using professional email addresses (e.g., info@yourcompany.com). We handle the setup and management.",
    benefits: [
      "Build professional trust",
      "Separate personal and business mail",
      "Enhanced security features",
      "Full control over company data"
    ],
    features: [
      "Custom domain (yourcompany.com)",
      "Google Workspace/Microsoft 365 setup",
      "Secure cloud storage",
      "Sync across all devices"
    ],
    category: "it-support",
  },
  {
    id: "google-business-profile",
    icon: MapPin,
    title: "Google Business Profile",
    image: CONSTANT.images.service.digitalMarketing,
    description: "Get found on Maps by industrial clients in Jubail.",
    longDescription: "Industrial clients often search for local suppliers and contractors on Google Maps. We optimize your business profile to ensure you appear when they search for services in Jubail and surrounding areas.",
    benefits: [
      "Appear in local search results",
      "Get direct calls from clients",
      "Showcase your location and office",
      "Build trust through reviews"
    ],
    features: [
      "Profile creation & optimization",
      "Google Maps verification",
      "Photo & project updates",
      "Review management"
    ],
    category: "marketing",
  },
  {
    id: "business-setup-consultation",
    icon: Briefcase,
    title: "Business Setup Consultation",
    image: CONSTANT.images.service.printDesign,
    description: "CR registration & commercial license guidance.",
    longDescription: "Planning to start or expand your construction or contracting business? We provide step-by-step guidance on CR registration, MOCI requirements, and obtaining the necessary commercial licenses in Saudi Arabia.",
    benefits: [
      "Start your business correctly",
      "Meet all regulatory requirements",
      "Avoid registration mistakes",
      "Expert local knowledge"
    ],
    features: [
      "Commercial Registration (CR) guidance",
      "MOCI portal support",
      "Chamber of Commerce registration",
      "Activity selection advice"
    ],
    category: "consultation",
  },
  {
    id: "excel-data-work",
    icon: Table,
    title: "Excel & Data Work",
    image: CONSTANT.images.service.brandIdentity,
    description: "Reports, trackers, and automated spreadsheets.",
    longDescription: "We transform your messy data into clear, automated reports and trackers. From payroll calculations to material tracking and project progress reports, we build the Excel tools your team needs.",
    benefits: [
      "Save hours on manual reporting",
      "Accurate payroll and tracking",
      "Clear visual data (Dashboards)",
      "Automated calculations"
    ],
    features: [
      "Advanced Excel formulas & VBA",
      "Automated Payroll spreadsheets",
      "Project progress trackers",
      "Dynamic data dashboards"
    ],
    category: "data",
  },
  {
    id: "cv-document-preparation",
    icon: ClipboardList,
    title: "CV & Document Preparation",
    image: CONSTANT.images.service.corporateProfile,
    description: "Professional docs for industrial tenders and hiring.",
    longDescription: "Industrial tenders often require specific documentation and CV formats. We prepare high-quality, professional documents and CVs for your key staff that meet the standards of major industrial clients.",
    benefits: [
      "Increase tender success rate",
      "Professional staff representation",
      "Ready-to-submit documentation",
      "Saves management time"
    ],
    features: [
      "ATS-friendly staff CVs",
      "Tender response drafting",
      "Technical proposal formatting",
      "Policies & Procedures docs"
    ],
    category: "consultation",
  },
  {
    id: "it-support-retainer",
    icon: LifeBuoy,
    title: "IT Support Retainer",
    image: CONSTANT.images.service.uiUxDesign,
    description: "Monthly support — your own IT department.",
    longDescription: "Don't wait for things to break. Our monthly IT support retainer provides your company with a dedicated team to handle your email, security, website updates, and technical issues — giving you peace of mind.",
    benefits: [
      "Fixed monthly cost",
      "Fast response for tech issues",
      "Preventive maintenance",
      "Safe and secure data"
    ],
    features: [
      "Email & Domain management",
      "Website monthly updates",
      "Cybersecurity monitoring",
      "Priority technical support"
    ],
    category: "it-support",
  },
];

