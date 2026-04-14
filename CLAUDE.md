# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **Ashaad Intelligent Technologies** — a company providing solar systems, IT protocols, networking, and CCTV products in Zimbabwe, Mozambique, and South Africa. It is built with Astro and deployed to Cloudflare Workers.

## Commands

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Preview production build locally via Wrangler
pnpm preview

# Deploy to Cloudflare Workers
pnpm deploy

# Generate Cloudflare Workers TypeScript types
pnpm generate-types
```

The package manager is **pnpm**. Do not use npm or yarn.

## Architecture

**Framework:** Astro 6 with SSR via `@astrojs/cloudflare` adapter  
**Styling:** Tailwind CSS v4 (imported via `@import "tailwindcss"` in `src/styles/global.css`) plus hand-written scoped CSS in component `<style>` blocks  
**Icons:** `@lucide/astro` (statically imported per component; no dynamic icon loading)  
**Deployment:** Cloudflare Workers — the `wrangler.jsonc` config points `main` at the Astro cloudflare adapter entrypoint and serves static assets from the `dist/` directory via an `ASSETS` binding

**Page structure:**
- `src/layouts/Layout.astro` — shared shell with fixed header, mobile nav, footer, and floating WhatsApp button. Accepts `title` and `description` props.
- `src/pages/` — four routes: `index.astro`, `about.astro`, `services.astro`, `contact.astro`
- `src/components/ui/MinimalistHero.astro` — reusable hero component accepting props for text, image, nav links, and social icons
- `src/styles/global.css` — CSS custom properties (design tokens), base resets, and utility classes (`.container`, `.section-label`, `.display-heading`)

**Design tokens** (defined in `global.css` `:root`):

| Variable | Value | Purpose |
|---|---|---|
| `--bg` | `#08080f` | Page background |
| `--accent` | `#00d4b4` | Teal accent / interactive |
| `--cta` | `#f05828` | Orange CTA buttons |
| `--text` | `#ece9e2` | Primary text |
| `--text-muted` | `#606d7e` | Secondary text |

**Typography:** Google Fonts — `Syne` (display headings), `DM Sans` (body), `DM Mono` (labels, nav, code)

## Cloudflare Workers Notes

- TypeScript types for Cloudflare bindings live in `worker-configuration.d.ts` (auto-generated via `pnpm generate-types`)
- The `compatibility_flag` `global_fetch_strictly_public` is set — all `fetch()` calls from Workers must target public URLs
- Observability is enabled in `wrangler.jsonc`
