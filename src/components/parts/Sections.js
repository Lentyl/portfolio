import React from "react";
import SECTIONS from "../../data/sections";
import CanvasAnimation from "./three-fiber/CanvasAnimation";
import Certificate from "../Certificate"
import SwiperGallery from "./SwiperGallery";
import Newspaper from "./Newspaper";
import {GiSideswipe} from "react-icons/gi"

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
        <p className="sections__division-text">
          I am a QA Automation Engineer with over five years of experience
          testing web applications, currently focused on financial and
          investment products. I build automation frameworks and develop and
          maintain test suites using Playwright with TypeScript, Selenium and
          REST Assured with Java. My work also includes API, exploratory,
          front-end and integration testing, performance testing with k6,
          setting up Jenkins pipelines, and supporting teammates in test
          automation. I also define AI workflows for testing. I hold a
          postgraduate diploma in Software Testing and the ISTQB Foundation
          Level certification ({<Certificate />}).
        </p>
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
          {divisionItem.title} <div className="sections__division-subtitle"><span>swipe</span> <GiSideswipe/></div>
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
