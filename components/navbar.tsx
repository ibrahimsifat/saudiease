"use client";

import SearchDialog from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/data/company-info";
import { services } from "@/data/services";
import { useMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("navigation");
  const common = useTranslations("common");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle dropdown hover
  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Group services by category
  const serviceCategories = services.reduce((acc, service) => {
    const category = service.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  // Format category names
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Navbar links with dropdown menus
  const navLinks = [
    {
      name: t("home"),
      href: "/",
      hasDropdown: false,
    },
    {
      name: t("services"),
      href: "/services",
      hasDropdown: true,
      dropdownId: "services",
      dropdownContent: (
        <div className="p-6 w-full">
          <div className="mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-semibold text-primary">
              {t("services")}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {t("servicesDropdownDescription", {
                defaultMessage:
                  "Comprehensive digital solutions for Saudi businesses",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {Object.entries(serviceCategories).map(
              ([category, categoryServices]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {formatCategoryName(category)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categoryServices.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className={cn(
                          "group flex items-center bg-gray-50 dark:bg-gray-800/50 hover:bg-primary/5 dark:hover:bg-primary/10 px-3 py-2 rounded-md transition-colors",
                          isRTL ? "flex-row-reverse text-right" : "text-left"
                        )}
                      >
                        <div className="flex-shrink-0 h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {<service.icon className="h-4 w-4 text-primary" />}
                        </div>
                        <div className={isRTL ? "mr-3" : "ml-3"}>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
                            {service.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("needCustomSolution", {
                defaultMessage: "Need a custom solution?",
              })}
            </p>
            <Button size="sm" variant="outline" asChild className="text-xs">
              <Link href="/contact">{t("contact")}</Link>
            </Button>
          </div>
        </div>
      ),
    },
    {
      name: t("about"),
      href: "/about",
      hasDropdown: true,
      dropdownId: "about",
      dropdownContent: (
        <div className="grid grid-cols-2 gap-4 p-4">
          <Link
            href="/about#our-story"
            className={cn(
              "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
              isRTL ? "flex-row-reverse text-right" : "text-left"
            )}
          >
            <div className={isRTL ? "mr-0" : "ml-0"}>
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {t("ourStory", {
                  defaultMessage: "Our Story",
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("ourStoryDescription", {
                  defaultMessage: "Learn about our journey and mission",
                })}
              </p>
            </div>
          </Link>
          <Link
            href="/about#team"
            className={cn(
              "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
              isRTL ? "flex-row-reverse text-right" : "text-left"
            )}
          >
            <div className={isRTL ? "mr-0" : "ml-0"}>
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {t("ourTeam", {
                  defaultMessage: "Our Team",
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("ourTeamDescription", {
                  defaultMessage: "Meet our expert professionals",
                })}
              </p>
            </div>
          </Link>
          <Link
            href="/about#values"
            className={cn(
              "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
              isRTL ? "flex-row-reverse text-right" : "text-left"
            )}
          >
            <div className={isRTL ? "mr-0" : "ml-0"}>
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {t("coreValues", {
                  defaultMessage: "Core Values",
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("coreValuesDescription", {
                  defaultMessage: "What drives our business",
                })}
              </p>
            </div>
          </Link>
          <Link
            href="/about#achievements"
            className={cn(
              "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
              isRTL ? "flex-row-reverse text-right" : "text-left"
            )}
          >
            <div className={isRTL ? "mr-0" : "ml-0"}>
              <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                {t("achievements", {
                  defaultMessage: "Achievements",
                })}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {t("achievementsDescription", {
                  defaultMessage: "Our awards and recognition",
                })}
              </p>
            </div>
          </Link>
        </div>
      ),
    },
    {
      name: t("portfolio"),
      href: "/portfolio",
      hasDropdown: false,
    },
    {
      name: t("blog"),
      href: "/blog",
      hasDropdown: false,
    },
    {
      name: t("contact"),
      href: "/contact",
      hasDropdown: false,
    },
    {
      name: t("faq", {
        defaultMessage: "FAQ",
      }),
      href: "/faq",
      hasDropdown: false,
    },
  ];

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex justify-between items-center",
              isRTL && "flex-row-reverse"
            )}
          >
            <div
              className={cn(
                "flex items-center space-x-4 text-sm",
                isRTL && "flex-row-reverse space-x-reverse"
              )}
            >
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className={cn(
                  "flex items-center hover:text-white/80",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Phone className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} />
                <span>{companyInfo.contact.phone}</span>
              </a>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className={cn(
                  "flex items-center hover:text-white/80",
                  isRTL && "flex-row-reverse"
                )}
              >
                <Mail className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} />
                <span>{companyInfo.contact.email}</span>
              </a>
              <div
                className={cn("flex items-center", isRTL && "flex-row-reverse")}
              >
                <MapPin className={cn("h-3 w-3", isRTL ? "ml-1" : "mr-1")} />
                <span>
                  {companyInfo.contact.address.city},{" "}
                  {companyInfo.contact.address.country}
                </span>
              </div>
            </div>
            <div
              className={cn(
                "flex items-center space-x-4",
                isRTL && "flex-row-reverse space-x-reverse"
              )}
            >
              <div
                className={cn(
                  "flex items-center space-x-2",
                  isRTL && "flex-row-reverse space-x-reverse"
                )}
              >
                {companyInfo.contact.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div
                className={cn(
                  "flex items-center space-x-2 border-l border-white/20 pl-4",
                  isRTL &&
                    "flex-row-reverse space-x-reverse border-l-0 border-r border-white/20 pl-0 pr-4"
                )}
              >
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2 border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "flex justify-between items-center",
              isRTL && "flex-row-reverse"
            )}
          >
            {/* Logo */}
            <Link href="/" className="relative z-10 group">
              <div className="relative h-10 w-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={companyInfo.logo || "/placeholder.svg"}
                  alt={companyInfo.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className={cn(
                "hidden lg:flex items-center space-x-4",
                isRTL && "flex-row-reverse space-x-reverse"
              )}
            >
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && handleDropdownEnter(link.dropdownId)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group flex items-center",
                      pathname === link.href
                        ? "text-primary bg-primary/5 dark:bg-primary/10"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary dark:hover:bg-gray-800/60"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform group-hover:rotate-180",
                          isRTL ? "mr-1" : "ml-1"
                        )}
                      />
                    )}

                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform",
                        isRTL ? "origin-right" : "origin-left"
                      )}
                    ></span>
                  </Link>

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.dropdownId && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "absolute mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50",
                          link.dropdownId === "services"
                            ? "w-screen max-w-5xl"
                            : "w-screen max-w-md"
                        )}
                        style={{
                          left:
                            link.dropdownId === "services" && !isRTL
                              ? "-200px"
                              : undefined,
                          right:
                            link.dropdownId === "services" && isRTL
                              ? "-200px"
                              : undefined,
                        }}
                      >
                        {link.dropdownContent}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div
              className={cn(
                "hidden lg:flex items-center space-x-4",
                isRTL && "flex-row-reverse space-x-reverse"
              )}
            >
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-200 dark:hover:text-primary dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700 mx-2"
                )}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className={cn("h-5 w-5")} />
                <span>{t("search", { defaultMessage: "Search" })}</span>
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <Link href="/contact">{t("getQuote")}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div
              className={cn(
                "flex lg:hidden items-center space-x-4",
                isRTL && "flex-row-reverse space-x-reverse"
              )}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary border-gray-200 dark:border-gray-700"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary border-gray-200 dark:border-gray-700"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white dark:bg-gray-900 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-base font-medium",
                        pathname === link.href
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary",
                        isRTL && "text-right"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-between",
                          isRTL && "flex-row-reverse"
                        )}
                      >
                        <span>{link.name}</span>
                        {link.hasDropdown && (
                          <ChevronRight
                            className={cn("h-4 w-4", isRTL && "rotate-180")}
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    asChild
                  >
                    <Link href="/contact">{t("getQuote")}</Link>
                  </Button>
                </div>
                <div
                  className={cn(
                    "flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center space-x-4",
                      isRTL && "flex-row-reverse space-x-reverse"
                    )}
                  >
                    {companyInfo.contact.socialMedia
                      .slice(0, 4)
                      .map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                          aria-label={social.platform}
                        >
                          {social.icon}
                        </a>
                      ))}
                  </div>
                  <div
                    className={cn(
                      "flex items-center space-x-4",
                      isRTL && "flex-row-reverse space-x-reverse"
                    )}
                  >
                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      aria-label="Toggle theme"
                    >
                      {theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                      ) : (
                        <Moon className="h-5 w-5" />
                      )}
                    </button>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800 z-40">
          <div className="grid grid-cols-5 h-16">
            <Link
              href="/"
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium",
                pathname === "/"
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>{t("home")}</span>
            </Link>
            <Link
              href="/services"
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium",
                pathname === "/services"
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t("services")}</span>
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium",
                pathname === "/portfolio"
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{t("portfolio")}</span>
            </Link>
            <Link
              href="/blog"
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium",
                pathname === "/blog"
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>{t("blog")}</span>
            </Link>
            <Link
              href="/contact"
              className={cn(
                "flex flex-col items-center justify-center text-xs font-medium",
                pathname === "/contact"
                  ? "text-primary"
                  : "text-gray-500 dark:text-gray-400"
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t("contact")}</span>
            </Link>
          </div>
        </div>
      )}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
