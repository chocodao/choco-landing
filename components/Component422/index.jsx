import React from "react";
import "./Component422.css";

class Component422 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/melt">
        <div className={`component-4-2-5 border-4px-white ${className || ""}`}>
          <div className="melt-26 montserrat-black-white-9px">{children}</div>
        </div>
      </a>
    );
  }
}

export default Component422;
