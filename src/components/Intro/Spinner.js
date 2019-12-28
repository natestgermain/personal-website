import React from "react";
import { CSSTransition } from "react-transition-group";

import "../../assets/styles/Intro/Spinner.scss";

const Spinner = () => {
  return (
    <CSSTransition appear classNames="spinner" in timeout={850}>
      <div />
    </CSSTransition>
  );
};

export default Spinner;
