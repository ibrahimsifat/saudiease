// Mobile app development page content (MASTER-PLAN task 3-6), per language.
//
// Evidence rules (docs/seo/business-goals.md): app types and features are those the
// site already lists (field-team apps: attendance & GPS, site photo/video reports,
// equipment maintenance logs, material requests, offline use). They are described
// as what we build, not as past client results. No prices, client names, store
// ratings or download numbers. Technologies are kept from the existing page data.
import type { ServiceDetail } from "./ar";

type Content = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const related = ["website-design-development", "it-support-retainer", "zatca-e-invoicing"];

export const APPS_CONTENT: Record<string, Content> = {
  ar: {
    longDescription:
      "نبرمج تطبيقات جوال لأنظمة iOS وأندرويد بواجهات عربية وإنجليزية، مع تركيز على تطبيقات الفرق الميدانية لشركات المقاولات والقطاع الصناعي: الحضور بالموقع الجغرافي، وتقارير الموقع بالصور، وسجلات صيانة المعدات، وطلبات المواد، والعمل دون إنترنت. نخدم الخبر والدمام والمنطقة الشرقية. أخبرنا بفكرة تطبيقك على واتساب.",
    overview:
      "أغلب الشركات لا تحتاج تطبيقاً لأنه موضة، بل لأن عملاً يومياً يضيع بين الورق والمكالمات ومجموعات واتساب: حضور العمال في المواقع، وصور تقدم العمل، وطلبات المواد، وأعطال المعدات. نبدأ بهذه المشكلة تحديداً: من سيستخدم التطبيق، وأين، وبأي جهاز، وهل توجد تغطية إنترنت في الموقع. ثم نبني تطبيقاً بسيطاً يؤدي هذا العمل جيداً، مع لوحة تحكم للإدارة على الويب، وواجهات بالعربية والإنجليزية، ودعم للعمل دون إنترنت عند الحاجة ثم المزامنة لاحقاً. يمكن أن يكون التطبيق داخلياً لفريقك فقط، أو منشوراً على متجري آبل وجوجل لعملائك. لا ننشر أسعاراً ثابتة؛ نرسل عرض سعر مكتوباً بعد تحديد النطاق.",
    benefits: [
      "تطبيق iOS وأندرويد بالعربية والإنجليزية",
      "مصمم لمستخدمين في المواقع الميدانية",
      "يعمل دون إنترنت ويزامن لاحقاً",
      "لوحة تحكم للإدارة على الويب",
      "نشر على المتاجر أو استخدام داخلي",
    ],
    features: [
      "الحضور بالموقع الجغرافي",
      "تقارير الموقع بالصور والفيديو",
      "سجلات صيانة المعدات",
      "طلبات المواد",
      "تطبيقات للعملاء على المتاجر",
    ],
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "الخدمة", value: "برمجة تطبيقات جوال iOS وأندرويد مع لوحة تحكم على الويب" },
        { label: "لمن", value: "شركات المقاولات والقطاع الصناعي، والشركات التي تحتاج تطبيقاً لعملائها" },
        { label: "أين", value: "اجتماعات في الخبر والدمام؛ عن بُعد في باقي المملكة" },
        { label: "اللغات", value: "واجهات بالعربية والإنجليزية" },
        { label: "السعر", value: "عرض سعر مكتوب بعد تحديد النطاق (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    sections: [
      {
        title: "تطبيقات للفرق الميدانية",
        content:
          "نبني تطبيقات يستخدمها المشرفون والعمال في المواقع: تسجيل الحضور والانصراف مع الموقع الجغرافي، وإرسال صور وفيديو لتقدم العمل، وتسجيل أعطال المعدات وصيانتها، وطلب المواد من المستودع. نصمّم الشاشات لتُستخدم بسرعة، بأزرار كبيرة ونصوص واضحة، لأن المستخدم غالباً واقف في موقع عمل.",
      },
      {
        title: "العمل دون إنترنت",
        content:
          "في كثير من المواقع تكون التغطية ضعيفة. يمكن أن يحفظ التطبيق البيانات على الجهاز ويرسلها تلقائياً عند عودة الاتصال، حتى لا يضيع تسجيل حضور أو تقرير. نحدد في نطاق العمل ما يحتاج العمل دون إنترنت وما لا يحتاج.",
      },
      {
        title: "لوحة تحكم للإدارة",
        content:
          "ما يُدخل في التطبيق يظهر للإدارة في لوحة تحكم على الويب: الحضور لكل موقع، والتقارير والصور، وطلبات المواد وحالتها. يمكن تصدير البيانات أو ربطها بأنظمتك الأخرى إذا اتفقنا على ذلك في النطاق.",
      },
      {
        title: "تطبيقات لعملائك",
        content:
          "إذا كنت تحتاج تطبيقاً يستخدمه عملاؤك، مثل الطلبات أو الحجوزات أو متابعة الخدمات، نبنيه بالعربية والإنجليزية ونجهّزه للنشر على متجري آبل وجوجل. نتفق في النطاق على حسابات المطوّر التي يُنشر بها التطبيق.",
      },
      {
        title: "نبدأ صغيراً",
        content:
          "ننصح غالباً بنسخة أولى تحل المشكلة الأساسية فقط، ثم نضيف المزايا بعد أن يستخدمها فريقك فعلاً. هذا يقلل التكلفة والوقت، ويجعل الإضافات مبنية على استخدام حقيقي لا على تخمين.",
      },
      {
        title: "بعد الإطلاق",
        content:
          "نتابع التطبيق بعد الإطلاق ونصلح ما يظهر من ملاحظات، ونحدّثه مع تحديثات أنظمة iOS وأندرويد. يمكن أن يستمر ذلك عبر عقد دعم تقني شهري.",
      },
    ],
    process: [
      { title: "رسالة واجتماع", description: "تخبرنا بالمشكلة على واتساب، ونلتقي في الخبر أو الدمام أو عن بُعد.", icon: "MessageCircle" },
      { title: "تحديد النطاق", description: "نحدد المستخدمين والشاشات والنسخة الأولى، ونرسل النطاق والسعر مكتوبين.", icon: "ClipboardList" },
      { title: "تصميم الشاشات", description: "نصمّم الشاشات بالعربية والإنجليزية وتراجعها معنا.", icon: "Palette" },
      { title: "البرمجة", description: "نبرمج التطبيق ولوحة التحكم، ونعرض عليك نسخاً تجريبية.", icon: "Code" },
      { title: "الاختبار", description: "يجرب فريقك التطبيق في الموقع ونصلح الملاحظات.", icon: "CheckCircle" },
      { title: "الإطلاق", description: "ننشر التطبيق أو نوزعه داخلياً وندرّب المستخدمين.", icon: "Rocket" },
    ],
    faqs: [
      { question: "كم تكلفة برمجة تطبيق جوال؟", answer: "لا ننشر أسعاراً ثابتة. التكلفة تعتمد على عدد الشاشات والمستخدمين، والعمل دون إنترنت، ولوحة التحكم، وأي ربط مع أنظمة أخرى. نرسل عرض سعر مكتوباً بعد تحديد النطاق." },
      { question: "كم يستغرق تطوير التطبيق؟", answer: "يعتمد على النطاق. ننصح بنسخة أولى صغيرة، ونتفق على جدول زمني مكتوب قبل البدء." },
      { question: "هل يعمل التطبيق على آيفون وأندرويد؟", answer: "نعم، نبني التطبيق للنظامين." },
      { question: "هل يعمل التطبيق دون إنترنت؟", answer: "يمكن ذلك: يحفظ البيانات على الجهاز ويرسلها عند عودة الاتصال. نحدد ذلك في النطاق." },
      { question: "هل تنشرون التطبيق على المتاجر؟", answer: "نعم، نجهّز التطبيق وننشره على متجري آبل وجوجل، أو نوزعه داخلياً لفريقك فقط. نتفق مسبقاً على حسابات المطوّر." },
      { question: "هل يكون التطبيق بالعربية والإنجليزية؟", answer: "نعم، بواجهات باللغتين." },
      { question: "هل تبنون لوحة تحكم للإدارة؟", answer: "نعم، لوحة تحكم على الويب لمتابعة ما يُدخل في التطبيق." },
      { question: "هل تخدمون شركات خارج الخبر والدمام؟", answer: "نعم، عن بُعد في كل مناطق المملكة. الاجتماعات الحضورية في الخبر والدمام." },
    ],
    relatedServices: related,
  },

  en: {
    longDescription:
      "We build iOS and Android apps with Arabic and English interfaces, with a focus on field-team apps for contracting and industrial companies: GPS attendance, site photo reports, equipment maintenance logs, material requests and offline use. We serve Al Khobar, Dammam and the Eastern Province. Tell us about your app idea on WhatsApp.",
    overview:
      "Most companies don't need an app because it's fashionable, but because daily work gets lost between paper, calls and WhatsApp groups: worker attendance on sites, progress photos, material requests and equipment faults. We start from that specific problem: who will use the app, where, on which device, and whether there is internet coverage on site. Then we build a simple app that does that job well, with a web admin panel for management, Arabic and English interfaces, and offline support where needed with sync later. The app can be internal for your team, or published on the Apple and Google stores for your customers. We don't publish fixed prices; you get a written quote once the scope is defined.",
    benefits: [
      "iOS and Android app in Arabic and English",
      "Designed for people on site",
      "Works offline and syncs later",
      "Web admin panel for management",
      "Store release or internal use",
    ],
    features: [
      "GPS attendance",
      "Site photo and video reports",
      "Equipment maintenance logs",
      "Material requests",
      "Customer apps on the stores",
    ],
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "Service", value: "iOS and Android app development with a web admin panel" },
        { label: "For", value: "Contracting and industrial companies, and businesses that need an app for their customers" },
        { label: "Where", value: "Meetings in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "Languages", value: "Arabic and English interfaces" },
        { label: "Price", value: "Written quote once the scope is defined (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "Apps for field teams",
        content:
          "We build apps used by supervisors and workers on site: clock-in and clock-out with GPS location, photos and videos of work progress, equipment faults and maintenance, and material requests to the store. We design screens to be used quickly, with large buttons and clear text, because the user is usually standing on a work site.",
      },
      {
        title: "Working offline",
        content:
          "Coverage is weak on many sites. The app can save data on the device and send it automatically when the connection returns, so no attendance record or report is lost. We define in the scope what needs to work offline and what doesn't.",
      },
      {
        title: "Admin panel for management",
        content:
          "What is entered in the app shows up for management in a web admin panel: attendance per site, reports and photos, material requests and their status. Data can be exported or connected to your other systems if we agree that in the scope.",
      },
      {
        title: "Apps for your customers",
        content:
          "If you need an app your customers use, such as ordering, bookings or service tracking, we build it in Arabic and English and prepare it for the Apple and Google stores. We agree in the scope which developer accounts the app is published under.",
      },
      {
        title: "Start small",
        content:
          "We usually recommend a first version that solves the core problem only, then adding features after your team actually uses it. That keeps cost and time down and means additions are based on real use, not guesses.",
      },
      {
        title: "After launch",
        content:
          "We follow up after launch, fix what comes up, and update the app as iOS and Android change. This can continue through a monthly IT support retainer.",
      },
    ],
    process: [
      { title: "Message and meeting", description: "Tell us the problem on WhatsApp; we meet in Al Khobar, Dammam or online.", icon: "MessageCircle" },
      { title: "Define the scope", description: "Users, screens and first version, with scope and price in writing.", icon: "ClipboardList" },
      { title: "Screen design", description: "We design the screens in Arabic and English and review them with you.", icon: "Palette" },
      { title: "Development", description: "We build the app and admin panel and share test versions.", icon: "Code" },
      { title: "Testing", description: "Your team tries the app on site and we fix the feedback.", icon: "CheckCircle" },
      { title: "Launch", description: "We publish or distribute the app internally and train users.", icon: "Rocket" },
    ],
    faqs: [
      { question: "How much does a mobile app cost?", answer: "We don't publish fixed prices. The cost depends on the number of screens and users, offline use, the admin panel and any integration with other systems. You get a written quote once the scope is defined." },
      { question: "How long does an app take?", answer: "It depends on the scope. We recommend a small first version and agree a written timeline before starting." },
      { question: "Does the app work on iPhone and Android?", answer: "Yes, we build for both." },
      { question: "Can the app work offline?", answer: "Yes: it can save data on the device and send it when the connection returns. We define this in the scope." },
      { question: "Do you publish the app on the stores?", answer: "Yes, we prepare and publish it on the Apple and Google stores, or distribute it internally to your team only. We agree the developer accounts in advance." },
      { question: "Will the app be in Arabic and English?", answer: "Yes, with interfaces in both languages." },
      { question: "Do you build an admin panel?", answer: "Yes, a web admin panel to follow what is entered in the app." },
      { question: "Do you work with companies outside Al Khobar and Dammam?", answer: "Yes, remotely anywhere in Saudi Arabia. In-person meetings are in Al Khobar and Dammam." },
    ],
    relatedServices: related,
  },

  bn: {
    longDescription:
      "আমরা আরবি ও ইংরেজি ইন্টারফেসসহ iOS ও অ্যান্ড্রয়েড অ্যাপ তৈরি করি, বিশেষ করে কনট্রাক্টিং ও শিল্প প্রতিষ্ঠানের ফিল্ড টিমের জন্য: GPS হাজিরা, সাইটের ছবি রিপোর্ট, যন্ত্রপাতি রক্ষণাবেক্ষণ লগ, উপকরণের অনুরোধ ও অফলাইন ব্যবহার। আল খোবার, দাম্মাম ও পূর্বাঞ্চলে সেবা দিই। আপনার অ্যাপের আইডিয়া WhatsApp করুন।",
    overview:
      "বেশিরভাগ প্রতিষ্ঠানের অ্যাপ লাগে কারণ প্রতিদিনের কাজ কাগজ, ফোন ও WhatsApp গ্রুপে হারিয়ে যায়: সাইটে কর্মীদের হাজিরা, কাজের অগ্রগতির ছবি, উপকরণের অনুরোধ ও যন্ত্রপাতির সমস্যা। আমরা সেই নির্দিষ্ট সমস্যা থেকে শুরু করি: কে, কোথায়, কোন ডিভাইসে ব্যবহার করবেন এবং সাইটে ইন্টারনেট আছে কি না। তারপর একটি সহজ অ্যাপ তৈরি করি, সাথে ম্যানেজমেন্টের জন্য ওয়েব অ্যাডমিন প্যানেল, আরবি ও ইংরেজি ইন্টারফেস এবং প্রয়োজনে অফলাইন সাপোর্ট। অ্যাপ শুধু আপনার টিমের জন্য অভ্যন্তরীণ হতে পারে, অথবা গ্রাহকদের জন্য অ্যাপল ও গুগল স্টোরে প্রকাশিত। নির্দিষ্ট মূল্য প্রকাশ করি না; পরিধি ঠিক হলে লিখিত কোটেশন দিই।",
    benefits: [
      "আরবি ও ইংরেজিতে iOS ও অ্যান্ড্রয়েড অ্যাপ",
      "সাইটে কাজ করা মানুষের জন্য ডিজাইন",
      "অফলাইনে কাজ করে, পরে সিঙ্ক হয়",
      "ম্যানেজমেন্টের জন্য ওয়েব অ্যাডমিন প্যানেল",
      "স্টোরে প্রকাশ বা অভ্যন্তরীণ ব্যবহার",
    ],
    features: [
      "GPS হাজিরা",
      "সাইটের ছবি ও ভিডিও রিপোর্ট",
      "যন্ত্রপাতি রক্ষণাবেক্ষণ লগ",
      "উপকরণের অনুরোধ",
      "স্টোরে গ্রাহক অ্যাপ",
    ],
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "সেবা", value: "ওয়েব অ্যাডমিন প্যানেলসহ iOS ও অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট" },
        { label: "কাদের জন্য", value: "কনট্রাক্টিং ও শিল্প প্রতিষ্ঠান, এবং গ্রাহকদের জন্য অ্যাপ প্রয়োজন এমন ব্যবসা" },
        { label: "কোথায়", value: "আল খোবার ও দাম্মামে মিটিং; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "ভাষা", value: "আরবি ও ইংরেজি ইন্টারফেস" },
        { label: "মূল্য", value: "পরিধি ঠিক হলে লিখিত কোটেশন" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "ফিল্ড টিমের অ্যাপ",
        content:
          "সুপারভাইজার ও কর্মীদের জন্য অ্যাপ: GPS লোকেশনসহ হাজিরা, কাজের অগ্রগতির ছবি ও ভিডিও, যন্ত্রপাতির সমস্যা ও রক্ষণাবেক্ষণ, এবং স্টোরে উপকরণের অনুরোধ। বড় বাটন ও স্পষ্ট লেখা দিয়ে দ্রুত ব্যবহারের মতো স্ক্রিন ডিজাইন করি।",
      },
      {
        title: "অফলাইনে কাজ",
        content:
          "অনেক সাইটে নেটওয়ার্ক দুর্বল। অ্যাপ ডিভাইসে ডেটা রেখে সংযোগ ফিরলে নিজে পাঠাতে পারে, যাতে কোনো হাজিরা বা রিপোর্ট হারিয়ে না যায়।",
      },
      {
        title: "ম্যানেজমেন্টের অ্যাডমিন প্যানেল",
        content:
          "অ্যাপে যা দেওয়া হয় তা ওয়েব অ্যাডমিন প্যানেলে দেখা যায়: সাইটভিত্তিক হাজিরা, রিপোর্ট ও ছবি, উপকরণের অনুরোধ ও তার অবস্থা।",
      },
      {
        title: "গ্রাহকদের জন্য অ্যাপ",
        content:
          "অর্ডার, বুকিং বা সেবা ট্র্যাকিংয়ের মতো গ্রাহক অ্যাপ আরবি ও ইংরেজিতে তৈরি করে অ্যাপল ও গুগল স্টোরের জন্য প্রস্তুত করি। কোন ডেভেলপার অ্যাকাউন্টে প্রকাশ হবে তা আগে ঠিক করি।",
      },
      {
        title: "ছোট করে শুরু",
        content:
          "সাধারণত প্রথমে শুধু মূল সমস্যার সমাধান করে এমন একটি সংস্করণ, তারপর টিম আসলে ব্যবহার করার পরে নতুন ফিচার যোগ করার পরামর্শ দিই।",
      },
      {
        title: "লঞ্চের পরে",
        content:
          "লঞ্চের পরে সমস্যা ঠিক করি এবং iOS ও অ্যান্ড্রয়েডের পরিবর্তনের সাথে অ্যাপ হালনাগাদ রাখি, চাইলে মাসিক আইটি সাপোর্ট চুক্তির মাধ্যমে।",
      },
    ],
    process: [
      { title: "মেসেজ ও মিটিং", description: "WhatsApp-এ সমস্যা জানান; আল খোবার, দাম্মাম বা অনলাইনে দেখা করি।", icon: "MessageCircle" },
      { title: "পরিধি নির্ধারণ", description: "ব্যবহারকারী, স্ক্রিন ও প্রথম সংস্করণ, লিখিত পরিধি ও মূল্যসহ।", icon: "ClipboardList" },
      { title: "স্ক্রিন ডিজাইন", description: "আরবি ও ইংরেজিতে স্ক্রিন ডিজাইন করে রিভিউ করি।", icon: "Palette" },
      { title: "ডেভেলপমেন্ট", description: "অ্যাপ ও অ্যাডমিন প্যানেল তৈরি করে টেস্ট সংস্করণ দিই।", icon: "Code" },
      { title: "পরীক্ষা", description: "আপনার টিম সাইটে ব্যবহার করে, আমরা মতামত ঠিক করি।", icon: "CheckCircle" },
      { title: "লঞ্চ", description: "প্রকাশ বা অভ্যন্তরীণ বিতরণ করে ব্যবহারকারীদের প্রশিক্ষণ দিই।", icon: "Rocket" },
    ],
    faqs: [
      { question: "মোবাইল অ্যাপের খরচ কত?", answer: "নির্দিষ্ট মূল্য প্রকাশ করি না। স্ক্রিন ও ব্যবহারকারীর সংখ্যা, অফলাইন ব্যবহার, অ্যাডমিন প্যানেল ও ইন্টিগ্রেশনের উপর নির্ভর করে। পরিধি ঠিক হলে লিখিত কোটেশন দিই।" },
      { question: "কত সময় লাগে?", answer: "পরিধির উপর নির্ভর করে। ছোট প্রথম সংস্করণের পরামর্শ দিই এবং লিখিত সময়সূচি ঠিক করি।" },
      { question: "আইফোন ও অ্যান্ড্রয়েডে চলবে?", answer: "হ্যাঁ, দুটোর জন্যই তৈরি করি।" },
      { question: "অফলাইনে কাজ করবে?", answer: "হ্যাঁ, ডিভাইসে ডেটা রেখে সংযোগ ফিরলে পাঠাতে পারে।" },
      { question: "স্টোরে প্রকাশ করেন?", answer: "হ্যাঁ, অ্যাপল ও গুগল স্টোরে প্রকাশ করি, অথবা শুধু আপনার টিমের জন্য অভ্যন্তরীণভাবে দিই।" },
      { question: "অ্যাপ কি আরবি ও ইংরেজিতে হবে?", answer: "হ্যাঁ, দুই ভাষায় ইন্টারফেস।" },
    ],
    relatedServices: related,
  },
};
