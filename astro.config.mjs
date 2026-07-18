import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://www.prysmnexus.com",
  output: "static",
  trailingSlash: "always",

  integrations: [sitemap()],

  // ✅ Use Sharp to generate optimized images at build time
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  build: {
    inlineStylesheets: "auto",
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },
});
