import { cp, copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const basePath = (process.env.SITE_BASE_PATH ?? "").replace(/\/+$/, "");
if (basePath && (!/^(\/[A-Za-z0-9._~-]+)+$/.test(basePath) || basePath.split("/").some((part) => part === "." || part === ".."))) {
  throw new Error("SITE_BASE_PATH must be empty or a path such as /KKAMOTSU");
}
const { pages } = JSON.parse(await readFile(path.join(root, "site-pages.json"), "utf8"));
const publishedPages = pages.filter((page) => page.published);

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function navigation(currentPath) {
  const links = publishedPages.map((page) => {
    const current = page.path === currentPath ? ' aria-current="page"' : "";
    return `        <a href="/${escapeHtml(page.path)}/"${current}><small>${escapeHtml(page.english)}</small><strong>${escapeHtml(page.label)}</strong></a>`;
  });
  return `<nav class="below-hero-nav" aria-label="メインナビゲーション">\n      <div class="below-hero-nav-inner">\n${links.join("\n")}\n      </div>\n    </nav>`;
}

async function writePage(currentPath) {
  const relativePath = currentPath ? path.join(currentPath, "index.html") : "index.html";
  const html = await readFile(path.join(root, relativePath), "utf8");
  const navPattern = /<nav class="below-hero-nav"[^>]*>[\s\S]*?<\/nav>/;
  // Fail rather than ship a stale menu if a page's shared navigation is removed.
  if (!navPattern.test(html)) throw new Error(`Missing shared navigation in ${relativePath}`);
  const page = html.replace(navPattern, navigation(currentPath));
  const deployablePage = basePath
    ? page.replace(/(\b(?:href|src)\s*=\s*["'])\/(?!\/)/g, `$1${basePath}/`)
    : page;
  await writeFile(path.join(output, relativePath), deployablePage);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await writePage("");
for (const { path: route } of publishedPages) {
  await cp(path.join(root, route), path.join(output, route), { recursive: true });
  await writePage(route);
}
await copyFile(path.join(root, "styles.css"), path.join(output, "styles.css"));
await cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
console.log(`Built ${publishedPages.length + 1} published pages to dist/ (base path: ${basePath || "/"})`);
