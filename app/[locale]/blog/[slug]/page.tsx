"use client"

import { useEffect, useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  ChevronUp,
  Copy,
  Check,
  Eye,
  Tag,
  ThumbsUp,
  AlertCircle,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogPosts } from "@/data/blog-posts"
import { Separator } from "@/components/ui/separator"
import Script from "next/script"
import { generateBlogPostSchema } from "@/lib/schema"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function BlogPostPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState("")
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [comment, setComment] = useState("")
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])

  const contentRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to reading progress
  const transformedProgress = useTransform(scrollYProgress, [0, 0.9], [0, 100])

  useEffect(() => {
    // Update reading progress based on scroll
    const unsubscribe = transformedProgress.onChange((latest) => {
      setReadingProgress(Math.round(latest))
    })

    return () => unsubscribe()
  }, [transformedProgress])

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find((post) => post.slug === slug)
    setPost(currentPost)

    // Find related posts (same category or shared tags)
    if (currentPost) {
      const related = blogPosts
        .filter((p) => p.id !== currentPost.id)
        .filter((p) => p.category === currentPost.category || p.tags.some((tag) => currentPost.tags.includes(tag)))
        .slice(0, 3)
      setRelatedPosts(related)

      // Extract headings from content
      if (currentPost.content) {
        const extractedHeadings =
          currentPost.content.match(/## ([^\n]*)/g)?.map((heading) => ({
            id: heading.replace("## ", "").toLowerCase().replace(/\s+/g, "-"),
            text: heading.replace("## ", ""),
          })) || []
        setHeadings(extractedHeadings)
      }
    }

    setLoading(false)

    // Scroll to top when post changes
    window.scrollTo(0, 0)
  }, [slug])

  // Track active heading based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0 || !contentRef.current) return

      const headingElements = headings.map((heading) => document.getElementById(heading.id)).filter(Boolean)

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i]
        if (!element) continue

        const rect = element.getBoundingClientRect()
        if (rect.top <= 150) {
          setActiveHeading(headings[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [headings])

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast({
      title: "Link copied to clipboard",
      description: "You can now share this article with others",
    })
  }

  const handleLike = () => {
    setLiked(!liked)
    if (!liked) {
      toast({
        title: "Article liked!",
        description: "Thank you for your feedback",
      })
    }
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    if (!bookmarked) {
      toast({
        title: "Article bookmarked",
        description: "Saved to your reading list",
      })
    } else {
      toast({
        title: "Bookmark removed",
        description: "Removed from your reading list",
      })
    }
  }

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!comment.trim()) return

    toast({
      title: "Comment submitted",
      description: "Your comment is awaiting moderation",
    })
    setComment("")
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you are looking for does not exist.</p>
        <Button onClick={() => router.push("/blog")}>Back to Blog</Button>
      </div>
    )
  }

  return (
    <>
      {/* Add structured data */}
      <Script
        id={`schema-blog-${post.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Progress value={readingProgress} className="h-1 rounded-none bg-gray-200" />
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/5 z-0" />
        <div className="relative pt-32 pb-16 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">{post.category}</span>
                  {post.featured && (
                    <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">Featured</span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-white shadow-sm">
                      <AvatarImage src={post.authorImage || "/placeholder.svg?height=40&width=40"} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{post.author}</div>
                      <div className="text-sm text-gray-500">{post.authorPosition || "Author"}</div>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-8 hidden md:block" />
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <Separator orientation="vertical" className="h-8 hidden md:block" />
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <Separator orientation="vertical" className="h-8 hidden md:block" />
                  <div className="flex items-center text-gray-500">
                    <Eye className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.views || "1.2K"} views</span>
                  </div>
                </div>

                {/* Social sharing - top */}
                <div className="flex items-center gap-2 mb-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`rounded-full ${liked ? "bg-red-50 text-red-500 border-red-200" : ""}`}
                          onClick={handleLike}
                        >
                          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{liked ? "Unlike" : "Like"} this article</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className={`rounded-full ${bookmarked ? "bg-primary/10 text-primary border-primary/20" : ""}`}
                          onClick={handleBookmark}
                        >
                          <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-current" : ""}`} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{bookmarked ? "Remove bookmark" : "Bookmark"} this article</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Separator orientation="vertical" className="h-8" />

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={handleCopyLink}>
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Copy link to article</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share on Twitter</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Facebook className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share on Facebook</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Share on LinkedIn</p>
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
          <div className="lg:col-span-2">
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
                <div className="prose prose-lg max-w-none" ref={contentRef}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        post.content?.replace(/\n/g, "<br />")?.replace(/## (.*)/g, (match, heading) => {
                          const id = heading.toLowerCase().replace(/\s+/g, "-")
                          return `<h2 id="${id}" class="scroll-mt-24">${heading}</h2>`
                        }) || post.excerpt,
                    }}
                  />
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Tag className="mr-2 h-5 w-5 text-primary" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Link
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                        key={index}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors flex items-center"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Share2 className="mr-2 h-5 w-5 text-primary" />
                      Share This Article
                    </h3>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views || "1.2K"} views
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Button variant="outline" className="w-full">
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleCopyLink}>
                      {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                      Copy Link
                    </Button>
                  </div>
                </div>

                {/* Reader feedback */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Was this article helpful?</h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className={`flex-1 ${liked ? "bg-primary/10 text-primary border-primary/20" : ""}`}
                      onClick={handleLike}
                    >
                      <ThumbsUp className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
                      Yes, it helped me
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      No, I need more info
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
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <Avatar className="h-24 w-24 border-2 border-white shadow-sm">
                  <AvatarImage src={post.authorImage || "/placeholder.svg?height=96&width=96"} alt={post.author} />
                  <AvatarFallback className="text-2xl">{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-gray-500 mb-4">{post.authorPosition || "Content Writer"}</p>
                  <p className="text-gray-700 mb-4">
                    An experienced digital marketing specialist with expertise in SEO, content strategy, and market
                    analysis for Saudi businesses. With over 8 years of experience helping businesses grow their online
                    presence.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4 mr-2" />
                      Follow
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      All Articles
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
              <h3 className="text-xl font-semibold mb-6">Comments (3)</h3>

              <div className="space-y-6 mb-8">
                {/* Sample comments */}
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      This article was incredibly helpful! I've been trying to understand the Saudi market better for my
                      business, and this gave me exactly what I needed.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center hover:text-primary">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Like (5)
                      </button>
                      <button className="flex items-center hover:text-primary">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Mohammed Al-Harbi" />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Mohammed Al-Harbi</h4>
                      <span className="text-xs text-gray-500">1 week ago</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      Great insights! I would love to see more content about how Vision 2030 is affecting digital
                      marketing strategies in the region.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center hover:text-primary">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Like (2)
                      </button>
                      <button className="flex items-center hover:text-primary">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Fatima Al-Saud" />
                    <AvatarFallback>FS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Fatima Al-Saud</h4>
                      <span className="text-xs text-gray-500">2 weeks ago</span>
                    </div>
                    <p className="text-gray-700 mb-2">
                      I've implemented some of these strategies for my e-commerce business and seen a 30% increase in
                      engagement. Thank you for the valuable information!
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <button className="flex items-center hover:text-primary">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Like (8)
                      </button>
                      <button className="flex items-center hover:text-primary">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmitComment}>
                <h4 className="font-medium mb-3">Leave a comment</h4>
                <Textarea
                  placeholder="Share your thoughts..."
                  className="mb-3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button type="submit" disabled={!comment.trim()}>
                  Post Comment
                </Button>
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
                  <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-l-primary">
                    <CardContent className="p-4 flex items-center">
                      <ArrowLeft className="mr-4 h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform" />
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Previous Article</p>
                        <p className="font-medium line-clamp-1">{prevPost.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow border-r-4 border-r-primary">
                    <CardContent className="p-4 flex items-center justify-end text-right">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Next Article</p>
                        <p className="font-medium line-clamp-1">{nextPost.title}</p>
                      </div>
                      <ArrowRight className="ml-4 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
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
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-primary" />
                    Table of Contents
                  </h3>
                  <div className="relative">
                    <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-100" />
                    <ul className="space-y-3 relative">
                      {headings.map((heading, index) => (
                        <li key={index} className="pl-6 relative">
                          {activeHeading === heading.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-full" />
                          )}
                          <a
                            href={`#${heading.id}`}
                            className={`text-sm hover:text-primary hover:underline transition-colors ${
                              activeHeading === heading.id ? "text-primary font-medium" : "text-gray-700"
                            }`}
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
                <h3 className="text-lg font-semibold mb-4">Reading Stats</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Reading Progress</span>
                      <span className="text-sm font-medium">{readingProgress}%</span>
                    </div>
                    <Progress value={readingProgress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Read Time</div>
                      <div className="font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-primary" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-500 mb-1">Published</div>
                      <div className="font-medium flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary" />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Views</div>
                    <div className="font-medium flex items-center">
                      <Eye className="h-4 w-4 mr-1 text-primary" />
                      {post.views || "1.2K"} readers
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
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <ArrowRight className="mr-2 h-5 w-5 text-primary" />
                  What to Read Next
                </h3>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group block">
                        <div className="flex gap-3">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={relatedPost.image || "/placeholder.svg?height=80&width=80"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors rounded-md" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-500 mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>{relatedPost.date}</span>
                              <Separator orientation="vertical" className="mx-2 h-3" />
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No related articles found</p>
                )}

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button variant="outline" className="w-full">
                    <Link href="/blog" className="flex items-center justify-center w-full">
                      View All Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
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
  )
}

