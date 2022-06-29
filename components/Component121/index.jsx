import React from "react";
import X622369b64625dd72cd6e31a12 from "../X622369b64625dd72cd6e31a12";
import X622369b7e403e7ddc4ce09396 from "../X622369b7e403e7ddc4ce09396";
import "./Component121.css";

class Component121 extends React.Component {
  render() {
    const { className, x622369b7e403e7ddc4ce09396Props } = this.props;

    return (
      <div className={`component-12-1 ${className || ""}`}>
        <div className="flex-col-1">
          <div className="overlap-group1">
            <img className="chocolate-bar_1f36b-1" src="/img/chocolate-bar-1f36b-1@1x.png" />
          </div>
          <a href="https://twitter.com/chocofinance">
            <div className="x622369b6a395099f1a779d22_1">
              <img className="icon-twitter" src="/img/path-3@1x.png" />
            </div>
          </a>
          <a href="https://t.me/chocofinance">
            <div className="x622369b6bf2cca49909d6eb5_4">
              <img className="icon-paper_plane" src="/img/path-6@1x.png" />
            </div>
          </a>
        </div>
        <div className="flex-col-2">
          <div className="overlap-group-11">
            <div className="choco-1 montserrat-black-white-32px">CHOCO</div>
            <div className="finance-1 montserrat-black-white-14px">FINANCE</div>
          </div>
          <div className="b-container">
            <X622369b64625dd72cd6e31a12 />
            <a href="https://github.com/chocodao">
              <div className="x622369b636f18be6eacf49c4_3">
                <img className="path-5" src="/img/path-5@1x.png" />
              </div>
            </a>
          </div>
          <X622369b7e403e7ddc4ce09396 className={x622369b7e403e7ddc4ce09396Props.className} />
        </div>
      </div>
    );
  }
}

export default Component121;
