import type { APIRoute } from "astro";
import { brand } from "../data/seo";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("https://www.prysmnexus.com")).origin;
  const isProd = import.meta.env.PROD && origin === new URL(brand.domain).origin;

  // In production, allow all search engines and AI answer engines
  const body = isProd
    ? [
        "User-agent: *",
        "Allow: /",
        "",
        "# Search Engine Crawlers",
        "User-agent: Googlebot",
        "Allow: /",
        "",
        "User-agent: Googlebot-Image",
        "Allow: /",
        "",
        "User-agent: Bingbot",
        "Allow: /",
        "",
        "User-agent: Applebot",
        "Allow: /",
        "",
        "# AI Answer Engines & Overviews (AEO)",
        "User-agent: Google-Extended",
        "Allow: /",
        "",
        "User-agent: GPTBot",
        "Allow: /",
        "",
        "User-agent: OAI-SearchBot",
        "Allow: /",
        "",
        "User-agent: PerplexityBot",
        "Allow: /",
        "",
        "User-agent: ClaudeBot",
        "Allow: /",
        "",
        "User-agent: Applebot-Extended",
        "Allow: /",
        "",
        "User-agent: Bytespider",
        "Allow: /",
        "",
        `Sitemap: ${origin}/sitemap-index.xml`,
        "",
      ]
    : [
        "User-agent: *",
        "Disallow: /",
        "",
      ];

  return new Response(body.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
