import React from "react";
import { CSSTransition } from "react-transition-group";

import CloseupSquare from "../../assets/images/closeup-square.jpg";

import "../../assets/styles/Intro/Spinner.scss";

const Spinner = () => {
  return (
    <CSSTransition appear classNames="spinner" in timeout={1000}>
      <div className="spinner">
        <img alt="Closeup of Nate" className="closeup" src={CloseupSquare} />
      </div>
    </CSSTransition>
  );
};

export default Spinner;
