import React from "react";
import Component171 from "../Component171";
import Component172 from "../Component172";
import Component181 from "../Component181";
import Component18122 from "../Component18122";
import "./Component141.css";

class Component141 extends React.Component {
  render() {
    const { className, component171Props, component181Props, component18122Props } = this.props;

    return (
      <div className={`component-14-1 ${className || ""}`}>
        <div className="learn-11 montserrat-normal-white-30px">Learn</div>
        <div className="component-container-20">
          <Component171>{component171Props.children}</Component171>
          <Component172 />
        </div>
        <div className="component-container-21">
          <Component181>{component181Props.children}</Component181>
          <Component18122>{component18122Props.children}</Component18122>
        </div>
      </div>
    );
  }
}

export default Component141;
