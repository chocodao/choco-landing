import React from "react";
import Component812 from "../Component812";
import Component912 from "../Component912";
import Component922 from "../Component922";
import Component412 from "../Component412";
import "./Component1612.css";

class Component1612 extends React.Component {
  render() {
    const {
      component812Props,
      component912Props,
      component9221Props,
      component9222Props,
      component412Props,
    } = this.props;

    return (
      <div className="component-16-1-10">
        <Component812 melt={component812Props.melt} line1={component812Props.line1} />
        <Component912 line2={component912Props.line2} place={component912Props.place} />
        <Component922 governance={component9221Props.governance} />
        <Component922 governance={component9222Props.governance} className={component9222Props.className} />
        <Component412>{component412Props.children}</Component412>
      </div>
    );
  }
}

export default Component1612;
