import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PreFooterCTA from "@/components/pre-footer-cta";
import { ThemeProvider } from "@/components/theme-provider";
import WhatsAppButton from "@/components/whatsapp-button";
import { localeMetadata } from "@/config/i18n";
import { Locale, routing } from "@/i18n/routing";
import { baseSeoMetadata, generateGlobalSchema } from "@/lib/seo-utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import { ReactNode, Suspense } from "react";
import "./globals.css";
import NotFound from "./not-founds";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

type SupportedLocale = (typeof routing.locales)[number];
type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Validate that the locale is supported
  if (!routing.locales.includes(params.locale as Locale)) {
    return baseSeoMetadata;
  }

  try {
    // Load messages for the locale
    const messages = await import(`../../messages/${params.locale}.json`);

    return {
      ...baseSeoMetadata,
      metadataBase: new URL("https://saudiease.com"),
      title: messages.meta?.title || baseSeoMetadata.title,
      description: messages.meta?.description || baseSeoMetadata.description,
      verification: {
        google: "google-site-verification-code",
      },
      category: "technology",
      alternates: {
        canonical: "/",
        languages: {
          en: "/en",
          ar: "/ar",
          bn: "/bn",
        },
      },
    };
  } catch (error) {
    return baseSeoMetadata;
  }
}
function isValidLocale(locale: string): locale is SupportedLocale {
  return routing.locales.includes(locale as SupportedLocale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!isValidLocale(locale)) {
    NotFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  const globalSchema = generateGlobalSchema();
  // Load messages for the locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    NotFound();
  }
  const { dir } = localeMetadata[locale];
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/logo.svg" />
        <link
          rel="preload"
          as="font"
          href="/fonts/inter-var.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#e63e65" />

        <Script
          id="schema-global"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        {/* Google Analytics - Load with proper strategy */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} ${dir === "rtl" ? "rtl" : ""}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Suspense fallback={null}>
                <PreFooterCTA />
              </Suspense>
              <Footer />
            </div>
            <WhatsAppButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
