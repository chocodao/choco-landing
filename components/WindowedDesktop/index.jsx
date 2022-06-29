import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component221 from "../Component221";
import "./WindowedDesktop.css";

class WindowedDesktop extends React.Component {
  render() {
    const {
      overlapGroup9,
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
        <div className="windowed-desktop screen">
          <div className="flex-row-1">
            <div className="overlap-group9-1" style={{ backgroundImage: `url(${overlapGroup9})` }}>
              <img className="chocolate-bar_1f36b-11" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group-21">
              <div className="choco-11 montserrat-black-white-32px">{choco}</div>
              <div className="finance-11 montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              className={component161Props.className}
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="flex-row-2">
            <div className="flex-col-8">
              <div className="thetas-nativedecen-1 montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
              <div className="choco-is-building-ba-1 montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
              <Component173
                component411Props={component173Props.component411Props}
                component412Props={component173Props.component412Props}
              />
            </div>
            <img className="fallingchoco-1" src={fallingchoco} />
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group11-1">
              <div className="overlap-group-container-2">
                <div className="overlap-group9-2">
                  <div className="how-to-participate-1 montserrat-semi-bold-white-70px">{howToParticipate}</div>
                  <div className="overlap-group10-1">
                    <Component111
                      meltingAllowsYouT={component111Props.meltingAllowsYouT}
                      className={component111Props.className}
                      component42Props={component111Props.component42Props}
                    />
                    <img className="bar1-3" src={bar11} />
                  </div>
                </div>
                <div className="overlap-group7-1">
                  <Component101
                    fire={component101Props.fire}
                    moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                    className={component101Props.className}
                    component42Props={component101Props.component42Props}
                  />
                  <img className="bar1-4" src={bar12} />
                </div>
              </div>
              <img className="bar2-2" src={bar21} />
            </div>
            <div className="overlap-group8-1">
              <div className="rectangle-2-1"></div>
              <img className="bar1-5" src={bar13} />
              <img className="bar2-3" src={bar22} />
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

export default WindowedDesktop;
