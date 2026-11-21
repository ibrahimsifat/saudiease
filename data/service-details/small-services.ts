// Own content for the four smaller services (live-check finding N2: the template
// pages shared 53–59% text). Evidence: only what each service page already lists
// in data/services/*.ts. No SLAs, response times, prices or results.
import type { ServiceDetail } from "./ar";

type Content = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const WA = { ar: "واتساب أو اتصال: 966558845503+", en: "WhatsApp or call +966 55 884 5503", bn: "WhatsApp বা কল: +966 55 884 5503" };

export const SMALL_SERVICES: Record<string, Record<string, Content>> = {
  // ───────────────────────── Professional email ─────────────────────────
  "professional-email-setup": {
    ar: {
      longDescription:
        "نجهّز بريداً إلكترونياً رسمياً باسم نطاق شركتك (مثل info@yourcompany.com) على Google Workspace أو Microsoft 365، ونربطه بجوالات وأجهزة فريقك. يناسب الشركات التي ما زالت تستخدم Gmail أو Outlook الشخصي في التعامل مع العملاء والموردين.",
      overview:
        "عندما تراسل شركة كبرى أو جهة مشتريات من عنوان Gmail شخصي، يبدو الأمر غير رسمي، وقد تضيع المراسلات إذا غادر الموظف. البريد باسم نطاق شركتك يحل ذلك: كل موظف له عنوان باسم الشركة، والبريد ملك للشركة لا للأفراد، ويمكن إيقاف حساب أي موظف يغادر مع الاحتفاظ برسائله. نساعدك في اختيار Google Workspace أو Microsoft 365 حسب طريقة عمل فريقك، ونربط النطاق، وننشئ الحسابات، ونضبط البريد على الجوالات والكمبيوترات.",
      benefits: ["مظهر رسمي أمام العملاء والموردين", "فصل البريد الشخصي عن بريد العمل", "البريد ملك للشركة", "يعمل على كل الأجهزة"],
      features: ["نطاق باسم شركتك", "إعداد Google Workspace أو Microsoft 365", "تخزين سحابي", "مزامنة على الجوال والكمبيوتر"],
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "الخدمة", value: "بريد إلكتروني باسم نطاق الشركة" },
          { label: "المنصات", value: "Google Workspace أو Microsoft 365" },
          { label: "لمن", value: "الشركات الصغيرة والمتوسطة وشركات المقاولات" },
          { label: "كيف تبدأ", value: WA.ar },
        ],
      },
      sections: [
        { title: "Google Workspace أم Microsoft 365؟", content: "كلاهما يعطيك بريداً باسم شركتك وتخزيناً سحابياً. Google Workspace مناسب لمن يعمل في المتصفح والجوال ويستخدم Gmail، وMicrosoft 365 مناسب لمن يعتمد على Outlook وWord وExcel. نشرح لك الفرق ونقترح الأنسب لفريقك." },
        { title: "ربط النطاق ونقل البريد", content: "إذا كان لديك نطاق نربطه، وإذا لم يكن لديك نساعدك في اختياره. وإذا كانت لديك رسائل مهمة في بريد قديم، نتفق معك على نقل ما يلزم منها." },
        { title: "إعداد الأجهزة", content: "نضبط البريد على جوالات وأجهزة فريقك، ونتأكد أن الرسائل والتقويم وجهات الاتصال تتزامن بين الأجهزة." },
        { title: "الإدارة بعد الإعداد", content: "إضافة موظف جديد أو إيقاف حساب موظف غادر أو تغيير كلمات المرور يمكن أن نتولاه ضمن عقد الدعم التقني الشهري." },
      ],
      process: [
        { title: "تحديد الاحتياج", description: "عدد المستخدمين والنطاق والمنصة المناسبة.", icon: "ClipboardList" },
        { title: "ربط النطاق", description: "نضبط إعدادات النطاق ونفعّل البريد.", icon: "Link" },
        { title: "إنشاء الحسابات", description: "حساب لكل موظف وعناوين مشتركة مثل info.", icon: "Users" },
        { title: "إعداد الأجهزة", description: "البريد على الجوالات والكمبيوترات.", icon: "Smartphone" },
      ],
      faqs: [
        { question: "هل أحتاج نطاقاً لشركتي؟", answer: "نعم، البريد الرسمي يكون على نطاق شركتك. إذا لم يكن لديك نطاق نساعدك في اختياره." },
        { question: "أيهما أفضل: Google Workspace أم Microsoft 365؟", answer: "يعتمد على طريقة عمل فريقك. نشرح الفرق ونقترح الأنسب." },
        { question: "هل يعمل البريد على الجوال؟", answer: "نعم، نضبطه على الجوالات والكمبيوترات." },
        { question: "هل يمكن نقل رسائلي القديمة؟", answer: "نتفق معك على نقل الرسائل المهمة من البريد القديم." },
        { question: "من يدفع اشتراك المنصة؟", answer: "اشتراك Google أو Microsoft يكون باسم شركتك؛ نتولى الإعداد." },
      ],
      relatedServices: ["it-support-retainer", "website-design-development", "google-business-profile"],
    },
    en: {
      longDescription:
        "We set up company email on your own domain (such as info@yourcompany.com) with Google Workspace or Microsoft 365, and connect it to your team's phones and computers. It suits companies that still use personal Gmail or Outlook addresses with clients and suppliers.",
      overview:
        "When a procurement team receives a message from a personal Gmail address, it looks informal, and messages can be lost when an employee leaves. Email on your company domain fixes that: every employee gets an address in the company's name, the mailbox belongs to the company rather than the person, and a leaver's account can be closed while keeping their messages. We help you choose Google Workspace or Microsoft 365 for the way your team works, connect your domain, create the accounts and set up email on phones and computers.",
      benefits: ["A professional look with clients and suppliers", "Personal and work mail kept apart", "Mailboxes owned by the company", "Works on every device"],
      features: ["Your own company domain", "Google Workspace or Microsoft 365 setup", "Cloud storage", "Sync on phones and computers"],
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Service", value: "Email on your company domain" },
          { label: "Platforms", value: "Google Workspace or Microsoft 365" },
          { label: "For", value: "Small and medium businesses and contracting companies" },
          { label: "How to start", value: WA.en },
        ],
      },
      sections: [
        { title: "Google Workspace or Microsoft 365?", content: "Both give you email on your domain and cloud storage. Google Workspace suits teams that work in the browser and on phones with Gmail; Microsoft 365 suits teams that rely on Outlook, Word and Excel. We explain the difference and suggest what fits your team." },
        { title: "Connecting your domain and moving mail", content: "If you have a domain, we connect it; if not, we help you choose one. If you have important messages in an old mailbox, we agree with you what to move across." },
        { title: "Setting up devices", content: "We set up email on your team's phones and computers and check that mail, calendars and contacts sync across devices." },
        { title: "Managing it afterwards", content: "Adding a new employee, closing a leaver's account or resetting passwords can be handled under the monthly IT support retainer." },
      ],
      process: [
        { title: "Define the need", description: "Number of users, domain and the right platform.", icon: "ClipboardList" },
        { title: "Connect the domain", description: "We configure the domain settings and activate email.", icon: "Link" },
        { title: "Create accounts", description: "One per employee, plus shared addresses such as info.", icon: "Users" },
        { title: "Set up devices", description: "Email on phones and computers.", icon: "Smartphone" },
      ],
      faqs: [
        { question: "Do I need a domain for my company?", answer: "Yes, company email runs on your domain. If you don't have one, we help you choose it." },
        { question: "Which is better: Google Workspace or Microsoft 365?", answer: "It depends on how your team works. We explain the difference and suggest the better fit." },
        { question: "Will email work on phones?", answer: "Yes, we set it up on phones and computers." },
        { question: "Can my old messages be moved?", answer: "We agree with you which important messages to move from the old mailbox." },
        { question: "Who pays the platform subscription?", answer: "The Google or Microsoft subscription is in your company's name; we handle the setup." },
      ],
      relatedServices: ["it-support-retainer", "website-design-development", "google-business-profile"],
    },
    bn: {
      longDescription:
        "আমরা Google Workspace বা Microsoft 365-এ আপনার নিজের ডোমেইনে (যেমন info@yourcompany.com) কোম্পানি ইমেইল সেটআপ করি এবং টিমের ফোন ও কম্পিউটারে যুক্ত করি। যারা এখনো ক্লায়েন্ট ও সরবরাহকারীর সাথে ব্যক্তিগত Gmail বা Outlook ব্যবহার করেন তাদের জন্য উপযুক্ত।",
      overview:
        "ব্যক্তিগত Gmail থেকে বার্তা অনানুষ্ঠানিক দেখায় এবং কর্মী চলে গেলে বার্তা হারিয়ে যেতে পারে। কোম্পানির ডোমেইনে ইমেইল এর সমাধান: প্রতিটি কর্মীর ঠিকানা কোম্পানির নামে, মেইলবক্স কোম্পানির মালিকানায়, এবং কেউ চলে গেলে তার বার্তা রেখে অ্যাকাউন্ট বন্ধ করা যায়। আমরা আপনার টিমের জন্য Google Workspace বা Microsoft 365 বেছে নিতে সাহায্য করি, ডোমেইন যুক্ত করি, অ্যাকাউন্ট তৈরি করি এবং ফোন ও কম্পিউটারে সেটআপ করি।",
      benefits: ["ক্লায়েন্ট ও সরবরাহকারীর কাছে পেশাদার চেহারা", "ব্যক্তিগত ও কাজের মেইল আলাদা", "মেইলবক্স কোম্পানির মালিকানায়", "সব ডিভাইসে কাজ করে"],
      features: ["নিজের কোম্পানি ডোমেইন", "Google Workspace বা Microsoft 365 সেটআপ", "ক্লাউড স্টোরেজ", "ফোন ও কম্পিউটারে সিঙ্ক"],
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "সেবা", value: "কোম্পানির ডোমেইনে ইমেইল" },
          { label: "প্ল্যাটফর্ম", value: "Google Workspace বা Microsoft 365" },
          { label: "কাদের জন্য", value: "ছোট ও মাঝারি ব্যবসা এবং কনট্রাক্টিং প্রতিষ্ঠান" },
          { label: "শুরু করতে", value: WA.bn },
        ],
      },
      sections: [
        { title: "Google Workspace নাকি Microsoft 365?", content: "দুটোই আপনার ডোমেইনে ইমেইল ও ক্লাউড স্টোরেজ দেয়। ব্রাউজার ও ফোনে Gmail-এ কাজ করা টিমের জন্য Google Workspace, আর Outlook, Word ও Excel-নির্ভর টিমের জন্য Microsoft 365। আমরা পার্থক্য বুঝিয়ে উপযুক্তটি প্রস্তাব করি।" },
        { title: "ডোমেইন যুক্ত করা ও মেইল স্থানান্তর", content: "ডোমেইন থাকলে যুক্ত করি, না থাকলে বেছে নিতে সাহায্য করি। পুরনো মেইলবক্সে গুরুত্বপূর্ণ বার্তা থাকলে কী স্থানান্তর হবে তা আপনার সাথে ঠিক করি।" },
        { title: "ডিভাইস সেটআপ", content: "টিমের ফোন ও কম্পিউটারে ইমেইল সেটআপ করে নিশ্চিত করি যে মেইল, ক্যালেন্ডার ও কন্টাক্ট সব ডিভাইসে সিঙ্ক হয়।" },
        { title: "পরবর্তী ব্যবস্থাপনা", content: "নতুন কর্মী যোগ, চলে যাওয়া কর্মীর অ্যাকাউন্ট বন্ধ বা পাসওয়ার্ড রিসেট মাসিক আইটি সাপোর্ট চুক্তিতে করা যায়।" },
      ],
      process: [
        { title: "প্রয়োজন নির্ধারণ", description: "ব্যবহারকারী, ডোমেইন ও প্ল্যাটফর্ম।", icon: "ClipboardList" },
        { title: "ডোমেইন যুক্ত করা", description: "ডোমেইন সেটিংস কনফিগার করে ইমেইল চালু।", icon: "Link" },
        { title: "অ্যাকাউন্ট তৈরি", description: "প্রতি কর্মীর জন্য একটি, সাথে info-এর মতো শেয়ার্ড ঠিকানা।", icon: "Users" },
        { title: "ডিভাইস সেটআপ", description: "ফোন ও কম্পিউটারে ইমেইল।", icon: "Smartphone" },
      ],
      faqs: [
        { question: "কোম্পানির জন্য কি ডোমেইন লাগবে?", answer: "হ্যাঁ, কোম্পানি ইমেইল আপনার ডোমেইনে চলে। না থাকলে বেছে নিতে সাহায্য করি।" },
        { question: "Google Workspace নাকি Microsoft 365 ভালো?", answer: "টিমের কাজের ধরনের উপর নির্ভর করে। আমরা উপযুক্তটি প্রস্তাব করি।" },
        { question: "ইমেইল কি ফোনে চলবে?", answer: "হ্যাঁ, ফোন ও কম্পিউটারে সেটআপ করি।" },
        { question: "প্ল্যাটফর্মের সাবস্ক্রিপশন কে দেবে?", answer: "Google বা Microsoft সাবস্ক্রিপশন আপনার কোম্পানির নামে; সেটআপ আমরা করি।" },
      ],
      relatedServices: ["it-support-retainer", "website-design-development", "google-business-profile"],
    },
  },

  // ───────────────────────── Google Business Profile ─────────────────────────
  "google-business-profile": {
    ar: {
      longDescription:
        "نجهّز ونكمل ملف نشاطك التجاري على قوقل حتى تظهر شركتك على خرائط قوقل عندما يبحث العملاء عن خدماتك في الخبر والدمام والمنطقة الشرقية: إنشاء الملف أو استعادته، والتحقق، والفئات والخدمات، والصور، وطريقة طلب التقييمات والرد عليها.",
      overview:
        "كثير من العملاء والمشترين يبحثون على خرائط قوقل عن موردين ومقاولين قريبين قبل أن يتصلوا. إذا لم يكن لشركتك ملف كامل، أو كان الملف بفئة خاطئة أو بلا صور، يظهر منافسوك قبلك. نساعدك في إنشاء الملف أو استعادة ملف قديم، وإتمام خطوات التحقق من قوقل، واختيار الفئة الأساسية الصحيحة، وإضافة الخدمات وساعات العمل والصور الحقيقية للمكتب والمشاريع. ونجهّز لك رابطاً ورسالة بسيطة لطلب التقييمات من عملائك الحقيقيين. لا ننشر تقييمات وهمية ولا نشتريها؛ ذلك يخالف سياسات قوقل ويضر بالملف.",
      benefits: ["الظهور في نتائج البحث المحلية", "اتصالات مباشرة من العملاء", "عرض موقعك ومكتبك", "ثقة من التقييمات الحقيقية"],
      features: ["إنشاء الملف وإكماله", "التحقق على خرائط قوقل", "تحديث الصور والمشاريع", "طلب التقييمات والرد عليها"],
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "الخدمة", value: "إعداد وإكمال ملف النشاط التجاري على قوقل" },
          { label: "ما يشمله", value: "الإنشاء أو الاستعادة، التحقق، الفئات والخدمات، الصور، طلب التقييمات" },
          { label: "ما لا نفعله", value: "لا تقييمات وهمية أو مدفوعة" },
          { label: "كيف تبدأ", value: WA.ar },
        ],
      },
      sections: [
        { title: "الفئة الأساسية أهم إعداد", content: "قوقل يعتمد كثيراً على الفئة الأساسية لتحديد متى يظهر ملفك. نختار معك الفئة التي تصف نشاطك الرئيسي بدقة، ثم نضيف فئات ثانوية للخدمات الأخرى." },
        { title: "التحقق والبيانات الصحيحة", content: "نساعدك في إتمام طريقة التحقق التي يطلبها قوقل، ونتأكد أن الاسم والعنوان أو منطقة الخدمة ورقم الهاتف مطابقة لما في موقعك وسجلك." },
        { title: "صور حقيقية وتحديثات", content: "الصور الحقيقية للمكتب والفريق والمشاريع تعطي ثقة أكبر من الصور العامة. نضيفها ونقترح تحديثات دورية للمشاريع الجديدة." },
        { title: "التقييمات بالطريقة الصحيحة", content: "نجهّز رابط التقييم ورسالة مختصرة ترسلها لعملائك الحقيقيين، ونقترح طريقة للرد على كل تقييم. لا نكتب تقييمات ولا نشتريها." },
      ],
      process: [
        { title: "مراجعة الوضع الحالي", description: "هل لديك ملف؟ ومن يملك الوصول إليه؟", icon: "Search" },
        { title: "الإنشاء أو الاستعادة", description: "ننشئ الملف أو نستعيد ملفاً قديماً.", icon: "MapPin" },
        { title: "التحقق والإكمال", description: "التحقق، الفئات، الخدمات، الساعات، الصور.", icon: "CheckCircle" },
        { title: "خطة التقييمات", description: "رابط ورسالة لطلب التقييمات والرد عليها.", icon: "Star" },
      ],
      faqs: [
        { question: "لدي ملف قديم لا أعرف من أنشأه، ماذا أفعل؟", answer: "نساعدك في طلب الوصول إلى الملف أو استعادته عبر خطوات قوقل." },
        { question: "هل يمكن الظهور دون عنوان مكتب؟", answer: "نعم، يمكن إعداد الملف كنشاط يخدم منطقة معينة دون عرض العنوان." },
        { question: "هل تكتبون تقييمات لنا؟", answer: "لا. نساعدك في طلب التقييمات من عملائك الحقيقيين والرد عليها فقط." },
        { question: "كم يستغرق التحقق؟", answer: "يعتمد على طريقة التحقق التي يطلبها قوقل لملفك." },
        { question: "هل تديرون الملف بعد الإعداد؟", answer: "يمكن تحديث الصور والمشاريع والرد على التقييمات ضمن عقد الدعم الشهري." },
      ],
      relatedServices: ["website-design-development", "professional-email-setup", "brand-identity"],
    },
    en: {
      longDescription:
        "We set up and complete your Google Business Profile so your company shows on Google Maps when clients search for your services in Al Khobar, Dammam and the Eastern Province: creating or recovering the profile, verification, categories and services, photos, and a simple way to ask for and reply to reviews.",
      overview:
        "Many clients and buyers search Google Maps for nearby suppliers and contractors before they call. If your company has no complete profile, or it has the wrong category or no photos, competitors appear first. We help you create a profile or recover an old one, complete Google's verification, choose the right primary category, and add services, opening hours and real photos of your office and projects. We also prepare a link and a short message for asking your real clients for reviews. We never post or buy fake reviews; that breaks Google's policies and harms the profile.",
      benefits: ["Appear in local search results", "Direct calls from clients", "Show your location and office", "Trust from real reviews"],
      features: ["Profile creation and completion", "Google Maps verification", "Photo and project updates", "Asking for and replying to reviews"],
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Service", value: "Google Business Profile setup and completion" },
          { label: "Includes", value: "Creation or recovery, verification, categories and services, photos, review requests" },
          { label: "What we don't do", value: "No fake or paid reviews" },
          { label: "How to start", value: WA.en },
        ],
      },
      sections: [
        { title: "The primary category matters most", content: "Google relies heavily on the primary category to decide when your profile appears. We choose with you the category that describes your main business accurately, then add secondary categories for other services." },
        { title: "Verification and correct details", content: "We help you complete the verification method Google asks for, and make sure the name, address or service area and phone number match your website and registration." },
        { title: "Real photos and updates", content: "Real photos of your office, team and projects build more trust than stock images. We add them and suggest regular updates for new projects." },
        { title: "Reviews, the right way", content: "We prepare your review link and a short message to send to real clients, and suggest how to reply to each review. We don't write or buy reviews." },
      ],
      process: [
        { title: "Review the current state", description: "Do you have a profile, and who has access to it?", icon: "Search" },
        { title: "Create or recover", description: "We create the profile or recover an old one.", icon: "MapPin" },
        { title: "Verify and complete", description: "Verification, categories, services, hours, photos.", icon: "CheckCircle" },
        { title: "Review plan", description: "A link and message to ask for and reply to reviews.", icon: "Star" },
      ],
      faqs: [
        { question: "I have an old profile and don't know who created it. What now?", answer: "We help you request access to the profile or recover it through Google's steps." },
        { question: "Can we appear without showing an office address?", answer: "Yes, the profile can be set up as a service-area business without showing the address." },
        { question: "Will you write reviews for us?", answer: "No. We only help you ask real clients for reviews and reply to them." },
        { question: "How long does verification take?", answer: "It depends on the verification method Google requires for your profile." },
        { question: "Do you manage the profile afterwards?", answer: "Photo and project updates and review replies can be covered by the monthly support retainer." },
      ],
      relatedServices: ["website-design-development", "professional-email-setup", "brand-identity"],
    },
    bn: {
      longDescription:
        "আমরা আপনার গুগল বিজনেস প্রোফাইল সেটআপ ও সম্পূর্ণ করি, যাতে আল খোবার, দাম্মাম ও পূর্বাঞ্চলে ক্লায়েন্টরা আপনার সেবা খুঁজলে গুগল ম্যাপে আপনার প্রতিষ্ঠান দেখা যায়: প্রোফাইল তৈরি বা পুনরুদ্ধার, যাচাই, ক্যাটাগরি ও সেবা, ছবি এবং রিভিউ চাওয়া ও উত্তর দেওয়ার সহজ পদ্ধতি।",
      overview:
        "অনেক ক্লায়েন্ট ফোন করার আগে গুগল ম্যাপে কাছের সরবরাহকারী ও কনট্রাক্টর খোঁজেন। আপনার প্রোফাইল অসম্পূর্ণ হলে, ভুল ক্যাটাগরিতে থাকলে বা ছবি না থাকলে প্রতিযোগীরা আগে দেখা যায়। আমরা প্রোফাইল তৈরি বা পুরনোটি পুনরুদ্ধার, গুগলের যাচাই, সঠিক প্রধান ক্যাটাগরি, সেবা, সময়সূচি এবং অফিস ও প্রকল্পের আসল ছবি যোগ করতে সাহায্য করি। আসল ক্লায়েন্টদের কাছে রিভিউ চাওয়ার লিংক ও বার্তা প্রস্তুত করি। আমরা কখনো ভুয়া বা কেনা রিভিউ দিই না।",
      benefits: ["স্থানীয় সার্চে দেখা যাওয়া", "ক্লায়েন্টের সরাসরি কল", "লোকেশন ও অফিস দেখানো", "আসল রিভিউ থেকে আস্থা"],
      features: ["প্রোফাইল তৈরি ও সম্পূর্ণ করা", "গুগল ম্যাপ যাচাই", "ছবি ও প্রকল্প আপডেট", "রিভিউ চাওয়া ও উত্তর দেওয়া"],
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "সেবা", value: "গুগল বিজনেস প্রোফাইল সেটআপ ও সম্পূর্ণ করা" },
          { label: "যা থাকে", value: "তৈরি বা পুনরুদ্ধার, যাচাই, ক্যাটাগরি ও সেবা, ছবি, রিভিউ অনুরোধ" },
          { label: "যা করি না", value: "ভুয়া বা কেনা রিভিউ নয়" },
          { label: "শুরু করতে", value: WA.bn },
        ],
      },
      sections: [
        { title: "প্রধান ক্যাটাগরি সবচেয়ে গুরুত্বপূর্ণ", content: "আপনার প্রোফাইল কখন দেখাবে তা গুগল অনেকটা প্রধান ক্যাটাগরি দিয়ে ঠিক করে। আপনার মূল ব্যবসার সঠিক ক্যাটাগরি বেছে নিয়ে অন্য সেবার জন্য সহায়ক ক্যাটাগরি যোগ করি।" },
        { title: "যাচাই ও সঠিক তথ্য", content: "গুগলের চাওয়া যাচাই পদ্ধতি সম্পূর্ণ করতে সাহায্য করি এবং নাম, ঠিকানা বা সেবা এলাকা ও ফোন নম্বর আপনার ওয়েবসাইটের সাথে মিলিয়ে দিই।" },
        { title: "আসল ছবি ও আপডেট", content: "অফিস, টিম ও প্রকল্পের আসল ছবি স্টক ছবির চেয়ে বেশি আস্থা তৈরি করে। আমরা এগুলো যোগ করি এবং নতুন প্রকল্পের নিয়মিত আপডেটের পরামর্শ দিই।" },
        { title: "সঠিক উপায়ে রিভিউ", content: "রিভিউ লিংক ও আসল ক্লায়েন্টদের পাঠানোর ছোট বার্তা তৈরি করি এবং প্রতিটি রিভিউয়ের উত্তর দেওয়ার পরামর্শ দিই।" },
      ],
      process: [
        { title: "বর্তমান অবস্থা দেখা", description: "প্রোফাইল আছে কি না, কার অ্যাক্সেস আছে।", icon: "Search" },
        { title: "তৈরি বা পুনরুদ্ধার", description: "প্রোফাইল তৈরি বা পুরনোটি পুনরুদ্ধার।", icon: "MapPin" },
        { title: "যাচাই ও সম্পূর্ণ করা", description: "যাচাই, ক্যাটাগরি, সেবা, সময়, ছবি।", icon: "CheckCircle" },
        { title: "রিভিউ পরিকল্পনা", description: "রিভিউ চাওয়া ও উত্তরের লিংক ও বার্তা।", icon: "Star" },
      ],
      faqs: [
        { question: "অফিসের ঠিকানা না দেখিয়ে কি দেখা যাওয়া সম্ভব?", answer: "হ্যাঁ, ঠিকানা না দেখিয়ে সেবা-এলাকার ব্যবসা হিসেবে প্রোফাইল সেটআপ করা যায়।" },
        { question: "আপনারা কি আমাদের জন্য রিভিউ লিখবেন?", answer: "না। শুধু আসল ক্লায়েন্টদের কাছে রিভিউ চাওয়া ও উত্তর দিতে সাহায্য করি।" },
        { question: "যাচাইয়ে কত সময় লাগে?", answer: "আপনার প্রোফাইলের জন্য গুগলের চাওয়া যাচাই পদ্ধতির উপর নির্ভর করে।" },
        { question: "সেটআপের পরে কি প্রোফাইল পরিচালনা করেন?", answer: "ছবি ও প্রকল্প আপডেট এবং রিভিউর উত্তর মাসিক সাপোর্ট চুক্তিতে করা যায়।" },
      ],
      relatedServices: ["website-design-development", "professional-email-setup", "brand-identity"],
    },
  },

  // ───────────────────────── Business setup consultation ─────────────────────────
  "business-setup-consultation": {
    ar: {
      longDescription:
        "إرشاد خطوة بخطوة لمن يبدأ أو يوسّع نشاط مقاولات أو إنشاءات في السعودية: استخراج السجل التجاري، ومتطلبات وزارة التجارة، والتسجيل في الغرفة التجارية، واختيار الأنشطة المناسبة، والتراخيص التجارية اللازمة.",
      overview:
        "أخطاء البداية مكلفة: نشاط تجاري لا يطابق ما ستعمل فيه فعلاً، أو خطوة ناقصة في التسجيل تؤخر التعامل مع العملاء الكبار. نرافقك في الخطوات: نشرح ما تتطلبه وزارة التجارة، ونساعدك في الخطوات الإلكترونية على بوابة الوزارة، ونوضح التسجيل في الغرفة التجارية، ونساعدك في اختيار الأنشطة التي تناسب أعمالك المخطط لها. القرارات والموافقات والرسوم الحكومية تبقى لدى الجهات المختصة، ونحن نساعدك في الاستعداد لها بشكل صحيح. وبعد التأسيس يمكننا تجهيز الجانب الرقمي: البريد الرسمي، والموقع، وبروفايل الشركة، والفوترة الإلكترونية.",
      benefits: ["بداية صحيحة لنشاطك", "استيفاء المتطلبات النظامية", "تجنب أخطاء التسجيل", "معرفة محلية بالإجراءات"],
      features: ["إرشاد السجل التجاري", "دعم في بوابة وزارة التجارة", "التسجيل في الغرفة التجارية", "اختيار الأنشطة"],
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "الخدمة", value: "إرشاد تأسيس النشاط: السجل التجاري، وزارة التجارة، الغرفة التجارية، الأنشطة" },
          { label: "لمن", value: "من يبدأ أو يوسّع نشاط مقاولات أو إنشاءات" },
          { label: "ما لا نفعله", value: "لا نصدر قرارات أو موافقات؛ الموافقات والرسوم لدى الجهات الحكومية" },
          { label: "كيف تبدأ", value: WA.ar },
        ],
      },
      sections: [
        { title: "اختيار الأنشطة بدقة", content: "الأنشطة المسجلة في السجل التجاري يجب أن تطابق الأعمال التي ستنفذها. نراجع معك خططك ونساعدك في اختيار الأنشطة المناسبة قبل التسجيل." },
        { title: "الخطوات على بوابة وزارة التجارة", content: "نشرح لك الخطوات الإلكترونية المطلوبة ونساعدك في تجهيز البيانات والمستندات، حتى تسير المعاملة دون نواقص." },
        { title: "الغرفة التجارية والتراخيص", content: "نوضح متطلبات التسجيل في الغرفة التجارية والتراخيص التجارية التي يحتاجها نشاطك، وترتيبها الزمني." },
        { title: "بعد التأسيس", content: "عندما يكتمل التسجيل، يمكننا تجهيز البريد الرسمي والموقع وبروفايل الشركة والفوترة الإلكترونية حتى تبدأ العمل بصورة احترافية." },
      ],
      process: [
        { title: "فهم نشاطك", description: "ما الأعمال التي ستنفذها وأين.", icon: "Search" },
        { title: "خطة الخطوات", description: "قائمة بالمتطلبات والمستندات وترتيبها.", icon: "ClipboardList" },
        { title: "المرافقة في التنفيذ", description: "مساعدة في الخطوات الإلكترونية والتجهيز.", icon: "FileText" },
        { title: "الجانب الرقمي", description: "البريد والموقع والبروفايل عند الحاجة.", icon: "Monitor" },
      ],
      faqs: [
        { question: "هل تستخرجون السجل التجاري نيابة عني؟", answer: "نرشدك ونساعدك في الخطوات والتجهيز؛ القرارات والموافقات والرسوم لدى وزارة التجارة والجهات المختصة." },
        { question: "كيف أختار الأنشطة المناسبة؟", answer: "نراجع معك الأعمال التي تخطط لتنفيذها ونقترح الأنشطة التي تطابقها." },
        { question: "هل الخدمة لشركات المقاولات فقط؟", answer: "أغلب خبرتنا مع شركات المقاولات والإنشاءات، ويمكن مساعدة الأنشطة الأخرى بعد فهم احتياجها." },
        { question: "ماذا بعد التسجيل؟", answer: "يمكننا تجهيز البريد الرسمي والموقع وبروفايل الشركة والفوترة الإلكترونية." },
      ],
      relatedServices: ["company-profile-branding", "professional-email-setup", "zatca-e-invoicing"],
    },
    en: {
      longDescription:
        "Step-by-step guidance for starting or expanding a contracting or construction business in Saudi Arabia: CR registration, Ministry of Commerce (MOCI) requirements, Chamber of Commerce registration, choosing the right business activities and the commercial licences you need.",
      overview:
        "Mistakes at the start are costly: a registered activity that doesn't match the work you will actually do, or a missing registration step that delays work with large clients. We guide you through the steps: we explain what MOCI requires, help with the online steps on the ministry's portal, explain Chamber of Commerce registration, and help you choose activities that match your planned work. Decisions, approvals and government fees stay with the authorities; we help you prepare for them correctly. After setup, we can handle the digital side: company email, website, company profile and e-invoicing.",
      benefits: ["Start your business correctly", "Meet the regulatory requirements", "Avoid registration mistakes", "Local knowledge of the procedures"],
      features: ["CR registration guidance", "MOCI portal support", "Chamber of Commerce registration", "Activity selection advice"],
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Service", value: "Business setup guidance: CR, MOCI, Chamber of Commerce, activities" },
          { label: "For", value: "People starting or expanding a contracting or construction business" },
          { label: "What we don't do", value: "We don't issue decisions or approvals; approvals and fees sit with the authorities" },
          { label: "How to start", value: WA.en },
        ],
      },
      sections: [
        { title: "Choosing your activities carefully", content: "The activities registered on your CR should match the work you will carry out. We review your plans with you and help you choose suitable activities before registering." },
        { title: "Steps on the MOCI portal", content: "We explain the online steps and help you prepare the data and documents, so the application goes through without missing items." },
        { title: "Chamber of Commerce and licences", content: "We explain Chamber of Commerce registration and the commercial licences your activity needs, and the order to do them in." },
        { title: "After setup", content: "Once registration is done, we can set up company email, a website, a company profile and e-invoicing so you start working professionally." },
      ],
      process: [
        { title: "Understand your business", description: "What work you will do and where.", icon: "Search" },
        { title: "Plan the steps", description: "A list of requirements, documents and their order.", icon: "ClipboardList" },
        { title: "Support during the process", description: "Help with online steps and preparation.", icon: "FileText" },
        { title: "The digital side", description: "Email, website and profile when needed.", icon: "Monitor" },
      ],
      faqs: [
        { question: "Do you get the CR on my behalf?", answer: "We guide you and help with the steps and preparation; decisions, approvals and fees sit with MOCI and the relevant authorities." },
        { question: "How do I choose the right activities?", answer: "We review the work you plan to do and suggest activities that match it." },
        { question: "Is this only for contracting companies?", answer: "Most of our experience is with contracting and construction businesses; we can help other activities once we understand their needs." },
        { question: "What happens after registration?", answer: "We can set up company email, a website, a company profile and e-invoicing." },
      ],
      relatedServices: ["company-profile-branding", "professional-email-setup", "zatca-e-invoicing"],
    },
    bn: {
      longDescription:
        "সৌদি আরবে কনট্রাক্টিং বা নির্মাণ ব্যবসা শুরু বা সম্প্রসারণের জন্য ধাপে ধাপে পরামর্শ: CR নিবন্ধন, বাণিজ্য মন্ত্রণালয়ের (MOCI) প্রয়োজনীয়তা, চেম্বার অব কমার্স নিবন্ধন, সঠিক ব্যবসায়িক কার্যক্রম বাছাই ও প্রয়োজনীয় বাণিজ্যিক লাইসেন্স।",
      overview:
        "শুরুর ভুল ব্যয়বহুল: এমন কার্যক্রম নিবন্ধন যা আসল কাজের সাথে মেলে না, বা নিবন্ধনের কোনো ধাপ বাদ পড়া যা বড় ক্লায়েন্টের সাথে কাজ বিলম্বিত করে। আমরা ধাপগুলোতে পাশে থাকি: MOCI-এর প্রয়োজনীয়তা বুঝিয়ে দিই, মন্ত্রণালয়ের পোর্টালের অনলাইন ধাপে সাহায্য করি, চেম্বার নিবন্ধন ব্যাখ্যা করি এবং পরিকল্পিত কাজের সাথে মেলে এমন কার্যক্রম বাছাইয়ে সাহায্য করি। সিদ্ধান্ত, অনুমোদন ও সরকারি ফি কর্তৃপক্ষের কাছে থাকে।",
      benefits: ["সঠিকভাবে ব্যবসা শুরু", "নিয়ন্ত্রক প্রয়োজনীয়তা পূরণ", "নিবন্ধনের ভুল এড়ানো", "প্রক্রিয়ার স্থানীয় জ্ঞান"],
      features: ["CR নিবন্ধন পরামর্শ", "MOCI পোর্টাল সহায়তা", "চেম্বার অব কমার্স নিবন্ধন", "কার্যক্রম বাছাই পরামর্শ"],
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "সেবা", value: "ব্যবসা সেটআপ পরামর্শ: CR, MOCI, চেম্বার অব কমার্স, কার্যক্রম" },
          { label: "কাদের জন্য", value: "যারা কনট্রাক্টিং বা নির্মাণ ব্যবসা শুরু বা সম্প্রসারণ করছেন" },
          { label: "যা করি না", value: "সিদ্ধান্ত বা অনুমোদন দিই না; অনুমোদন ও ফি কর্তৃপক্ষের কাছে" },
          { label: "শুরু করতে", value: WA.bn },
        ],
      },
      sections: [
        { title: "সাবধানে কার্যক্রম বাছাই", content: "CR-এ নিবন্ধিত কার্যক্রম আপনার আসল কাজের সাথে মিলতে হবে। আপনার পরিকল্পনা দেখে নিবন্ধনের আগে উপযুক্ত কার্যক্রম বাছাইয়ে সাহায্য করি।" },
        { title: "MOCI পোর্টালের ধাপ", content: "অনলাইন ধাপগুলো ব্যাখ্যা করি এবং তথ্য ও কাগজপত্র প্রস্তুত করতে সাহায্য করি, যাতে আবেদনে কিছু বাদ না পড়ে।" },
        { title: "চেম্বার ও লাইসেন্স", content: "চেম্বার অব কমার্স নিবন্ধন ও আপনার কার্যক্রমের প্রয়োজনীয় লাইসেন্স এবং সেগুলোর ক্রম ব্যাখ্যা করি।" },
        { title: "সেটআপের পরে", content: "নিবন্ধন শেষ হলে কোম্পানি ইমেইল, ওয়েবসাইট, কোম্পানি প্রোফাইল ও ই-ইনভয়েসিং সেটআপ করতে পারি।" },
      ],
      process: [
        { title: "ব্যবসা বোঝা", description: "কী কাজ করবেন ও কোথায়।", icon: "Search" },
        { title: "ধাপের পরিকল্পনা", description: "প্রয়োজনীয়তা, কাগজপত্র ও ক্রমের তালিকা।", icon: "ClipboardList" },
        { title: "প্রক্রিয়ায় সহায়তা", description: "অনলাইন ধাপ ও প্রস্তুতিতে সাহায্য।", icon: "FileText" },
        { title: "ডিজিটাল দিক", description: "প্রয়োজনে ইমেইল, ওয়েবসাইট ও প্রোফাইল।", icon: "Monitor" },
      ],
      faqs: [
        { question: "আপনারা কি আমার হয়ে CR বের করে দেন?", answer: "আমরা পরামর্শ ও প্রস্তুতিতে সাহায্য করি; সিদ্ধান্ত, অনুমোদন ও ফি MOCI ও সংশ্লিষ্ট কর্তৃপক্ষের কাছে।" },
        { question: "সঠিক কার্যক্রম কীভাবে বাছাই করব?", answer: "আপনার পরিকল্পিত কাজ দেখে মেলে এমন কার্যক্রম প্রস্তাব করি।" },
        { question: "নিবন্ধনের পরে কী?", answer: "কোম্পানি ইমেইল, ওয়েবসাইট, কোম্পানি প্রোফাইল ও ই-ইনভয়েসিং সেটআপ করতে পারি।" },
      ],
      relatedServices: ["company-profile-branding", "professional-email-setup", "zatca-e-invoicing"],
    },
  },

  // ───────────────────────── IT support retainer ─────────────────────────
  "it-support-retainer": {
    ar: {
      longDescription:
        "عقد دعم تقني شهري للشركات في الخبر والدمام: إدارة البريد الإلكتروني والنطاق، وتحديثات الموقع الشهرية، ومراقبة الأمان، ودعم فني بأولوية عندما يتوقف شيء عن العمل. مناسب للشركات التي لا تحتاج موظف تقنية بدوام كامل.",
      overview:
        "أغلب الشركات الصغيرة والمتوسطة لا تحتاج قسم تقنية كاملاً، لكنها تحتاج من يتابع الأساسيات قبل أن تتعطل: البريد الإلكتروني والنطاق، وتحديثات الموقع، والنسخ الاحتياطية، والصلاحيات عند دخول موظف أو خروجه. العقد الشهري يعطيك فريقاً تعرفه يتابع هذه الأمور بتكلفة شهرية ثابتة، ويستجيب بأولوية عندما تحتاجه. نتفق في بداية العقد على ما يشمله بالضبط، حتى تعرف ما يغطيه وما يحتاج عرض سعر منفصلاً.",
      benefits: ["تكلفة شهرية ثابتة", "استجابة بأولوية للمشاكل التقنية", "صيانة وقائية", "بيانات أكثر أماناً"],
      features: ["إدارة البريد والنطاق", "تحديثات الموقع الشهرية", "مراقبة الأمان", "دعم فني بأولوية"],
      facts: {
        title: "معلومات سريعة",
        rows: [
          { label: "الخدمة", value: "دعم تقني شهري: البريد والنطاق، تحديثات الموقع، مراقبة الأمان، دعم بأولوية" },
          { label: "لمن", value: "الشركات الصغيرة والمتوسطة وشركات المقاولات في الخبر والدمام" },
          { label: "التكلفة", value: "مبلغ شهري ثابت يُحدد بعد الاتفاق على النطاق (لا ننشر أسعاراً)" },
          { label: "كيف تبدأ", value: WA.ar },
        ],
      },
      sections: [
        { title: "البريد والنطاق", content: "إضافة الموظفين الجدد وإيقاف حسابات من غادر، وإعادة تعيين كلمات المرور، ومتابعة تجديد النطاق حتى لا يتوقف البريد أو الموقع فجأة." },
        { title: "تحديثات الموقع", content: "تحديثات شهرية للموقع ونظام إدارة المحتوى، وتعديلات بسيطة على المحتوى ضمن ما نتفق عليه، ونسخ احتياطية منتظمة." },
        { title: "الأمان", content: "متابعة الأمور التي تسبب أغلب المشاكل: تحديثات متأخرة، وكلمات مرور ضعيفة، وصلاحيات قديمة لموظفين غادروا." },
        { title: "عندما يتوقف شيء", content: "تتواصل معنا على واتساب أو بالهاتف، ونعالج المشكلة بأولوية عن الطلبات خارج العقد. ما يحتاج زيارة ميدانية يكون في الخبر والدمام." },
      ],
      process: [
        { title: "مراجعة أولية", description: "نتعرف على أنظمتك: البريد والنطاق والموقع والأجهزة.", icon: "Search" },
        { title: "تحديد النطاق", description: "نكتب ما يشمله العقد وما لا يشمله.", icon: "ClipboardList" },
        { title: "المتابعة الشهرية", description: "تحديثات ونسخ احتياطية وتقرير مختصر.", icon: "RefreshCw" },
        { title: "الدعم عند الحاجة", description: "استجابة بأولوية على واتساب أو الهاتف.", icon: "LifeBuoy" },
      ],
      faqs: [
        { question: "ماذا يشمل العقد بالضبط؟", answer: "نكتب ذلك في بداية العقد: البريد والنطاق، وتحديثات الموقع، ومراقبة الأمان، والدعم بأولوية، وأي بنود أخرى نتفق عليها." },
        { question: "كم التكلفة؟", answer: "مبلغ شهري ثابت نحدده بعد مراجعة أنظمتك والاتفاق على النطاق. لا ننشر أسعاراً ثابتة." },
        { question: "هل تزورون مكتبنا؟", answer: "نعم في الخبر والدمام عند الحاجة، وأغلب الدعم يتم عن بُعد." },
        { question: "هل يشمل العقد موقعاً لم تبنوه أنتم؟", answer: "يمكن ذلك بعد مراجعة الموقع والتأكد أننا نستطيع صيانته." },
        { question: "هل يمكن إلغاء العقد؟", answer: "نتفق على مدة العقد وشروط إنهائه كتابياً قبل البدء." },
      ],
      relatedServices: ["professional-email-setup", "website-design-development", "zatca-e-invoicing"],
    },
    en: {
      longDescription:
        "A monthly IT support retainer for companies in Al Khobar and Dammam: email and domain management, monthly website updates, security monitoring and priority support when something stops working. It suits companies that don't need a full-time IT employee.",
      overview:
        "Most small and medium companies don't need a whole IT department, but they do need someone to look after the basics before they break: email and domain, website updates, backups, and access when staff join or leave. A monthly retainer gives you a team you know, looking after these things for a fixed monthly cost and responding with priority when you need it. At the start we agree in writing exactly what is included, so you know what is covered and what needs a separate quote.",
      benefits: ["Fixed monthly cost", "Priority response to technical issues", "Preventive maintenance", "Safer data"],
      features: ["Email and domain management", "Monthly website updates", "Security monitoring", "Priority technical support"],
      facts: {
        title: "Facts at a glance",
        rows: [
          { label: "Service", value: "Monthly IT support: email and domain, website updates, security monitoring, priority support" },
          { label: "For", value: "Small and medium businesses and contracting companies in Al Khobar and Dammam" },
          { label: "Cost", value: "A fixed monthly amount agreed after defining the scope (no published prices)" },
          { label: "How to start", value: WA.en },
        ],
      },
      sections: [
        { title: "Email and domain", content: "Adding new staff and closing leavers' accounts, resetting passwords, and keeping your domain renewed so email and the website don't suddenly stop." },
        { title: "Website updates", content: "Monthly updates to the website and CMS, small content changes within what we agree, and regular backups." },
        { title: "Security", content: "Watching the things that cause most problems: overdue updates, weak passwords and old access rights for people who have left." },
        { title: "When something stops working", content: "Contact us on WhatsApp or by phone and we handle it with priority over requests outside the retainer. Anything that needs an on-site visit is covered in Al Khobar and Dammam." },
      ],
      process: [
        { title: "Initial review", description: "We get to know your email, domain, website and devices.", icon: "Search" },
        { title: "Define the scope", description: "We write down what the retainer covers and what it doesn't.", icon: "ClipboardList" },
        { title: "Monthly care", description: "Updates, backups and a short report.", icon: "RefreshCw" },
        { title: "Support when needed", description: "Priority response on WhatsApp or phone.", icon: "LifeBuoy" },
      ],
      faqs: [
        { question: "What exactly does the retainer include?", answer: "We write it down at the start: email and domain, website updates, security monitoring, priority support, and anything else we agree." },
        { question: "How much does it cost?", answer: "A fixed monthly amount set after reviewing your systems and agreeing the scope. We don't publish fixed prices." },
        { question: "Do you visit our office?", answer: "Yes, in Al Khobar and Dammam when needed; most support is remote." },
        { question: "Can it cover a website you didn't build?", answer: "Yes, after we review the site and confirm we can maintain it." },
        { question: "Can the retainer be cancelled?", answer: "We agree the term and how to end it in writing before starting." },
      ],
      relatedServices: ["professional-email-setup", "website-design-development", "zatca-e-invoicing"],
    },
    bn: {
      longDescription:
        "আল খোবার ও দাম্মামের প্রতিষ্ঠানের জন্য মাসিক আইটি সাপোর্ট চুক্তি: ইমেইল ও ডোমেইন ব্যবস্থাপনা, মাসিক ওয়েবসাইট আপডেট, নিরাপত্তা পর্যবেক্ষণ এবং কিছু কাজ না করলে অগ্রাধিকার সাপোর্ট। যাদের পূর্ণকালীন আইটি কর্মী দরকার নেই তাদের জন্য উপযুক্ত।",
      overview:
        "বেশিরভাগ ছোট ও মাঝারি প্রতিষ্ঠানের পুরো আইটি বিভাগ লাগে না, কিন্তু নষ্ট হওয়ার আগে মৌলিক বিষয়গুলো দেখার কেউ দরকার: ইমেইল ও ডোমেইন, ওয়েবসাইট আপডেট, ব্যাকআপ, কর্মী আসা-যাওয়ার সময় অ্যাক্সেস। মাসিক চুক্তিতে নির্দিষ্ট মাসিক খরচে একটি পরিচিত টিম এগুলো দেখে এবং প্রয়োজনে অগ্রাধিকার দিয়ে সাড়া দেয়। শুরুতেই লিখিতভাবে ঠিক করি কী অন্তর্ভুক্ত।",
      benefits: ["নির্দিষ্ট মাসিক খরচ", "কারিগরি সমস্যায় অগ্রাধিকার", "প্রতিরোধমূলক রক্ষণাবেক্ষণ", "আরও নিরাপদ ডেটা"],
      features: ["ইমেইল ও ডোমেইন ব্যবস্থাপনা", "মাসিক ওয়েবসাইট আপডেট", "নিরাপত্তা পর্যবেক্ষণ", "অগ্রাধিকার কারিগরি সাপোর্ট"],
      facts: {
        title: "সংক্ষেপে তথ্য",
        rows: [
          { label: "সেবা", value: "মাসিক আইটি সাপোর্ট: ইমেইল ও ডোমেইন, ওয়েবসাইট আপডেট, নিরাপত্তা, অগ্রাধিকার সাপোর্ট" },
          { label: "কাদের জন্য", value: "আল খোবার ও দাম্মামের ছোট-মাঝারি ও কনট্রাক্টিং প্রতিষ্ঠান" },
          { label: "খরচ", value: "পরিধি ঠিক হলে নির্দিষ্ট মাসিক অঙ্ক" },
          { label: "শুরু করতে", value: WA.bn },
        ],
      },
      sections: [
        { title: "ইমেইল ও ডোমেইন", content: "নতুন কর্মী যোগ ও চলে যাওয়াদের অ্যাকাউন্ট বন্ধ, পাসওয়ার্ড রিসেট এবং ডোমেইন নবায়ন, যাতে ইমেইল বা ওয়েবসাইট হঠাৎ বন্ধ না হয়।" },
        { title: "ওয়েবসাইট আপডেট", content: "ওয়েবসাইট ও CMS-এর মাসিক আপডেট, চুক্তির মধ্যে ছোট কনটেন্ট পরিবর্তন এবং নিয়মিত ব্যাকআপ।" },
        { title: "নিরাপত্তা", content: "বেশিরভাগ সমস্যার কারণগুলো নজরে রাখা: বিলম্বিত আপডেট, দুর্বল পাসওয়ার্ড এবং চলে যাওয়া কর্মীদের পুরনো অ্যাক্সেস।" },
        { title: "কিছু কাজ না করলে", content: "WhatsApp বা ফোনে যোগাযোগ করুন, আমরা চুক্তির বাইরের অনুরোধের আগে অগ্রাধিকার দিয়ে সমাধান করি। সরাসরি ভিজিট আল খোবার ও দাম্মামে।" },
      ],
      process: [
        { title: "প্রাথমিক পর্যালোচনা", description: "ইমেইল, ডোমেইন, ওয়েবসাইট ও ডিভাইস জানা।", icon: "Search" },
        { title: "পরিধি নির্ধারণ", description: "চুক্তিতে কী আছে আর কী নেই তা লেখা।", icon: "ClipboardList" },
        { title: "মাসিক যত্ন", description: "আপডেট, ব্যাকআপ ও সংক্ষিপ্ত রিপোর্ট।", icon: "RefreshCw" },
        { title: "প্রয়োজনে সাপোর্ট", description: "WhatsApp বা ফোনে অগ্রাধিকার।", icon: "LifeBuoy" },
      ],
      faqs: [
        { question: "চুক্তিতে ঠিক কী থাকে?", answer: "শুরুতে লিখে দিই: ইমেইল ও ডোমেইন, ওয়েবসাইট আপডেট, নিরাপত্তা পর্যবেক্ষণ, অগ্রাধিকার সাপোর্ট ও অন্য যা ঠিক হয়।" },
        { question: "খরচ কত?", answer: "আপনার সিস্টেম দেখে পরিধি ঠিক হলে নির্দিষ্ট মাসিক অঙ্ক। নির্দিষ্ট মূল্য প্রকাশ করি না।" },
        { question: "আপনারা কি অফিসে আসেন?", answer: "হ্যাঁ, প্রয়োজনে আল খোবার ও দাম্মামে; বেশিরভাগ সাপোর্ট রিমোটে।" },
        { question: "চুক্তি কি বাতিল করা যায়?", answer: "শুরুর আগে মেয়াদ ও শেষ করার নিয়ম লিখিতভাবে ঠিক করি।" },
      ],
      relatedServices: ["professional-email-setup", "website-design-development", "zatca-e-invoicing"],
    },
  },
};
