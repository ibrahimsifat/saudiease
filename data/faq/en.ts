export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const enFAQCategories = [
  "Web Development",
  "E-Invoicing",
  "Digital Marketing",
  "Graphic Design",
  "Mobile Apps",
  "Support",
  "Pricing",
  "Process",
  "Technology",
  "Security",
  "Vision 2030",
  "General",
];

export const enFAQs: FAQ[] = [
  // Web Development
  {
    id: "web-development-types",
    question: "What types of websites do you develop?",
    answer:
      "We develop all types of websites including corporate websites, e-commerce platforms, landing pages, blogs, and custom web applications. Our team specializes in creating responsive, user-friendly, and SEO-optimized websites tailored to the Saudi market.",
    category: "Web Development",
  },
  {
    id: "web-development-technologies",
    question: "What technologies do you use for web development?",
    answer:
      "We use modern technologies like React, Next.js, Vue.js, and Laravel for frontend and backend development. We choose the most appropriate technology stack based on your specific requirements, ensuring optimal performance, scalability, and security.",
    category: "Web Development",
  },
  {
    id: "web-development-responsive",
    question: "Are your websites mobile-responsive?",
    answer:
      "Yes, all our websites are fully responsive and optimized for all devices including smartphones, tablets, and desktops. We follow a mobile-first approach to ensure excellent user experience across all screen sizes.",
    category: "Web Development",
  },
  {
    id: "web-development-cms",
    question: "Do you provide content management systems (CMS)?",
    answer:
      "Yes, we offer custom CMS solutions as well as popular platforms like WordPress, Drupal, and Shopify. We can also develop a tailored CMS that perfectly matches your content management needs and is easy for your team to use.",
    category: "Web Development",
  },
  {
    id: "web-development-ecommerce",
    question: "Can you develop e-commerce websites with payment integration?",
    answer:
      "Absolutely. We develop comprehensive e-commerce solutions with integration to popular payment gateways in Saudi Arabia including STC Pay, mada, Apple Pay, and international options like PayPal and Stripe. We ensure secure transactions and compliance with local regulations.",
    category: "Web Development",
  },

  // E-Invoicing
  {
    id: "e-invoicing-zatca",
    question: "Is your e-invoicing solution ZATCA compliant?",
    answer:
      "Yes, our e-invoicing solution is fully compliant with the Zakat, Tax and Customs Authority (ZATCA) regulations in Saudi Arabia. We ensure that all electronic invoices meet the required standards including QR codes and real-time reporting capabilities.",
    category: "E-Invoicing",
  },
  {
    id: "e-invoicing-integration",
    question:
      "Can your e-invoicing solution integrate with our existing ERP system?",
    answer:
      "Yes, our e-invoicing solution is designed to seamlessly integrate with popular ERP systems like SAP, Oracle, Microsoft Dynamics, and others. We also offer custom integration solutions for proprietary systems to ensure smooth data flow.",
    category: "E-Invoicing",
  },
  {
    id: "e-invoicing-implementation",
    question: "How long does it take to implement your e-invoicing solution?",
    answer:
      "The implementation timeline typically ranges from 2-6 weeks depending on the complexity of your business processes and systems. We follow a structured approach including requirements analysis, configuration, integration, testing, and training to ensure a smooth transition.",
    category: "E-Invoicing",
  },
  {
    id: "e-invoicing-support",
    question:
      "Do you provide support after implementing the e-invoicing solution?",
    answer:
      "Yes, we offer comprehensive post-implementation support including technical assistance, updates to comply with changing regulations, and ongoing maintenance. We also provide training for your staff to ensure they can effectively use the system.",
    category: "E-Invoicing",
  },
  {
    id: "e-invoicing-security",
    question: "How secure is your e-invoicing solution?",
    answer:
      "Our e-invoicing solution implements robust security measures including encryption, secure authentication, access controls, and audit trails. We comply with international security standards and local Saudi regulations to protect your sensitive financial data.",
    category: "E-Invoicing",
  },

  // Digital Marketing
  {
    id: "digital-marketing-services",
    question: "What digital marketing services do you offer?",
    answer:
      "We offer comprehensive digital marketing services including SEO, SEM, social media marketing, content marketing, email marketing, influencer marketing, and analytics. Our strategies are tailored to the Saudi market and designed to maximize your ROI.",
    category: "Digital Marketing",
  },
  {
    id: "seo",
    question: "Do you provide SEO services for websites?",
    answer:
      "Yes, we offer comprehensive SEO services to help your website rank higher in search engines. Our SEO services include keyword research, on-page optimization, technical SEO, content creation, and local SEO strategies specifically tailored for the Saudi market.",
    category: "Digital Marketing",
  },
  {
    id: "digital-marketing-social",
    question: "Which social media platforms do you focus on for marketing?",
    answer:
      "We focus on platforms that are most popular in Saudi Arabia including Twitter, Instagram, Snapchat, Facebook, LinkedIn, and TikTok. We develop platform-specific strategies based on your target audience and business objectives.",
    category: "Digital Marketing",
  },
  {
    id: "digital-marketing-reporting",
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We use advanced analytics tools to track key performance indicators (KPIs) such as traffic, engagement, conversions, and ROI. We provide regular reports with actionable insights and continuously optimize campaigns based on data-driven analysis.",
    category: "Digital Marketing",
  },
  {
    id: "digital-marketing-local",
    question: "Do you understand the local Saudi market for digital marketing?",
    answer:
      "Yes, our team has extensive experience in the Saudi market. We understand local consumer behavior, cultural nuances, and regulatory requirements. We create campaigns that resonate with the local audience while adhering to cultural sensitivities and regulations.",
    category: "Digital Marketing",
  },

  // Graphic Design
  {
    id: "graphic-design-services",
    question: "What graphic design services do you offer?",
    answer:
      "We offer a wide range of graphic design services including logo design, brand identity, marketing materials, packaging design, social media graphics, infographics, and UI/UX design. Our designs are culturally appropriate and aligned with your brand vision.",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-branding",
    question: "Can you help with complete brand identity development?",
    answer:
      "Yes, we provide comprehensive brand identity development including logo design, color palette, typography, brand guidelines, and application across various touchpoints. We ensure your brand identity is consistent, memorable, and effectively communicates your values.",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-process",
    question: "What is your design process?",
    answer:
      "Our design process includes discovery (understanding your requirements), research (market and competitor analysis), conceptualization, design development, revisions based on feedback, and final delivery. We maintain open communication throughout to ensure your vision is realized.",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-formats",
    question: "In what formats do you deliver design files?",
    answer:
      "We deliver design files in industry-standard formats including AI, PSD, PDF, EPS, and JPG/PNG for web use. We also provide source files that you can use for future modifications or printing purposes.",
    category: "Graphic Design",
  },
  {
    id: "graphic-design-revisions",
    question: "How many revisions do you offer for design projects?",
    answer:
      "Our standard packages include 2-3 rounds of revisions to ensure your complete satisfaction. Additional revision rounds can be arranged if needed. We value your feedback and work collaboratively to achieve the desired outcome.",
    category: "Graphic Design",
  },

  // Mobile Apps
  {
    id: "mobile-apps-platforms",
    question: "Do you develop for both iOS and Android platforms?",
    answer:
      "Yes, we develop mobile applications for both iOS and Android platforms. We use cross-platform technologies like React Native and Flutter to create cost-effective solutions, or native development when specific platform features are required.",
    category: "Mobile Apps",
  },
  {
    id: "mobile-apps-features",
    question: "What features can you implement in mobile apps?",
    answer:
      "We can implement a wide range of features including user authentication, push notifications, payment gateways, location services, offline functionality, social media integration, analytics, and custom APIs. We tailor the features based on your specific requirements.",
    category: "Mobile Apps",
  },
  {
    id: "mobile-apps-timeline",
    question: "How long does it take to develop a mobile app?",
    answer:
      "The development timeline depends on the complexity and features of the app. Simple apps may take 2-3 months, while complex applications with extensive features can take 4-6 months or more. We provide a detailed timeline during the project planning phase.",
    category: "Mobile Apps",
  },
  {
    id: "mobile-apps-maintenance",
    question: "Do you provide app maintenance and updates?",
    answer:
      "Yes, we offer ongoing maintenance and update services to ensure your app remains compatible with the latest OS versions, fix bugs, and implement new features. We also monitor app performance and user feedback to make continuous improvements.",
    category: "Mobile Apps",
  },
  {
    id: "mobile-apps-store",
    question: "Do you help with app store submission and optimization?",
    answer:
      "Yes, we handle the entire process of submitting your app to the Apple App Store and Google Play Store. We also optimize app store listings with appropriate keywords, compelling descriptions, and visuals to improve discoverability and downloads.",
    category: "Mobile Apps",
  },

  // Support
  {
    id: "maintenance",
    question: "Do you offer website maintenance services?",
    answer:
      "Yes, we provide ongoing website maintenance services to ensure your website remains secure, up-to-date, and performs optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, and technical support.",
    category: "Support",
  },
  {
    id: "support-response-time",
    question: "What is your typical response time for support requests?",
    answer:
      "Our standard response time is within 4-8 business hours for regular issues and within 2 hours for critical issues. We offer different SLA options based on your business needs, including 24/7 support for mission-critical applications.",
    category: "Support",
  },
  {
    id: "support-channels",
    question: "Through which channels can we reach your support team?",
    answer:
      "You can reach our support team through multiple channels including email, phone, WhatsApp, and our dedicated client portal. We also offer scheduled video calls for more complex issues that require detailed discussion.",
    category: "Support",
  },
  {
    id: "support-training",
    question: "Do you provide training for using the systems you develop?",
    answer:
      "Yes, we provide comprehensive training for all solutions we develop. This includes user manuals, video tutorials, and live training sessions. We ensure your team is comfortable and proficient with the new system before project completion.",
    category: "Support",
  },
  {
    id: "support-sla",
    question: "Do you offer Service Level Agreements (SLAs)?",
    answer:
      "Yes, we offer customized Service Level Agreements that define response times, resolution times, system availability, and other performance metrics. Our SLAs are designed to align with your business requirements and ensure reliable service delivery.",
    category: "Support",
  },

  // Pricing
  {
    id: "pricing",
    question: "How do you determine the cost of a project?",
    answer:
      "Our pricing is based on several factors including project scope, complexity, timeline, and specific requirements. We provide detailed quotes after an initial consultation where we understand your business needs and objectives. We offer competitive pricing with flexible payment options.",
    category: "Pricing",
  },
  {
    id: "pricing-payment",
    question: "What are your payment terms?",
    answer:
      "We typically work with a milestone-based payment structure: 30-40% upfront, followed by payments at key project milestones, and the final payment upon project completion. For ongoing services, we offer monthly or quarterly subscription models.",
    category: "Pricing",
  },
  {
    id: "pricing-packages",
    question: "Do you offer standard packages or only custom quotes?",
    answer:
      "We offer both standard packages for common services and custom quotes for more complex projects. Our standard packages provide cost-effective solutions for typical requirements, while custom quotes allow for tailored solutions that precisely match your needs.",
    category: "Pricing",
  },
  {
    id: "pricing-additional",
    question: "Are there any additional costs beyond the quoted price?",
    answer:
      "Our quotes are comprehensive and include all aspects of the project as defined in the scope. Any additional requirements or changes to the scope may incur extra costs, but these are always discussed and approved before implementation.",
    category: "Pricing",
  },
  {
    id: "pricing-roi",
    question: "How do you ensure we get a good return on investment?",
    answer:
      "We focus on creating solutions that deliver tangible business value. We establish clear KPIs at the beginning of the project, implement analytics to track performance, and provide recommendations for continuous improvement to maximize your ROI.",
    category: "Pricing",
  },

  // Process
  {
    id: "timeline",
    question: "How long does it typically take to complete a website?",
    answer:
      "The timeline for website development varies depending on the complexity and scope of the project. A simple website might take 2-4 weeks, while more complex e-commerce platforms or custom web applications can take 2-3 months. We provide a detailed timeline during our project planning phase.",
    category: "Process",
  },
  {
    id: "process-methodology",
    question: "What project methodology do you follow?",
    answer:
      "We follow an agile methodology that allows for flexibility, collaboration, and iterative development. This approach enables us to adapt to changing requirements, deliver value incrementally, and maintain transparent communication throughout the project lifecycle.",
    category: "Process",
  },
  {
    id: "process-requirements",
    question: "How do you gather and document project requirements?",
    answer:
      "We use a structured approach to gather requirements through discovery workshops, stakeholder interviews, and documentation review. We create detailed requirement specifications that serve as a blueprint for the project and ensure alignment with your business objectives.",
    category: "Process",
  },
  {
    id: "process-communication",
    question: "How do you handle project communication?",
    answer:
      "We maintain regular communication through scheduled meetings, progress reports, and a dedicated project management tool where you can track progress in real-time. We assign a project manager who serves as your primary point of contact throughout the project.",
    category: "Process",
  },
  {
    id: "process-changes",
    question: "How do you handle change requests during a project?",
    answer:
      "We have a formal change request process where changes are documented, analyzed for impact on timeline and budget, and approved before implementation. This ensures that changes are managed effectively while maintaining project integrity.",
    category: "Process",
  },

  // Technology
  {
    id: "technology-stack",
    question: "What technology stack do you recommend for web applications?",
    answer:
      "Our recommended stack depends on your specific requirements, but we often use React/Next.js for frontend, Node.js or Laravel for backend, and MySQL or MongoDB for databases. We select technologies that offer performance, scalability, and long-term support.",
    category: "Technology",
  },
  {
    id: "technology-hosting",
    question: "What hosting solutions do you recommend?",
    answer:
      "We recommend cloud hosting solutions like AWS, Google Cloud, or Microsoft Azure for their reliability, scalability, and security. For simpler websites, we may recommend managed hosting providers. We help set up and configure the hosting environment based on your needs.",
    category: "Technology",
  },
  {
    id: "technology-performance",
    question: "How do you ensure website performance and speed?",
    answer:
      "We implement various optimization techniques including code minification, image optimization, lazy loading, caching, CDN integration, and database query optimization. We also conduct performance testing to identify and address bottlenecks.",
    category: "Technology",
  },
  {
    id: "technology-compatibility",
    question: "Which browsers and devices do you test on?",
    answer:
      "We test on all major browsers including Chrome, Firefox, Safari, and Edge, as well as on various devices including desktops, tablets, and smartphones. We ensure cross-browser and cross-device compatibility for a consistent user experience.",
    category: "Technology",
  },
  {
    id: "technology-trends",
    question: "How do you stay updated with the latest technology trends?",
    answer:
      "Our team continuously learns through professional development programs, industry conferences, online courses, and community participation. We regularly evaluate new technologies and incorporate them into our solutions when they provide tangible benefits.",
    category: "Technology",
  },

  // Security
  {
    id: "security-measures",
    question: "What security measures do you implement in your solutions?",
    answer:
      "We implement comprehensive security measures including secure coding practices, data encryption, secure authentication, regular security updates, vulnerability scanning, and protection against common threats like SQL injection, XSS, and CSRF attacks.",
    category: "Security",
  },
  {
    id: "security-compliance",
    question: "Do your solutions comply with data protection regulations?",
    answer:
      "Yes, our solutions comply with relevant data protection regulations including GDPR and local Saudi data protection laws. We implement appropriate technical and organizational measures to ensure data privacy and security.",
    category: "Security",
  },
  {
    id: "security-testing",
    question: "Do you conduct security testing?",
    answer:
      "Yes, we conduct thorough security testing including vulnerability assessments, penetration testing, and code reviews. We identify and address security issues before deployment and provide recommendations for ongoing security maintenance.",
    category: "Security",
  },
  {
    id: "security-backup",
    question: "What backup and disaster recovery solutions do you offer?",
    answer:
      "We implement automated backup solutions with regular schedules and retention policies. Our disaster recovery plans include redundant systems, data replication, and documented recovery procedures to minimize downtime and data loss in case of incidents.",
    category: "Security",
  },
  {
    id: "security-monitoring",
    question: "Do you provide security monitoring services?",
    answer:
      "Yes, we offer security monitoring services that include real-time threat detection, log analysis, intrusion detection, and incident response. We provide alerts for suspicious activities and take proactive measures to prevent security breaches.",
    category: "Security",
  },

  // Vision 2030
  {
    id: "vision-2030-alignment",
    question: "How do your services align with Saudi Vision 2030?",
    answer:
      "Our services directly support Vision 2030's digital transformation goals by helping businesses adopt modern technologies, enhance digital capabilities, and improve operational efficiency. We contribute to the development of a digital economy and knowledge-based society.",
    category: "Vision 2030",
  },
  {
    id: "vision-2030-initiatives",
    question: "Are you involved in any Vision 2030 initiatives?",
    answer:
      "Yes, we actively participate in Vision 2030 initiatives related to digital transformation, entrepreneurship, and SME development. We collaborate with government entities and industry partners to contribute to the realization of Vision 2030 objectives.",
    category: "Vision 2030",
  },
  {
    id: "vision-2030-localization",
    question:
      "How do you support the localization of technology in Saudi Arabia?",
    answer:
      "We support technology localization by developing solutions tailored to the Saudi market, training local talent, transferring knowledge, and collaborating with local partners. We are committed to building local capacity and contributing to the growth of the Saudi tech ecosystem.",
    category: "Vision 2030",
  },
  {
    id: "vision-2030-digital",
    question:
      "How can businesses benefit from digital transformation in line with Vision 2030?",
    answer:
      "Businesses can benefit through improved operational efficiency, enhanced customer experiences, new revenue streams, data-driven decision making, and competitive advantage. Digital transformation enables businesses to participate in the growing digital economy and expand their market reach.",
    category: "Vision 2030",
  },
  {
    id: "vision-2030-future",
    question:
      "What future technological trends do you foresee in Saudi Arabia?",
    answer:
      "We foresee significant growth in AI, IoT, blockchain, cloud computing, and smart city technologies in Saudi Arabia. These technologies will drive innovation across sectors including healthcare, education, finance, and government services, creating new opportunities for businesses.",
    category: "Vision 2030",
  },

  // General
  {
    id: "general-experience",
    question: "How long has Saudi Ease been in business?",
    answer:
      "Saudi Ease has been providing digital solutions in Saudi Arabia since 2015. Over the years, we have successfully delivered hundreds of projects across various industries and built a reputation for quality, reliability, and innovation.",
    category: "General",
  },
  {
    id: "general-team",
    question: "Who will be working on my project?",
    answer:
      "Your project will be handled by a dedicated team including a project manager, designers, developers, and quality assurance specialists. The team composition depends on your project requirements, and all team members are experienced professionals in their respective fields.",
    category: "General",
  },
  {
    id: "general-industries",
    question: "Which industries do you specialize in?",
    answer:
      "We have experience across various industries including retail, healthcare, finance, education, real estate, hospitality, and government. Our diverse industry knowledge allows us to understand specific business challenges and deliver tailored solutions.",
    category: "General",
  },
  {
    id: "general-portfolio",
    question: "Can I see examples of your previous work?",
    answer:
      "Yes, you can view our portfolio on our website showcasing our previous projects across different industries and services. We can also provide specific examples relevant to your industry or project requirements upon request.",
    category: "General",
  },
  {
    id: "general-start",
    question: "How do we get started working together?",
    answer:
      "The process starts with an initial consultation where we discuss your requirements and objectives. We then provide a proposal including scope, timeline, and pricing. Once approved, we begin the project with a kickoff meeting to align expectations and plan the execution.",
    category: "General",
  },
];
