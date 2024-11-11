import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angel Koradiya | Portfolio",
  description: "Explore the journey, projects, and skills of Angel Koradiya.",
  keywords: "Angel Koradiya, Portfolio, Web Developer, Software Engineer, Projects",
  url: "https://my-portfolio-ak.vercel.app/", // Replace with your actual site URL
  // image: "https://www.example.com/profile-image.jpg", // Replace with actual image URL
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (OG) Tags for social media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        
        {/* Twitter Card for better display on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <title>{metadata.title}</title>

        {/* Structured Data using JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Angel Koradiya",
              "url": metadata.url,
              "description": metadata.description,
              "image": metadata.image,
              "jobTitle": "Web Developer",
              "sameAs": [
                "https://www.linkedin.com/in/angelkoradiya",
                "https://github.com/ANGELKORADIYA",
                // Add more profile links as necessary
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
