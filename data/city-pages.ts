// Service × city pages (MASTER-PLAN task 3-7). Only where on-site delivery is real.
// Verified facts only (docs/seo/business-goals.md, owner 2026-11-20):
//  - office in Al Khobar (city only, no street published)
//  - we visit client offices in Al Khobar and Dammam
//  - clients can meet us at our Al Khobar office
//  - no office in Dammam; no client names; no other local claims

export type CityPage = {
  pageTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  cityName: string;
  serviceName: string;
  facts: { title: string; rows: { label: string; value: string }[] };
  sections: { title: string; body: string[] }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
  whatsappLabel: string;
  callLabel: string;
  breadcrumbHome: string;
  breadcrumbServices: string;
  otherCityLabel: string;
  serviceLinkLabel: string;
};

export const CITY_SERVICE = "website-design-development";
export const CITIES = ["al-khobar", "dammam"] as const;
export type CitySlug = (typeof CITIES)[number];

export const CITY_PAGES: Record<string, Record<CitySlug, CityPage>> = {
  ar: {
    "al-khobar": {
      pageTitle: "شركة تصميم مواقع في الخبر | سعودي إيز",
      metaDescription:
        "شركة تصميم مواقع في الخبر: مواقع شركات بالعربية والإنجليزية ونظام إدارة محتوى ومتاجر إلكترونية. قابلنا في مكتبنا بالخبر أو نزورك في مكتبك. راسلنا على واتساب.",
      h1: "شركة تصميم مواقع في الخبر",
      answer:
        "سعودي إيز شركة تصميم مواقع مقرها الخبر. نصمّم ونبرمج مواقع الشركات باللغتين العربية والإنجليزية، مع نظام إدارة محتوى تعدّل منه بنفسك، ومتجر إلكتروني عند الحاجة، لشركات المقاولات والإنشاءات والتوريد الصناعي وغيرها في الخبر. نلتقيك في مكتبنا بالخبر أو في مكتبك. ابدأ برسالة على واتساب.",
      cityName: "الخبر",
      serviceName: "تصميم وتطوير المواقع",
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "مكتبنا", value: "الخبر، المنطقة الشرقية (نرسل الموقع عند حجز الموعد)" },
          { label: "الاجتماعات", value: "في مكتبنا بالخبر أو نزورك في مكتبك داخل الخبر" },
          { label: "ما نبنيه", value: "موقع شركة بالعربية والإنجليزية، نظام إدارة محتوى، متجر إلكتروني عند الحاجة" },
          { label: "اللغات", value: "العربية والإنجليزية والبنغالية" },
          { label: "السعر", value: "عرض سعر مكتوب بعد الاجتماع الأول" },
          { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
        ],
      },
      sections: [
        {
          title: "اجتماع وجهاً لوجه في الخبر",
          body: [
            "لأن مكتبنا في الخبر، يمكنك أن تزورنا أو نأتي إلى مكتبك داخل المدينة. في الاجتماع الأول نراجع موقعك الحالي إن وُجد، ونفهم ما يبحث عنه عملاؤك، ومن سيدير المحتوى لديكم بعد الإطلاق.",
            "يفيد أن تحضر معك شعار الشركة وبروفايلها إن كان جاهزاً، وصوراً حقيقية لمشاريعكم أو فريقكم، وأسماء الخدمات التي تريد إبرازها. بعد الاجتماع نرسل لك نطاق العمل والجدول الزمني مكتوبين.",
          ],
        },
        {
          title: "من الاجتماع الأول إلى إطلاق الموقع",
          body: [
            "نبدأ بخريطة الصفحات والمحتوى، ثم التصميم باللغتين، ثم البرمجة والربط مع نظام إدارة المحتوى. يمكن أن تكون اجتماعات المراجعة في الخبر أو عبر الإنترنت حسب ما يناسبك.",
            "عند الإطلاق نسلّمك صلاحيات الموقع، وندرّب من سيدير المحتوى في مكتبكم بالخبر أو عن بُعد، حتى تتمكنوا من تعديل النصوص والصور وإضافة المشاريع دون الرجوع إلينا في كل تعديل.",
          ],
        },
        {
          title: "مواقع لشركات المقاولات والتوريد الصناعي",
          body: [
            "أغلب عملنا لشركات المقاولات والإنشاءات والتوريد الصناعي. موقع هذه الشركات يُقرأ غالباً من مسؤولي المشتريات والتأهيل قبل الاتصال، لذلك نرتّب فيه بوضوح: الخدمات، ونطاق العمل، والمشاريع المنفذة، وبيانات السجل والتواصل، مع رابط لبروفايل الشركة.",
          ],
        },
      ],
      faqTitle: "أسئلة شائعة عن تصميم المواقع في الخبر",
      faqs: [
        { question: "هل يمكن أن نجتمع في مكتبكم بالخبر؟", answer: "نعم. نرسل لك الموقع عند حجز الموعد على واتساب أو بالهاتف." },
        { question: "هل تزورون مكتبنا في الخبر؟", answer: "نعم، نزور مكاتب العملاء داخل الخبر للاجتماع الأول ولاجتماعات المراجعة والتدريب عند الحاجة." },
        { question: "هل تعيدون تصميم موقعنا الحالي؟", answer: "نعم. نراجع الموقع الحالي في الاجتماع الأول ونقترح ما يُبقى عليه وما يُعاد بناؤه، ثم نرسل النطاق مكتوباً." },
        { question: "هل يكون الموقع بالعربية والإنجليزية؟", answer: "نعم، نبني المواقع باللغتين كمعيار، مع اتجاه صحيح للنص العربي." },
        { question: "هل تبنون متاجر إلكترونية؟", answer: "نعم، متجر إلكتروني ضمن الموقع أو كموقع مستقل، حسب احتياجك." },
        { question: "كم تكلفة تصميم موقع؟", answer: "لا ننشر أسعاراً ثابتة لأن التكلفة تعتمد على عدد الصفحات واللغات والمتجر والربط. نرسل عرض سعر مكتوباً بعد الاجتماع الأول." },
      ],
      ctaTitle: "ابدأ مشروع موقعك في الخبر",
      ctaText: "أرسل لنا اسم شركتك وما تحتاجه على واتساب، ونحدد موعداً في مكتبنا أو مكتبك.",
      whatsappLabel: "راسلنا على واتساب",
      callLabel: "اتصل بنا",
      breadcrumbHome: "الرئيسية",
      breadcrumbServices: "الخدمات",
      otherCityLabel: "نخدم أيضاً: تصميم مواقع في الدمام",
      serviceLinkLabel: "تفاصيل خدمة تصميم وتطوير المواقع",
    },
    dammam: {
      pageTitle: "شركة تصميم مواقع في الدمام | سعودي إيز",
      metaDescription:
        "شركة تصميم مواقع للشركات في الدمام: مواقع بالعربية والإنجليزية ونظام إدارة محتوى ومتاجر إلكترونية. فريقنا في الخبر ونزورك في مكتبك بالدمام. راسلنا على واتساب.",
      h1: "شركة تصميم مواقع في الدمام",
      answer:
        "تصمّم سعودي إيز مواقع الشركات في الدمام باللغتين العربية والإنجليزية، مع نظام إدارة محتوى ومتجر إلكتروني عند الحاجة. فريقنا في الخبر المجاورة، ونزورك في مكتبك بالدمام للاجتماعات، أو تلتقينا في مكتبنا بالخبر. ابدأ برسالة على واتساب.",
      cityName: "الدمام",
      serviceName: "تصميم وتطوير المواقع",
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "أين نحن", value: "مكتبنا في الخبر؛ ليس لدينا مكتب في الدمام" },
          { label: "الاجتماعات", value: "نزورك في مكتبك بالدمام، أو تلتقينا في مكتبنا بالخبر" },
          { label: "ما نبنيه", value: "موقع شركة بالعربية والإنجليزية، نظام إدارة محتوى، متجر إلكتروني عند الحاجة" },
          { label: "اللغات", value: "العربية والإنجليزية والبنغالية" },
          { label: "السعر", value: "عرض سعر مكتوب بعد الاجتماع الأول" },
          { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
        ],
      },
      sections: [
        {
          title: "نأتي إلى مكتبك في الدمام",
          body: [
            "ليس لدينا مكتب في الدمام، ونقول ذلك بوضوح. فريقنا في الخبر، ونزور مكاتب عملائنا في الدمام للاجتماع الأول وعند الحاجة لاحقاً. وإن كان أسهل لك، يمكنك زيارتنا في مكتبنا بالخبر.",
            "في الزيارة نتعرّف على شركتك وطريقة عملها، ونرى موقعك الحالي إن وُجد، ونتفق على ما يجب أن يجده عملاؤك في الموقع. بعدها نرسل نطاق العمل والجدول الزمني مكتوبين.",
          ],
        },
        {
          title: "ما يتم حضورياً وما يتم عن بُعد",
          body: [
            "الاجتماع الأول وجلسة التدريب عند التسليم نفضّل أن تكون حضورياً في مكتبك بالدمام. أما مراجعات التصميم وتعديلات المحتوى فيمكن أن تكون عبر الإنترنت أو واتساب لتوفير وقت فريقك.",
            "تحصل على شخص واحد للتواصل من فريقنا طوال المشروع، وتستلم كل مرحلة مكتوبة قبل الانتقال للتي بعدها.",
          ],
        },
        {
          title: "لشركات المقاولات والتوريد في الدمام",
          body: [
            "نبني مواقع شركات المقاولات والإنشاءات والتوريد الصناعي بحيث يجد مسؤول المشتريات بسرعة: ما تقدمه الشركة، والمشاريع التي نفذتها، وبيانات التواصل والسجل التجاري، ورابط تحميل البروفايل. يمكننا أيضاً تصميم البروفايل نفسه ليكون متسقاً مع الموقع.",
          ],
        },
      ],
      faqTitle: "أسئلة شائعة عن تصميم المواقع في الدمام",
      faqs: [
        { question: "هل لديكم مكتب في الدمام؟", answer: "لا. مكتبنا في الخبر، ونزورك في مكتبك بالدمام أو تزورنا في الخبر." },
        { question: "هل تزورون مكتبنا في الدمام؟", answer: "نعم، للاجتماع الأول ولجلسة التدريب عند التسليم، وفي أي وقت تحتاج فيه اجتماعاً حضورياً." },
        { question: "هل يمكن إدارة المشروع عن بُعد؟", answer: "نعم. مراجعات التصميم وتعديلات المحتوى تتم عبر الإنترنت أو واتساب إن كان ذلك أنسب لك." },
        { question: "هل تصممون بروفايل الشركة مع الموقع؟", answer: "نعم، يمكن تصميم بروفايل الشركة والموقع معاً بهوية واحدة." },
        { question: "هل يكون الموقع بالعربية والإنجليزية؟", answer: "نعم، نبني المواقع باللغتين كمعيار." },
        { question: "كم تكلفة تصميم موقع في الدمام؟", answer: "التكلفة تعتمد على عدد الصفحات واللغات والمتجر والربط، وليست مرتبطة بالمدينة. نرسل عرض سعر مكتوباً بعد الاجتماع الأول." },
      ],
      ctaTitle: "ابدأ مشروع موقعك في الدمام",
      ctaText: "أرسل لنا اسم شركتك وما تحتاجه على واتساب، ونحدد موعد زيارة لمكتبك في الدمام.",
      whatsappLabel: "راسلنا على واتساب",
      callLabel: "اتصل بنا",
      breadcrumbHome: "الرئيسية",
      breadcrumbServices: "الخدمات",
      otherCityLabel: "نخدم أيضاً: تصميم مواقع في الخبر",
      serviceLinkLabel: "تفاصيل خدمة تصميم وتطوير المواقع",
    },
  },

  en: {
    "al-khobar": {
      pageTitle: "Web Design Company in Al Khobar | Saudi Ease",
      metaDescription:
        "Web design company in Al Khobar: Arabic/English company websites, custom CMS and online stores. Meet us at our Al Khobar office or yours. Message us on WhatsApp.",
      h1: "Web Design Company in Al Khobar",
      answer:
        "Saudi Ease is a web design company based in Al Khobar. We design and build Arabic/English company websites with a CMS you can edit yourself, plus an online store when needed, for contracting, construction, industrial supply and other companies in Al Khobar. Meet us at our Al Khobar office or at yours. Start with a WhatsApp message.",
      cityName: "Al Khobar",
      serviceName: "Website design and development",
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Our office", value: "Al Khobar, Eastern Province (we send the location when you book)" },
          { label: "Meetings", value: "At our Al Khobar office, or we visit your office in Al Khobar" },
          { label: "What we build", value: "Arabic/English company website, CMS, online store when needed" },
          { label: "Languages", value: "Arabic, English, Bangla" },
          { label: "Price", value: "Written quote after the first meeting" },
          { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
        ],
      },
      sections: [
        {
          title: "Meet face to face in Al Khobar",
          body: [
            "Our office is in Al Khobar, so you can come to us or we come to your office in the city. In the first meeting we look at your current website if you have one, what your clients look for, and who on your side will manage the content after launch.",
            "It helps to bring your logo, your company profile if it is ready, real photos of your projects or team, and the services you want to highlight. After the meeting we send you the scope and timeline in writing.",
          ],
        },
        {
          title: "From first meeting to launch",
          body: [
            "We start with the page map and content, then the design in both languages, then development and the CMS. Review meetings can be in Al Khobar or online, whichever suits you.",
            "At launch we hand over access and train whoever will manage the content, at your Al Khobar office or remotely, so your team can change text and photos and add projects without coming back to us for every edit.",
          ],
        },
        {
          title: "Websites for contractors and industrial suppliers",
          body: [
            "Most of our work is for contracting, construction and industrial supply companies. Their websites are usually read by procurement and pre-qualification staff before anyone calls, so we lay out clearly: services, scope of work, completed projects, CR and contact details, and a link to the company profile.",
          ],
        },
      ],
      faqTitle: "Web design in Al Khobar: common questions",
      faqs: [
        { question: "Can we meet at your office in Al Khobar?", answer: "Yes. We send you the location when you book a meeting on WhatsApp or by phone." },
        { question: "Do you visit our office in Al Khobar?", answer: "Yes. We visit client offices in Al Khobar for the first meeting, and for reviews and training when needed." },
        { question: "Can you redesign our existing website?", answer: "Yes. We review your current site in the first meeting, suggest what to keep and what to rebuild, and send the scope in writing." },
        { question: "Will the website be in Arabic and English?", answer: "Yes. We build bilingual sites as standard, with correct right-to-left Arabic." },
        { question: "Do you build online stores?", answer: "Yes, as part of your website or as a separate store, depending on what you need." },
        { question: "How much does a website cost?", answer: "We don't publish fixed prices, because the cost depends on the number of pages, languages, the store and integrations. You get a written quote after the first meeting." },
      ],
      ctaTitle: "Start your website project in Al Khobar",
      ctaText: "Send us your company name and what you need on WhatsApp, and we'll book a meeting at our office or yours.",
      whatsappLabel: "WhatsApp us",
      callLabel: "Call us",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      otherCityLabel: "We also serve: web design in Dammam",
      serviceLinkLabel: "Website design and development service details",
    },
    dammam: {
      pageTitle: "Web Design Company in Dammam | Saudi Ease",
      metaDescription:
        "Web design for companies in Dammam: Arabic/English websites, custom CMS and online stores. Our team is in Al Khobar and visits your Dammam office. WhatsApp us.",
      h1: "Web Design Company in Dammam",
      answer:
        "Saudi Ease designs and builds Arabic/English company websites for businesses in Dammam, with a CMS and an online store when needed. Our team is in neighbouring Al Khobar: we visit your office in Dammam for meetings, or you can meet us at our Al Khobar office. Start with a WhatsApp message.",
      cityName: "Dammam",
      serviceName: "Website design and development",
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Where we are", value: "Our office is in Al Khobar; we have no office in Dammam" },
          { label: "Meetings", value: "We visit your office in Dammam, or you meet us in Al Khobar" },
          { label: "What we build", value: "Arabic/English company website, CMS, online store when needed" },
          { label: "Languages", value: "Arabic, English, Bangla" },
          { label: "Price", value: "Written quote after the first meeting" },
          { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
        ],
      },
      sections: [
        {
          title: "We come to your office in Dammam",
          body: [
            "We don't have an office in Dammam, and we say so plainly. Our team is in Al Khobar and visits client offices in Dammam for the first meeting and later when needed. If it's easier, you can visit us at our Al Khobar office.",
            "In the visit we get to know your company and how it works, look at your current website if you have one, and agree what your clients should find on the site. Then we send you the scope and timeline in writing.",
          ],
        },
        {
          title: "What happens in person and what happens online",
          body: [
            "We prefer the first meeting and the handover training to be in person at your Dammam office. Design reviews and content changes can be done online or on WhatsApp to save your team's time.",
            "You get one contact person from our team for the whole project, and every stage is confirmed in writing before we move to the next.",
          ],
        },
        {
          title: "For contracting and supply companies in Dammam",
          body: [
            "We build websites for contracting, construction and industrial supply companies so that a procurement officer quickly finds what the company does, the projects it has completed, its contact and CR details, and a link to download the company profile. We can also design the profile itself so it matches the website.",
          ],
        },
      ],
      faqTitle: "Web design in Dammam: common questions",
      faqs: [
        { question: "Do you have an office in Dammam?", answer: "No. Our office is in Al Khobar; we visit you at your Dammam office or you visit us in Al Khobar." },
        { question: "Do you visit our office in Dammam?", answer: "Yes, for the first meeting and the handover training, and whenever you need an in-person meeting." },
        { question: "Can the project be run remotely?", answer: "Yes. Design reviews and content changes can happen online or on WhatsApp if that suits you better." },
        { question: "Can you design our company profile with the website?", answer: "Yes, we can design the company profile and the website together with one identity." },
        { question: "Will the website be in Arabic and English?", answer: "Yes, we build bilingual websites as standard." },
        { question: "How much does a website cost in Dammam?", answer: "The cost depends on the number of pages, languages, the store and integrations, not on the city. You get a written quote after the first meeting." },
      ],
      ctaTitle: "Start your website project in Dammam",
      ctaText: "Send us your company name and what you need on WhatsApp, and we'll book a visit to your Dammam office.",
      whatsappLabel: "WhatsApp us",
      callLabel: "Call us",
      breadcrumbHome: "Home",
      breadcrumbServices: "Services",
      otherCityLabel: "We also serve: web design in Al Khobar",
      serviceLinkLabel: "Website design and development service details",
    },
  },

  bn: {
    "al-khobar": {
      pageTitle: "আল খোবারে ওয়েবসাইট ডিজাইন কোম্পানি | সৌদি ইজ",
      metaDescription:
        "আল খোবারে ওয়েবসাইট ডিজাইন: আরবি/ইংরেজি কোম্পানি ওয়েবসাইট, কাস্টম CMS ও অনলাইন স্টোর। আমাদের আল খোবার অফিসে বা আপনার অফিসে দেখা করুন। WhatsApp করুন।",
      h1: "আল খোবারে ওয়েবসাইট ডিজাইন কোম্পানি",
      answer:
        "সৌদি ইজ আল খোবার ভিত্তিক একটি ওয়েবসাইট ডিজাইন কোম্পানি। আমরা আল খোবারের কনট্রাক্টিং, নির্মাণ, শিল্প সরবরাহ ও অন্যান্য প্রতিষ্ঠানের জন্য আরবি/ইংরেজি কোম্পানি ওয়েবসাইট তৈরি করি, সাথে নিজে সম্পাদনা করা যায় এমন CMS এবং প্রয়োজনে অনলাইন স্টোর। আমাদের অফিসে বা আপনার অফিসে দেখা করুন। WhatsApp দিয়ে শুরু করুন।",
      cityName: "আল খোবার",
      serviceName: "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট",
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "আমাদের অফিস", value: "আল খোবার, পূর্বাঞ্চল (বুকিংয়ের সময় লোকেশন পাঠাই)" },
          { label: "মিটিং", value: "আমাদের আল খোবার অফিসে, অথবা আমরা আপনার অফিসে আসি" },
          { label: "যা তৈরি করি", value: "আরবি/ইংরেজি ওয়েবসাইট, CMS, প্রয়োজনে অনলাইন স্টোর" },
          { label: "ভাষা", value: "আরবি, ইংরেজি, বাংলা" },
          { label: "মূল্য", value: "প্রথম মিটিংয়ের পরে লিখিত কোটেশন" },
          { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
        ],
      },
      sections: [
        {
          title: "আল খোবারে সরাসরি দেখা",
          body: [
            "আমাদের অফিস আল খোবারে, তাই আপনি আমাদের কাছে আসতে পারেন বা আমরা শহরের মধ্যে আপনার অফিসে যাই। প্রথম মিটিংয়ে আপনার বর্তমান ওয়েবসাইট, আপনার ক্লায়েন্টরা কী খোঁজেন এবং লঞ্চের পরে কে কনটেন্ট পরিচালনা করবেন তা দেখি।",
            "লোগো, কোম্পানি প্রোফাইল, প্রকল্প বা টিমের আসল ছবি এবং যে সেবাগুলো তুলে ধরতে চান সেগুলো সাথে আনলে ভালো। মিটিংয়ের পরে কাজের পরিধি ও সময়সূচি লিখিতভাবে পাঠাই।",
          ],
        },
        {
          title: "প্রথম মিটিং থেকে লঞ্চ",
          body: [
            "প্রথমে পেজ ম্যাপ ও কনটেন্ট, তারপর দুই ভাষায় ডিজাইন, তারপর ডেভেলপমেন্ট ও CMS। রিভিউ মিটিং আল খোবারে বা অনলাইনে, যেটা আপনার সুবিধা।",
            "লঞ্চের সময় অ্যাক্সেস হস্তান্তর করি এবং আপনার অফিসে বা রিমোটে কনটেন্ট পরিচালনাকারীকে প্রশিক্ষণ দিই।",
          ],
        },
        {
          title: "কনট্রাক্টর ও শিল্প সরবরাহকারীদের ওয়েবসাইট",
          body: [
            "আমাদের বেশিরভাগ কাজ কনট্রাক্টিং, নির্মাণ ও শিল্প সরবরাহ প্রতিষ্ঠানের জন্য। এদের ওয়েবসাইট সাধারণত ক্রয় ও প্রি-কোয়ালিফিকেশন কর্মকর্তারা আগে পড়েন, তাই সেবা, কাজের পরিধি, সম্পন্ন প্রকল্প, CR ও যোগাযোগের তথ্য এবং কোম্পানি প্রোফাইলের লিংক স্পষ্টভাবে সাজাই।",
          ],
        },
      ],
      faqTitle: "আল খোবারে ওয়েবসাইট ডিজাইন: সাধারণ প্রশ্ন",
      faqs: [
        { question: "আপনাদের আল খোবার অফিসে কি দেখা করা যায়?", answer: "হ্যাঁ। WhatsApp বা ফোনে বুকিং করলে লোকেশন পাঠাই।" },
        { question: "আপনারা কি আল খোবারে আমাদের অফিসে আসেন?", answer: "হ্যাঁ, প্রথম মিটিং এবং প্রয়োজনে রিভিউ ও প্রশিক্ষণের জন্য।" },
        { question: "আমাদের বর্তমান ওয়েবসাইট কি রিডিজাইন করবেন?", answer: "হ্যাঁ। প্রথম মিটিংয়ে দেখে কী রাখা হবে আর কী নতুন হবে তা প্রস্তাব করি।" },
        { question: "ওয়েবসাইট কি আরবি ও ইংরেজিতে হবে?", answer: "হ্যাঁ, দুই ভাষায় তৈরি করা আমাদের স্ট্যান্ডার্ড।" },
        { question: "ওয়েবসাইটের খরচ কত?", answer: "পেজ, ভাষা, স্টোর ও ইন্টিগ্রেশনের উপর নির্ভর করে। প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।" },
      ],
      ctaTitle: "আল খোবারে আপনার ওয়েবসাইট প্রকল্প শুরু করুন",
      ctaText: "WhatsApp-এ কোম্পানির নাম ও প্রয়োজন জানান, আমরা মিটিং ঠিক করব।",
      whatsappLabel: "WhatsApp করুন",
      callLabel: "কল করুন",
      breadcrumbHome: "হোম",
      breadcrumbServices: "সেবা",
      otherCityLabel: "আমরা দাম্মামেও সেবা দিই",
      serviceLinkLabel: "ওয়েবসাইট ডিজাইন সেবার বিস্তারিত",
    },
    dammam: {
      pageTitle: "দাম্মামে ওয়েবসাইট ডিজাইন কোম্পানি | সৌদি ইজ",
      metaDescription:
        "দাম্মামের প্রতিষ্ঠানের জন্য ওয়েবসাইট ডিজাইন: আরবি/ইংরেজি ওয়েবসাইট, কাস্টম CMS ও অনলাইন স্টোর। আমাদের টিম আল খোবারে, আমরা আপনার দাম্মাম অফিসে আসি।",
      h1: "দাম্মামে ওয়েবসাইট ডিজাইন কোম্পানি",
      answer:
        "সৌদি ইজ দাম্মামের প্রতিষ্ঠানের জন্য আরবি/ইংরেজি কোম্পানি ওয়েবসাইট তৈরি করে, সাথে CMS এবং প্রয়োজনে অনলাইন স্টোর। আমাদের টিম পাশের শহর আল খোবারে: মিটিংয়ের জন্য আমরা আপনার দাম্মাম অফিসে আসি, অথবা আপনি আমাদের আল খোবার অফিসে আসতে পারেন। WhatsApp দিয়ে শুরু করুন।",
      cityName: "দাম্মাম",
      serviceName: "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট",
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "আমরা কোথায়", value: "অফিস আল খোবারে; দাম্মামে আমাদের অফিস নেই" },
          { label: "মিটিং", value: "আমরা আপনার দাম্মাম অফিসে আসি, অথবা আল খোবারে দেখা করুন" },
          { label: "যা তৈরি করি", value: "আরবি/ইংরেজি ওয়েবসাইট, CMS, প্রয়োজনে অনলাইন স্টোর" },
          { label: "ভাষা", value: "আরবি, ইংরেজি, বাংলা" },
          { label: "মূল্য", value: "প্রথম মিটিংয়ের পরে লিখিত কোটেশন" },
          { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
        ],
      },
      sections: [
        {
          title: "আমরা আপনার দাম্মাম অফিসে আসি",
          body: [
            "দাম্মামে আমাদের অফিস নেই, এটা আমরা স্পষ্টভাবে বলি। আমাদের টিম আল খোবারে এবং প্রথম মিটিং ও পরে প্রয়োজনে দাম্মামে ক্লায়েন্টের অফিসে যায়। সুবিধা হলে আপনি আমাদের আল খোবার অফিসেও আসতে পারেন।",
            "ভিজিটে আপনার প্রতিষ্ঠান ও কাজের ধরন বুঝি, বর্তমান ওয়েবসাইট দেখি এবং ক্লায়েন্টরা সাইটে কী পাবেন তা ঠিক করি। এরপর কাজের পরিধি ও সময়সূচি লিখিতভাবে পাঠাই।",
          ],
        },
        {
          title: "কী সরাসরি আর কী অনলাইনে",
          body: [
            "প্রথম মিটিং ও হস্তান্তরের প্রশিক্ষণ আমরা আপনার দাম্মাম অফিসে সরাসরি করতে পছন্দ করি। ডিজাইন রিভিউ ও কনটেন্ট পরিবর্তন অনলাইনে বা WhatsApp-এ করা যায়।",
            "পুরো প্রকল্পে আমাদের টিমের একজন যোগাযোগকারী থাকবেন, এবং প্রতিটি ধাপ লিখিতভাবে নিশ্চিত হওয়ার পরে পরের ধাপে যাই।",
          ],
        },
        {
          title: "দাম্মামের কনট্রাক্টিং ও সরবরাহ প্রতিষ্ঠানের জন্য",
          body: [
            "আমরা এমনভাবে ওয়েবসাইট তৈরি করি যাতে ক্রয় কর্মকর্তা দ্রুত পান: প্রতিষ্ঠান কী করে, সম্পন্ন প্রকল্প, যোগাযোগ ও CR তথ্য এবং কোম্পানি প্রোফাইল ডাউনলোডের লিংক। প্রোফাইলটিও আমরা ওয়েবসাইটের সাথে মিলিয়ে ডিজাইন করতে পারি।",
          ],
        },
      ],
      faqTitle: "দাম্মামে ওয়েবসাইট ডিজাইন: সাধারণ প্রশ্ন",
      faqs: [
        { question: "দাম্মামে কি আপনাদের অফিস আছে?", answer: "না। অফিস আল খোবারে; আমরা আপনার দাম্মাম অফিসে আসি বা আপনি আল খোবারে আসেন।" },
        { question: "আপনারা কি দাম্মামে আমাদের অফিসে আসেন?", answer: "হ্যাঁ, প্রথম মিটিং ও হস্তান্তরের প্রশিক্ষণের জন্য, এবং যখনই সরাসরি মিটিং দরকার।" },
        { question: "প্রকল্প কি রিমোটে চালানো যায়?", answer: "হ্যাঁ। ডিজাইন রিভিউ ও কনটেন্ট পরিবর্তন অনলাইনে বা WhatsApp-এ হতে পারে।" },
        { question: "ওয়েবসাইটের সাথে কোম্পানি প্রোফাইল ডিজাইন করবেন?", answer: "হ্যাঁ, একই আইডেন্টিটিতে দুটোই ডিজাইন করতে পারি।" },
        { question: "দাম্মামে ওয়েবসাইটের খরচ কত?", answer: "খরচ শহরের উপর নয়, পেজ, ভাষা, স্টোর ও ইন্টিগ্রেশনের উপর নির্ভর করে। প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।" },
      ],
      ctaTitle: "দাম্মামে আপনার ওয়েবসাইট প্রকল্প শুরু করুন",
      ctaText: "WhatsApp-এ কোম্পানির নাম ও প্রয়োজন জানান, আমরা আপনার দাম্মাম অফিসে ভিজিট ঠিক করব।",
      whatsappLabel: "WhatsApp করুন",
      callLabel: "কল করুন",
      breadcrumbHome: "হোম",
      breadcrumbServices: "সেবা",
      otherCityLabel: "আমরা আল খোবারেও সেবা দিই",
      serviceLinkLabel: "ওয়েবসাইট ডিজাইন সেবার বিস্তারিত",
    },
  },
};
