import React from "react";
import Component161 from "../Component161";
import Component183 from "../Component183";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component193 from "../Component193";
import "./ChocoLanding4.css";

class ChocoLanding4 extends React.Component {
  render() {
    const {
      thetaSNativeDecen,
      chocoIsBuildingBa,
      bar21,
      howToParticipate,
      bar11,
      bar12,
      bar13,
      overlapGroup7,
      bar22,
      component161Props,
      component183Props,
      component173Props,
      component111Props,
      component101Props,
      component193Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="choco-landing-4 screen">
          <Component161
            className={component161Props.className}
            component91Props={component161Props.component91Props}
            component921Props={component161Props.component921Props}
            component922Props={component161Props.component922Props}
            component41Props={component161Props.component41Props}
          />
          <Component183 className={component183Props.className} />
          <div className="thetas-nativedecen-10 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
          <div className="choco-is-building-ba-10 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
          <div className="overlap-group8-11">
            <Component173
              className={component173Props.className}
              component411Props={component173Props.component411Props}
              component412Props={component173Props.component412Props}
            />
            <img className="bar2-20" src={bar21} />
          </div>
          <div className="how-to-participate-10 montserrat-semi-bold-white-63px">{howToParticipate}</div>
          <div className="overlap-group6-2">
            <Component111
              meltingAllowsYouT={component111Props.meltingAllowsYouT}
              className={component111Props.className}
              component42Props={component111Props.component42Props}
            />
            <Component101
              fire={component101Props.fire}
              moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
              className={component101Props.className}
              component42Props={component101Props.component42Props}
            />
            <img className="bar1-30" src={bar11} />
            <img className="bar1-31" src={bar12} />
            <img className="bar1-32" src={bar13} />
          </div>
          <div className="overlap-group7-10" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <img className="bar2-21" src={bar22} />
            <Component193
              component121Props={component193Props.component121Props}
              component141Props={component193Props.component141Props}
              component131Props={component193Props.component131Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChocoLanding4;
