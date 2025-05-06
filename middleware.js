import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = request.cookies.get('jwtToken')?.value;

  // If user is authenticated and tries to visit /login or /register, redirect them
  if (isAuthenticated && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register')) {
    return NextResponse.redirect(new URL('/my-courses', request.url));
  }

  return NextResponse.next();
}