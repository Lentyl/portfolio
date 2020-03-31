import React, { useState, useEffect } from "react";
import smoke from "../img/smoke.mp4";

const MainPage = () => {
  const [playSmoke, setPlaySmoke] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlaySmoke(true);
    }, 4900);
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
            <video
              className="main-page__smoke-video"
              autoPlay={true}
              src={smoke}
              muted
            ></video>
            <div className="main-page__new-line-3">
              <span className="main-page__welcome-letters">w</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">b</span>
              <span className="main-page__welcome-letters">d</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">v</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">l</span>
              <span className="main-page__welcome-letters">o</span>
              <span className="main-page__welcome-letters">p</span>
              <span className="main-page__welcome-letters">e</span>
              <span className="main-page__welcome-letters">r</span>
            </div>
          </section>
        ) : (
          ""
        )}
      </div>
    </main>
  );
};

export default MainPage;
