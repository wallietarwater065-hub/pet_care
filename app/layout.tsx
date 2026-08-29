import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "毛茸研究所 | 宠物洗护店",
  description: "毛茸研究所是一家社区宠物洗护店，提供犬猫精洗、修剪、护理和预约服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
