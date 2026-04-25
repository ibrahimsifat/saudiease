import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PreFooterCTA from "@/components/pre-footer-cta";
import { RecaptchaProvider } from "@/components/recaptcha-provider";
import ScrollToTop from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";
import WhatsAppButton from "@/components/whatsapp-button";
import { type Locale, localeMetadata, locales } from "@/config/i18n";
import { getAllTranslations } from "@/lib/get-translation-namespace";
import {
  generateGlobalSchema,
  generateLocalizedMetadata,
} from "@/lib/seo-utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Cairo, Outfit, Noto_Sans_Bengali } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import type React from "react";
import { Suspense } from "react";
import "../globals.css";

// Optimize font loading with display swap and preload
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-outfit",
  fallback: ["system-ui", "sans-serif"],
});

// Cairo font for Arabic
const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  preload: true,
  variable: "--font-cairo",
  fallback: ["system-ui", "sans-serif"],
});

// Noto Sans Bengali for Bengali
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-noto-bengali",
  fallback: ["system-ui", "sans-serif"],
});

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const { locale } = await params;
  // Validate that the locale is supported
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return generateLocalizedMetadata(locale as Locale, "meta");
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Await the params before destructuring
  const { locale } = await params;

  // Validate that the locale is supported
  if (!locales.includes(locale)) {
    notFound();
  }
  // Load messages for the locale
  let messages;
  try {
    messages = await getAllTranslations(locale);
  } catch (error) {
    notFound();
  }

  const globalSchema = generateGlobalSchema();
  const { dir } = localeMetadata[locale];

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={`${outfit.variable} ${cairo.variable} ${notoBengali.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Saudi Ease" />
        <link
          rel="apple-touch-icon"
          href="/images/logos/apple-touch-icon.png"
        />

        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/images/logos/ar-logo.png" />
        <link rel="preload" as="image" href="/images/logos/en-logo.png" />
        <link rel="preload" as="image" href="/images/logos/bn-logo.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#e63e65" />

        {/* Add hreflang tags for SEO */}
        <link
          rel="alternate"
          href="https://saudiease.com/"
          hrefLang="x-default"
        />
        <link rel="alternate" href="https://saudiease.com/en" hrefLang="en" />
        <link rel="alternate" href="https://saudiease.com/bn" hrefLang="bn" />
        <link
          rel="alternate"
          href="https://saudiease.com/"
          hrefLang="x-default"
        />

        {/* Add structured data */}
        <Script
          id="schema-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        {/* Google Analytics  */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-TF1Y9318JH"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TF1Y9318JH', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </head>
      <body
        className={`${
          locale === "ar"
            ? cairo.className
            : locale === "bn"
            ? notoBengali.className
            : outfit.className
        } ${dir === "rtl" ? "rtl" : ""}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <RecaptchaProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main>
                <Suspense fallback={null}>
                  <PreFooterCTA />
                </Suspense>
                <Footer locale={locale} />
              </div>
            </RecaptchaProvider>
            <WhatsAppButton />
            <ScrollToTop />
          </ThemeProvider>
        </NextIntlClientProvider>

        {/* Performance monitoring */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
