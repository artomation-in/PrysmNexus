# PrysmNexus

An Astro 7 marketing site for PrysmNexus, built as static HTML for fast delivery and strong search-engine and AI-crawler discoverability.

## Local development

```bash
npm install
npm run dev
```

The local preview runs at `http://localhost:4174/`.

## Validation

```bash
npm run check
npm run build
```

## Production and Cloudflare Pages

The site includes canonical metadata, JSON-LD, XML sitemaps, `robots.txt`, `llms.txt`, and `llms-full.txt`. Production builds use `https://www.prysmnexus.com` as the public origin.

Cloudflare Pages must use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.13.0` or newer

Deploy the generated `dist` directory. Do not deploy the development server output: it contains Astro's development-only `/_image/` endpoint, which is not available as a static Cloudflare Pages route.

The post-build verification rejects output containing `/_image/`, localhost canonical URLs, or production `noindex` metadata.
