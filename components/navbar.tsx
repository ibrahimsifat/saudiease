"use client";

import { Button } from "@/components/ui/button";
import { CONSTANT } from "@/config/constants";
import { Locale } from "@/config/i18n";
import { getCompanyInfo } from "@/data/company-info/index";
import { getServices } from "@/data/services/index";
import { useMobile } from "@/hooks/use-mobile";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  ImageIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import LanguageSwitcher from "./language-switcher";

const SearchDialog = dynamic(() => import("@/components/search-dialog"), {
  ssr: false,
});

const Navbar = () => {
  const t = useTranslations("navigation");
  const common = useTranslations("common");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const services = getServices(locale as Locale);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMobile();
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const companyInfo = getCompanyInfo(locale as Locale);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleDropdownEnter = useCallback((dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  const serviceCategories = useCallback(() => {
    return services.reduce((acc, service) => {
      const category = service.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(service);
      return acc;
    }, {} as Record<string, typeof services>);
  }, [services]);

  const formatCategoryName = useCallback((category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, []);

  const navLinks = useCallback(
    () => [
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
              {Object.entries(serviceCategories()).map(
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
              href={`/industries`}
              className={cn(
                "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              )}
            >
              <div className={isRTL ? "mr-0" : "ml-0"}>
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {t("industries", {
                    defaultMessage: "Our Story",
                  })}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {t("industriesDescription", {
                    defaultMessage: "Learn about our journey and mission",
                  })}
                </p>
              </div>
            </Link>
            <Link
              href={`/features`}
              className={cn(
                "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
                isRTL ? "flex-row-reverse text-right" : "text-left"
              )}
            >
              <div className={isRTL ? "mr-0" : "ml-0"}>
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {t("features", {
                    defaultMessage: "Our Team",
                  })}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {t("featuresDescription", {
                    defaultMessage: "Meet our expert professionals",
                  })}
                </p>
              </div>
            </Link>
            <Link
              href={`/faq`}
              className={cn(
                "flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group",
                isRTL ? "flex-row-reverse text-right" : "text-left"
              )}
            >
              <div className={isRTL ? "mr-0" : "ml-0"}>
                <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                  {t("faq", {
                    defaultMessage: "Core Values",
                  })}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {t("faqDescription", {
                    defaultMessage: "What drives our business",
                  })}
                </p>
              </div>
            </Link>
          </div>
        ),
      },
      {
        name: t("contact"),
        href: "/contact",
        hasDropdown: false,
      },
      // {
      //   name: t("faq", {
      //     defaultMessage: "FAQ",
      //   }),
      //   href: "/faq",
      //   hasDropdown: false,
      // },
    ],
    [t, serviceCategories, formatCategoryName, isRTL]
  );

  return (
    <>
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
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-150",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-2 border-b border-gray-200/50 dark:border-gray-800/50"
            : "bg-white py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <div className={"flex justify-between items-center"}>
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
            <nav className={cn("hidden lg:flex items-center space-x-4")}>
              {navLinks().map((link) => (
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
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform",
                        isRTL ? "origin-right" : "origin-left"
                      )}
                    ></span>
                  </Link>
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
                <Link href="/estimator">{t("getQuote")}</Link>
              </Button>
            </div>
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
                {navLinks().map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href as string}
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
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-40 pb-safe">
          <div className="mx-4 mb-2 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-gray-800/50 overflow-hidden border-2 border-primary/20">
            <div className="grid grid-cols-4 h-16">
              <NavItem
                href="/"
                isActive={pathname === `/${locale}`}
                icon={
                  <Image
                    src={CONSTANT.images.iconLogoSVG}
                    width={26}
                    height={26}
                    alt="Home"
                  />
                }
                label={t("home")}
              />
              <NavItem
                href="/services"
                isActive={pathname.startsWith(`/${locale}/services`)}
                icon={<Briefcase className="h-5 w-5" />}
                label={t("services")}
              />
              <NavItem
                href="/portfolio"
                isActive={pathname.startsWith(`/${locale}/portfolio`)}
                icon={<ImageIcon className="h-5 w-5" />}
                label={t("portfolio")}
              />

              <NavItem
                href={`/contact`}
                isActive={pathname.startsWith(`/${locale}/contact`)}
                icon={<Mail className="h-5 w-5 font-bold" />}
                label={t("contact")}
              />
            </div>
          </div>
        </div>
      )}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default memo(Navbar);
const NavItem = ({
  href,
  isActive,
  icon,
  label,
}: {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex flex-col items-center justify-center text-xs font-medium transition-all duration-200",
        isActive
          ? "text-primary"
          : "text-gray-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
      )}
    >
      <div className="relative">
        {/* Icon with 3D effect when active */}
        <div
          className={cn(
            "relative flex items-center justify-center mb-1 transition-all duration-200",
            isActive ? "transform -translate-y-1 scale-110" : ""
          )}
        >
          {/* Shadow for 3D effect */}
          {isActive && (
            <div className="absolute -bottom-1 w-full h-1 bg-primary/20 blur-md rounded-full" />
          )}

          {/* The icon */}
          <div
            className={cn(
              "transition-all duration-200",
              isActive ? "text-primary" : "text-gray-500 dark:text-gray-400"
            )}
          >
            {icon}
          </div>
        </div>

        {/* Label */}
        <span
          className={cn(
            "transition-all duration-200",
            isActive ? "font-bold" : ""
          )}
        >
          {label}
        </span>

        {/* Dot indicator for active item */}
        {isActive && (
          <motion.div
            layoutId="activeNavIndicator"
            className="absolute -bottom-1 w-1 h-1 rounded-full bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>
    </Link>
  );
};
