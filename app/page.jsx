import Animation from "./land-anim";
import LandingText from "./landing-text";
import NavPage from "./navPage";
export default function Home() {
  return (
    <div>
      <Animation />
      <LandingText />
      <NavPage />
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
  );
}
