import type { Metadata } from "next";
import { Outfit, Calistoga } from 'next/font/google'
import "./globals.css";
import { twMerge } from "tailwind-merge";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: '400' })

export const metadata: Metadata = {
  title: "Zarouri Illes",
  description: "Zarouri Illes Full stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(outfit.variable, calistoga.variable, "bg-[#0a0f1c] text-gray-200 antialiased font-sans")}>{children}</body>
    </html>
  );
}
