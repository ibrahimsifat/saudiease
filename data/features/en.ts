import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Globe,
  Shield,
  Smartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "performance",
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimized websites and applications that load quickly and provide a smooth user experience.",
  },
  {
    id: "security",
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Built with security in mind to protect your business and customer data.",
  },
  {
    id: "responsive",
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Designs that look and function perfectly on all devices, from desktops to smartphones.",
  },
  {
    id: "local-expertise",
    icon: Globe,
    title: "Local Expertise",
    description:
      "Deep understanding of the Saudi market and cultural nuances for effective digital solutions.",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Strategic digital solutions designed to help your business grow and succeed.",
  },
  {
    id: "timely",
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Committed to delivering projects on time and within budget, every time.",
  },
];
