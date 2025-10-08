import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./navbar";
import { siteConfig } from "../lib/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    images: [siteConfig.image],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  icons: {
    icon: siteConfig.icon,
  },
  verification: {
    google: siteConfig.googleVerification,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {/* Google Analytics - Global site tag (gtag.js) */}
        {siteConfig.gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                  {`window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);} 
                    gtag('js', new Date());
                    gtag('config', '${siteConfig.gaId}');`}
            </Script>
          </>
        )}

        <div>{children}</div>

        {/* Structured Data (JSON-LD) for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.author.name,
              url: siteConfig.siteUrl,
              description: siteConfig.description,
              image: siteConfig.image,
              jobTitle: siteConfig.author.jobTitle,
              sameAs: siteConfig.author.sameAs,
            }),
          }}
        />
      </body>
    </html>
  );
}
