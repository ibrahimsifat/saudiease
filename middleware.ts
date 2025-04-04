import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { CONSTANT } from "./config/constants";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
export default function middleware(req: NextRequest) {
  // Force default locale for root path
  if (req.nextUrl.pathname === "/") {
    const locale = CONSTANT.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, req.url));
  }
  // Early return for static files and API routes
  if (req.nextUrl.pathname.includes(".")) {
    return NextResponse.next();
  }
  return intlMiddleware(req);
}

// Fixed matcher pattern
export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next/|api/|.*\\.).*)",
  ],
};
