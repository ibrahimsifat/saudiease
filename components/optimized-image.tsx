"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"
import { shouldUseReducedData } from "@/lib/performance-optimizations"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  lowQualitySrc?: string
  blurHash?: string
  aspectRatio?: number
  lazyLoadingOffset?: string
  fadeIn?: boolean
  fallbackSrc?: string
  previewSrc?: string
  onLoadingComplete?: () => void
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className = "",
  style,
  lowQualitySrc,
  blurHash,
  aspectRatio,
  lazyLoadingOffset = "200px",
  fadeIn = true,
  fallbackSrc = "/placeholder.svg",
  previewSrc,
  onLoadingComplete,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [actualSrc, setActualSrc] = useState(src)
  const reducedData = shouldUseReducedData()

  // Use lower quality image for users with reduced data preference
  useEffect(() => {
    if (reducedData && lowQualitySrc) {
      setActualSrc(lowQualitySrc)
    } else {
      setActualSrc(src)
    }
  }, [reducedData, lowQualitySrc, src])

  // Handle image loading error
  const handleError = () => {
    console.warn(`Failed to load image: ${actualSrc}`)
    setError(true)
    setActualSrc(fallbackSrc)
  }

  // Handle successful image load
  const handleLoad = () => {
    setIsLoaded(true)
    if (onLoadingComplete) {
      onLoadingComplete()
    }
  }

  // Calculate aspect ratio styles if provided
  const aspectRatioStyle =
    aspectRatio && !fill
      ? {
          aspectRatio: `${aspectRatio}`,
          objectFit: "cover" as const,
        }
      : {}

  // Combine styles
  const combinedStyle = {
    ...style,
    ...aspectRatioStyle,
  }

  // Determine placeholder
  let placeholder: "blur" | "empty" | undefined = undefined
  let blurDataURL: string | undefined = undefined

  if (previewSrc) {
    placeholder = "blur"
    blurDataURL = previewSrc
  } else if (blurHash) {
    placeholder = "blur"
    blurDataURL = blurHash
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        fadeIn && "transition-opacity duration-500",
        !isLoaded && fadeIn && "opacity-50",
        isLoaded && fadeIn && "opacity-100",
        className,
      )}
      style={{
        ...combinedStyle,
        ...(fill ? { width: "100%", height: "100%" } : {}),
      }}
    >
      {/* Loading skeleton */}
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" aria-hidden="true" />
      )}

      <Image
        src={error ? fallbackSrc : actualSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoadingComplete={handleLoad}
        onError={handleError}
        className={cn("transition-all duration-300", isLoaded ? "scale-100" : "scale-[1.01]", props.className)}
        {...props}
      />
    </div>
  )
}

