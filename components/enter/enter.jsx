"use client";
import Zoom from "react-reveal/Zoom";

function Enter() {
  return (
    <div className="w-screen h-screen flex items-center justify-center z-50">
      <Zoom top delay={300}>
        <a
          className="enter text-white cursor-pointer z-50 text-4xl"
          href="/navPage"
        >
          Enter
        </a>
      </Zoom>
    </div>
  );
}

export default Enter;
