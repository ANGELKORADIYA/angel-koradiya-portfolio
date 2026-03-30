import { siteConfig } from "../../lib/siteConfig";

export async function GET() {
  const robotsTxt = `# *
User-agent: *
Allow: /

# Host
Host: ${siteConfig.siteUrl}

# Sitemaps
Sitemap: ${siteConfig.siteUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}