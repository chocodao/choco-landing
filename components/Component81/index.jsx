import React from "react";
import "./Component81.sass";

class Component81 extends React.Component {
  render() {
    const { melt, line1 } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/melt">
        <div className="component-8-1">
          <div className="overlap-group2-1">
            <div className="melt montserrat-black-white-20px">{melt}</div>
            <img className="line-1" src={line1} />
          </div>
        </div>
      </a>
    );
  }
}

export default Component81;
