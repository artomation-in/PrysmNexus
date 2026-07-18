# PrysmNexus

An Astro 7 marketing site for PrysmNexus, built as static HTML for fast delivery and strong search-engine and AI-crawler discoverability.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

The local preview runs at `http://localhost:4174/`.

## Validation

```bash
pnpm run check
pnpm run build
```

## Production and Cloudflare Workers

The site includes canonical metadata, JSON-LD, XML sitemaps, `robots.txt`, `llms.txt`, and `llms-full.txt`. Production builds use `https://www.prysmnexus.com` as the public origin.

Cloudflare Workers Builds must use:

- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js version: `22.13.0` or newer
- Root directory: `/`
- Deploy command: `npx wrangler deploy`

`wrangler.jsonc` publishes `dist` through Cloudflare Workers Static Assets. Astro's generated folder routes and custom `404.html` are preserved with automatic trailing-slash handling.

To deploy the already-built site manually, use:

```bash
npx wrangler deploy --config wrangler.jsonc
```

Deploy the generated `dist` directory. Do not deploy the development server output: it contains Astro's development-only `/_image/` endpoint, which is not available as a static Cloudflare Pages route.

The post-build verification rejects output containing `/_image/`, localhost canonical URLs, or production `noindex` metadata.
