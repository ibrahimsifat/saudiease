// Case studies (growth plan P1). Evidence rules:
// - Client names + links approved by the owner (2026-11-21): websites Saudi Ease built.
// - Everything else is what anyone can verify on the client's live site (2026-11-21):
//   the client's own service list, the site's sections, English language, Next.js.
// - No briefs, timelines, budgets, traffic or business results (not confirmed).

export type CaseStudyText = {
  pageTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  sector: string;
  clientTitle: string;
  clientBody: string;
  servicesTitle: string;
  services: string[];
  includesTitle: string;
  includes: string[];
  whyTitle: string;
  whyBody: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  url: string;
  screenshot: string;
  text: Record<string, CaseStudyText>;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cobalt-core-contracting",
    name: "Cobalt Core Contracting",
    url: "https://www.cobaltcorecont.com/",
    screenshot: "/images/clients/screenshorts/ccc.jpg",
    text: {
      ar: {
        pageTitle: "موقع Cobalt Core Contracting | أعمال سعودي إيز",
        metaDescription:
          "موقع شركة Cobalt Core Contracting للمقاولات وتوريد العمالة والمعدات والمواد: صفحة لكل خدمة وتحميل البروفايل وطلب عرض سعر وواتساب. من تصميم سعودي إيز.",
        h1: "موقع Cobalt Core Contracting",
        summary:
          "صمّمت سعودي إيز وطوّرت موقع شركة Cobalt Core Contracting، وهي شركة سعودية تقدم أعمال المقاولات وتوريد العمالة والمعدات والمواد. يعرض الموقع كل خدمة في صفحة مستقلة، مع تحميل بروفايل الشركة وطلب عرض سعر والتواصل عبر واتساب.",
        sector: "مقاولات وتوريد عمالة",
        clientTitle: "عن الشركة",
        clientBody:
          "Cobalt Core Contracting شركة تقدم خدمات إنشائية متكاملة، بحسب ما يعرضه موقعها: أعمال المقاولات، وتوريد العمالة، وتوريد المعدات، وتوريد المواد، والاستشارات للمشاريع.",
        servicesTitle: "الخدمات المعروضة في الموقع",
        services: ["أعمال المقاولات", "توريد العمالة", "توريد المعدات", "توريد المواد", "استشارات المشاريع"],
        includesTitle: "ما يتضمنه الموقع",
        includes: [
          "صفحة رئيسية تعرض الخدمات الأساسية",
          "صفحة مستقلة لكل خدمة",
          "صفحة عن الشركة وصفحة العملاء",
          "تحميل بروفايل الشركة",
          "نموذج طلب عرض سعر وبيانات تواصل لكل قسم",
          "زر واتساب للتواصل السريع",
        ],
        whyTitle: "لماذا هذا الترتيب لشركات المقاولات",
        whyBody:
          "مسؤول المشتريات يريد أن يعرف بسرعة ما تقدمه الشركة ومن تعاملت معه وكيف يتواصل معها. لذلك يضع الموقع الخدمات في صفحات واضحة، ويجعل البروفايل وطلب عرض السعر في متناول اليد من كل صفحة.",
      },
      en: {
        pageTitle: "Cobalt Core Contracting Website | Saudi Ease Work",
        metaDescription:
          "Website for Cobalt Core Contracting: contracting, manpower, equipment and material supply, a page per service, profile download, quote form and WhatsApp.",
        h1: "Cobalt Core Contracting website",
        summary:
          "Saudi Ease designed and built the website of Cobalt Core Contracting, a Saudi company offering contracting works and manpower, equipment and material supply. The site gives each service its own page, with a company profile download, a quote request and WhatsApp contact.",
        sector: "Contracting & manpower supply",
        clientTitle: "About the client",
        clientBody:
          "As its website describes, Cobalt Core Contracting provides integrated construction services: contracting works, manpower supply, equipment supply, material supply and project consultation.",
        servicesTitle: "Services shown on the site",
        services: ["Contracting works", "Manpower supply", "Equipment supply", "Material supply", "Project consultation"],
        includesTitle: "What the website includes",
        includes: [
          "Home page presenting the core services",
          "A dedicated page for each service",
          "About and clients pages",
          "Company profile download",
          "Quote request form and contact details per department",
          "WhatsApp button for quick contact",
        ],
        whyTitle: "Why this structure works for contractors",
        whyBody:
          "A procurement officer wants to see quickly what the company does, who it has worked with and how to reach it. So the site puts services on clear pages and keeps the company profile and quote request within reach from every page.",
      },
      bn: {
        pageTitle: "Cobalt Core Contracting ওয়েবসাইট | সৌদি ইজের কাজ",
        metaDescription:
          "Cobalt Core Contracting-এর ওয়েবসাইট: কনট্রাক্টিং, জনবল, যন্ত্রপাতি ও উপকরণ সরবরাহ, প্রতিটি সেবার পেজ, প্রোফাইল ডাউনলোড, কোটেশন ফর্ম ও WhatsApp।",
        h1: "Cobalt Core Contracting ওয়েবসাইট",
        summary:
          "সৌদি ইজ Cobalt Core Contracting-এর ওয়েবসাইট ডিজাইন ও তৈরি করেছে, যা কনট্রাক্টিং এবং জনবল, যন্ত্রপাতি ও উপকরণ সরবরাহকারী একটি সৌদি প্রতিষ্ঠান। সাইটে প্রতিটি সেবার আলাদা পেজ, প্রোফাইল ডাউনলোড, কোটেশন অনুরোধ ও WhatsApp যোগাযোগ আছে।",
        sector: "কনট্রাক্টিং ও জনবল সরবরাহ",
        clientTitle: "ক্লায়েন্ট সম্পর্কে",
        clientBody:
          "ওয়েবসাইট অনুযায়ী Cobalt Core Contracting সমন্বিত নির্মাণ সেবা দেয়: কনট্রাক্টিং, জনবল, যন্ত্রপাতি ও উপকরণ সরবরাহ এবং প্রকল্প পরামর্শ।",
        servicesTitle: "সাইটে দেখানো সেবা",
        services: ["কনট্রাক্টিং কাজ", "জনবল সরবরাহ", "যন্ত্রপাতি সরবরাহ", "উপকরণ সরবরাহ", "প্রকল্প পরামর্শ"],
        includesTitle: "ওয়েবসাইটে যা আছে",
        includes: ["মূল সেবাসহ হোম পেজ", "প্রতিটি সেবার আলাদা পেজ", "পরিচিতি ও ক্লায়েন্ট পেজ", "কোম্পানি প্রোফাইল ডাউনলোড", "কোটেশন ফর্ম ও যোগাযোগ তথ্য", "দ্রুত যোগাযোগের WhatsApp বাটন"],
        whyTitle: "কনট্রাক্টরদের জন্য এই কাঠামো কেন",
        whyBody:
          "ক্রয় কর্মকর্তা দ্রুত জানতে চান প্রতিষ্ঠান কী করে, কাদের সাথে কাজ করেছে এবং কীভাবে যোগাযোগ করা যায়। তাই সেবাগুলো স্পষ্ট পেজে এবং প্রোফাইল ও কোটেশন অনুরোধ প্রতিটি পেজ থেকে সহজে পাওয়া যায়।",
      },
    },
  },
  {
    slug: "solidcore-international",
    name: "Solidcore International",
    url: "https://www.solidcoreinternational.com.sa/",
    screenshot: "/images/clients/screenshorts/solidcore.jpg",
    text: {
      ar: {
        pageTitle: "موقع Solidcore International | أعمال سعودي إيز",
        metaDescription:
          "موقع شركة Solidcore International للمقاولات العامة: الأعمال المدنية والإنشائية والكهروميكانيكية وصفحات المشاريع والعملاء وتحميل البروفايل. من سعودي إيز.",
        h1: "موقع Solidcore International",
        summary:
          "صمّمت سعودي إيز وطوّرت موقع شركة Solidcore International للمقاولات العامة. يعرض الموقع خدمات الشركة ومشاريعها وعملاءها، مع تحميل البروفايل وطلب عرض سعر والتواصل عبر واتساب.",
        sector: "مقاولات عامة",
        clientTitle: "عن الشركة",
        clientBody:
          "Solidcore International شركة مقاولات عامة تقدم، بحسب موقعها، حلول إنشاء متكاملة تشمل الأعمال المدنية والإنشائية والميكانيكية والكهربائية والسباكة، إضافة إلى حلول التبريد والأتمتة وتوريد العمالة.",
        servicesTitle: "الخدمات المعروضة في الموقع",
        services: ["الأعمال الإنشائية", "الأعمال الميكانيكية", "حلول التبريد", "خدمات الأتمتة", "توريد العمالة"],
        includesTitle: "ما يتضمنه الموقع",
        includes: [
          "صفحة رئيسية بالخدمات والمشاريع",
          "صفحات الخدمات",
          "صفحة المشاريع",
          "صفحة العملاء",
          "تحميل بروفايل الشركة",
          "نموذج طلب عرض سعر وزر واتساب",
        ],
        whyTitle: "لماذا تهم صفحة المشاريع",
        whyBody:
          "لجان التأهيل تبحث عن مشاريع منفذة فعلاً. صفحة مشاريع مستقلة، مع صفحة عملاء وبروفايل قابل للتحميل، تعطي مسؤول المشتريات ما يحتاجه قبل أن يتواصل.",
      },
      en: {
        pageTitle: "Solidcore International Website | Saudi Ease Work",
        metaDescription:
          "Website for Solidcore International General Contracting: civil, structural and MEP services, projects and clients pages, profile download and quote form.",
        h1: "Solidcore International website",
        summary:
          "Saudi Ease designed and built the website of Solidcore International General Contracting Company. The site presents the company's services, projects and clients, with a profile download, a quote request and WhatsApp contact.",
        sector: "General contracting",
        clientTitle: "About the client",
        clientBody:
          "As its website describes, Solidcore International is a general contracting company providing integrated construction solutions, including civil, structural, mechanical, electrical and plumbing works, plus cooling solutions, automation and manpower supply.",
        servicesTitle: "Services shown on the site",
        services: ["Structure work", "Mechanical work", "Cooling solutions", "Automation services", "Manpower supply"],
        includesTitle: "What the website includes",
        includes: [
          "Home page with services and projects",
          "Service pages",
          "Projects page",
          "Clients page",
          "Company profile download",
          "Quote request form and WhatsApp button",
        ],
        whyTitle: "Why the projects page matters",
        whyBody:
          "Pre-qualification committees look for work that has actually been delivered. A separate projects page, with a clients page and a downloadable profile, gives a procurement officer what they need before they get in touch.",
      },
      bn: {
        pageTitle: "Solidcore International ওয়েবসাইট | সৌদি ইজের কাজ",
        metaDescription:
          "Solidcore International General Contracting-এর ওয়েবসাইট: সিভিল, স্ট্রাকচারাল ও MEP সেবা, প্রকল্প ও ক্লায়েন্ট পেজ, প্রোফাইল ডাউনলোড ও কোটেশন ফর্ম।",
        h1: "Solidcore International ওয়েবসাইট",
        summary:
          "সৌদি ইজ Solidcore International General Contracting Company-র ওয়েবসাইট ডিজাইন ও তৈরি করেছে। সাইটে প্রতিষ্ঠানের সেবা, প্রকল্প ও ক্লায়েন্ট, সাথে প্রোফাইল ডাউনলোড, কোটেশন অনুরোধ ও WhatsApp যোগাযোগ আছে।",
        sector: "জেনারেল কনট্রাক্টিং",
        clientTitle: "ক্লায়েন্ট সম্পর্কে",
        clientBody:
          "ওয়েবসাইট অনুযায়ী Solidcore International একটি জেনারেল কনট্রাক্টিং প্রতিষ্ঠান যা সিভিল, স্ট্রাকচারাল, মেকানিক্যাল, ইলেকট্রিক্যাল ও প্লাম্বিং কাজ, সাথে কুলিং, অটোমেশন ও জনবল সরবরাহ দেয়।",
        servicesTitle: "সাইটে দেখানো সেবা",
        services: ["স্ট্রাকচার কাজ", "মেকানিক্যাল কাজ", "কুলিং সমাধান", "অটোমেশন সেবা", "জনবল সরবরাহ"],
        includesTitle: "ওয়েবসাইটে যা আছে",
        includes: ["সেবা ও প্রকল্পসহ হোম পেজ", "সেবার পেজ", "প্রকল্প পেজ", "ক্লায়েন্ট পেজ", "কোম্পানি প্রোফাইল ডাউনলোড", "কোটেশন ফর্ম ও WhatsApp বাটন"],
        whyTitle: "প্রকল্প পেজ কেন গুরুত্বপূর্ণ",
        whyBody:
          "প্রি-কোয়ালিফিকেশন কমিটি বাস্তবে সম্পন্ন কাজ খোঁজে। আলাদা প্রকল্প পেজ, ক্লায়েন্ট পেজ ও ডাউনলোডযোগ্য প্রোফাইল যোগাযোগের আগেই ক্রয় কর্মকর্তাকে প্রয়োজনীয় তথ্য দেয়।",
      },
    },
  },
  {
    slug: "al-bishri-company",
    name: "Al Bishri Company",
    url: "https://www.albishriksa.com/",
    screenshot: "/images/clients/screenshorts/albishri.jpg",
    text: {
      ar: {
        pageTitle: "موقع شركة البشري (Al Bishri) | أعمال سعودي إيز",
        metaDescription:
          "موقع شركة محمد عبدالحميد البشري: الأعمال الكهروميكانيكية وحلول توفير الطاقة والأعمال المدنية والمعدات الثقيلة، مع صفحات المشاريع والعملاء. من سعودي إيز.",
        h1: "موقع شركة البشري (Al Bishri Company)",
        summary:
          "صمّمت سعودي إيز وطوّرت موقع شركة محمد عبدالحميد البشري (Al Bishri Company). يعرض الموقع خدمات الشركة الإنشائية والصناعية ومشاريعها وعملاءها، مع طلب عرض سعر والتواصل عبر واتساب.",
        sector: "مقاولات وخدمات صناعية",
        clientTitle: "عن الشركة",
        clientBody:
          "تقدم شركة محمد عبدالحميد البشري، بحسب موقعها، خدمات إنشائية وصناعية تشمل الأعمال الكهروميكانيكية، وحلول توفير الطاقة، والأعمال المدنية، والمقاولات العامة، والمعدات الثقيلة.",
        servicesTitle: "الخدمات المعروضة في الموقع",
        services: ["الأعمال الكهروميكانيكية", "حلول توفير الطاقة", "الأعمال المدنية", "المقاولات العامة", "المعدات الثقيلة"],
        includesTitle: "ما يتضمنه الموقع",
        includes: [
          "صفحة رئيسية بالخدمات والمشاريع",
          "صفحات الخدمات",
          "صفحة المشاريع",
          "صفحة العملاء",
          "نموذج طلب عرض سعر",
          "زر واتساب وبيانات تواصل",
        ],
        whyTitle: "موقع لشركة متعددة الخدمات",
        whyBody:
          "عندما تقدم الشركة خدمات متنوعة من الأعمال المدنية إلى المعدات الثقيلة، يجب أن يجد كل زائر خدمته بسرعة. لذلك يرتّب الموقع الخدمات في صفحات منفصلة ويربطها بالمشاريع والعملاء.",
      },
      en: {
        pageTitle: "Al Bishri Company Website | Saudi Ease Work",
        metaDescription:
          "Website for Al Bishri Company: electro-mechanical, energy saving, civil works, general contracting and heavy equipment, with projects and clients pages.",
        h1: "Al Bishri Company website",
        summary:
          "Saudi Ease designed and built the website of Mohammed Abdul Hamid Al-Bishri Company (Al Bishri Company). The site presents the company's construction and industrial services, projects and clients, with a quote request and WhatsApp contact.",
        sector: "Contracting & industrial services",
        clientTitle: "About the client",
        clientBody:
          "As its website describes, Mohammed Abdul Hamid Al-Bishri Company provides construction and industrial services, including electro-mechanical works, energy saving solutions, civil works, general contracting and heavy equipment.",
        servicesTitle: "Services shown on the site",
        services: ["Electro-mechanical works", "Energy saving solutions", "Civil works", "General contracting", "Heavy equipment"],
        includesTitle: "What the website includes",
        includes: [
          "Home page with services and projects",
          "Service pages",
          "Projects page",
          "Clients page",
          "Quote request form",
          "WhatsApp button and contact details",
        ],
        whyTitle: "A website for a multi-service company",
        whyBody:
          "When a company offers everything from civil works to heavy equipment, every visitor should find their service quickly. So the site lays out services on separate pages and connects them to projects and clients.",
      },
      bn: {
        pageTitle: "Al Bishri Company ওয়েবসাইট | সৌদি ইজের কাজ",
        metaDescription:
          "Al Bishri Company-র ওয়েবসাইট: ইলেক্ট্রো-মেকানিক্যাল কাজ, জ্বালানি সাশ্রয়, সিভিল কাজ, জেনারেল কনট্রাক্টিং ও ভারী যন্ত্রপাতি, প্রকল্প ও ক্লায়েন্ট পেজসহ।",
        h1: "Al Bishri Company ওয়েবসাইট",
        summary:
          "সৌদি ইজ Mohammed Abdul Hamid Al-Bishri Company (Al Bishri Company)-র ওয়েবসাইট ডিজাইন ও তৈরি করেছে। সাইটে প্রতিষ্ঠানের নির্মাণ ও শিল্প সেবা, প্রকল্প ও ক্লায়েন্ট, সাথে কোটেশন অনুরোধ ও WhatsApp যোগাযোগ আছে।",
        sector: "কনট্রাক্টিং ও শিল্প সেবা",
        clientTitle: "ক্লায়েন্ট সম্পর্কে",
        clientBody:
          "ওয়েবসাইট অনুযায়ী প্রতিষ্ঠানটি নির্মাণ ও শিল্প সেবা দেয়: ইলেক্ট্রো-মেকানিক্যাল কাজ, জ্বালানি সাশ্রয়ী সমাধান, সিভিল কাজ, জেনারেল কনট্রাক্টিং ও ভারী যন্ত্রপাতি।",
        servicesTitle: "সাইটে দেখানো সেবা",
        services: ["ইলেক্ট্রো-মেকানিক্যাল কাজ", "জ্বালানি সাশ্রয়ী সমাধান", "সিভিল কাজ", "জেনারেল কনট্রাক্টিং", "ভারী যন্ত্রপাতি"],
        includesTitle: "ওয়েবসাইটে যা আছে",
        includes: ["সেবা ও প্রকল্পসহ হোম পেজ", "সেবার পেজ", "প্রকল্প পেজ", "ক্লায়েন্ট পেজ", "কোটেশন অনুরোধ ফর্ম", "WhatsApp বাটন ও যোগাযোগ তথ্য"],
        whyTitle: "বহুমুখী সেবার প্রতিষ্ঠানের ওয়েবসাইট",
        whyBody:
          "সিভিল কাজ থেকে ভারী যন্ত্রপাতি পর্যন্ত নানা সেবা থাকলে প্রত্যেক ভিজিটরের দ্রুত নিজের সেবা খুঁজে পাওয়া দরকার। তাই সাইট সেবাগুলো আলাদা পেজে সাজিয়ে প্রকল্প ও ক্লায়েন্টের সাথে যুক্ত করে।",
      },
    },
  },
];

