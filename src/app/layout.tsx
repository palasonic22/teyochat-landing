import type { Metadata } from "next";
import { SiteShell } from "@/components/sites/leedlime/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Teyochat — Website prototype", template: "%s | Teyochat" },
  description: "Teyochat website prototype with editable placeholder content.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
