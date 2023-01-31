"use client";
import "./globals.css";
import { Oswald } from "@next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={oswald.className}>
        <AnimatePresence>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {},
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
