import React from "react";
import Component161 from "../Component161";
import Component183 from "../Component183";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component201 from "../Component201";
import "./Tablet.css";

class Tablet extends React.Component {
  render() {
    const {
      thetaSNativeDecen,
      chocoIsBuildingBa,
      bar21,
      howToParticipate,
      bar11,
      bar12,
      bar13,
      overlapGroup8,
      bar22,
      component161Props,
      component173Props,
      component111Props,
      component101Props,
      component201Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="tablet screen">
          <Component161
            className={component161Props.className}
            component91Props={component161Props.component91Props}
            component921Props={component161Props.component921Props}
            component922Props={component161Props.component922Props}
            component41Props={component161Props.component41Props}
          />
          <Component183 />
          <div className="thetas-nativedecen-3 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
          <div className="choco-is-building-ba-3 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
          <div className="flex-row-4">
            <img className="bar2-6" src={bar21} />
            <Component173
              className={component173Props.className}
              component411Props={component173Props.component411Props}
              component412Props={component173Props.component412Props}
            />
          </div>
          <div className="how-to-participate-3 montserrat-semi-bold-white-63px">{howToParticipate}</div>
          <div className="overlap-group7-3">
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
            <img className="bar1-9" src={bar11} />
            <img className="bar1-10" src={bar12} />
            <img className="bar1-11" src={bar13} />
          </div>
          <div className="overlap-group8-3" style={{ backgroundImage: `url(${overlapGroup8})` }}>
            <img className="bar2-7" src={bar22} />
            <Component201
              component121Props={component201Props.component121Props}
              component141Props={component201Props.component141Props}
              component131Props={component201Props.component131Props}
              component157Props={component201Props.component157Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tablet;
