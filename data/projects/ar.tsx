import { CONSTANT } from "@/config/constants";
import type { JSX } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  mobileImage: string;
  stats: {
    icon: JSX.Element;
    label: string;
    value: string;
  }[];
  link: string;
  client?: string;
  duration?: string;
  completionDate?: string;
  testimonial?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

export const projects = [
  {
    id: 1,
    title: "منصة التجارة الإلكترونية للمدينة",
    category: "التجارة الإلكترونية",
    description:
      "حل شامل للتجارة الإلكترونية لتاجر سعودي رائد، يتضمن كتالوج المنتجات، عملية دفع آمنة، وإدارة حسابات العملاء.",
    features: [
      "تصميم متجاوب لجميع الأجهزة",
      "التكامل مع بوابات الدفع المحلية",
      "دعم اللغة العربية والإنجليزية",
      "تصفية متقدمة للمنتجات والبحث",
      "نظام تقييمات ومراجعات العملاء",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
    image: CONSTANT.images.project.eCommerce,
    mobileImage: CONSTANT.images.project.eCommerce,
    stats: [
      {
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
        label: "معدل التحويل",
        value: "+45%",
      },
      {
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ),
        label: "رضا العملاء",
        value: "4.9/5",
      },
    ],
    link: "https://24deals.store/",
    client: "مجموعة المدينة للتجزئة",
    duration: "4 أشهر",
    completionDate: "مارس 2023",
    challenge:
      "احتاجت مجموعة المدينة للتجزئة إلى منصة تجارة إلكترونية حديثة لتوسيع أعمالها عبر الإنترنت مع الحفاظ على هوية علامتها التجارية وتوفير تجربة تسوق سلسة لعملائها.",
    solution:
      "قمنا بتطوير منصة تجارة إلكترونية مخصصة مع التركيز على تجربة المستخدم، التجاوب مع الأجهزة المحمولة، والتكامل مع بوابات الدفع المحلية. تتضمن المنصة تصفية متقدمة للمنتجات، تقييمات العملاء، ولوحة تحكم قوية لإدارة المخزون.",
    results:
      "منذ الإطلاق، شهدت المنصة زيادة بنسبة 45% في معدلات التحويل وزيادة كبيرة في المبيعات عبر الإنترنت. كانت تعليقات العملاء إيجابية للغاية، مع تقييم رضا 4.9/5.",
  },
  {
    id: 2,
    title: "موقع مركز الرياض الطبي",
    category: "الرعاية الصحية",
    description:
      "موقع حديث وسهل الاستخدام لمركز طبي رائد في الرياض، يتضمن حجز المواعيد، ملفات الأطباء، ومعلومات الخدمات.",
    features: [
      "نظام حجز مواعيد عبر الإنترنت",
      "بحث وتصفية الأطباء",
      "معلومات الخدمات والأسعار",
      "شهادات المرضى",
      "خريطة تفاعلية لموقع العيادة",
    ],
    technologies: ["React", "Tailwind CSS", "Firebase", "Google Maps API"],
    image: CONSTANT.images.project.medicalCenter,
    mobileImage: CONSTANT.images.project.medicalCenter,
    stats: [
      {
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
        label: "حجوزات المواعيد",
        value: "+120%",
      },
      {
        icon: (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ),
        label: "رضا المرضى",
        value: "4.8/5",
      },
    ],
    link: "#",
    client: "مركز الرياض الطبي",
    duration: "3 أشهر",
    completionDate: "يناير 2023",
    challenge:
      "احتاج مركز الرياض الطبي إلى تحديث وجوده على الإنترنت وتبسيط عملية حجز المواعيد لتقليل العبء الإداري وتحسين تجربة المرضى.",
    solution:
      "قمنا بتطوير موقع حديث وسهل الاستخدام مع نظام حجز مواعيد متكامل، ملفات أطباء شاملة، ومعلومات تفصيلية عن الخدمات. الموقع متجاوب بالكامل ومُحسّن لكل من المستخدمين العرب والإنجليز.",
    results:
      "أدى الموقع الجديد إلى زيادة بنسبة 120% في حجوزات المواعيد عبر الإنترنت وتقليل كبير في العبء الإداري. تحسن رضا المرضى إلى 4.8/5 بناءً على استطلاعات ما بعد الموعد.",
  },
];
