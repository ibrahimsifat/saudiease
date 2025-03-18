import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
export default function middleware(req: NextRequest) {
  // Early return for static files and API routes
  if (req.nextUrl.pathname.includes(".")) {
    return NextResponse.next();
  }
  return intlMiddleware(req);
}

// Optimize matcher pattern
export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    "/((?!_next|api|.*\\..*).*)",
  ],
};
