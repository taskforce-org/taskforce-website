import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";

import "./globals.css";

const bodySans = Inter({
  variable: "--font-en",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const faSans = Vazirmatn({
  variable: "--font-fa",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Task Force",
  description:
    "Task Force is a software studio building websites, custom systems, and automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fa"
      dir="rtl"
      data-theme="white"
      suppressHydrationWarning
      className={`${bodySans.variable} ${faSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-copy">
        {children}
      </body>
    </html>
  );
}
