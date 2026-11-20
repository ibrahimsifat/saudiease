import { WHATSAPP_NUMBER } from "@/config/site";

type GtagFn = (command: "event", name: string, params: Record<string, unknown>) => void;

/** Send a GA4 event with page context. Safe to call before gtag loads. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    ...params,
  });
}

/** wa.me link with a prefilled message that names the page it came from. */
export function whatsappLink(message: string, pagePath?: string) {
  const text = pagePath ? `${message}\n(saudiease.com${pagePath})` : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
