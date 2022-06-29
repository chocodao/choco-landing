import React from "react";
import Component81 from "../Component81";
import Component91 from "../Component91";
import Component92 from "../Component92";
import Component41 from "../Component41";
import "./Component161.css";

class Component161 extends React.Component {
  render() {
    const { className, component91Props, component921Props, component922Props, component41Props } = this.props;

    return (
      <div className={`component-16-1 ${className || ""}`}>
        <Component81 />
        <Component91 className={component91Props.className} />
        <Component92 governance={component921Props.governance} className={component921Props.className} />
        <Component92 governance={component922Props.governance} className={component922Props.className} />
        <Component41 className={component41Props.className}>{component41Props.children}</Component41>
      </div>
    );
  }
}

export default Component161;
