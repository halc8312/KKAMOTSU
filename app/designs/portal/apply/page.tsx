import type { Metadata } from "next";
import { PortalSite } from "../../../_components/PortalSite";
import { pageUrl, publicAssetUrl, siteDescription } from "../../../_data/site";

const title = "応募・相談｜前代運送 採用ポータル";

export const metadata: Metadata = {
  title,
  description: siteDescription,
  alternates: { canonical: pageUrl("designs/portal/apply") },
  openGraph: { title, description: siteDescription, url: pageUrl("designs/portal/apply"), images: [publicAssetUrl("og.png")] },
  twitter: { card: "summary_large_image", title, description: siteDescription, images: [publicAssetUrl("og.png")] },
};

export default function PortalApplyPage() {
  return <PortalSite page="apply" />;
}
