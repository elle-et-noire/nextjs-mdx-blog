import type { Metadata } from "next";
import { Noto_Sans_JP, Kosugi_Maru, Nunito } from "next/font/google";

import "./globals.css";

const noto_sans = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans"
});
const kosugi_maru = Kosugi_Maru({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kosugi-maru"
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito"
});

export const metadata: Metadata = {
  title: "Weekly Run Demo",
  description: "Description of something with working codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${noto_sans.variable}
        ${kosugi_maru.variable}
        ${nunito.variable} antialiased`}
      >
        <main className="min-h-screen min-w-max m-0 pb-12 bg-[#a0bac8]">
          <div className="
        z-0 fixed top-0 left-0 right-0
        pt-4 pb-2 w-full
        bg-[#fefefe] shadow-[0_1px_1px_1px_rgba(0,0,0,0.3)]
        text-center text-[#112b45] text-2xl font-system
        underline underline-offset-[12px] decoration-4 decoration-yellow-300"
          >
            記事一覧
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
