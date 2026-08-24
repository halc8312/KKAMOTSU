import type { Metadata } from "next";
import { PortalSite } from "../../../_components/PortalSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../../_data/site";

const title = "仕事を知る｜前代運送 採用ポータル";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/portal/work") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/portal/work"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function PortalWorkPage() {
  return <PortalSite page="work" />;
}
