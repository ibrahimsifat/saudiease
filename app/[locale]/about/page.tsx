import AboutHero from "@/components/about/about-hero";
import { localeUrl, pageAlternates } from "@/config/site";
import MissionVision from "@/components/about/mission-vision";
import OurStory from "@/components/about/our-story";
import Timeline from "@/components/about/timeline";
import { CONSTANT } from "@/config/constants";
import { Locale } from "@/config/i18n";
import { keywords } from "@/data/keywords";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const t = await getTranslations({ locale, namespace: "aboutPage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: keywords[locale as keyof typeof keywords].join(", "),
    alternates: pageAlternates(locale, "/about"),
    openGraph: {
      url: localeUrl(locale, "/about"),
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: CONSTANT.images.logo.en,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });

  // Check if the locale is RTL
  const isRTL = locale === "ar";

  return (
    <div className={`min-h-screen ${isRTL ? "rtl" : ""}`}>
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
            ? "Since 2018, Saudi Ease has built websites, mobile apps, company profiles and brand identities for Saudi businesses, and set up ZATCA-compliant e-invoicing software for them, with a focus on contracting, construction and industrial companies."
            : locale === "ar"
            ? "منذ عام 2018 تصمّم سعودي إيز المواقع الإلكترونية وتطبيقات الجوال وبروفايلات الشركات والهويات البصرية للشركات السعودية، وتجهّز لها أنظمة الفوترة الإلكترونية المتوافقة مع زاتكا، مع تركيز على شركات المقاولات والإنشاءات والقطاع الصناعي."
            : "২০১৮ সাল থেকে সৌদি ইজ সৌদি ব্যবসার জন্য ওয়েবসাইট, মোবাইল অ্যাপ, কোম্পানি প্রোফাইল ও ব্র্যান্ড আইডেন্টিটি তৈরি করছে এবং ZATCA-সম্মত ই-ইনভয়েসিং সফটওয়্যার সেটআপ করছে, বিশেষ করে কনট্রাক্টিং, নির্মাণ ও শিল্প প্রতিষ্ঠানের জন্য।"
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
            ? "To be a dependable digital partner for contracting, construction and industrial businesses in Saudi Arabia"
            : locale === "ar"
            ? "أن نكون شريكاً رقمياً يُعتمد عليه لشركات المقاولات والإنشاءات والقطاع الصناعي في المملكة العربية السعودية"
            : "সৌদি আরবের কনট্রাক্টিং, নির্মাণ ও শিল্প প্রতিষ্ঠানের জন্য একটি নির্ভরযোগ্য ডিজিটাল পার্টনার হওয়া"
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
        ]}
        isRTL={isRTL}
      />

    </div>
  );
}
