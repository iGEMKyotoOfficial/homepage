import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  // 日本語フォントはファイルが大きく、latin サブセットだけの preload は無駄なため無効化。
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "iGEM Kyoto",
    template: "%s | iGEM Kyoto",
  },
  description:
    "合成生物学の世界大会 iGEM に挑戦する京都大学学部生のサークル iGEM Kyoto の公式サイトです。",
  openGraph: {
    title: "iGEM Kyoto",
    description:
      "合成生物学の世界大会 iGEM に挑戦する京都大学学部生のサークル iGEM Kyoto の公式サイトです。",
    siteName: "iGEM Kyoto",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerifJP.variable} antialiased`}>
        {/* JavaScript 無効時はトップページのスクロール演出要素を表示状態にしておく */}
        <noscript>
          <style>{`.home-page [style*="opacity"]{opacity:1!important;transform:none!important;}`}</style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
