import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const routes = ["", "company/", "recruit/", "contact/"];

const { siteUrl: configuredSiteUrl } = JSON.parse(readFileSync(path.join(root, "site-pages.json"), "utf8"));
const siteUrl = configuredSiteUrl.replace(/\/+$/, "");

function build(basePath, extraEnv = {}) {
  execFileSync(process.execPath, ["build.mjs"], {
    cwd: root,
    env: { ...process.env, SITE_URL: "", SITE_NOINDEX: "", SITE_BASE_PATH: basePath, ...extraEnv },
    stdio: "pipe",
  });
}

for (const basePath of ["", "/KKAMOTSU"]) {
  test(`published pages and local links work at ${basePath || "/"}`, () => {
    build(basePath);
    for (const route of routes) {
      const file = path.join(output, route, "index.html");
      const html = readFileSync(file, "utf8");
      const origin = `https://example.test${basePath}/${route}`;
      for (const [, target] of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)) {
        const url = new URL(target, origin);
        if (url.origin !== "https://example.test") continue;
        assert.ok(url.pathname.startsWith(`${basePath}/`), `${route}: missing base path in ${target}`);
        const relativePath = decodeURIComponent(url.pathname.slice(basePath.length + 1));
        const localPath = path.join(output, relativePath, url.pathname.endsWith("/") ? "index.html" : "");
        assert.ok(existsSync(localPath), `${route}: missing local target ${target}`);
      }
      assert.match(html, new RegExp(`href="${basePath}/recruit/"`));
      assert.doesNotMatch(html, /href="[^"\s]*\/(activity|service)\//);
      // Search signals always name the primary site, never the copy being built.
      assert.doesNotMatch(html, /%SITE_URL%/);
      assert.ok(html.includes(`<link rel="canonical" href="${siteUrl}/${route}" />`), `${route}: canonical`);
      assert.ok(html.includes(`<meta property="og:image" content="${siteUrl}/assets/og-image.jpg" />`), `${route}: og:image`);
      const [, jsonLd] = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      const types = JSON.parse(jsonLd)["@graph"].map((item) => item["@type"]);
      assert.ok(types.includes("LocalBusiness") && types.includes("WebPage"), `${route}: structured data`);
      assert.equal(types.includes("BreadcrumbList"), route !== "", `${route}: breadcrumb data`);
      // Google allows job posting data only on the page that presents that single job.
      assert.equal(types.includes("JobPosting"), route === "recruit/", `${route}: job posting data`);
      if (route === "recruit/") {
        const job = JSON.parse(jsonLd)["@graph"].find((item) => item["@type"] === "JobPosting");
        for (const required of ["title", "description", "datePosted", "hiringOrganization", "jobLocation"]) assert.ok(job[required], `job posting ${required}`);
        assert.match(job.datePosted, /^\d{4}-\d{2}-\d{2}$/);
        assert.equal(job.employmentType, "CONTRACTOR");
        // The posting must say the same thing as the page: check each sentence is visible in the body.
        const body = html.split("</head>")[1].replace(/<[^>]+>/g, "");
        for (const sentence of job.description.replace(/<[^>]+>/g, "\n").split(/\n|(?<=。)/).filter((text) => text.trim().length > 12)) {
          assert.ok(body.includes(sentence.trim()), `job posting text not on page: ${sentence}`);
        }
      }
      assert.equal(html.includes('<meta name="robots" content="noindex" />'), Boolean(basePath), `${route}: noindex`);
    }
    const notFound = readFileSync(path.join(output, "404.html"), "utf8");
    assert.ok(notFound.includes('<meta name="robots" content="noindex" />') && notFound.includes(`href="${basePath}/recruit/"`));
    assert.ok(existsSync(path.join(output, "assets/og-image.jpg")));
    if (basePath) {
      assert.ok(!existsSync(path.join(output, "sitemap.xml")));
      assert.ok(!existsSync(path.join(output, "robots.txt")));
    } else {
      const sitemap = readFileSync(path.join(output, "sitemap.xml"), "utf8");
      assert.deepEqual([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc), routes.map((route) => `${siteUrl}/${route}`));
      assert.ok(readFileSync(path.join(output, "robots.txt"), "utf8").includes(`Sitemap: ${siteUrl}/sitemap.xml`));
    }
    assert.ok(!existsSync(path.join(output, "activity")));
    assert.ok(!existsSync(path.join(output, "service")));
    assert.ok(!existsSync(path.join(output, "reference")));
    assert.ok(!existsSync(path.join(output, ".openai")));
    assert.equal(readFileSync(path.join(output, "styles.css"), "utf8"), readFileSync(path.join(root, "styles.css"), "utf8"));
  });
}

test("invalid deployment paths are rejected", () => {
  for (const invalid of ["KKAMOTSU", "/../elsewhere", "/bad path"]) {
    assert.throws(() => build(invalid), /SITE_BASE_PATH/);
  }
});

test("the public address can be changed in one place", () => {
  build("", { SITE_URL: "https://example.jp/" });
  assert.ok(readFileSync(path.join(output, "recruit/index.html"), "utf8").includes('<link rel="canonical" href="https://example.jp/recruit/" />'));
  assert.ok(readFileSync(path.join(output, "sitemap.xml"), "utf8").includes("<loc>https://example.jp/recruit/</loc>"));
  assert.throws(() => build("", { SITE_URL: "http://example.jp" }), /SITE_URL/);
  build("", { SITE_NOINDEX: "true" });
  assert.ok(readFileSync(path.join(output, "index.html"), "utf8").includes('<meta name="robots" content="noindex" />'));
});
