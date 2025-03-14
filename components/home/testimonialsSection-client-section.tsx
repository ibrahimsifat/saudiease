"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section"),
  {
    loading: () => <LoadingFallback height="400px" />,
    ssr: false,
  }
);

export default function ClientTestimonialsSection() {
  return <TestimonialsSection />;
}
