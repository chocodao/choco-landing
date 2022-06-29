import React from "react";
import Component42 from "../Component42";
import "./Component111.css";

class Component111 extends React.Component {
  render() {
    const { meltingAllowsYouT, className, component42Props } = this.props;

    return (
      <div className={`component-11-1 border-1px-dove-gray ${className || ""}`}>
        <img className="quad" src="/img/quad@1x.png" />
        <div className="melting montserrat-semi-bold-white-70px">Melting</div>
        <div className="melting-allows-you-t montserrat-normal-white-20px">{meltingAllowsYouT}</div>
        <Component42 className={component42Props.className}>{component42Props.children}</Component42>
      </div>
    );
  }
}

export default Component111;
