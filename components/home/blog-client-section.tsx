"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const BlogSection = dynamic(() => import("@/components/home/blog-section"), {
  loading: () => <LoadingFallback height="400px" />,
  ssr: false,
});

export default function ClientBlogSection({ locale }: { locale: string }) {
  return <BlogSection locale={locale} />;
}
