import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { pageUrl, publicAssetUrl, siteDescription, siteTitle, siteUrl } from "./_data/site";

/* The site previously shipped no JP webfont and relied on
   "Hiragino Sans" / "Yu Gothic" / "Meiryo". Those resolve to three
   different typefaces across macOS / Windows / Android — and to none
   of them on Android — so the page rendered as a visibly different
   design per platform, and the 550/650/850/950 weights in the old
   stylesheet had no corresponding cuts to render. Noto Sans JP is
   variable, self-hosted by next/font (no render-blocking request to
   a third party), and covers the four weights the design uses. */
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "system-ui"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: pageUrl(),
  },
  openGraph: {
    title: "運ぶ仕事を、自分らしく。｜前代運送",
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
    url: pageUrl(),
    images: [
      {
        url: publicAssetUrl("og.png"),
        width: 1200,
        height: 630,
        alt: "運ぶ仕事を、自分らしく。 前代運送 軽貨物ドライバー採用",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "運ぶ仕事を、自分らしく。｜前代運送",
    description: siteDescription,
    images: [publicAssetUrl("og.png")],
  },
  icons: {
    icon: publicAssetUrl("favicon.svg"),
    shortcut: publicAssetUrl("favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>{children}</body>
    </html>
  );
}
