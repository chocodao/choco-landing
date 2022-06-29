import React from "react";
import Component191 from "../Component191";
import Component1912 from "../Component1912";
import "./Component157.css";

class Component157 extends React.Component {
  render() {
    const { className, component191Props, component1912Props } = this.props;

    return (
      <div className={`component-15-7 ${className || ""}`}>
        <div className="contact-us montserrat-normal-white-30px">Contact us</div>
        <div className="component-container-40">
          <Component191>{component191Props.children}</Component191>
          <Component1912>{component1912Props.children}</Component1912>
        </div>
      </div>
    );
  }
}

export default Component157;
