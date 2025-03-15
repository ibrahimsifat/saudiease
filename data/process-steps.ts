import {
  Code,
  FileSearch,
  LifeBuoy,
  Lightbulb,
  PenTool,
  Rocket,
  TestTube,
} from "lucide-react";

export const processSteps = [
  {
    id: "discovery",
    title: {
      en: "Discovery & Planning",
      ar: "الاكتشاف والتخطيط",
      bn: "আবিষ্কার এবং পরিকল্পনা",
    },
    description: {
      en: "We begin by understanding your business goals, target audience, and specific requirements to create a detailed project roadmap.",
      ar: "نبدأ بفهم أهداف عملك والجمهور المستهدف والمتطلبات المحددة لإنشاء خارطة طريق مفصلة للمشروع.",
      bn: "আমরা আপনার ব্যবসার লক্ষ্য, টার্গেট অডিয়েন্স এবং নির্দিষ্ট প্রয়োজনীয়তা বুঝে একটি বিস্তারিত প্রকল্প রোডম্যাপ তৈরি করি।",
    },
    icon: FileSearch,
  },
  {
    id: "strategy",
    title: {
      en: "Strategy Development",
      ar: "تطوير الاستراتيجية",
      bn: "কৌশল উন্নয়ন",
    },
    description: {
      en: "We craft a comprehensive strategy tailored to your business needs and aligned with Saudi market requirements.",
      ar: "نقوم بصياغة استراتيجية شاملة مصممة خصيصًا لاحتياجات عملك ومتوافقة مع متطلبات السوق السعودي.",
      bn: "আমরা আপনার ব্যবসার প্রয়োজনীয়তা অনুযায়ী এবং সৌদি বাজারের প্রয়োজনীয়তার সাথে সামঞ্জস্যপূর্ণ একটি ব্যাপক কৌশল তৈরি করি।",
    },
    icon: Lightbulb,
  },
  {
    id: "design",
    title: {
      en: "Design & Prototyping",
      ar: "التصميم والنماذج الأولية",
      bn: "ডিজাইন এবং প্রোটোটাইপিং",
    },
    description: {
      en: "Our designers create visually appealing and user-friendly interfaces that reflect your brand identity and meet user expectations.",
      ar: "يقوم مصممونا بإنشاء واجهات جذابة بصريًا وسهلة الاستخدام تعكس هوية علامتك التجارية وتلبي توقعات المستخدم.",
      bn: "আমাদের ডিজাইনাররা দৃশ্যত আকর্ষণীয় এবং ব্যবহারকারী-বান্ধব ইন্টারফেস তৈরি করে যা আপনার ব্র্যান্ড আইডেন্টিটি প্রতিফলিত করে এবং ব্যবহারকারীর প্রত্যাশা পূরণ করে।",
    },
    icon: PenTool,
  },
  {
    id: "development",
    title: {
      en: "Development",
      ar: "التطوير",
      bn: "ডেভেলপমেন্ট",
    },
    description: {
      en: "Our expert developers build your solution using the latest technologies and best practices, ensuring high performance and scalability.",
      ar: "يقوم مطورونا الخبراء ببناء الحل الخاص بك باستخدام أحدث التقنيات وأفضل الممارسات، مما يضمن الأداء العالي وقابلية التوسع.",
      bn: "আমাদের বিশেষজ্ঞ ডেভেলপাররা সর্বাধুনিক প্রযুক্তি এবং সেরা অনুশীলন ব্যবহার করে আপনার সমাধান তৈরি করে, উচ্চ কার্যক্ষমতা এবং স্কেলেবিলিটি নিশ্চিত করে।",
    },
    icon: Code,
  },
  {
    id: "testing",
    title: {
      en: "Testing & Quality Assurance",
      ar: "الاختبار وضمان الجودة",
      bn: "টেস্টিং এবং কোয়ালিটি অ্যাসুরেন্স",
    },
    description: {
      en: "We rigorously test all aspects of your solution to ensure it meets the highest quality standards and functions flawlessly.",
      ar: "نختبر بدقة جميع جوانب الحل الخاص بك للتأكد من أنه يلبي أعلى معايير الجودة ويعمل بشكل مثالي.",
      bn: "আমরা আপনার সমাধানের সমস্ত দিক কঠোরভাবে পরীক্ষা করি যাতে এটি সর্বোচ্চ মানের মান পূরণ করে এবং নিখুঁতভাবে কাজ করে।",
    },
    icon: TestTube,
  },
  {
    id: "launch",
    title: {
      en: "Launch & Deployment",
      ar: "الإطلاق والنشر",
      bn: "লঞ্চ এবং ডেপ্লয়মেন্ট",
    },
    description: {
      en: "We handle the smooth deployment of your solution, ensuring a seamless transition and minimal disruption to your operations.",
      ar: "نتعامل مع النشر السلس للحل الخاص بك، مما يضمن انتقالًا سلسًا وحدًا أدنى من الاضطراب في عملياتك.",
      bn: "আমরা আপনার সমাধানের মসৃণ ডেপ্লয়মেন্ট পরিচালনা করি, নিরবচ্ছিন্ন ট্রানজিশন এবং আপনার অপারেশনে সর্বনিম্ন বিঘ্ন নিশ্চিত করি।",
    },
    icon: Rocket,
  },
  {
    id: "support",
    title: {
      en: "Ongoing Support",
      ar: "الدعم المستمر",
      bn: "চলমান সমর্থন",
    },
    description: {
      en: "We provide continuous support and maintenance to ensure your solution remains up-to-date, secure, and optimized for performance.",
      ar: "نقدم دعمًا وصيانة مستمرين لضمان بقاء الحل الخاص بك محدثًا وآمنًا ومحسنًا للأداء.",
      bn: "আমরা আপনার সমাধান আপ-টু-ডেট, সুরক্ষিত এবং কার্যক্ষমতার জন্য অপ্টিমাইজড থাকে তা নিশ্চিত করতে নিরন্তর সমর্থন এবং রক্ষণাবেক্ষণ প্রদান করি।",
    },
    icon: LifeBuoy,
  },
];
