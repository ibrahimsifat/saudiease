// SEO titles (≤ 60 chars) and meta descriptions (120–155 chars) for the main
// service pages, written per language from docs/seo/keyword-map.md (not
// translated). Applied over the page data in ./index.ts.
export const SERVICE_SEO: Record<
  string,
  Record<string, { pageTitle: string; metaDescription: string }>
> = {
  ar: {
    "website-design-development": {
      pageTitle: "شركة تصميم مواقع في الخبر والدمام | سعودي إيز",
      metaDescription:
        "تصميم وتطوير مواقع الشركات باللغتين العربية والإنجليزية، مع نظام إدارة محتوى ومتاجر إلكترونية. نخدم الخبر والدمام والمنطقة الشرقية. راسلنا على واتساب.",
    },
    "zatca-e-invoicing": {
      pageTitle: "ربط الفاتورة الإلكترونية زاتكا المرحلة الثانية | سعودي إيز",
      metaDescription:
        "نجهّز ونربط أنظمة فوترة إلكترونية متوافقة مع متطلبات زاتكا في المرحلتين الأولى والثانية لشركات المنطقة الشرقية. اسألنا على واتساب عن نظامك الحالي.",
    },
    "company-profile-branding": {
      pageTitle: "تصميم بروفايل شركة مقاولات احترافي | سعودي إيز",
      metaDescription:
        "تصميم بروفايل شركة احترافي لشركات المقاولات والقطاع الصناعي للتأهيل المسبق والمناقصات، بالعربية والإنجليزية. نخدم الخبر والدمام. راسلنا على واتساب.",
    },
    "brand-identity": {
      pageTitle: "شركة تصميم هوية بصرية وشعار في السعودية | سعودي إيز",
      metaDescription:
        "تصميم الشعار والهوية البصرية ودليل استخدام العلامة والمطبوعات للشركات في الخبر والدمام والمنطقة الشرقية، بالعربية والإنجليزية. راسلنا على واتساب.",
    },
    "mobile-app-development": {
      pageTitle: "شركة برمجة تطبيقات جوال في السعودية | سعودي إيز",
      metaDescription:
        "برمجة تطبيقات جوال لأنظمة iOS وأندرويد للشركات في الخبر والدمام والمنطقة الشرقية، بواجهات عربية وإنجليزية. أخبرنا بفكرة تطبيقك على واتساب.",
    },
  },
  en: {
    "website-design-development": {
      pageTitle: "Website Design Company in Al Khobar & Dammam | Saudi Ease",
      metaDescription:
        "Bilingual Arabic/English company websites, custom CMS and e-commerce for businesses in Al Khobar, Dammam and the Eastern Province. Message us on WhatsApp.",
    },
    "zatca-e-invoicing": {
      pageTitle: "ZATCA E-Invoicing Setup & Phase 2 Integration | Saudi Ease",
      metaDescription:
        "We set up and integrate e-invoicing software that meets ZATCA Phase 1 and Phase 2 requirements for Eastern Province companies. Ask us on WhatsApp.",
    },
    "company-profile-branding": {
      pageTitle: "Company Profile Design for Contractors | Saudi Ease",
      metaDescription:
        "Company profiles for contracting and industrial companies, built for pre-qualification and tenders, in Arabic and English. Al Khobar and Dammam.",
    },
    "brand-identity": {
      pageTitle: "Logo & Brand Identity Design in Saudi Arabia | Saudi Ease",
      metaDescription:
        "Logo, brand identity, brand guidelines and printed materials for companies in Al Khobar, Dammam and the Eastern Province, in Arabic and English.",
    },
    "mobile-app-development": {
      pageTitle: "Mobile App Development Company in Saudi Arabia | Saudi Ease",
      metaDescription:
        "iOS and Android app development for businesses in Al Khobar, Dammam and the Eastern Province, with Arabic and English interfaces. Message us on WhatsApp.",
    },
  },
  bn: {
    "website-design-development": {
      pageTitle: "আল খোবার ও দাম্মামে ওয়েবসাইট ডিজাইন | সৌদি ইজ",
      metaDescription:
        "আল খোবার, দাম্মাম ও পূর্বাঞ্চলের ব্যবসার জন্য আরবি/ইংরেজি কোম্পানি ওয়েবসাইট, কাস্টম CMS ও ই-কমার্স। আপনার প্রকল্প নিয়ে WhatsApp করুন।",
    },
    "zatca-e-invoicing": {
      pageTitle: "ZATCA ই-ইনভয়েসিং সেটআপ ও ফেজ ২ ইন্টিগ্রেশন | সৌদি ইজ",
      metaDescription:
        "পূর্বাঞ্চলের প্রতিষ্ঠানের জন্য ZATCA ফেজ ১ ও ফেজ ২-এর প্রয়োজনীয়তা পূরণকারী ই-ইনভয়েসিং সফটওয়্যার সেটআপ ও ইন্টিগ্রেশন। WhatsApp-এ জিজ্ঞেস করুন।",
    },
    "company-profile-branding": {
      pageTitle: "কনট্রাক্টিং কোম্পানির প্রোফাইল ডিজাইন | সৌদি ইজ",
      metaDescription:
        "প্রি-কোয়ালিফিকেশন ও টেন্ডারের জন্য কনট্রাক্টিং ও শিল্প প্রতিষ্ঠানের কোম্পানি প্রোফাইল, আরবি ও ইংরেজিতে। আল খোবার ও দাম্মামে সেবা দিই।",
    },
    "brand-identity": {
      pageTitle: "সৌদি আরবে লোগো ও ব্র্যান্ড আইডেন্টিটি ডিজাইন | সৌদি ইজ",
      metaDescription:
        "আল খোবার, দাম্মাম ও পূর্বাঞ্চলের প্রতিষ্ঠানের জন্য লোগো, ব্র্যান্ড আইডেন্টিটি, ব্র্যান্ড গাইডলাইন ও প্রিন্ট উপকরণ, আরবি ও ইংরেজিতে।",
    },
    "mobile-app-development": {
      pageTitle: "সৌদি আরবে মোবাইল অ্যাপ ডেভেলপমেন্ট | সৌদি ইজ",
      metaDescription:
        "আল খোবার, দাম্মাম ও পূর্বাঞ্চলের ব্যবসার জন্য আরবি ও ইংরেজি ইন্টারফেসসহ iOS ও অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট। আপনার অ্যাপের আইডিয়া WhatsApp করুন।",
    },
  },
};
