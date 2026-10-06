import type { Metadata } from "next";
import {Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import HeaderPage from "@/components/Header";
import Marquee from "@/components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin","bengali"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "বাংলাদেশ ও বিশ্বের সর্বশেষ সংবাদ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderPage />
        <Marquee />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
