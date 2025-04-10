import { CONSTANT } from "@/config/constants";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  Factory,
  GraduationCap,
  ShoppingBag,
  Stethoscope,
} from "lucide-react";

export interface BusinessCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  services: string[];
  image: string;
  metaDescription?: string;
  keywords?: string[];
}

export const businessCategories: BusinessCategory[] = [
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description:
      "Boost your retail business with custom e-commerce solutions, inventory management systems, and digital marketing strategies tailored for the Saudi market.",
    services: [
      "E-commerce Website Development",
      "Inventory Management",
      "Payment Gateway Integration",
      "Mobile Shopping Apps",
    ],
    image: CONSTANT.images.businessCategories.retail,
    metaDescription:
      "Comprehensive e-commerce solutions for Saudi retailers including website development, inventory management, and payment integration.",
    keywords: [
      "Saudi e-commerce",
      "retail website development",
      "online store Saudi Arabia",
      "inventory management",
    ],
  },
  {
    id: "corporate",
    name: "Corporate & Enterprise",
    icon: Building2,
    description:
      "Enterprise-grade solutions for large corporations in Saudi Arabia, including custom software development, digital transformation, and IT consulting.",
    services: [
      "Corporate Website Development",
      "Enterprise Software Solutions",
      "Digital Transformation",
      "IT Infrastructure",
    ],
    image: CONSTANT.images.businessCategories.corporate,
    metaDescription:
      "Enterprise-grade digital solutions for Saudi corporations including custom software development and digital transformation.",
    keywords: [
      "corporate IT solutions Saudi",
      "enterprise software Saudi Arabia",
      "digital transformation KSA",
      "corporate website development",
    ],
  },
  {
    id: "smb",
    name: "Small & Medium Business",
    icon: Briefcase,
    description:
      "Affordable digital solutions for SMBs in Saudi Arabia, helping you establish an online presence and streamline your operations.",
    services: [
      "Business Website Development",
      "E-Invoicing Solutions",
      "Social Media Management",
      "Local SEO",
    ],
    image: CONSTANT.images.businessCategories.smb,
    metaDescription:
      "Affordable digital solutions for small and medium businesses in Saudi Arabia, from websites to e-invoicing and local SEO.",
    keywords: [
      "SMB digital solutions Saudi",
      "small business website Saudi",
      "e-invoicing SMB",
      "local SEO Saudi Arabia",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description:
      "Digital solutions for educational institutions in Saudi Arabia, including learning management systems, student portals, and online course platforms.",
    services: [
      "Educational Website Development",
      "Learning Management Systems",
      "Student Portals",
      "Online Course Platforms",
    ],
    image: CONSTANT.images.businessCategories.education,
    metaDescription:
      "Digital solutions for Saudi educational institutions including learning management systems and student portals.",
    keywords: [
      "education technology Saudi",
      "learning management system KSA",
      "student portal development",
      "online education platform Saudi",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Stethoscope,
    description:
      "Specialized digital solutions for healthcare providers in Saudi Arabia, including appointment booking systems, patient portals, and medical practice websites.",
    services: [
      "Healthcare Website Development",
      "Appointment Booking Systems",
      "Patient Portals",
      "Medical Practice Management",
    ],
    image: CONSTANT.images.businessCategories.healthcare,
    metaDescription:
      "Digital healthcare solutions for Saudi medical providers including appointment systems and patient portals.",
    keywords: [
      "healthcare technology Saudi",
      "medical website development",
      "patient portal Saudi",
      "appointment booking system KSA",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description:
      "Digital solutions for manufacturing businesses in Saudi Arabia, including inventory management, supply chain optimization, and industrial automation.",
    services: [
      "Manufacturing Website Development",
      "Inventory Management",
      "Supply Chain Optimization",
      "Industrial Automation",
    ],
    image: CONSTANT.images.businessCategories.manufacturing,
    metaDescription:
      "Digital solutions for Saudi manufacturing businesses including inventory management and supply chain optimization.",
    keywords: [
      "manufacturing technology Saudi",
      "industrial automation KSA",
      "supply chain optimization",
      "manufacturing digital solutions",
    ],
  },
];
