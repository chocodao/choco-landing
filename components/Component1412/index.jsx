import React from "react";
import Component1712 from "../Component1712";
import Component1722 from "../Component1722";
import Component1812 from "../Component1812";
import Component1822 from "../Component1822";
import "./Component1412.css";

class Component1412 extends React.Component {
  render() {
    const { learn, component1712Props, component1722Props, component1812Props, component1822Props } = this.props;

    return (
      <div className="component-14-1-5">
        <div className="learn-22 montserrat-normal-white-13px">{learn}</div>
        <div className="component-container-48">
          <Component1712>{component1712Props.children}</Component1712>
          <Component1722>{component1722Props.children}</Component1722>
        </div>
        <div className="component-container-49">
          <Component1812>{component1812Props.children}</Component1812>
          <Component1822>{component1822Props.children}</Component1822>
        </div>
      </div>
    );
  }
}

export default Component1412;
