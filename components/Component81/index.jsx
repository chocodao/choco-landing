import React from "react";
import "./Component81.css";

class Component81 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/melt">
        <div className={`component-8-1 ${className || ""}`}>
          <div className="overlap-group-1">
            <div className="melt montserrat-black-white-20px">MELT</div>
            <img className="line-1" src="/img/line-1@1x.png" />
          </div>
        </div>
      </a>
    );
  }
}

export default Component81;
