import { siteConfig } from "../lib/siteConfig";

export default function sitemap() {
  const routes = [
    "",
    "/projects",
    "/learning",
    // "/showmessage",
  ].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}