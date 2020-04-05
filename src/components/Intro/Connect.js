import React from "react";

import GitHubIcon from "../../assets/icons/github.svg";
import LinkedinIcon from "../../assets/icons/linkedin.svg";

import "../../assets/styles/Intro/Connect.scss";

const githubURL = "https://www.github.com/natestgermain";
const linkedinURL = "https://www.linkedin.com/in/nathen-st-germain-bb376a129";

const Connect = () => (
  <div className="connect">
    <a href={githubURL}>
      <img alt="My GitHub: GitHub/natestgermain" src={GitHubIcon} />
    </a>
    <a href={linkedinURL}>
      <img alt="My Linkedin" src={LinkedinIcon} />
    </a>
  </div>
);

export default Connect;
