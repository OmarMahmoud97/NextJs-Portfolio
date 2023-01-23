"use client";
import { useRef, useEffect } from "react";

function NavPage() {
  const canvasRef = useRef(null);

  // use the `useEffect` hook to access the canvas element after it has been rendered to the DOM
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // use the 2D context to draw on the canvas

    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    // random color
    // let randomColor = "#000000".replace(/0/g, function () {
    //   return (~~(Math.random() * 16)).toString(16);
    // });

    let particlesArray;

    let mouse = {
      x: null,
      y: null,
      radius: (canvas1.height / 80) * (canvas1.width / 80),
    };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "rgba(41,4,5,0.5)";
        ctx.fill();
      }
      update() {
        if (this.x > canvas1.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas1.width || this.y < 0) {
          this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas1.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas1.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas1.height * canvas1.width) / 11000;
      for (let i = 0; i < numberOfParticles; i++) {
        // size of particles
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "rgb(50,19,31,1)";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas1.width / 6) * (canvas1.height / 6)) {
            ctx.strokeStyle = "rgba(0, 120, 118, 0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    window.addEventListener("resize", function () {
      canvas1.width = innerWidth;
      canvas1.height = innerHeight;
      mouse.radius = (canvas1.height / 90) * (canvas1.height / 90);
      init();
    });

    init();
    animate();
  }, []);

  return (
    <div className="w-full h-screen bg-black -z-50">
      <canvas
        id="canvas1"
        ref={canvasRef}
        className="bg-white w-full h-full relative z-50"
      ></canvas>
    </div>
  );
}

export default NavPage;
