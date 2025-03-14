"use client";

import { Loader2 } from "lucide-react";

export function LoadingFallback({ height }: { height?: string }) {
  return (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="text-sm text-gray-500">Loading content...</p>
      </div>
    </div>
  );
}
