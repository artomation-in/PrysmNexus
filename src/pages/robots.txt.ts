import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("http://localhost:4174")).origin;
  const production = import.meta.env.PROD && origin === "https://prysmnexus.com";
  const body = production ? [
    "User-agent: *", "Allow: /", "",
    "User-agent: OAI-SearchBot", "Allow: /", "",
    "User-agent: PerplexityBot", "Allow: /", "",
    "User-agent: ClaudeBot", "Allow: /", "",
    "User-agent: GPTBot", "Disallow: /", "",
    `Sitemap: ${origin}/sitemap-index.xml`, "",
  ] : ["User-agent: *", "Disallow: /", ""];
  return new Response(body.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
