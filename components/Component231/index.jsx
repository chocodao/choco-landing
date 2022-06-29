import React from "react";
import Component121 from "../Component121";
import Component131 from "../Component131";
import Component141 from "../Component141";
import Component157 from "../Component157";
import "./Component231.css";

class Component231 extends React.Component {
  render() {
    const { component121Props, component131Props, component141Props, component157Props } = this.props;

    return (
      <div className="component-23-1">
        <Component121 x622369b7e403e7ddc4ce09396Props={component121Props.x622369b7e403e7ddc4ce09396Props} />
        <Component131
          component1511Props={component131Props.component1511Props}
          component1512Props={component131Props.component1512Props}
          component152Props={component131Props.component152Props}
          component1513Props={component131Props.component1513Props}
        />
        <Component141
          component171Props={component141Props.component171Props}
          component181Props={component141Props.component181Props}
          component18122Props={component141Props.component18122Props}
        />
        <Component157
          component191Props={component157Props.component191Props}
          component1912Props={component157Props.component1912Props}
        />
      </div>
    );
  }
}

export default Component231;
