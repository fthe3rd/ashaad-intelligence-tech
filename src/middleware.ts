import { defineMiddleware } from 'astro:middleware';

const AUTH_TOKEN = 'ait-auth-v1';
const AUTH_COOKIE = 'site-auth';

const BYPASS_PREFIXES = ['/_astro/', '/favicon', '/robots'];

export const onRequest = defineMiddleware(({ request }, next) => {
  const { pathname } = new URL(request.url);

  if (
    pathname === '/login' ||
    BYPASS_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return next();
  }

  const cookies = request.headers.get('cookie') ?? '';
  const authCookie = cookies
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${AUTH_COOKIE}=`));

  const token = authCookie?.split('=')[1];

  if (token !== AUTH_TOKEN) {
    return Response.redirect(new URL('/login', request.url), 302);
  }

  return next();
});
