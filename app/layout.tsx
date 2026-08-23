import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

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

const siteTitle = "前代運送｜軽貨物ドライバー採用";
const siteDescription =
  "前代運送の軽貨物ドライバー求人。希望する稼働日数やエリアを伺い、あなたに合う働き方をご案内します。";
const siteUrl = "https://keikamotsu-driver-recruit.halcy.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "運ぶほど、自由になる。｜前代運送",
    description: siteDescription,
    type: "website",
    locale: "ja_JP",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "運ぶほど、自由になる。 前代運送 軽貨物ドライバー採用",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "運ぶほど、自由になる。｜前代運送",
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
