import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component221 from "../Component221";
import "./ChocoLanding1.css";

class ChocoLanding1 extends React.Component {
  render() {
    const {
      overlapGroup8,
      chocolateBar_1F36B,
      choco,
      finance,
      thetaSNativeDecen,
      chocoIsBuildingBa,
      fallingchoco,
      howToParticipate,
      bar11,
      bar12,
      bar21,
      bar13,
      bar22,
      component161Props,
      component173Props,
      component111Props,
      component101Props,
      component221Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="choco-landing-1 screen">
          <div className="flex-row-6">
            <div className="overlap-group8-7" style={{ backgroundImage: `url(${overlapGroup8})` }}>
              <img className="chocolate-bar_1f36b-20" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group-31">
              <div className="choco-20 montserrat-black-white-32px">{choco}</div>
              <div className="finance-20 montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              className={component161Props.className}
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="flex-row-7">
            <div className="flex-col-21">
              <div className="thetas-nativedecen-7 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
              <div className="choco-is-building-ba-7 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
              <Component173
                component411Props={component173Props.component411Props}
                component412Props={component173Props.component412Props}
              />
            </div>
            <img className="fallingchoco-4" src={fallingchoco} />
          </div>
          <div className="overlap-group-container-6">
            <div className="overlap-group11-4">
              <div className="overlap-group-container-7">
                <div className="overlap-group8-8">
                  <div className="how-to-participate-7 montserrat-semi-bold-white-70px">{howToParticipate}</div>
                  <div className="overlap-group10-4">
                    <Component111
                      meltingAllowsYouT={component111Props.meltingAllowsYouT}
                      className={component111Props.className}
                      component42Props={component111Props.component42Props}
                    />
                    <img className="bar1-21" src={bar11} />
                  </div>
                </div>
                <div className="overlap-group9-5">
                  <Component101
                    fire={component101Props.fire}
                    moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                    className={component101Props.className}
                    component42Props={component101Props.component42Props}
                  />
                  <img className="bar1-22" src={bar12} />
                </div>
              </div>
              <img className="bar2-14" src={bar21} />
            </div>
            <div className="overlap-group7-7">
              <div className="rectangle-2-4"></div>
              <img className="bar1-23" src={bar13} />
              <img className="bar2-15" src={bar22} />
              <Component221
                component121Props={component221Props.component121Props}
                component131Props={component221Props.component131Props}
                component141Props={component221Props.component141Props}
                component157Props={component221Props.component157Props}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChocoLanding1;
