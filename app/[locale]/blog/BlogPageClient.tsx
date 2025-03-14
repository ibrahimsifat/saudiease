"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/data/blog-posts"
import { ArrowRight, Calendar, Filter, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPageClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  // Get unique categories from blog posts
  const categories = ["all", ...Array.from(new Set(blogPosts.map((post) => post.category)))]

  // Filter blog posts based on search query and selected category
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      const filtered = blogPosts.filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

        return matchesSearch && matchesCategory
      })
      setFilteredPosts(filtered)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, selectedCategory])

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-saudi-black">Our Blog</h1>
            <p className="text-lg text-gray-600 mb-8">
              Stay updated with the latest insights on digital transformation, ZATCA e-invoicing, web development
              trends, and digital marketing strategies for Saudi businesses.
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-saudi-black">Featured Articles</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 1).map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={post.image || "/placeholder.svg?height=600&width=800"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </div>
                      </div>
                      <div className="p-6 flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-primary" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-primary" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button asChild>
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}

              <div className="grid grid-cols-1 gap-6">
                {featuredPosts.slice(1, 3).map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                          <Image
                            src={post.image || "/placeholder.svg?height=300&width=400"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <div className="flex items-center text-xs text-gray-500 space-x-4 mb-2">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1 text-primary" />
                              <span>{post.date}</span>
                            </div>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{post.category}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                          <Button size="sm" variant="ghost" className="text-primary p-0 hover:bg-transparent" asChild>
                            <Link href={`/blog/${post.slug}`} className="flex items-center">
                              Read More
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-2xl font-bold text-saudi-black mb-4 md:mb-0">Latest Articles</h2>

            <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <div className="flex items-center mb-2">
                <Filter className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Filter by Category:</span>
              </div>
              <TabsList className="w-full overflow-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 6 }).map((_, index) => (
                <Card key={index} className="overflow-hidden border border-gray-100">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded animate-pulse w-2/3"></div>
                    <div className="mt-6 flex gap-2">
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : filteredPosts.length > 0 ? (
              filteredPosts
                .filter((post) => !post.featured)
                .map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg?height=400&width=600"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs px-2 py-1 rounded-full">
                          {post.readTime}
                        </div>
                      </div>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1 text-primary/70" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1 text-primary/70" />
                            <span>{post.author}</span>
                          </div>
                        </div>

                        <div className="mb-4 flex-grow">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Button size="sm" asChild>
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Read Article
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-4">
                    We couldn't find any articles matching your search criteria. Please try different keywords or browse
                    all articles.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest articles, insights, and industry updates delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button>Subscribe</Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">We respect your privacy. Unsubscribe at any time.</p>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

