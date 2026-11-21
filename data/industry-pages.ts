// Industry pages (MASTER-PLAN task 3-8). Only industries with real delivery history.
// Evidence (docs/seo/business-goals.md, owner 2026-11-21): we built the websites of
// Cobalt Core Contracting, Solidcore International and Al Bishri Company and may name
// them with links (no results, quotes or metrics). Services presented: website,
// company profile, ZATCA e-invoicing setup. Office Al Khobar; meetings Khobar/Dammam.

export type IndustryPage = {
  pageTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  industryName: string;
  breadcrumbHome: string;
  breadcrumbIndustries: string;
  facts: { title: string; rows: { label: string; value: string }[] };
  servicesTitle: string;
  services: { id: string; name: string; text: string }[];
  sections: { title: string; body: string[] }[];
  workTitle: string;
  workIntro: string;
  visitSite: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappLabel: string;
  callLabel: string;
};

export const INDUSTRY_ID = "contracting-construction";

export const INDUSTRY_CLIENTS = [
  { name: "Cobalt Core Contracting", url: "https://www.cobaltcorecont.com/", screenshot: "/images/clients/screenshorts/ccc.jpg" },
  { name: "Solidcore International", url: "https://solidcoreinternational.com.sa", screenshot: "/images/clients/screenshorts/solidcore.jpg" },
  { name: "Al Bishri Company", url: "https://albishriksa.com", screenshot: "/images/clients/screenshorts/albishri.jpg" },
];

