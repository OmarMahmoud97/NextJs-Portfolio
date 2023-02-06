"use client";
import "./globals.css";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { Oswald } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  useEffect(() => {
    hotjar.initialize(3346375, 6);
  }, []);
  return (
    <html lang="en">
      <head />
      <body className={oswald.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
