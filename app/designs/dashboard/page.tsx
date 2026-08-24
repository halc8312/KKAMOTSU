import type { Metadata } from "next";
import { DashboardSite } from "../../_components/DashboardSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../_data/site";

const title = "デザインD：要点ダッシュボード｜前代運送 採用サイト";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/dashboard") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/dashboard"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function DashboardDesignPage() {
  return <DashboardSite />;
}
