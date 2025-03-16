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
    title: "أداء سريع",
    description:
      "مواقع وتطبيقات مُحسّنة يتم تحميلها بسرعة وتوفر تجربة مستخدم سلسة.",
  },
  {
    id: "security",
    icon: Shield,
    title: "حلول آمنة",
    description: "مبنية بأمان لحماية بيانات عملك وعملائك.",
  },
  {
    id: "responsive",
    icon: Smartphone,
    title: "استجابة للجوال",
    description:
      "تصميمات تبدو وتعمل بشكل مثالي على جميع الأجهزة، من أجهزة الكمبيوتر إلى الهواتف الذكية.",
  },
  {
    id: "local-expertise",
    icon: Globe,
    title: "الخبرة المحلية",
    description:
      "فهم عميق للسوق السعودي والفروق الثقافية لتقديم حلول رقمية فعالة.",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "مركز على النمو",
    description: "حلول رقمية استراتيجية مصممة لمساعدة عملك على النمو والنجاح.",
  },
  {
    id: "timely",
    icon: Clock,
    title: "التسليم في الوقت المحدد",
    description:
      "ملتزمون بتسليم المشاريع في الوقت المحدد وفي حدود الميزانية، في كل مرة.",
  },
];
