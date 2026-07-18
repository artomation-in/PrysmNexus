import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const distDir = fileURLToPath(new URL("../dist/", import.meta.url));
const failures = [];

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (extname(entry.name) === ".html") files.push(path);
  }

  return files;
}

for (const file of await collectHtml(distDir)) {
  const html = await readFile(file, "utf8");
  if (html.includes("/_image/")) failures.push(`${file}: development image endpoint`);
  if (html.includes("localhost:4174")) failures.push(`${file}: localhost production URL`);
  if (!file.endsWith("404.html") && html.includes('content="noindex,nofollow"')) {
    failures.push(`${file}: production noindex metadata`);
  }
}

const robotsPath = join(distDir, "robots.txt");
const robotsTxt = await readFile(robotsPath, "utf8").catch(() => "");
if (/User-agent:\s*\*\s*\n\s*Disallow:\s*\/\s*(\n|$)/.test(robotsTxt)) {
  failures.push(`${robotsPath}: robots.txt blocks all crawlers in production`);
}

if (failures.length) {
  throw new Error(`Unsafe production output:\n${failures.join("\n")}`);
}

console.log("Production output verified: static images and public metadata are deployment-safe.");
