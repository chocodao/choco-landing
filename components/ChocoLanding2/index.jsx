import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component211 from "../Component211";
import "./ChocoLanding2.css";

class ChocoLanding2 extends React.Component {
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
        <div className="choco-landing-2 screen">
          <div className="flex-row-8">
            <div className="overlap-group9-6" style={{ backgroundImage: `url(${overlapGroup9})` }}>
              <img className="chocolate-bar_1f36b-21" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group-32">
              <div className="choco-21 montserrat-black-white-32px">{choco}</div>
              <div className="finance-21 montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              className={component161Props.className}
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="overlap-group13-1">
            <Component173
              className={component173Props.className}
              component411Props={component173Props.component411Props}
              component412Props={component173Props.component412Props}
            />
            <div className="overlap-group8-9">
              <img className="fallingchoco-5" src={fallingchoco} />
              <div className="thetas-nativedecen-8 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
            </div>
            <div className="choco-is-building-ba-8 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
          </div>
          <div className="overlap-group-container-8">
            <div className="overlap-group-container-9">
              <div className="overlap-group12-3">
                <div className="how-to-participate-8 montserrat-semi-bold-white-70px">{howToParticipate}</div>
                <img className="bar2-16" src={bar21} />
              </div>
              <div className="overlap-group10-5">
                <Component111
                  meltingAllowsYouT={component111Props.meltingAllowsYouT}
                  className={component111Props.className}
                  component42Props={component111Props.component42Props}
                />
                <img className="bar1-24" src={bar11} />
              </div>
            </div>
            <div className="overlap-group11-5">
              <Component101
                fire={component101Props.fire}
                moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                className={component101Props.className}
                component42Props={component101Props.component42Props}
              />
              <img className="bar1-25" src={bar12} />
            </div>
          </div>
          <div className="overlap-group7-8">
            <div className="rectangle-2-5"></div>
            <img className="bar1-26" src={bar13} />
            <img className="bar2-17" src={bar22} />
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

export default ChocoLanding2;
