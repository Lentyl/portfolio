import React, { useState, useEffect } from "react";
import newsGiff from "../../img/news-giff.webp";
import Extra from "../../mp3/Extra-Read-All-About-It.mp3";

import { Howl } from "howler";

const Newspaper = () => {
  const [date, setDate] = useState(null);

  const [newsStart, setNewsStart] = useState(false);

  var sound = new Howl({
    src: [Extra],
  });

  useEffect(() => {
    //sound
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

        <img class="contact__newspaper-giff" src={newsGiff} alt="" />

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
      </div>
    </div>
  );
};

export default Newspaper;
