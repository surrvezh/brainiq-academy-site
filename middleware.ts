import { NextRequest, NextResponse } from 'next/server';

const MOBILE_RE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get('user-agent') ?? '';
  const isMobile = MOBILE_RE.test(ua);

  if (pathname === '/' && isMobile) {
    return NextResponse.redirect(new URL('/m', request.url));
  }

  if (pathname === '/m' && !isMobile) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/m'],
};
