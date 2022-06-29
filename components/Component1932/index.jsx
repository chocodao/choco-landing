import React from "react";
import Component1212 from "../Component1212";
import Component1412 from "../Component1412";
import Component1312 from "../Component1312";
import "./Component1932.css";

class Component1932 extends React.Component {
  render() {
    const { component1212Props, component1412Props, component1312Props } = this.props;

    return (
      <div className="component-19-3-2">
        <Component1212 {...component1212Props} />
        <Component1412
          learn={component1412Props.learn}
          component1712Props={component1412Props.component1712Props}
          component1722Props={component1412Props.component1722Props}
          component1812Props={component1412Props.component1812Props}
          component1822Props={component1412Props.component1822Props}
        />
        <Component1312
          products={component1312Props.products}
          component15321Props={component1312Props.component15321Props}
          component15322Props={component1312Props.component15322Props}
          component1522Props={component1312Props.component1522Props}
          component15323Props={component1312Props.component15323Props}
        />
      </div>
    );
  }
}

export default Component1932;
