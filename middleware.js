import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()


  // if the user is signed in and the current path is /login redirect the user to account
  if (user && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  // if user is not signed in and the current path is /account redirect the user to log in
  if (!user && req.nextUrl.pathname === '/account') {
    return NextResponse.redirect(new URL('/login', req.url))
  }


  return res
}

export const config = {
  matcher: ['/account', '/login'],
}