import Head from "next/head"
import { companyInfo } from "@/data/company-info"

type SEOHeadProps = {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  twitterCard?: "summary" | "summary_large_image"
  keywords?: string[]
  author?: string
  publishedTime?: string
  modifiedTime?: string
}

export default function SEOHead({
  title = "Saudi Ease - Creative Digital Solutions for Saudi Businesses",
  description = "Comprehensive digital services in Saudi Arabia including web development, e-invoicing, graphic design, and digital marketing aligned with Vision 2030.",
  canonicalUrl = "https://saudiease.com",
  ogImage = "https://saudiease.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = [
    "Web Development Saudi Arabia",
    "Digital Marketing Services",
    "E-Invoicing Solutions",
    "ZATCA Compliance",
    "Graphic Design Riyadh",
    "Vision 2030 Digital Transformation",
  ],
  author = "Saudi Ease Team",
  publishedTime,
  modifiedTime,
}: SEOHeadProps) {
  const fullTitle = title.includes("Saudi Ease") ? title : `${title} | Saudi Ease`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Saudi Ease" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ar_SA" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@saudiease" />

      {/* Article specific meta (for blog posts) */}
      {ogType === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {ogType === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {ogType === "article" && <meta property="article:publisher" content={companyInfo.website} />}

      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="application-name" content="Saudi Ease" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Saudi Ease" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#e63e65" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#e63e65" />
    </Head>
  )
}

