import AboutHero from "@/components/about/about-hero";
import Achievements from "@/components/about/achievements";
import CoreValues from "@/components/about/core-values";
import CSRInitiatives from "@/components/about/csr-initiatives";
import JoinOurTeam from "@/components/about/join-our-team";
import MissionVision from "@/components/about/mission-vision";
import OfficeLocations from "@/components/about/office-locations";
import OurStory from "@/components/about/our-story";
import Partners from "@/components/about/partners";
import TeamSection from "@/components/about/team-section";
import Testimonials from "@/components/about/testimonials";
import Timeline from "@/components/about/timeline";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "aboutPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const footerT = await getTranslations({ locale, namespace: "preFooterCTA" });

  // Check if the locale is RTL
  const isRTL = locale === "ar";

  return (
    <main className={`min-h-screen ${isRTL ? "rtl" : ""}`}>
      <AboutHero
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        description={t("hero.description")}
        imageAlt={t("hero.imageAlt")}
        breadcrumbHome={
          locale === "en" ? "Home" : locale === "ar" ? "الرئيسية" : "হোম"
        }
        breadcrumbAbout={
          locale === "en"
            ? "About Us"
            : locale === "ar"
            ? "من نحن"
            : "আমাদের সম্পর্কে"
        }
        ourStoryLabel={t("ourStory.subtitle")}
        transformingText={
          locale === "en"
            ? "Transforming Saudi Businesses Through "
            : locale === "ar"
            ? "تحويل الأعمال السعودية من خلال "
            : "সৌদি ব্যবসাগুলিকে রূপান্তরিত করছি "
        }
        digitalInnovation={
          locale === "en"
            ? "Digital Innovation"
            : locale === "ar"
            ? "الابتكار الرقمي"
            : "ডিজিটাল উদ্ভাবন"
        }
        journeyText={
          locale === "en"
            ? "Since 2018, Saudi Ease has been at the forefront of digital transformation in the Kingdom, helping businesses of all sizes embrace technology and thrive in the digital age. Our journey is defined by innovation, excellence, and a deep commitment to our clients' success."
            : locale === "ar"
            ? "منذ عام 2018، كان سعودي إيز في طليعة التحول الرقمي في المملكة، مساعدًا الشركات من جميع الأحجام على تبني التكنولوجيا والازدهار في العصر الرقمي. تتميز رحلتنا بالابتكار والتميز والالتزام العميق بنجاح عملائنا."
            : "২০১৮ সাল থেকে, সৌদি ইজ রাজ্যে ডিজিটাল রূপান্তরের অগ্রভাগে রয়েছে, সব আকারের ব্যবসাকে প্রযুক্তি গ্রহণ করতে এবং ডিজিটাল যুগে সমৃদ্ধ হতে সাহায্য করছে। আমাদের যাত্রা উদ্ভাবন, উৎকর্ষ এবং আমাদের ক্লায়েন্টদের সাফল্যের প্রতি গভীর প্রতিশ্রুতি দ্বারা সংজ্ঞায়িত।"
        }
        stats={{
          years: {
            value: "5+",
            title:
              locale === "en"
                ? "Years of Excellence"
                : locale === "ar"
                ? "سنوات من التميز"
                : "উৎকর্ষের বছর",
            subtitle:
              locale === "en"
                ? "Serving Saudi businesses"
                : locale === "ar"
                ? "خدمة الشركات السعودية"
                : "সৌদি ব্যবসাগুলিকে সেবা প্রদান",
          },
          clients: {
            value: "250+",
            title:
              locale === "en"
                ? "Clients Served"
                : locale === "ar"
                ? "عملاء تمت خدمتهم"
                : "সেবা প্রদানকৃত ক্লায়েন্ট",
            subtitle:
              locale === "en"
                ? "Across Saudi Arabia"
                : locale === "ar"
                ? "في جميع أنحاء المملكة العربية السعودية"
                : "সৌদি আরব জুড়ে",
          },
          team: {
            value: "35+",
            title:
              locale === "en"
                ? "Team Members"
                : locale === "ar"
                ? "أعضاء الفريق"
                : "টিম সদস্য",
            subtitle:
              locale === "en"
                ? "Dedicated professionals"
                : locale === "ar"
                ? "محترفون متفانون"
                : "নিবেদিত পেশাদার",
          },
        }}
        visionTitle={
          locale === "en"
            ? "Our Vision"
            : locale === "ar"
            ? "رؤيتنا"
            : "আমাদের দৃষ্টি"
        }
        visionDescription={
          locale === "en"
            ? "To be the leading digital transformation partner for businesses across Saudi Arabia"
            : locale === "ar"
            ? "أن نكون الشريك الرائد في التحول الرقمي للشركات في جميع أنحاء المملكة العربية السعودية"
            : "সৌদি আরব জুড়ে ব্যবসাগুলির জন্য অগ্রণী ডিজিটাল রূপান্তর অংশীদার হওয়া"
        }
        isRTL={isRTL}
      />

      <OurStory
        title={t("ourStory.title")}
        subtitle={t("ourStory.subtitle")}
        description={t("ourStory.description")}
        foundedYear={t("ourStory.foundedYear")}
        foundedLocation={t("ourStory.foundedLocation")}
        founderName={t("ourStory.founderName")}
        founderTitle={t("ourStory.founderTitle")}
        founderQuote={t("ourStory.founderQuote")}
        imageAlt={t("ourStory.imageAlt")}
        isRTL={isRTL}
      />

      <MissionVision
        missionTitle={t("missionVision.missionTitle")}
        missionDescription={t("missionVision.missionDescription")}
        visionTitle={t("missionVision.visionTitle")}
        visionDescription={t("missionVision.visionDescription")}
        isRTL={isRTL}
      />

      <CoreValues
        title={t("coreValues.title")}
        subtitle={t("coreValues.subtitle")}
        description={t("coreValues.description")}
        values={[
          {
            title: t("coreValues.values.innovation.title"),
            description: t("coreValues.values.innovation.description"),
            icon: "Lightbulb",
          },
          {
            title: t("coreValues.values.integrity.title"),
            description: t("coreValues.values.integrity.description"),
            icon: "Shield",
          },
          {
            title: t("coreValues.values.excellence.title"),
            description: t("coreValues.values.excellence.description"),
            icon: "Award",
          },
          {
            title: t("coreValues.values.clientFocus.title"),
            description: t("coreValues.values.clientFocus.description"),
            icon: "Users",
          },
        ]}
        isRTL={isRTL}
      />

      <Timeline
        title={t("timeline.title")}
        subtitle={t("timeline.subtitle")}
        events={[
          {
            year: t("timeline.events.founding.year"),
            title: t("timeline.events.founding.title"),
            description: t("timeline.events.founding.description"),
          },
          {
            year: t("timeline.events.expansion.year"),
            title: t("timeline.events.expansion.title"),
            description: t("timeline.events.expansion.description"),
          },
          {
            year: t("timeline.events.award.year"),
            title: t("timeline.events.award.title"),
            description: t("timeline.events.award.description"),
          },
          {
            year: t("timeline.events.milestone.year"),
            title: t("timeline.events.milestone.title"),
            description: t("timeline.events.milestone.description"),
          },
        ]}
        isRTL={isRTL}
      />

      <TeamSection
        title={t("team.title")}
        subtitle={t("team.subtitle")}
        description={t("team.description")}
        sectionLabel={
          locale === "en"
            ? "Our People"
            : locale === "ar"
            ? "فريقنا"
            : "আমাদের লোকজন"
        }
        teamCompositionTitle={
          locale === "en"
            ? "Our Team Composition"
            : locale === "ar"
            ? "تكوين فريقنا"
            : "আমাদের টিম গঠন"
        }
        teamDiversityLabel={
          locale === "en"
            ? "Team Diversity"
            : locale === "ar"
            ? "تنوع الفريق"
            : "টিম বৈচিত্র্য"
        }
        teamDiversityDescription={
          locale === "en"
            ? "Our diverse team brings together talent from across Saudi Arabia and beyond, with a mix of experienced professionals and fresh graduates."
            : locale === "ar"
            ? "يجمع فريقنا المتنوع المواهب من جميع أنحاء المملكة العربية السعودية وخارجها، مع مزيج من المهنيين ذوي الخبرة والخريجين الجدد."
            : "আমাদের বৈচিত্র্যময় দল সৌদি আরব এবং তার বাইরে থেকে প্রতিভা একত্রিত করে, অভিজ্ঞ পেশাদার এবং নতুন স্নাতকদের মিশ্রণ সহ।"
        }
        diversityStats={{
          saudiNationals: {
            percentage: "65%",
            label:
              locale === "en"
                ? "Saudi Nationals"
                : locale === "ar"
                ? "المواطنون السعوديون"
                : "সৌদি নাগরিক",
          },
          womenWorkforce: {
            percentage: "40%",
            label:
              locale === "en"
                ? "Women in workforce"
                : locale === "ar"
                ? "النساء في القوى العاملة"
                : "কর্মক্ষেত্রে মহিলা",
          },
        }}
        teamMembers={[
          {
            name: t("team.members.ceo.name"),
            position: t("team.members.ceo.position"),
            bio: t("team.members.ceo.bio"),
            imageAlt: t("team.members.ceo.imageAlt"),
            image: "/placeholder.svg?height=400&width=400",
            linkedin: "#",
            twitter: "#",
            email: "ceo@saudiease.com",
          },
          {
            name: t("team.members.cto.name"),
            position: t("team.members.cto.position"),
            bio: t("team.members.cto.bio"),
            imageAlt: t("team.members.cto.imageAlt"),
            image: "/placeholder.svg?height=400&width=400",
            linkedin: "#",
            twitter: "#",
            email: "cto@saudiease.com",
          },
          {
            name: t("team.members.cmo.name"),
            position: t("team.members.cmo.position"),
            bio: t("team.members.cmo.bio"),
            imageAlt: t("team.members.cmo.imageAlt"),
            image: "/placeholder.svg?height=400&width=400",
            linkedin: "#",
            twitter: "#",
            email: "cmo@saudiease.com",
          },
          {
            name: t("team.members.cdo.name"),
            position: t("team.members.cdo.position"),
            bio: t("team.members.cdo.bio"),
            imageAlt: t("team.members.cdo.imageAlt"),
            image: "/placeholder.svg?height=400&width=400",
            linkedin: "#",
            twitter: "#",
            email: "cdo@saudiease.com",
          },
        ]}
        departments={[
          {
            name:
              locale === "en"
                ? "Development"
                : locale === "ar"
                ? "التطوير"
                : "ডেভেলপমেন্ট",
            count: 12,
            description:
              locale === "en"
                ? "Expert developers specializing in web, mobile, and custom applications."
                : locale === "ar"
                ? "مطورون خبراء متخصصون في تطبيقات الويب والجوال والتطبيقات المخصصة."
                : "ওয়েব, মোবাইল এবং কাস্টম অ্যাপ্লিকেশনে বিশেষজ্ঞ ডেভেলপার।",
          },
          {
            name:
              locale === "en"
                ? "Design"
                : locale === "ar"
                ? "التصميم"
                : "ডিজাইন",
            count: 8,
            description:
              locale === "en"
                ? "Creative professionals crafting beautiful, user-centered digital experiences."
                : locale === "ar"
                ? "محترفون مبدعون يصممون تجارب رقمية جميلة تركز على المستخدم."
                : "সৃজনশীল পেশাদাররা সুন্দর, ব্যবহারকারী-কেন্দ্রিক ডিজিটাল অভিজ্ঞতা তৈরি করে।",
          },
          {
            name:
              locale === "en"
                ? "Marketing"
                : locale === "ar"
                ? "التسويق"
                : "মার্কেটিং",
            count: 6,
            description:
              locale === "en"
                ? "Digital marketing specialists driving growth and engagement."
                : locale === "ar"
                ? "متخصصون في التسويق الرقمي يدفعون النمو والمشاركة."
                : "ডিজিটাল মার্কেটিং বিশেষজ্ঞরা বৃদ্ধি এবং এনগেজমেন্ট চালায়।",
          },
          {
            name:
              locale === "en"
                ? "Client Success"
                : locale === "ar"
                ? "نجاح العملاء"
                : "ক্লায়েন্ট সাফল্য",
            count: 5,
            description:
              locale === "en"
                ? "Dedicated team ensuring client satisfaction and project success."
                : locale === "ar"
                ? "فريق متخصص يضمن رضا العملاء ونجاح المشروع."
                : "নিবেদিত টিম ক্লায়েন্ট সন্তুষ্টি এবং প্রকল্প সাফল্য নিশ্চিত করে।",
          },
          {
            name:
              locale === "en"
                ? "Operations"
                : locale === "ar"
                ? "العمليات"
                : "অপারেশনস",
            count: 4,
            description:
              locale === "en"
                ? "Professionals managing our internal processes and operations."
                : locale === "ar"
                ? "محترفون يديرون عملياتنا وإجراءاتنا الداخلية."
                : "পেশাদাররা আমাদের অভ্যন্তরীণ প্রক্রিয়া এবং অপারেশন পরিচালনা করে।",
          },
        ]}
        isRTL={isRTL}
      />

      <Achievements
        title={t("achievements.title")}
        subtitle={t("achievements.subtitle")}
        achievements={[
          {
            title: t("achievements.items.clients.title"),
            value: t("achievements.items.clients.value"),
            description: t("achievements.items.clients.description"),
          },
          {
            title: t("achievements.items.projects.title"),
            value: t("achievements.items.projects.value"),
            description: t("achievements.items.projects.description"),
          },
          {
            title: t("achievements.items.awards.title"),
            value: t("achievements.items.awards.value"),
            description: t("achievements.items.awards.description"),
          },
          {
            title: t("achievements.items.satisfaction.title"),
            value: t("achievements.items.satisfaction.value"),
            description: t("achievements.items.satisfaction.description"),
          },
        ]}
        isRTL={isRTL}
      />

      <Testimonials
        title={t("testimonials.title")}
        subtitle={t("testimonials.subtitle")}
        testimonials={[
          {
            quote: t("testimonials.items.first.quote"),
            author: t("testimonials.items.first.author"),
            company: t("testimonials.items.first.company"),
            imageAlt: t("testimonials.items.first.imageAlt"),
          },
          {
            quote: t("testimonials.items.second.quote"),
            author: t("testimonials.items.second.author"),
            company: t("testimonials.items.second.company"),
            imageAlt: t("testimonials.items.second.imageAlt"),
          },
        ]}
        isRTL={isRTL}
      />

      <OfficeLocations
        title={t("officeLocations.title")}
        subtitle={t("officeLocations.subtitle")}
        locations={[
          {
            city: t("officeLocations.locations.riyadh.city"),
            address: t("officeLocations.locations.riyadh.address"),
            phone: t("officeLocations.locations.riyadh.phone"),
            email: t("officeLocations.locations.riyadh.email"),
          },
          {
            city: t("officeLocations.locations.jeddah.city"),
            address: t("officeLocations.locations.jeddah.address"),
            phone: t("officeLocations.locations.jeddah.phone"),
            email: t("officeLocations.locations.jeddah.email"),
          },
        ]}
        isRTL={isRTL}
      />

      <CSRInitiatives
        title={t("csrInitiatives.title")}
        subtitle={t("csrInitiatives.subtitle")}
        description={t("csrInitiatives.description")}
        initiatives={[
          {
            title: t("csrInitiatives.initiatives.education.title"),
            description: t("csrInitiatives.initiatives.education.description"),
          },
          {
            title: t("csrInitiatives.initiatives.environment.title"),
            description: t(
              "csrInitiatives.initiatives.environment.description"
            ),
          },
          {
            title: t("csrInitiatives.initiatives.community.title"),
            description: t("csrInitiatives.initiatives.community.description"),
          },
        ]}
        isRTL={isRTL}
      />

      <Partners
        title={t("partners.title")}
        subtitle={t("partners.subtitle")}
        description={t("partners.description")}
        isRTL={isRTL}
      />

      <JoinOurTeam
        title={t("joinOurTeam.title")}
        subtitle={t("joinOurTeam.subtitle")}
        description={t("joinOurTeam.description")}
        buttonText={t("joinOurTeam.buttonText")}
        isRTL={isRTL}
      />
    </main>
  );
}
