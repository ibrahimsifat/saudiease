import {
  Monitor,
  FileText,
  PenTool,
  BarChart3,
  Smartphone,
  Code,
  ShoppingCart,
  Server,
  Database,
  Layers,
  Palette,
  Image,
  Film,
  Printer,
  Instagram,
  Search,
  Mail,
  MessageSquare,
  Youtube,
  TrendingUp,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  description: string
  longDescription?: string
  benefits?: string[]
  features?: string[]
  category?: string
}

export const services: Service[] = [
  {
    id: "web-development",
    icon: Monitor,
    title: "Website Development",
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
    id: "enterprise-solutions",
    icon: Server,
    title: "Enterprise Solutions",
    description:
      "Scalable, secure enterprise applications that streamline operations and enhance productivity for Saudi organizations.",
    longDescription:
      "Our enterprise solutions address the complex needs of large Saudi organizations, providing scalable, secure, and efficient systems that streamline operations and enhance productivity while ensuring compliance with local regulations.",
    benefits: [
      "Improved operational efficiency",
      "Enhanced data security",
      "Streamlined business processes",
      "Better decision-making capabilities",
      "Reduced operational costs",
    ],
    features: [
      "Custom ERP and CRM systems",
      "Business process automation",
      "Data analytics and reporting",
      "Legacy system integration",
      "Scalable cloud infrastructure",
    ],
    category: "development",
  },
  {
    id: "api-development",
    icon: Database,
    title: "API Development & Integration",
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
    description: "ZATCA-compliant electronic invoicing solutions and seamless account management for Saudi businesses.",
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
    id: "motion-graphics",
    icon: Film,
    title: "Motion Graphics & Animation",
    description:
      "Engaging motion graphics and animations that bring your brand to life and capture audience attention.",
    longDescription:
      "Our motion graphics and animation services create dynamic visual content that engages Saudi audiences and effectively communicates your message. We develop animations for various platforms, from social media to corporate presentations.",
    benefits: [
      "Increased audience engagement",
      "Enhanced message retention",
      "Simplified explanation of complex concepts",
      "Distinctive brand communication",
      "Versatile content for multiple platforms",
    ],
    features: [
      "2D and 3D animation",
      "Explainer videos",
      "Logo animation",
      "Social media animations",
      "Animated infographics",
    ],
    category: "design",
  },
  {
    id: "print-design",
    icon: Printer,
    title: "Print Design",
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
  {
    id: "seo-services",
    icon: Search,
    title: "SEO Services",
    description:
      "Specialized search engine optimization for Saudi businesses to improve rankings on Google and local search engines.",
    longDescription:
      "Our SEO services are tailored specifically for the Saudi market, helping your business rank higher in local and international search results. We implement proven strategies that drive organic traffic and increase conversions.",
    benefits: [
      "Improved search engine rankings",
      "Increased organic traffic",
      "Enhanced online visibility",
      "Higher quality leads",
      "Long-term sustainable results",
    ],
    features: [
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Technical SEO audits",
      "Local SEO for Saudi market",
      "Regular performance reporting",
    ],
    category: "marketing",
  },
  {
    id: "social-media-marketing",
    icon: Instagram,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build engagement with Saudi audiences across popular platforms.",
    longDescription:
      "We develop and execute social media strategies that connect your brand with Saudi audiences on platforms like Twitter, Instagram, Snapchat, and LinkedIn. Our campaigns build engagement, increase followers, and drive conversions.",
    benefits: [
      "Increased brand awareness",
      "Improved audience engagement",
      "Enhanced customer loyalty",
      "Direct communication channel",
      "Targeted advertising opportunities",
    ],
    features: [
      "Platform-specific strategy",
      "Content creation and curation",
      "Community management",
      "Paid social campaigns",
      "Performance analytics",
    ],
    category: "marketing",
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture leads and build customer relationships with Saudi audiences.",
    longDescription:
      "Our email marketing services help Saudi businesses build and maintain relationships with customers through personalized, targeted campaigns. We create engaging content that drives opens, clicks, and conversions.",
    benefits: [
      "Direct communication with customers",
      "Highly measurable results",
      "Increased customer retention",
      "Cost-effective marketing channel",
      "Personalized customer engagement",
    ],
    features: [
      "Campaign strategy development",
      "Email template design",
      "List segmentation and management",
      "Automated email sequences",
      "Performance tracking and optimization",
    ],
    category: "marketing",
  },
  {
    id: "content-marketing",
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Strategic content creation and distribution that establishes your authority in the Saudi market.",
    longDescription:
      "We create and distribute valuable, relevant content that attracts and engages your target audience in Saudi Arabia. Our content marketing strategies build brand authority, drive traffic, and generate leads.",
    benefits: [
      "Established industry authority",
      "Improved search engine rankings",
      "Increased website traffic",
      "Enhanced customer trust",
      "Long-term marketing asset creation",
    ],
    features: [
      "Content strategy development",
      "Blog and article writing",
      "Infographic creation",
      "Ebook and whitepaper development",
      "Content distribution",
    ],
    category: "marketing",
  },
  {
    id: "video-marketing",
    icon: Youtube,
    title: "Video Marketing",
    description:
      "Compelling video content that engages Saudi audiences and drives brand awareness across digital channels.",
    longDescription:
      "Our video marketing services create compelling visual content that resonates with Saudi audiences. We develop and distribute videos that tell your brand story, showcase products, and drive engagement across digital channels.",
    benefits: [
      "Increased engagement rates",
      "Enhanced message retention",
      "Improved conversion rates",
      "Stronger emotional connection",
      "Versatile content for multiple platforms",
    ],
    features: [
      "Video strategy development",
      "Professional video production",
      "Animation and motion graphics",
      "YouTube channel optimization",
      "Video advertising campaigns",
    ],
    category: "marketing",
  },
  {
    id: "marketing-analytics",
    icon: TrendingUp,
    title: "Marketing Analytics",
    description:
      "Comprehensive data analysis and reporting to optimize your marketing performance in the Saudi market.",
    longDescription:
      "Our marketing analytics services provide deep insights into your marketing performance, helping you make data-driven decisions. We track, analyze, and report on key metrics to continuously optimize your marketing efforts.",
    benefits: [
      "Data-driven decision making",
      "Improved marketing ROI",
      "Clear performance visibility",
      "Identified improvement opportunities",
      "Optimized marketing budget allocation",
    ],
    features: [
      "Custom dashboard development",
      "Multi-channel tracking",
      "Conversion funnel analysis",
      "Competitor benchmarking",
      "Regular performance reporting",
    ],
    category: "marketing",
  },
  {
    id: "influencer-marketing",
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with Saudi influencers to amplify your brand message and reach targeted audiences.",
    longDescription:
      "We connect your brand with relevant Saudi influencers to expand your reach and build credibility. Our influencer marketing strategies identify the right partners, develop authentic campaigns, and measure real impact.",
    benefits: [
      "Expanded audience reach",
      "Enhanced brand credibility",
      "Authentic content creation",
      "Increased social engagement",
      "Access to niche markets",
    ],
    features: [
      "Influencer identification and vetting",
      "Campaign strategy development",
      "Content collaboration",
      "Performance tracking",
      "ROI measurement",
    ],
    category: "marketing",
  },
]

