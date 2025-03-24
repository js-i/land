import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://cbtdoc.ru"; // Твой домен

  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
  ];
}
