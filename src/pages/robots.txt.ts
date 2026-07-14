import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL("http://localhost:4174")).origin;
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "User-agent: GPTBot",
    "Allow: /",
    "",
    "User-agent: OAI-SearchBot",
    "Allow: /",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "",
    `Sitemap: ${origin}/sitemap-index.xml`,
    `Host: ${origin}`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
