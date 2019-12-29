import React from "react";
import { CSSTransition } from "react-transition-group";
import Particles from "react-particles-js";

import Spinner from "./Spinner";
import Name from "./Name";

import "../../assets/styles/Intro/Intro.scss";

const Intro = () => (
  <div className="intro">
    <Particles className="intro__particles" params={particleParams} />

    <Spinner />
    <CSSTransition appear classNames="intro__vertical-divider" in timeout={600}>
      <div />
    </CSSTransition>
    <Name />
  </div>
);

const particleParams = {
  particles: {
    number: {
      value: 20
    },
    color: {
      value: "#102542"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#102542"
      },
      polygon: {
        nb_sides: 3
      }
    },
    opacity: {
      value: 0.2,
      random: true
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 170,
      color: "#102542",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none"
    }
  },
  retina_detect: true
};

export default Intro;
