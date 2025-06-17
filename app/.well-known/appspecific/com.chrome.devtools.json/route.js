// app/.well-known/appspecific/com.chrome.devtools.json/route.js
import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(null, { status: 204 }); // No Content
}