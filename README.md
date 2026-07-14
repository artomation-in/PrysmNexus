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

## Search configuration

The site includes canonical metadata, JSON-LD, XML sitemaps, `robots.txt`, `llms.txt`, and `llms-full.txt`. Before a future production build, set `SITE_URL` to the public origin so generated canonical and sitemap URLs use the real domain.

```powershell
$env:SITE_URL="https://example.com"
npm run build
```

The site is currently intended for local preview only.
