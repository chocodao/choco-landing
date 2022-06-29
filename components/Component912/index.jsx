import React from "react";
import "./Component912.css";

class Component912 extends React.Component {
  render() {
    const { line2, place } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/mold">
        <div className="component-9-1-2">
          <img className="line-2-22" src={line2} />
          <div className="place-25 montserrat-black-white-9px">{place}</div>
        </div>
      </a>
    );
  }
}

export default Component912;
