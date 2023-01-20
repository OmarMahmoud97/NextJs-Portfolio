import Image from "next/image";
import javascript from "../public/stack-icons/jsgif.gif";
import react from "../public/stack-icons/reactgif.gif";
import node from "../public/stack-icons/nodejs.svg";
import html from "../public/stack-icons/htmlgif.gif";
import css from "../public/stack-icons/icons8-css3.svg";
import figma from "../public/stack-icons/figmagif.gif";
import blender from "../public/stack-icons/icons8-blender-3d.svg";
import next from "../public/stack-icons/next-js.svg";
import down from "../public/stack-icons/arrow.png";
function LandingText() {
  return (
    <article className="landing-text">
      <div className="landing-top">
        <div className="landing-name-title landing-name-title-mobile">
          <h1 className="landing-name">Omar Mahmoud</h1>
          <h2 className="landing-subname">Software Engineer</h2>
        </div>
        <div className="landing-job-name">
          <h3 className="landing-job">
            It has been said a picture can paint a thousand words. I believe a
            website, an interactive picture, which can be experienced fully by
            the user, an entire world for them to immerse themselves in, can
            speak volumes. <br />
            <br />
            The internet is an ever growing part of our society and I intend to
            challenge its creative limitations to provide users with the most
            immersive experience possible.
          </h3>
        </div>
        <div className="landing-name-title landing-name-title-desktop">
          <h1 className="landing-name">Omar Mahmoud</h1>
          <h2 className="landing-subname">Software Engineer</h2>
        </div>
      </div>
      <div className="landing-tools">
        <h3 className="landing-stack-header">Technologies and Skills</h3>
        <ul className="landing-stack">
          <div className="landing-stack-section">
            <div className="landing-stack-group">
              <Image
                className="landing-icon"
                src={javascript}
                alt="stack icon"
              />
              <li className="landing-stack-item">Javascript</li>
            </div>
            <div className="landing-stack-group">
              <Image className="landing-icon" src={react} alt="stack icon" />
              <li className="landing-stack-item">React JS</li>
            </div>
            <div className="landing-stack-group">
              <Image
                className="landing-icon landing-icon-small"
                src={node}
                alt="stack icon"
              />
              <li className="landing-stack-item">NodeJs</li>
            </div>
            <div className="landing-stack-group">
              <Image className="landing-icon" src={html} alt="stack icon" />
              <li className="landing-stack-item">HTML</li>
            </div>
          </div>
          <div className="landing-stack-section">
            <div className="landing-stack-group">
              <Image className="landing-icon" src={css} alt="stack icon" />
              <li className="landing-stack-item">CSS</li>
            </div>
            <div className="landing-stack-group">
              <Image className="landing-icon" src={blender} alt="stack icon" />
              <li className="landing-stack-item">Blender</li>
            </div>
            <div className="landing-stack-group">
              <Image
                className="landing-icon landing-icon-small"
                src={figma}
                alt="stack icon"
              />
              <li className="landing-stack-item">Figma</li>
            </div>
            <div className="landing-stack-group">
              <Image className="landing-icon" src={next} alt="stack icon" />
              <li className="landing-stack-item">
                Next.js <span className="landing-soon">coming soon</span>
              </li>
            </div>
          </div>
        </ul>
        <div className="landing-button">
          <a
            type="button"
            onClick="document.getElementById('nav').scrollIntoView();"
          >
            <Image className="landing-down" src={down} alt="stack icon" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default LandingText;
