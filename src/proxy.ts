import { NextResponse, type NextRequest } from "next/server";

const protectedPrefixes = [
  "/dashboard",
  "/lesson",
  "/library",
  "/word",
  "/vocabulary",
  "/profile",
  "/settings",
  "/voices",
  "/achievement",
  "/streak",
];

function hasBetterAuthCookie(request: NextRequest) {
  return request.cookies
    .getAll()
    .some((cookie) => cookie.name.includes("better-auth") && cookie.name.includes("session"));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedPrefixes.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  if (!isProtected || hasBetterAuthCookie(request)) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("next", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/lesson/:path*",
    "/library/:path*",
    "/word/:path*",
    "/vocabulary/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/voices/:path*",
    "/achievement/:path*",
    "/streak/:path*",
  ],
};
