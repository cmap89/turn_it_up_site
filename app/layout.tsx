import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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
      <body className="w-auto" suppressHydrationWarning>
        <header>
        <Banner>
          <h1 className="text-4xl" >[Turn It Up Lessons...]</h1>
        </Banner>
        <Navbar 
        navWrapper="flex flex-col items-center"
        navList="flex gap-9 text-xl" 
        />
      </header>
        {children}
        <Footer
        footerWrapper="flex flex-col items-center gap-4 py-3"
        />
        </body>
    </html>
  );
}
