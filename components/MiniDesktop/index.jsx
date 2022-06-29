import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component211 from "../Component211";
import "./MiniDesktop.css";

class MiniDesktop extends React.Component {
  render() {
    const {
      overlapGroup9,
      chocolateBar_1F36B,
      choco,
      finance,
      fallingchoco,
      thetaSNativeDecen,
      chocoIsBuildingBa,
      howToParticipate,
      bar21,
      bar11,
      bar12,
      bar13,
      bar22,
      component161Props,
      component173Props,
      component111Props,
      component101Props,
      component211Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="mini-desktop screen">
          <div className="flex-row-3">
            <div className="overlap-group9-3" style={{ backgroundImage: `url(${overlapGroup9})` }}>
              <img className="chocolate-bar_1f36b-12" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group-22">
              <div className="choco-12 montserrat-black-white-32px">{choco}</div>
              <div className="finance-12 montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              className={component161Props.className}
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="overlap-group13">
            <Component173
              className={component173Props.className}
              component411Props={component173Props.component411Props}
              component412Props={component173Props.component412Props}
            />
            <div className="overlap-group10-2">
              <img className="fallingchoco-2" src={fallingchoco} />
              <div className="thetas-nativedecen-2 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
            </div>
            <div className="choco-is-building-ba-2 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
          </div>
          <div className="overlap-group-container-3">
            <div className="overlap-group-container-4">
              <div className="overlap-group11-2">
                <div className="how-to-participate-2 montserrat-semi-bold-white-70px">{howToParticipate}</div>
                <img className="bar2-4" src={bar21} />
              </div>
              <div className="overlap-group12-1">
                <Component111
                  meltingAllowsYouT={component111Props.meltingAllowsYouT}
                  className={component111Props.className}
                  component42Props={component111Props.component42Props}
                />
                <img className="bar1-6" src={bar11} />
              </div>
            </div>
            <div className="overlap-group8-2">
              <Component101
                fire={component101Props.fire}
                moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                className={component101Props.className}
                component42Props={component101Props.component42Props}
              />
              <img className="bar1-7" src={bar12} />
            </div>
          </div>
          <div className="overlap-group7-2">
            <div className="rectangle-2-2"></div>
            <img className="bar1-8" src={bar13} />
            <img className="bar2-5" src={bar22} />
            <Component211
              component121Props={component211Props.component121Props}
              component131Props={component211Props.component131Props}
              component141Props={component211Props.component141Props}
              component157Props={component211Props.component157Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MiniDesktop;
