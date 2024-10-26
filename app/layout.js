import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angel Koradiya | Portfolio",
  description: "Next app described my journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Insert Google AdSense script directly in the head */}
        <meta name="google-adsense-account" content="ca-pub-8903937759165446" />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8903937759165446"
          strategy="afterInteractive"
          crossOrigin="anonymous" // or "use-credentials" based on your need
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
