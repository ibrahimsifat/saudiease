"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts } from "@/data/blog-posts";
import { useMobile } from "@/hooks/use-mobile";
import { ArrowRight, Calendar, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import OptimizedImage from "../../../components/optimized-image";

const translations = {
  en: {
    title: "Blog",
    subtitle: "Digital Transformation Insights",
    description:
      "Stay updated with the latest digital transformation trends, ZATCA e-invoicing updates, and digital marketing insights for Saudi businesses.",
    searchPlaceholder: "Search articles...",
    searchButton: "Search",
    categories: {
      all: "All Posts",
      digitalTransformation: "Digital Transformation",
      eInvoicing: "E-Invoicing",
      webDevelopment: "Web Development",
      digitalMarketing: "Digital Marketing",
      saudiTech: "Saudi Tech News",
    },
    readMore: "Read More",
    readingTime: "min read",
    filterBy: "Filter by:",
    clearFilters: "Clear Filters",
    latestPosts: "Latest Posts",
    featuredPosts: "Featured Posts",
    popularTopics: "Popular Topics",
    subscribeTitle: "Subscribe to our newsletter",
    subscribeDescription:
      "Get the latest articles and insights delivered straight to your inbox.",
    emailPlaceholder: "Your email address",
    subscribe: "Subscribe",
    noResults: "No results found. Try a different search term.",
    by: "By",
    published: "Published",
    relatedPosts: "Related Posts",
  },
  ar: {
    title: "المدونة",
    subtitle: "رؤى التحول الرقمي",
    description:
      "ابق على اطلاع بأحدث اتجاهات التحول الرقمي، وتحديثات الفوترة الإلكترونية من هيئة الزكاة والضريبة والجمارك، ورؤى التسويق الرقمي للشركات السعودية.",
    searchPlaceholder: "البحث في المقالات...",
    searchButton: "بحث",
    categories: {
      all: "جميع المنشورات",
      digitalTransformation: "التحول الرقمي",
      eInvoicing: "الفوترة الإلكترونية",
      webDevelopment: "تطوير الويب",
      digitalMarketing: "التسويق الرقمي",
      saudiTech: "أخبار التكنولوجيا السعودية",
    },
    readMore: "قراءة المزيد",
    readingTime: "دقيقة قراءة",
    filterBy: "تصفية حسب:",
    clearFilters: "مسح التصفية",
    latestPosts: "أحدث المنشورات",
    featuredPosts: "منشورات مميزة",
    popularTopics: "المواضيع الشائعة",
    subscribeTitle: "اشترك في نشرتنا الإخبارية",
    subscribeDescription:
      "احصل على أحدث المقالات والرؤى مباشرة في صندوق الوارد الخاص بك.",
    emailPlaceholder: "عنوان بريدك الإلكتروني",
    subscribe: "اشترك",
    noResults: "لم يتم العثور على نتائج. جرب مصطلح بحث مختلف.",
    by: "بواسطة",
    published: "نُشر في",
    relatedPosts: "منشورات ذات صلة",
  },
  bn: {
    title: "ব্লগ",
    subtitle: "ডিজিটাল ট্রান্সফরমেশন ইনসাইটস",
    description:
      "সৌদি ব্যবসাগুলির জন্য সর্বশেষ ডিজিটাল ট্রান্সফরমেশন ট্রেন্ড, ZATCA ই-ইনভয়েসিং আপডেট, এবং ডিজিটাল মার্কেটিং ইনসাইটস সম্পর্কে আপডেট থাকুন।",
    searchPlaceholder: "নিবন্ধ অনুসন্ধান করুন...",
    searchButton: "অনুসন্ধান",
    categories: {
      all: "সমস্ত পোস্ট",
      digitalTransformation: "ডিজিটাল ট্রান্সফরমেশন",
      eInvoicing: "ই-ইনভয়েসিং",
      webDevelopment: "ওয়েব ডেভেলপমেন্ট",
      digitalMarketing: "ডিজিটাল মার্কেটিং",
      saudiTech: "সৌদি টেক নিউজ",
    },
    readMore: "আরও পড়ুন",
    readingTime: "মিনিট পড়া",
    filterBy: "ফিল্টার করুন:",
    clearFilters: "ফিল্টার পরিষ্কার করুন",
    latestPosts: "সর্বশেষ পোস্ট",
    featuredPosts: "বৈশিষ্ট্যযুক্ত পোস্ট",
    popularTopics: "জনপ্রিয় বিষয়",
    subscribeTitle: "আমাদের নিউজলেটারে সাবস্ক্রাইব করুন",
    subscribeDescription:
      "সর্বশেষ নিবন্ধ এবং ইনসাইটস সরাসরি আপনার ইনবক্সে পান।",
    emailPlaceholder: "আপনার ইমেইল ঠিকানা",
    subscribe: "সাবস্ক্রাইব",
    noResults:
      "কোন ফলাফল পাওয়া যায়নি। একটি ভিন্ন অনুসন্ধান শব্দ চেষ্টা করুন।",
    by: "লেখক",
    published: "প্রকাশিত",
    relatedPosts: "সম্পর্কিত পোস্ট",
  },
};

export default function BlogPageClient({ locale = "en" }: { locale?: string }) {
  const t =
    translations[locale as keyof typeof translations] || translations.en;
  const isRTL = locale === "ar";
  const router = useRouter();
  const searchParams = useSearchParams();
  const isMobile = useMobile();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const query = searchParams.get("q") || "";

    setActiveCategory(category);
    setSearchQuery(query);

    if (query) {
      setFilteredPosts(
        searchBlogPosts(query, category !== "all" ? category : undefined)
      );
    } else if (category !== "all") {
      setFilteredPosts(blogPosts.filter((post) => post.category === category));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }

    router.push(`/blog?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (searchQuery) {
      params.set("q", searchQuery);
    }

    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    router.push("/blog");
  };

  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

  return (
    <div
      className={`min-h-screen bg-background ${isRTL ? "rtl:text-right" : ""}`}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">{t.subtitle}</p>
            <p className="mt-4 text-muted-foreground">{t.description}</p>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="mt-8 flex w-full max-w-md mx-auto items-center space-x-2 rtl:space-x-reverse"
            >
              <Input
                type="search"
                placeholder={t.searchPlaceholder}
                className={`flex-1 ${isRTL ? "text-right" : ""}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit">
                <Search className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0" />
                {t.searchButton}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Category Tabs */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{t.latestPosts}</h2>
                  {(searchQuery || activeCategory !== "all") && (
                    <Button
                      variant="ghost"
                      onClick={clearFilters}
                      className="h-8 px-2"
                    >
                      {t.clearFilters}
                    </Button>
                  )}
                </div>

                <div className="overflow-auto pb-2">
                  <Tabs
                    defaultValue={activeCategory}
                    onValueChange={handleCategoryChange}
                    className="w-full"
                  >
                    <TabsList className="w-full justify-start mb-4 overflow-auto">
                      <TabsTrigger value="all" className="min-w-max">
                        {t.categories.all}
                      </TabsTrigger>
                      <TabsTrigger
                        value="digitalTransformation"
                        className="min-w-max"
                      >
                        {t.categories.digitalTransformation}
                      </TabsTrigger>
                      <TabsTrigger value="eInvoicing" className="min-w-max">
                        {t.categories.eInvoicing}
                      </TabsTrigger>
                      <TabsTrigger value="webDevelopment" className="min-w-max">
                        {t.categories.webDevelopment}
                      </TabsTrigger>
                      <TabsTrigger
                        value="digitalMarketing"
                        className="min-w-max"
                      >
                        {t.categories.digitalMarketing}
                      </TabsTrigger>
                      <TabsTrigger value="saudiTech" className="min-w-max">
                        {t.categories.saudiTech}
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.slug}
                      className="overflow-hidden h-full flex flex-col"
                    >
                      <div className="relative h-48">
                        <OptimizedImage
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="capitalize">
                            {post.category}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {post.readingTime} {t.readingTime}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:underline"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-3 mt-2">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="border-t pt-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">
                              {t.by}{" "}
                            </span>
                            {post.author.name}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link
                            href={`/blog/${post.slug}`}
                            className={`flex items-center gap-1 ${
                              isRTL ? "flex-row-reverse" : ""
                            }`}
                          >
                            {t.readMore}
                            <ArrowRight
                              className={`h-4 w-4 ${isRTL ? "rotate-180" : ""}`}
                            />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">{t.noResults}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            {!isMobile && (
              <div className="w-full md:w-72 lg:w-80 space-y-8">
                {/* Featured Posts */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{t.featuredPosts}</h3>
                  <div className="space-y-4">
                    {featuredPosts.map((post) => (
                      <div key={post.slug} className="flex gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 text-sm">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:underline"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <div className="flex items-center mt-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1 rtl:ml-1 rtl:mr-0" />
                            <span>
                              {new Date(post.date).toLocaleDateString(
                                locale === "ar"
                                  ? "ar-SA"
                                  : locale === "bn"
                                  ? "bn-BD"
                                  : "en-US"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Topics */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">{t.popularTopics}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      className="cursor-pointer"
                      onClick={() =>
                        handleCategoryChange("digitalTransformation")
                      }
                    >
                      {t.categories.digitalTransformation}
                    </Badge>
                    <Badge
                      className="cursor-pointer"
                      onClick={() => handleCategoryChange("eInvoicing")}
                    >
                      {t.categories.eInvoicing}
                    </Badge>
                    <Badge
                      className="cursor-pointer"
                      onClick={() => handleCategoryChange("webDevelopment")}
                    >
                      {t.categories.webDevelopment}
                    </Badge>
                    <Badge
                      className="cursor-pointer"
                      onClick={() => handleCategoryChange("digitalMarketing")}
                    >
                      {t.categories.digitalMarketing}
                    </Badge>
                    <Badge
                      className="cursor-pointer"
                      onClick={() => handleCategoryChange("saudiTech")}
                    >
                      {t.categories.saudiTech}
                    </Badge>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-primary/10 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{t.subscribeTitle}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.subscribeDescription}
                  </p>
                  <form className="space-y-2">
                    <Input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className={isRTL ? "text-right" : ""}
                    />
                    <Button className="w-full">{t.subscribe}</Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
