# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

PrysmNexus marketing site: Astro 7, static output, deployed to Cloudflare Workers (static assets). Built for SEO/AI-crawler discoverability — every page ships canonical metadata, JSON-LD, and is server-rendered to plain HTML (no client framework, no islands).

## Commands

```bash
pnpm install --frozen-lockfile
pnpm run dev      # astro dev on http://127.0.0.1:4174
pnpm run check    # astro check (type-checks .astro files)
pnpm run build    # astro build -> dist/, then runs scripts/verify-production.mjs (postbuild)
pnpm run preview  # astro preview on http://127.0.0.1:4174
```

There is no test suite. Validate changes with `pnpm run check` and `pnpm run build`.

Package manager is pnpm (10.11.1, pinned via `packageManager`); Node >=22.13.0.

### Deployment

`wrangler.jsonc` serves `dist/` via Cloudflare Workers Static Assets.

```bash
npx wrangler deploy --config wrangler.jsonc   # deploy already-built dist/
pnpm run deploy:cloudflare                    # same, via package script
```

Cloudflare Workers Build settings: build command `pnpm run build`, output dir `dist`, Node >=22.13.0, root `/`, deploy command `npx wrangler deploy`.

Never deploy the dev server output — it contains Astro's dev-only `/_image/` endpoint, which isn't a valid static route in production.

## Architecture

**Content-as-data pattern.** Nearly all page copy lives in [src/data/seo.ts](src/data/seo.ts), not in `.astro` templates. `services`, `caseStudies`, and `insights` are typed arrays of content objects (deliverables, FAQs, comparison tables, process steps, etc.). Pages under `src/pages/services/[slug].astro`, `src/pages/case-studies/[slug].astro`, and `src/pages/insights/[slug].astro` use `getStaticPaths()` to map each array entry to a static route, and are otherwise pure rendering — read `seo.ts` first when asked to add or edit content on these pages, not the `.astro` files.

`seo.ts` also exports schema-builder helpers (`breadcrumbSchema`, `faqSchema`, `serviceBySlug`) used to assemble each page's JSON-LD.

**Layout chain**: `BaseLayout.astro` (doc shell — meta tags, canonical URL, OG/Twitter tags, JSON-LD injection, GA4 consent script, view-transition CSS) wraps `SeoLayout.astro` (site header/nav/hero/footer chrome for content pages) wraps the page-specific `<slot />` content. Plain top-level pages (`index.astro`, `about.astro`, `contact.astro`) use `BaseLayout` directly.

**Environment-driven production gating.** `BaseLayout.astro` sets `robots` to `index,follow,...` only when `canonical.origin === brand.domain` (i.e. `SITE_URL` matches the production domain in `src/data/seo.ts`); every other origin (previews, localhost) gets `noindex,nofollow` automatically. `brand.domain` in `seo.ts` is the source of truth for what counts as "production."

**Postbuild safety check**: [scripts/verify-production.mjs](scripts/verify-production.mjs) scans every HTML file in `dist/` after build and fails if it finds `/_image/` references, `localhost:4174` URLs, or `noindex,nofollow` metadata (except on `404.html`). If a build fails here, check `SITE_URL` and `brand.domain` alignment before assuming a code bug.

**SEO surface files** live in `public/`: `llms.txt`, `llms-full.txt`, `humans.txt` are static; `robots.txt` is generated at `src/pages/robots.txt.ts`; the XML sitemap comes from `@astrojs/sitemap` (configured in [astro.config.mjs](astro.config.mjs)).

Images go through `astro:assets` with the Sharp service (configured in `astro.config.mjs`) — import from `src/assets/`, don't reference `public/` images for anything that needs optimization.
