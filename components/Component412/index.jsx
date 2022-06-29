import React from "react";
import "./Component412.css";

class Component412 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/mold">
        <div className={`component-4-1-5 border-1px-dove-gray ${className || ""}`}>
          <div className="enter-app-14 montserrat-black-white-9px">{children}</div>
        </div>
      </a>
    );
  }
}

export default Component412;
