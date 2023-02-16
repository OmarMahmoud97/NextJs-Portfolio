"use client";
import LandingText from "@/components/landing-text/landing-text";
import Animation from "@/components/landing-animation/land-anim";
import Enter from "@/components/enter/enter";
import NavPage from "./navPage/page.jsx";
import LoadingPage from "../app/loading/page.jsx";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const [Loading, SetLoading] = useState(true);
  const animRef = useRef();

  useEffect(() => {
    SetLoading(false);
  }, [animRef]);

  while (Loading) {
    return <LoadingPage />;
    console.log("Loading...");
  }

  return (
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
      <Animation ref={animRef} priority className="z-0" />
      <LandingText ref={animRef} className="z-0" />
      {/* <Enter ref={animRef} className="z-50" /> */}
      <NavPage ref={animRef} className="z-0" />
      <svg className="svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="name"
            />
            <feColorMatrix
              in="name"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -15"
              result="aab"
            />
            <feBlend in="sourceGraphic" in2="aab" />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}
