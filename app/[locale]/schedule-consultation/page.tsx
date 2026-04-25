import { Locale } from "@/config/i18n";
import { generatePageMetadata } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ConsultationScheduler from "./consultation-scheduler";

type Props = {
  params: { locale: Locale };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const titleMap: Record<string, string> = {
    en: "Schedule a Consultation | Saudi Ease",
    ar: "حجز استشارة | سعودي إيز",
    bn: "পরামর্শ সময়সূচী | সৌদি ইজ",
  };
  const descMap: Record<string, string> = {
    en: "Book a personalized consultation with our digital transformation experts to discuss your business needs and explore tailored solutions.",
    ar: "احجز استشارة مخصصة مع خبراء التحول الرقمي لدينا لمناقشة احتياجات عملك واستكشاف الحلول المصممة خصيصاً.",
    bn: "আপনার ব্যবসার প্রয়োজনীয়তা আলোচনা করতে এবং কাস্টমাইজড সমাধান অন্বেষণ করতে আমাদের ডিজিটাল ট্রান্সফরমেশন বিশেষজ্ঞদের সাথে একটি ব্যক্তিগত পরামর্শ বুক করুন।",
  };

  return generatePageMetadata({
    title: titleMap[locale] || titleMap.en,
    description: descMap[locale] || descMap.en,
    path: `/${locale}/schedule-consultation`,
    locale,
  });
}

export default async function ScheduleConsultationPage({ params }: Props) {
  return <ConsultationScheduler />;
}
