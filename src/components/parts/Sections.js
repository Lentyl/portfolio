import React from "react";

import SECTIONS from "../../data/sections";
import CanvasAnimation from "./three-fiber/CanvasAnimation";
import SwiperGallery from "./SwiperGallery";
import Newspaper from "./Newspaper";

const sectionsList = SECTIONS;

const division = sectionsList.map((divisionItem) => {
  if (divisionItem.title === "About me") {
    return (
      <li
        id={divisionItem.title}
        className="sections__division-container"
        key={divisionItem.title}
      >
        <header
          className="sections__division-title"
          style={{ paddingTop: "70px" }}
        >
          {divisionItem.title}
        </header>
        <p className="sections__division-text">{divisionItem.text}</p>
        <div className="sections__division-me-bg"></div>
      </li>
    );
  } else if (divisionItem.title === "Skills") {
    return (
      <li
        id={divisionItem.title}
        className="sections__division-container"
        key={divisionItem.title}
      >
        <header className="sections__division-title">
          {divisionItem.title}
        </header>
        <p className="sections__division-text">{divisionItem.text}</p>
        <div className="sections__division-skills-bg"></div>
        <div className="sections__division-blocks-wrapper">
          <CanvasAnimation />
        </div>
        <div className="sections__division-cube-wrapper">
          <div className="sections__division-cube">
            <div className="sections__division-cube-side"></div>
            <div className="sections__division-cube-side"></div>
            <div className="sections__division-cube-side"></div>
            <div className="sections__division-cube-side"></div>
            <div className="sections__division-cube-side"></div>
            <div className="sections__division-cube-side"></div>
          </div>
        </div>
      </li>
    );
  } else if (divisionItem.title === "Projects") {
    return (
      <li
        id={divisionItem.title}
        className="sections__division-container"
        key={divisionItem.title}
      >
        <header className="sections__division-title">
          {divisionItem.title}
        </header>
        <SwiperGallery />
      </li>
    );
  } else if (divisionItem.title === "Contact") {
    return (
      <li
        id={divisionItem.title}
        className="sections__division-container"
        key={divisionItem.title}
      >
        <header className="sections__division-title">
          {divisionItem.title}
        </header>

        <div className="sections__division-contact-wrapper">
          <Newspaper />
        </div>
      </li>
    );
  }

  return null;
});

const Sections = () => {
  return <ul className="sections">{division}</ul>;
};

export default Sections;
