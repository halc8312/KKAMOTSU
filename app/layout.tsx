import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
