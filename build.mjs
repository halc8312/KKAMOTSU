import { cp, copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const basePath = (process.env.SITE_BASE_PATH ?? "").replace(/\/+$/, "");
if (basePath && (!/^(\/[A-Za-z0-9._~-]+)+$/.test(basePath) || basePath.split("/").some((part) => part === "." || part === ".."))) {
  throw new Error("SITE_BASE_PATH must be empty or a path such as /KKAMOTSU");
}
const { pages, siteUrl: configuredSiteUrl } = JSON.parse(await readFile(path.join(root, "site-pages.json"), "utf8"));
// The one public address search engines should index. Every deployment points its
// canonical URL, share image and structured data here, so copies are not treated as rivals.
const siteUrl = (process.env.SITE_URL || configuredSiteUrl || "").replace(/\/+$/, "");
if (!/^https:\/\/[A-Za-z0-9.-]+(\/[A-Za-z0-9._~\/-]*)?$/.test(siteUrl)) {
  throw new Error("SITE_URL (or siteUrl in site-pages.json) must be an https URL such as https://example.jp");
}
// Copies served from a subdirectory (the GitHub Pages preview) stay out of search results.
const noindex = process.env.SITE_NOINDEX ? process.env.SITE_NOINDEX === "true" : Boolean(basePath);
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

async function writePage(currentPath, relativePath = currentPath ? path.join(currentPath, "index.html") : "index.html") {
  const html = await readFile(path.join(root, relativePath), "utf8");
  const navPattern = /<nav class="below-hero-nav"[^>]*>[\s\S]*?<\/nav>/;
  // Fail rather than ship a stale menu if a page's shared navigation is removed.
  if (!navPattern.test(html)) throw new Error(`Missing shared navigation in ${relativePath}`);
  let page = html.replace(navPattern, navigation(currentPath)).replaceAll("%SITE_URL%", siteUrl);
  if (noindex && !page.includes('name="robots"')) {
    page = page.replace(/(<meta name="viewport"[^>]*>)/, `$1\n    <meta name="robots" content="noindex" />`);
    if (!page.includes('name="robots"')) throw new Error(`Could not mark ${relativePath} as noindex`);
  }
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
// Shown for mistyped or outdated addresses (GitHub Pages serves it as is; XServer needs ErrorDocument).
await writePage(null, "404.html");
await copyFile(path.join(root, "styles.css"), path.join(output, "styles.css"));
await cp(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
if (!noindex) {
  const urls = ["", ...publishedPages.map((page) => `${page.path}/`)].map((route) => `  <url><loc>${escapeHtml(`${siteUrl}/${route}`)}</loc></url>`);
  await writeFile(path.join(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
  await writeFile(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
}
console.log(`Built ${publishedPages.length + 1} published pages to dist/ (base path: ${basePath || "/"}, site URL: ${siteUrl}, ${noindex ? "noindex preview" : "indexable"})`);
