// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = request.cookies.get('jwtToken')?.value;

  if (
    isAuthenticated &&
    (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// ✅ Add this
export const config = {
  matcher: ['/login', '/register'],
};