/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let requestCount = 0;

// kind of Global middleware
// runs on all ROUTES 
export function middleware(request: NextRequest) {

  // weired if else way
  console.log("path==>", request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }


  requestCount++;
  console.log("number of requests is " + requestCount);
  const res = NextResponse.next();
  console.log("exit req count", requestCount);
  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}

