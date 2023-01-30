import "./globals.css";
import { Oswald } from "@next/font/google";
import { Suspense } from "react";
import LoadingPage from "../components/loading/loading";
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={oswald.className}>
        <Suspense fallback={<LoadingPage />}>{children}</Suspense>
      </body>
    </html>
  );
}
