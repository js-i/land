import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const montser = Montserrat({
  variable: "--montser",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Георгий Меньшиков – Психотерапевт",
  description: "Помогаю справляться с тревогой, стрессом и жизненными трудностями с опорой на научно обоснованные методы.",
  keywords: ["психотерапевт", "онлайн терапия", "психологическая помощь", "когнитивно-поведенческая терапия"],
  openGraph: {
    title: "Георгий Меньшиков – Психотерапевт",
    description: "Онлайн консультации по психотерапии. Работа с тревогой, стрессом, выгоранием и другими проблемами.",
    url: "https://cbtdoc.ru",
    siteName: "Георгий Меньшиков",
    images: [
      {
        url: "/public/foto.png",
        width: 1200,
        height: 630,
        alt: "Георгий Меньшиков – Психотерапевт",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://cbtdoc.ru",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Георгий Меньшиков",
      "jobTitle": "Психотерапевт",
      "description": "Помогаю справляться с тревогой, стрессом и жизненными трудностями.",
      "image": "https://cbtdoc.ru/foto.jpg",
      "url": "https://cbtdoc.ru",
    }),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" id="start" className={`${montser.className} antialiased tracking-[0.03em] p-0`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
