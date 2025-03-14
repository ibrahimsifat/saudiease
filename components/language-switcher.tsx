"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeNames, locales, type Locale } from "@/config/i18n";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Function to switch the language
  const switchLanguage = (newLocale: Locale) => {
    if (locale === newLocale) return;

    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");

    // Construct the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale || ""}`;

    startTransition(() => {
      router.push(newPath);
      router.refresh();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label={t("switchLanguage")}
        >
          <Globe className="h-5 w-5" />
          {isPending && (
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary animate-pulse" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((l: any) => (
          <DropdownMenuItem
            key={l}
            onClick={() => switchLanguage(l)}
            className={locale === l ? "bg-muted font-medium" : ""}
          >
            {localeNames[l]}
            {locale === l && (
              <span className="ml-2 h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
