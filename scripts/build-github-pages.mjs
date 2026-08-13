import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const workerPath = path.join(projectRoot, "dist/server/index.js");
const workerUrl = `${pathToFileURL(workerPath).href}?pages=${Date.now()}`;
const { default: worker } = await import(workerUrl);

const response = await worker.fetch(
  new Request("https://saad484.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Portfolio render failed with status ${response.status}`);
}

let html = await response.text();
const stylesheetHref = html.match(
  /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["'][^>]*>/i,
)?.[1];

if (!stylesheetHref) {
  throw new Error("Could not find the generated portfolio stylesheet");
}

const stylesheetPath = path.join(
  projectRoot,
  "dist/client",
  stylesheetHref.replace(/^\//, ""),
);
const stylesheet = await readFile(stylesheetPath, "utf8");
const metadata = `
<title>Saad Aiddi — Cyber Security Engineer</title>
<meta name="description" content="Cybersecurity researcher and doctoral student at UM6P focused on cyber-physical systems, industrial control systems, SCADA, intelligent intrusion detection, and photovoltaic infrastructure.">
<link rel="canonical" href="https://saad484.github.io/">
<meta property="og:title" content="Saad Aiddi — Cyber Security Engineer">
<meta property="og:description" content="Cybersecurity for systems that touch the physical world.">
<meta property="og:url" content="https://saad484.github.io/">
<meta property="og:site_name" content="Saad Aiddi">
<meta property="og:type" content="website">
<meta property="og:image" content="https://saad484.github.io/public/og.png">
<meta property="og:image:width" content="1731">
<meta property="og:image:height" content="909">
<meta property="og:image:alt" content="Saad Aiddi — Cyber Security Engineer">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Saad Aiddi — Cyber Security Engineer">
<meta name="twitter:description" content="Cybersecurity for systems that touch the physical world.">
<meta name="twitter:image" content="https://saad484.github.io/public/og.png">`;

// GitHub Pages can host the rendered portfolio, but it cannot execute the
// Cloudflare Worker used by the primary Sites deployment. Keep the generated
// HTML and CSS, remove server-navigation scripts, and point images at the
// repository's public directory.
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["'](?:modulepreload|stylesheet)["'][^>]*>/gi, "")
  .replace(/<link\b[^>]*href=["'][^"']*\/_next\/[^"']*["'][^>]*>/gi, "")
  .replace(/<style\b[^>]*data-vinext-fonts[^>]*>[\s\S]*?<\/style>/gi, "")
  .replace(/<div hidden=""><!--\$--><div hidden="">[\s\S]*?<\/div><!--\/\$--><\/div>/gi, "")
  .replace(/<!--[\s\S]*?-->/g, "")
  .replaceAll('href="/saad-aiddi.jpeg"', 'href="/public/saad-aiddi.jpeg"')
  .replaceAll('src="/saad-aiddi.jpeg"', 'src="/public/saad-aiddi.jpeg"')
  .replaceAll('src="/logos/', 'src="/public/logos/')
  .replace(
    "</head>",
    `${metadata}\n<style>:root{--font-geist-sans:Arial,sans-serif;--font-geist-mono:monospace}${stylesheet}</style></head>`,
  );

await writeFile(path.join(projectRoot, "index.html"), `${html}\n`, "utf8");
console.log("Generated index.html for GitHub Pages");
