export async function GET() {
  const robotsTxt = `# *
User-agent: *
Allow: /

# Host
Host: https://angelkoradiya.vercel.app

# Sitemaps
Sitemap: https://angelkoradiya.vercel.app/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}