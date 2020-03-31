import React from "react";

const navList = [
  {
    name: "O mnie"
  },
  {
    name: "umniejętności"
  },
  {
    name: "Projekty"
  }
];

const Navigation = () => {
  const nav = navList.map(item => (
    <li className="navigation__element" key={item.name}>
      {item.name}
    </li>
  ));

  return (
    <nav className="navigation">
      <ul className="navigation__container">{nav}</ul>

      <div className="app-header__hamburger-menu">
        <div className="app-header__hamburger-menu-bar"></div>
        <div className="app-header__hamburger-menu-bar"></div>
        <div className="app-header__hamburger-menu-bar"></div>
      </div>
    </nav>
  );
};

export default Navigation;
