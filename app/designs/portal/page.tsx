import type { Metadata } from "next";
import { PortalSite } from "../../_components/PortalSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../_data/site";

const title = "デザインF：採用ポータル｜前代運送 採用サイト";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/portal") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/portal"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function PortalDesignPage() {
  return <PortalSite page="home" />;
}
