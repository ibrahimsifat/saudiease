"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const CTASection = dynamic(() => import("@/components/home/cta-section"), {
  loading: () => <LoadingFallback height="400px" />,
  ssr: false,
});

export default function ClientCTASection() {
  return <CTASection />;
}
