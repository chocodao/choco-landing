import React from "react";
import Component121 from "../Component121";
import Component141 from "../Component141";
import Component131 from "../Component131";
import "./Component193.css";

class Component193 extends React.Component {
  render() {
    const { component121Props, component141Props, component131Props } = this.props;

    return (
      <div className="component-19-3">
        <Component121
          className={component121Props.className}
          x622369b7e403e7ddc4ce09396Props={component121Props.x622369b7e403e7ddc4ce09396Props}
        />
        <Component141
          className={component141Props.className}
          component171Props={component141Props.component171Props}
          component181Props={component141Props.component181Props}
          component18122Props={component141Props.component18122Props}
        />
        <Component131
          className={component131Props.className}
          component1511Props={component131Props.component1511Props}
          component1512Props={component131Props.component1512Props}
          component152Props={component131Props.component152Props}
          component1513Props={component131Props.component1513Props}
        />
      </div>
    );
  }
}

export default Component193;
