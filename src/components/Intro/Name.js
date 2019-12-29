import React from "react";
import { CSSTransition } from "react-transition-group";

import "../../assets/styles/Intro/Name.scss";

const Name = () => {
  return (
    <div className="name">
      <CSSTransition appear classNames="sliding-names" in timeout={800}>
        <div>
          <div className="first-name">NATE</div>
          <div className="last-name">ST. GERMAIN</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Name;
