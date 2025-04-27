import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Запрещаем доступ к API
          "/_next/", // Запрещаем доступ к внутренним файлам Next.js
          "/private/", // Если у вас есть приватные разделы
        ],
      },
    ],
    sitemap: "https://cbtdoc.ru/sitemap.xml",
    host: "https://cbtdoc.ru",
  };
}
