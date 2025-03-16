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
    title: "দ্রুত কর্মক্ষমতা",
    description:
      "অপ্টিমাইজড ওয়েবসাইট এবং অ্যাপ্লিকেশন যা দ্রুত লোড হয় এবং একটি মসৃণ ব্যবহারকারী অভিজ্ঞতা প্রদান করে।",
  },
  {
    id: "security",
    icon: Shield,
    title: "নিরাপদ সমাধান",
    description:
      "আপনার ব্যবসা এবং গ্রাহক তথ্য সুরক্ষিত করার জন্য নিরাপত্তা মাথায় রেখে তৈরি।",
  },
  {
    id: "responsive",
    icon: Smartphone,
    title: "মোবাইল প্রতিক্রিয়াশীল",
    description:
      "ডিজাইন যা ডেস্কটপ থেকে স্মার্টফোন পর্যন্ত সমস্ত ডিভাইসে নিখুঁতভাবে দেখতে এবং কাজ করে।",
  },
  {
    id: "local-expertise",
    icon: Globe,
    title: "স্থানীয় দক্ষতা",
    description:
      "সৌদি বাজার এবং সাংস্কৃতিক সূক্ষ্মতা সম্পর্কে গভীর বোঝাপড়া কার্যকর ডিজিটাল সমাধানের জন্য।",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "বৃদ্ধি-কেন্দ্রিক",
    description:
      "কৌশলগত ডিজিটাল সমাধান যা আপনার ব্যবসাকে বৃদ্ধি এবং সাফল্য অর্জনে সহায়তা করার জন্য ডিজাইন করা হয়েছে।",
  },
  {
    id: "timely",
    icon: Clock,
    title: "সময়মত বিতরণ",
    description:
      "প্রতিবার সময় এবং বাজেটের মধ্যে প্রকল্পগুলি বিতরণ করতে প্রতিশ্রুতিবদ্ধ।",
  },
];
