"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Locale } from "@/config/i18n";
import { getFAQCategories, getFAQs } from "@/data/faq/index";
import { motion } from "framer-motion";
import { Filter, Search, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

// Import the FAQ data

type FAQPageClientProps = {
  locale: Locale;
};

export default function FAQPageClient({ locale }: FAQPageClientProps) {
  const t = useTranslations("faqPage");
  const isRTL = locale === "ar";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Get localized FAQs and categories
  const faqs = useMemo(() => getFAQs(locale), [locale]);
  const faqCategories = useMemo(() => getFAQCategories(locale), [locale]);

  // Filter FAQs based on search query and selected category
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || faq.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, faqs]);

  // Group FAQs by category for display
  const faqsByCategory = useMemo(() => {
    const grouped: Record<string, typeof faqs> = {};

    filteredFaqs.forEach((faq) => {
      if (!grouped[faq.category]) {
        grouped[faq.category] = [];
      }
      grouped[faq.category].push(faq);
    });

    return grouped;
  }, [filteredFaqs]);

  // Reset expanded items when filters change
  useEffect(() => {
    setExpandedItems([]);
  }, [searchQuery, selectedCategory]);

  // Handle accordion toggle
  const toggleAccordion = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
  };

  return (
    <div
      className="container mx-auto px-4 py-12 md:py-16 lg:py-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t("title")}
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          {t("description")}
        </p>
      </motion.div>

      {/* Search and Filter Section */}
      <div className="mb-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search
              className={`absolute ${
                isRTL ? "right-3" : "left-3"
              } top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4`}
            />
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={isRTL ? "pr-10" : "pl-10"}
            />
          </div>
          <div className="flex gap-2">
            {selectedCategory && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="flex items-center gap-1"
              >
                <X className="h-4 w-4" /> {t("clearFilters")}
              </Button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer text-sm py-1.5"
            onClick={() => setSelectedCategory(null)}
          >
            {t("allCategories")}
          </Badge>
          {faqCategories.map((category: string) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-4">
          {t("showing")} {filteredFaqs.length} {t("of")} {faqs.length}{" "}
          {t("questionsA")}
          {selectedCategory && (
            <span>
              {t("in")} {selectedCategory}
            </span>
          )}
          {searchQuery && (
            <span>
              {t("matching")} &quot;{searchQuery}&quot;
            </span>
          )}
        </p>
      </div>

      {/* FAQ Content */}
      {filteredFaqs.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {selectedCategory === null ? (
            // Display FAQs grouped by category when no category is selected
            Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
              <div key={category} className="mb-10">
                <h2
                  className={`text-2xl font-bold mb-4 flex items-center ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="bg-primary/10 text-primary p-2 rounded-full mx-3">
                    <Filter className="h-5 w-5" />
                  </span>
                  {category}
                </h2>
                <Accordion
                  type="multiple"
                  value={expandedItems}
                  className="border rounded-lg"
                >
                  {categoryFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger
                        onClick={() => toggleAccordion(faq.id)}
                        className={`px-4 hover:no-underline hover:bg-muted/50 data-[state=open]:bg-muted/50 ${
                          isRTL ? "text-right" : "text-left"
                        }`}
                      >
                        <span>{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2">
                        <div
                          className={`prose prose-sm max-w-none dark:prose-invert ${
                            isRTL ? "text-right" : "text-left"
                          }`}
                        >
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          ) : (
            // Display flat list when a category is selected
            <Accordion
              type="multiple"
              value={expandedItems}
              className="border rounded-lg"
            >
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger
                    onClick={() => toggleAccordion(faq.id)}
                    className={`px-4 hover:no-underline hover:bg-muted/50 data-[state=open]:bg-muted/50 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <span>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2">
                    <div
                      className={`prose prose-sm max-w-none dark:prose-invert ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      ) : (
        // No results found
        <div className="text-center py-12 max-w-md mx-auto">
          <div className="bg-muted rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t("noResults")}</h3>
          <p className="text-muted-foreground mb-6">
            {t("noResultsDescription")}
          </p>
          <Button onClick={clearFilters}>{t("clearFilters")}</Button>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-16 bg-muted rounded-xl p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{t("stillHaveQuestions")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("contactSupportDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href={`/${locale}/contact`}>{t("contactSupport")}</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+966558845503">{t("callUs")}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
