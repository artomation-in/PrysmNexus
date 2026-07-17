import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4174",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],

  build: {
    inlineStylesheets: "auto",
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },

  adapter: cloudflare(),
});