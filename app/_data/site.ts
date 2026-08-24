export const siteTitle = "前代運送｜軽貨物ドライバー採用";
export const siteDescription =
  "前代運送の軽貨物ドライバー求人。沖縄県本島で、希望する稼働日数や働き方に合う案件をご案内します。";

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
