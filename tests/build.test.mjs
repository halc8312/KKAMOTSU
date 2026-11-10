import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = path.join(root, "dist");
const routes = ["", "company/", "recruit/", "contact/"];

function build(basePath) {
  execFileSync(process.execPath, ["build.mjs"], {
    cwd: root,
    env: { ...process.env, SITE_BASE_PATH: basePath },
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
