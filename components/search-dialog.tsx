"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  X,
  ArrowRight,
  Clock,
  Tag,
  FileText,
  Briefcase,
  Layout,
  Globe,
  Zap,
  AlertCircle,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import {
  searchContent,
  getSearchSuggestions,
  popularSearchTerms,
  type SearchResult,
  type SearchResultType,
} from "@/lib/search"

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState<string>("all")
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isLoading, setIsLoading] = useState(false)
  const [showNoResults, setShowNoResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Load recent searches from localStorage on mount
  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches")
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches).slice(0, 5))
    }
  }, [])

  // Focus input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Handle search input with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setSuggestions([])
      setShowNoResults(false)
      return
    }

    // Get search suggestions immediately for autocomplete
    const quickSuggestions = getSearchSuggestions(searchQuery)
    setSuggestions(quickSuggestions)

    // Debounce the full search for performance
    const timer = setTimeout(() => {
      setIsLoading(true)

      // Get active filter types
      const filterTypes: SearchResultType[] = activeTab === "all" ? [] : [activeTab as SearchResultType]

      // Perform search
      const results = searchContent(searchQuery, filterTypes)
      setSearchResults(results)
      setIsLoading(false)
      setShowNoResults(results.length === 0)

      // Reset selected index when results change
      setSelectedIndex(-1)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, activeTab])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Escape key closes the dialog
    if (e.key === "Escape") {
      onClose()
      return
    }

    // If no results, don't handle arrow navigation
    if (searchResults.length === 0) return

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev))

      // Scroll into view if needed
      if (selectedIndex >= 0 && resultsRef.current) {
        const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex + 1}"]`)
        selectedElement?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }

    // Arrow up
    if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))

      // Scroll into view if needed
      if (selectedIndex > 0 && resultsRef.current) {
        const selectedElement = resultsRef.current.querySelector(`[data-index="${selectedIndex - 1}"]`)
        selectedElement?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
    }

    // Enter key navigates to the selected result
    if (e.key === "Enter") {
      if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
        e.preventDefault()
        handleResultClick(searchResults[selectedIndex])
      } else if (searchQuery.trim()) {
        // If no result selected but query exists, perform search
        handleSearch()
      }
    }
  }

  // Handle search submission
  const handleSearch = () => {
    if (!searchQuery.trim()) return

    // Save to recent searches
    if (!recentSearches.includes(searchQuery)) {
      const updatedSearches = [searchQuery, ...recentSearches].slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }

    // Here you would typically navigate to a search results page
    // For now, we'll just close the dialog
    onClose()
  }

  // Handle clicking on a search result
  const handleResultClick = (result: SearchResult) => {
    // Save search query to recent searches
    if (!recentSearches.includes(searchQuery)) {
      const updatedSearches = [searchQuery, ...recentSearches].slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches))
    }

    // Close dialog (navigation will happen via Link component)
    onClose()
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
  }

  // Handle recent search click
  const handleRecentSearchClick = (term: string) => {
    setSearchQuery(term)
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Get icon for result type
  const getResultIcon = (type: SearchResultType) => {
    switch (type) {
      case "service":
        return <Briefcase className="h-4 w-4 text-blue-500" />
      case "project":
        return <Layout className="h-4 w-4 text-green-500" />
      case "blog":
        return <FileText className="h-4 w-4 text-amber-500" />
      case "page":
        return <Globe className="h-4 w-4 text-purple-500" />
      default:
        return <Search className="h-4 w-4 text-gray-500" />
    }
  }

  // Get result count by type
  const getResultCountByType = (type: SearchResultType): number => {
    return searchResults.filter((result) => result.type === type).length
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-[10vh]"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for services, projects, blog posts, and more..."
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery("")}
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && searchQuery && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 flex items-center"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <Zap className="h-3 w-3 mr-1 text-primary" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tabs for filtering results */}
            {searchQuery.trim() && searchResults.length > 0 && (
              <div className="border-b border-gray-100">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <div className="px-4">
                    <TabsList className="h-12">
                      <TabsTrigger value="all" className="flex items-center gap-2">
                        All
                        <Badge variant="secondary" className="ml-1">
                          {searchResults.length}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger value="service" className="flex items-center gap-2">
                        Services
                        <Badge variant="secondary" className="ml-1">
                          {getResultCountByType("service")}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger value="project" className="flex items-center gap-2">
                        Projects
                        <Badge variant="secondary" className="ml-1">
                          {getResultCountByType("project")}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger value="blog" className="flex items-center gap-2">
                        Blog
                        <Badge variant="secondary" className="ml-1">
                          {getResultCountByType("blog")}
                        </Badge>
                      </TabsTrigger>
                      <TabsTrigger value="page" className="flex items-center gap-2">
                        Pages
                        <Badge variant="secondary" className="ml-1">
                          {getResultCountByType("page")}
                        </Badge>
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </Tabs>
              </div>
            )}

            {/* Search Results or Initial State */}
            <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto" style={{ scrollBehavior: "smooth" }}>
              {/* Loading State */}
              {isLoading && (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              )}

              {/* No Results State */}
              {showNoResults && !isLoading && (
                <div className="py-12 px-4 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <AlertCircle className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    We couldn't find any matches for "{searchQuery}". Try checking for typos or using different
                    keywords.
                  </p>
                </div>
              )}

              {/* Search Results */}
              {!isLoading && searchResults.length > 0 && (
                <div className="py-2">
                  {searchResults.map((result, index) => (
                    <Link
                      href={result.url}
                      key={`${result.type}-${result.id}`}
                      data-index={index}
                      className={cn(
                        "block px-4 py-3 hover:bg-gray-50 transition-colors",
                        selectedIndex === index && "bg-gray-50",
                      )}
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Result Image or Icon */}
                        {result.image ? (
                          <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={result.image || "/placeholder.svg"}
                              alt={result.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center flex-shrink-0">
                            {getResultIcon(result.type)}
                          </div>
                        )}

                        {/* Result Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-xs font-medium",
                                result.type === "service" && "bg-blue-50 text-blue-700 border-blue-200",
                                result.type === "project" && "bg-green-50 text-green-700 border-green-200",
                                result.type === "blog" && "bg-amber-50 text-amber-700 border-amber-200",
                                result.type === "page" && "bg-purple-50 text-purple-700 border-purple-200",
                              )}
                            >
                              {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                            </Badge>
                            {result.category && <span className="text-xs text-gray-500">{result.category}</span>}
                          </div>

                          <h4 className="font-medium text-gray-900 truncate mb-1">{result.title}</h4>

                          <p className="text-sm text-gray-600 line-clamp-1">{result.description}</p>

                          {/* Tags */}
                          {result.tags && result.tags.length > 0 && (
                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                              {result.tags.slice(0, 3).map((tag, i) => (
                                <span key={i} className="inline-flex items-center text-xs text-gray-500">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                              {result.tags.length > 3 && (
                                <span className="text-xs text-gray-500">+{result.tags.length - 3} more</span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Arrow indicator */}
                        <div className="self-center">
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Initial State - Recent & Popular Searches */}
              {!searchQuery && (
                <div className="p-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-gray-900">Recent Searches</h3>
                        <button className="text-xs text-primary hover:underline" onClick={clearRecentSearches}>
                          Clear all
                        </button>
                      </div>
                      <div className="space-y-2">
                        {recentSearches.map((term, index) => (
                          <button
                            key={index}
                            className="flex items-center w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => handleRecentSearchClick(term)}
                          >
                            <Clock className="h-4 w-4 text-gray-400 mr-3" />
                            <span>{term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Searches */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Popular Searches</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularSearchTerms.map((term, index) => (
                        <button
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
                          onClick={() => handleSuggestionClick(term)}
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/services"
                        className="flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                        onClick={onClose}
                      >
                        <Briefcase className="h-5 w-5 mr-3" />
                        <span className="font-medium">Our Services</span>
                      </Link>
                      <Link
                        href="/portfolio"
                        className="flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                        onClick={onClose}
                      >
                        <Layout className="h-5 w-5 mr-3" />
                        <span className="font-medium">Portfolio</span>
                      </Link>
                      <Link
                        href="/blog"
                        className="flex items-center p-3 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors"
                        onClick={onClose}
                      >
                        <FileText className="h-5 w-5 mr-3" />
                        <span className="font-medium">Blog</span>
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                        onClick={onClose}
                      >
                        <MessageSquare className="h-5 w-5 mr-3" />
                        <span className="font-medium">Contact Us</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer with keyboard shortcuts */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs text-gray-500 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-200 mr-1">↑</kbd>
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-200">↓</kbd>
                  <span className="ml-2">to navigate</span>
                </div>
                <div className="flex items-center">
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-200">Enter</kbd>
                  <span className="ml-2">to select</span>
                </div>
                <div className="flex items-center">
                  <kbd className="px-2 py-1 bg-white rounded border border-gray-200">Esc</kbd>
                  <span className="ml-2">to close</span>
                </div>
              </div>

              <div>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

