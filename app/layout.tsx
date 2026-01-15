import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Hilse — Full Stack Developer in Boulder, CO",
  description: "Boulder, Colorado full stack developer and 3x founder. Building modern web applications with Python, React, and Next.js. Available for hire.",
  keywords: [
    "full stack developer Boulder",
    "Boulder Colorado developer",
    "full stack engineer Boulder CO",
    "React developer Boulder",
    "Python developer Boulder Colorado",
    "web developer Boulder",
    "software engineer Boulder CO",
    "freelance developer Boulder",
    "Next.js developer Colorado",
    "TypeScript developer Boulder",
  ],
  authors: [{ name: "Daniel Hilse" }],
  openGraph: {
    title: "Daniel Hilse — Full Stack Developer in Boulder, CO",
    description: "Boulder, Colorado full stack developer and 3x founder. Building modern web applications with Python, React, and Next.js.",
    url: "https://danhilse.com",
    siteName: "Daniel Hilse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Hilse — Full Stack Developer in Boulder, CO",
    description: "Boulder, Colorado full stack developer building modern web applications with React and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://danhilse.com",
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
    jobTitle: "Full Stack Developer",
    description: "Full stack developer in Boulder, Colorado specializing in React, Python, and Next.js web applications.",
    url: "https://danhilse.com",
    email: "danhilse@gmail.com",
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
    workLocation: {
      "@type": "Place",
      name: "Boulder, Colorado",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boulder",
        addressRegion: "Colorado",
        addressCountry: "United States",
      },
    },
    knowsAbout: [
      "Full Stack Development",
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "AI",
      "Web Development",
      "Software Engineering",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Boulder, Colorado",
      },
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Boulder, Colorado" />
        <meta name="geo.position" content="40.0150;-105.2705" />
        <meta name="ICBM" content="40.0150, -105.2705" />
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
