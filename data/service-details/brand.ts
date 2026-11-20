// Logo & brand identity page content (MASTER-PLAN task 3-5), per language.
// This page also replaces the old logo-design and print-design pages (308 redirects).
//
// Evidence rules (docs/seo/business-goals.md): deliverables limited to those the
// site already lists (logo, identity, letterhead, business cards, brochures,
// flyers, company profile). No prices, client names, samples or results.
import type { ServiceDetail } from "./ar";

type Content = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const related = ["company-profile-branding", "website-design-development", "google-business-profile"];

export const BRAND_CONTENT: Record<string, Content> = {
  ar: {
    longDescription:
      "نصمّم الشعار والهوية البصرية للشركات بالعربية والإنجليزية: الشعار ونسخه، والألوان والخطوط، ودليل استخدام مختصر، والورق الرسمي وبطاقات العمل، والبروشورات والمطبوعات. نعمل مع شركات المقاولات والقطاع الصناعي والشركات الصغيرة في الخبر والدمام والمنطقة الشرقية. ابدأ برسالة على واتساب.",
    overview:
      "الهوية البصرية هي ما يجعل شركتك تبدو بالشكل نفسه في كل مكان: على الموقع، وفي بروفايل الشركة، وعلى العروض والفواتير، وعلى مركبات الشركة وملابس العمال. كثير من الشركات لديها شعار، لكن بلا ألوان ثابتة أو خطوط محددة، فيظهر كل مستند بشكل مختلف. نبدأ بفهم نشاطك وعملائك، ثم نصمّم شعاراً يعمل بالعربية والإنجليزية وبحجم صغير وكبير وبلون واحد، ونحدد الألوان والخطوط، ونجمع ذلك في دليل استخدام مختصر يستطيع فريقك والمطبعة الالتزام به. بعدها نطبّق الهوية على ما تحتاجه: الورق الرسمي، وبطاقات العمل، والبروشورات، وبروفايل الشركة، والموقع. لا ننشر أسعاراً ثابتة؛ نرسل عرض سعر مكتوباً بعد الاجتماع الأول.",
    benefits: [
      "شعار يعمل بالعربية والإنجليزية",
      "ألوان وخطوط ثابتة لكل مستنداتك",
      "دليل استخدام مختصر لفريقك والمطبعة",
      "ورق رسمي وبطاقات عمل ومطبوعات",
      "هوية واحدة للموقع والبروفايل",
    ],
    features: [
      "تصميم الشعار",
      "الألوان والخطوط",
      "دليل استخدام الهوية",
      "الورق الرسمي وبطاقات العمل",
      "البروشورات والمطبوعات",
    ],
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "الخدمة", value: "تصميم الشعار والهوية البصرية والمطبوعات" },
        { label: "لمن", value: "شركات المقاولات والقطاع الصناعي والشركات الصغيرة والمتوسطة" },
        { label: "ما تستلمه", value: "ملفات الشعار للطباعة والشاشة، الألوان والخطوط، دليل استخدام، وما نتفق عليه من مطبوعات" },
        { label: "أين", value: "اجتماعات في الخبر والدمام؛ عن بُعد في باقي المملكة" },
        { label: "السعر", value: "عرض سعر مكتوب بعد الاجتماع الأول (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    sections: [
      {
        title: "تصميم الشعار",
        content:
          "نصمّم الشعار ليعمل في كل مكان ستستخدمه فيه: على الموقع والجوال، وفي رأس الفاتورة، وعلى لوحة المكتب، ومطبوعاً بلون واحد. نقدم نسخة عربية ونسخة إنجليزية أو نسخة مشتركة حسب ما يناسب اسم شركتك، ونسخة أفقية وأخرى مربعة للاستخدامات المختلفة.",
      },
      {
        title: "الألوان والخطوط",
        content:
          "نحدد لوحة ألوان صغيرة بقيمها الدقيقة للطباعة والشاشة، وخطوطاً عربية وإنجليزية متناسقة. هذا ما يجعل الفاتورة والعرض والموقع تبدو من شركة واحدة، حتى لو صممها أشخاص مختلفون.",
      },
      {
        title: "دليل استخدام مختصر",
        content:
          "نجمع القواعد في دليل قصير وعملي: المسافة حول الشعار، والأحجام الدنيا، والاستخدامات الخاطئة، والألوان والخطوط. نكتبه ليستخدمه موظفوك والمطبعة ومصمم أي مورد آخر، لا ليبقى في درج.",
      },
      {
        title: "الورق الرسمي وبطاقات العمل",
        content:
          "نصمّم الورق الرسمي وبطاقات العمل والأظرف بالعربية والإنجليزية، مع بيانات الشركة الصحيحة: الاسم والسجل التجاري والرقم الضريبي والعنوان ووسائل التواصل. نسلّمها جاهزة للطباعة أو كقوالب يعدّلها فريقك.",
      },
      {
        title: "البروشورات والمطبوعات",
        content:
          "نصمّم البروشورات والفلايرات وغيرها من المطبوعات بالهوية نفسها، ونجهّز ملفات الطباعة. إذا كنت تحتاج بروفايل الشركة أيضاً، نصممه ضمن الهوية نفسها.",
      },
      {
        title: "تحديث هوية قائمة",
        content:
          "إذا كان لديك شعار تعرفه السوق، لا نغيّره بالضرورة. يمكن تحسينه وتنظيف ملفاته وتثبيت ألوانه وخطوطه، بحيث تحافظ على ما يعرفه عملاؤك وتظهر بصورة أكثر ترتيباً.",
      },
    ],
    process: [
      { title: "رسالة واجتماع", description: "ترسل لنا على واتساب، ونلتقي في الخبر أو الدمام أو عن بُعد.", icon: "MessageCircle" },
      { title: "فهم الشركة", description: "نسأل عن نشاطك وعملائك ومنافسيك وما يجب أن يوصله الشعار.", icon: "Search" },
      { title: "اتجاهات التصميم", description: "نعرض اتجاهات للشعار ونختار معك اتجاهاً لتطويره.", icon: "Palette" },
      { title: "تطوير الهوية", description: "نطوّر الشعار والألوان والخطوط وتطبيقاتها.", icon: "PenTool" },
      { title: "الدليل والمطبوعات", description: "نكتب دليل الاستخدام ونصمّم ما اتفقنا عليه من مطبوعات.", icon: "FileText" },
      { title: "التسليم", description: "تستلم ملفات الشعار والدليل والمطبوعات جاهزة.", icon: "Download" },
    ],
    faqs: [
      { question: "كم تكلفة تصميم شعار وهوية بصرية؟", answer: "لا ننشر أسعاراً ثابتة. التكلفة تعتمد على ما تحتاجه: شعار فقط، أو هوية كاملة، أو هوية مع مطبوعات وبروفايل. نرسل عرض سعر مكتوباً بعد الاجتماع الأول." },
      { question: "كم يستغرق تصميم الهوية؟", answer: "يعتمد على النطاق وسرعة المراجعات. نتفق على جدول زمني مكتوب قبل البدء." },
      { question: "هل يكون الشعار بالعربية والإنجليزية؟", answer: "نعم، نصمّم نسخة عربية ونسخة إنجليزية أو نسخة مشتركة حسب اسم شركتك." },
      { question: "ما الملفات التي أستلمها؟", answer: "ملفات الشعار للطباعة والشاشة بنسخه المختلفة، والألوان والخطوط، ودليل الاستخدام، وما نتفق عليه من مطبوعات." },
      { question: "هل تصممون الورق الرسمي وبطاقات العمل؟", answer: "نعم، بالعربية والإنجليزية مع بيانات الشركة الصحيحة." },
      { question: "عندي شعار قديم، هل يجب تغييره؟", answer: "ليس بالضرورة. يمكن تحسينه وتثبيت ألوانه وخطوطه مع الحفاظ على ما يعرفه عملاؤك." },
      { question: "هل تصممون بروفايل الشركة بالهوية نفسها؟", answer: "نعم، يمكن تصميم البروفايل والموقع بالهوية نفسها." },
      { question: "هل تخدمون شركات خارج الخبر والدمام؟", answer: "نعم، عن بُعد في كل مناطق المملكة. الاجتماعات الحضورية في الخبر والدمام." },
    ],
    relatedServices: related,
  },

  en: {
    longDescription:
      "We design logos and visual identities for companies in Arabic and English: the logo and its versions, colours and fonts, a short brand guide, letterhead and business cards, brochures and printed materials. We work with contracting, industrial and smaller companies in Al Khobar, Dammam and the Eastern Province. Start with a WhatsApp message.",
    overview:
      "A visual identity is what makes your company look the same everywhere: on the website, in the company profile, on quotations and invoices, on company vehicles and work uniforms. Many companies have a logo but no fixed colours or fonts, so every document looks different. We start by understanding your business and clients, then design a logo that works in Arabic and English, small and large, and in one colour. We define the colours and fonts and collect everything in a short brand guide your team and printer can follow. Then we apply the identity to what you need: letterhead, business cards, brochures, the company profile and the website. We don't publish fixed prices; you get a written quote after the first meeting.",
    benefits: [
      "A logo that works in Arabic and English",
      "Fixed colours and fonts for all documents",
      "A short brand guide for your team and printer",
      "Letterhead, business cards and printed materials",
      "One identity for your website and profile",
    ],
    features: [
      "Logo design",
      "Colours and fonts",
      "Brand guide",
      "Letterhead and business cards",
      "Brochures and print",
    ],
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "Service", value: "Logo, visual identity and printed materials" },
        { label: "For", value: "Contracting and industrial companies; small and medium businesses" },
        { label: "You receive", value: "Logo files for print and screen, colours and fonts, brand guide, and the printed items we agree" },
        { label: "Where", value: "Meetings in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "Price", value: "Written quote after the first meeting (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "Logo design",
        content:
          "We design the logo to work everywhere you will use it: on the website and phones, in the invoice header, on the office sign, and printed in one colour. You get an Arabic and an English version, or a combined one, depending on your company name, plus horizontal and square versions for different uses.",
      },
      {
        title: "Colours and fonts",
        content:
          "We set a small colour palette with exact values for print and screen, and matching Arabic and English fonts. That is what makes your invoice, presentation and website look like one company, even when different people make them.",
      },
      {
        title: "A short brand guide",
        content:
          "We collect the rules in a short, practical guide: clear space around the logo, minimum sizes, wrong uses, colours and fonts. It is written for your staff, your printer and any supplier's designer, not to sit in a drawer.",
      },
      {
        title: "Letterhead and business cards",
        content:
          "We design letterhead, business cards and envelopes in Arabic and English with your correct company details: name, CR, VAT number, address and contacts. You get them print-ready or as templates your team can edit.",
      },
      {
        title: "Brochures and printed materials",
        content:
          "We design brochures, flyers and other printed items in the same identity and prepare the print files. If you also need a company profile, we design it in the same identity.",
      },
      {
        title: "Refreshing an existing identity",
        content:
          "If your market already knows your logo, we don't have to change it. We can refine it, clean up its files and fix its colours and fonts, so you keep what your clients recognise and look more organised.",
      },
    ],
    process: [
      { title: "Message and meeting", description: "Message us on WhatsApp; we meet in Al Khobar, Dammam or online.", icon: "MessageCircle" },
      { title: "Understand the company", description: "We ask about your business, clients, competitors and what the logo should say.", icon: "Search" },
      { title: "Design directions", description: "We show logo directions and choose one with you to develop.", icon: "Palette" },
      { title: "Develop the identity", description: "We develop the logo, colours, fonts and their applications.", icon: "PenTool" },
      { title: "Guide and print items", description: "We write the brand guide and design the agreed printed items.", icon: "FileText" },
      { title: "Delivery", description: "You receive the logo files, guide and print-ready items.", icon: "Download" },
    ],
    faqs: [
      { question: "How much does a logo and brand identity cost?", answer: "We don't publish fixed prices. It depends on what you need: a logo only, a full identity, or an identity with printed items and a company profile. You get a written quote after the first meeting." },
      { question: "How long does a brand identity take?", answer: "It depends on the scope and how quickly reviews happen. We agree a written timeline before starting." },
      { question: "Will the logo be in Arabic and English?", answer: "Yes, an Arabic and an English version, or a combined one, depending on your company name." },
      { question: "Which files do I receive?", answer: "Logo files for print and screen in their different versions, colours and fonts, the brand guide, and the printed items we agree." },
      { question: "Do you design letterhead and business cards?", answer: "Yes, in Arabic and English with your correct company details." },
      { question: "I have an old logo. Do I need to change it?", answer: "Not necessarily. We can refine it and fix its colours and fonts while keeping what your clients recognise." },
      { question: "Can you design the company profile in the same identity?", answer: "Yes, the profile and the website can be designed in the same identity." },
      { question: "Do you work with companies outside Al Khobar and Dammam?", answer: "Yes, remotely anywhere in Saudi Arabia. In-person meetings are in Al Khobar and Dammam." },
    ],
    relatedServices: related,
  },

  bn: {
    longDescription:
      "আমরা আরবি ও ইংরেজিতে প্রতিষ্ঠানের লোগো ও ভিজ্যুয়াল আইডেন্টিটি ডিজাইন করি: লোগো ও এর সংস্করণ, রং ও ফন্ট, সংক্ষিপ্ত ব্র্যান্ড গাইড, লেটারহেড ও বিজনেস কার্ড, ব্রোশিওর ও প্রিন্ট উপকরণ। আল খোবার, দাম্মাম ও পূর্বাঞ্চলের কনট্রাক্টিং, শিল্প ও ছোট প্রতিষ্ঠানের সাথে কাজ করি। WhatsApp দিয়ে শুরু করুন।",
    overview:
      "ভিজ্যুয়াল আইডেন্টিটি আপনার প্রতিষ্ঠানকে সব জায়গায় একরকম দেখায়: ওয়েবসাইট, কোম্পানি প্রোফাইল, কোটেশন ও ইনভয়েস, গাড়ি ও কর্মীদের পোশাক। অনেক প্রতিষ্ঠানের লোগো আছে কিন্তু নির্দিষ্ট রং বা ফন্ট নেই, তাই প্রতিটি নথি আলাদা দেখায়। আমরা আপনার ব্যবসা ও ক্লায়েন্ট বুঝে এমন লোগো ডিজাইন করি যা আরবি ও ইংরেজিতে, ছোট-বড় আকারে ও এক রঙে কাজ করে। রং ও ফন্ট ঠিক করে একটি সংক্ষিপ্ত গাইডে রাখি, যা আপনার টিম ও প্রিন্টার মানতে পারে। তারপর লেটারহেড, বিজনেস কার্ড, ব্রোশিওর, প্রোফাইল ও ওয়েবসাইটে প্রয়োগ করি। নির্দিষ্ট মূল্য প্রকাশ করি না; প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।",
    benefits: [
      "আরবি ও ইংরেজিতে কাজ করে এমন লোগো",
      "সব নথির জন্য নির্দিষ্ট রং ও ফন্ট",
      "টিম ও প্রিন্টারের জন্য সংক্ষিপ্ত গাইড",
      "লেটারহেড, বিজনেস কার্ড ও প্রিন্ট উপকরণ",
      "ওয়েবসাইট ও প্রোফাইলের জন্য একই পরিচয়",
    ],
    features: [
      "লোগো ডিজাইন",
      "রং ও ফন্ট",
      "ব্র্যান্ড গাইড",
      "লেটারহেড ও বিজনেস কার্ড",
      "ব্রোশিওর ও প্রিন্ট",
    ],
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "সেবা", value: "লোগো, ভিজ্যুয়াল আইডেন্টিটি ও প্রিন্ট উপকরণ" },
        { label: "কাদের জন্য", value: "কনট্রাক্টিং ও শিল্প প্রতিষ্ঠান; ছোট ও মাঝারি ব্যবসা" },
        { label: "যা পাবেন", value: "প্রিন্ট ও স্ক্রিনের লোগো ফাইল, রং ও ফন্ট, গাইড এবং চুক্তিকৃত প্রিন্ট উপকরণ" },
        { label: "কোথায়", value: "আল খোবার ও দাম্মামে মিটিং; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "মূল্য", value: "প্রথম মিটিংয়ের পরে লিখিত কোটেশন" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "লোগো ডিজাইন",
        content:
          "লোগো এমনভাবে ডিজাইন করি যাতে সব জায়গায় কাজ করে: ওয়েবসাইট ও মোবাইলে, ইনভয়েসের হেডারে, অফিসের সাইনবোর্ডে এবং এক রঙে প্রিন্টে। প্রতিষ্ঠানের নাম অনুযায়ী আরবি ও ইংরেজি সংস্করণ বা একটি যৌথ সংস্করণ, সাথে আনুভূমিক ও বর্গাকার সংস্করণ।",
      },
      {
        title: "রং ও ফন্ট",
        content:
          "প্রিন্ট ও স্ক্রিনের সঠিক মানসহ ছোট একটি রঙের তালিকা এবং মানানসই আরবি ও ইংরেজি ফন্ট ঠিক করি, যাতে সব নথি একই প্রতিষ্ঠানের মনে হয়।",
      },
      {
        title: "সংক্ষিপ্ত ব্র্যান্ড গাইড",
        content:
          "লোগোর চারপাশের জায়গা, ন্যূনতম আকার, ভুল ব্যবহার, রং ও ফন্টের নিয়ম একটি ছোট ব্যবহারিক গাইডে রাখি, যা আপনার কর্মী ও প্রিন্টার ব্যবহার করতে পারে।",
      },
      {
        title: "লেটারহেড ও বিজনেস কার্ড",
        content:
          "সঠিক তথ্যসহ (নাম, CR, ভ্যাট নম্বর, ঠিকানা, যোগাযোগ) আরবি ও ইংরেজিতে লেটারহেড, বিজনেস কার্ড ও খাম ডিজাইন করি, প্রিন্ট-প্রস্তুত বা সম্পাদনাযোগ্য টেমপ্লেট হিসেবে।",
      },
      {
        title: "ব্রোশিওর ও প্রিন্ট উপকরণ",
        content:
          "একই পরিচয়ে ব্রোশিওর, ফ্লায়ার ও অন্যান্য প্রিন্ট উপকরণ ডিজাইন করে প্রিন্ট ফাইল প্রস্তুত করি। কোম্পানি প্রোফাইলও একই পরিচয়ে করা যায়।",
      },
      {
        title: "বর্তমান আইডেন্টিটি হালনাগাদ",
        content:
          "বাজার যদি আপনার লোগো চেনে, তা বদলানো জরুরি নয়। আমরা পরিমার্জন করে ফাইল গুছিয়ে রং ও ফন্ট নির্দিষ্ট করতে পারি।",
      },
    ],
    process: [
      { title: "মেসেজ ও মিটিং", description: "WhatsApp করুন; আল খোবার, দাম্মাম বা অনলাইনে দেখা করি।", icon: "MessageCircle" },
      { title: "প্রতিষ্ঠান বোঝা", description: "ব্যবসা, ক্লায়েন্ট ও লোগো কী বলবে তা জানি।", icon: "Search" },
      { title: "ডিজাইন দিকনির্দেশনা", description: "কয়েকটি দিক দেখিয়ে একটি বেছে নিই।", icon: "Palette" },
      { title: "আইডেন্টিটি তৈরি", description: "লোগো, রং, ফন্ট ও প্রয়োগ তৈরি করি।", icon: "PenTool" },
      { title: "গাইড ও প্রিন্ট", description: "গাইড লিখি ও চুক্তিকৃত প্রিন্ট উপকরণ ডিজাইন করি।", icon: "FileText" },
      { title: "হস্তান্তর", description: "লোগো ফাইল, গাইড ও প্রিন্ট-প্রস্তুত উপকরণ পাবেন।", icon: "Download" },
    ],
    faqs: [
      { question: "লোগো ও ব্র্যান্ড আইডেন্টিটির খরচ কত?", answer: "নির্দিষ্ট মূল্য প্রকাশ করি না। শুধু লোগো, পূর্ণ আইডেন্টিটি, নাকি প্রিন্ট ও প্রোফাইলসহ, তার উপর নির্ভর করে। প্রথম মিটিংয়ের পরে লিখিত কোটেশন দিই।" },
      { question: "কত সময় লাগে?", answer: "পরিধি ও রিভিউয়ের গতির উপর নির্ভর করে। শুরুর আগে লিখিত সময়সূচি ঠিক করি।" },
      { question: "লোগো কি আরবি ও ইংরেজিতে হবে?", answer: "হ্যাঁ, আরবি ও ইংরেজি সংস্করণ বা নাম অনুযায়ী একটি যৌথ সংস্করণ।" },
      { question: "কোন ফাইল পাব?", answer: "প্রিন্ট ও স্ক্রিনের লোগো ফাইল, রং ও ফন্ট, গাইড এবং চুক্তিকৃত প্রিন্ট উপকরণ।" },
      { question: "পুরনো লোগো কি বদলাতে হবে?", answer: "জরুরি নয়। ক্লায়েন্টরা যা চেনে তা রেখে পরিমার্জন করা যায়।" },
      { question: "একই আইডেন্টিটিতে প্রোফাইল ডিজাইন করবেন?", answer: "হ্যাঁ, প্রোফাইল ও ওয়েবসাইট একই আইডেন্টিটিতে।" },
    ],
    relatedServices: related,
  },
};
