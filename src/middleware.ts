// import { auth } from '@/auth';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
