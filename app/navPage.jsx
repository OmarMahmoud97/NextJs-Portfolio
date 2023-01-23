"use client";
import { useRef, useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
import Background from "../public/backgrounds/nav-bg.jpg";
import Penguin from "../public/nav/penguin.gif";
import Projects from "../public/nav/projects.gif";
import Contact from "../public/nav/mail.gif";
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
      <Zoom top className="flex align-center justify-center">
        <div class="nav-container">
          <a href="./projects.html" class="nav-label">
            <div class="button">
              <Image class="nav-icon" src={Projects} alt="projects icon" />
              <div class="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div class="nav-span">Projects</div>
          </a>
          <a href="./more.html" class="nav-label nav-label-middle">
            <div class="button">
              <Image class="nav-icon" src={Penguin} alt="penguin icon" />
              <div class="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div class="nav-span">More about me</div>
          </a>
          <a href="./contact.html" class="nav-label">
            <div class="button">
              <Image class="nav-icon" src={Contact} alt="mail icon" />
              <div class="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div class="nav-span">Contact</div>
          </a>
        </div>
      </Zoom>
    </div>
  );
}

export default NavPage;
