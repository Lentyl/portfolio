import React, { useEffect } from "react";
import Swiper from "swiper";
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
          <div className="title" data-swiper-parallax="-300">
            Praktyczny Rodzic.
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          <p>Blog website with small CMS, where you can add articles, confirm comments and read messages from users.</p>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
           
            Kids are the main subject of this website and everything related to them. Handy tips that can help parents to survive another day.
            Access to admin panel is hidden after typing praktyczny-rodzic.herokuapp.com/admin or login type user: maniek, password: 123.
            </p>
          </div>
            <a className="swiper-slide swiper__project-container swiper__slide1-position"  href="https://praktyczny-rodzic.herokuapp.com">
              {/* <div className="swiper-slide swiper__project-container "></div> */}
            </a> 
        </div>
        <div className="swiper-slide swiper-slide-active">
          <div
            className="title"
            data-swiper-parallax="-300"
            data-swiper-parallax-opacity="0"
          >
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <div className="swiper-slide swiper__project-container swiper__slide2-position"></div>
        </div>
        <div className="swiper-slide">
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
          <div className="swiper-slide swiper__project-container swiper__slide3-position"></div>
        </div>
      </div>

      <div className="swiper-pagination swiper-pagination-white"></div>

      <div className="swiper-button-prev swiper-button-white"></div>
      <div className="swiper-button-next swiper-button-white"></div>
    </div>
  );
};
export default SwiperGallery;
