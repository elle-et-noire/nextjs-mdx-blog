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
        {children}
      </body>
    </html>
  );
}