export const CASE_STUDY_UI: Record<string, {
  breadcrumbHome: string; breadcrumbPortfolio: string; visitSite: string; builtWith: string;
  language: string; sectorLabel: string; ctaTitle: string; ctaText: string; whatsapp: string;
  related: string; readCase: string; caseStudies: string; caseStudiesIntro: string;
}> = {
  ar: {
    breadcrumbHome: "الرئيسية", breadcrumbPortfolio: "أعمالنا", visitSite: "زيارة الموقع",
    builtWith: "التقنية", language: "لغة الموقع", sectorLabel: "القطاع",
    ctaTitle: "تريد موقعاً مثل هذا لشركتك؟", ctaText: "أرسل لنا اسم شركتك وما تحتاجه على واتساب، ونحدد موعداً في الخبر أو الدمام أو عن بُعد.",
    whatsapp: "راسلنا على واتساب", related: "خدمة تصميم مواقع شركات المقاولات ←", readCase: "اقرأ دراسة الحالة",
    caseStudies: "مواقع بنيناها لشركات مقاولات", caseStudiesIntro: "دراسات حالة لمواقع صممناها وطورناها. الروابط تفتح مواقع العملاء الحالية.",
  },
  en: {
    breadcrumbHome: "Home", breadcrumbPortfolio: "Portfolio", visitSite: "Visit website",
    builtWith: "Built with", language: "Site language", sectorLabel: "Sector",
    ctaTitle: "Want a website like this for your company?", ctaText: "Send us your company name and what you need on WhatsApp, and we'll book a meeting in Al Khobar, Dammam or online.",
    whatsapp: "WhatsApp us", related: "Websites for contracting companies →", readCase: "Read the case study",
    caseStudies: "Websites we built for contracting companies", caseStudiesIntro: "Case studies of websites we designed and built. The links open the clients' current sites.",
  },
  bn: {
    breadcrumbHome: "হোম", breadcrumbPortfolio: "আমাদের কাজ", visitSite: "ওয়েবসাইট দেখুন",
    builtWith: "প্রযুক্তি", language: "সাইটের ভাষা", sectorLabel: "খাত",
    ctaTitle: "আপনার প্রতিষ্ঠানের জন্য এমন ওয়েবসাইট চান?", ctaText: "WhatsApp-এ কোম্পানির নাম ও প্রয়োজন জানান, আমরা আল খোবার, দাম্মাম বা অনলাইনে মিটিং ঠিক করব।",
    whatsapp: "WhatsApp করুন", related: "কনট্রাক্টিং প্রতিষ্ঠানের ওয়েবসাইট →", readCase: "কেস স্টাডি পড়ুন",
    caseStudies: "কনট্রাক্টিং প্রতিষ্ঠানের জন্য আমাদের তৈরি ওয়েবসাইট", caseStudiesIntro: "আমাদের ডিজাইন ও তৈরি করা ওয়েবসাইটের কেস স্টাডি। লিংক ক্লায়েন্টদের বর্তমান সাইট খোলে।",
  },
};

export const SITE_LANGUAGE: Record<string, string> = { ar: "الإنجليزية", en: "English", bn: "ইংরেজি" };
