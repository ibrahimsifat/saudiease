"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), {
  loading: () => <LoadingFallback height="400px" />,
  ssr: false,
});

export default function ClientWhyChooseUs() {
  return <WhyChooseUs />;
}
