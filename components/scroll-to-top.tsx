"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { throttle } from "@/lib/performance-optimizations"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Throttle scroll event for better performance
  const checkScrollPosition = throttle(() => {
    const scrollPosition = window.scrollY
    setIsVisible(scrollPosition > 400)
  }, 200)

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition)
    return () => window.removeEventListener("scroll", checkScrollPosition)
  }, [checkScrollPosition])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg p-0 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

