"use client";
import Zoom from "react-reveal/Zoom";

function Enter() {
  return (
    <div className="enterPage relative w-screen h-screen flex items-center justify-center z-50">
      <Zoom className="z-50" top delay={300}>
        <a
          className=" enter text-white cursor-pointer z-50 text-4xl"
          href="/navPage"
        >
          Enter
        </a>
      </Zoom>
    </div>
  );
}

export default Enter;
