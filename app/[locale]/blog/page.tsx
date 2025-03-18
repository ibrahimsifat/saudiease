import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";

export async function generateMetadata({
  params,
}: {
  params: { locale?: string };
}): Promise<Metadata> {
  // First, await the params object
  const resolvedParams = await params;
  const locale = resolvedParams.locale || "en";

  const metadata: Record<string, Metadata> = {
    en: {
      title: "Blog | Saudi Ease Digital Solutions",
      description:
        "Stay updated with the latest digital transformation trends, ZATCA e-invoicing updates, and digital marketing insights for Saudi businesses.",
      keywords:
        "Saudi digital blog, ZATCA e-invoicing updates, Saudi digital marketing trends, web development insights, Saudi Arabia business technology",
      openGraph: {
        title: "Blog | Saudi Ease Digital Solutions",
        description:
          "Digital transformation insights and trends for Saudi businesses.",
        url: "https://saudiease.com/blog",
        siteName: "Saudi Ease",
        locale: "en_US",
        type: "website",
      },
    },
    ar: {
      title: "المدونة | سعودي إيز للحلول الرقمية",
      description:
        "ابق على اطلاع بأحدث اتجاهات التحول الرقمي، وتحديثات الفوترة الإلكترونية من هيئة الزكاة والضريبة والجمارك، ورؤى التسويق الرقمي للشركات السعودية.",
      keywords:
        "مدونة رقمية سعودية، تحديثات الفوترة الإلكترونية من هيئة الزكاة والضريبة والجمارك، اتجاهات التسويق الرقمي السعودي، رؤى تطوير الويب، تكنولوجيا الأعمال في المملكة العربية السعودية",
      openGraph: {
        title: "المدونة | سعودي إيز للحلول الرقمية",
        description: "رؤى واتجاهات التحول الرقمي للشركات السعودية.",
        url: "https://saudiease.com/ar/blog",
        siteName: "سعودي إيز",
        locale: "ar_SA",
        type: "website",
      },
    },
    bn: {
      title: "ব্লগ | সৌদি ইজ ডিজিটাল সলিউশনস",
      description:
        "সৌদি ব্যবসাগুলির জন্য সর্বশেষ ডিজিটাল ট্রান্সফরমেশন ট্রেন্ড, ZATCA ই-ইনভয়েসিং আপডেট, এবং ডিজিটাল মার্কেটিং ইনসাইটস সম্পর্কে আপডেট থাকুন।",
      keywords:
        "সৌদি ডিজিটাল ব্লগ, ZATCA ই-ইনভয়েসিং আপডেট, সৌদি ডিজিটাল মার্কেটিং ট্রেন্ড, ওয়েব ডেভেলপমেন্ট ইনসাইটস, সৌদি আরব ব্যবসা প্রযুক্তি",
      openGraph: {
        title: "ব্লগ | সৌদি ইজ ডিজিটাল সলিউশনস",
        description:
          "সৌদি ব্যবসাগুলির জন্য ডিজিটাল ট্রান্সফরমেশন ইনসাইটস এবং ট্রেন্ড।",
        url: "https://saudiease.com/bn/blog",
        siteName: "সৌদি ইজ",
        locale: "bn_BD",
        type: "website",
      },
    },
  };

  return metadata[locale] || metadata.en;
}

export default async function BlogPage({
  params,
}: {
  params: { locale?: string };
}) {
  const { locale } = await params;
  return <BlogPageClient locale={locale} />;
}
