"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
import Background from "../public/backgrounds/navbg.jpg";
import Penguin from "../public/nav/penguin.gif";
import Projects from "../public/nav/projects.gif";
import Contact from "../public/nav/mail.gif";
import Github from "../public/social-icons/github.png";
import Linkedin from "../public/social-icons/linkedin.gif";

import "./nav-anim.css";
function NavPage() {
  return (
    <div className="w-full h-screen bg-black z-50 flex align-center justify-center">
      <div className="absolute">
        <Zoom id="nav" className="z-50" top delay={500}>
          <Image
            unoptimized={true}
            priority
            alt="background image of animation from a distance"
            src={Background}
            className="bg-black w-screen h-screen relative z-50"
          ></Image>
        </Zoom>
      </div>
      <Zoom top className="flex align-center justify-center " delay={500}>
        <div className="nav-social">
          <a
            className="nav-socials"
            alt="top of page button"
            target="_blank"
            href="https://www.linkedin.com/in/omar-mahmoud97/"
          >
            <Image className="nav-social-icon" src={Linkedin} alt="" />
          </a>
          <a
            className="nav-socials"
            alt="top of page button"
            target="_blank"
            href="https://github.com/OmarMahmoud97"
          >
            <Image className="nav-social-icon" src={Github} alt="" />
          </a>
        </div>
        <div className="nav-container z-50">
          <Link href="/projects" className="nav-label z-50 cursor-pointer">
            <div className="button">
              <Image className="nav-icon" src={Projects} alt="projects icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span">Projects</div>
          </Link>
          <Link href="/more" className="nav-label nav-label-middle">
            <div className="button">
              <Image className="nav-icon" src={Penguin} alt="penguin icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span">More about me</div>
          </Link>
          <Link href="/contact" className="nav-label">
            <div className="button">
              <Image className="nav-icon" src={Contact} alt="mail icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span">Contact</div>
          </Link>
        </div>
      </Zoom>
    </div>
  );
}

export default NavPage;
