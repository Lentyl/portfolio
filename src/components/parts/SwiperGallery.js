import React, { useEffect } from "react";
import Swiper from "swiper";
import SwiperComponent from "./SwiperComponent";
//import praktycznyRodzic from "../../img/praktyczny-rodzic.webp"

const SwiperGallery = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      speed: 500,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="parallax-bg" data-swiper-parallax="-23%"></div>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <SwiperComponent
            title="farm-market"
            subtitle="A trading web application where you can buy and sell fruits and vegetables.
            Clients have their own panel where they can check their orders, edit contact details and search the best offers."
            text="We all know how hard times have become for farmers. This application met their demand for wider access to new clients.
            The strongest aspect of this app is geolocation with google maps, that helps client to find the closest provider."
            hostHref="https://farm-market-app-74e39.web.app/"
            githubHref="https://github.com/Lentyl/farm-m"
            slideNumber={1}
          />
        </div>
        <div className="swiper-slide swiper-slide-active">
          <SwiperComponent
            title="Praktyczny Rodzic"
            subtitle="A blog website with small CMS, where you can add articles, confirm comments and read messages from users."
            text="Children are the main subject of this website and everything related to them.
            There are handy tips to help parents survive another day.
            Access to the admin panel is hidden after typing praktyczny-rodzic.herokuapp.com/admin or login type user: maniek, password: 123."
            hostHref="https://praktyczny-rodzic.herokuapp.com"
            githubHref="https://github.com/Lentyl/praktyczny-rodzic"
            slideNumber={2}
          />
        </div>
        <div className="swiper-slide">
          <SwiperComponent
            title="Social Web app"
            subtitle="coming soon"
            text=""
            hostHref=""
            githubHref=""
            slideNumber={3}
          />
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination-white"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
      <div className="swiper-button-next swiper-button-white"></div>
    </div>
  );
};
export default SwiperGallery;
