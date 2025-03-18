import { Locale } from "@/config/i18n";
import { getBlogs } from "@/data/blog-posts/index";
import { generateBlogPostSchema } from "@/lib/schema";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BlogPostClient from "./blog-post-client";

type Props = {
  params: {
    slug: string;
    locale: string;
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

  return {
    title: `${post.title} | ${t("title")}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || "/placeholder.svg?height=1200&width=1200",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image || "/placeholder.svg?height=1200&width=1200"],
    },
  };
}

export async function generateStaticParams({
  params,
}: Props): Promise<Metadata> {
  const { locale } = params;
  const blogPosts = getBlogs(locale as Locale);
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = params;
  const blogPosts = getBlogs(locale as Locale);
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const schema = generateBlogPostSchema(post);

  return <BlogPostClient post={post} locale={locale} schema={schema} />;
}
