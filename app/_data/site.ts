export const siteTitle = "前代運送｜採用サイト デザイン比較";
export const siteDescription =
  "前代運送の軽貨物ドライバー採用サイト、デザインA・B・Cの社内比較ページです。";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://keikamotsu-driver-recruit.halcy.chatgpt.site"
).replace(/\/$/, "");

export function pageUrl(path = "") {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  return normalized ? `${siteUrl}/${normalized}/` : `${siteUrl}/`;
}

export function publicAssetUrl(filename: string) {
  return `${siteUrl}/${filename.replace(/^\/+/, "")}`;
}
