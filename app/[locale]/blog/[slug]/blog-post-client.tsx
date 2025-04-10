"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getBlogs } from "@/data/blog-posts";
import { toast } from "@/hooks/use-toast";
import { Link } from "@/i18n/routing";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  Calendar,
  Check,
  ChevronUp,
  Clock,
  Copy,
  Eye,
  Facebook,
  Heart,
  Linkedin,
  MessageCircle,
  Share2,
  Tag,
  ThumbsUp,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function BlogPostClient({ post, locale, schema }) {
  const router = useRouter();
  const t = useTranslations("blog");
  const isRTL = locale === "ar";

  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comment, setComment] = useState("");
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to reading progress
  const transformedProgress = useTransform(scrollYProgress, [0, 0.9], [0, 100]);

  useEffect(() => {
    // Update reading progress based on scroll
    const unsubscribe = transformedProgress.onChange((latest) => {
      setReadingProgress(Math.round(latest));
    });

    return () => unsubscribe();
  }, [transformedProgress]);

  useEffect(() => {
    // Find related posts (same category or shared tags)
    if (post) {
      const related = blogPosts
        .filter((p) => p.id !== post.id)
        .filter(
          (p) =>
            p.category === post.category ||
            p.tags.some((tag) => post.tags.includes(tag))
        )
        .slice(0, 3);
      setRelatedPosts(related);

      // Extract headings from content
      if (post.content) {
        const extractedHeadings =
          post.content.match(/## ([^\n]*)/g)?.map((heading) => ({
            id: heading.replace("## ", "").toLowerCase().replace(/\s+/g, "-"),
            text: heading.replace("## ", ""),
          })) || [];
        setHeadings(extractedHeadings);
      }
    }

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post]);

  // Track active heading based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0 || !contentRef.current) return;

      const headingElements = headings
        .map((heading) => document.getElementById(heading.id))
        .filter(Boolean);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveHeading(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  // Find previous and next posts
  const blogPosts = getBlogs(locale);
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: t("linkCopied"),
      description: t("linkCopiedDescription"),
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      toast({
        title: t("articleLiked"),
        description: t("thankYouFeedback"),
      });
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      toast({
        title: t("articleBookmarked"),
        description: t("savedToReadingList"),
      });
    } else {
      toast({
        title: t("bookmarkRemoved"),
        description: t("removedFromReadingList"),
      });
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    toast({
      title: t("commentSubmitted"),
      description: t("commentAwaitingModeration"),
    });
    setComment("");
  };

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("postNotFound")}</h1>
        <p className="mb-8">{t("postNotFoundDescription")}</p>
        <Button onClick={() => router.push(`/blog`)}>{t("backToBlog")}</Button>
      </div>
    );
  }

  return (
    <>
      {/* Add structured data */}
      <Script
        id={`schema-blog-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress
          value={readingProgress}
          className="h-1 rounded-none bg-gray-200"
        />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/5 z-0" />
        <div className="relative pt-32 pb-16 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`/blog`}
                  className={`inline-flex items-center text-primary hover:text-primary/80 mb-6 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  {isRTL ? (
                    <ArrowRight className="ml-2 h-4 w-4" />
                  ) : (
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  )}
                  {t("backToBlog")}
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">
                      {t("featured")}
                    </span>
                  )}
                </div>

                <h1
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  {post.title}
                </h1>

                <div
                  className={`flex flex-wrap items-center gap-4 mb-8 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar
                      className={`h-10 w-10 ${
                        isRTL ? "ml-3" : "mr-3"
                      } border-2 border-white shadow-sm`}
                    >
                      <AvatarImage
                        src={
                          post.authorImage ||
                          "/placeholder.svg?height=40&width=40"
                        }
                        alt={post.author}
                      />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className={isRTL ? "text-right" : ""}>
                      <div className="font-medium">{post.author}</div>
                      <div className="text-sm text-gray-500">
                        {post.authorPosition || t("author")}
                      </div>
                    </div>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-8 hidden md:block"
                  />
                  <div
                    className={`flex items-center text-gray-500 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Calendar
                      className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`}
                    />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-8 hidden md:block"
                  />
                  <div
                    className={`flex items-center text-gray-500 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Clock className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <Separator
                    orientation="vertical"
                    className="h-8 hidden md:block"
                  />
                  <div
                    className={`flex items-center text-gray-500 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Eye className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
                    <span className="text-sm">
                      {post.views || "1.2K"} {t("views")}
                    </span>
                  </div>
                </div>

                {/* Social sharing - top */}
                <div
                  className={`flex items-center gap-2 mb-6 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`rounded-full ${
                            liked ? "bg-red-50 text-red-500 border-red-200" : ""
                          }`}
                          onClick={handleLike}
                        >
                          <Heart
                            className={`h-4 w-4 ${liked ? "fill-current" : ""}`}
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {liked ? t("unlike") : t("like")} {t("thisArticle")}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`rounded-full ${
                            bookmarked
                              ? "bg-primary/10 text-primary border-primary/20"
                              : ""
                          }`}
                          onClick={handleBookmark}
                        >
                          <Bookmark
                            className={`h-4 w-4 ${
                              bookmarked ? "fill-current" : ""
                            }`}
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          {bookmarked ? t("removeBookmark") : t("bookmark")}{" "}
                          {t("thisArticle")}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Separator orientation="vertical" className="h-8" />

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                          onClick={handleCopyLink}
                        >
                          {copied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("copyLinkToArticle")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("shareOn")} Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Facebook className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("shareOn")} Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{t("shareOn")} LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-2 ${isRTL ? "order-last" : "order-first"}`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
            >
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src={post.image || "/placeholder.svg?height=1000&width=1600"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <div
                  className={`prose prose-lg max-w-none ${
                    isRTL ? "rtl text-right" : ""
                  }`}
                  ref={contentRef}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content
                          ?.replace(/\n/g, "<br />")
                          ?.replace(/## (.*)/g, (match, heading) => {
                            const id = heading
                              .toLowerCase()
                              .replace(/\s+/g, "-");
                            return `<h2 id="${id}" class="scroll-mt-24">${heading}</h2>`;
                          }) || post.excerpt,
                    }}
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3
                    className={`text-lg font-semibold mb-3 flex items-center ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Tag
                      className={`${
                        isRTL ? "ml-2" : "mr-2"
                      } h-5 w-5 text-primary`}
                    />
                    {t("tags")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Link
                        href={`/blog/tag/${tag
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        key={index}
                        className={`bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors flex items-center ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Tag className={`${isRTL ? "ml-1" : "mr-1"} h-3 w-3`} />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div
                    className={`flex items-center justify-between mb-4 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <h3
                      className={`text-lg font-semibold flex items-center ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Share2
                        className={`${
                          isRTL ? "ml-2" : "mr-2"
                        } h-5 w-5 text-primary`}
                      />
                      {t("shareThisArticle")}
                    </h3>
                    <div
                      className={`text-sm text-gray-500 flex items-center ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Eye className={`${isRTL ? "ml-1" : "mr-1"} h-4 w-4`} />
                      {post.views || "1.2K"} {t("views")}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Button
                      variant="outline"
                      className={`w-full ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Twitter
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Facebook
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <Linkedin
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full ${isRTL ? "flex-row-reverse" : ""}`}
                      onClick={handleCopyLink}
                    >
                      {copied ? (
                        <Check
                          className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                      ) : (
                        <Copy
                          className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                        />
                      )}
                      {t("copyLink")}
                    </Button>
                  </div>
                </div>

                {/* Reader feedback */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3
                    className={`text-lg font-semibold mb-4 ${
                      isRTL ? "text-right" : ""
                    }`}
                  >
                    {t("wasThisArticleHelpful")}
                  </h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className={`flex-1 ${
                        liked
                          ? "bg-primary/10 text-primary border-primary/20"
                          : ""
                      } ${isRTL ? "flex-row-reverse" : ""}`}
                      onClick={handleLike}
                    >
                      <ThumbsUp
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"} ${
                          liked ? "fill-current" : ""
                        }`}
                      />
                      {t("yesItHelpedMe")}
                    </Button>
                    <Button
                      variant="outline"
                      className={`flex-1 ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <AlertCircle
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      {t("noINeedMoreInfo")}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Author bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
            >
              <div
                className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
                  isRTL ? "md:flex-row-reverse text-right" : ""
                }`}
              >
                <Avatar className="h-24 w-24 border-2 border-white shadow-sm">
                  <AvatarImage
                    src={
                      post.authorImage || "/placeholder.svg?height=96&width=96"
                    }
                    alt={post.author}
                  />
                  <AvatarFallback className="text-2xl">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-gray-500 mb-4">
                    {post.authorPosition || t("contentWriter")}
                  </p>
                  <p className="text-gray-700 mb-4">{t("authorBio")}</p>
                  <div
                    className={`flex gap-3 ${
                      isRTL ? "justify-end md:justify-start" : ""
                    }`}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className={isRTL ? "flex-row-reverse" : ""}
                    >
                      <Twitter
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      {t("follow")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={isRTL ? "flex-row-reverse" : ""}
                    >
                      <MessageCircle
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      {t("contact")}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className={isRTL ? "flex-row-reverse" : ""}
                    >
                      <BookOpen
                        className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`}
                      />
                      {t("allArticles")}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Comments section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8"
            >
              <h3
                className={`text-xl font-semibold mb-6 ${
                  isRTL ? "text-right" : ""
                }`}
              >
                {t("comments")} (3)
              </h3>

              <div className="space-y-6 mb-8">
                {/* Sample comments */}
                <div
                  className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah Johnson"
                    />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div
                      className={`flex items-center justify-between mb-1 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <span className="text-xs text-gray-500">
                        {t("daysAgo", { days: 2 })}
                      </span>
                    </div>
                    <p
                      className={`text-gray-700 mb-2 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      {t("commentSample1")}
                    </p>
                    <div
                      className={`flex items-center gap-4 text-sm text-gray-500 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <ThumbsUp
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("like")} (5)
                      </button>
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <MessageCircle
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("reply")}
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Mohammed Al-Harbi"
                    />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div
                      className={`flex items-center justify-between mb-1 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <h4 className="font-medium">Mohammed Al-Harbi</h4>
                      <span className="text-xs text-gray-500">
                        {t("weeksAgo", { weeks: 1 })}
                      </span>
                    </div>
                    <p
                      className={`text-gray-700 mb-2 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      {t("commentSample2")}
                    </p>
                    <div
                      className={`flex items-center gap-4 text-sm text-gray-500 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <ThumbsUp
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("like")} (2)
                      </button>
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <MessageCircle
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("reply")}
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="Fatima Al-Saud"
                    />
                    <AvatarFallback>FS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div
                      className={`flex items-center justify-between mb-1 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <h4 className="font-medium">Fatima Al-Saud</h4>
                      <span className="text-xs text-gray-500">
                        {t("weeksAgo", { weeks: 2 })}
                      </span>
                    </div>
                    <p
                      className={`text-gray-700 mb-2 ${
                        isRTL ? "text-right" : ""
                      }`}
                    >
                      {t("commentSample3")}
                    </p>
                    <div
                      className={`flex items-center gap-4 text-sm text-gray-500 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <ThumbsUp
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("like")} (8)
                      </button>
                      <button
                        className={`flex items-center hover:text-primary ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <MessageCircle
                          className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                        />
                        {t("reply")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmitComment}>
                <h4 className={`font-medium mb-3 ${isRTL ? "text-right" : ""}`}>
                  {t("leaveComment")}
                </h4>
                <Textarea
                  placeholder={t("shareThoughts")}
                  className={`mb-3 ${isRTL ? "text-right" : ""}`}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  dir={isRTL ? "rtl" : "ltr"}
                />
                <div className={isRTL ? "text-right" : ""}>
                  <Button type="submit" disabled={!comment.trim()}>
                    {t("postComment")}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Post navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="group">
                  <Card
                    className={`h-full hover:shadow-md transition-shadow ${
                      isRTL
                        ? "border-r-4 border-r-primary"
                        : "border-l-4 border-l-primary"
                    }`}
                  >
                    <CardContent
                      className={`p-4 flex items-center ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      {isRTL ? (
                        <ArrowRight className="ml-4 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      ) : (
                        <ArrowLeft className="mr-4 h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform" />
                      )}
                      <div className={isRTL ? "text-right" : ""}>
                        <p className="text-sm text-gray-500 mb-1">
                          {t("previousArticle")}
                        </p>
                        <p className="font-medium line-clamp-1">
                          {prevPost.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group">
                  <Card
                    className={`h-full hover:shadow-md transition-shadow ${
                      isRTL
                        ? "border-l-4 border-l-primary"
                        : "border-r-4 border-r-primary"
                    }`}
                  >
                    <CardContent
                      className={`p-4 flex items-center justify-end text-right ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className={isRTL ? "text-left" : "text-right"}>
                        <p className="text-sm text-gray-500 mb-1">
                          {t("nextArticle")}
                        </p>
                        <p className="font-medium line-clamp-1">
                          {nextPost.title}
                        </p>
                      </div>
                      {isRTL ? (
                        <ArrowLeft className="mr-4 h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="ml-4 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                      )}
                    </CardContent>
                  </Card>
                </Link>
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl shadow-md p-6 mb-8"
                >
                  <h3
                    className={`text-lg font-semibold mb-4 flex items-center ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <BookOpen
                      className={`${
                        isRTL ? "ml-2" : "mr-2"
                      } h-5 w-5 text-primary`}
                    />
                    {t("tableOfContents")}
                  </h3>
                  <div className="relative">
                    <div
                      className={`absolute ${
                        isRTL ? "right-2" : "left-2"
                      } top-0 bottom-0 w-0.5 bg-gray-100`}
                    />
                    <ul
                      className={`space-y-3 relative ${
                        isRTL ? "pr-6" : "pl-6"
                      }`}
                    >
                      {headings.map((heading, index) => (
                        <li key={index} className="relative">
                          {activeHeading === heading.id && (
                            <div
                              className={`absolute ${
                                isRTL ? "right-0" : "left-0"
                              } top-0 bottom-0 w-1 bg-primary rounded-full`}
                            />
                          )}
                          <a
                            href={`#${heading.id}`}
                            className={`text-sm hover:text-primary hover:underline transition-colors ${
                              activeHeading === heading.id
                                ? "text-primary font-medium"
                                : "text-gray-700"
                            } ${isRTL ? "block text-right" : ""}`}
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Reading stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="bg-white rounded-xl shadow-md p-6 mb-8"
              >
                <h3
                  className={`text-lg font-semibold mb-4 ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  {t("readingStats")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div
                      className={`flex items-center justify-between mb-1 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-sm text-gray-600">
                        {t("readingProgress")}
                      </span>
                      <span className="text-sm font-medium">
                        {readingProgress}%
                      </span>
                    </div>
                    <Progress value={readingProgress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        {t("readTime")}
                      </div>
                      <div
                        className={`font-medium flex items-center ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Clock
                          className={`h-4 w-4 ${
                            isRTL ? "ml-1" : "mr-1"
                          } text-primary`}
                        />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">
                        {t("published")}
                      </div>
                      <div
                        className={`font-medium flex items-center ${
                          isRTL ? "flex-row-reverse" : ""
                        }`}
                      >
                        <Calendar
                          className={`h-4 w-4 ${
                            isRTL ? "ml-1" : "mr-1"
                          } text-primary`}
                        />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">
                      {t("views")}
                    </div>
                    <div
                      className={`font-medium flex items-center ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Eye
                        className={`h-4 w-4 ${
                          isRTL ? "ml-1" : "mr-1"
                        } text-primary`}
                      />
                      {post.views || "1.2K"} {t("readers")}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Related posts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3
                  className={`text-lg font-semibold mb-4 flex items-center ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <ArrowRight
                    className={`${
                      isRTL ? "ml-2 rotate-180" : "mr-2"
                    } h-5 w-5 text-primary`}
                  />
                  {t("whatToReadNext")}
                </h3>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        key={relatedPost.id}
                        className="group block"
                      >
                        <div
                          className={`flex gap-3 ${
                            isRTL ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={
                                relatedPost.image ||
                                "/placeholder.svg?height=80&width=80"
                              }
                              alt={relatedPost.title}
                              fill
                              className="object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors rounded-md" />
                          </div>
                          <div className={isRTL ? "text-right" : ""}>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div
                              className={`flex items-center text-xs text-gray-500 mt-1 ${
                                isRTL ? "flex-row-reverse" : ""
                              }`}
                            >
                              <Calendar
                                className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                              />
                              <span>{relatedPost.date}</span>
                              <Separator
                                orientation="vertical"
                                className="mx-2 h-3"
                              />
                              <Clock
                                className={`h-3 w-3 ${isRTL ? "ml-1" : "mr-1"}`}
                              />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">{t("noRelatedArticles")}</p>
                )}

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="outline" className="w-full">
                    <Link
                      href={`/blog`}
                      className={`flex items-center justify-center w-full ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      {t("viewAllArticles")}
                      {isRTL ? (
                        <ArrowLeft className="mr-2 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}
