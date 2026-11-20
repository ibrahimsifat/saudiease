import { Locale, locales } from "@/config/i18n";
import { localeUrl, pageAlternates } from "@/config/site";
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
      : `https://saudiease.com${post.image}`
    : "https://saudiease.com/opengraph-image";

  return {
    title: `${post.title} | ${t("title")}`,
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
