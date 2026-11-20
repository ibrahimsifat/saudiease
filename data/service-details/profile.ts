// Company profile design page content (MASTER-PLAN task 3-4), per language.
//
// Evidence rules (docs/seo/business-goals.md): deliverables are those already
// listed on the site (bilingual profile as PDF and print file, copywriting,
// letterhead/business cards via branding). No prices, no client names or
// samples (none approved yet), no results. The "what goes in a contractor's
// profile" list is general guidance, not a claim about past work.
import type { ServiceDetail } from "./ar";

type Content = Pick<
  ServiceDetail,
  "longDescription" | "overview" | "benefits" | "features" | "sections" | "process" | "faqs" | "relatedServices"
> & { facts: NonNullable<ServiceDetail["facts"]> };

const related = ["brand-identity", "website-design-development", "zatca-e-invoicing"];

export const PROFILE_CONTENT: Record<string, Content> = {
  ar: {
    longDescription:
      "نصمّم بروفايل الشركة بالعربية والإنجليزية لشركات المقاولات والإنشاءات والتوريد الصناعي، جاهزاً للتأهيل المسبق والمناقصات: ملف PDF للإرسال بالبريد، وملف للطباعة. نرتّب محتواه من مستنداتك ومشاريعك الحقيقية ونكتب النصوص معك. نخدم الخبر والدمام والمنطقة الشرقية. ابدأ برسالة على واتساب.",
    overview:
      "بروفايل شركة المقاولات ليس كتيّباً دعائياً؛ هو مستند يقرؤه مسؤول المشتريات أو لجنة التأهيل ليقرر هل شركتك مؤهلة للعمل معهم. لذلك نبنيه من بياناتك الحقيقية: السجل التجاري والتصنيف، ونطاق الأعمال، والمشاريع المنفذة بصورها، والمعدات والفريق، وسياسة السلامة، والشهادات التي تحملها فعلاً. نرتّب ذلك بتسلسل يسهل قراءته، ونكتب النصوص باللغتين العربية والإنجليزية بلغة مهنية واضحة، ثم نصممه بهوية شركتك. القوالب الجاهزة المجانية وأدوات التصميم الآلي تعطي شكلاً عاماً، لكنها لا تعرف مشاريعك ولا ما تطلبه لجان التأهيل. تتسلم ملف PDF خفيفاً للإرسال والتحميل، وملفاً للطباعة إن أردت. لا ننشر أسعاراً ثابتة؛ نرسل عرض سعر مكتوباً بعد مراجعة ما لديك من محتوى.",
    benefits: [
      "بروفايل بالعربية والإنجليزية",
      "مبني من مشاريعك ومستنداتك الحقيقية",
      "جاهز للتأهيل المسبق والمناقصات",
      "ملف PDF للإرسال وملف للطباعة",
      "متسق مع هوية شركتك وموقعها",
    ],
    features: [
      "ترتيب المحتوى وكتابة النصوص",
      "تصميم باللغتين",
      "ملف PDF وملف طباعة",
      "تحديث البروفايل لاحقاً",
      "ورق رسمي وبطاقات عمل عند الحاجة",
    ],
    facts: {
      title: "معلومات سريعة",
      rows: [
        { label: "الخدمة", value: "تصميم بروفايل شركة بالعربية والإنجليزية مع كتابة المحتوى" },
        { label: "لمن", value: "شركات المقاولات والإنشاءات والتوريد الصناعي والنقل والخدمات" },
        { label: "ما تستلمه", value: "ملف PDF للإرسال والتحميل، وملف للطباعة (حسب ما نتفق عليه)" },
        { label: "أين", value: "اجتماعات في الخبر والدمام؛ عن بُعد في باقي المملكة" },
        { label: "السعر", value: "عرض سعر مكتوب بعد مراجعة المحتوى (لا ننشر أسعاراً ثابتة)" },
        { label: "كيف تبدأ", value: "واتساب أو اتصال: 966558845503+" },
      ],
    },
    sections: [
      {
        title: "ماذا يحتوي بروفايل شركة المقاولات؟",
        content:
          "يختلف المحتوى حسب نشاطك، لكن لجان التأهيل تبحث عادةً عن: نبذة عن الشركة وتاريخها، وبيانات السجل التجاري والرقم الضريبي والتصنيف إن وُجد، ونطاق الأعمال والخدمات، وقائمة المشاريع المنفذة مع صور حقيقية، والمعدات والآليات، والهيكل التنظيمي والفريق الرئيسي، وسياسة الصحة والسلامة والجودة، والشهادات التي تحملها الشركة، وبيانات التواصل. لا نضيف أي شهادة أو مشروع لا تملك ما يثبته.",
      },
      {
        title: "نكتب المحتوى معك",
        content:
          "كثير من الشركات لديها المعلومات لكنها متفرقة في ملفات وصور ورسائل. نجمعها معك، ونرتّبها، ونكتب نصوصاً مختصرة وواضحة بالعربية والإنجليزية. تراجع النص قبل التصميم، فلا يدخل البروفايل شيء لم توافق عليه.",
      },
      {
        title: "التصميم بهوية شركتك",
        content:
          "نصمّم البروفايل بألوان شعارك وخطوطه، بصفحات مرتّبة تُقرأ بسرعة: عناوين واضحة، وجداول للبيانات، وصور مشاريع كبيرة. إذا لم تكن لديك هوية بصرية بعد، يمكن تصميم الشعار والهوية معاً، وكذلك الورق الرسمي وبطاقات العمل.",
      },
      {
        title: "ملف للإرسال وملف للطباعة",
        content:
          "نتفق في نطاق العمل على الصيغ التي تحتاجها: عادةً ملف PDF خفيف يُرسل بالبريد ويُرفع في بوابات الموردين، وملف بجودة الطباعة إن كنت ستطبعه. يمكن أيضاً وضع رابط تحميل البروفايل في موقع شركتك.",
      },
      {
        title: "البروفايل والموقع معاً",
        content:
          "مسؤول المشتريات غالباً يرى موقعك ثم يطلب البروفايل، أو العكس. عندما نصمّم الاثنين بهوية ومحتوى متسقين، تظهر شركتك بصورة واحدة في كل مكان. يمكنك طلب البروفايل وحده أو مع الموقع.",
      },
      {
        title: "تحديث البروفايل",
        content:
          "المشاريع والشهادات تتغير. نصمّم البروفايل بحيث يسهل تحديثه بإضافة مشاريع جديدة أو تعديل البيانات دون إعادة التصميم من البداية.",
      },
    ],
    process: [
      { title: "رسالة واجتماع", description: "ترسل لنا على واتساب، ونلتقي في الخبر أو الدمام أو عن بُعد.", icon: "MessageCircle" },
      { title: "جمع المحتوى", description: "نجمع المستندات والصور والمشاريع ونحدد ما ينقص.", icon: "FolderOpen" },
      { title: "الهيكل والنصوص", description: "نرتّب الصفحات ونكتب النصوص باللغتين للمراجعة.", icon: "FileText" },
      { title: "التصميم", description: "نصمّم البروفايل بهوية شركتك ونراجعه معك.", icon: "Palette" },
      { title: "التعديلات", description: "نعدّل حسب ملاحظاتك حتى الموافقة النهائية.", icon: "CheckCircle" },
      { title: "التسليم", description: "تستلم ملف PDF وملف الطباعة حسب ما اتفقنا عليه.", icon: "Download" },
    ],
    faqs: [
      { question: "كم تكلفة تصميم بروفايل شركة؟", answer: "لا ننشر أسعاراً ثابتة. التكلفة تعتمد على عدد الصفحات، واللغات، وهل نكتب المحتوى أم هو جاهز. نرسل عرض سعر مكتوباً بعد مراجعة ما لديك." },
      { question: "كم يستغرق تصميم البروفايل؟", answer: "يعتمد على عدد الصفحات وجاهزية المحتوى والصور. نتفق على جدول زمني مكتوب بعد جمع المحتوى." },
      { question: "هل تكتبون محتوى البروفايل؟", answer: "نعم، نرتّب المعلومات ونكتب النصوص بالعربية والإنجليزية من بياناتك، وتراجعها قبل التصميم." },
      { question: "هل يكون البروفايل بالعربية والإنجليزية؟", answer: "نعم، باللغتين في ملف واحد أو ملفين منفصلين حسب ما تفضّل." },
      { question: "ماذا أحتاج لتجهيزه؟", answer: "السجل التجاري، والشهادات التي تحملها، وقائمة المشاريع مع صورها، وقائمة المعدات، والشعار. وإن كان بعضها غير جاهز نساعدك في ترتيبه." },
      { question: "هل البروفايل الجاهز من القوالب يكفي؟", answer: "القالب يعطي شكلاً، لكن لجان التأهيل تقرأ المحتوى: المشاريع والمعدات والشهادات. لذلك نبني البروفايل من بياناتك الحقيقية." },
      { question: "هل تصممون الشعار والهوية أيضاً؟", answer: "نعم، يمكن تصميم الشعار والهوية البصرية والورق الرسمي وبطاقات العمل مع البروفايل." },
      { question: "هل تخدمون شركات خارج الخبر والدمام؟", answer: "نعم، عن بُعد في كل مناطق المملكة. الاجتماعات الحضورية في الخبر والدمام." },
    ],
    relatedServices: related,
  },

  en: {
    longDescription:
      "We design Arabic/English company profiles for contracting, construction and industrial supply companies, ready for pre-qualification and tenders: a PDF to email and a file for print. We build the content from your real documents and projects and write the text with you. We serve Al Khobar, Dammam and the Eastern Province. Start with a WhatsApp message.",
    overview:
      "A contractor's company profile is not a sales brochure; it is a document that a procurement officer or pre-qualification committee reads to decide whether your company is qualified to work with them. So we build it from your real data: CR and classification, scope of work, completed projects with photos, equipment and team, safety policy, and the certificates you actually hold. We put this in an order that is easy to read, write the text in Arabic and English in clear professional language, and design it in your company's identity. Free templates and automatic design tools give a general look, but they don't know your projects or what pre-qualification committees ask for. You receive a light PDF to send and download, and a print file if you want one. We don't publish fixed prices; you get a written quote after we review the content you have.",
    benefits: [
      "Arabic and English profile",
      "Built from your real projects and documents",
      "Ready for pre-qualification and tenders",
      "PDF to send plus a print file",
      "Consistent with your identity and website",
    ],
    features: [
      "Content structure and copywriting",
      "Bilingual design",
      "PDF and print files",
      "Later updates",
      "Letterhead and business cards when needed",
    ],
    facts: {
      title: "Facts at a glance",
      rows: [
        { label: "Service", value: "Arabic/English company profile design, including copywriting" },
        { label: "For", value: "Contracting, construction, industrial supply, transport and service companies" },
        { label: "You receive", value: "PDF to send and download, and a print file (as agreed in the scope)" },
        { label: "Where", value: "Meetings in Al Khobar and Dammam; remote across Saudi Arabia" },
        { label: "Price", value: "Written quote after reviewing your content (no fixed published prices)" },
        { label: "How to start", value: "WhatsApp or call +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "What goes into a contractor's company profile?",
        content:
          "It depends on your activity, but pre-qualification committees usually look for: a short company overview and history; CR, VAT number and classification if you have one; scope of work and services; completed projects with real photos; equipment and machinery; organisation chart and key staff; health, safety and quality policy; the certificates the company holds; and contact details. We never add a certificate or project you can't back up.",
      },
      {
        title: "We write the content with you",
        content:
          "Many companies have the information, but it is spread across files, photos and messages. We collect it with you, organise it and write short, clear text in Arabic and English. You review the text before design, so nothing goes into the profile that you haven't approved.",
      },
      {
        title: "Designed in your company identity",
        content:
          "We design the profile in your logo's colours and fonts, with pages that read quickly: clear headings, tables for data and large project photos. If you don't have a visual identity yet, we can design the logo and identity at the same time, together with letterhead and business cards.",
      },
      {
        title: "A file to send and a file to print",
        content:
          "We agree the formats you need in the scope: usually a light PDF to email and upload to supplier portals, and a print-quality file if you will print it. We can also add a download link for the profile on your website.",
      },
      {
        title: "Profile and website together",
        content:
          "A procurement officer often sees your website and then asks for the profile, or the other way round. When we design both with consistent identity and content, your company looks the same everywhere. You can order the profile alone or with a website.",
      },
      {
        title: "Updating your profile",
        content:
          "Projects and certificates change. We design the profile so it is easy to update with new projects or changed details, without redesigning from scratch.",
      },
    ],
    process: [
      { title: "Message and meeting", description: "Message us on WhatsApp; we meet in Al Khobar, Dammam or online.", icon: "MessageCircle" },
      { title: "Collect the content", description: "We gather documents, photos and projects and note what is missing.", icon: "FolderOpen" },
      { title: "Structure and text", description: "We lay out the pages and write the text in both languages for review.", icon: "FileText" },
      { title: "Design", description: "We design the profile in your identity and review it with you.", icon: "Palette" },
      { title: "Revisions", description: "We revise based on your feedback until final approval.", icon: "CheckCircle" },
      { title: "Delivery", description: "You receive the PDF and print file as agreed.", icon: "Download" },
    ],
    faqs: [
      { question: "How much does a company profile cost?", answer: "We don't publish fixed prices. The cost depends on the number of pages and languages, and whether we write the content or it is ready. You get a written quote after we review what you have." },
      { question: "How long does a company profile take?", answer: "It depends on the number of pages and how ready the content and photos are. We agree a written timeline once the content is collected." },
      { question: "Do you write the profile content?", answer: "Yes. We organise the information and write the Arabic and English text from your data, and you review it before design." },
      { question: "Will the profile be in Arabic and English?", answer: "Yes, both languages, in one file or two separate files as you prefer." },
      { question: "What do I need to prepare?", answer: "Your CR, the certificates you hold, a list of projects with photos, an equipment list and your logo. If some of it isn't ready, we help you put it together." },
      { question: "Isn't a template profile enough?", answer: "A template gives a look, but pre-qualification committees read the content: projects, equipment and certificates. That's why we build the profile from your real data." },
      { question: "Do you design logos and identity too?", answer: "Yes, we can design the logo, visual identity, letterhead and business cards together with the profile." },
      { question: "Do you work with companies outside Al Khobar and Dammam?", answer: "Yes, remotely anywhere in Saudi Arabia. In-person meetings are in Al Khobar and Dammam." },
    ],
    relatedServices: related,
  },

  bn: {
    longDescription:
      "আমরা কনট্রাক্টিং, নির্মাণ ও শিল্প সরবরাহ প্রতিষ্ঠানের জন্য আরবি/ইংরেজি কোম্পানি প্রোফাইল ডিজাইন করি, প্রি-কোয়ালিফিকেশন ও টেন্ডারের জন্য প্রস্তুত: ইমেইলের জন্য PDF ও প্রিন্টের ফাইল। আপনার আসল কাগজপত্র ও প্রকল্প থেকে কনটেন্ট সাজাই এবং আপনার সাথে লেখা তৈরি করি। আল খোবার, দাম্মাম ও পূর্বাঞ্চলে সেবা দিই। WhatsApp দিয়ে শুরু করুন।",
    overview:
      "কনট্রাক্টরের কোম্পানি প্রোফাইল বিজ্ঞাপনের পুস্তিকা নয়; এটি এমন একটি নথি যা ক্রয় কর্মকর্তা বা প্রি-কোয়ালিফিকেশন কমিটি পড়ে সিদ্ধান্ত নেয় আপনার প্রতিষ্ঠান যোগ্য কি না। তাই আমরা আপনার আসল তথ্য দিয়ে প্রোফাইল তৈরি করি: CR ও ক্লাসিফিকেশন, কাজের পরিধি, ছবিসহ সম্পন্ন প্রকল্প, যন্ত্রপাতি ও টিম, নিরাপত্তা নীতি এবং আপনার সত্যিকারের সার্টিফিকেট। সহজে পড়া যায় এমনভাবে সাজিয়ে আরবি ও ইংরেজিতে লিখি, তারপর আপনার পরিচয়ে ডিজাইন করি। বিনামূল্যের টেমপ্লেট সাধারণ চেহারা দেয়, কিন্তু আপনার প্রকল্প জানে না। আপনি পাবেন পাঠানোর জন্য হালকা PDF এবং প্রয়োজনে প্রিন্ট ফাইল। নির্দিষ্ট মূল্য প্রকাশ করি না; কনটেন্ট দেখে লিখিত কোটেশন দিই।",
    benefits: [
      "আরবি ও ইংরেজি প্রোফাইল",
      "আপনার আসল প্রকল্প ও কাগজপত্র থেকে তৈরি",
      "প্রি-কোয়ালিফিকেশন ও টেন্ডারের জন্য প্রস্তুত",
      "পাঠানোর PDF ও প্রিন্ট ফাইল",
      "আপনার পরিচয় ও ওয়েবসাইটের সাথে সামঞ্জস্যপূর্ণ",
    ],
    features: [
      "কনটেন্ট সাজানো ও লেখা",
      "দুই ভাষায় ডিজাইন",
      "PDF ও প্রিন্ট ফাইল",
      "পরে আপডেট",
      "প্রয়োজনে লেটারহেড ও বিজনেস কার্ড",
    ],
    facts: {
      title: "সংক্ষেপে তথ্য",
      rows: [
        { label: "সেবা", value: "লেখাসহ আরবি/ইংরেজি কোম্পানি প্রোফাইল ডিজাইন" },
        { label: "কাদের জন্য", value: "কনট্রাক্টিং, নির্মাণ, শিল্প সরবরাহ, পরিবহন ও সেবা প্রতিষ্ঠান" },
        { label: "যা পাবেন", value: "পাঠানো ও ডাউনলোডের PDF, এবং প্রিন্ট ফাইল (চুক্তি অনুযায়ী)" },
        { label: "কোথায়", value: "আল খোবার ও দাম্মামে মিটিং; সৌদি আরবের অন্যত্র রিমোট" },
        { label: "মূল্য", value: "কনটেন্ট দেখে লিখিত কোটেশন" },
        { label: "শুরু করতে", value: "WhatsApp বা কল: +966 55 884 5503" },
      ],
    },
    sections: [
      {
        title: "কনট্রাক্টরের প্রোফাইলে কী থাকে?",
        content:
          "কার্যক্রম অনুযায়ী ভিন্ন হয়, তবে প্রি-কোয়ালিফিকেশন কমিটি সাধারণত খোঁজে: প্রতিষ্ঠানের সংক্ষিপ্ত পরিচয় ও ইতিহাস; CR, ভ্যাট নম্বর ও ক্লাসিফিকেশন; কাজের পরিধি ও সেবা; আসল ছবিসহ সম্পন্ন প্রকল্প; যন্ত্রপাতি; সাংগঠনিক কাঠামো ও মূল কর্মী; স্বাস্থ্য, নিরাপত্তা ও মান নীতি; প্রতিষ্ঠানের সার্টিফিকেট; এবং যোগাযোগের তথ্য। প্রমাণ নেই এমন কোনো সার্টিফিকেট বা প্রকল্প আমরা যোগ করি না।",
      },
      {
        title: "আপনার সাথে কনটেন্ট লিখি",
        content:
          "অনেক প্রতিষ্ঠানের তথ্য থাকে, কিন্তু ফাইল, ছবি ও মেসেজে ছড়ানো। আমরা আপনার সাথে সংগ্রহ করে সাজাই এবং আরবি ও ইংরেজিতে সংক্ষিপ্ত, স্পষ্ট লেখা তৈরি করি। ডিজাইনের আগে আপনি লেখা রিভিউ করেন।",
      },
      {
        title: "আপনার প্রতিষ্ঠানের পরিচয়ে ডিজাইন",
        content:
          "লোগোর রং ও ফন্টে, দ্রুত পড়া যায় এমন পেজে ডিজাইন করি: স্পষ্ট শিরোনাম, তথ্যের টেবিল ও বড় প্রকল্প ছবি। ভিজ্যুয়াল আইডেন্টিটি না থাকলে লোগো, লেটারহেড ও বিজনেস কার্ড একসাথে ডিজাইন করা যায়।",
      },
      {
        title: "পাঠানোর ফাইল ও প্রিন্টের ফাইল",
        content:
          "কাজের পরিধিতে প্রয়োজনীয় ফরম্যাট ঠিক করি: সাধারণত ইমেইল ও সাপ্লায়ার পোর্টালে আপলোডের জন্য হালকা PDF, এবং প্রিন্ট করলে প্রিন্ট-মানের ফাইল।",
      },
      {
        title: "প্রোফাইল ও ওয়েবসাইট একসাথে",
        content:
          "একই পরিচয় ও কনটেন্টে প্রোফাইল ও ওয়েবসাইট ডিজাইন করলে আপনার প্রতিষ্ঠান সব জায়গায় একরকম দেখায়। শুধু প্রোফাইল বা ওয়েবসাইটসহ নিতে পারেন।",
      },
    ],
    process: [
      { title: "মেসেজ ও মিটিং", description: "WhatsApp করুন; আল খোবার, দাম্মাম বা অনলাইনে দেখা করি।", icon: "MessageCircle" },
      { title: "কনটেন্ট সংগ্রহ", description: "কাগজপত্র, ছবি ও প্রকল্প সংগ্রহ করি, কী নেই তা চিহ্নিত করি।", icon: "FolderOpen" },
      { title: "কাঠামো ও লেখা", description: "পেজ সাজাই ও দুই ভাষায় লেখা রিভিউয়ের জন্য দিই।", icon: "FileText" },
      { title: "ডিজাইন", description: "আপনার পরিচয়ে ডিজাইন করে রিভিউ করি।", icon: "Palette" },
      { title: "সংশোধন", description: "চূড়ান্ত অনুমোদন পর্যন্ত মতামত অনুযায়ী সংশোধন।", icon: "CheckCircle" },
      { title: "হস্তান্তর", description: "চুক্তি অনুযায়ী PDF ও প্রিন্ট ফাইল পাবেন।", icon: "Download" },
    ],
    faqs: [
      { question: "কোম্পানি প্রোফাইলের খরচ কত?", answer: "নির্দিষ্ট মূল্য প্রকাশ করি না। পেজ ও ভাষার সংখ্যা এবং কনটেন্ট আমরা লিখব কি না তার উপর নির্ভর করে। কনটেন্ট দেখে লিখিত কোটেশন দিই।" },
      { question: "কত সময় লাগে?", answer: "পেজের সংখ্যা ও কনটেন্ট-ছবি কতটা প্রস্তুত তার উপর নির্ভর করে। কনটেন্ট সংগ্রহের পরে লিখিত সময়সূচি দিই।" },
      { question: "আপনারা কি প্রোফাইলের লেখা লেখেন?", answer: "হ্যাঁ, আপনার তথ্য থেকে আরবি ও ইংরেজিতে লিখি, ডিজাইনের আগে আপনি রিভিউ করেন।" },
      { question: "কী প্রস্তুত করতে হবে?", answer: "CR, সার্টিফিকেট, ছবিসহ প্রকল্প তালিকা, যন্ত্রপাতির তালিকা ও লোগো। কিছু প্রস্তুত না থাকলে আমরা সাহায্য করি।" },
      { question: "টেমপ্লেট প্রোফাইল কি যথেষ্ট?", answer: "টেমপ্লেট চেহারা দেয়, কিন্তু কমিটি কনটেন্ট পড়ে: প্রকল্প, যন্ত্রপাতি ও সার্টিফিকেট। তাই আসল তথ্য দিয়ে তৈরি করি।" },
      { question: "লোগো ও আইডেন্টিটিও ডিজাইন করেন?", answer: "হ্যাঁ, প্রোফাইলের সাথে লোগো, ভিজ্যুয়াল আইডেন্টিটি, লেটারহেড ও বিজনেস কার্ড।" },
    ],
    relatedServices: related,
  },
};
