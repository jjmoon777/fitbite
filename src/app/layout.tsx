import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitBite — 60 organic protein bars, $49 a month",
  description:
    "FitBite delivers a 30-day supply of organic 30g protein bars: two a day, delivery included, for $49. A near-complete food supplement for every age.",
  openGraph: {
    title: "FitBite — a month of protein for $49",
    description:
      "Two organic 30g bars daily for 30 days. Delivery included. Retail would be $240.",
    url: "https://fitbite.com",
    siteName: "FitBite",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
