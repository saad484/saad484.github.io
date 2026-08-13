import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const portfolioChecks = (html) => {
  assert.match(html, /<title>Saad Aiddi — Cyber Security Engineer<\/title>/i);
  assert.match(html, /Securing systems/);
  assert.match(html, /Cyber-Physical Systems/);
  assert.match(html, /Doctoral Student/);
  assert.match(html, /Cybersecurity Research Assistant/);
  assert.match(html, /Software Automation Engineer/);
  assert.match(html, /Doctor of Philosophy/);
  assert.match(html, /UM6P College of Computing logo/);
  assert.match(html, /Green Energy Park logo/);
  assert.match(html, /EBTIKARWEB logo/);
  assert.match(html, /Holberton School logo/);
  assert.doesNotMatch(html, /TryHackMe|followers|connections/i);
};

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
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
}

test("server renders the finished portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  portfolioChecks(await response.text());
});

test("GitHub Pages output is complete and static", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

  portfolioChecks(html);
  assert.match(html, /<style>/);
  assert.match(html, /src="\/public\/saad-aiddi\.jpeg"/);
  assert.match(html, /src="\/public\/logos\/um6p-computing\.jpg"/);
  assert.match(html, /src="\/public\/logos\/green-energy-park\.jpg"/);
  assert.match(html, /src="\/public\/logos\/ebtikarweb\.jpg"/);
  assert.match(html, /src="\/public\/logos\/um6p\.jpg"/);
  assert.match(html, /src="\/public\/logos\/holberton\.jpg"/);
  assert.match(html, /src="\/public\/logos\/polytechnique-agadir\.jpg"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/saad484\.github\.io\/">/);
  assert.match(html, /content="https:\/\/saad484\.github\.io\/public\/og\.png"/);
  assert.doesNotMatch(html, /<script\b|\/_next\//i);
  assert.doesNotMatch(html, /localhost|<div hidden=/i);
});
