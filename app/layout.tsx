import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your Name – Full‑Stack Developer",
  description:
    "Portfolio of Your Name, full‑stack developer crafting elegant, resilient web apps.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-neutral-900 antialiased">
      <body>
        {/* No global header; it lives inside the projects column on the home page */}
        <main className="mx-auto max-w-6xl px-6">{children}</main>

        <footer className="mx-auto max-w-6xl px-6 py-12 text-sm text-neutral-500">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Your Name</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yourname"
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-900"
              >
                LinkedIn
              </a>
              <a
                href="mailto:you@domain.com"
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
