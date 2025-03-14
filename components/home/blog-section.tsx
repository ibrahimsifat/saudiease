"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import Script from "next/script"
import { generateBlogPostSchema } from "@/lib/schema"
import { ArrowRight, Mail } from "lucide-react"

export default function BlogSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400/5 rounded-full blur-3xl"></div>

      {/* Add structured data for blog posts */}
      {blogPosts.map((post) => (
        <Script
          key={post.id}
          id={`schema-blog-${post.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogPostSchema(post)) }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <span className="text-sm font-medium text-primary/80 bg-primary/5 px-3 py-1 rounded-full">
              Stay Updated
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing, web development, and more.
          </p>
        </motion.div>

        {/* Featured post */}
        {blogPosts.filter((post) => post.featured).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            {blogPosts.filter((post) => post.featured)[0] && (
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={
                        blogPosts.filter((post) => post.featured)[0].image || "/placeholder.svg?height=600&width=800"
                      }
                      alt={blogPosts.filter((post) => post.featured)[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary" />
                        <span>{blogPosts.filter((post) => post.featured)[0].date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-primary" />
                        <span>{blogPosts.filter((post) => post.featured)[0].author}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-primary transition-colors">
                      <Link href={`/blog/${blogPosts.filter((post) => post.featured)[0].slug}`}>
                        {blogPosts.filter((post) => post.featured)[0].title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6">{blogPosts.filter((post) => post.featured)[0].excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blogPosts
                        .filter((post) => post.featured)[0]
                        .tags.slice(0, 3)
                        .map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                    </div>
                    <Button variant="default" className="w-fit group">
                      <Link
                        href={`/blog/${blogPosts.filter((post) => post.featured)[0].slug}`}
                        className="flex items-center"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <motion.div key={post.id} variants={itemVariants} className="group">
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-blue-600/60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary/90"
                    >
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </div>
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-xs px-2 py-1 rounded-full z-20">
                      {post.readTime}
                    </div>
                  </div>
                  <CardHeader className="pt-6">
                    <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary/70" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-primary/70" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary to-blue-600">
            <Button variant="outline" className="rounded-full bg-white hover:bg-gray-50">
              <Link href="/blog" className="flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 md:p-12"
        >
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
                  <Mail className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

