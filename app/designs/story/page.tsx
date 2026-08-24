import type { Metadata } from "next";
import { StorySite } from "../../_components/StorySite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../_data/site";

const title = "デザインE：ストーリー｜前代運送 採用サイト";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/story") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/story"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function StoryDesignPage() {
  return <StorySite />;
}
