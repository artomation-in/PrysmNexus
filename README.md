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

## Production and Cloudflare Pages

The site includes canonical metadata, JSON-LD, XML sitemaps, `robots.txt`, `llms.txt`, and `llms-full.txt`. Production builds use `https://www.prysmnexus.com` as the public origin.

Cloudflare Pages must use:

- Build command: `pnpm run build`
- Build output directory: `dist`
- Node.js version: `22.13.0` or newer
- Root directory: `/`

For a Pages project using Git integration, leave the Cloudflare **Deploy command** empty. Cloudflare publishes the configured `dist` output automatically after the build.

If the Cloudflare workflow requires an explicit deploy command, use:

```bash
npx wrangler pages deploy dist --project-name prysmnexus
```

Do not use `npx wrangler deploy`. That command deploys a Worker and fails because this repository is configured as a Cloudflare Pages project.

Deploy the generated `dist` directory. Do not deploy the development server output: it contains Astro's development-only `/_image/` endpoint, which is not available as a static Cloudflare Pages route.

The post-build verification rejects output containing `/_image/`, localhost canonical URLs, or production `noindex` metadata.
