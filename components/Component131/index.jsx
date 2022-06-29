import React from "react";
import Component151 from "../Component151";
import Component152 from "../Component152";
import "./Component131.css";

class Component131 extends React.Component {
  render() {
    const { className, component1511Props, component1512Props, component152Props, component1513Props } = this.props;

    return (
      <div className={`component-13-1 ${className || ""}`}>
        <div className="products montserrat-normal-white-30px">Products</div>
        <div className="component-container">
          <Component151>{component1511Props.children}</Component151>
          <Component151 className={component1512Props.className}>{component1512Props.children}</Component151>
        </div>
        <div className="component-container-1">
          <Component152>{component152Props.children}</Component152>
          <Component151 className={component1513Props.className}>{component1513Props.children}</Component151>
        </div>
      </div>
    );
  }
}

export default Component131;
