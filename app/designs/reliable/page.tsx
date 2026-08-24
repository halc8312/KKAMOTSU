import type { Metadata } from "next";
import { RecruitmentSite } from "../../_components/RecruitmentSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../_data/site";

const title = "デザインA：信頼・端正｜前代運送 採用サイト";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/reliable") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/reliable"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function ReliableDesignPage() {
  return <RecruitmentSite themeId="reliable" />;
}
