import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Daniel Hilse – Full Stack Design Engineer and Brand Strategist",
  description:
    "Daniel Hilse is a design engineer and full-stack developer crafting digital products that solve real problems. Specializing in creative development, AI integration, and intuitive user experiences backed by scalable architecture.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-neutral-900 antialiased">
      <body>
        {/* No global header; it lives inside the projects column on the home page */}
        <main className="mx-auto max-w-6xl px-6">{children}</main>

        <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-neutral-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Daniel Hilse</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/danhilse"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/danhilse"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900"
              >
                LinkedIn
              </a>
              <a
                href="mailto:dan@danhilse.com"
                className="hover:text-neutral-900"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
