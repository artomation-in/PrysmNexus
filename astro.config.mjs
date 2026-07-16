import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { loadEnv } from "vite";

const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const env = loadEnv(mode, process.cwd(), "");

export default defineConfig({
  site: env.SITE_URL ?? "http://localhost:4174",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  prefetch: { prefetchAll: false, defaultStrategy: "viewport" },
});
