import React, { useState, useEffect } from "react";
import newsGiff from "../../img/news-giff.webp";
import {
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
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
        There's plenty going on across the city from developers and testers area of interest.
        New software is made by creative and hardworking people that are coming to the market. 
        One of them is Mariusz Podgorski. His current education is closely related to software development
        which is necessary for effective acting in the range of duties that are required on that profesionss. 
        Main reason why he decided to start looking for a job as Web Developer / Tester is very strong will of finding an accurate occupation for his interests and skills.
        He is looking for a company where he would be able to dedicate his time, effort and satisfy his ambition.
        If You are interested in his person do not hesitate, he will be grateful for opportunity of an interview to show the full spectrum of his skills.
        During the education he became familiar with many kinds of software testing which contains syllabus ISTQB.
        This can make up a good base for future cooperation.
        He was able to use his theoretical knowledge in projects that you can see above.
        His command of English let him easily read documentation, books and communicate with colleagues and customers at work. 
        I am sure that he will be able to follow the duties needed on this positions.
        His trumps are also easiness in communicating with people that have different opinion and represent divers professions, and also cooperating group skills.
        He is a person who mark himself concrete targets and know how to adapt it to team problems.
        The feature of analytical thinking which is necessary to execute complicated tasks is one of his biggest strenghts.
        It is also characteristic for him that he is consistent in action and responsible at work.
        Surely he fulfill your requirements if You give him the opportunity to cooperate with You.
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
