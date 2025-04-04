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
    title: "আল-মদিনা ই-কমার্স প্ল্যাটফর্ম",
    category: "ই-কমার্স",
    description:
      "একটি শীর্ষস্থানীয় সৌদি খুচরা বিক্রেতার জন্য একটি সম্পূর্ণ ই-কমার্স সমাধান, যাতে পণ্য ক্যাটালগ, নিরাপদ চেকআউট এবং গ্রাহক অ্যাকাউন্ট ব্যবস্থাপনা রয়েছে।",
    features: [
      "সব ডিভাইসের জন্য রেসপন্সিভ ডিজাইন",
      "স্থানীয় পেমেন্ট গেটওয়ের সাথে ইন্টিগ্রেশন",
      "আরবি এবং ইংরেজি ভাষা সমর্থন",
      "উন্নত পণ্য ফিল্টারিং এবং সার্চ",
      "গ্রাহক রিভিউ এবং রেটিং সিস্টেম",
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
        label: "কনভার্সন রেট",
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
        label: "গ্রাহক সন্তুষ্টি",
        value: "4.9/5",
      },
    ],
    link: "https://24deals.store/",
    client: "আল-মদিনা রিটেইল গ্রুপ",
    duration: "4 মাস",
    completionDate: "মার্চ ২০২৩",
    challenge:
      "আল-মদিনা রিটেইল গ্রুপের প্রয়োজন ছিল একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম যাতে তারা তাদের ব্যবসা অনলাইনে প্রসারিত করতে পারে এবং তাদের ব্র্যান্ড পরিচয় বজায় রাখতে পারে এবং গ্রাহকদের জন্য একটি নির্বিঘ্ন শপিং অভিজ্ঞতা প্রদান করতে পারে।",
    solution:
      "আমরা একটি কাস্টম ই-কমার্স প্ল্যাটফর্ম তৈরি করেছি যা ব্যবহারকারীর অভিজ্ঞতা, মোবাইল রেসপন্সিভনেস এবং স্থানীয় পেমেন্ট গেটওয়ের সাথে ইন্টিগ্রেশনের উপর ফোকাস করে। প্ল্যাটফর্মটিতে উন্নত পণ্য ফিল্টারিং, গ্রাহক রিভিউ এবং ইনভেন্টরি ব্যবস্থাপনার জন্য একটি শক্তিশালী অ্যাডমিন ড্যাশবোর্ড রয়েছে।",
    results:
      "লঞ্চের পর থেকে প্ল্যাটফর্মটিতে কনভার্সন রেট 45% বৃদ্ধি পেয়েছে এবং অনলাইন বিক্রয় উল্লেখযোগ্যভাবে বৃদ্ধি পেয়েছে। গ্রাহক প্রতিক্রিয়া অত্যন্ত ইতিবাচক হয়েছে, সন্তুষ্টি রেটিং 4.9/5।",
  },
  {
    id: 2,
    title: "রিয়াদ মেডিকেল সেন্টার ওয়েবসাইট",
    category: "স্বাস্থ্যসেবা",
    description:
      "রিয়াদের একটি শীর্ষস্থানীয় মেডিকেল সেন্টারের জন্য একটি আধুনিক, ব্যবহারকারী-বান্ধব ওয়েবসাইট, যাতে অ্যাপয়েন্টমেন্ট বুকিং, ডাক্তার প্রোফাইল এবং পরিষেবা তথ্য রয়েছে।",
    features: [
      "অনলাইন অ্যাপয়েন্টমেন্ট শিডিউলিং সিস্টেম",
      "ডাক্তার খোঁজা এবং ফিল্টারিং",
      "পরিষেবা তথ্য এবং মূল্য",
      "রোগীর সাক্ষ্য",
      "ক্লিনিক অবস্থানের ইন্টারেক্টিভ ম্যাপ",
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
        label: "অ্যাপয়েন্টমেন্ট বুকিং",
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
        label: "রোগী সন্তুষ্টি",
        value: "4.8/5",
      },
    ],
    link: "#",
    client: "রিয়াদ মেডিকেল সেন্টার",
    duration: "3 মাস",
    completionDate: "জানুয়ারি ২০২৩",
    challenge:
      "রিয়াদ মেডিকেল সেন্টারের প্রয়োজন ছিল তাদের অনলাইন উপস্থিতি আধুনিকীকরণ এবং অ্যাপয়েন্টমেন্ট বুকিং প্রক্রিয়া সহজীকরণ যাতে প্রশাসনিক কাজের চাপ কমানো যায় এবং রোগীর অভিজ্ঞতা উন্নত করা যায়।",
    solution:
      "আমরা একটি আধুনিক, ব্যবহারকারী-বান্ধব ওয়েবসাইট তৈরি করেছি যাতে একটি ইন্টিগ্রেটেড অ্যাপয়েন্টমেন্ট বুকিং সিস্টেম, বিস্তৃত ডাক্তার প্রোফাইল এবং পরিষেবা তথ্য রয়েছে। ওয়েবসাইটটি সম্পূর্ণ রেসপন্সিভ এবং আরবি ও ইংরেজি ব্যবহারকারীদের জন্য অপ্টিমাইজ করা হয়েছে।",
    results:
      "নতুন ওয়েবসাইটের ফলে অনলাইন অ্যাপয়েন্টমেন্ট বুকিং 120% বৃদ্ধি পেয়েছে এবং প্রশাসনিক কাজের চাপ উল্লেখযোগ্যভাবে কমেছে। রোগী সন্তুষ্টি 4.8/5 এ উন্নীত হয়েছে।",
  },
];
