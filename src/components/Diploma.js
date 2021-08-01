import React from "react";
import diploma_pic from "../img/diploma.pdf";

const Diploma = ({ text }) => {
  return (
    <a
      className="istqb news"
      href={diploma_pic}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Diploma;
