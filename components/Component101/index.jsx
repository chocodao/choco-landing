import React from "react";
import Component42 from "../Component42";
import "./Component101.css";

class Component101 extends React.Component {
  render() {
    const { fire, moldersPlayAnImpo, className, component42Props } = this.props;

    return (
      <div className={`component-10-1 border-1px-dove-gray ${className || ""}`}>
        <img className="fire" src={fire} />
        <div className="molding montserrat-semi-bold-white-70px">Molding</div>
        <div className="molders-play-an-impo montserrat-normal-white-20px">{moldersPlayAnImpo}</div>
        <Component42 className={component42Props.className}>{component42Props.children}</Component42>
      </div>
    );
  }
}

export default Component101;
