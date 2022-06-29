import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component231 from "../Component231";
import "./ChocoLanding.css";

class ChocoLanding extends React.Component {
  render() {
    const {
      overlapGroup8,
      chocolateBar_1F36B,
      choco,
      finance,
      chocoIsBuildingBa,
      bar21,
      howToParticipate,
      bar11,
      bar12,
      fallingchoco,
      thetaSNativeDecen,
      bar13,
      bar22,
      component161Props,
      component173Props,
      component111Props,
      component101Props,
      component231Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="choco-landing screen">
          <div className="flex-row-5">
            <div className="overlap-group8-6" style={{ backgroundImage: `url(${overlapGroup8})` }}>
              <img className="chocolate-bar_1f36b-19" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group-30">
              <div className="choco-19 montserrat-black-white-32px">{choco}</div>
              <div className="finance-19 montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="overlap-group11-3">
            <div className="overlap-group14-1">
              <div className="flex-col-20">
                <div className="choco-is-building-ba-6 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
                <Component173
                  component411Props={component173Props.component411Props}
                  component412Props={component173Props.component412Props}
                />
                <img className="bar2-12" src={bar21} />
              </div>
              <div className="overlap-group-container-5">
                <div className="overlap-group12-2">
                  <div className="how-to-participate-6 montserrat-semi-bold-white-70px">{howToParticipate}</div>
                  <div className="overlap-group9-4">
                    <Component111
                      meltingAllowsYouT={component111Props.meltingAllowsYouT}
                      component42Props={component111Props.component42Props}
                    />
                    <img className="bar1-18" src={bar11} />
                  </div>
                </div>
                <div className="overlap-group7-6">
                  <Component101
                    fire={component101Props.fire}
                    moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                    component42Props={component101Props.component42Props}
                  />
                  <img className="bar1-19" src={bar12} />
                </div>
              </div>
            </div>
            <img className="fallingchoco-3" src={fallingchoco} />
            <div className="thetas-nativedecen-6 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
          </div>
          <div className="overlap-group10-3">
            <div className="rectangle-2-3"></div>
            <img className="bar1-20" src={bar13} />
            <img className="bar2-13" src={bar22} />
            <Component231
              component121Props={component231Props.component121Props}
              component131Props={component231Props.component131Props}
              component141Props={component231Props.component141Props}
              component157Props={component231Props.component157Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChocoLanding;
