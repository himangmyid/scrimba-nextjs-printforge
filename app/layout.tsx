import type { Metadata } from "next";
import { Noto_Rashi_Hebrew, Comme } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const notoRashiHebrew = Noto_Rashi_Hebrew({
  variable: "--font-noto-rashi-hebrew",
  subsets: ["hebrew"],
});

const comme = Comme({
  variable: "--font-comme",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'PrintForge',
  description: 'A blog about printing technology and techniques.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoRashiHebrew.variable} ${comme.variable} antialiased bg-grid`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}