"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const IndustriesSection = dynamic(
  () => import("@/components/home/industries-section"),
  {
    loading: () => <LoadingFallback height="400px" />,
    ssr: false,
  }
);

export default function ClientIndustriesSection() {
  return <IndustriesSection />;
}
