"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeNames, locales, type Locale } from "@/config/i18n";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo, useState, useTransition } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // Memoize the path without locale to avoid recalculating on each render
  const pathWithoutLocale = useMemo(() => {
    const segments = pathname.split("/");
    segments.splice(1, 1); // Remove the locale segment
    return segments.join("/") || "";
  }, [pathname]);

  // Memoize the flag image paths
  const flagImagePaths = useMemo(() => {
    return Object.fromEntries(
      locales.map((loc) => [loc, `/images/flags/${loc}.svg`])
    ) as Record<Locale, string>;
  }, []);

  // Optimize language switching function with useCallback
  const switchLanguage = useCallback(
    (newLocale: Locale) => {
      if (locale === newLocale) return;

      // Construct the new path with the new locale
      const newPath = `/${newLocale}${pathWithoutLocale}`;

      startTransition(() => {
        router.push(newPath);
        router.refresh();
        setIsOpen(false);
      });
    },
    [locale, pathWithoutLocale, router]
  );

  // Preload flag images for better performance
  const preloadImages = useCallback(() => {
    locales.forEach((loc) => {
      const img = new Image();
      img.src = flagImagePaths[loc];
    });
  }, [flagImagePaths]);

  // Memoize dropdown items to prevent unnecessary re-renders
  const dropdownItems = useMemo(() => {
    return locales.map((l, index) => (
      <motion.div
        key={l}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.15, delay: index * 0.05 }}
      >
        <DropdownMenuItem
          onClick={() => switchLanguage(l)}
          className={`flex items-center gap-2 py-2 ${
            locale === l ? "bg-muted font-medium" : ""
          }`}
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <Image
              src={flagImagePaths[l] || "/placeholder.svg"}
              alt={localeNames[l]}
              width={20}
              height={20}
              className="object-cover"
              priority={l === locale}
            />
          </div>
          <span>{localeNames[l]}</span>
          {locale === l && (
            <motion.span
              layoutId="activeIndicator"
              className="ml-auto h-2 w-2 rounded-full bg-primary"
            />
          )}
        </DropdownMenuItem>
      </motion.div>
    ));
  }, [locale, flagImagePaths, switchLanguage]);

  // Add keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen) return;

      const currentIndex = locales.indexOf(locale);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % locales.length;
        switchLanguage(locales[nextIndex]);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + locales.length) % locales.length;
        switchLanguage(locales[prevIndex]);
      }
    },
    [isOpen, locale, switchLanguage]
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="relative h-9 px-3 border backdrop-blur-sm transition-all hover:bg-accent/50"
          aria-label={t("switchLanguage")}
          onMouseEnter={preloadImages} // Preload images on hover
          onKeyDown={handleKeyDown}
        >
          <span className="flex items-center gap-2">
            <Image
              src={flagImagePaths[locale] || "/placeholder.svg"}
              alt={localeNames[locale]}
              width={20}
              height={30}
              className="object-cover"
              priority
            />
            <span className="font-medium text-sm hidden sm:inline-block text-black">
              {localeNames[locale]}
            </span>
            {isPending && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"
              />
            )}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[180px] backdrop-blur-lg bg-background/95 border border-border/50"
        sideOffset={5}
        onCloseAutoFocus={(e) => e.preventDefault()} // Prevent focus loss on close
      >
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          {t("switchLanguage")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <AnimatePresence>{dropdownItems}</AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
