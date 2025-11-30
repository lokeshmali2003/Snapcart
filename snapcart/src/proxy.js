import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  // Public routes → No auth required
  const publicRoutes = [
    "/login",
    "/register",
    "/api/auth",
    "/favicon.ico",
    "/_next"
  ];

  // Agar public route hai → allow request
  if (publicRoutes.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Token check
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log("Token from proxy:", token);
  console.log("Request URL:", req.url);

  // Agar token nahi mila → redirect to login
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url); // redirect back after login
    return NextResponse.redirect(loginUrl);
  }

  // Authenticated → allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api/auth|favicon.ico|_next/static|_next/image).*)",
  ],
};