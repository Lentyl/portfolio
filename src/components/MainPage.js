import React, { useState, useEffect } from "react";
import smoke from "../img/smoke.mp4";
import mainPhoto_460 from "../img/face_460-795.jpg";
import mainPhoto_800 from "../img/face_800-1382.jpg";
import mainPhoto_1280 from "../img/face_1280-2212.jpg";
import mainPhoto_1980 from "../img/face_1980-3421.jpg";
import Sections from "./parts/Sections";

const MainPage = () => {
  const [playSmoke, setPlaySmoke] = useState(false);
  const [videoVisible, setVideoVisible] = useState(true);

  useEffect(() => {
    const c = document.querySelector(".main-page__matrix-image-canvas");

    const ctx = c.getContext("2d");
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    matrix = matrix.split("");
    const font_size = 10;
    const columns = c.width / font_size;
    const drops = [];

    let resetTime = 0;
    const matrixEffect = () => {
      for (var x = 0; x < columns; x++) drops[x] = 1;

      function draw(currentTime) {
        if (currentTime - resetTime > 17) {
          resetTime = currentTime;

          ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
          ctx.fillRect(0, 0, c.width, c.height);

          ctx.fillStyle = "#0F0";
          ctx.font = font_size + "px arial";

          for (let i = 0; i < drops.length; i++) {
            let text = matrix[Math.floor(Math.random() * matrix.length)];

            ctx.fillText(text, i * font_size, drops[i] * font_size);

            if (drops[i] * font_size > c.height && Math.random() > 0.975)
              drops[i] = 0;

            drops[i]++;
          }
        }
        requestAnimationFrame(draw);
      }
      draw();
    };

    setTimeout(() => {
      setPlaySmoke(true);
    }, 4900);

    const windowWidth = window.matchMedia("(min-width: 1280px)");

    if (windowWidth.matches) {
      setTimeout(() => {
        matrixEffect();
      }, 12800);
    } else {
      setTimeout(() => {
        matrixEffect();
      }, 10000);
    }

    setTimeout(() => {
      setVideoVisible(false);
    }, 13500);
  }, []);

  return (
    <main className="main-page">
      <div className="main-page__welcome-inscription">
        <div className="main-page__new-line">
          <span className="main-page__welcome-letters">H</span>
          <span className="main-page__welcome-letters">i</span>
          <span className="main-page__welcome-letters">,</span>
        </div>
        <div className="main-page__new-line-2">
          <span className="main-page__welcome-letters">I</span>
          <span className="main-page__welcome-letters">'</span>
          <span className="main-page__welcome-letters">m</span>
          <span className="main-page__welcome-letters">M</span>
          <span className="main-page__welcome-letters">a</span>
          <span className="main-page__welcome-letters">r</span>
          <span className="main-page__welcome-letters">i</span>
          <span className="main-page__welcome-letters">u</span>
          <span className="main-page__welcome-letters">s</span>
          <span className="main-page__welcome-letters">z</span>
          <span className="main-page__welcome-letters">,</span>
        </div>
        {playSmoke ? (
          <section className="main-page__baner">
            {videoVisible && (
              <video
                className="main-page__smoke-video"
                autoPlay={true}
                src={smoke}
                muted
              ></video>
            )}
            <div className="main-page__new-line-3">
              <span className="main-page__welcome-letters">W</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">b</span>
              <span className="main-page__welcome-letters">D</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">v</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">l</span>
              <span className="main-page__welcome-letters">o</span>
              <span className="main-page__welcome-letters">p</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">r</span>
              <span className="main-page__welcome-letters">/</span>
              <span className="main-page__welcome-letters">T</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">s</span>
              <span className="main-page__welcome-letters">t</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">r</span>
            </div>
          </section>
        ) : (
            ""
          )}
      </div>
      <div className="main-page__matrix-image-container">
        <canvas className="main-page__matrix-image-canvas"></canvas>
        <picture>
          <source media="(min-width:1280px)" srcSet={mainPhoto_1980} />
          <source media="(min-width:800px)" srcSet={mainPhoto_1280} />
          <source media="(min-width:460px)" srcSet={mainPhoto_800} />
          <source media="(min-width:0)" srcSet={mainPhoto_460} />
          <img
            className="main-page__matrix-image"
            src={mainPhoto_1980}
            alt="Half face of a man with dark background"
          />
        </picture>
      </div>
      <Sections />
    </main>
  );
};

export default MainPage;
