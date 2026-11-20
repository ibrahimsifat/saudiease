import { Locale } from "@/config/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string; locale: Locale };
};

// Industry detail pages are switched off: the template generated invented
// case studies and certifications for every industry, and none of these
// industries has evidence in docs/seo/business-goals.md. Every
// /industries/<id> URL returns a real 404 until real industry pages exist
// (MASTER-PLAN task 3-8).
export async function generateMetadata(): Promise<Metadata> {
  return { robots: { index: false, follow: true } };
}

export default async function IndustryDetailPage(_props: Props) {
  notFound();
}
