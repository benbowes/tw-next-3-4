import type { Metadata } from "next";
import React from "react";
import { Navigation, Main } from "@/components";

import "./globals.css";

export const metadata: Metadata = {
  title: "TailwindCSS & Next App",
  description: "Quick setup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans font-normal antialiased bg-slate-50 text-slate-900">
        <Navigation />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
