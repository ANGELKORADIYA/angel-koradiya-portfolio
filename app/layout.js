import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Navbar from "./navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angel Koradiya | Portfolio",
  description: "Next app described my journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8903937759165446" />
        {/* Ensure metadata tags like this go inside <head> */}
      </head>
      <body className={inter.className}>
        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          data-ad-client="ca-pub-8903937759165446"
          strategy="afterInteractive" // Load after the page becomes interactive
          crossOrigin="anonymous"
        />
        <Navbar />
        {children}
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-8903937759165446"
          data-ad-slot="8301257965"
          data-auto-format="rspv"
          data-full-width=""
        >
          <div overflow=""></div>
        </amp-ad>
      </body>
    </html>
  );
}
