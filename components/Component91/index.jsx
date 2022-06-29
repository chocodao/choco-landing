import React from "react";
import "./Component91.css";

class Component91 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/mold">
        <div className={`component-9-1 ${className || ""}`}>
          <img className="line-2" src="/img/line-2-1@1x.png" />
          <div className="place montserrat-black-white-20px">MOLD</div>
        </div>
      </a>
    );
  }
}

export default Component91;
