import React from "react";
import "./Component812.css";

class Component812 extends React.Component {
  render() {
    const { melt, line1 } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/melt">
        <div className="component-8-1-2">
          <div className="overlap-group-27">
            <div className="melt-25 montserrat-black-white-9px">{melt}</div>
            <img className="line-1-11" src={line1} />
          </div>
        </div>
      </a>
    );
  }
}

export default Component812;
