import React, { useState, useEffect } from "react";
import newsGiff from "../../img/news-giff.webp";
import {
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import Pdf from "../../img/CurriculumVitae.pdf";
import Extra from "../../mp3/Extra-Read-All-About-It.mp3";

import { Howl } from "howler";

const Newspaper = () => {
  const [date, setDate] = useState(null);

  const [newsStart, setNewsStart] = useState(false);

  useEffect(() => {
    //sound
    const sound = new Howl({
      src: [Extra],
    });
    const contactDistance = document
      .querySelector(".sections__division-contact-wrapper")
      .getBoundingClientRect().top;
    const dist = window.scrollY + contactDistance;

    let play = true;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= dist && play === true) {
        setNewsStart(true);
        sound.play();
        play = false;
      }
    });

    //date newspaper
    const time = new Date().toISOString().slice(0, 10);
    setDate(time);
  }, []);
  return (
    <div
      className={`contact__newspaper-container ${
        newsStart && "contact__newspaper-container-spin"
      }`}
    >
      <h2 className="contact__newspaper-container-title news">
        GDAŃSK DAILY POST
      </h2>
      <div className="contact__newspaper-data-wrapper">
        <p className=" contact__newspaper-data news">{date}</p>
      </div>
      <div className="contact__newspaper-article-wrapper">
        <h3 className="contact__newspaper-article-title news">
          New developer on the market
        </h3>
        <h4 className="contact__newspaper-article-subtitle news">
          Quality & Creativity
        </h4>

        <img className="contact__newspaper-giff" src={newsGiff} alt="" />

        <p className="contact__newspaper-article news">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div className="contact__newspaper-media-container">
          <a className="contact__newspaper-tel-link" href="tel:+44795-537-1215">
            <FaPhoneAlt className="contact__newspaper-tel-button" />
          </a>
          +44 795-537-1215
        </div>

        <div className="contact__newspaper-media-container">
          <a
            className="contact__newspaper-media-link"
            href="mailto:m.b.podgorski1984@gmail.com?subject=Wiadomość%20ze%20strony%20podgorskiportfolio.pl&bcc=m.b.podgorski1984@gmail.com&body=Cześć Mariusz,"
          >
            <FaEnvelope />
          </a>
          m.b.podgorski1984@gmail.com
        </div>

        <div className="contact__newspaper-media-container">
          <a
            className="contact__newspaper-media-link"
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload />
          </a>
          Curriculum vitae
        </div>

        <div className="contact__newspaper-media-container contact__newspaper-media-center">
          <a
            className="contact__newspaper-media-link"
            href="https://github.com/Lentyl?tab=repositories"
          >
            <FaGithub className="contact__newspaper-media-icon" />
          </a>
          <a
            className="contact__newspaper-media-link"
            href="https://www.facebook.com/mariusz.podgorski.9"
          >
            <FaFacebook className="contact__newspaper-media-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
