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
        {/* Insert Google AdSense script directly in the head */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8903937759165446"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
