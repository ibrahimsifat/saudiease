// ZATCA e-invoicing page content (MASTER-PLAN task 3-2), written per language.
//
// Evidence rules (docs/seo/business-goals.md):
// - Saudi Ease sets up and integrates THIRD-PARTY e-invoicing software that meets
//   ZATCA requirements. It is NOT a ZATCA-listed solution provider and does not
//   give tax advice. No prices, no client results, no platform partner claims.
// - Regulatory facts below are public ZATCA information (Phase 1 from
//   4 Dec 2021; Phase 2 from 1 Jan 2023 in waves; clearance for standard tax
//   invoices, reporting within 24 hours for simplified invoices; XML (UBL 2.1),
//   cryptographic stamp, QR code; device onboarding with an OTP from FATOORA).
import type { ServiceDetail } from "./ar";

type ZatcaContent = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "technologies" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const related = ["it-support-retainer", "website-design-development", "company-profile-branding"];

export const ZATCA_CONTENT: Record<string, ZatcaContent> = {
  ar: {
    longDescription:
      "نجهّز ونربط أنظمة الفوترة الإلكترونية المتوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (زاتكا) في المرحلتين الأولى والثانية، لشركات المقاولات والقطاع الصناعي والشركات الصغيرة في الخبر والدمام والمنطقة الشرقية. نفحص نظامك الحالي، ونربطه بمنصة فاتورة أو نساعدك في اختيار نظام متوافق، ونختبره قبل التشغيل. راسلنا على واتساب لنبدأ بفحص الجاهزية.",
    overview:
      "الفوترة الإلكترونية إلزامية في المملكة لكل منشأة مسجلة في ضريبة القيمة المضافة. المرحلة الأولى (الإصدار والحفظ) بدأت في 4 ديسمبر 2021، والمرحلة الثانية (الربط والتكامل) بدأت في 1 يناير 2023 وتُطبّق على دفعات (موجات)، وتبلغ الهيئة كل منشأة بموعد ربطها قبل ستة أشهر على الأقل. في المرحلة الثانية يجب أن يُصدر نظامك الفاتورة بصيغة XML وفق معيار UBL 2.1، مع ختم تشفيري ورمز QR ومعرّف فريد، وأن يرسلها إلى منصة فاتورة: الفواتير الضريبية (بين الشركات) تُعتمد من الهيئة قبل إرسالها للمشتري، والفواتير المبسطة (للأفراد) تُبلَّغ خلال 24 ساعة. دورنا تقني: نجهّز البرنامج المتوافق ونربطه ونختبره وندرّب فريقك. لسنا مزود حلول مدرجاً لدى زاتكا، ولا نقدم استشارات ضريبية؛ محاسبك أو مستشارك الضريبي يبقى مرجعك في المعالجة الضريبية.",
    benefits: [
      "فحص جاهزية نظامك الحالي للمرحلة الثانية",
      "ربط برنامجك بمنصة فاتورة أو اختيار نظام متوافق",
      "تسجيل الأجهزة والحصول على الختم التشفيري",
      "اختبار كامل قبل التشغيل الفعلي",
      "تدريب فريق المحاسبة والمبيعات بالعربية والإنجليزية",
    ],
    features: [
      "إعداد المرحلة الأولى والمرحلة الثانية",
      "ربط مع منصة فاتورة",
      "تسجيل الأجهزة ونقاط البيع",
      "اختبار في بيئة المحاكاة",
      "دعم بعد التشغيل",
    ],
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "الخدمة", value: "تجهيز وربط برامج فوترة إلكترونية متوافقة مع زاتكا (المرحلة الأولى والثانية)" },
        { label: "لمن", value: "المنشآت المسجلة في ضريبة القيمة المضافة، خصوصاً شركات المقاولات والقطاع الصناعي" },
        { label: "أين", value: "زيارات ميدانية في الخبر والدمام، وعن بُعد في باقي مناطق المملكة" },
        { label: "ما لسنا عليه", value: "لسنا مزود حلول مدرجاً لدى زاتكا ولا نقدم استشارات ضريبية؛ ننفّذ برامج متوافقة من جهات أخرى" },
        { label: "اللغات", value: "العربية والإنجليزية والبنغالية" },
        { label: "السعر", value: "عرض سعر بعد فحص الجاهزية (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    sections: [
      {
        title: "فحص الجاهزية للمرحلة الثانية",
        content:
          "نبدأ بمراجعة طريقة إصدار فواتيرك اليوم: البرنامج المحاسبي أو نظام نقاط البيع، وعدد الفروع والأجهزة، ونوع فواتيرك (ضريبية للشركات أو مبسطة للأفراد أو كلاهما). نتحقق هل يدعم برنامجك المرحلة الثانية فعلاً أو يحتاج تحديثاً، وهل بيانات المنشأة في الفاتورة مكتملة (الرقم الضريبي، والعنوان الوطني، ورقم السجل التجاري). تحصل بعدها على قائمة واضحة بما يلزم، وجدول زمني مكتوب.",
      },
      {
        title: "ربط برنامجك الحالي بمنصة فاتورة",
        content:
          "إذا كان برنامجك يدعم المرحلة الثانية، نفعّل خاصية الربط ونضبط إعداداتها: صيغة XML، والختم التشفيري، ورمز QR، وتسلسل الفواتير. نربط كل جهاز أو فرع يصدر فواتير، ونتأكد أن الفواتير الضريبية تُرسل للاعتماد قبل مشاركتها مع العميل، وأن الفواتير المبسطة تُبلَّغ خلال المهلة.",
      },
      {
        title: "اختيار نظام متوافق إذا لم يكن برنامجك جاهزاً",
        content:
          "بعض البرامج القديمة أو الجداول اليدوية لا يمكن ربطها. في هذه الحالة نقارن لك خيارات من برامج متوافقة حسب حجم شركتك وطريقة عملك وميزانيتك، ثم ننقل بيانات العملاء والأصناف ونجهّز النظام الجديد. القرار لك، ونوضح لك مزايا كل خيار وحدوده بلغة بسيطة.",
      },
      {
        title: "تسجيل الأجهزة والحصول على الختم التشفيري",
        content:
          "لكل جهاز أو وحدة تصدر فواتير يلزم ختم تشفيري من الهيئة. تُنشئ أنت رمز التحقق (OTP) من بوابة فاتورة بحسابك، ونستخدمه معك لتسجيل الجهاز. لا نحتاج كلمة مرور بوابتك، وتبقى الصلاحيات عندك.",
      },
      {
        title: "الاختبار قبل التشغيل",
        content:
          "نختبر الفواتير في بيئة المحاكاة قبل التشغيل الفعلي: فاتورة ضريبية، وفاتورة مبسطة، وإشعار دائن، وإشعار مدين. نراجع رسائل القبول والرفض ونصلح أسباب الرفض قبل أن تصل لعملائك.",
      },
      {
        title: "التدريب والدعم بعد التشغيل",
        content:
          "ندرّب فريق المحاسبة والمبيعات على إصدار الفواتير ومتابعة الفواتير المرفوضة، بالعربية أو الإنجليزية أو البنغالية. بعد التشغيل نتابع معك الأسابيع الأولى، ويمكن الاستمرار بعقد دعم تقني شهري.",
      },
    ],
    process: [
      { title: "تواصل وفحص أولي", description: "ترسل لنا اسم برنامجك وعدد الفروع والأجهزة على واتساب، ونحدد موعد الفحص.", icon: "MessageCircle" },
      { title: "فحص الجاهزية", description: "نراجع النظام والبيانات ونسلمك قائمة المتطلبات وجدولاً زمنياً مكتوباً.", icon: "ClipboardList" },
      { title: "التجهيز والإعداد", description: "نحدّث برنامجك أو نجهّز نظاماً متوافقاً ونضبط بيانات الفاتورة.", icon: "Settings" },
      { title: "تسجيل الأجهزة", description: "تُنشئ رمز التحقق من بوابة فاتورة ونسجّل الأجهزة معك.", icon: "Link" },
      { title: "الاختبار", description: "نختبر كل أنواع الفواتير في بيئة المحاكاة ونعالج الرفض.", icon: "CheckCircle" },
      { title: "التشغيل والتدريب", description: "ننتقل للتشغيل الفعلي وندرّب فريقك ونتابع الأسابيع الأولى.", icon: "Users" },
    ],
    technologies: [
      { name: "منصة فاتورة", icon: "Link", description: "الربط مع منصة الهيئة لاعتماد الفواتير والإبلاغ عنها" },
      { name: "XML (UBL 2.1)", icon: "FileCode", description: "صيغة الفاتورة المطلوبة في المرحلة الثانية" },
      { name: "الختم التشفيري", icon: "Lock", description: "شهادة لكل جهاز يصدر فواتير" },
      { name: "رمز QR", icon: "QrCode", description: "رمز الاستجابة السريعة على الفاتورة" },
    ],
    faqs: [
      { question: "هل تلزمني المرحلة الثانية الآن؟", answer: "يعتمد ذلك على موجتك. الهيئة تبلغ كل منشأة بموعد ربطها قبل ستة أشهر على الأقل. إذا وصلك الإشعار أو لست متأكداً، أرسل لنا وسنساعدك في التحقق من البوابة وتجهيز خطة قبل الموعد." },
      { question: "هل أنتم مزود حلول مدرج لدى زاتكا؟", answer: "لا. نحن جهة تقنية تجهّز وتربط برامج فوترة إلكترونية متوافقة من جهات أخرى. نوضح لك ذلك من البداية حتى تختار عن معرفة." },
      { question: "هل يمكن ربط برنامجي المحاسبي الحالي؟", answer: "في حالات كثيرة نعم، إذا كان مزوّد البرنامج يدعم المرحلة الثانية. نتحقق من ذلك في فحص الجاهزية، وإن لم يكن ممكناً نساعدك في اختيار نظام متوافق." },
      { question: "ما الفرق بين الاعتماد والإبلاغ؟", answer: "الفاتورة الضريبية (بين الشركات) تُرسل للهيئة لاعتمادها قبل مشاركتها مع المشتري. الفاتورة المبسطة (للأفراد) تُصدر للعميل مباشرة ثم تُبلَّغ للهيئة خلال 24 ساعة." },
      { question: "ماذا تحتاجون منا للبدء؟", answer: "الرقم الضريبي ورقم السجل التجاري والعنوان الوطني، واسم البرنامج الحالي، وعدد الفروع والأجهزة، ونماذج من فواتيركم. رمز التحقق من بوابة فاتورة تُنشئه أنت؛ لا نحتاج كلمة المرور." },
      { question: "كم يستغرق التجهيز؟", answer: "يختلف حسب البرنامج وعدد الأجهزة والفروع. بعد فحص الجاهزية نعطيك جدولاً زمنياً مكتوباً ونلتزم بإبلاغك مبكراً بأي تغيير." },
      { question: "هل تخدمون شركات خارج الخبر والدمام؟", answer: "نعم عن بُعد في كل مناطق المملكة. الزيارات الميدانية في الخبر والدمام." },
      { question: "هل تقدمون استشارات ضريبية؟", answer: "لا. عملنا تقني (البرنامج والربط والاختبار والتدريب). أسئلة المعالجة الضريبية يجيب عنها محاسبك أو مستشارك الضريبي." },
    ],
    relatedServices: related,
  },

  en: {
    longDescription:
      "We set up and integrate e-invoicing software that meets ZATCA Phase 1 and Phase 2 requirements for contracting, industrial and smaller companies in Al Khobar, Dammam and the Eastern Province. We check your current system, connect it to FATOORA or help you choose a compliant one, and test it before go-live. Message us on WhatsApp to start with a readiness check.",
    overview:
      "E-invoicing is mandatory in Saudi Arabia for every VAT-registered business. Phase 1 (generation) started on 4 December 2021. Phase 2 (integration) started on 1 January 2023 and is being rolled out in waves; ZATCA notifies each business of its integration date at least six months in advance. In Phase 2 your system must issue invoices as XML in the UBL 2.1 standard, with a cryptographic stamp, a QR code and a unique identifier, and send them to ZATCA's FATOORA platform: standard tax invoices (B2B) are cleared by ZATCA before they go to the buyer, and simplified invoices (B2C) are reported within 24 hours. Our role is technical: we set up the compliant software, integrate it, test it and train your team. We are not a ZATCA-listed solution provider and we do not give tax advice; your accountant or tax adviser stays your reference for tax treatment.",
    benefits: [
      "Phase 2 readiness check of your current system",
      "Your software connected to FATOORA, or a compliant one chosen",
      "Devices onboarded with their cryptographic stamp",
      "Full testing before go-live",
      "Training for accounts and sales staff in Arabic or English",
    ],
    features: [
      "Phase 1 and Phase 2 setup",
      "FATOORA integration",
      "Device and POS onboarding",
      "Simulation testing",
      "Post go-live support",
    ],
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "Service", value: "Setup and integration of ZATCA-compliant e-invoicing software (Phase 1 and Phase 2)" },
        { label: "For", value: "VAT-registered businesses, especially contracting and industrial companies" },
        { label: "Where", value: "On-site in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "What we are not", value: "Not a ZATCA-listed solution provider and not tax advisers; we implement compliant third-party software" },
        { label: "Languages", value: "Arabic, English, Bangla" },
        { label: "Price", value: "Quote after the readiness check (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "Phase 2 readiness check",
        content:
          "We start by reviewing how you issue invoices today: your accounting software or point-of-sale system, the number of branches and devices, and the invoice types you issue (standard tax invoices for companies, simplified invoices for individuals, or both). We check whether your software really supports Phase 2 or needs an upgrade, and whether your company data on the invoice is complete: VAT number, national address and CR number. You get a clear list of what is needed and a written timeline.",
      },
      {
        title: "Connecting your current software to FATOORA",
        content:
          "If your software supports Phase 2, we switch on the integration and configure it: XML format, cryptographic stamp, QR code and invoice sequence. We connect every device or branch that issues invoices, and make sure standard tax invoices are sent for clearance before they reach your customer, and simplified invoices are reported within the deadline.",
      },
      {
        title: "Choosing a compliant system when yours can't be upgraded",
        content:
          "Some older software and spreadsheet-based invoicing cannot be integrated. In that case we compare compliant options for your company size, way of working and budget, then move your customer and item data and set up the new system. The decision is yours; we explain the strengths and limits of each option in plain language.",
      },
      {
        title: "Device onboarding and the cryptographic stamp",
        content:
          "Every device or unit that issues invoices needs a cryptographic stamp from ZATCA. You generate the one-time password (OTP) in the FATOORA portal with your own account, and we use it with you to onboard the device. We never need your portal password, and access stays with you.",
      },
      {
        title: "Testing before go-live",
        content:
          "We test in ZATCA's simulation environment before going live: a standard tax invoice, a simplified invoice, a credit note and a debit note. We review the acceptance and rejection messages and fix the causes of any rejection before your customers see an invoice.",
      },
      {
        title: "Training and support after go-live",
        content:
          "We train your accounts and sales staff to issue invoices and follow up rejected ones, in Arabic, English or Bangla. After go-live we stay with you through the first weeks, and you can continue with a monthly IT support retainer.",
      },
    ],
    process: [
      { title: "Contact and first check", description: "Send us your software name and number of branches and devices on WhatsApp; we book the readiness check.", icon: "MessageCircle" },
      { title: "Readiness check", description: "We review the system and data and give you a requirements list and a written timeline.", icon: "ClipboardList" },
      { title: "Setup", description: "We upgrade your software or set up a compliant system and configure the invoice data.", icon: "Settings" },
      { title: "Device onboarding", description: "You generate the OTP in FATOORA and we onboard the devices with you.", icon: "Link" },
      { title: "Testing", description: "We test every invoice type in simulation and fix rejections.", icon: "CheckCircle" },
      { title: "Go-live and training", description: "We go live, train your team and follow up during the first weeks.", icon: "Users" },
    ],
    technologies: [
      { name: "FATOORA platform", icon: "Link", description: "Integration with ZATCA for clearance and reporting" },
      { name: "XML (UBL 2.1)", icon: "FileCode", description: "The invoice format required in Phase 2" },
      { name: "Cryptographic stamp", icon: "Lock", description: "A certificate for every device that issues invoices" },
      { name: "QR code", icon: "QrCode", description: "The QR code printed on the invoice" },
    ],
    faqs: [
      { question: "Do I need Phase 2 now?", answer: "It depends on your wave. ZATCA notifies each business of its integration date at least six months in advance. If you have received the notice, or you are not sure, message us and we will help you check the portal and plan before the date." },
      { question: "Are you listed by ZATCA as an e-invoicing solution provider?", answer: "No. We are a technical team that sets up and integrates compliant e-invoicing software from other vendors. We say this up front so you can choose with full information." },
      { question: "Can my current accounting software be connected?", answer: "Often yes, if the software vendor supports Phase 2. We check this in the readiness check; if it isn't possible, we help you choose a compliant system." },
      { question: "What is the difference between clearance and reporting?", answer: "A standard tax invoice (B2B) is sent to ZATCA for clearance before it is shared with the buyer. A simplified invoice (B2C) is given to the customer straight away and reported to ZATCA within 24 hours." },
      { question: "What do you need from us to start?", answer: "Your VAT number, CR number and national address, the name of your current software, the number of branches and devices, and a few sample invoices. You generate the FATOORA OTP yourself; we do not need your password." },
      { question: "How long does setup take?", answer: "It depends on the software and the number of devices and branches. After the readiness check we give you a written timeline and tell you early about any change." },
      { question: "Do you work with companies outside Al Khobar and Dammam?", answer: "Yes, remotely anywhere in Saudi Arabia. On-site visits are in Al Khobar and Dammam." },
      { question: "Do you give tax advice?", answer: "No. Our work is technical: software, integration, testing and training. Questions about tax treatment are for your accountant or tax adviser." },
    ],
    relatedServices: related,
  },

  bn: {
    longDescription:
      "আমরা আল খোবার, দাম্মাম ও পূর্বাঞ্চলের কনট্রাক্টিং, শিল্প ও ছোট প্রতিষ্ঠানের জন্য ZATCA ফেজ ১ ও ফেজ ২-এর প্রয়োজনীয়তা পূরণকারী ই-ইনভয়েসিং সফটওয়্যার সেটআপ ও ইন্টিগ্রেট করি। আপনার বর্তমান সিস্টেম যাচাই করি, FATOORA-র সাথে যুক্ত করি বা একটি সম্মত সফটওয়্যার বেছে নিতে সাহায্য করি, এবং চালুর আগে পরীক্ষা করি। প্রস্তুতি যাচাই শুরু করতে WhatsApp করুন।",
    overview:
      "সৌদি আরবে ভ্যাট-নিবন্ধিত প্রতিটি প্রতিষ্ঠানের জন্য ই-ইনভয়েসিং বাধ্যতামূলক। ফেজ ১ (ইনভয়েস তৈরি) শুরু হয় ৪ ডিসেম্বর ২০২১-এ। ফেজ ২ (ইন্টিগ্রেশন) শুরু হয় ১ জানুয়ারি ২০২৩-এ এবং ধাপে ধাপে (ওয়েভে) চালু হচ্ছে; ZATCA প্রতিটি প্রতিষ্ঠানকে অন্তত ছয় মাস আগে তার তারিখ জানায়। ফেজ ২-এ আপনার সিস্টেমকে UBL 2.1 মানের XML ফরম্যাটে, ক্রিপ্টোগ্রাফিক স্ট্যাম্প, QR কোড ও ইউনিক আইডিসহ ইনভয়েস তৈরি করে FATOORA প্ল্যাটফর্মে পাঠাতে হয়: স্ট্যান্ডার্ড ট্যাক্স ইনভয়েস (B2B) ক্রেতার কাছে যাওয়ার আগে ZATCA ক্লিয়ার করে, আর সিমপ্লিফায়েড ইনভয়েস (B2C) ২৪ ঘণ্টার মধ্যে রিপোর্ট করতে হয়। আমাদের কাজ প্রযুক্তিগত: সম্মত সফটওয়্যার সেটআপ, ইন্টিগ্রেশন, পরীক্ষা ও প্রশিক্ষণ। আমরা ZATCA-তালিকাভুক্ত সলিউশন প্রোভাইডার নই এবং কর-পরামর্শ দিই না; করের বিষয়ে আপনার হিসাবরক্ষক বা কর-পরামর্শদাতাই আপনার রেফারেন্স।",
    benefits: [
      "আপনার বর্তমান সিস্টেমের ফেজ ২ প্রস্তুতি যাচাই",
      "আপনার সফটওয়্যার FATOORA-র সাথে যুক্ত, বা সম্মত সফটওয়্যার নির্বাচন",
      "ক্রিপ্টোগ্রাফিক স্ট্যাম্পসহ ডিভাইস অনবোর্ডিং",
      "চালুর আগে সম্পূর্ণ পরীক্ষা",
      "অ্যাকাউন্টস ও সেলস টিমের প্রশিক্ষণ",
    ],
    features: [
      "ফেজ ১ ও ফেজ ২ সেটআপ",
      "FATOORA ইন্টিগ্রেশন",
      "ডিভাইস ও POS অনবোর্ডিং",
      "সিমুলেশন পরীক্ষা",
      "চালুর পরে সাপোর্ট",
    ],
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "সেবা", value: "ZATCA-সম্মত ই-ইনভয়েসিং সফটওয়্যার সেটআপ ও ইন্টিগ্রেশন (ফেজ ১ ও ফেজ ২)" },
        { label: "কাদের জন্য", value: "ভ্যাট-নিবন্ধিত প্রতিষ্ঠান, বিশেষ করে কনট্রাক্টিং ও শিল্প প্রতিষ্ঠান" },
        { label: "কোথায়", value: "আল খোবার ও দাম্মামে সরাসরি; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "আমরা যা নই", value: "ZATCA-তালিকাভুক্ত সলিউশন প্রোভাইডার বা কর-পরামর্শদাতা নই; আমরা তৃতীয় পক্ষের সম্মত সফটওয়্যার বাস্তবায়ন করি" },
        { label: "ভাষা", value: "আরবি, ইংরেজি, বাংলা" },
        { label: "মূল্য", value: "প্রস্তুতি যাচাইয়ের পরে কোটেশন (নির্দিষ্ট মূল্য প্রকাশ করি না)" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "ফেজ ২ প্রস্তুতি যাচাই",
        content:
          "আপনি এখন কীভাবে ইনভয়েস দেন তা আমরা দেখি: অ্যাকাউন্টিং সফটওয়্যার বা POS সিস্টেম, শাখা ও ডিভাইসের সংখ্যা, এবং ইনভয়েসের ধরন (কোম্পানির জন্য ট্যাক্স ইনভয়েস, ব্যক্তির জন্য সিমপ্লিফায়েড, বা দুটোই)। আপনার সফটওয়্যার সত্যিই ফেজ ২ সমর্থন করে কি না, আর ইনভয়েসে ভ্যাট নম্বর, জাতীয় ঠিকানা ও CR নম্বর ঠিক আছে কি না তা যাচাই করি। এরপর আপনি পাবেন প্রয়োজনীয় কাজের তালিকা ও লিখিত সময়সূচি।",
      },
      {
        title: "বর্তমান সফটওয়্যার FATOORA-র সাথে যুক্ত করা",
        content:
          "আপনার সফটওয়্যার ফেজ ২ সমর্থন করলে আমরা ইন্টিগ্রেশন চালু ও কনফিগার করি: XML ফরম্যাট, ক্রিপ্টোগ্রাফিক স্ট্যাম্প, QR কোড ও ইনভয়েস সিকোয়েন্স। ইনভয়েস দেয় এমন প্রতিটি ডিভাইস বা শাখা যুক্ত করি এবং নিশ্চিত করি যে ট্যাক্স ইনভয়েস ক্লিয়ারেন্সে যায় ও সিমপ্লিফায়েড ইনভয়েস সময়মতো রিপোর্ট হয়।",
      },
      {
        title: "আপগ্রেড সম্ভব না হলে সম্মত সিস্টেম বেছে নেওয়া",
        content:
          "কিছু পুরনো সফটওয়্যার বা স্প্রেডশিটে ইনভয়েসিং ইন্টিগ্রেট করা যায় না। তখন আপনার প্রতিষ্ঠানের আকার, কাজের ধরন ও বাজেট অনুযায়ী সম্মত বিকল্পগুলো তুলনা করি, তারপর গ্রাহক ও পণ্যের ডেটা স্থানান্তর করে নতুন সিস্টেম সেটআপ করি। সিদ্ধান্ত আপনার।",
      },
      {
        title: "ডিভাইস অনবোর্ডিং ও ক্রিপ্টোগ্রাফিক স্ট্যাম্প",
        content:
          "ইনভয়েস দেয় এমন প্রতিটি ডিভাইসের জন্য ZATCA থেকে ক্রিপ্টোগ্রাফিক স্ট্যাম্প লাগে। আপনি নিজের অ্যাকাউন্ট দিয়ে FATOORA পোর্টাল থেকে OTP তৈরি করেন, আর আমরা আপনার সাথে মিলে ডিভাইস অনবোর্ড করি। আপনার পোর্টালের পাসওয়ার্ড আমাদের লাগে না।",
      },
      {
        title: "চালুর আগে পরীক্ষা",
        content:
          "চালুর আগে ZATCA-র সিমুলেশন পরিবেশে পরীক্ষা করি: ট্যাক্স ইনভয়েস, সিমপ্লিফায়েড ইনভয়েস, ক্রেডিট নোট ও ডেবিট নোট। গ্রহণ ও প্রত্যাখ্যানের বার্তা দেখে প্রত্যাখ্যানের কারণ ঠিক করি।",
      },
      {
        title: "প্রশিক্ষণ ও চালুর পরে সাপোর্ট",
        content:
          "আরবি, ইংরেজি বা বাংলায় আপনার টিমকে ইনভয়েস দেওয়া ও প্রত্যাখ্যাত ইনভয়েস অনুসরণের প্রশিক্ষণ দিই। চালুর পরে প্রথম কয়েক সপ্তাহ পাশে থাকি, চাইলে মাসিক আইটি সাপোর্ট চুক্তি চালিয়ে যেতে পারেন।",
      },
    ],
    process: [
      { title: "যোগাযোগ ও প্রাথমিক যাচাই", description: "WhatsApp-এ সফটওয়্যারের নাম এবং শাখা ও ডিভাইসের সংখ্যা জানান।", icon: "MessageCircle" },
      { title: "প্রস্তুতি যাচাই", description: "সিস্টেম ও ডেটা দেখে প্রয়োজনীয় তালিকা ও লিখিত সময়সূচি দিই।", icon: "ClipboardList" },
      { title: "সেটআপ", description: "আপনার সফটওয়্যার আপগ্রেড বা সম্মত সিস্টেম সেটআপ করি।", icon: "Settings" },
      { title: "ডিভাইস অনবোর্ডিং", description: "আপনি FATOORA-তে OTP তৈরি করেন, আমরা ডিভাইস অনবোর্ড করি।", icon: "Link" },
      { title: "পরীক্ষা", description: "সিমুলেশনে প্রতিটি ধরনের ইনভয়েস পরীক্ষা করি।", icon: "CheckCircle" },
      { title: "চালু ও প্রশিক্ষণ", description: "চালু করি, টিমকে প্রশিক্ষণ দিই ও প্রথম সপ্তাহগুলো অনুসরণ করি।", icon: "Users" },
    ],
    technologies: [
      { name: "FATOORA প্ল্যাটফর্ম", icon: "Link", description: "ক্লিয়ারেন্স ও রিপোর্টিংয়ের জন্য ZATCA ইন্টিগ্রেশন" },
      { name: "XML (UBL 2.1)", icon: "FileCode", description: "ফেজ ২-এ প্রয়োজনীয় ইনভয়েস ফরম্যাট" },
      { name: "ক্রিপ্টোগ্রাফিক স্ট্যাম্প", icon: "Lock", description: "প্রতিটি ডিভাইসের জন্য সার্টিফিকেট" },
      { name: "QR কোড", icon: "QrCode", description: "ইনভয়েসে ছাপা QR কোড" },
    ],
    faqs: [
      { question: "আমার কি এখনই ফেজ ২ লাগবে?", answer: "এটা আপনার ওয়েভের উপর নির্ভর করে। ZATCA অন্তত ছয় মাস আগে তারিখ জানায়। নোটিশ পেলে বা নিশ্চিত না হলে আমাদের জানান; আমরা যাচাই ও পরিকল্পনায় সাহায্য করব।" },
      { question: "আপনারা কি ZATCA-তালিকাভুক্ত সলিউশন প্রোভাইডার?", answer: "না। আমরা একটি প্রযুক্তি দল যারা অন্য প্রতিষ্ঠানের সম্মত ই-ইনভয়েসিং সফটওয়্যার সেটআপ ও ইন্টিগ্রেট করে।" },
      { question: "আমার বর্তমান অ্যাকাউন্টিং সফটওয়্যার কি যুক্ত করা যাবে?", answer: "প্রায়ই হ্যাঁ, যদি সফটওয়্যার প্রস্তুতকারক ফেজ ২ সমর্থন করে। প্রস্তুতি যাচাইয়ে আমরা দেখি; সম্ভব না হলে সম্মত সিস্টেম বেছে নিতে সাহায্য করি।" },
      { question: "ক্লিয়ারেন্স ও রিপোর্টিংয়ের পার্থক্য কী?", answer: "ট্যাক্স ইনভয়েস (B2B) ক্রেতাকে দেওয়ার আগে ZATCA ক্লিয়ার করে। সিমপ্লিফায়েড ইনভয়েস (B2C) সঙ্গে সঙ্গে গ্রাহককে দেওয়া হয় এবং ২৪ ঘণ্টার মধ্যে রিপোর্ট করা হয়।" },
      { question: "শুরু করতে আপনাদের কী লাগবে?", answer: "ভ্যাট নম্বর, CR নম্বর, জাতীয় ঠিকানা, বর্তমান সফটওয়্যারের নাম, শাখা ও ডিভাইসের সংখ্যা এবং কয়েকটি নমুনা ইনভয়েস। FATOORA OTP আপনি নিজে তৈরি করবেন; পাসওয়ার্ড লাগে না।" },
      { question: "সেটআপে কত সময় লাগে?", answer: "সফটওয়্যার ও ডিভাইস-শাখার সংখ্যার উপর নির্ভর করে। প্রস্তুতি যাচাইয়ের পরে লিখিত সময়সূচি দিই।" },
      { question: "আল খোবার ও দাম্মামের বাইরে কাজ করেন?", answer: "হ্যাঁ, সৌদি আরবের যেকোনো জায়গায় রিমোটে। সরাসরি ভিজিট আল খোবার ও দাম্মামে।" },
      { question: "আপনারা কি কর-পরামর্শ দেন?", answer: "না। আমাদের কাজ প্রযুক্তিগত: সফটওয়্যার, ইন্টিগ্রেশন, পরীক্ষা ও প্রশিক্ষণ। করের প্রশ্নের উত্তর দেবেন আপনার হিসাবরক্ষক বা কর-পরামর্শদাতা।" },
    ],
    relatedServices: related,
  },
};
