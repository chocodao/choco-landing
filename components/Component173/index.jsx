import React from "react";
import Component41 from "../Component41";
import "./Component173.css";

class Component173 extends React.Component {
  render() {
    const { className, component411Props, component412Props } = this.props;

    return (
      <div className={`component-17-3 ${className || ""}`}>
        <Component41 className={component411Props.className}>{component411Props.children}</Component41>
        <Component41 className={component412Props.className}>{component412Props.children}</Component41>
      </div>
    );
  }
}

export default Component173;
