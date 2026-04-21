import { defineMiddleware } from 'astro:middleware';

const AUTH_TOKEN = 'peanuts';

export const onRequest = defineMiddleware(({ request, redirect }, next) => {
  const { pathname } = new URL(request.url);

  const bypass =
    pathname.startsWith('/_astro/') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname === '/login';

  if (bypass) return next();

  const cookies = request.headers.get('cookie') ?? '';
  const authenticated = cookies
    .split(';')
    .some((c) => c.trim() === `site-auth=${AUTH_TOKEN}`);

  if (!authenticated) return redirect('/login');

  return next();
});
