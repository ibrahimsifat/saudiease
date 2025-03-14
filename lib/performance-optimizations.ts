// Performance optimization utilities

// Debounce function to limit how often a function can be called
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Throttle function to limit the rate at which a function is executed
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false
  let lastFunc: ReturnType<typeof setTimeout> | null = null
  let lastRan = 0

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      lastRan = Date.now()
      inThrottle = true

      setTimeout(() => {
        inThrottle = false
      }, limit)
    } else {
      if (lastFunc !== null) {
        clearTimeout(lastFunc)
      }

      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func(...args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - lastRan),
      )
    }
  }
}

// Lazy load images that are not in the viewport
export function lazyLoadImages() {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return
  }

  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement
        image.src = image.dataset.src || ""
        image.removeAttribute("data-src")
        imageObserver.unobserve(image)
      }
    })
  })

  images.forEach((image) => {
    imageObserver.observe(image)
  })
}

// Detect if the user has a slow connection
export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
}

export function isLowEndDevice(): boolean {
  if (typeof navigator === "undefined") return false

  const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4
  const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

  return lowMemory || lowCPU
}

// Add the missing function
export function shouldUseReducedData(): boolean {
  if (typeof navigator === "undefined") return false

  // Check for data saver mode
  // @ts-ignore - saveData might not be available in all browsers
  const dataSaver = navigator.connection && navigator.connection.saveData

  // Check for slow connection
  const slowConnection = isSlowConnection()

  // Check for low-end device
  const lowEndDevice = isLowEndDevice()

  // Return true if any of these conditions are met
  return dataSaver || slowConnection || lowEndDevice
}

export function getOptimizedAnimations() {
  const reducedMotion = prefersReducedMotion()
  const lowEndDevice = isLowEndDevice()

  return {
    reducedMotion,
    enableBackgroundEffects: !lowEndDevice,
    enableComplexAnimations: !lowEndDevice && !reducedMotion,
  }
}

export function isSlowConnection(): boolean {
  if (typeof navigator === "undefined") return false

  // @ts-ignore - Connection API might not be available in all browsers
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  if (!connection) return false

  // @ts-ignore
  const type = connection.effectiveType || connection.type

  // Consider 2G and slow 3G as slow connections
  return type === "2g" || type === "slow-2g" || (type === "3g" && connection.downlink < 1)
}

// Load scripts dynamically
export function loadScript(src: string, async = true, defer = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    script.src = src
    script.async = async
    script.defer = defer

    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))

    document.head.appendChild(script)
  })
}

// Preload critical resources
export function preloadResources(resources: Array<{ href: string; as: string }>) {
  if (typeof document === "undefined") return

  resources.forEach((resource) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.href = resource.href
    link.as = resource.as

    document.head.appendChild(link)
  })
}

// Measure component render time
export function measureRenderTime(componentName: string) {
  if (typeof performance === "undefined") return () => {}

  const startTime = performance.now()

  return () => {
    const endTime = performance.now()
    console.log(`[Performance] ${componentName} rendered in ${(endTime - startTime).toFixed(2)}ms`)
  }
}

