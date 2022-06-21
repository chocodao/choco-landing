import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ChocoLanding from "./components/ChocoLanding";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|choco-landing)">
            <ChocoLanding {...chocoLandingData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const component81Data = {
    melt: "MELT",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/line-1@1x.png",
};

const component911Data = {
    place: "MOLD",
};

const component912Data = {
    place: "GOVERNANCE",
    className: "component-9-2",
};

const component913Data = {
    place: "LEARN",
    className: "component-9-3",
};

const component411Data = {
    children: "ENTER APP",
};

const component412Data = {
    children: "JOIN ICO",
    className: "component-4-4",
};

const component413Data = {
    children: "FAQ",
    className: "component-4-5",
};

const component421Data = {
    children: "MELT",
};

const component422Data = {
    children: "MOLD",
    className: "component-4-3",
};

const component1511Data = {
    children: "MOLDING",
};

const component1512Data = {
    children: "MOLDING",
    className: "component-15-1",
};

const component152Data = {
    children: "MELTING",
};

const component1513Data = {
    children: "MELTING",
    className: "component-15-4",
};

const component171Data = {
    children: "DOCUMENTATION",
};

const component1712Data = {
    children: "DOCUMENTATION",
};

const component181Data = {
    children: "MEDIUM",
};

const component1812Data = {
    children: "MEDIUM",
};

const component191Data = {
    children: "JOIN CHOCO DISCORD",
};

const component1912Data = {
    children: "JOIN CHOCO DISCORD",
};

const chocoLandingData = {
    overlapGroup6: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B1: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png",
    choco1: "CHOCO",
    finance1: "FINANCE",
    thetaSNativeDecen: <React.Fragment>Theta&#x27;s Native<br />Decentralized<br />Reserve Currency</React.Fragment>,
    chocoIsBuildingBa: <React.Fragment>Choco is building BARS, a community-owned,<br />and decentralized reserve currency that is asset<br />backed, strongly liquid and Web 3.0 incentivized</React.Fragment>,
    fallingchoco: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/fallingchoco@1x.png",
    howToParticipate: "How To Participate",
    path1: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-1@1x.png",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-2@1x.png",
    quad: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/quad@1x.png",
    fire: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/fire@1x.png",
    meltingAllowsYouT: <React.Fragment>Melting allows you to trade various tokens for <br />BARS at a discounted price. This in turn, provides <br />additional liquidity and reserve assets to the Choco <br />treasury, contributing to the stability of the protocol. <br />As a result, 99% of all liquidity is owned by Choco.</React.Fragment>,
    moldersPlayAnImpo: <React.Fragment>Molders play an important role in the Choco <br />ecosystem. Molders deposit their BARS into the <br />protocol, which conttributes to BARS’ long-term <br />price stability. In exchange, molders receive their <br />share of rebases and governance rights.</React.Fragment>,
    melting: "Melting",
    molding: "Molding",
    bar11: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1x-png@1x.png",
    bar12: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1x-png@1x.png",
    bar21: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1x-png@1x.png",
    overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png",
    chocolateBar_1F36B2: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/chocolate-bar-1f36b-1@1x.png",
    iconTwitter: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-3@1x.png",
    iconPaper_Plane: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-6@1x.png",
    choco2: "CHOCO",
    finance2: "FINANCE",
    path4: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-4@1x.png",
    path5: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-5@1x.png",
    path7: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62aff5c0083bc2c240269c99/img/path-7@1x.png",
    products: "Products",
    learn: "Learn",
    contactUs: "Contact us",
    bar22: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar2-1-1x-png@1x.png",
    bar13: "https://anima-uploads.s3.amazonaws.com/projects/62aff57814356862a008027e/releases/62b11c957d7916b081a77987/img/bar1-1-1x-png@1x.png",
    component81Props: component81Data,
    component911Props: component911Data,
    component912Props: component912Data,
    component913Props: component913Data,
    component411Props: component411Data,
    component412Props: component412Data,
    component413Props: component413Data,
    component421Props: component421Data,
    component422Props: component422Data,
    component1511Props: component1511Data,
    component1512Props: component1512Data,
    component152Props: component152Data,
    component1513Props: component1513Data,
    component171Props: component171Data,
    component1712Props: component1712Data,
    component181Props: component181Data,
    component1812Props: component1812Data,
    component191Props: component191Data,
    component1912Props: component1912Data,
};

