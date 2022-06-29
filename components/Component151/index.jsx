import React from "react";
import "./Component151.css";

class Component151 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div className={`component-15-3 ${className || ""}`}>
        <div className="molding-1 montserrat-semi-bold-white-20px">{children}</div>
      </div>
    );
  }
}

export default Component151;
