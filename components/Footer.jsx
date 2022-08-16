import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>&copy;2022 Shoeniverse All rights reserved</p>
      <p className="icons">
        <AiFillGithub />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
