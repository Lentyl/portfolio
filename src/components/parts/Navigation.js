import React, { useState } from "react";
import SECTIONS from "../../data/sections";

const navList = SECTIONS;

const Navigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const nav = navList.map((item) => (
    <a
      key={item.title}
      className={
        hamburgerOpen
          ? "navigation__element-link-visible"
          : "navigation__element-link"
      }
      href={`#${item.title}`}
    >
      <li className="navigation__element">{item.title}</li>
    </a>
  ));
  const navDesktop = navList.map((item) => (
    <a
      key={item.title}
      className="navigation__desktop-link"
      href={`#${item.title}`}
    >
      <div className="navigation__desktop-layer-container">
        <span className="navigation__desktop-layer"></span>
        <span className="navigation__desktop-layer"></span>
        <span className="navigation__desktop-layer"></span>
        <span className="navigation__desktop-layer"></span>
        {item.title === "Skills" ? (
          <svg
            className="navigation__desktop-icon-svg"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 128 160"
            fill="rgb(49, 130, 252)"
            stroke="rgb(49, 130, 252)"
          >
            <path d="M103.7,62.57c2.47-4.08,5.3-9.65,5.3-16.44,0-18.31-14.35-33.21-32-33.21S45,27.81,45,46.13a33.15,33.15,0,0,0,6,19.1c.79,1.13,1.6,2.25,2.4,3.36,4,5.52,7.73,10.77,9.36,17.34a2,2,0,0,0,.21,4h.8a47.4,47.4,0,0,1,.46,5.69,2,2,0,0,0,2,1.93h21.4a2,2,0,0,0,2-1.92,41,41,0,0,1,.57-5.7H91a2,2,0,0,0,0-4h0c1.44-6.41,5.46-12.4,9.37-18.21C101.51,65.94,102.62,64.29,103.7,62.57Zm-17.94,31H68.17c-.09-1.51-.2-2.68-.33-3.62H86.17C86,90.86,85.87,92,85.77,93.54ZM97,65.47c-4.29,6.38-8.72,13-10.14,20.45h-20v0c-1.69-7.76-6-13.79-10.23-19.62-.79-1.1-1.58-2.2-2.37-3.32A29.18,29.18,0,0,1,49,46.13C49,30,61.56,16.92,77,16.92S105,30,105,46.13c0,4.53-1.46,9-4.7,14.35C99.27,62.11,98.17,63.74,97,65.47Z" />
            <path d="M69.5,100.92a2,2,0,0,0,0,4h15a2,2,0,0,0,0-4Z" />
            <path d="M77,0C51,0,30,22.18,29,50.48A7,7,0,0,1,28.42,53L20.16,67.24A8,8,0,0,0,19,71.71a8.34,8.34,0,0,0,8.37,7.76,2.7,2.7,0,0,1,2.74,2.65v9.34a17.88,17.88,0,0,0,18,17.7h4.76c7.42.61,11.17,3.67,11.17,9.09a2,2,0,0,0,4,0c0-7.56-5.44-12.33-14.93-13.09h-5a13.88,13.88,0,0,1-14-13.7V82.11a6.7,6.7,0,0,0-6.74-6.65,4.33,4.33,0,0,1-4.38-4,4.08,4.08,0,0,1,.61-2.22L31.93,55l.1-.18a11,11,0,0,0,1-4.16C33.89,24.48,53.21,4,77,4a2,2,0,0,0,0-4Z" />
            <path d="M96.24,40.07a19.9,19.9,0,0,0-1.5-3.62,4,4,0,0,0-.07-5.62l-2.59-2.59a4,4,0,0,0-5.62-.07,19.91,19.91,0,0,0-3.62-1.5,4,4,0,0,0-4-3.92H75.17a4,4,0,0,0-4,3.92,19.91,19.91,0,0,0-3.62,1.5,4.11,4.11,0,0,0-5.62.07l-2.59,2.59a4,4,0,0,0-.07,5.62,19.9,19.9,0,0,0-1.5,3.62,4,4,0,0,0-3.92,4v3.66a4,4,0,0,0,3.92,4,19.91,19.91,0,0,0,1.5,3.62A4,4,0,0,0,59.32,61l2.59,2.59a4,4,0,0,0,5.62.07,19.91,19.91,0,0,0,3.62,1.5,4,4,0,0,0,4,3.92h3.66a4,4,0,0,0,4-3.92,19.91,19.91,0,0,0,3.62-1.5,4,4,0,0,0,5.62-.07L94.67,61a4,4,0,0,0,.07-5.62,19.91,19.91,0,0,0,1.5-3.62,4,4,0,0,0,3.92-4V44.09A4,4,0,0,0,96.24,40.07Zm-.08,7.68-1.47,0a2,2,0,0,0-2,1.58,16,16,0,0,1-2.19,5.28,2,2,0,0,0,.27,2.5l1,1.05-2.61,2.59-1-1a2,2,0,0,0-2.5-.27,16,16,0,0,1-5.28,2.19,2,2,0,0,0-1.58,2l0,1.47-3.68,0V63.62a2,2,0,0,0-1.58-2,16,16,0,0,1-5.28-2.19,2,2,0,0,0-2.5.27l-1.05,1-2.59-2.61,1-1a2,2,0,0,0,.27-2.5,16,16,0,0,1-2.19-5.28,2,2,0,0,0-2-1.58l-1.47,0,0-3.68H59.3a2,2,0,0,0,2-1.58,16,16,0,0,1,2.19-5.28,2,2,0,0,0-.27-2.5l-1-1.05,2.61-2.59,1,1a2,2,0,0,0,2.5.27,16,16,0,0,1,5.28-2.19,2,2,0,0,0,1.58-2l0-1.47,3.68,0v1.45a2,2,0,0,0,1.58,2,16,16,0,0,1,5.28,2.19,2,2,0,0,0,2.5-.27l1.05-1,2.59,2.61-1,1a2,2,0,0,0-.27,2.5,16,16,0,0,1,2.19,5.28,2,2,0,0,0,2,1.58l1.47,0Z" />
            <path d="M77,34.92a11,11,0,1,0,11,11A11,11,0,0,0,77,34.92Zm0,18a7,7,0,1,1,7-7A7,7,0,0,1,77,52.92Z" />
            <circle cx="66.21" cy="126" r="2" />
          </svg> //Created by priyanka from https://thenounproject.com/
        ) : (
          <item.icon className="navigation__desktop-icon" />
        )}
      </div>
      <li className="navigation__desktop-element">{item.title}</li>
    </a>
  ));

  return (
    <nav className="navigation">
      <div className="navigation__mobile">
        <div
          className={
            hamburgerOpen
              ? "navigation__hamburger-menu-open"
              : "navigation__hamburger-menu"
          }
          onClick={() => setHamburgerOpen(!hamburgerOpen)}
        >
          <div className="navigation__hamburger-menu-bar"></div>
          <div className="navigation__hamburger-menu-bar"></div>
          <div className="navigation__hamburger-menu-bar"></div>
        </div>
        <div
          className="navigation__circle-container"
          style={
            hamburgerOpen ? { transform: "rotate(0deg)", opacity: "1" } : {}
          }
        >
          <div className="navigation__inner-lid"></div>
        </div>
        <ul className="navigation__container">{nav}</ul>
      </div>

      <ul className="navigation__desktop-container">{navDesktop}</ul>
    </nav>
  );
};

export default Navigation;
