import "./globals.css";
import { Oswald } from "@next/font/google";
import { Suspense } from "react";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
