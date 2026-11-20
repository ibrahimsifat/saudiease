// Website design & development page content (MASTER-PLAN task 3-3), per language.
//
// Evidence rules (docs/seo/business-goals.md): office in Al Khobar (city only);
// on-site meetings in Al Khobar and Dammam; bilingual sites, custom CMS and
// e-commerce are sold; no published prices; no client results, rankings,
// speed numbers, hosting or ownership terms (not confirmed) and no client names.
// Technologies are kept from the existing page data.
import type { ServiceDetail } from "./ar";

type Content = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const related = ["company-profile-branding", "brand-identity", "mobile-app-development", "it-support-retainer"];

export const WEBSITE_CONTENT: Record<string, Content> = {
  ar: {
    longDescription:
      "نصمّم ونبرمج مواقع الشركات باللغتين العربية والإنجليزية، مع نظام إدارة محتوى تعدّل منه بنفسك، ومتجر إلكتروني عند الحاجة. نعمل أساساً مع شركات المقاولات والإنشاءات والتوريد الصناعي في الخبر والدمام والمنطقة الشرقية، ونلتقيك في مكتبك أو في مكتبنا بالخبر. ابدأ برسالة على واتساب.",
    overview:
      "موقع الشركة هو أول ما يراه مسؤول المشتريات أو العميل الجديد قبل أن يتصل بك. لذلك نبني الموقع حول سؤال واحد: ماذا يحتاج زائرك ليقرر التواصل معك؟ نرتّب الخدمات ونطاق العمل والمشاريع المنفذة وبيانات السجل والتواصل بوضوح، باللغتين العربية والإنجليزية، مع اتجاه صحيح للنص العربي وتصميم يعمل على الجوال. تحصل على نظام إدارة محتوى تعدّل منه النصوص والصور وتضيف المشاريع دون الرجوع إلينا في كل تعديل، ويمكن إضافة متجر إلكتروني إذا كنت تبيع منتجات. نعمل بنطاق عمل مكتوب وجدول زمني واضح، ونسلّمك كل مرحلة قبل الانتقال للتي بعدها. لا ننشر أسعاراً ثابتة لأن التكلفة تعتمد على حجم الموقع؛ نرسل عرض سعر مكتوباً بعد الاجتماع الأول.",
    benefits: [
      "موقع باللغتين العربية والإنجليزية",
      "نظام إدارة محتوى تعدّل منه بنفسك",
      "متجر إلكتروني عند الحاجة",
      "تصميم يعمل على الجوال",
      "اجتماعات في الخبر والدمام",
    ],
    features: [
      "مواقع الشركات",
      "نظام إدارة محتوى مخصص",
      "المتاجر الإلكترونية",
      "إعادة تصميم المواقع الحالية",
      "تدريب فريقك عند التسليم",
    ],
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "الخدمة", value: "تصميم وتطوير مواقع الشركات، نظام إدارة محتوى، متاجر إلكترونية" },
        { label: "لمن", value: "شركات المقاولات والإنشاءات والتوريد الصناعي، والشركات الصغيرة والمتوسطة" },
        { label: "أين", value: "اجتماعات في الخبر والدمام؛ عن بُعد في باقي المملكة" },
        { label: "اللغات", value: "العربية والإنجليزية (والتواصل بالبنغالية أيضاً)" },
        { label: "السعر", value: "عرض سعر مكتوب بعد الاجتماع الأول (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    sections: [
      {
        title: "مواقع شركات بالعربية والإنجليزية",
        content:
          "نصمّم كل صفحة باللغتين من البداية، لا كترجمة لاحقة. النص العربي من اليمين لليسار بخطوط واضحة، والإنجليزي من اليسار لليمين، مع زر تبديل اللغة في كل صفحة. نكتب معك عناوين الصفحات ووصفها بالكلمات التي يبحث بها عملاؤك فعلاً، حتى يظهر الموقع لمن يبحث عن خدماتك.",
      },
      {
        title: "مواقع لشركات المقاولات والتوريد الصناعي",
        content:
          "موقع شركة المقاولات يُقرأ غالباً من مسؤولي المشتريات والتأهيل. نرتّب فيه بوضوح: الخدمات ونطاق العمل، والمشاريع المنفذة بصور حقيقية، والمعدات أو الفرق إن أردت إبرازها، وبيانات السجل والتواصل، ورابط تحميل بروفايل الشركة. يمكننا تصميم البروفايل والموقع معاً بهوية واحدة.",
      },
      {
        title: "نظام إدارة محتوى تعدّل منه بنفسك",
        content:
          "نبني لوحة تحكم بسيطة تناسب ما ستعدّله فعلاً: المشاريع، والخدمات، والأخبار. لا نضيف خيارات لن تستخدمها. ندرّب من سيدير المحتوى في شركتك عند التسليم، حضورياً أو عن بُعد.",
      },
      {
        title: "متاجر إلكترونية",
        content:
          "إذا كنت تبيع منتجات، نبني متجراً ضمن موقعك أو متجراً مستقلاً: صفحات المنتجات والتصنيفات، وسلة الشراء، وربط بوابة الدفع التي تختارها، وإدارة الطلبات والمخزون. نوضح لك قبل البدء ما يلزم من جهتك، مثل حساب بوابة الدفع.",
      },
      {
        title: "إعادة تصميم موقعك الحالي",
        content:
          "إذا كان لديك موقع قديم، نراجعه في الاجتماع الأول ونقترح ما يُبقى عليه وما يُعاد بناؤه. نحافظ على الصفحات المهمة وروابطها أو نحوّلها بشكل صحيح، حتى لا تخسر الزيارات التي يحصل عليها موقعك اليوم.",
      },
      {
        title: "بعد الإطلاق",
        content:
          "نسلّمك صلاحيات الموقع وندرّب فريقك. وإذا أردت من يتابع التحديثات والنسخ الاحتياطية والدعم الفني بعد الإطلاق، يمكن ذلك عبر عقد دعم تقني شهري.",
      },
    ],
    process: [
      { title: "رسالة واجتماع أول", description: "ترسل لنا على واتساب، ونلتقي في الخبر أو الدمام أو عن بُعد.", icon: "MessageCircle" },
      { title: "نطاق عمل مكتوب", description: "خريطة الصفحات والمحتوى والجدول الزمني وعرض السعر، مكتوبة.", icon: "ClipboardList" },
      { title: "التصميم باللغتين", description: "نصمّم الصفحات الرئيسية بالعربية والإنجليزية وتراجعها معنا.", icon: "Palette" },
      { title: "البرمجة ونظام المحتوى", description: "نبرمج الموقع ولوحة التحكم والمتجر إن وُجد.", icon: "Code" },
      { title: "المراجعة والاختبار", description: "نراجع الموقع على الجوال والكمبيوتر باللغتين قبل الإطلاق.", icon: "CheckCircle" },
      { title: "الإطلاق والتدريب", description: "نطلق الموقع ونسلّمك الصلاحيات وندرّب فريقك.", icon: "Rocket" },
    ],
    faqs: [
      { question: "كم تكلفة تصميم موقع شركة؟", answer: "لا ننشر أسعاراً ثابتة. التكلفة تعتمد على عدد الصفحات واللغات، ووجود متجر إلكتروني، وأي ربط مع أنظمة أخرى. نرسل عرض سعر مكتوباً بعد الاجتماع الأول." },
      { question: "كم يستغرق تصميم الموقع؟", answer: "يعتمد على حجم الموقع وجاهزية المحتوى (النصوص والصور). نتفق على جدول زمني مكتوب قبل البدء ونبلغك مبكراً بأي تغيير." },
      { question: "هل يكون الموقع بالعربية والإنجليزية؟", answer: "نعم، نبني المواقع باللغتين كمعيار، مع اتجاه صحيح للنص العربي." },
      { question: "هل أستطيع تعديل الموقع بنفسي؟", answer: "نعم. نبني نظام إدارة محتوى بسيطاً وندرّب من سيديره في شركتك." },
      { question: "هل تبنون متاجر إلكترونية؟", answer: "نعم، متجر ضمن موقعك أو متجر مستقل، مع ربط بوابة الدفع التي تختارها." },
      { question: "هل تعيدون تصميم موقعنا الحالي؟", answer: "نعم. نراجعه ونقترح ما يُبقى عليه وما يُعاد بناؤه، ونحافظ على الروابط المهمة." },
      { question: "أين تقابلوننا؟", answer: "مكتبنا في الخبر، ونزور مكاتب العملاء في الخبر والدمام. لباقي المناطق نعمل عن بُعد." },
      { question: "هل تصممون بروفايل الشركة أيضاً؟", answer: "نعم، يمكن تصميم بروفايل الشركة والموقع معاً بهوية واحدة." },
    ],
    relatedServices: related,
  },

  en: {
    longDescription:
      "We design and build Arabic/English company websites with a CMS you can edit yourself, plus an online store when needed. We work mainly with contracting, construction and industrial supply companies in Al Khobar, Dammam and the Eastern Province, and meet you at your office or ours in Al Khobar. Start with a WhatsApp message.",
    overview:
      "Your website is the first thing a procurement officer or new client sees before they call you. So we build it around one question: what does your visitor need to decide to contact you? We lay out your services, scope of work, completed projects, CR and contact details clearly, in Arabic and English, with correct right-to-left Arabic and a design that works on phones. You get a CMS to change text and photos and add projects without coming back to us for every edit, and an online store can be added if you sell products. We work with a written scope and a clear timeline, and hand over each stage before moving to the next. We don't publish fixed prices because the cost depends on the size of the site; you get a written quote after the first meeting.",
    benefits: [
      "Arabic and English website",
      "A CMS you can edit yourself",
      "Online store when needed",
      "Design that works on phones",
      "Meetings in Al Khobar and Dammam",
    ],
    features: [
      "Company websites",
      "Custom CMS",
      "Online stores",
      "Redesign of existing sites",
      "Team training at handover",
    ],
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "Service", value: "Company website design and development, CMS, online stores" },
        { label: "For", value: "Contracting, construction and industrial supply companies; small and medium businesses" },
        { label: "Where", value: "Meetings in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "Languages", value: "Arabic and English sites (we also speak Bangla)" },
        { label: "Price", value: "Written quote after the first meeting (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "Company websites in Arabic and English",
        content:
          "We design every page in both languages from the start, not as a translation added later. Arabic runs right-to-left with clear fonts, English left-to-right, with a language switch on every page. We write page titles and descriptions with you using the words your clients actually search for, so the site shows up for people looking for your services.",
      },
      {
        title: "Websites for contractors and industrial suppliers",
        content:
          "A contractor's website is usually read by procurement and pre-qualification staff. We lay out clearly: services and scope of work, completed projects with real photos, equipment or teams if you want to show them, CR and contact details, and a link to download the company profile. We can design the profile and the website together with one identity.",
      },
      {
        title: "A CMS you can edit yourself",
        content:
          "We build a simple admin panel around what you will actually change: projects, services and news. We don't add options you won't use. At handover we train whoever will manage the content, in person or remotely.",
      },
      {
        title: "Online stores",
        content:
          "If you sell products, we build a store inside your website or as a separate site: product and category pages, cart, connection to the payment gateway you choose, and order and stock management. Before we start we explain what is needed from your side, such as a payment gateway account.",
      },
      {
        title: "Redesigning your current website",
        content:
          "If you have an older site, we review it in the first meeting and suggest what to keep and what to rebuild. We keep important pages and their links, or redirect them properly, so you don't lose the visits your site gets today.",
      },
      {
        title: "After launch",
        content:
          "We hand over access and train your team. If you want someone to look after updates, backups and technical support after launch, that is available through a monthly IT support retainer.",
      },
    ],
    process: [
      { title: "Message and first meeting", description: "Message us on WhatsApp; we meet in Al Khobar, Dammam or online.", icon: "MessageCircle" },
      { title: "Written scope", description: "Page map, content, timeline and quote, in writing.", icon: "ClipboardList" },
      { title: "Design in both languages", description: "We design the main pages in Arabic and English and review them with you.", icon: "Palette" },
      { title: "Development and CMS", description: "We build the site, the admin panel and the store if there is one.", icon: "Code" },
      { title: "Review and testing", description: "We check the site on phone and desktop in both languages before launch.", icon: "CheckCircle" },
      { title: "Launch and training", description: "We launch, hand over access and train your team.", icon: "Rocket" },
    ],
    faqs: [
      { question: "How much does a company website cost?", answer: "We don't publish fixed prices. The cost depends on the number of pages and languages, whether there is an online store, and any integration with other systems. You get a written quote after the first meeting." },
      { question: "How long does a website take?", answer: "It depends on the size of the site and how ready the content (text and photos) is. We agree a written timeline before starting and tell you early about any change." },
      { question: "Will the website be in Arabic and English?", answer: "Yes, we build bilingual sites as standard, with correct right-to-left Arabic." },
      { question: "Can I edit the website myself?", answer: "Yes. We build a simple CMS and train whoever will manage it in your company." },
      { question: "Do you build online stores?", answer: "Yes, a store inside your website or a separate one, connected to the payment gateway you choose." },
      { question: "Can you redesign our existing website?", answer: "Yes. We review it, suggest what to keep and what to rebuild, and keep your important links." },
      { question: "Where do you meet clients?", answer: "Our office is in Al Khobar and we visit client offices in Al Khobar and Dammam. Elsewhere we work remotely." },
      { question: "Do you design company profiles too?", answer: "Yes, we can design the company profile and the website together with one identity." },
    ],
    relatedServices: related,
  },

  bn: {
    longDescription:
      "আমরা আরবি/ইংরেজি কোম্পানি ওয়েবসাইট ডিজাইন ও তৈরি করি, সাথে নিজে সম্পাদনা করা যায় এমন CMS এবং প্রয়োজনে অনলাইন স্টোর। আমরা মূলত আল খোবার, দাম্মাম ও পূর্বাঞ্চলের কনট্রাক্টিং, নির্মাণ ও শিল্প সরবরাহ প্রতিষ্ঠানের সাথে কাজ করি, এবং আপনার অফিসে বা আল খোবারে আমাদের অফিসে দেখা করি। WhatsApp দিয়ে শুরু করুন।",
    overview:
      "ক্রয় কর্মকর্তা বা নতুন ক্লায়েন্ট আপনাকে ফোন করার আগে প্রথমে আপনার ওয়েবসাইট দেখেন। তাই আমরা একটি প্রশ্ন ঘিরে সাইট তৈরি করি: যোগাযোগের সিদ্ধান্ত নিতে আপনার ভিজিটরের কী দরকার? সেবা, কাজের পরিধি, সম্পন্ন প্রকল্প, CR ও যোগাযোগের তথ্য আরবি ও ইংরেজিতে স্পষ্টভাবে সাজাই, সঠিক ডান-থেকে-বাম আরবি এবং মোবাইলে কাজ করে এমন ডিজাইনসহ। আপনি পাবেন একটি CMS, যেখান থেকে নিজেই লেখা ও ছবি বদলাতে ও প্রকল্প যোগ করতে পারবেন; পণ্য বিক্রি করলে অনলাইন স্টোর যোগ করা যায়। আমরা লিখিত কাজের পরিধি ও স্পষ্ট সময়সূচিতে কাজ করি। নির্দিষ্ট মূল্য প্রকাশ করি না; প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।",
    benefits: [
      "আরবি ও ইংরেজি ওয়েবসাইট",
      "নিজে সম্পাদনাযোগ্য CMS",
      "প্রয়োজনে অনলাইন স্টোর",
      "মোবাইলে কাজ করে এমন ডিজাইন",
      "আল খোবার ও দাম্মামে মিটিং",
    ],
    features: [
      "কোম্পানি ওয়েবসাইট",
      "কাস্টম CMS",
      "অনলাইন স্টোর",
      "বর্তমান সাইট রিডিজাইন",
      "হস্তান্তরে টিম প্রশিক্ষণ",
    ],
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "সেবা", value: "কোম্পানি ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট, CMS, অনলাইন স্টোর" },
        { label: "কাদের জন্য", value: "কনট্রাক্টিং, নির্মাণ ও শিল্প সরবরাহ প্রতিষ্ঠান; ছোট ও মাঝারি ব্যবসা" },
        { label: "কোথায়", value: "আল খোবার ও দাম্মামে মিটিং; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "ভাষা", value: "আরবি ও ইংরেজি সাইট (আমরা বাংলাতেও কথা বলি)" },
        { label: "মূল্য", value: "প্রথম মিটিংয়ের পরে লিখিত কোটেশন" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "আরবি ও ইংরেজিতে কোম্পানি ওয়েবসাইট",
        content:
          "প্রতিটি পেজ শুরু থেকেই দুই ভাষায় ডিজাইন করি, পরে অনুবাদ হিসেবে নয়। আরবি ডান থেকে বামে, ইংরেজি বাম থেকে ডানে, প্রতিটি পেজে ভাষা পরিবর্তনের বাটনসহ। আপনার ক্লায়েন্টরা যে শব্দে খোঁজেন সেই শব্দে পেজের শিরোনাম ও বিবরণ লিখি।",
      },
      {
        title: "কনট্রাক্টর ও শিল্প সরবরাহকারীদের ওয়েবসাইট",
        content:
          "কনট্রাক্টরের ওয়েবসাইট সাধারণত ক্রয় ও প্রি-কোয়ালিফিকেশন কর্মকর্তারা পড়েন। তাই সেবা ও কাজের পরিধি, আসল ছবিসহ সম্পন্ন প্রকল্প, CR ও যোগাযোগের তথ্য এবং কোম্পানি প্রোফাইল ডাউনলোডের লিংক স্পষ্টভাবে সাজাই।",
      },
      {
        title: "নিজে সম্পাদনাযোগ্য CMS",
        content:
          "আপনি আসলে যা বদলাবেন তা ঘিরে একটি সহজ অ্যাডমিন প্যানেল তৈরি করি: প্রকল্প, সেবা, সংবাদ। অপ্রয়োজনীয় অপশন যোগ করি না। হস্তান্তরের সময় কনটেন্ট পরিচালনাকারীকে প্রশিক্ষণ দিই।",
      },
      {
        title: "অনলাইন স্টোর",
        content:
          "পণ্য বিক্রি করলে আপনার সাইটের ভেতরে বা আলাদা স্টোর তৈরি করি: পণ্য ও ক্যাটাগরি পেজ, কার্ট, আপনার পছন্দের পেমেন্ট গেটওয়ে সংযোগ এবং অর্ডার ও স্টক ব্যবস্থাপনা।",
      },
      {
        title: "বর্তমান ওয়েবসাইট রিডিজাইন",
        content:
          "পুরনো সাইট থাকলে প্রথম মিটিংয়ে দেখে কী রাখা হবে আর কী নতুন হবে তা প্রস্তাব করি। গুরুত্বপূর্ণ পেজ ও লিংক রাখি বা সঠিকভাবে রিডাইরেক্ট করি, যাতে বর্তমান ভিজিট না হারান।",
      },
      {
        title: "লঞ্চের পরে",
        content:
          "অ্যাক্সেস হস্তান্তর করি ও টিমকে প্রশিক্ষণ দিই। আপডেট, ব্যাকআপ ও কারিগরি সাপোর্টের জন্য মাসিক আইটি সাপোর্ট চুক্তি নেওয়া যায়।",
      },
    ],
    process: [
      { title: "মেসেজ ও প্রথম মিটিং", description: "WhatsApp করুন; আল খোবার, দাম্মাম বা অনলাইনে দেখা করি।", icon: "MessageCircle" },
      { title: "লিখিত কাজের পরিধি", description: "পেজ ম্যাপ, কনটেন্ট, সময়সূচি ও কোটেশন লিখিতভাবে।", icon: "ClipboardList" },
      { title: "দুই ভাষায় ডিজাইন", description: "মূল পেজগুলো আরবি ও ইংরেজিতে ডিজাইন করে আপনার সাথে রিভিউ করি।", icon: "Palette" },
      { title: "ডেভেলপমেন্ট ও CMS", description: "সাইট, অ্যাডমিন প্যানেল ও প্রয়োজনে স্টোর তৈরি করি।", icon: "Code" },
      { title: "রিভিউ ও পরীক্ষা", description: "লঞ্চের আগে মোবাইল ও কম্পিউটারে দুই ভাষায় যাচাই করি।", icon: "CheckCircle" },
      { title: "লঞ্চ ও প্রশিক্ষণ", description: "লঞ্চ করি, অ্যাক্সেস দিই ও টিমকে প্রশিক্ষণ দিই।", icon: "Rocket" },
    ],
    faqs: [
      { question: "কোম্পানি ওয়েবসাইটের খরচ কত?", answer: "নির্দিষ্ট মূল্য প্রকাশ করি না। খরচ নির্ভর করে পেজ ও ভাষার সংখ্যা, অনলাইন স্টোর এবং অন্য সিস্টেমের সাথে সংযোগের উপর। প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।" },
      { question: "ওয়েবসাইট তৈরিতে কত সময় লাগে?", answer: "সাইটের আকার ও কনটেন্ট কতটা প্রস্তুত তার উপর নির্ভর করে। শুরুর আগে লিখিত সময়সূচি ঠিক করি।" },
      { question: "ওয়েবসাইট কি আরবি ও ইংরেজিতে হবে?", answer: "হ্যাঁ, দুই ভাষায় তৈরি করা আমাদের স্ট্যান্ডার্ড।" },
      { question: "আমি কি নিজে সাইট সম্পাদনা করতে পারব?", answer: "হ্যাঁ। সহজ CMS তৈরি করি এবং প্রশিক্ষণ দিই।" },
      { question: "আপনারা কি অনলাইন স্টোর তৈরি করেন?", answer: "হ্যাঁ, সাইটের ভেতরে বা আলাদা স্টোর, আপনার পছন্দের পেমেন্ট গেটওয়েসহ।" },
      { question: "আপনারা কোথায় দেখা করেন?", answer: "আমাদের অফিস আল খোবারে; আল খোবার ও দাম্মামে ক্লায়েন্টের অফিসে যাই। অন্যত্র রিমোটে কাজ করি।" },
    ],
    relatedServices: related,
  },
};
