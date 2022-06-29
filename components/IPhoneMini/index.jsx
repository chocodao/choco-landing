import React from "react";
import Component1612 from "../Component1612";
import Component1832 from "../Component1832";
import Component1732 from "../Component1732";
import Component1112 from "../Component1112";
import Component1012 from "../Component1012";
import Component1932 from "../Component1932";
import "./IPhoneMini.css";

class IPhoneMini extends React.Component {
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
      component1612Props,
      component1832Props,
      component1732Props,
      component1112Props,
      component1012Props,
      component1932Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="iphone-mini screen">
          <Component1612
            component812Props={component1612Props.component812Props}
            component912Props={component1612Props.component912Props}
            component9221Props={component1612Props.component9221Props}
            component9222Props={component1612Props.component9222Props}
            component412Props={component1612Props.component412Props}
          />
          <Component1832
            chocolateBar_1F36B={component1832Props.chocolateBar_1F36B}
            choco={component1832Props.choco}
            finance={component1832Props.finance}
          />
          <div className="thetas-nativedecen-5 montserrat-semi-bold-white-33px">{thetaSNativeDecen}</div>
          <p className="choco-is-building-ba-5 montserrat-normal-white-9px">{chocoIsBuildingBa}</p>
          <div className="overlap-group8-5">
            <Component1732
              component4121Props={component1732Props.component4121Props}
              component4122Props={component1732Props.component4122Props}
            />
            <img className="bar2-10" src={bar21} />
          </div>
          <div className="how-to-participate-5">{howToParticipate}</div>
          <div className="overlap-group6-1">
            <Component1112
              quad={component1112Props.quad}
              melting={component1112Props.melting}
              meltingAllowsYouT={component1112Props.meltingAllowsYouT}
              component422Props={component1112Props.component422Props}
            />
            <Component1012
              fire={component1012Props.fire}
              molding={component1012Props.molding}
              moldersPlayAnImpo={component1012Props.moldersPlayAnImpo}
              component422Props={component1012Props.component422Props}
            />
            <img className="bar1-15" src={bar11} />
            <img className="bar1-16" src={bar12} />
            <img className="bar1-17" src={bar13} />
          </div>
          <div className="overlap-group7-5" style={{ backgroundImage: `url(${overlapGroup7})` }}>
            <img className="bar2-11" src={bar22} />
            <Component1932
              component1212Props={component1932Props.component1212Props}
              component1412Props={component1932Props.component1412Props}
              component1312Props={component1932Props.component1312Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default IPhoneMini;
