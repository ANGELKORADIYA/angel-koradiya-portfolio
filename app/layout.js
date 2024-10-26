import { Inter } from "next/font/google";
import "./globals.css";
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
        {/* Insert Google AdSense script directly in the head */}
        <meta name="google-adsense-account" content="ca-pub-8903937759165446"/>
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
