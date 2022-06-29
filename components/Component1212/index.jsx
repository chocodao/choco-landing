import React from "react";
import "./Component1212.css";

class Component1212 extends React.Component {
  render() {
    const {
      overlapGroup1,
      chocolateBar_1F36B,
      path3,
      iconPaper_Plane,
      choco,
      finance,
      path4,
      path5,
      path7,
    } = this.props;

    return (
      <div className="component-12-1-2">
        <div className="flex-col-10">
          <div className="overlap-group1-10" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="chocolate-bar_1f36b-18" src={chocolateBar_1F36B} />
          </div>
          <a href="https://twitter.com/chocofinance">
            <div className="x622369b6a395099f1a779d22_1-10">
              <img className="path-3-5" src={path3} />
            </div>
          </a>
          <a href="https://t.me/chocofinance">
            <div className="x622369b6bf2cca49909d6eb5_4-10">
              <img className="icon-paper_plane-5" src={iconPaper_Plane} />
            </div>
          </a>
        </div>
        <div className="flex-col-18">
          <div className="overlap-group-29">
            <div className="choco-18">{choco}</div>
            <div className="finance-18">{finance}</div>
          </div>
          <div className="b-container-3">
            <div className="x622369b64625dd72cd6e31a1_2-2">
              <img className="path-4-14" src={path4} />
            </div>
            <a href="https://github.com/chocodao">
              <div className="x622369b636f18be6eacf49c4_3-3">
                <img className="path" src={path5} />
              </div>
            </a>
          </div>
          <div className="x622369b7e403e7ddc4ce0939_6-1">
            <img className="path" src={path7} />
          </div>
        </div>
      </div>
    );
  }
}

export default Component1212;
