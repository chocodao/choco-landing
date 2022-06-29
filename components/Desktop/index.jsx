import React from "react";
import Component161 from "../Component161";
import Component173 from "../Component173";
import Component111 from "../Component111";
import Component101 from "../Component101";
import Component231 from "../Component231";
import "./Desktop.css";

class Desktop extends React.Component {
  render() {
    const {
      overlapGroup7,
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
        <div className="desktop screen">
          <div className="flex-row">
            <div className="overlap-group7" style={{ backgroundImage: `url(${overlapGroup7})` }}>
              <img className="chocolate-bar_1f36b" src={chocolateBar_1F36B} />
            </div>
            <div className="overlap-group">
              <div className="choco montserrat-black-white-32px">{choco}</div>
              <div className="finance montserrat-black-white-14px">{finance}</div>
            </div>
            <Component161
              component91Props={component161Props.component91Props}
              component921Props={component161Props.component921Props}
              component922Props={component161Props.component922Props}
              component41Props={component161Props.component41Props}
            />
          </div>
          <div className="overlap-group11">
            <div className="overlap-group14">
              <div className="flex-col">
                <div className="choco-is-building-ba montserrat-normal-white-20px">{chocoIsBuildingBa}</div>
                <Component173
                  component411Props={component173Props.component411Props}
                  component412Props={component173Props.component412Props}
                />
                <img className="bar2" src={bar21} />
              </div>
              <div className="overlap-group-container">
                <div className="overlap-group12">
                  <h1 className="how-to-participate montserrat-semi-bold-white-70px">{howToParticipate}</h1>
                  <div className="overlap-group9">
                    <Component111
                      meltingAllowsYouT={component111Props.meltingAllowsYouT}
                      component42Props={component111Props.component42Props}
                    />
                    <img className="bar1" src={bar11} />
                  </div>
                </div>
                <div className="overlap-group8">
                  <Component101
                    fire={component101Props.fire}
                    moldersPlayAnImpo={component101Props.moldersPlayAnImpo}
                    component42Props={component101Props.component42Props}
                  />
                  <img className="bar1-1" src={bar12} />
                </div>
              </div>
            </div>
            <img className="fallingchoco" src={fallingchoco} />
            <div className="thetas-nativedecen montserrat-semi-bold-white-70px">{thetaSNativeDecen}</div>
          </div>
          <div className="overlap-group10">
            <div className="rectangle-2"></div>
            <img className="bar1-2" src={bar13} />
            <img className="bar2-1" src={bar22} />
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

export default Desktop;
