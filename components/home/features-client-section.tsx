"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const FeaturesShowcase = dynamic(
  () => import("@/components/home/features-showcase"),
  {
    loading: () => <LoadingFallback height="400px" />,
    ssr: false,
  }
);

export default function ClientFeaturesSection() {
  return <FeaturesShowcase />;
}
