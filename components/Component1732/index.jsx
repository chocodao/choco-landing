import React from "react";
import Component412 from "../Component412";
import "./Component1732.css";

class Component1732 extends React.Component {
  render() {
    const { component4121Props, component4122Props } = this.props;

    return (
      <div className="component-17-3-1">
        <Component412 className={component4121Props.className}>{component4121Props.children}</Component412>
        <Component412 className={component4122Props.className}>{component4122Props.children}</Component412>
      </div>
    );
  }
}

export default Component1732;
