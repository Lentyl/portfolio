import React from "react";

const SwiperComponent = ({ title, subtitle, text, hostHref, githubHref, slideNumber }) => {
  return (
    <div className="swiper-component">
      <h2 className="swiper-component__title" data-swiper-parallax="-300">
        {title}
      </h2>
      <h6 className="swiper-component__subtitle" data-swiper-parallax="-200">
        {subtitle}
      </h6>
      <p className="swiper-component__text" data-swiper-parallax="-100">
        {text}
      </p>
      <a
        className={`swiper-component__project-container swiper-component__slide${slideNumber}-position`}
        href={hostHref}
      />
      <div className="swiper-component__btn-container">
        <a href={hostHref}>
          <button className="swiper-component__btn-live">Live</button>
        </a>
        <a href={githubHref}>
          <button className="swiper-component__btn-code">Code</button>
        </a>
      </div>
    </div>
  );
};

export default SwiperComponent;
