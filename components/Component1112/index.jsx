import React from "react";
import Component422 from "../Component422";
import "./Component1112.css";

class Component1112 extends React.Component {
  render() {
    const { quad, melting, meltingAllowsYouT, component422Props } = this.props;

    return (
      <div className="component-11-1-14 border-1px-dove-gray">
        <img className="quad-2" src={quad} />
        <div className="melting-22 montserrat-semi-bold-white-33px">{melting}</div>
        <p className="melting-allows-you-t-2 montserrat-normal-white-9px">{meltingAllowsYouT}</p>
        <Component422>{component422Props.children}</Component422>
      </div>
    );
  }
}

export default Component1112;
