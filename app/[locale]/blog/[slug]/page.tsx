import { Locale, locales } from "@/config/i18n";
import { localeUrl, pageAlternates, withBrand } from "@/config/site";
import { getBlogs } from "@/data/blog-posts/index";
import { keywords } from "@/data/keywords";
import { generateBlogPostSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BlogPostClient from "./blog-post-client";
type Props = {
  params: {
    slug: string;
    locale: Locale;
  };
};

// Short SEO titles for the posts that feed money pages (≤ 60 chars).
const BLOG_SEO_TITLES: Record<string, Record<string, string>> = {
  "zatca-phase-2-e-invoicing-saudi-businesses": {
    ar: "الفاتورة الإلكترونية المرحلة الثانية: ما يلزم شركتك",
    en: "ZATCA Phase 2 E-Invoicing Guide | Saudi Ease",
    bn: "ZATCA ফেজ ২ ই-ইনভয়েসিং গাইড | সৌদি ইজ",
  },
  "crafting-compelling-corporate-profile-b2b-clients": {
    ar: "كيف تكتب بروفايل شركة يقنع العملاء | سعودي إيز",
    en: "How to Write a Company Profile for B2B Clients",
    bn: "B2B ক্লায়েন্টের জন্য কোম্পানি প্রোফাইল | সৌদি ইজ",
  },
  "web-development-vs-custom-cms-right-for-business": {
    ar: "موقع مبرمج أم نظام إدارة محتوى؟ | سعودي إيز",
    en: "Custom Website vs CMS: Which Fits Your Business?",
    bn: "কাস্টম ওয়েবসাইট নাকি CMS? | সৌদি ইজ",
  },
};

function blogSeoTitle(slug: string, title: string, locale: string): string {
  const custom = BLOG_SEO_TITLES[slug]?.[locale];
  if (custom) return custom;
  const branded = withBrand(title, locale);
  if ([...branded].length <= 60) return branded;
  // "Main topic: subtitle" -> "Main topic | Brand" when the main part is meaningful
  const head = title.split(/[:：]/)[0].trim();
  if (head !== title && [...head].length >= 20) return withBrand(head, locale);
  return title;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const blogPosts = getBlogs(locale as Locale);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const postImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://www.saudiease.com${post.image}`
    : "https://www.saudiease.com/opengraph-image";

  return {
    title: blogSeoTitle(slug, post.title, locale),
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords
      ? post.metaKeywords.join(", ")
      : keywords[locale as keyof typeof keywords].join(", "),
    alternates: pageAlternates(
      locale,
      `/blog/${slug}`,
      locales.filter((l) => getBlogs(l).some((p) => p.slug === slug))
    ),
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: localeUrl(locale, `/blog/${slug}`),
      siteName: "SaudiEase",
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [postImage],
      creator: "@saudiease0",
    },
  };
}

export async function generateStaticParams({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const blogPosts = getBlogs(locale as Locale);
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const blogPosts = getBlogs(locale as Locale);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const schema = generateBlogPostSchema(post);

  return <BlogPostClient post={post} locale={locale} schema={schema} />;
}
