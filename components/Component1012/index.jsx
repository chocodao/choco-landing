import React from "react";
import Component422 from "../Component422";
import "./Component1012.css";

class Component1012 extends React.Component {
  render() {
    const { fire, molding, moldersPlayAnImpo, component422Props } = this.props;

    return (
      <div className="component-10-1-5 border-1px-dove-gray">
        <img className="fire-1" src={fire} />
        <div className="molding-20 montserrat-semi-bold-white-33px">{molding}</div>
        <p className="molders-play-an-impo-1 montserrat-normal-white-9px">{moldersPlayAnImpo}</p>
        <Component422 className={component422Props.className}>{component422Props.children}</Component422>
      </div>
    );
  }
}

export default Component1012;
