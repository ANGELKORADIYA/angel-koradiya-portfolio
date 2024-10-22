import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angel Koradiya | Portfolio",
  description: "Next app described my journey",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    const adsenseScript = document.createElement("script");
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adsenseScript.async = true;
    adsenseScript.setAttribute("data-ad-client", "ca-pub-8903937759165446");
    adsenseScript.crossOrigin = "anonymous";
    document.head.appendChild(adsenseScript);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-8903937759165446" />
        <link rel="icon" href="/path/to/your/favicon.ico" />
      </head>
      <body className={inter.className}>
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
