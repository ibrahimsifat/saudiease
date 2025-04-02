"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo, useState, useTransition } from "react";

type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
};

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "/images/flags/en.svg",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "/images/flags/ar.svg",
    dir: "rtl",
  },
  {
    code: "bn",
    name: "Bengali",
    nativeName: "বাংলা",
    flag: "/images/flags/bn.svg",
    dir: "ltr",
  },
];

export default function LanguageSwitcher({
  variant = "default",
  className,
}: {
  variant?: "default" | "minimal" | "mobile";
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as string;
  const t = useTranslations("common");
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // Get current language object based on locale
  const currentLang = useMemo(() => {
    return languages.find((lang) => lang.code === locale) || languages[0];
  }, [locale]);

  // Extract path without locale for navigation
  const pathWithoutLocale = useMemo(() => {
    // Split the path and remove locale segment
    const segments = pathname.split("/");
    if (
      segments.length > 1 &&
      languages.some((lang) => lang.code === segments[1])
    ) {
      segments.splice(1, 1);
    }
    return segments.join("/") || "";
  }, [pathname]);

  // Preload images for better performance
  const preloadImages = useCallback(() => {
    languages.forEach((lang) => {
      const img = document.createElement("img");
      img.src = lang.flag;
    });
  }, []);

  // Handle language switching with proper navigation
  const handleLanguageChange = useCallback(
    (lang: Language) => {
      if (lang.code === locale) {
        setIsOpen(false);
        return;
      }

      // Build new path with selected language
      const newPath = `/${lang.code}${pathWithoutLocale}`;

      startTransition(() => {
        router.push(newPath);
        router.refresh();
        setIsOpen(false);
      });
    },
    [locale, pathWithoutLocale, router]
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      const currentIndex = languages.findIndex((lang) => lang.code === locale);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % languages.length;
        handleLanguageChange(languages[nextIndex]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + languages.length) % languages.length;
        handleLanguageChange(languages[prevIndex]);
      }
    },
    [isOpen, locale, handleLanguageChange]
  );

  // Different variants for different contexts
  if (variant === "minimal") {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn("rounded-full", className)}
            aria-label={t ? t("switchLanguage") : "Select language"}
            onMouseEnter={preloadImages}
            onKeyDown={handleKeyDown}
          >
            <Globe className="h-4 w-4" />
            {isPending && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"
              />
            )}
          </Button>
        </DropdownMenuTrigger>
        <LanguageDropdownContent
          currentLang={currentLang}
          languages={languages}
          onSelect={handleLanguageChange}
          isPending={isPending}
        />
      </DropdownMenu>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={cn("flex flex-col space-y-2", className)}>
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {t ? t("switchLanguage") : "Select Language"}
        </p>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-md text-sm transition-colors",
                currentLang.code === lang.code
                  ? "bg-primary/10 text-primary font-medium"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
                isPending && "opacity-70 cursor-not-allowed"
              )}
              disabled={isPending}
            >
              <div className="relative h-4 w-6 overflow-hidden rounded-sm">
                <Image
                  src={lang.flag || "/placeholder.svg"}
                  alt={lang.name}
                  width={24}
                  height={16}
                  className="object-cover"
                />
              </div>
              <span>{lang.nativeName}</span>
              {isPending && lang.code === locale && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="ml-1 h-2 w-2 rounded-full bg-primary"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center gap-2 h-9 px-3 border-gray-200 dark:border-gray-700 relative",
            className
          )}
          onMouseEnter={preloadImages}
          onKeyDown={handleKeyDown}
          disabled={isPending}
        >
          <div className="relative h-4 w-6 overflow-hidden rounded-sm">
            <Image
              src={currentLang.flag || "/placeholder.svg"}
              alt={currentLang.name}
              width={24}
              height={16}
              className="object-cover"
              priority
            />
          </div>
          <span className="text-sm font-medium text-gray-700">
            {currentLang.code.toUpperCase()}
          </span>
          <ChevronDown className="h-3.5 w-3.5 opacity-70" />
          {isPending && (
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <LanguageDropdownContent
        currentLang={currentLang}
        languages={languages}
        onSelect={handleLanguageChange}
        isPending={isPending}
      />
    </DropdownMenu>
  );
}

function LanguageDropdownContent({
  currentLang,
  languages,
  onSelect,
  isPending,
}: {
  currentLang: Language;
  languages: Language[];
  onSelect: (lang: Language) => void;
  isPending: boolean;
}) {
  const t = useTranslations("common");
  return (
    <DropdownMenuContent
      align="end"
      className="w-[180px] p-2 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-2"
      sideOffset={5}
      onCloseAutoFocus={(e) => e.preventDefault()}
    >
      <div className="py-1.5 px-2 mb-1 border-b border-gray-100 dark:border-gray-800">
        <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
          {t ? t("switchLanguage") : "Select Language"}
        </p>
      </div>
      <AnimatePresence initial={false}>
        {languages.map((lang, index) => (
          <motion.div
            key={lang.code}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15, delay: index * 0.05 }}
          >
            <DropdownMenuItem
              className="flex items-center justify-between py-2.5 px-2.5 cursor-pointer rounded-md"
              onSelect={() => onSelect(lang)}
              disabled={isPending}
            >
              <div className="flex items-center gap-2.5">
                <motion.div
                  className="relative h-5 w-7 overflow-hidden rounded-sm shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={lang.name}
                    width={28}
                    height={20}
                    className="object-cover"
                    priority={lang.code === currentLang.code}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {lang.name}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {lang.nativeName}
                  </span>
                </div>
              </div>
              {currentLang.code === lang.code && (
                <motion.div layoutId="activeIndicator">
                  <Check className="h-4 w-4 text-primary" />
                </motion.div>
              )}
            </DropdownMenuItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </DropdownMenuContent>
  );
}
