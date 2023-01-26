import Arrow from "../../public/stack-icons/arrow.png";
import Image from "next/image";
import "./liquidButton.css";
import Link from "next/link";
function Button() {
  return (
    <>
      <a href="/#nav" passHref>
        <div className="button">
          <Image className="nav-icon" src={Arrow} alt="projects icon" />
          <div className="blurred">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </a>
      <svg className="svg-liquid">
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
    </>
  );
}
export default Button;
