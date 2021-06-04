import React, { useState, useEffect } from "react";
import newsGiff from "../../img/news-giff.webp";
import {
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import Certificate from '../Certificate'
import Pdf from "../../img/MariuszPodgorskiCV-English.pdf";
import Extra from "../../mp3/Extra-Read-All-About-It.mp3";
import ReactHowler from 'react-howler';

const Newspaper = () => {
  const [date, setDate] = useState(null);
 

  const [newsStart, setNewsStart] = useState(false);

  useEffect(() => {
    //sound
 
    const contactDistance = document
      .querySelector(".sections__division-contact-wrapper")
      .getBoundingClientRect().top;
    const dist = window.scrollY + contactDistance - 80;

    let play = true;

    document.addEventListener("scroll", () => {
      if (window.scrollY >= dist && play === true) {
        setNewsStart(true);
        play = false;
      }
    });

    //date newspaper
    const time = new Date().toISOString().slice(0, 10);
    setDate(time);
  }, []);
  return (
    <div
      className={`contact__newspaper-container ${newsStart && "contact__newspaper-container-spin"
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
        There's plenty going on across the city in the developers and testers area of interest. 
        New software is made by creative and hardworking people that are coming to the market. 
        One of them is Mariusz Podgorski. His current education is closely related to software development
        which is necessary for being effective in the range of duties that are required in that profession.
        The main reason why he decided to start looking for a job as Web Developer / Tester is a very strong
        will of finding an accurate occupation for his interests and skills. He is looking for a company
        where he would be able to dedicate his time, effort and satisfy his ambition. If you are interested
        in his skills do not hesitate, he will be grateful for an opportunity to meet you and show the full spectrum of his skills.
        </p>
        <p className="contact__newspaper-article news">
        During his education he became familiar with many kinds of software testing which contains syllabus ISTQB.
        He proved his knowledge getting <Certificate/>. 
        This can form a good base for future cooperation. He was able to use his theoretical knowledge in the projects
        that you can see above. His command of English lets him easily read documentation, books and communicate with colleagues
        and customers at work. I am sure that he will be able to follow the duties needed of any future positions.
        His key strengths are easiness in communicating with people that have different opinions and representing diverse professions,
        whilst also keen to  cooperate in a group setting. He is a person who gives himself firm targets and knows how to adapt it to team problems.
        One of his biggest strengths is analytical thinking, necessary to execute complicated tasks.
        It is also characteristic for him that he is consistent in his approach and is responsible at work.
        He will fulfill your requirements if given the opportunity to cooperate with you. 
        </p>
        <p className="contact__newspaper-article news">
        Do not waste another minute, contact details are below.
        </p>
        <ReactHowler
        src={Extra}
        playing={newsStart?true:false}
        preload={true}
      />
        <div className="contact__newspaper-media-container">
          <a className="contact__newspaper-tel-link" href="tel:+48795-702-478">
            <FaPhoneAlt className="contact__newspaper-tel-button" />
          </a>
          +48 795-702-478
        </div>

        <div className="contact__newspaper-media-container">
          <a
            className="contact__newspaper-media-link"
            href="mailto:m.b.podgorski1984@gmail.com?subject=Wiadomość%20ze%20strony%20podgorskiportfolio.pl&body=Cześć Mariusz,"
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
