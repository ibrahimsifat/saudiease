import { CONSTANT } from "@/config/constants";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Code,
  Database,
  FileText,
  Image,
  Layers,
  Monitor,
  Palette,
  PenTool,
  Printer,
  ShoppingCart,
  Smartphone,
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
    id: "web-development",
    icon: Monitor,
    title: "Website Development",
    image: CONSTANT.images.service.webDevelopment,
    description:
      "Custom, responsive websites tailored to your business needs with SEO optimization and seamless user experience.",
    longDescription:
      "Our expert team creates responsive, user-friendly websites that represent your brand perfectly. We focus on creating seamless user experiences that drive conversions and engagement while ensuring your site ranks well in search engines.",
    benefits: [
      "Increased online visibility",
      "Better user engagement",
      "Higher conversion rates",
      "Mobile-responsive designs",
      "Search engine optimized code",
    ],
    features: [
      "Custom website design and development",
      "Content management systems",
      "E-commerce functionality",
      "Multilingual support (Arabic/English)",
      "Website maintenance and support",
    ],
    category: "development",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    image: CONSTANT.images.service.mobileDevelopment,
    description:
      "Native and cross-platform mobile applications for iOS and Android that extend your business reach to mobile users.",
    longDescription:
      "We develop high-performance mobile applications that provide seamless experiences across all devices. Our mobile solutions help Saudi businesses connect with customers on the go, increase engagement, and drive revenue through innovative features.",
    benefits: [
      "Expanded customer reach",
      "Increased brand loyalty",
      "New revenue streams",
      "Improved customer engagement",
      "Competitive advantage in the Saudi market",
    ],
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX design optimized for mobile",
      "Integration with device features",
      "Ongoing maintenance and updates",
    ],
    category: "development",
  },
  {
    id: "custom-cms-development",
    icon: Code,
    title: "Custom CMS Development",
    image: CONSTANT.images.service.customCmsDevelopment,
    description:
      "Tailor-made content management systems that give you complete control over your digital content with Arabic language support.",
    longDescription:
      "Our custom CMS solutions are built specifically for your business needs, allowing easy management of multilingual content. We create intuitive admin interfaces that empower your team to update content without technical knowledge.",
    benefits: [
      "Complete content control",
      "Streamlined workflows",
      "Reduced maintenance costs",
      "Scalable architecture",
      "Bilingual content management (Arabic/English)",
    ],
    features: [
      "User-friendly admin interface",
      "Custom content types and fields",
      "Role-based access control",
      "Workflow automation",
      "API integration capabilities",
    ],
    category: "development",
  },
  {
    id: "e-commerce-solutions",
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    image: CONSTANT.images.service.eCommerceSolutions,
    description:
      "Comprehensive online store development with secure payment gateways, inventory management, and Saudi shipping integration.",
    longDescription:
      "We build powerful e-commerce platforms that help Saudi businesses sell products and services online. Our solutions include integration with local payment gateways, inventory management, and compliance with Saudi e-commerce regulations.",
    benefits: [
      "Increased sales opportunities",
      "Automated business processes",
      "Expanded market reach",
      "Enhanced customer experience",
      "Detailed sales analytics",
    ],
    features: [
      "Responsive product catalogs",
      "Secure checkout process",
      "Integration with Saudi payment gateways",
      "Inventory management",
      "Order tracking and fulfillment",
    ],
    category: "development",
  },
  {
    id: "api-development",
    icon: Database,
    title: "API Development & Integration",
    image: CONSTANT.images.service.apiDevelopment,
    description:
      "Custom API development and third-party system integration to connect your business systems seamlessly.",
    longDescription:
      "We develop robust APIs and integrate third-party systems to create a connected ecosystem for your business. Our integration solutions ensure smooth data flow between different platforms and applications.",
    benefits: [
      "Seamless system connectivity",
      "Automated data exchange",
      "Improved workflow efficiency",
      "Enhanced functionality",
      "Future-proof scalability",
    ],
    features: [
      "RESTful API development",
      "Third-party API integration",
      "Microservices architecture",
      "API documentation",
      "Performance optimization",
    ],
    category: "development",
  },
  {
    id: "e-invoicing",
    icon: FileText,
    title: "E-Invoicing & Accounts",
    image: CONSTANT.images.service.eInvoicing,
    description:
      "ZATCA-compliant electronic invoicing solutions and seamless account management for Saudi businesses.",
    longDescription:
      "Our e-invoicing solutions help Saudi businesses comply with ZATCA regulations while streamlining their financial processes. We provide comprehensive account management tools that integrate with your existing systems.",
    benefits: [
      "ZATCA compliance",
      "Reduced paperwork",
      "Faster payment processing",
      "Improved cash flow management",
      "Automated financial reporting",
    ],
    features: [
      "ZATCA-compliant e-invoicing",
      "Automated invoice generation",
      "Financial reporting tools",
      "Integration with accounting software",
      "Secure payment processing",
    ],
    category: "finance",
  },
  {
    id: "logo-design",
    icon: PenTool,
    title: "Logo Design",
    image: CONSTANT.images.service.logoDesign,
    description:
      "Professional, memorable logo design that captures your brand essence and resonates with Saudi audiences.",
    longDescription:
      "Our logo design process creates distinctive visual identities that represent your brand values and connect with Saudi audiences. We develop logos that work across all platforms while respecting cultural sensitivities.",
    benefits: [
      "Instant brand recognition",
      "Professional market presence",
      "Consistent brand identity",
      "Cultural relevance",
      "Versatile application across media",
    ],
    features: [
      "Multiple concept designs",
      "Unlimited revisions",
      "Vector file formats",
      "Brand guidelines",
      "All necessary file formats",
    ],
    category: "design",
  },
  {
    id: "brand-identity",
    icon: Layers,
    title: "Brand Identity Design",
    image: CONSTANT.images.service.brandIdentity,
    description:
      "Comprehensive brand identity development including logo, color palette, typography, and brand guidelines.",
    longDescription:
      "We create cohesive brand identities that communicate your values and differentiate you in the Saudi market. Our comprehensive approach ensures consistency across all touchpoints and builds a strong brand presence.",
    benefits: [
      "Consistent brand presentation",
      "Increased brand recognition",
      "Professional market presence",
      "Clear brand communication",
      "Strong competitive positioning",
    ],
    features: [
      "Logo design",
      "Color palette development",
      "Typography selection",
      "Brand guidelines documentation",
      "Stationery design",
    ],
    category: "design",
  },
  {
    id: "corporate-profile",
    icon: Palette,
    title: "Corporate Profile Design",
    image: CONSTANT.images.service.corporateProfile,
    description:
      "Impressive corporate profiles and company brochures that showcase your business professionally to Saudi stakeholders.",
    longDescription:
      "Our corporate profile designs present your business professionally to Saudi stakeholders, investors, and clients. We create compelling visual narratives that highlight your achievements, services, and vision.",
    benefits: [
      "Professional company presentation",
      "Enhanced credibility with stakeholders",
      "Effective communication of company values",
      "Impressive marketing material",
      "Bilingual design capabilities",
    ],
    features: [
      "Print and digital formats",
      "Professional copywriting",
      "Custom photography",
      "Infographic design",
      "Arabic and English versions",
    ],
    category: "design",
  },
  {
    id: "ui-ux-design",
    icon: Image,
    title: "UI/UX Design",
    image: CONSTANT.images.service.uiUxDesign,
    description:
      "User-centered interface and experience design that enhances usability and engagement for Saudi users.",
    longDescription:
      "Our UI/UX design services create intuitive, engaging digital experiences that meet the expectations of Saudi users. We focus on user research, information architecture, and visual design to maximize usability and satisfaction.",
    benefits: [
      "Improved user satisfaction",
      "Increased conversion rates",
      "Reduced bounce rates",
      "Enhanced user engagement",
      "Culturally appropriate design",
    ],
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Interactive design",
      "Usability testing",
      "Responsive design for all devices",
    ],
    category: "design",
  },
  {
    id: "print-design",
    icon: Printer,
    title: "Print Design",
    image: CONSTANT.images.service.printDesign,
    description:
      "High-quality print materials including brochures, business cards, and marketing collateral with bilingual support.",
    longDescription:
      "We design professional print materials that effectively communicate your message and reinforce your brand identity. Our print designs consider both aesthetic appeal and practical functionality for the Saudi market.",
    benefits: [
      "Professional brand representation",
      "Consistent marketing materials",
      "Effective communication tools",
      "Bilingual design capabilities",
      "High-quality production standards",
    ],
    features: [
      "Business cards and stationery",
      "Brochures and catalogs",
      "Posters and banners",
      "Packaging design",
      "Exhibition materials",
    ],
    category: "design",
  },
  {
    id: "digital-marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    image: CONSTANT.images.service.digitalMarketing,
    description:
      "Comprehensive digital marketing strategies that increase your online visibility and drive growth in the Saudi market.",
    longDescription:
      "Our data-driven digital marketing strategies help Saudi businesses reach their target audience effectively. We create comprehensive campaigns across multiple channels to maximize your ROI and brand visibility.",
    benefits: [
      "Increased website traffic",
      "Higher conversion rates",
      "Better ROI on marketing spend",
      "Improved brand awareness",
      "Data-driven marketing decisions",
    ],
    features: [
      "Search engine optimization (SEO)",
      "Pay-per-click (PPC) advertising",
      "Social media marketing",
      "Content marketing",
      "Email marketing campaigns",
    ],
    category: "marketing",
  },
];
