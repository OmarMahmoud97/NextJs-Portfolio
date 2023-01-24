"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [ball, setBall] = useState({ frame: 0 });
  const [imageTarget, setImageTarget] = useState(4000);

  useEffect(() => {
    const frameCount = 273;

    const currentFrame = (index) =>
      `../animation/${(index + 1).toString()}.jpg`;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
    setImages(images);
    images[0].onload = render;

    gsap.to(ball, {
      frame: frameCount,
      snap: "frame",
      overwrite: "true",
      scrollTrigger: {
        trigger: "#canvas",
        anticipatePin: 1,

        start: "top top",
        // end: `${imageTarget}px`,
        end: `320%`,

        scrub: 0.5,
      },
      onUpdate: render,
    });

    const heroCanvas = document.querySelector(".hero-canvas");
    const heroImageLayer = document.querySelector(".hero-image-layer");

    window.onscroll = function () {
      let rect = heroImageLayer.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        let scrolledPixels = window.innerHeight - rect.top - imageTarget;
        heroCanvas.style.top = `-${scrolledPixels}px`;
      } else if (rect.top >= 0) {
      } else {
        heroCanvas.style.top = `0px`;
      }
    };
  });

  function render() {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
  }

  return (
    <section>
      <div
        style={{ height: `${imageTarget}px` }}
        className="hero-image-layer z-0"
      ></div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="hero-canvas h-full w-full object-cover fixed top-0 z-0"
      />
    </section>
  );
}
