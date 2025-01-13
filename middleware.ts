import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Return early if it's not an API route
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Prevent static generation of API routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
}