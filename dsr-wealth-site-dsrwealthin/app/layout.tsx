
export const metadata = {
  metadataBase: new URL("https://dsrwealth.in"),
  title: "DSR Wealth Advisory – Process-driven wealth partner",
  description: "Goal-mapped, allocation-led portfolios. Corporate governance rigour for family wealth. Based in Ludhiana; serving pan-India.",
  openGraph: {
    title: "DSR Wealth Advisory",
    description: "Goal-mapped, allocation-led portfolios. Corporate governance rigour for family wealth.",
    url: "https://dsrwealth.in",
    siteName: "DSR Wealth Advisory",
    type: "website"
  },
  icons: { icon: "/logo.svg" }
};

import "./globals.css";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
