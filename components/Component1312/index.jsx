import React from "react";
import Component1532 from "../Component1532";
import Component1522 from "../Component1522";
import "./Component1312.css";

class Component1312 extends React.Component {
  render() {
    const { products, component15321Props, component15322Props, component1522Props, component15323Props } = this.props;

    return (
      <div className="component-13-1-10">
        <div className="products-10 montserrat-normal-white-13px">{products}</div>
        <div className="component-container-50">
          <Component1532>{component15321Props.children}</Component1532>
          <Component1532 className={component15322Props.className}>{component15322Props.children}</Component1532>
        </div>
        <div className="component-container-51">
          <Component1522>{component1522Props.children}</Component1522>
          <Component1532 className={component15323Props.className}>{component15323Props.children}</Component1532>
        </div>
      </div>
    );
  }
}

export default Component1312;
