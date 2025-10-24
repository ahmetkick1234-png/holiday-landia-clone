import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isLoginPage = request.nextUrl.pathname === "/admin/login"

  // If accessing admin routes (except login) without session, redirect to login
  if (isAdminRoute && !isLoginPage && !adminSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // If accessing login page with valid session, redirect to dashboard
  if (isLoginPage && adminSession) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
