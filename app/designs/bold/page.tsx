import type { Metadata } from "next";
import { RecruitmentSite } from "../../_components/RecruitmentSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../_data/site";

const title = "デザインC：大胆・求人訴求｜前代運送 採用サイト";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/bold") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/bold"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function BoldDesignPage() {
  return <RecruitmentSite themeId="bold" />;
}
