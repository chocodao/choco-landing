import React from "react";
import "./Component42.css";

class Component42 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/melt">
        <div className={`component-4-2 border-4px-white ${className || ""}`}>
          <div className="melt-11 montserrat-black-white-20px">{children}</div>
        </div>
      </a>
    );
  }
}

export default Component42;
