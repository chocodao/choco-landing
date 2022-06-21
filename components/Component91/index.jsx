import React from "react";
import "./Component91.sass";

class Component91 extends React.Component {
  render() {
    const { place, className } = this.props;

    return (
      <a href="https://app.chocofinance.com/#/mold">
        <div className={`component-9-1 ${className || ""}`}>
          <div className="overlap-group3-1">
            <div className="place montserrat-black-white-20px">{place}</div>
            <img
              className="line-2"
              src="https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-2-1@1x.png"
            />
          </div>
        </div>
      </a>
    );
  }
}

export default Component91;
