"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type PerformanceOptimizedImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  className?: string
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty" | "data:image/..."
  blurDataURL?: string
  onLoad?: () => void
}

export default function PerformanceOptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75,
  placeholder = "empty",
  blurDataURL,
  onLoad,
}: PerformanceOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const [localSrc, setLocalSrc] = useState(src)

  // Handle image loading errors
  useEffect(() => {
    setLocalSrc(src)
    setIsError(false)
  }, [src])

  const handleError = () => {
    if (!isError) {
      setIsError(true)
      // Use a placeholder image if the original image fails to load
      setLocalSrc("/placeholder.svg")
    }
  }

  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoad) onLoad()
  }

  // Generate a simple blur placeholder if none is provided
  const getPlaceholder = () => {
    if (placeholder === "blur" && !blurDataURL) {
      // Simple SVG blur placeholder
      return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=="
    }
    return placeholder
  }

  return (
    <div className={cn("relative overflow-hidden", className, fill ? "w-full h-full" : "")}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div
          className={cn("absolute inset-0 bg-gray-200 animate-pulse rounded", isLoaded ? "opacity-0" : "opacity-100")}
          style={{ transition: "opacity 0.2s" }}
        />
      )}

      <Image
        src={localSrc || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        placeholder={getPlaceholder() as any}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0", className)}
      />
    </div>
  )
}

