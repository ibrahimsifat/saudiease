"use client";

import { trackEvent } from "@/lib/track";
import { useEffect } from "react";

/**
 * One delegated listener for every contact link on the site:
 * WhatsApp → whatsapp_click, tel: → phone_click, mailto: → email_click.
 * Each event carries page_path, the link and where on the page it sits.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const placement = link.dataset.cta || link.closest("[data-cta-zone]")?.getAttribute("data-cta-zone") || "unknown";

      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        trackEvent("whatsapp_click", { link_url: href.split("?")[0], placement });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, placement });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_url: href, placement });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
