import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://find-bound-section3.glad-candy-0045.chatgpt.site"),
  title: "찾아내기와 경계 긋기 | 섹션 3 발표자료",
  description:
    "객체 탐지, IoU, 임계값, 이미지 분할과 경계 책임을 이해하는 60분 인터랙티브 발표자료",
  openGraph: {
    title: "찾아내기와 경계 긋기",
    description: "객체 탐지 · IoU · 이미지 분할을 이해하는 60분 인터랙티브 발표자료",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "찾아내기와 경계 긋기",
    description: "객체 탐지 · IoU · 이미지 분할",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
