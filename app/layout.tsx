import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Banner from "./components/Banner.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="">
        <header>
        <Banner 
        bannerContainer="flex flex-col items-center w-screen py-6 border-2 border-amber-900" 
        bannerTitle="text-4xl"
        />
        <Navbar 
        navWrapper="flex flex-col items-center"
        navList="flex gap-9 text-xl" 
        navItem="" 
        />
      </header>
        {children}
        <Footer
        footerWrapper=" border-1 border-black-400 flex flex-col items-center"
        />
        </body>
    </html>
  );
}
