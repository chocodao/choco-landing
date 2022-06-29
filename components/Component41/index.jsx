import React from "react";
import "./Component41.css";

class Component41 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/mold" className="align-self-flex-start">
        <div className={`component-4-1 border-1px-dove-gray ${className || ""}`}>
          <div className="enter-app montserrat-black-white-20px">{children}</div>
        </div>
      </a>
    );
  }
}

export default Component41;
