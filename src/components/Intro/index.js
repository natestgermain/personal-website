import React from "react";
import { CSSTransition } from "react-transition-group";

import Spinner from "./Spinner";
import Name from "./Name";

import "../../assets/styles/Intro/Intro.scss";

const Intro = () => (
  <div className="intro">
    <Spinner />
    <CSSTransition appear classNames="intro__vertical-divider" in timeout={600}>
      <div />
    </CSSTransition>
    <Name />
  </div>
);

export default Intro;
