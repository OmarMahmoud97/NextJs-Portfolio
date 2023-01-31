"use client";
import Zoom from "react-reveal/Zoom";
import Image from "next/image";
import Penguin from "../../public/nav/penguin.gif";
import Projects from "../../public/nav/projects.gif";
import Contact from "../../public/nav/mail.gif";
import Github from "../../public/social-icons/github.png";
import Linkedin from "../../public/social-icons/linkedin.gif";

import "./nav-anim.css";
function NavPage() {
  return (
    <div
      id="nav"
      className="w-full h-screen bg-black z-50 flex align-center justify-center"
    >
      <div className="absolute">
        <div
          unoptimized={true}
          priority
          alt="background image of animation from a distance"
          className=" canvas1 bg-black w-screen h-screen relative z-50"
        ></div>
      </div>
      <div top className="flex align-center justify-center " delay={400}>
        <div className="nav-social">
          <a
            className="nav-socials"
            alt="top of page button"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/omar-mahmoud97/"
          >
            <Image className="nav-social-icon" src={Linkedin} alt="" />
          </a>
          <a
            className="nav-socials"
            alt="top of page button"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/OmarMahmoud97"
          >
            <Image className="nav-social-icon" src={Github} alt="" />
          </a>
        </div>
        <div className="nav-container z-50">
          <a href="/projects" className="nav-label z-50 cursor-pointer">
            <div className="button">
              <Image className="nav-icon" src={Projects} alt="projects icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span ">Projects</div>
          </a>
          <a href="/more" className="nav-label nav-label-middle">
            <div className="button">
              <Image className="nav-icon" src={Penguin} alt="penguin icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span">More about me</div>
          </a>
          <a href="/contact" className="nav-label">
            <div className="button">
              <Image className="nav-icon" src={Contact} alt="mail icon" />
              <div className="blurred">
                <span></span> <span></span> <span></span> <span></span>
                <span></span> <span></span> <span></span>
              </div>
            </div>
            <div className="nav-span">Contact</div>
          </a>
        </div>
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
      </div>
    </div>
  );
}
export default NavPage;
