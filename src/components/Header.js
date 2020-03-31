import React from "react";
import Navigation from "./parts/Navigation";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo__letter">W</span>
        <span className="logo__letter">e</span>
        <span className="logo__letter">l</span>
        <span className="logo__letter">c</span>
        <span className="logo__letter">o</span>
        <span className="logo__letter">m</span>
        <span className="logo__letter">e</span>
        <span className="logo__letter">!</span>
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
