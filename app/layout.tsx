import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Hilse — Developer",
  description: "3x founder and full-stack developer crafting calm, modern interfaces and reliable systems with Python, React, and Next.js.",
  keywords: ["developer", "full-stack", "python", "typescript", "react", "next.js", "ai", "boulder"],
  authors: [{ name: "Daniel Hilse" }],
  openGraph: {
    title: "Daniel Hilse — Developer",
    description: "3x founder and full-stack developer crafting calm, modern interfaces and reliable systems with Python, React, and Next.js.",
    url: "https://danhilse.com",
    siteName: "Daniel Hilse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hilse — Developer",
    description: "3x founder and full-stack developer crafting calm, modern interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Hilse",
    jobTitle: "Full-Stack Developer",
    url: "https://danhilse.com",
    sameAs: [
      "https://github.com/danhilse",
      "https://www.linkedin.com/in/daniel-hilse-116107106",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boulder",
      addressRegion: "CO",
      addressCountry: "US",
    },
    knowsAbout: ["Python", "TypeScript", "React", "Next.js", "AI", "Full-Stack Development"],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
