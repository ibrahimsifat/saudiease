"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const ProcessSection = dynamic(
  () => import("@/components/home/process-section"),
  {
    loading: () => <LoadingFallback height="400px" />,
    ssr: false,
  }
);

export default function ClientProcessSection() {
  return <ProcessSection />;
}
