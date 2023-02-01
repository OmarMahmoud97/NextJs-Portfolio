"use client";
import Image from "next/image";
import javascript from "../../public/stack-icons/jsgif.gif";
import Tailwind from "../../public/stack-icons/tailwindcss.svg";
import Vite from "../../public/stack-icons/Vitejs-logo.svg.png";
import bootstrap from "../../public/stack-icons/Bootstrap_logo.svg.png";
import gsapLogo from "../../public/stack-icons/gsap-greensock.svg";
import react from "../../public/stack-icons/reactgif.gif";
import node from "../../public/stack-icons/nodejs.svg";
import html from "../../public/stack-icons/htmlgif.gif";
import css from "../../public/stack-icons/icons8-css3.svg";
import figma from "../../public/stack-icons/figmagif.gif";
import blender from "../../public/stack-icons/icons8-blender-3d.svg";
import next from "../../public/stack-icons/next-js.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
function LandingText() {
  const nameRef = useRef(null);
  const subRef = useRef(null);
  const toolsRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const namefade = nameRef.current;
    const subfade = subRef.current;
    const toolsfade = toolsRef.current;
    const introfade = introRef.current;
    gsap.fromTo(
      namefade,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 0,
          start: "-5%",
          end: "0.5%",
        },
        onComplete: () => {
          gsap.to(".landing-name", { opacity: 0 });
        },
      }
    );
    gsap.fromTo(
      subfade,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 0,
          start: "-5%",
          end: "0.5%",
        },
        onComplete: () => {
          gsap.to(".landing-subname", { opacity: 0 });
        },
      }
    );
    gsap.fromTo(
      introfade,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 0.2,
          start: "10%",
          end: "20%",
        },
        onComplete: () => {
          gsap.to(".landing-intro", { opacity: 0 });
        },
      }
    );
    gsap.fromTo(
      toolsfade,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          scrub: 0.2,
          start: "30%",
          end: "45%",
        },
        onComplete: () => {
          gsap.to(".landing-tools", { opacity: 0 });
        },
      }
    );
  }, []);

  return (
    <article className=" top-0 fixed w-full flex items-end flex-col justify-center h-full z-0 ">
      <div className="flex flex-row items-center justify-center w-full absolute">
        <div className=" z-10 flex items-center flex-col absolute w-4/5">
          <h1
            ref={nameRef}
            className="textshadow landing-name text-white z-10 text-5xl w-full"
          >
            Omar Mahmoud
          </h1>
          <h2
            ref={subRef}
            className="textshadow landing-subname text-teal-500 text-3xl w-full font-bold mt-8"
          >
            Software Engineer
          </h2>
        </div>
        <div className="z-0 flex align-middle justify-center">
          <p
            ref={introRef}
            className=" textshadow landing-intro text-white rounded-lg p-4 text-center  w-full md:w-1/2 text-xl "
          >
            It has been said a picture can paint a thousand words. I believe a
            website, an interactive picture, which can be experienced fully by
            the user, an entire world for them to immerse themselves in, can
            speak volumes. <br />
            <br />
            As technology continues to evolve, I am dedicated to creating
            interactive and engaging digital experiences for users. From
            designing and developing websites to building custom applications,
            my goal is to bring my clients visions to life.
            <br />
            <br /> I enjoy staying up-to-date with the latest technologies and
            industry trends to ensure that my work is cutting-edge and
            efficient. I am excited to continue pushing the limits of the
            digital world, and I invite you to explore my portfolio.
          </p>
        </div>
      </div>
      <div
        ref={toolsRef}
        className="landing-tools w-full absolute flex flex-col h-full items-center justify-evenly"
      >
        <h3 className="textshadow mb-8 text-white text-3xl w-full text-center">
          Technologies and Skills
        </h3>
        <ul className="ul w-full justify-evenly flex-col flex items-center h-4/6">
          <div className="row flex items-center w-11/12 justify-evenly ">
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={javascript} alt="stack icon" />
              <li className=" text-white text-base">Javascript</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={react} alt="stack icon" />
              <li className="text-white text-base">React JS</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={node} alt="stack icon" />
              <li className="text-white text-base">NodeJs</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={html} alt="stack icon" />
              <li className="text-white text-base">HTML</li>
            </div>
          </div>
          <div className="row flex items-center w-11/12 justify-evenly">
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={css} alt="stack icon" />
              <li className="text-white text-base">CSS</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={blender} alt="stack icon" />
              <li className="text-white text-base">Blender</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={figma} alt="stack icon" />
              <li className="text-white text-base">Figma</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={next} alt="stack icon" />
              <li className="text-white text-base">Next.js</li>
            </div>
          </div>
          <div className="row flex items-center w-11/12 justify-evenly ">
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={Tailwind} alt="stack icon" />
              <li className=" text-white text-base">TailwindCSS</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={Vite} alt="stack icon" />
              <li className="text-white text-base">Vite</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={gsapLogo} alt="stack icon" />
              <li className="text-white text-base">Greensock</li>
            </div>
            <div className=" textshadow w-56 flex flex-col items-center justify-between h-full">
              <Image className="w-20" src={bootstrap} alt="stack icon" />
              <li className="text-white text-base">Bootstrap</li>
            </div>
          </div>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 m-4 ">
        <a
          href="/navPage"
          className="flex lg:text-3xl text-opacity-30 text-white"
        >
          Skip
        </a>
      </div>
    </article>
  );
}

export default LandingText;