export const INDUSTRY_PAGES: Record<string, IndustryPage> = {
  ar: {
    pageTitle: "تصميم موقع شركة مقاولات وبروفايل | سعودي إيز",
    metaDescription:
      "تصميم مواقع وبروفايلات شركات المقاولات والإنشاءات للتأهيل المسبق والمناقصات، وتجهيز الفوترة الإلكترونية. من أعمالنا مواقع ثلاث شركات مقاولات سعودية.",
    h1: "تصميم موقع شركة مقاولات",
    answer:
      "تصمّم سعودي إيز مواقع وبروفايلات شركات المقاولات والإنشاءات بالعربية والإنجليزية، بحيث يجد مسؤول المشتريات ولجنة التأهيل ما يبحثون عنه بسرعة: الخدمات والمشاريع والمعدات والسجل. ونجهّز أيضاً الفوترة الإلكترونية المتوافقة مع زاتكا. من أعمالنا مواقع Cobalt Core Contracting وSolidcore International وAl Bishri Company.",
    industryName: "المقاولات والإنشاءات",
    breadcrumbHome: "الرئيسية",
    breadcrumbIndustries: "القطاعات",
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "لمن", value: "شركات المقاولات العامة والإنشاءات والتوريد للمشاريع" },
        { label: "الخدمات", value: "موقع الشركة، بروفايل الشركة، تجهيز الفوترة الإلكترونية (زاتكا)" },
        { label: "من أعمالنا", value: "مواقع Cobalt Core Contracting وSolidcore International وAl Bishri Company" },
        { label: "أين", value: "مكتبنا في الخبر؛ اجتماعات في الخبر والدمام؛ عن بُعد في باقي المملكة" },
        { label: "السعر", value: "عرض سعر مكتوب بعد الاجتماع الأول (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    servicesTitle: "ما نقدمه لشركات المقاولات",
    services: [
      { id: "website-design-development", name: "موقع شركة المقاولات", text: "موقع بالعربية والإنجليزية يعرض الخدمات ونطاق العمل والمشاريع بصور حقيقية، مع رابط تحميل البروفايل ولوحة تحكم لإضافة المشاريع." },
      { id: "company-profile-branding", name: "بروفايل شركة المقاولات", text: "بروفايل جاهز للتأهيل المسبق والمناقصات، نبنيه من مستنداتك ومشاريعك الحقيقية ونكتب نصوصه معك." },
      { id: "zatca-e-invoicing", name: "الفوترة الإلكترونية (زاتكا)", text: "نجهّز ونربط برنامج فوترة متوافقاً مع المرحلتين الأولى والثانية، ونختبره قبل التشغيل." },
    ],
    sections: [
      {
        title: "ما يبحث عنه مسؤول المشتريات في موقع شركة المقاولات",
        body: [
          "قبل أن يتصل بك أحد، يراجع مسؤول المشتريات أو لجنة التأهيل موقعك وبروفايلك. يريدون أن يعرفوا بسرعة: ما الأعمال التي تنفذها، وأين نفّذتها، وما المعدات والفرق المتاحة لديك، وهل بيانات السجل والتواصل واضحة.",
          "لذلك نرتّب موقع شركة المقاولات حول هذه الأسئلة: صفحة للخدمات ونطاق العمل، وصفحة مشاريع بصور حقيقية، وصفحة للمعدات أو الفرق إن أردت، وصفحة تعريفية بالشركة وبياناتها، ورابط واضح لتحميل البروفايل.",
        ],
      },
      {
        title: "الموقع والبروفايل بهوية واحدة",
        body: [
          "غالباً يُطلب البروفايل بعد زيارة الموقع، أو العكس. عندما نصمّم الاثنين معاً بالهوية والمحتوى نفسيهما، تظهر شركتك بصورة واحدة في كل مكان، ويسهل تحديث المشاريع في الموقع والبروفايل معاً.",
        ],
      },
      {
        title: "الفوترة الإلكترونية لشركات المقاولات",
        body: [
          "شركات المقاولات تصدر غالباً فواتير ضريبية لشركات أخرى، وهذه تحتاج اعتماد هيئة الزكاة والضريبة والجمارك قبل إرسالها للعميل في المرحلة الثانية. نجهّز ونربط برنامج فوترة متوافقاً من جهة أخرى ونختبره، ولسنا مزود حلول مدرجاً لدى زاتكا.",
        ],
      },
      {
        title: "ماذا تجهّز قبل أن نبدأ",
        body: [
          "لا تحتاج أن يكون كل شيء جاهزاً، لكن هذه الأشياء تختصر الوقت: الشعار، والسجل التجاري، وقائمة المشاريع المنفذة مع صورها وأسماء العملاء التي يسمحون بذكرها، وقائمة المعدات والآليات، والشهادات التي تحملها الشركة، وبروفايل الشركة الحالي إن وُجد.",
          "إذا كانت المعلومات متفرقة في رسائل وملفات، نجمعها معك في الاجتماع الأول ونحدد ما ينقص، ثم نكتب النصوص ونرسلها لك لتراجعها قبل التصميم.",
        ],
      },
      {
        title: "العربية والإنجليزية لفرق المشتريات",
        body: [
          "كثير من فرق المشتريات في الشركات الكبرى في المنطقة الشرقية تعمل بالإنجليزية، بينما يبحث عملاء آخرون بالعربية. لذلك نبني موقع شركة المقاولات وبروفايلها باللغتين من البداية، بنصوص مكتوبة لكل لغة لا ترجمة حرفية، مع اتجاه صحيح للنص العربي وأسماء المشاريع والعملاء كما هي في العقود.",
        ],
      },
      {
        title: "تحديث المشاريع باستمرار",
        body: [
          "أقوى ما في موقع شركة المقاولات هو قائمة المشاريع الحديثة. نبني لوحة تحكم تضيف منها مشروعاً جديداً بصوره ووصفه في دقائق، وندرّب من سيتولى ذلك في شركتك. وعند تحديث البروفايل، نستخدم المحتوى نفسه حتى يبقى الموقع والبروفايل متطابقين.",
        ],
      },
    ],
    workTitle: "مواقع بنيناها لشركات مقاولات",
    workIntro: "من أعمالنا مواقع هذه الشركات. الروابط تفتح مواقعهم الحالية.",
    visitSite: "زيارة الموقع",
    faqTitle: "أسئلة شائعة من شركات المقاولات",
    faqs: [
      { question: "ماذا يجب أن يحتوي موقع شركة المقاولات؟", answer: "الخدمات ونطاق العمل، والمشاريع المنفذة بصور حقيقية، والمعدات والفرق إن أردت، وبيانات السجل والتواصل، ورابط تحميل البروفايل، باللغتين العربية والإنجليزية." },
      { question: "هل تصممون الموقع والبروفايل معاً؟", answer: "نعم، بهوية ومحتوى متسقين، ويمكن طلب أحدهما فقط." },
      { question: "هل يمكننا إضافة مشاريع جديدة بأنفسنا؟", answer: "نعم، نبني لوحة تحكم بسيطة لإضافة المشاريع والصور وندرّب من سيديرها." },
      { question: "هل تساعدون في الفوترة الإلكترونية لشركات المقاولات؟", answer: "نعم، نجهّز ونربط برنامج فوترة متوافقاً مع متطلبات زاتكا. لسنا مزود حلول مدرجاً لدى الهيئة ولا نقدم استشارات ضريبية." },
      { question: "هل لديكم أمثلة لمواقع شركات مقاولات؟", answer: "نعم، من أعمالنا مواقع Cobalt Core Contracting وSolidcore International وAl Bishri Company، وروابطها في هذه الصفحة." },
      { question: "كم التكلفة؟", answer: "لا ننشر أسعاراً ثابتة. نرسل عرض سعر مكتوباً بعد الاجتماع الأول حسب حجم الموقع والبروفايل والخدمات المطلوبة." },
    ],
    ctaTitle: "ابدأ موقع أو بروفايل شركتك",
    ctaText: "أرسل لنا اسم شركتك وما تحتاجه على واتساب، ونحدد موعداً في الخبر أو الدمام أو عن بُعد.",
    whatsappLabel: "راسلنا على واتساب",
    callLabel: "اتصل بنا",
  },

  en: {
    pageTitle: "Website & Company Profile for Contractors | Saudi Ease",
    metaDescription:
      "Websites and company profiles for contracting and construction companies, built for pre-qualification and tenders, plus ZATCA e-invoicing setup.",
    h1: "Websites and Company Profiles for Contracting Companies",
    answer:
      "Saudi Ease designs Arabic/English websites and company profiles for contracting and construction companies, so procurement officers and pre-qualification committees quickly find what they look for: services, projects, equipment and company details. We also set up ZATCA-compliant e-invoicing. Our work includes the websites of Cobalt Core Contracting, Solidcore International and Al Bishri Company.",
    industryName: "Contracting & Construction",
    breadcrumbHome: "Home",
    breadcrumbIndustries: "Industries",
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "For", value: "General contractors, construction and project supply companies" },
        { label: "Services", value: "Company website, company profile, ZATCA e-invoicing setup" },
        { label: "Our work", value: "Websites for Cobalt Core Contracting, Solidcore International and Al Bishri Company" },
        { label: "Where", value: "Office in Al Khobar; meetings in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "Price", value: "Written quote after the first meeting (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    servicesTitle: "What we do for contracting companies",
    services: [
      { id: "website-design-development", name: "Contractor website", text: "An Arabic/English site showing your services, scope of work and projects with real photos, a profile download link and an admin panel to add projects." },
      { id: "company-profile-branding", name: "Contractor company profile", text: "A profile ready for pre-qualification and tenders, built from your real documents and projects, with the text written together with you." },
      { id: "zatca-e-invoicing", name: "ZATCA e-invoicing setup", text: "We set up and integrate invoicing software that meets Phase 1 and Phase 2 requirements, and test it before go-live." },
    ],
    sections: [
      {
        title: "What a procurement officer looks for on a contractor's website",
        body: [
          "Before anyone calls you, a procurement officer or pre-qualification committee reviews your website and profile. They want to know quickly: what work you do, where you have done it, what equipment and teams you have, and whether your CR and contact details are clear.",
          "So we organise a contractor's website around those questions: a services and scope page, a projects page with real photos, an equipment or teams page if you want one, an about page with company details, and a clear link to download the company profile.",
        ],
      },
      {
        title: "Website and profile in one identity",
        body: [
          "The profile is often requested after someone visits the website, or the other way round. When we design both together with the same identity and content, your company looks the same everywhere, and projects are easy to update in both.",
        ],
      },
      {
        title: "E-invoicing for contracting companies",
        body: [
          "Contractors usually issue standard tax invoices to other companies, and in Phase 2 these must be cleared by ZATCA before they reach the client. We set up and integrate compliant third-party invoicing software and test it; we are not a ZATCA-listed solution provider.",
        ],
      },
      {
        title: "What to prepare before we start",
        body: [
          "Not everything has to be ready, but these save time: your logo, CR, a list of completed projects with photos and the client names you are allowed to mention, a list of equipment and machinery, the certificates the company holds, and your current company profile if you have one.",
          "If the information is spread across messages and files, we collect it with you in the first meeting and note what is missing, then write the text and send it to you to review before design.",
        ],
      },
      {
        title: "Arabic and English for procurement teams",
        body: [
          "Many procurement teams at large companies in the Eastern Province work in English, while other clients search in Arabic. So we build a contractor's website and profile in both languages from the start, with text written for each language rather than translated word for word, correct right-to-left Arabic, and project and client names exactly as they appear in your contracts.",
        ],
      },
      {
        title: "Keeping projects up to date",
        body: [
          "The strongest part of a contractor's website is a current project list. We build an admin panel where you add a new project with photos and a description in minutes, and train whoever will do it in your company. When the profile is updated, we use the same content, so the website and profile stay in step.",
        ],
      },
    ],
    workTitle: "Websites we built for contracting companies",
    workIntro: "Our work includes the websites of these companies. The links open their current sites.",
    visitSite: "Visit website",
    faqTitle: "Questions from contracting companies",
    faqs: [
      { question: "What should a contracting company website include?", answer: "Services and scope of work, completed projects with real photos, equipment and teams if you want, CR and contact details, and a profile download link, in Arabic and English." },
      { question: "Do you design the website and the profile together?", answer: "Yes, with consistent identity and content; you can also order just one of them." },
      { question: "Can we add new projects ourselves?", answer: "Yes. We build a simple admin panel for projects and photos and train whoever will manage it." },
      { question: "Do you help contractors with e-invoicing?", answer: "Yes. We set up and integrate invoicing software that meets ZATCA requirements. We are not a ZATCA-listed provider and we don't give tax advice." },
      { question: "Do you have examples of contractor websites?", answer: "Yes. Our work includes the websites of Cobalt Core Contracting, Solidcore International and Al Bishri Company, linked on this page." },
      { question: "How much does it cost?", answer: "We don't publish fixed prices. You get a written quote after the first meeting, based on the size of the website, profile and services you need." },
    ],
    ctaTitle: "Start your company website or profile",
    ctaText: "Send us your company name and what you need on WhatsApp, and we'll book a meeting in Al Khobar, Dammam or online.",
    whatsappLabel: "WhatsApp us",
    callLabel: "Call us",
  },

  bn: {
    pageTitle: "কনট্রাক্টিং কোম্পানির ওয়েবসাইট ও প্রোফাইল | সৌদি ইজ",
    metaDescription:
      "প্রি-কোয়ালিফিকেশন ও টেন্ডারের জন্য কনট্রাক্টিং ও নির্মাণ প্রতিষ্ঠানের ওয়েবসাইট ও কোম্পানি প্রোফাইল, সাথে ZATCA ই-ইনভয়েসিং সেটআপ।",
    h1: "কনট্রাক্টিং কোম্পানির ওয়েবসাইট ও প্রোফাইল",
    answer:
      "সৌদি ইজ কনট্রাক্টিং ও নির্মাণ প্রতিষ্ঠানের জন্য আরবি/ইংরেজি ওয়েবসাইট ও কোম্পানি প্রোফাইল তৈরি করে, যাতে ক্রয় কর্মকর্তা ও প্রি-কোয়ালিফিকেশন কমিটি দ্রুত সেবা, প্রকল্প, যন্ত্রপাতি ও প্রতিষ্ঠানের তথ্য খুঁজে পান। আমরা ZATCA-সম্মত ই-ইনভয়েসিংও সেটআপ করি। আমাদের কাজের মধ্যে আছে Cobalt Core Contracting, Solidcore International ও Al Bishri Company-র ওয়েবসাইট।",
    industryName: "কনট্রাক্টিং ও নির্মাণ",
    breadcrumbHome: "হোম",
    breadcrumbIndustries: "খাত",
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "কাদের জন্য", value: "জেনারেল কনট্রাক্টর, নির্মাণ ও প্রকল্প সরবরাহ প্রতিষ্ঠান" },
        { label: "সেবা", value: "কোম্পানি ওয়েবসাইট, কোম্পানি প্রোফাইল, ZATCA ই-ইনভয়েসিং সেটআপ" },
        { label: "আমাদের কাজ", value: "Cobalt Core Contracting, Solidcore International ও Al Bishri Company-র ওয়েবসাইট" },
        { label: "কোথায়", value: "অফিস আল খোবারে; আল খোবার ও দাম্মামে মিটিং; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "মূল্য", value: "প্রথম মিটিংয়ের পরে লিখিত কোটেশন" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    servicesTitle: "কনট্রাক্টিং প্রতিষ্ঠানের জন্য আমরা যা করি",
    services: [
      { id: "website-design-development", name: "কনট্রাক্টরের ওয়েবসাইট", text: "আসল ছবিসহ সেবা, কাজের পরিধি ও প্রকল্প দেখানো আরবি/ইংরেজি সাইট, প্রোফাইল ডাউনলোড লিংক ও প্রকল্প যোগের অ্যাডমিন প্যানেল।" },
      { id: "company-profile-branding", name: "কনট্রাক্টরের কোম্পানি প্রোফাইল", text: "প্রি-কোয়ালিফিকেশন ও টেন্ডারের জন্য প্রস্তুত প্রোফাইল, আপনার আসল কাগজপত্র ও প্রকল্প থেকে তৈরি।" },
      { id: "zatca-e-invoicing", name: "ZATCA ই-ইনভয়েসিং সেটআপ", text: "ফেজ ১ ও ফেজ ২-এর প্রয়োজনীয়তা পূরণকারী সফটওয়্যার সেটআপ ও ইন্টিগ্রেশন, চালুর আগে পরীক্ষাসহ।" },
    ],
    sections: [
      {
        title: "কনট্রাক্টরের ওয়েবসাইটে ক্রয় কর্মকর্তা কী খোঁজেন",
        body: [
          "কেউ ফোন করার আগে ক্রয় কর্মকর্তা বা প্রি-কোয়ালিফিকেশন কমিটি আপনার ওয়েবসাইট ও প্রোফাইল দেখেন। তারা দ্রুত জানতে চান: কী কাজ করেন, কোথায় করেছেন, কী যন্ত্রপাতি ও টিম আছে, এবং CR ও যোগাযোগের তথ্য স্পষ্ট কি না।",
          "তাই আমরা এই প্রশ্নগুলো ঘিরে সাইট সাজাই: সেবা ও কাজের পরিধি, আসল ছবিসহ প্রকল্প, প্রয়োজনে যন্ত্রপাতি বা টিম, প্রতিষ্ঠানের পরিচয় এবং প্রোফাইল ডাউনলোডের স্পষ্ট লিংক।",
        ],
      },
      {
        title: "একই পরিচয়ে ওয়েবসাইট ও প্রোফাইল",
        body: [
          "দুটো একসাথে একই পরিচয় ও কনটেন্টে ডিজাইন করলে আপনার প্রতিষ্ঠান সব জায়গায় একরকম দেখায়, এবং দুটোতেই প্রকল্প হালনাগাদ করা সহজ হয়।",
        ],
      },
      {
        title: "কনট্রাক্টিং প্রতিষ্ঠানের ই-ইনভয়েসিং",
        body: [
          "কনট্রাক্টররা সাধারণত অন্য প্রতিষ্ঠানকে ট্যাক্স ইনভয়েস দেন, যা ফেজ ২-এ ক্লায়েন্টের কাছে যাওয়ার আগে ZATCA ক্লিয়ার করে। আমরা তৃতীয় পক্ষের সম্মত সফটওয়্যার সেটআপ ও পরীক্ষা করি; আমরা ZATCA-তালিকাভুক্ত প্রোভাইডার নই।",
        ],
      },
      {
        title: "শুরুর আগে কী প্রস্তুত করবেন",
        body: [
          "সবকিছু প্রস্তুত থাকা জরুরি নয়, তবে এগুলো সময় বাঁচায়: লোগো, CR, ছবিসহ সম্পন্ন প্রকল্পের তালিকা ও যেসব ক্লায়েন্টের নাম উল্লেখের অনুমতি আছে, যন্ত্রপাতির তালিকা, প্রতিষ্ঠানের সার্টিফিকেট এবং বর্তমান কোম্পানি প্রোফাইল থাকলে সেটি।",
          "তথ্য মেসেজ ও ফাইলে ছড়ানো থাকলে প্রথম মিটিংয়ে আপনার সাথে সংগ্রহ করি, কী নেই তা চিহ্নিত করি, তারপর লেখা তৈরি করে ডিজাইনের আগে রিভিউয়ের জন্য পাঠাই।",
        ],
      },
      {
        title: "ক্রয় দলের জন্য আরবি ও ইংরেজি",
        body: [
          "পূর্বাঞ্চলের বড় প্রতিষ্ঠানের অনেক ক্রয় দল ইংরেজিতে কাজ করে, আবার অন্য ক্লায়েন্টরা আরবিতে খোঁজেন। তাই আমরা শুরু থেকেই দুই ভাষায় ওয়েবসাইট ও প্রোফাইল তৈরি করি, আক্ষরিক অনুবাদ নয়, প্রতিটি ভাষার জন্য আলাদা লেখা, এবং চুক্তিতে যেভাবে আছে সেভাবেই প্রকল্প ও ক্লায়েন্টের নাম।",
        ],
      },
      {
        title: "প্রকল্প নিয়মিত হালনাগাদ রাখা",
        body: [
          "কনট্রাক্টরের ওয়েবসাইটের সবচেয়ে শক্তিশালী অংশ হলো সাম্প্রতিক প্রকল্পের তালিকা। আমরা এমন অ্যাডমিন প্যানেল তৈরি করি যেখান থেকে কয়েক মিনিটে ছবি ও বিবরণসহ নতুন প্রকল্প যোগ করা যায়, এবং দায়িত্বপ্রাপ্ত কর্মীকে প্রশিক্ষণ দিই।",
        ],
      },
    ],
    workTitle: "কনট্রাক্টিং প্রতিষ্ঠানের জন্য আমাদের তৈরি ওয়েবসাইট",
    workIntro: "আমাদের কাজের মধ্যে আছে এই প্রতিষ্ঠানগুলোর ওয়েবসাইট। লিংকগুলো তাদের বর্তমান সাইট খোলে।",
    visitSite: "ওয়েবসাইট দেখুন",
    faqTitle: "কনট্রাক্টিং প্রতিষ্ঠানের প্রশ্ন",
    faqs: [
      { question: "কনট্রাক্টিং কোম্পানির ওয়েবসাইটে কী থাকা উচিত?", answer: "সেবা ও কাজের পরিধি, আসল ছবিসহ সম্পন্ন প্রকল্প, প্রয়োজনে যন্ত্রপাতি ও টিম, CR ও যোগাযোগের তথ্য এবং প্রোফাইল ডাউনলোড লিংক, আরবি ও ইংরেজিতে।" },
      { question: "ওয়েবসাইট ও প্রোফাইল কি একসাথে ডিজাইন করেন?", answer: "হ্যাঁ, একই পরিচয় ও কনটেন্টে; চাইলে একটি নিতে পারেন।" },
      { question: "আপনাদের কি কনট্রাক্টর ওয়েবসাইটের উদাহরণ আছে?", answer: "হ্যাঁ, Cobalt Core Contracting, Solidcore International ও Al Bishri Company-র ওয়েবসাইট, এই পেজে লিংকসহ।" },
      { question: "খরচ কত?", answer: "নির্দিষ্ট মূল্য প্রকাশ করি না। প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।" },
    ],
    ctaTitle: "আপনার কোম্পানির ওয়েবসাইট বা প্রোফাইল শুরু করুন",
    ctaText: "WhatsApp-এ কোম্পানির নাম ও প্রয়োজন জানান, আমরা আল খোবার, দাম্মাম বা অনলাইনে মিটিং ঠিক করব।",
    whatsappLabel: "WhatsApp করুন",
    callLabel: "কল করুন",
  },
};
