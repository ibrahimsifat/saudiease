"use client";

import dynamic from "next/dynamic";
import { LoadingFallback } from "../ui/loading-fallback";

const LatestTechnologies = dynamic(
  () => import("@/components/home/latest-technologies"),
  {
    loading: () => <LoadingFallback height="400px" />,
    ssr: false,
  }
);

export default function ClientLatestTechnologies() {
  return <LatestTechnologies />;
}
